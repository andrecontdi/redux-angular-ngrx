import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/store/app/app.reducers';
import { addItem } from 'src/store/entry-exit/entry-exit.actions';
import { hideLoader, showLoader } from 'src/store/ui/ui.actions';
import Swal from 'sweetalert2';
import { EntryExitService } from '../core/services/entry-exit.service';
import { EntryExit } from '../shared/models/entry-exit.model';

@Component({
  selector: 'app-entry-exit',
  templateUrl: './entry-exit.component.html',
})
export class EntryExitComponent implements OnInit, OnDestroy {
  public entryExitForm: FormGroup;
  public type = 'entry';
  public showLoader = false;
  public storeSubscription: Subscription = new Subscription();

  constructor(
    private entryExitService: EntryExitService,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.entryExitForm = this.formBuilder.group({
      description: ['', Validators.required],
      amount: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.store
      .select('ui')
      .subscribe((ui) => (this.showLoader = ui.showLoader));
  }

  public addItem(): void {
    if (this.entryExitForm.invalid) {
      return;
    }

    this.store.dispatch(showLoader());

    const { description, amount } = this.entryExitForm.value;
    const entryExit = new EntryExit(description, amount, this.type);

    this.entryExitService
      .addItem(entryExit)
      .then(() => {
        this.entryExitForm.reset();
        this.store.dispatch(hideLoader());
        // this.store.dispatch(addItem({ entryExit }));
        Swal.fire('Exito!', description, 'success');
      })
      .catch((error) => {
        this.store.dispatch(hideLoader());
        Swal.fire('Error!', error.message, 'error');
      });
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}

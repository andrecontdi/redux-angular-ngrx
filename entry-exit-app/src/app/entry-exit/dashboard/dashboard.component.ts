import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/store/app/app.reducers';
import { addItem } from 'src/store/entry-exit/entry-exit.actions';
import { EntryExitService } from '../../core/services/entry-exit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
  private storeSubscription: Subscription = new Subscription();
  private entryExitSubscription: Subscription = new Subscription();

  constructor(
    private entryExitService: EntryExitService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.storeSubscription = this.store
      .select('auth')
      .pipe(filter((auth) => auth.user !== null))
      .subscribe(() => {
        this.entryExitSubscription = this.entryExitService
          .entryExitListener()
          .subscribe((items) => {
            this.store.dispatch(addItem({ items }));
          });
      });
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }

    if (this.entryExitSubscription) {
      this.entryExitSubscription.unsubscribe();
    }
  }
}

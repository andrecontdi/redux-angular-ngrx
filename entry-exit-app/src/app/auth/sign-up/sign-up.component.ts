import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/store/app/app.reducers';
import { hideLoader, showLoader } from 'src/store/ui/ui.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit, OnDestroy {
  public signUpForm: FormGroup;
  public showLoader = false;

  private storeSubscriptiton: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.storeSubscriptiton = new Subscription();
  }

  ngOnInit(): void {
    this.storeSubscriptiton = this.store
      .select('ui')
      .subscribe((ui) => (this.showLoader = ui.showLoader));
  }

  public signUp(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this.store.dispatch(showLoader());

    this.authService
      .signUp(this.signUpForm.value)
      .then(() => {
        this.store.dispatch(hideLoader());
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.store.dispatch(hideLoader());
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  }

  ngOnDestroy(): void {
    if (this.storeSubscriptiton) {
      this.storeSubscriptiton.unsubscribe();
    }
  }
}

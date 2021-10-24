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
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public showLoader = false;

  private storeSubscriptiton: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.loginForm = this.formBuilder.group({
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

  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.store.dispatch(showLoader());

    this.authService
      .login(this.loginForm.value)
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.showLoder();

    this.authService
      .login(this.loginForm.value)
      .then(() => {
        Swal.close();
        this.router.navigate(['/dashboard']);
      })
      .catch((error) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
      );
  }

  private showLoder(): void {
    Swal.fire({
      title: 'Wait please',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
}

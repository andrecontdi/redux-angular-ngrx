import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public signUp(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this.showLoder();

    this.authService
      .signUp(this.signUpForm.value)
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

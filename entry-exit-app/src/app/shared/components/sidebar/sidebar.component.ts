import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/store/app/app.reducers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public username: string | undefined = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe(({ user }) => (this.username = user?.username));
  }

  public logOut(): void {
    this.showLoder();

    this.authService
      .logout()
      .then(() => {
        Swal.close();
        this.router.navigate(['/login']);
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

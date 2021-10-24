import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

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

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      tap((state) => {
        if (!state) {
          this.router.navigate(['/login']);
        }
      }),
      take(1)
    );
  }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      tap((state) => {
        if (!state) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

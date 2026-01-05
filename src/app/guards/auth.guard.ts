import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> | boolean {
    const token = this.authService.getToken();
    
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // If we have a token, validate it with the server
    return this.authService.getMe().pipe(
      map(() => {
        return true;
      }),
      catchError(() => {
        // Token is invalid, logout and redirect
        this.authService.logout();
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private supabaseService: SupabaseService
  ) {}

  canActivate(): boolean {
    if (this.supabaseService.isAuthenticated) {
      return true;
    }
    
    // Not authenticated, redirect to login
    this.router.navigate(['/auth-login']);
    return false;
  }
}

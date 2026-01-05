import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent, RouterLink, FormsModule],
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {
  date: any;
  email: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.date = new Date().getFullYear();
    
    // If already authenticated, redirect to services
    if (this.supabaseService.isAuthenticated) {
      this.router.navigate(['/services']);
    }
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    
    if (!this.email || !this.password) {
      this.error = 'Por favor ingrese email y contraseña';
      return;
    }

    this.error = '';
    this.loading = true;

    try {
      const { data, error } = await this.supabaseService.signIn(this.email, this.password);
      
      if (error) {
        this.error = 'Credenciales inválidas o error de conexión';
        console.error('Login error:', error);
      } else if (data.user) {
        // Login successful, navigate to services
        this.router.navigate(['/services']);
      }
    } catch (err) {
      this.error = 'Error inesperado. Por favor intente nuevamente.';
      console.error('Unexpected error:', err);
    } finally {
      this.loading = false;
    }
  }
}

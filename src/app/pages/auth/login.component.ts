import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      this.error = 'Por favor ingrese usuario y contraseña';
      return;
    }

    this.error = ''; // Clear previous errors

    this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        if (res && res.token) {
          this.authService.setAuthData(res.token);
          // Navigate to dashboard root (/) which will redirect to /services via AuthGuard
          this.router.navigate(['/']);
        } else {
          this.error = 'Respuesta inválida del servidor';
        }
      },
      error: (err: any) => {
        console.error('Login error:', err);
        this.error = 'Credenciales inválidas o error de conexión';
      },
    });
  }
}

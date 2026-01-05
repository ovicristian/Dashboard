import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from '../../../services/providers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-create-provider',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.scss'],
})
export class CreateProviderComponent {
  activeSidebar: boolean = true;
  provider = { name: '', service_id: '', description: '', email: '', phone: '' };
  error = '';
  success = '';

  constructor(
    private providersService: ProvidersService,
    private router: Router
  ) {}

  createProvider() {
    this.error = '';
    this.success = '';
    this.providersService.createProvider(this.provider).subscribe({
      next: () => {
        this.success = 'Proveedor creado exitosamente.';
        this.provider = { name: '', service_id: '', description: '', email: '', phone: '' };
      },
      error: (err) => {
        console.error('Error details:', err);
        this.error = 'Error al crear el proveedor.';
      },
    });
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}

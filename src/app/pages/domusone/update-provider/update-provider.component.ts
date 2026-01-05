import { Component } from '@angular/core';
import { ProvidersService } from '../../../services/providers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

interface ProviderUpdate {
  id: number | null;
  name: string;
  service: string;
  rating: number;
}

@Component({
  selector: 'app-update-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.scss'],
})
export class UpdateProviderComponent {
  activeSidebar: boolean = true;
  provider: { id: number; name: string; service: string; rating: number } = {
    id: 0,
    name: '',
    service: '',
    rating: 0,
  };
  error = '';
  success = '';

  constructor(private providersService: ProvidersService) {}

  updateProvider() {
    this.error = '';
    this.success = '';
    if (typeof this.provider.id === 'number' && this.provider.id > 0) {
      this.providersService.updateProvider(this.provider).subscribe({
        next: () => {
          this.success = 'Proveedor actualizado exitosamente.';
        },
        error: () => {
          this.error = 'Error al actualizar el proveedor.';
        },
      });
    } else {
      this.error = 'Debe seleccionar un proveedor válido para actualizar.';
    }
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}

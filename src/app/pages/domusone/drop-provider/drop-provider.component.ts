import { Component } from '@angular/core';
import { ProvidersService } from '../../../services/providers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-drop-provider',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './drop-provider.component.html',
  styleUrls: ['./drop-provider.component.scss'],
})
export class DropProviderComponent {
  activeSidebar: boolean = true;
  providerId: string = '';
  error = '';
  success = '';

  constructor(private providersService: ProvidersService) {}

  dropProvider() {
    this.error = '';
    this.success = '';
    if (this.providerId) {
      this.providersService.deleteProvider(this.providerId).subscribe({
        next: () => {
          this.success = 'Proveedor eliminado exitosamente.';
          this.providerId = '';
        },
        error: () => {
          this.error = 'Error al eliminar el proveedor.';
        },
      });
    }
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}

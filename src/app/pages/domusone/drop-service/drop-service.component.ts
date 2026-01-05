import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-drop-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './drop-service.component.html',
  styleUrls: ['./drop-service.component.scss'],
})
export class DropServiceComponent {
  activeSidebar: boolean = true;
  serviceId: string = '';
  error = '';
  success = '';

  constructor(private servicesService: ServicesService) {}

  dropService() {
    this.error = '';
    this.success = '';
    if (this.serviceId) {
      this.servicesService.deleteService(this.serviceId).subscribe({
        next: () => {
          this.success = 'Servicio eliminado exitosamente.';
          this.serviceId = '';
        },
        error: () => {
          this.error = 'Error al eliminar el servicio.';
        },
      });
    }
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}

import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

interface ServiceUpdate {
  id: number | null;
  name: string;
  description: string;
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
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss'],
})
export class UpdateServiceComponent {
  activeSidebar: boolean = true;
  service = { id: null, name: '', description: '' };
  error = '';
  success = '';

  constructor(private servicesService: ServicesService) {}

  updateService() {
    this.error = '';
    this.success = '';
    if (this.service.id) {
      this.servicesService.updateService(this.service).subscribe({
        next: () => {
          this.success = 'Servicio actualizado exitosamente.';
        },
        error: () => {
          this.error = 'Error al actualizar el servicio.';
        },
      });
    }
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss'],
})
export class CreateServiceComponent {
  activeSidebar: boolean = true;
  service = { name: '', description: '' };
  error = '';
  success = '';

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  createService() {
    this.error = '';
    this.success = '';
    this.servicesService.createService(this.service).subscribe({
      next: () => {
        this.success = 'Servicio creado exitosamente.';
        this.service = { name: '', description: '' };
      },
      error: (err) => {
        console.error('Error details:', err);
        this.error = 'Error al crear el servicio.';
      },
    });
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}

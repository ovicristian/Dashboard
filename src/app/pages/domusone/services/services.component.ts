import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../models/service.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Service[] = []; // Make sure this is declared
  total: number = 0;
  limit: number = 10;
  page: number = 1;
  activeSidebar: boolean = true;
  isDarkMode: boolean = false; // Default to light mode
  loading: boolean = false;
  error: string = '';

  constructor(private servicesService: ServicesService) {} // <-- Inject your service here

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  get totalPages() {
    return Math.ceil(this.total / this.limit);
  }

  ngOnInit() {
    // Example: detect dark mode using document body or a global theme service
    this.isDarkMode = document.body.classList.contains('dark');
    // Or use your app's theme service if available
    this.loadServices();
  }

  loadServices() {
    this.loading = true;
    this.error = '';
    
    this.servicesService.getServices(this.page, this.limit).subscribe({
      next: (data) => {
        console.log('Services loaded:', data); // Debug log
        this.services = data.services;
        this.total = data.total;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching services:', err);
        this.error = `Error al cargar servicios: ${err.message || 'Error de conexión'}`;
        this.loading = false;
      },
    });
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadServices();
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadServices();
    }
  }
}

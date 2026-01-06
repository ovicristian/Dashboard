import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProvidersService } from '../../../services/providers.service';
import { ServicesService } from '../../../services/services.service';
import { Provider } from '../../../models/provider.model';
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
    FormsModule,
  ],
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
})
export class ProvidersComponent implements OnInit {
  providers: Provider[] = [];
  page: number = 1;
  limit: number = 10;
  total: number = 0;
  activeSidebar: boolean = true;
  
  // Edit modal
  showEditModal: boolean = false;
  editingProvider: any = { id: '', name: '', description: '', email: '', phone: '', rating: 0, service_id: '' };
  successMessage: string = '';
  errorMessage: string = '';
  saving: boolean = false;
  isDarkMode: boolean = false; // Default to light mode
  services: Service[] = [];
  loadingServices: boolean = false;

  constructor(
    private providersService: ProvidersService,
    private servicesService: ServicesService
  ) {}

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  ngOnInit() {
    // Example: detect dark mode using document body or a global theme service
    this.isDarkMode = document.body.classList.contains('dark');
    // Or use your app's theme service if available
    this.loadProviders();
    this.loadServices();
  }

  loadServices() {
    this.loadingServices = true;
    this.servicesService.getServices(1, 100).subscribe({
      next: (data) => {
        this.services = data.services;
        this.loadingServices = false;
      },
      error: (err) => {
        console.error('Error loading services:', err);
        this.loadingServices = false;
      }
    });
  }

  loadProviders() {
    this.providersService.getProviders(this.page, this.limit).subscribe({
      next: (data) => {
        this.providers = data.providers;
        this.total = data.total;
      },
      error: (err) => {
        console.error('Error fetching providers:', err);
      },
    });
  }

  get totalPages() {
    return Math.ceil(this.total / this.limit);
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadProviders();
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadProviders();
    }
  }

  editProvider(provider: Provider) {
    // Load full provider data including service_id
    this.providersService.getProviderById(provider.id).subscribe({
      next: (fullProvider) => {
        this.editingProvider = {
          id: fullProvider.id,
          name: fullProvider.name,
          description: fullProvider.description || '',
          email: fullProvider.email || '',
          phone: fullProvider.phone || '',
          rating: fullProvider.rating || 0,
          service_id: fullProvider.service_id || ''
        };
        this.showEditModal = true;
        this.successMessage = '';
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error loading provider details:', err);
        this.errorMessage = 'Error al cargar detalles del proveedor';
      }
    });
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editingProvider = { id: '', name: '', description: '', email: '', phone: '', rating: 0, service_id: '' };
    this.successMessage = '';
    this.errorMessage = '';
  }

  saveProvider() {
    this.saving = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.providersService.updateProvider(this.editingProvider).subscribe({
      next: () => {
        this.successMessage = 'Proveedor actualizado exitosamente';
        this.saving = false;
        // Reload providers
        this.loadProviders();
        // Close modal after 1.5 seconds
        setTimeout(() => {
          this.closeEditModal();
        }, 1500);
      },
      error: (err) => {
        console.error('Error updating provider:', err);
        this.errorMessage = 'Error al actualizar el proveedor';
        this.saving = false;
      }
    });
  }
}

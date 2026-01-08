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
  editingProvider: any = { id: '', name: '', description: '', email: '', phone: '', rating: 0, hourly_rate: null, logo_url: '', serviceIds: [] };
  successMessage: string = '';
  errorMessage: string = '';
  saving: boolean = false;
  isDarkMode: boolean = false; // Default to light mode
  services: Service[] = [];
  loadingServices: boolean = false;
  selectedFile: File | null = null;
  uploadingLogo: boolean = false;
  logoPreview: string | null = null;

  // Create modal
  showCreateModal: boolean = false;
  newProvider: any = { name: '', description: '', email: '', phone: '', rating: 4.5, hourly_rate: null, logo_url: '', serviceIds: [] };
  creating: boolean = false;

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
    // Load full provider data including serviceIds
    this.providersService.getProviderById(provider.id).subscribe({
      next: (fullProvider) => {
        this.editingProvider = {
          id: fullProvider.id,
          name: fullProvider.name,
          description: fullProvider.description || '',
          email: fullProvider.email || '',
          phone: fullProvider.phone || '',
          rating: fullProvider.rating || 0,
          hourly_rate: fullProvider.hourly_rate || null,
          logo_url: fullProvider.logo_url || '',
          serviceIds: fullProvider.serviceIds || []
        };
        this.logoPreview = fullProvider.logo_url || null;
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
    this.editingProvider = { id: '', name: '', description: '', email: '', phone: '', rating: 0, hourly_rate: null, logo_url: '', serviceIds: [] };
    this.successMessage = '';
    this.errorMessage = '';
    this.selectedFile = null;
    this.logoPreview = null;
  }

  isServiceSelected(serviceId: string): boolean {
    return this.editingProvider.serviceIds.includes(serviceId);
  }

  toggleService(serviceId: string) {
    const index = this.editingProvider.serviceIds.indexOf(serviceId);
    if (index > -1) {
      // Remove service
      this.editingProvider.serviceIds.splice(index, 1);
    } else {
      // Add service
      this.editingProvider.serviceIds.push(serviceId);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.errorMessage = 'Por favor selecciona una imagen válida';
        return;
      }
      
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        this.errorMessage = 'La imagen no debe superar 2MB';
        return;
      }

      this.selectedFile = file;
      
      // Show preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeLogo() {
    this.selectedFile = null;
    this.logoPreview = null;
    if (this.showEditModal) {
      this.editingProvider.logo_url = '';
    } else if (this.showCreateModal) {
      this.newProvider.logo_url = '';
    }
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.newProvider = { name: '', description: '', email: '', phone: '', rating: 4.5, hourly_rate: null, logo_url: '', serviceIds: [] };
    this.selectedFile = null;
    this.logoPreview = null;
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.newProvider = { name: '', description: '', email: '', phone: '', rating: 4.5, hourly_rate: null, logo_url: '', serviceIds: [] };
    this.selectedFile = null;
    this.logoPreview = null;
    this.successMessage = '';
    this.errorMessage = '';
  }

  isServiceSelectedCreate(serviceId: string): boolean {
    return this.newProvider.serviceIds.includes(serviceId);
  }

  toggleServiceCreate(serviceId: string) {
    const index = this.newProvider.serviceIds.indexOf(serviceId);
    if (index > -1) {
      this.newProvider.serviceIds.splice(index, 1);
    } else {
      this.newProvider.serviceIds.push(serviceId);
    }
  }

  async createProvider() {
    this.creating = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      // First create the provider without logo
      const providerData = {
        name: this.newProvider.name,
        description: this.newProvider.description || null,
        email: this.newProvider.email || null,
        phone: this.newProvider.phone || null,
        rating: this.newProvider.rating || 4.5,
        hourly_rate: this.newProvider.hourly_rate || null
      };

      this.providersService.createProvider(providerData).subscribe({
        next: async (response) => {
          const createdProvider = response.data;
          
          // Upload logo if selected
          if (this.selectedFile && createdProvider) {
            try {
              this.uploadingLogo = true;
              const logoUrl = await this.providersService.uploadProviderLogo(
                this.selectedFile,
                createdProvider.id
              );
              
              // Update provider with logo URL
              await this.providersService.updateProvider({
                id: createdProvider.id,
                logo_url: logoUrl,
                serviceIds: this.newProvider.serviceIds
              }).toPromise();
              
              this.uploadingLogo = false;
            } catch (logoError: any) {
              console.error('Error uploading logo:', logoError);
              this.errorMessage = `Proveedor creado pero error al subir logo: ${logoError.message || 'Error desconocido'}`;
              this.uploadingLogo = false;
            }
          } else if (this.newProvider.serviceIds.length > 0) {
            // Just set services if no logo
            await this.providersService.updateProvider({
              id: createdProvider.id,
              serviceIds: this.newProvider.serviceIds
            }).toPromise();
          }

          if (!this.errorMessage) {
            this.successMessage = 'Proveedor creado exitosamente';
          }
          this.creating = false;
          this.loadProviders();
          
          setTimeout(() => {
            this.closeCreateModal();
          }, 1500);
        },
        error: (err) => {
          console.error('Error creating provider:', err);
          this.errorMessage = 'Error al crear el proveedor';
          this.creating = false;
          this.uploadingLogo = false;
        }
      });
    } catch (err) {
      console.error('Error in create process:', err);
      this.errorMessage = 'Error al crear el proveedor';
      this.creating = false;
      this.uploadingLogo = false;
    }
  }

  async saveProvider() {
    this.saving = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      // Upload logo if a new file was selected
      if (this.selectedFile) {
        this.uploadingLogo = true;
        try {
          const logoUrl = await this.providersService.uploadProviderLogo(
            this.selectedFile,
            this.editingProvider.id
          );
          this.editingProvider.logo_url = logoUrl;
          this.uploadingLogo = false;
        } catch (logoError: any) {
          console.error('Error uploading logo:', logoError);
          this.errorMessage = `Error al subir el logo: ${logoError.message || 'Error desconocido'}`;
          this.uploadingLogo = false;
          this.saving = false;
          return;
        }
      }

      // Update provider
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
          this.errorMessage = `Error al actualizar el proveedor: ${err.message || 'Error desconocido'}`;
          this.saving = false;
          this.uploadingLogo = false;
        }
      });
    } catch (err: any) {
      console.error('Error uploading logo:', err);
      this.errorMessage = `Error al subir el logo: ${err.message || 'Error desconocido'}`;
      this.saving = false;
      this.uploadingLogo = false;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProvidersService } from '../../../services/providers.service';
import { Provider } from '../../../models/provider.model';

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

  constructor(private providersService: ProvidersService) {} // <-- Inject your service here

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  ngOnInit() {
    // Example: detect dark mode using document body or a global theme service
    this.isDarkMode = document.body.classList.contains('dark');
    // Or use your app's theme service if available
    this.loadProviders();
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

  editProvider(provider: Provider) {
    this.editingProvider = {
      id: provider.id,
      name: provider.name,
      description: '',
      email: '',
      phone: '',
      rating: provider.rating,
      service_id: ''
    };
    this.showEditModal = true;
    this.successMessage = '';
    this.errorMessage = '';
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

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadProviders();
    }
  }
}

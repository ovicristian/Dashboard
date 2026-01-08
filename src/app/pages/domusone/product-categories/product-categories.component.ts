import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ProductsService } from '../../../services/products.service';
import { ProductCategory } from '../../../models/product.model';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [
    CommonModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
})
export class ProductCategoriesComponent implements OnInit {
  categories: ProductCategory[] = [];
  activeSidebar: boolean = true;
  
  // Modals
  showEditModal: boolean = false;
  showCreateModal: boolean = false;
  showDeleteModal: boolean = false;
  
  // Edit/Create category
  editingCategory: Partial<ProductCategory> = {};
  newCategory: Partial<ProductCategory> = { active: true };
  categoryToDelete: ProductCategory | null = null;
  
  // Messages
  successMessage: string = '';
  errorMessage: string = '';
  saving: boolean = false;
  creating: boolean = false;
  deleting: boolean = false;

  constructor(private productsService: ProductsService) {}

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.productsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.categories;
      },
      error: (err) => {
        console.error('Error loading categories:', err);
        this.errorMessage = 'Error al cargar las categorías';
      }
    });
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.newCategory = { active: true };
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.newCategory = { active: true };
    this.successMessage = '';
    this.errorMessage = '';
  }

  createCategory() {
    if (!this.newCategory.name || !this.newCategory.slug) {
      this.errorMessage = 'Por favor completa todos los campos obligatorios';
      return;
    }

    this.creating = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.productsService.createCategory(this.newCategory).subscribe({
      next: () => {
        this.successMessage = 'Categoría creada exitosamente';
        this.creating = false;
        this.loadCategories();
        setTimeout(() => {
          this.closeCreateModal();
        }, 1500);
      },
      error: (err) => {
        console.error('Error creating category:', err);
        this.errorMessage = 'Error al crear la categoría';
        this.creating = false;
      },
    });
  }

  editCategory(category: ProductCategory) {
    this.editingCategory = { ...category };
    this.showEditModal = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editingCategory = {};
    this.successMessage = '';
    this.errorMessage = '';
  }

  updateCategory() {
    if (!this.editingCategory.id || !this.editingCategory.name || !this.editingCategory.slug) {
      this.errorMessage = 'Por favor completa todos los campos obligatorios';
      return;
    }

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { id, ...updates } = this.editingCategory;

    this.productsService.updateCategory(id, updates).subscribe({
      next: () => {
        this.successMessage = 'Categoría actualizada exitosamente';
        this.saving = false;
        this.loadCategories();
        setTimeout(() => {
          this.closeEditModal();
        }, 1500);
      },
      error: (err) => {
        console.error('Error updating category:', err);
        this.errorMessage = 'Error al actualizar la categoría';
        this.saving = false;
      },
    });
  }

  openDeleteModal(category: ProductCategory) {
    this.categoryToDelete = category;
    this.showDeleteModal = true;
    this.errorMessage = '';
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.categoryToDelete = null;
    this.errorMessage = '';
  }

  deleteCategory() {
    if (!this.categoryToDelete) return;

    this.deleting = true;
    this.errorMessage = '';

    this.productsService.deleteCategory(this.categoryToDelete.id).subscribe({
      next: () => {
        this.deleting = false;
        this.loadCategories();
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error('Error deleting category:', err);
        this.errorMessage = 'Error al eliminar la categoría. Puede que tenga productos asociados.';
        this.deleting = false;
      },
    });
  }

  generateSlug() {
    if (this.showCreateModal && this.newCategory.name) {
      this.newCategory.slug = this.newCategory.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    } else if (this.showEditModal && this.editingCategory.name) {
      this.editingCategory.slug = this.editingCategory.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    }
  }
}

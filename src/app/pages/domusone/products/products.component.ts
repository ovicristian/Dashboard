import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ProductsService } from '../../../services/products.service';
import { Product, ProductCategory } from '../../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    DarkSidebarComponent,
    TopHeaderComponent,
    FooterComponent,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: ProductCategory[] = [];
  page: number = 1;
  limit: number = 10;
  total: number = 0;
  activeSidebar: boolean = true;
  
  // Modals
  showEditModal: boolean = false;
  showCreateModal: boolean = false;
  
  // Edit/Create product
  editingProduct: Partial<Product> = {};
  newProduct: Partial<Product> = { active: true, featured: false, stock: 0 };
  
  // Messages
  successMessage: string = '';
  errorMessage: string = '';
  saving: boolean = false;
  creating: boolean = false;
  
  // Image upload
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  uploadingImage: boolean = false;
  
  // Filter
  filterCategoryId: string = '';

  constructor(private productsService: ProductsService) {}

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadCategories() {
    this.productsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.categories;
      },
      error: (err) => {
        console.error('Error loading categories:', err);
      }
    });
  }

  loadProducts() {
    this.productsService.getProducts(this.page, this.limit, this.filterCategoryId || undefined).subscribe({
      next: (data) => {
        this.products = data.products;
        this.total = data.total;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  filterByCategory() {
    this.page = 1;
    this.loadProducts();
  }

  get totalPages() {
    return Math.ceil(this.total / this.limit);
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadProducts();
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadProducts();
    }
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.newProduct = { active: true, featured: false, stock: 0, price: 0 };
    this.selectedFile = null;
    this.imagePreview = null;
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.newProduct = { active: true, featured: false, stock: 0 };
    this.selectedFile = null;
    this.imagePreview = null;
    this.successMessage = '';
    this.errorMessage = '';
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product };
    this.imagePreview = product.image_url || null;
    this.showEditModal = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editingProduct = {};
    this.selectedFile = null;
    this.imagePreview = null;
    this.successMessage = '';
    this.errorMessage = '';
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        this.errorMessage = 'Por favor selecciona una imagen válida';
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        this.errorMessage = 'La imagen no debe superar 2MB';
        return;
      }

      this.selectedFile = file;
      
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    if (this.showEditModal) {
      this.editingProduct.image_url = '';
    } else if (this.showCreateModal) {
      this.newProduct.image_url = '';
    }
  }

  async createProduct() {
    this.creating = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      let imageUrl = '';
      
      // Upload image if selected
      if (this.selectedFile) {
        this.uploadingImage = true;
        const tempId = 'temp-' + Date.now();
        imageUrl = await this.productsService.uploadProductImage(this.selectedFile, tempId);
        this.uploadingImage = false;
      }

      const productData = {
        ...this.newProduct,
        image_url: imageUrl || this.newProduct.image_url
      };

      this.productsService.createProduct(productData).subscribe({
        next: () => {
          this.successMessage = 'Producto creado exitosamente';
          this.creating = false;
          this.loadProducts();
          
          setTimeout(() => {
            this.closeCreateModal();
          }, 1500);
        },
        error: (err) => {
          console.error('Error creating product:', err);
          this.errorMessage = 'Error al crear el producto';
          this.creating = false;
          this.uploadingImage = false;
        }
      });
    } catch (err: any) {
      console.error('Error in create process:', err);
      this.errorMessage = `Error: ${err.message || 'Error desconocido'}`;
      this.creating = false;
      this.uploadingImage = false;
    }
  }

  async saveProduct() {
    this.saving = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      // Upload new image if selected
      if (this.selectedFile) {
        this.uploadingImage = true;
        const imageUrl = await this.productsService.uploadProductImage(
          this.selectedFile,
          this.editingProduct.id!
        );
        this.editingProduct.image_url = imageUrl;
        this.uploadingImage = false;
      }

      const { id, created_at, updated_at, category, ...updates } = this.editingProduct as any;

      this.productsService.updateProduct(id!, updates).subscribe({
        next: () => {
          this.successMessage = 'Producto actualizado exitosamente';
          this.saving = false;
          this.loadProducts();
          
          setTimeout(() => {
            this.closeEditModal();
          }, 1500);
        },
        error: (err) => {
          console.error('Error updating product:', err);
          this.errorMessage = 'Error al actualizar el producto';
          this.saving = false;
          this.uploadingImage = false;
        }
      });
    } catch (err: any) {
      console.error('Error uploading image:', err);
      this.errorMessage = `Error: ${err.message || 'Error desconocido'}`;
      this.saving = false;
      this.uploadingImage = false;
    }
  }

  deleteProduct(product: Product) {
    if (confirm(`¿Estás seguro de eliminar el producto "${product.name}"?`)) {
      this.productsService.deleteProduct(product.id).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (err) => {
          console.error('Error deleting product:', err);
          alert('Error al eliminar el producto');
        }
      });
    }
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Sin categoría';
  }

  getDiscountPercentage(product: Product): number {
    if (product.discount_price && product.discount_price < product.price) {
      return Math.round(((product.price - product.discount_price) / product.price) * 100);
    }
    return 0;
  }
}

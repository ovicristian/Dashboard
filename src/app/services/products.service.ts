import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Product, ProductsApiResponse, ProductCategory, CategoriesApiResponse } from '../models/product.model';
import { SupabaseService } from './supabase.service';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private supabaseService: SupabaseService) {}

  getProducts(page: number = 1, limit: number = 10, categoryId?: string): Observable<ProductsApiResponse> {
    return from(this.supabaseService.getProducts(categoryId)).pipe(
      map((response) => {
        const products = (response.data || []) as Product[];
        return { products, total: products.length };
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return from(this.supabaseService.getProductById(id)).pipe(
      map((response) => {
        if (response.data) {
          return response.data as Product;
        }
        throw new Error('Product not found');
      })
    );
  }

  createProduct(product: Partial<Product>): Observable<any> {
    return from(this.supabaseService.createProduct(product));
  }

  updateProduct(id: string, updates: Partial<Product>): Observable<any> {
    return from(this.supabaseService.updateProduct(id, updates));
  }

  deleteProduct(id: string): Observable<any> {
    return from(this.supabaseService.deleteProduct(id));
  }

  async uploadProductImage(file: File, productId: string): Promise<string> {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${productId}-${Date.now()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await this.supabaseService.uploadFile(
        'provider-logos', // Reutilizamos el bucket existente
        filePath,
        file
      );

      if (uploadError) {
        throw new Error(`Error al subir: ${uploadError.message || JSON.stringify(uploadError)}`);
      }

      const publicUrl = await this.supabaseService.getPublicUrl('provider-logos', filePath);
      return publicUrl;
    } catch (error: any) {
      console.error('Error in uploadProductImage:', error);
      throw new Error(error.message || 'Error desconocido al subir la imagen');
    }
  }

  // Categories
  getCategories(): Observable<CategoriesApiResponse> {
    return from(this.supabaseService.getProductCategories()).pipe(
      map((response) => {
        const categories = (response.data || []) as ProductCategory[];
        return { categories, total: categories.length };
      })
    );
  }

  createCategory(category: Partial<ProductCategory>): Observable<any> {
    return from(this.supabaseService.createProductCategory(category));
  }

  updateCategory(id: string, updates: Partial<ProductCategory>): Observable<any> {
    return from(this.supabaseService.updateProductCategory(id, updates));
  }

  deleteCategory(id: string): Observable<any> {
    return from(this.supabaseService.deleteProductCategory(id));
  }
}

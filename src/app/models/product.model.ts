export interface Product {
  id: string;
  name: string;
  description?: string;
  category_id?: string;
  category?: ProductCategory; // Populated from join
  price: number;
  discount_price?: number;
  stock: number;
  sku?: string;
  image_url?: string;
  images?: string[]; // Additional images
  specifications?: Record<string, any>;
  active: boolean;
  featured: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ProductsApiResponse {
  products: Product[];
  total: number;
}

export interface CategoriesApiResponse {
  categories: ProductCategory[];
  total: number;
}

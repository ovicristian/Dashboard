import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface SupabaseConfig {
  url: string;
  anonKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.anonKey);
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();

    // Check for existing session
    this.checkSession();
  }

  private async checkSession() {
    const { data: { user } } = await this.supabase.auth.getUser();
    this.currentUserSubject.next(user);
  }

  // Authentication
  async signUp(email: string, password: string, metadata?: any) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    });

    if (data.user) {
      this.currentUserSubject.next(data.user);
    }

    return { data, error };
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (data.user) {
      this.currentUserSubject.next(data.user);
    }

    return { data, error };
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    this.currentUserSubject.next(null);
    return { error };
  }

  async resetPassword(email: string) {
    return await this.supabase.auth.resetPasswordForEmail(email);
  }

  // Database Operations
  
  // Services CRUD
  async getServices() {
    const { data, error } = await this.supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });
    return { data, error };
  }

  async getServiceById(id: string) {
    const { data, error } = await this.supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }

  async createService(service: any) {
    const { data, error } = await this.supabase
      .from('services')
      .insert(service)
      .select()
      .single();
    return { data, error };
  }

  async updateService(id: string, updates: any) {
    const { data, error } = await this.supabase
      .from('services')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  }

  async deleteService(id: string) {
    const { error } = await this.supabase
      .from('services')
      .delete()
      .eq('id', id);
    return { error };
  }

  // Providers CRUD
  async getProviders() {
    const { data, error } = await this.supabase
      .from('providers')
      .select(`
        *,
        provider_services(
          service:services(id, name)
        )
      `)
      .order('created_at', { ascending: false });
    return { data, error };
  }

  async getProviderById(id: string) {
    const { data, error } = await this.supabase
      .from('providers')
      .select(`
        *,
        provider_services(
          service:services(id, name)
        )
      `)
      .eq('id', id)
      .single();
    return { data, error };
  }

  async getProvidersByService(serviceId: string) {
    const { data, error } = await this.supabase
      .from('provider_services')
      .select(`
        provider:providers(*)
      `)
      .eq('service_id', serviceId);
    
    // Transform data to return just the providers
    const providers = data?.map((item: any) => item.provider) || [];
    return { data: providers, error };
  }

  async createProvider(provider: any) {
    const { data, error } = await this.supabase
      .from('providers')
      .insert(provider)
      .select()
      .single();
    return { data, error };
  }

  async updateProvider(id: string, updates: any) {
    const { data, error } = await this.supabase
      .from('providers')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  }

  async deleteProvider(id: string) {
    const { error } = await this.supabase
      .from('providers')
      .delete()
      .eq('id', id);
    return { error };
  }

  // Provider Services Management
  async getProviderServices(providerId: string) {
    const { data, error } = await this.supabase
      .from('provider_services')
      .select('service_id')
      .eq('provider_id', providerId);
    return { data, error };
  }

  async setProviderServices(providerId: string, serviceIds: string[]) {
    // First, delete existing services
    await this.supabase
      .from('provider_services')
      .delete()
      .eq('provider_id', providerId);

    // Then, insert new services
    if (serviceIds.length > 0) {
      const records = serviceIds.map(serviceId => ({
        provider_id: providerId,
        service_id: serviceId
      }));

      const { data, error } = await this.supabase
        .from('provider_services')
        .insert(records)
        .select();
      return { data, error };
    }

    return { data: [], error: null };
  }

  // Users/Admins CRUD
  async getUsers() {
    const { data, error } = await this.supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });
    return { data, error };
  }

  async getUserById(id: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }

  async updateUser(id: string, updates: any) {
    const { data, error } = await this.supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  }

  // File Storage
  async uploadFile(bucket: string, path: string, file: File) {
    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(path, file);
    return { data, error };
  }

  async getPublicUrl(bucket: string, path: string) {
    const { data } = this.supabase.storage
      .from(bucket)
      .getPublicUrl(path);
    return data.publicUrl;
  }

  async deleteFile(bucket: string, path: string) {
    const { error } = await this.supabase.storage
      .from(bucket)
      .remove([path]);
    return { error };
  }

  // Real-time subscriptions
  subscribeToServices(callback: (payload: any) => void) {
    return this.supabase
      .channel('services-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'services' },
        callback
      )
      .subscribe();
  }

  subscribeToProviders(callback: (payload: any) => void) {
    return this.supabase
      .channel('providers-changes')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'providers' },
        callback
      )
      .subscribe();
  }

  // ============================================
  // PRODUCTS & CATEGORIES
  // ============================================
  
  async getProducts(categoryId?: string) {
    let query = this.supabase
      .from('products')
      .select(`
        *,
        category:product_categories(id, name, slug)
      `)
      .order('created_at', { ascending: false });
    
    if (categoryId) {
      query = query.eq('category_id', categoryId);
    }
    
    const { data, error } = await query;
    return { data, error };
  }

  async getProductById(id: string) {
    const { data, error } = await this.supabase
      .from('products')
      .select(`
        *,
        category:product_categories(id, name, slug)
      `)
      .eq('id', id)
      .single();
    return { data, error };
  }

  async createProduct(product: any) {
    const { data, error } = await this.supabase
      .from('products')
      .insert(product)
      .select()
      .single();
    return { data, error };
  }

  async updateProduct(id: string, updates: any) {
    const { data, error } = await this.supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  }

  async deleteProduct(id: string) {
    const { error } = await this.supabase
      .from('products')
      .delete()
      .eq('id', id);
    return { error };
  }

  async getProductCategories() {
    const { data, error } = await this.supabase
      .from('product_categories')
      .select('*')
      .order('name', { ascending: true });
    return { data, error };
  }

  async createProductCategory(category: any) {
    const { data, error } = await this.supabase
      .from('product_categories')
      .insert(category)
      .select()
      .single();
    return { data, error };
  }

  async updateProductCategory(id: string, updates: any) {
    const { data, error } = await this.supabase
      .from('product_categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  }

  async deleteProductCategory(id: string) {
    const { error } = await this.supabase
      .from('product_categories')
      .delete()
      .eq('id', id);
    return { error };
  }

  // ============================================
  // ORDERS
  // ============================================
  
  async getOrders(status?: string) {
    let query = this.supabase
      .from('orders')
      .select(`
        *,
        items:order_items(
          *
        )
      `)
      .order('created_at', { ascending: false });
    
    if (status) {
      query = query.eq('order_status', status);
    }
    
    const { data, error } = await query;
    return { data, error };
  }

  async getOrderById(id: string) {
    const { data, error } = await this.supabase
      .from('orders')
      .select(`
        *,
        items:order_items(
          *
        )
      `)
      .eq('id', id)
      .single();
    return { data, error };
  }

  async getOrderByNumber(orderNumber: string) {
    const { data, error } = await this.supabase
      .from('orders')
      .select(`
        *,
        items:order_items(
          *
        )
      `)
      .eq('order_number', orderNumber)
      .single();
    return { data, error };
  }

  async createOrder(orderData: any) {
    // First create the order
    const { items, ...orderInfo } = orderData;
    
    // Calculate totals
    let subtotal = 0;
    const enrichedItems = [];
    
    for (const item of items) {
      const { data: product } = await this.supabase
        .from('products')
        .select('*')
        .eq('id', item.product_id)
        .single();
      
      if (product) {
        const itemSubtotal = product.price * item.quantity;
        subtotal += itemSubtotal;
        
        enrichedItems.push({
          product_id: item.product_id,
          product_name: product.name,
          product_price: product.price,
          product_image_url: product.image_url,
          quantity: item.quantity,
          subtotal: itemSubtotal
        });
      }
    }
    
    const total = subtotal + (orderInfo.delivery_fee || 0);
    
    const { data: order, error: orderError } = await this.supabase
      .from('orders')
      .insert({
        ...orderInfo,
        subtotal,
        total,
        payment_method: 'cash_on_delivery',
        order_status: 'pending'
      })
      .select()
      .single();
    
    if (orderError) {
      return { data: null, error: orderError };
    }
    
    // Then create order items
    const itemsWithOrderId = enrichedItems.map(item => ({
      ...item,
      order_id: order.id
    }));
    
    const { error: itemsError } = await this.supabase
      .from('order_items')
      .insert(itemsWithOrderId);
    
    if (itemsError) {
      return { data: null, error: itemsError };
    }
    
    // Add status history
    await this.supabase
      .from('order_status_history')
      .insert({
        order_id: order.id,
        status: 'pending',
        notes: 'Pedido creado'
      });
    
    return { data: order, error: null };
  }

  async updateOrderStatus(id: string, status: string, notes?: string) {
    const { data, error } = await this.supabase
      .from('orders')
      .update({ order_status: status })
      .eq('id', id)
      .select()
      .single();
    
    if (!error && notes) {
      // Add to history
      await this.supabase
        .from('order_status_history')
        .insert({
          order_id: id,
          status,
          notes
        });
    }
    
    return { data, error };
  }

  async deleteOrder(id: string) {
    const { error } = await this.supabase
      .from('orders')
      .delete()
      .eq('id', id);
    return { error };
  }

  async getOrderStats() {
    const { data, error } = await this.supabase
      .rpc('get_order_stats');
    return { data, error };
  }

  // Utility
  get isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  get currentUserId(): string | undefined {
    return this.currentUserSubject.value?.id;
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}

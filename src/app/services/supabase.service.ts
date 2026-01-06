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

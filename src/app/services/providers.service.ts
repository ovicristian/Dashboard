import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Provider, ProvidersApiResponse } from '../models/provider.model';
import { SupabaseService } from './supabase.service';

@Injectable({ providedIn: 'root' })
export class ProvidersService {
  constructor(private supabaseService: SupabaseService) {}

  getProviders(
    page: number = 1,
    limit: number = 10
  ): Observable<{ providers: Provider[]; total: number }> {
    return from(this.supabaseService.getProviders()).pipe(
      map((response) => {
        const rawProviders = response.data || [];
        // Map the data to transform service object to service name
        const providers = rawProviders.map((provider: any) => ({
          id: provider.id,
          name: provider.name,
          service: provider.service?.name || 'Sin servicio',
          rating: provider.rating || 0
        })) as Provider[];
        return { providers: providers, total: providers.length };
      })
    );
  }

  createProvider(provider: { name: string; service_id: string; description?: string; email?: string; phone?: string }): Observable<any> {
    return from(this.supabaseService.createProvider(provider));
  }

  deleteProvider(id: string): Observable<any> {
    return from(this.supabaseService.deleteProvider(id));
  }

  getProviderById(id: string): Observable<any> {
    return from(this.supabaseService.getProviderById(id)).pipe(
      map((response) => {
        if (response.data) {
          return response.data;
        }
        throw new Error('Provider not found');
      })
    );
  }

  updateProvider(provider: {
    id: string;
    name?: string;
    service_id?: string;
    description?: string;
    email?: string;
    phone?: string;
    rating?: number;
  }): Observable<any> {
    const { id, ...updates } = provider;
    return from(this.supabaseService.updateProvider(id, updates));
  }
}

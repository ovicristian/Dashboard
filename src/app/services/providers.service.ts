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
        // Map the data to transform services array
        const providers = rawProviders.map((provider: any) => {
          const services = provider.provider_services?.map((ps: any) => ps.service?.name).filter(Boolean) || [];
          return {
            id: provider.id,
            name: provider.name,
            service: services.length > 0 ? services.join(', ') : 'Sin servicios',
            rating: provider.rating || 0
          };
        }) as Provider[];
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
          const provider = response.data;
          // Extract service IDs from provider_services
          const serviceIds = provider.provider_services?.map((ps: any) => ps.service?.id).filter(Boolean) || [];
          return {
            ...provider,
            serviceIds: serviceIds
          };
        }
        throw new Error('Provider not found');
      })
    );
  }

  updateProvider(provider: {
    id: string;
    name?: string;
    serviceIds?: string[];
    description?: string;
    email?: string;
    phone?: string;
    rating?: number;
  }): Observable<any> {
    const { id, serviceIds, ...updates } = provider;
    
    // Update provider basic info
    return from(this.supabaseService.updateProvider(id, updates)).pipe(
      map(async (response) => {
        // Update services if provided
        if (serviceIds !== undefined) {
          await this.supabaseService.setProviderServices(id, serviceIds);
        }
        return response;
      })
    );
  }
}

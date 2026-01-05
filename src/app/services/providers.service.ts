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
        const providers = (response.data || []) as Provider[];
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

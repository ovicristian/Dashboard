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

  createProvider(provider: { 
    name: string; 
    description?: string; 
    email?: string; 
    phone?: string; 
    rating?: number;
    hourly_rate?: number;
    logo_url?: string;
  }): Observable<any> {
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
    hourly_rate?: number;
    logo_url?: string;
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

  async uploadProviderLogo(file: File, providerId: string): Promise<string> {
    try {
      console.log('Starting upload for provider:', providerId);
      console.log('File details:', { name: file.name, size: file.size, type: file.type });
      
      // Create a unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${providerId}-${Date.now()}.${fileExt}`;
      const filePath = `logos/${fileName}`;

      console.log('Uploading to path:', filePath);

      // Upload to Supabase Storage
      const { data, error: uploadError } = await this.supabaseService.uploadFile(
        'provider-logos',
        filePath,
        file
      );

      if (uploadError) {
        console.error('Upload error details:', uploadError);
        throw new Error(`Error al subir: ${uploadError.message || JSON.stringify(uploadError)}`);
      }

      console.log('Upload successful, getting public URL...');

      // Get public URL
      const publicUrl = await this.supabaseService.getPublicUrl('provider-logos', filePath);
      console.log('Public URL obtained:', publicUrl);
      
      return publicUrl;
    } catch (error: any) {
      console.error('Error in uploadProviderLogo:', error);
      throw new Error(error.message || 'Error desconocido al subir el logo');
    }
  }

  async deleteProviderLogo(logoUrl: string): Promise<void> {
    try {
      // Extract path from URL
      const url = new URL(logoUrl);
      const path = url.pathname.split('/provider-logos/')[1];
      
      if (path) {
        await this.supabaseService.deleteFile('provider-logos', path);
      }
    } catch (error) {
      console.error('Error deleting logo:', error);
      throw error;
    }
  }
}

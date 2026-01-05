import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Service, ServicesApiResponse } from '../models/service.model';
import { SupabaseService } from './supabase.service';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  constructor(private supabaseService: SupabaseService) {}

  getServices(
    page: number = 1,
    limit: number = 10
  ): Observable<{ services: Service[]; total: number }> {
    return from(this.supabaseService.getServices()).pipe(
      map((response) => {
        const services = (response.data || []) as Service[];
        return { services: services, total: services.length };
      })
    );
  }

  createService(service: { name: string; description: string }): Observable<any> {
    return from(this.supabaseService.createService(service));
  }

  deleteService(id: string): Observable<any> {
    return from(this.supabaseService.deleteService(id));
  }

  updateService(service: { id: string; name: string; description: string }): Observable<any> {
    return from(this.supabaseService.updateService(service.id, {
      name: service.name,
      description: service.description
    }));
  }
}

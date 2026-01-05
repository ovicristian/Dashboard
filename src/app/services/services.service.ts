import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Service, ServicesApiResponse } from '../models/service.model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private apiUrl = 'https://api.domusone.com.co/api/services';

  constructor(private http: HttpClient) {}

  getServices(
    page: number = 1,
    limit: number = 10
  ): Observable<{ services: Service[]; total: number }> {
    return this.http.get<ServicesApiResponse>(this.apiUrl).pipe(
      map((response) => {
        // The new API returns { message, data, note }
        const services = response.data || [];
        return { services: services, total: services.length };
      })
    );
  }

  createService(service: { name: string; description: string }) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.apiUrl}`, service, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  deleteService(id: number) {
    const token = localStorage.getItem('token');
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  updateService(service: { id: number; name: string; description: string }) {
    const token = localStorage.getItem('token');
    return this.http.put(
      `${this.apiUrl}/${service.id}`,
      { name: service.name, description: service.description },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
}

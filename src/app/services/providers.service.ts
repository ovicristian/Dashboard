import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Provider, ProvidersApiResponse } from '../models/provider.model';

@Injectable({ providedIn: 'root' })
export class ProvidersService {
  private apiUrl = 'https://api.domusone.com.co/api/providers';

  constructor(private http: HttpClient) {}

  getProviders(
    page: number = 1,
    limit: number = 10
  ): Observable<{ providers: Provider[]; total: number }> {
    return this.http.get<ProvidersApiResponse>(this.apiUrl).pipe(
      map((response) => {
        // The new API returns { message, data, note }
        const providers = response.data || [];
        return { providers: providers, total: providers.length };
      })
    );
  }

  createProvider(provider: { name: string; service: string; rating: number }) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.apiUrl}`, provider, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  deleteProvider(id: number) {
    const token = localStorage.getItem('token');
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  updateProvider(provider: {
    id: number;
    name: string;
    service: string;
    rating: number;
  }) {
    const token = localStorage.getItem('token');
    return this.http.put(
      `${this.apiUrl}/${provider.id}`,
      {
        name: provider.name,
        service: provider.service,
        rating: provider.rating,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
}

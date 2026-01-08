import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface Order {
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  customer_address?: string;
  payment_method?: string;
  total_amount: number;
  items?: any[];
  created_at?: string;
  notes?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService {
  // URL de la Supabase Edge Function
  private readonly emailFunctionUrl = `${environment.supabase.url}/functions/v1/send-email`;
  
  constructor(private http: HttpClient) {}

  sendOrderConfirmation(order: Order): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.supabase.anonKey}`,
      'Content-Type': 'application/json'
    });

    const payload = {
      type: 'order-confirmation',
      order: order
    };

    return this.http.post<EmailResponse>(this.emailFunctionUrl, payload, { headers }).pipe(
      catchError((error) => {
        console.error('Error enviando email:', error);
        return of({ success: false, error: error.message });
      })
    );
  }

  sendOrderStatusUpdate(order: Order, newStatus: string, notes?: string): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.supabase.anonKey}`,
      'Content-Type': 'application/json'
    });

    const payload = {
      type: 'order-status-update',
      order: order,
      newStatus: newStatus,
      notes: notes
    };

    return this.http.post<EmailResponse>(this.emailFunctionUrl, payload, { headers }).pipe(
      catchError((error) => {
        console.error('Error enviando email:', error);
        return of({ success: false, error: error.message });
      })
    );
  }
}

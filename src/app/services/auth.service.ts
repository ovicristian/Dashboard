import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, catchError, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://api.domusone.com.co/api';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuthState();
  }

  private checkAuthState(): void {
    const token = this.getToken();
    if (token) {
      // Validate token by calling /me endpoint
      this.validateToken().subscribe({
        next: (user) => {
          this.isLoggedInSubject.next(true);
          this.currentUserSubject.next(user);
        },
        error: () => {
          // Token is invalid, remove it
          this.logout();
        }
      });
    }
  }

  private validateToken(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/me`).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password });
  }

  setAuthData(token: string): void {
    localStorage.setItem('token', token);
    this.isLoggedInSubject.next(true);
    
    // Get user info after login
    this.getMe().subscribe({
      next: (user) => {
        this.currentUserSubject.next(user);
      }
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token') && this.isLoggedInSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getMe(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/me`);
  }
}

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get the token from localStorage
  const token = localStorage.getItem('token');
  
  // If token exists and the request is to our API, add Authorization header
  if (token && (req.url.includes('/api/') || req.url.includes('api.domusone.com.co'))) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }
  
  return next(req);
};

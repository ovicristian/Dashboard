import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    return true;
  } else {
    window.location.href = '/login';
    return false;
  }
};

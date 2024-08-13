import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    // Lógica de autenticação
    return true; // ou UrlTree, Observable, Promise, etc.
  };
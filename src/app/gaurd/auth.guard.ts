import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is logged in (asynchronously)
  const isLoggedIn = await firstValueFrom(authService.isLoggedIn());

  if (isLoggedIn) {
    return true;
  } else {
    // Redirect to login page if not authenticated
    router.navigate(['login']);
    return false;
  }
};

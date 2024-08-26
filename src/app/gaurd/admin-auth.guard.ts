import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const adminAuthGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is logged in (asynchronously)
  const isLoggedIn = await firstValueFrom(authService.isAdmin());

  if (isLoggedIn) {
    return true;
  } else {
    // Redirect to login page if not authenticated
    router.navigate(['/dashboard/home']);
    return false;
  }
};

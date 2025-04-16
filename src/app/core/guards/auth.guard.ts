// auth0.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map, tap } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuardFn: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const auth = isPlatformBrowser(platformId) ? inject(AuthService) : null;
  // Server-side handling
  if (!auth) {
    console.log('Server side - deferring auth to client');
    return true; // Let client handle auth after hydration
  }

  // Client-side handling
  return auth.isAuthenticated$.pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        auth.loginWithRedirect({
          appState: { target: state.url },
        });
      }
    }),
    map((isAuthenticated) => isAuthenticated),
  );
};

import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { authHttpInterceptorFn } from '@auth0/auth0-angular';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { CustomTheme } from './theme';
import { provideAuth0Config } from './auth.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: CustomTheme,
      },
    }),
    provideAuth0Config(),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideAnimationsAsync(),
  ],
};

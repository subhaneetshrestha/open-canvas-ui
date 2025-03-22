import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { CustomTheme } from './theme';

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
  ],
};

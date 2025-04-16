import { Routes } from '@angular/router';

import { authGuardFn } from '@core/guards/auth.guard';
import { ROUTE } from '@shared/constants/route.constant';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@layouts/public/public.routes').then((route) => route.publicRoutes),
  },
  {
    path: ROUTE.WORKSPACE,
    canActivate: [authGuardFn],
    loadChildren: () =>
      import('@layouts/private/private.routes').then((route) => route.privateRoutes),
  },
];

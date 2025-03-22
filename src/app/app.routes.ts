import { Routes } from '@angular/router';
import { ROUTE } from '@shared/constants/route.constant';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@layouts/public/public.routes').then((route) => route.publicRoutes),
  },
  {
    path: ROUTE.WORKSPACE,
    loadChildren: () =>
      import('@layouts/private/private.routes').then((route) => route.privateRoutes),
  },
];

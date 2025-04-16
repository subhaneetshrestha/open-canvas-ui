import { Routes } from '@angular/router';
import { ROUTE } from '@shared/constants/route.constant';

export const publicRoutes: Routes = [
  {
    path: ROUTE.AUTHORIZE,
    loadComponent: () =>
      import('@features/callback/callback.component').then(
        (component) => component.CallbackComponent,
      ),
  },
  {
    path: ROUTE.GET_STARTED,
    loadComponent: () =>
      import('@features/home/home.component').then((component) => component.HomeComponent),
  },
];

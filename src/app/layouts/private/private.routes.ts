import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@layouts/private/private.component').then((component) => component.PrivateComponent),
    children: [
      {
        path: 'board',
        loadComponent: () =>
          import('@features/board/board.component').then((component) => component.BoardComponent),
      },
    ],
  },
];

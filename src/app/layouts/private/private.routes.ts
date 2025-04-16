import { Routes } from '@angular/router';

import { projectGuard } from '@core/guards/project.guard';
import { workspaceGuard } from '@core/guards/workspace.guard';

export const privateRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@layouts/private/private.component').then((component) => component.PrivateComponent),
    children: [
      {
        path: '',
        canActivate: [workspaceGuard],
        loadComponent: () =>
          import('@features/workspace/workspace.component').then(
            (component) => component.WorkspaceComponent,
          ),
      },
      {
        path: ':boardName',
        canActivate: [projectGuard],
        loadComponent: () =>
          import('@features/board/board.component').then((component) => component.BoardComponent),
      },
    ],
  },
];

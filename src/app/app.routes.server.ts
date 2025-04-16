import { RenderMode, ServerRoute } from '@angular/ssr';
import { ROUTE } from '@shared/constants/route.constant';

export const serverRoutes: ServerRoute[] = [
  {
    path: ROUTE.WORKSPACE,
    renderMode: RenderMode.Prerender,
  },
  {
    path: `${ROUTE.WORKSPACE}/:boardName`,
    renderMode: RenderMode.Client,
  },
  {
    path: ROUTE.AUTHORIZE,
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

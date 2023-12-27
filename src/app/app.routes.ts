import { Route } from '@angular/router';
import { PageNotFoundComponent } from './shared/ui/page-not-found/page-not-found.component';

export const routes: Route[] = [
   {
      path: '',
      loadComponent: () => import('./home/feature/home.component').then(c => c.HomeComponent)
   },
   {
      path: 'blog',
      loadComponent: () => import('./blog/feature/posts/posts.component').then(c => c.PostsComponent)
   },
   {
      path: 'about',
      loadComponent: () => import('./about/feature/about.component').then(c => c.AboutComponent)
   },
   // {
   //    path: '**',
   //    component: PageNotFoundComponent
   // }
];

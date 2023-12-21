import { Route } from '@angular/router';
import { HomeComponent } from './home/feature/home.component';
import { PageNotFoundComponent } from './shared/ui/page-not-found/page-not-found.component';

export const routes: Route[] = [
   {
      path: '',
      component: HomeComponent
   },
   // {
   //    path: ':slug'
   // },
   // {
   //    path: 'blog',
   // },
   // {
   //    path: 'about'
   // },
   {
      path: '**',
      component: PageNotFoundComponent
   }
];

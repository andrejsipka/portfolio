import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './shared/ui/nav-menu/nav-menu.component';

@Component({
   standalone: true,
   imports: [
      RouterModule,
      NavMenuComponent
   ],
   selector: 'app-root',
   template: `
      <app-nav-menu></app-nav-menu>
      <router-outlet></router-outlet>
   `,
})
export class AppComponent {
   title = 'portfolio';
}

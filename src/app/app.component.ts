import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './shared/ui/nav-menu/nav-menu.component';
import { FooterComponent } from './shared/ui/footer/footer.component';

@Component({
   standalone: true,
   imports: [
      RouterModule,
      NavMenuComponent,
      FooterComponent
   ],
   selector: 'app-root',
   template: `
      <app-nav-menu></app-nav-menu>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
   `,
})
export class AppComponent {
   title = 'portfolio';
}

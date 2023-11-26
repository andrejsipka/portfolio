import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeToggleComponent } from "../../components/theme-toggle/theme-toggle.component";

@Component({
   selector: "app-nav-menu",
   standalone: true,
   imports: [
      CommonModule,
      ThemeToggleComponent
   ],
   template: `
      <div>
         Navigation

         <app-theme-toggle></app-theme-toggle>
      </div>
   `,
})
export class NavMenuComponent { }

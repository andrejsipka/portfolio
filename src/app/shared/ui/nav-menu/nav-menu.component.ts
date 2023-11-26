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
         <div>Andrej Sipka</div>

         <div>
            <nav>
               <ul>
                  <li><a>Projects</a></li>
                  <li><a>Blog</a></li>
                  <li><a>About</a></li>
               </ul>
            </nav>
         </div>
         <app-theme-toggle></app-theme-toggle>
      </div>
   `,
})
export class NavMenuComponent { }

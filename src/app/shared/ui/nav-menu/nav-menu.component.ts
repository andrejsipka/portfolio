import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeToggleComponent } from "../../components/theme-toggle/theme-toggle.component";
import { RouterModule } from "@angular/router";

@Component({
   selector: "app-nav-menu",
   standalone: true,
   imports: [
      CommonModule,
      ThemeToggleComponent,
      RouterModule
   ],
   template: `
      <header class="site-header">
         <div class="site-header__container">
            <div class="site-header__container-layout">
               <div class="site-header__logo">
                  <a routerLink="/" class="link">Andrej Sipka</a>
               </div>

               <div class="site-header__nav-container">
                  <nav class="site-header__nav">
                     <ul class="site-header__list">
                        <li class="site-header__item">
                           <a routerLink="/blog" class="link">Blog</a>
                        </li>
                        <li class="site-header__item">
                           <a routerLink="/about" class="link">About</a>
                        </li>
                     </ul>
                  </nav>

                  <app-theme-toggle></app-theme-toggle>
               </div>
            </div>
         </div>
      </header>
   `,
   styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent { }

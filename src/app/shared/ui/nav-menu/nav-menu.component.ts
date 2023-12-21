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
                  <a routerLink="/" class="button variant--link link--secondary">Andrej Sipka</a>
               </div>

               <div class="site-header__nav-container">
                  <nav class="site-header__nav">
                     <ul class="site-header__list">
                        <li class="site-header__item">
                           <a routerLink="/blog" class="button variant--link link--secondary">Blog</a>
                        </li>
                        <li class="site-header__item">
                           <a routerLink="/about" class="button variant--link link--secondary">About</a>
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

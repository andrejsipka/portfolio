import { Component, inject } from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
   selector: "app-footer",
   standalone: true,
   imports: [
      CommonModule,
      RouterModule
   ],
   template: `
   <footer class="footer">
      <div class="footer__container">
         <div class="footer__container-layout">
            <div class="footer__layout">
               <svg width="100%" height="2" viewBox="0 0 1312 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line class="dashed-divider" x1="0.5" y1="0.5" x2="1311.5" y2="0.499885" stroke-linecap="round" stroke-dasharray="1 15"/>
               </svg>

               <div class="footer__links">
                  <section class="footer-contact">
                     <ul class="footer-contact__list">
                        <li class="footer-contact__item">
                           <a class="link">
                              Email
                              <i class="material-symbols-outlined">mail</i>
                           </a>
                        </li>

                        <li class="footer-contact__item">
                           <a routerLink="/" class="link">
                              LinkedIn
                              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                           </a>
                        </li>
                     </ul>
                  </section>

                  <nav class="footer-nav">
                     <ul class="footer-nav__list">
                        <li class="footer-nav__item">
                           <a routerLink="/blog" class="link">Blog</a>
                        </li>
                        <li class="footer-nav__item">
                           <a routerLink="/about" class="link">About</a>
                        </li>

                        <li class="footer-nav__item">
                           <button type="button" (click)="scrollToTop()" class="button">
                              Scroll to top
                              <i class="material-symbols-outlined">arrow_upward</i>
                           </button>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   </footer>`,
   styleUrl: "./footer.component.scss",
})
export class FooterComponent { 
   private readonly document: Document = inject(DOCUMENT);

   public scrollToTop(): void {
      this.document.defaultView?.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth'
      });
   }
}

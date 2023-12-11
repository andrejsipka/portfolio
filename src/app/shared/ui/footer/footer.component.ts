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
                           <a>
                              Email
                              <i class="material-symbols-outlined">mail</i>
                           </a>
                        </li>

                        <li class="footer-contact__item">
                           <a routerLink="/">
                              LinkedIn
                              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                           </a>
                        </li>
                     </ul>
                  </section>

                  <nav class="footer-nav">
                     <ul class="footer-nav__list">
                        <li class="footer-nav__item">
                           <a routerLink="/blog">Blog</a>
                        </li>
                        <li class="footer-nav__item">
                           <a routerLink="/about">About</a>
                        </li>

                        <li class="footer-nav__item">
                           <button type="button" (click)="scrollToTop()">
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

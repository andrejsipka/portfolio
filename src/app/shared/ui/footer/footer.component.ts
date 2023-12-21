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
                           <a class="button variant--link link--secondary">Email</a>
                        </li>

                        <li class="footer-contact__item">
                           <a routerLink="/" class="button variant--link link--secondary">LinkedIn</a>
                        </li>
                     </ul>
                  </section>

                  <nav class="footer-nav">
                     <ul class="footer-nav__list">
                        <li class="footer-nav__item">
                           <a routerLink="/blog" class="button variant--link link--secondary">Blog</a>
                        </li>
                        <li class="footer-nav__item">
                           <a routerLink="/about" class="button variant--link link--secondary">About</a>
                        </li>

                        <li class="footer-nav__item">
                           <button type="button" (click)="scrollToTop()" class="button variant--link link--secondary">
                              Scroll to top
                              <i class="button__icon material-symbols-outlined">arrow_upward</i>
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

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
   selector: "app-article-item",
   standalone: true,
   imports: [CommonModule],
   template: `
      <article class="blog-post">
         <div class="blog-post__wrapper">
            <time class="blog-post__time" datetime="2023-11-23T20:00:00">
               <a>25 November 2023</a>
            </time>

            <div class="blog-post__body">
               <h2 class="heading heading--medium heading--font-weight-medium">
                  <a>Dark / Light mode  with dynamically loaded CSS theme</a>
               </h2>
               <p class="text">
                  There is multiple ways how to make changing themes but 
                  I will follow the one done by angular material theme. This approach is implemented also on my portfolio.
               </p>

               <div>
                  <a routerLink="/about" class="button button--link">
                     Read  <i class="material-symbols-outlined">arrow_forward</i>
                  </a>
               </div>
            </div>
         </div>  
      </article>
   `,
   styleUrl: "./article-item.component.scss",
})
export class ArticleItemComponent { }

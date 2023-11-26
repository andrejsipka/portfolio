import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
   selector: "portfolio-page-not-found",
   standalone: true,
   imports: [CommonModule],
   template: `
      404
      Page not found
   `,
})
export class PageNotFoundComponent { }

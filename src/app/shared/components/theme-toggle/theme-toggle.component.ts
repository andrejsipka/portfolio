import { Component, Inject } from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";

@Component({
   selector: "app-theme-toggle",
   standalone: true,
   imports: [CommonModule],
   template: `
      <button type="button" (click)="toggleTheme()">
         <i class="material-symbols-outlined">{{ isDark ? 'nightlight' : 'light_mode'}}</i>
      </button>
   `
})
export class ThemeToggleComponent {
   public isDark: boolean = true;

   constructor(
      @Inject(DOCUMENT) private document: Document,
   ) {

   }

   public getThemeName(): string {
      return this.isDark ? 'dark' : 'light';
   }


   public toggleTheme(): void {
      this.isDark = !this.isDark;

      console.log('is dark:', this.isDark)
   }


}

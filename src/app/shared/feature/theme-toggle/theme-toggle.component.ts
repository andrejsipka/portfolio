import { Component, inject } from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";

@Component({
   selector: "app-theme-toggle",
   standalone: true,
   imports: [CommonModule],
   template: `
      <button type="button" (click)="toggleTheme()" class="theme-button" [ngClass]="isDark ? 'theme-button--light' : 'theme-button--dark'">  
         <i class="material-symbols-outlined">{{ isDark ? 'light_mode' : 'nightlight'}}</i>
      </button>
   `,
   styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
   private readonly document: Document = inject(DOCUMENT);

   public isDark: boolean = true;

   constructor() {
      this.initializeThemeFromPreferences();
   }

   public initializeThemeFromPreferences(): void {
      /**
       * Global window calls in SSR
       * The correct way to use window, is by injecting the document @Inject(DOCUMENT) private readonly doc: Document, and then using it this.doc.defaultView.
       * Initialize based on the prefers-color-scheme media query.
       */
      this.isDark = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

      // Remove initial theme set
      const initialTheme = this.document.getElementById('client-theme');

      if (initialTheme) {
         initialTheme.parentElement?.removeChild(initialTheme);
      }

      const themeLink = this.document.createElement('link');
      themeLink.id = 'client-theme';
      themeLink.rel = 'stylesheet';
      themeLink.href = `${this.getThemeName()}-theme.css`;
      this.document.head.appendChild(themeLink);

      // #IMPROVEMENTS Check if link has been appended to the document or finished the downloading to set transition after loading theme
   }

   public getThemeName(): string {
      return this.isDark ? 'dark' : 'light';
   }

   public toggleTheme(): void {
      this.isDark = !this.isDark;
      this.updateRenderedTheme();
   }

   private updateRenderedTheme(): void {
      // If we're calling this method, the user has explicitly interacted with the theme toggle.
      const customLinkElement = this.document.getElementById('client-theme') as HTMLLinkElement | null;

      console.log('exist', customLinkElement);
      if (customLinkElement) {
         customLinkElement.href = `${this.getThemeName()}-theme.css`;
      }
   }
}

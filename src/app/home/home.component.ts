import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LavaBackgroundComponent } from './ui/lava-background/lava-background.component';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './ui/project-card/project-card.component';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [
      CommonModule,
      LavaBackgroundComponent,
      RouterModule,
      ProjectCardComponent
   ],
   templateUrl: './home.component.html',
   styleUrl: './home.component.scss',
})
export class HomeComponent { }

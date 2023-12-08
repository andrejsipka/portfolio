import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LavaBackgroundComponent } from '../shared/components/lava-background/lava-background.component';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [CommonModule, LavaBackgroundComponent],
   templateUrl: './home.component.html',
   styleUrl: './home.component.scss',
})
export class HomeComponent { }

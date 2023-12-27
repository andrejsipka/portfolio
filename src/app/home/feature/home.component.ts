import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LavaBackgroundComponent } from '../ui/lava-background/lava-background.component';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from '../ui/project-card/project-card.component';
import { ArticleItemComponent } from '../../shared/ui/article-item/article-item.component';
import { BlogService } from '../data-access/blog.service';
import { Observable } from 'rxjs';
import { ProjectService } from '../data-access/project.service';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [
      CommonModule,
      LavaBackgroundComponent,
      RouterModule,
      ProjectCardComponent,
      ArticleItemComponent
   ],
   templateUrl: './home.component.html',
   styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
   protected blogService = inject(BlogService);
   protected projectService = inject(ProjectService);

   public posts$: Observable<any[]> = this.blogService.getRecentBlogs();
   public projects$: Observable<any[]> = this.projectService.getProjects();
   
   public ngOnInit(): void {
      this.blogService.getRecentBlogs();
   }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from '../ui/project-card/project-card.component';
import { ArticleItemComponent } from '../../shared/ui/article-item/article-item.component';
import { BlogService } from '../data-access/blog.service';
import { Observable } from 'rxjs';
import { ProjectService } from '../data-access/project.service';
import { PostsService } from 'src/app/shared/data-access/posts.service';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [
      CommonModule,
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
   protected postsService = inject(PostsService);

   public posts$: Observable<any[]> = this.blogService.getRecentBlogs();
   public projects$: Observable<any[]> = this.projectService.getProjects();

   constructor() {
      this.postsService.getPosts();
   }
   
   public ngOnInit(): void {
      this.blogService.getRecentBlogs();

   }
}

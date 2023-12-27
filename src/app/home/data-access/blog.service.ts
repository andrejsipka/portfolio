import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of } from 'rxjs';
import { recentArticles } from 'src/assets/data/data';

type RecentArticles = {
   id: number,
   title: string,
   description: string
}

@Injectable({
   providedIn: 'root'
})
export class BlogService {
   public getRecentBlogs(): Observable<RecentArticles[]> {
      return of(recentArticles).pipe(
         delay(1000 * Math.random()),
         catchError((err) => { 
            throw new Error(err.message)
         })
      );
   }
}

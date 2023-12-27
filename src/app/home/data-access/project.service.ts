import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ProjectService {
   public getProjects(): Observable<{id: number}[]> {
      return of([{id: 1}, {id: 2}, {id: 3}]).pipe(
         delay(1000 * Math.random()),
         catchError((err) => { 
            throw new Error(err.message)
         })
      );
   }
}

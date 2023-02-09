import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelpPageService {
  constructor(private http: HttpClient) { }


  getPageContents(pageId: string | undefined) {
    return this.http.get<any>(`/assets/${pageId}.json`)
      .pipe(
        map(content => {
          return content;
        }),
        catchError(error => {
          console.error(`Error while retrieving page contents for pageId ${pageId}: `, error);
          return of(null);
        })
      );
  }


  getTreeStructure() {
    return this.http.get<any>('/assets/tree-structure.json')
      .pipe(catchError(error => {
        console.error('Error while retrieving tree structure: ', error);
        return of([]);
      }));
  }

}

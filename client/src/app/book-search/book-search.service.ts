import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from '../book';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";


@Injectable()
export class BookSearchService {

  private booksUrl = '/api/books/search';

  constructor(private http: Http) {
  }

  search(name: string): Observable<Book[]> {
    return this.http
      .get(`${this.booksUrl}/${name}`)
      .map((r: Response) => r.json().data as Book[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

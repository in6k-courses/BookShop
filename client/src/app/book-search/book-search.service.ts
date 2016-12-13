import {Injectable}     from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {Book}           from '../book';

import 'rxjs/add/operator/toPromise';

import {Category} from '../categories';

@Injectable()
export class BookSearchService {

  category: Category;

  private categoryUrl = '/api/books/category';

  constructor(private http: Http) {
  }

  getBooks(): Promise<Book[]> {
    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

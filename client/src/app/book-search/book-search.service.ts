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
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }


  getBooks(): Promise<Book[]> {
    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);

  }

  getBook(id: number): Promise<Book[]> {
    return this.getBooks()
      .then(books => books.find(book => book.category === id));
  }

  search(id: number): Promise<Book[]> {
    return this.getBook(id)
      .then(books => books.find(book => book.category === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

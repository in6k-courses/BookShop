import {Injectable}    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Book} from './book';
import {Observable} from "rxjs";

@Injectable()
export class BookService {
  private bookUrl = '/api/books/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getBooks(): Promise<Book[]> {
    return this.http.get(this.bookUrl)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  getBook(id: number): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.id === id));
  }

  create(bookName : string, author : string, category: number): Promise<Book> {
    return this.http
      .post(this.bookUrl, JSON.stringify({name: bookName, author: author, category: category}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(book: Book): Promise<Book> {
    return this.http
      .put(this.bookUrl, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(() => book)
      .catch(this.handleError);
  }


  delete(id: number): Promise<void> {
    return this.http.delete(this.bookUrl+id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

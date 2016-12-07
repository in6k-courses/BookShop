import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Book }           from '../book';
@Injectable()
export class BookSearchService {
  constructor(private http: Http) {}
  search(name: string): Observable<Book[]> {
    return this.http
      .get(`api/books?q=${name}`)
      .map((r: Response) => r.json() as Book[]);
  }
}

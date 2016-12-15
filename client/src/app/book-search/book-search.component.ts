import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { BookSearchService } from './book-search.service';
import { Book } from '../book';

@Component({
  selector: 'book-search',
  templateUrl: 'book-search.component.html',
  styleUrls: [ 'book-search.component.css' ],
  providers: [BookSearchService]
})
export class BookSearchComponent implements OnInit {
  books: Observable<Book[]>;
  private searchName = new Subject<string>();

  constructor(
    private bookSearchService: BookSearchService,
    private router: Router) {}

  search(name: string): void {
    this.searchName.next(name);
  }

  ngOnInit(): void {
    this.books = this.searchName
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(name => name
        ? this.bookSearchService.search(name)
        : Observable.of<Book[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Book[]>([]);
      });
  }

  gotoDetail(book: Book): void {
    this.search("");
    this.router.navigate(['/books/', book.id]);
  }
}

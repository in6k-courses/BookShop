import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';
import {BookSearchService} from './book-search.service';
import {Book} from '../book';
@Component({
  moduleId: module.id.toString(),
  selector: 'book-search',
  templateUrl: 'book-search.component.html',
  styleUrls: ['book-search.component.css'],
  providers: [BookSearchService]
})
export class BookSearchComponent implements OnInit {
  books: Observable<Book[]>;
  private searchTerms = new Subject<string>();

  constructor(private bookSearchService: BookSearchService,
              private router: Router) {
  }

  search(name: string): void {
    this.searchTerms.next(name);
  }

  ngOnInit(): void {
    this.books = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.bookSearchService.search(term)
        : Observable.of<Book[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Book[]>([]);
      });
  }

}

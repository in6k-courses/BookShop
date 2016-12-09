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
  books: Book[];

  private searchTerms = new Subject<string>();

  constructor(private bookSearchService: BookSearchService,
              private router: Router) {
  }

  search(id: number): void {
    this.searchTerms.next(name);
  }

  getBooks(): void {
    this.bookSearchService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooks();
  }


}

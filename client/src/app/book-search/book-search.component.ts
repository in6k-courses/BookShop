import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Subject}           from 'rxjs/Subject';
import {BookSearchService} from './book-search.service';
import {Book} from '../book';
import {Observable} from "rxjs";
@Component({

  selector: 'book-search',
  templateUrl: 'book-search.component.html',
  styleUrls: ['book-search.component.css'],
  providers: [BookSearchService]
})
export class BookSearchComponent {
  books: Book[];

  private searchName = new Subject<string>();

  constructor(private bookSearchService: BookSearchService) {
  }

  search(name: string): void {

  }

}

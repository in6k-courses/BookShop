import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Book }         from '../book';
import { BookService }  from '../book.service';
@Component({
  moduleId: module.id.toString(),
  selector: 'book-detail',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.css']
})
export class BooksDetailComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

   save(): void {
     this.bookService.update(this.book)
       .then(bookService => this.goBack());
   }

  goBack(): void {
    this.location.back();
  }
}

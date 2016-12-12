import {Component} from '@angular/core';

import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id.toString(),
  selector: 'add-book',
  templateUrl: 'add-book.component.html',
  styleUrls: ['add-book.component.css']
})
export class AddBookComponent {
  books: Book[];
  book: Book;

  constructor(private router: Router, private bookService: BookService) {
  }

  add(name: string, author: string, category: number): void {
    this.bookService.create(name, author, category)
      .then(book => {
        this.books.push(book);
      });
  }
}

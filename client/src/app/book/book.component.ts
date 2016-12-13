import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'books',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  book: Book;

  constructor(private router: Router,
              private bookService: BookService) {
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }


  ngOnInit(): void {
    this.getBooks();
  }

  delete(book: Book): void {
    this.bookService
      .delete(book.id)
      .then(() => {
        this.books = this.books.filter(h => h !== book);
      });
  }

  showBook(book: Book): void {
    this.router.navigate(['/detail', book.id]);
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'books',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  book: Book;
  selectedBook: Book;

  constructor(private router: Router,
              private bookService: BookService) {
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }


  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  add(book: Book): void {
    alert(book);
    this.bookService.create(book)
      .then(book => {
        this.books.push(book);
      });
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

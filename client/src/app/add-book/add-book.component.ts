import {Component} from '@angular/core';

import {Book} from '../book';
import { Location } from '@angular/common';
import {BookService} from '../book.service';
import {CategoryService} from "../categories/categories.service";
import {Category} from "../categories";
import {Shop} from "../shop";

@Component({
  selector: 'add-book',
  templateUrl: 'add-book.component.html',
  styleUrls: ['add-book.component.css']
})
export class AddBookComponent {
  books: Book[];
  book: Book;
  categories: Category[];
  category: Category;

  constructor( private bookService: BookService,
               private categoryService: CategoryService,
               private location: Location) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  add(name: string, author: string, category: number): void {
    this.bookService.create(name, author, category)
      .then(book => {
        this.books.push(book);
      });
  }

  goBack(): void {
    this.location.back();
  }

}

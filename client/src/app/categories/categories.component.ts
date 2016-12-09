import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { BookService } from '../book.service';
import {CategoryService} from './categories.service';
import {Category} from "../categories";
import {Book} from "../book";

@Component({
  moduleId: module.id.toString(),
  selector: 'categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  books: Book[];
  category: Category;

  constructor(private router: Router,
              private categoryService: CategoryService,
              private bookService: BookService
  ) {
  }

  getBooksByCategory(id: number): void{
    this.bookService.getBooksByCategory(id);

  }

  getCategories(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}

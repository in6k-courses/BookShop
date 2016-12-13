import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { BookService } from '../book.service';
import {CategoryService} from './categories.service';
import {Category} from "../categories";
import {Book} from "../book";

@Component({
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
  ) {
  }

  getBooksByCategory(category: Category): void{
    this.router.navigate(['categories/', category.id]);

  }

  getCategories(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  showBooks(category: Category){
    this.router.navigate(['/', category.id]);
  }


}

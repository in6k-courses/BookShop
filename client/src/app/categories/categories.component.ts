import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CategoryService} from './categories.service';
import {Category} from "../categories";

@Component({
  moduleId: module.id.toString(),
  selector: 'categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  category: Category;

  constructor(private router: Router,
              private categoryService: CategoryService) {
  }

  getCategories(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}

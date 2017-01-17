import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {CategoryService} from "../categories/categories.service";
import {Category} from "../categories";

@Component({
  selector: 'books-category',
  templateUrl: 'books-category.component.html',
  styleUrls: ['books-category.component.css']
})
export class BooksCategoryComponent implements OnInit {
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.categoryService.getCategory(+params['id']))
      .subscribe(categories => this.category = categories);
  }

  goBack(): void {
    this.location.back();
  }
}

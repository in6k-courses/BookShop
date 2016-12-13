import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Category} from '../categories';
import {Book} from "../book";

@Injectable()
export class CategoryService {
  private categoryUrl = '/api/categories/';

  constructor(private http: Http) {
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(response => response.json() as Category[])
      .catch(this.handleError);

  }

  getCategory(id: number): Promise<Category> {
    return this.getCategories()
      .then(categories => categories.find(category => category.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

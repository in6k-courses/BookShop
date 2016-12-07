import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Category} from '../categories';

@Injectable()
export class CategoryService {
  private categoryUrl = '/api/categories/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(response => response.json() as Category[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

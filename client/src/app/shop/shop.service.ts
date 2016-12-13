import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Shop} from '../shop';

@Injectable()
export class ShopService {
  private shopUrl = '/api/shops/';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  getShops(): Promise<Shop[]> {
    return this.http.get(this.shopUrl)
      .toPromise()
      .then(response => response.json() as Shop[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

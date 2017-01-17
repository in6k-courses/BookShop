import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Shop} from '../shop';
import {ShopService} from './shop.service';

@Component({
  selector: 'shops',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css']
})
export class ShopComponent implements OnInit {
  shops: Shop[];
  shop: Shop;

  constructor(private router: Router,
              private shopService: ShopService) {
  }

  getShops(): void {
    this.shopService.getShops().then(shops => this.shops = shops);
  }

  ngOnInit(): void {
    this.getShops();
  }

}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from './shop.service';
export var ShopComponent = (function () {
    function ShopComponent(router, shopService) {
        this.router = router;
        this.shopService = shopService;
    }
    ShopComponent.prototype.getShops = function () {
        var _this = this;
        this.shopService.getShops().then(function (shops) { return _this.shops = shops; });
    };
    ShopComponent.prototype.ngOnInit = function () {
        this.getShops();
    };
    ShopComponent = __decorate([
        Component({
            selector: 'shops',
            templateUrl: 'shop.component.html',
            styleUrls: ['shop.component.css']
        }), 
        __metadata('design:paramtypes', [Router, ShopService])
    ], ShopComponent);
    return ShopComponent;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/shop/shop.component.js.map
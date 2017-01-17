var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
export var BooksDetailComponent = (function () {
    function BooksDetailComponent(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
    }
    BooksDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.bookService.getBook(+params['id']); })
            .subscribe(function (book) { return _this.book = book; });
    };
    BooksDetailComponent.prototype.save = function () {
        var _this = this;
        this.bookService.update(this.book)
            .then(function (bookService) { return _this.goBack(); });
    };
    BooksDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BooksDetailComponent = __decorate([
        Component({
            selector: 'book-detail',
            templateUrl: 'book-details.component.html',
            styleUrls: ['book-details.component.css']
        }), 
        __metadata('design:paramtypes', [BookService, ActivatedRoute, Location])
    ], BooksDetailComponent);
    return BooksDetailComponent;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/book-details/book-details.component.js.map
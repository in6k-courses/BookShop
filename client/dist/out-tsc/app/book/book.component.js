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
import { BookService } from '../book.service';
export var BookComponent = (function () {
    function BookComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
    }
    BookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    BookComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BookComponent.prototype.delete = function (book) {
        var _this = this;
        this.bookService
            .delete(book.id)
            .then(function () {
            _this.books = _this.books.filter(function (h) { return h !== book; });
        });
    };
    BookComponent.prototype.showBook = function (book) {
        this.router.navigate(['/detail', book.id]);
    };
    BookComponent = __decorate([
        Component({
            selector: 'books',
            templateUrl: 'book.component.html',
            styleUrls: ['book.component.css']
        }), 
        __metadata('design:paramtypes', [Router, BookService])
    ], BookComponent);
    return BookComponent;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/book/book.component.js.map
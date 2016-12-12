var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.bookUrl = '/api/books/';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.bookUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.getBook = function (id) {
        return this.getBooks()
            .then(function (books) { return books.find(function (book) { return book.id === id; }); });
    };
    BookService.prototype.getBooksByCategory = function (id) {
        return this.getBooks()
            .then(function (books) { return books.find(function (book) { return book.category === id; }); });
    };
    BookService.prototype.create = function (bookName, author, category) {
        return this.http
            .post(this.bookUrl, JSON.stringify({ name: bookName, author: author, category: category }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.update = function (book) {
        return this.http
            .put(this.bookUrl, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function () { return book; })
            .catch(this.handleError);
    };
    BookService.prototype.delete = function (id) {
        var url = this.bookUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BookService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], BookService);
    return BookService;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/book.service.js.map
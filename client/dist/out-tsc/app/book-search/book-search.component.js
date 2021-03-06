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
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BookSearchService } from './book-search.service';
export var BookSearchComponent = (function () {
    function BookSearchComponent(bookSearchService, router) {
        this.bookSearchService = bookSearchService;
        this.router = router;
        this.searchTerms = new Subject();
    }
    BookSearchComponent.prototype.search = function (name) {
        this.searchTerms.next(name);
    };
    BookSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.bookSearchService.search(term)
            : Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable.of([]);
        });
    };
    BookSearchComponent = __decorate([
        Component({
            moduleId: module.id.toString(),
            selector: 'book-search',
            templateUrl: 'book-search.component.html',
            styleUrls: ['book-search.component.css'],
            providers: [BookSearchService]
        }), 
        __metadata('design:paramtypes', [BookSearchService, Router])
    ], BookSearchComponent);
    return BookSearchComponent;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/book-search/book-search.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksDetailComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ShopComponent } from './shop/shop.component';
import { BooksCategoryComponent } from './books-category/books-category.component';
import { CategoryComponent } from './categories/categories.component';
var routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BookComponent },
    { path: 'search', component: BookSearchComponent },
    { path: 'detail/:id', component: BooksDetailComponent },
    { path: 'books/new', component: AddBookComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'categories', component: CategoryComponent },
    { path: 'categories/:id', component: BooksCategoryComponent }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/app-routing.module.js.map
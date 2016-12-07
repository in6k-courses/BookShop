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
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksDetailComponent } from './book-details/book-details.component';
import { BookService } from './book.service';
import { BookSearchService } from './book-search/book-search.service';
import { BookSearchComponent } from './book-search/book-search.component';
import { ShopService } from './shop/shop.service';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './categories/categories.component';
import { CategoryService } from './categories/categories.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                AppRoutingModule
            ],
            declarations: [
                AppComponent,
                BookComponent,
                BooksDetailComponent,
                BookSearchComponent,
                ShopComponent,
                CategoryComponent
            ],
            providers: [
                BookService,
                BookSearchService,
                ShopService,
                CategoryService
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/app.module.js.map
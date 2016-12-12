import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {AppComponent}        from './app.component';
import {BookComponent}  from './book/book.component';
import {BooksDetailComponent}  from './book-details/book-details.component';
import {BookService}          from './book.service';
import {BookSearchService}     from './book-search/book-search.service'
import {BookSearchComponent}     from './book-search/book-search.component'
import {ShopService}     from './shop/shop.service'
import {ShopComponent}     from './shop/shop.component'
import {AddBookComponent}     from './add-book/add-book.component'
import {CategoryComponent}  from './categories/categories.component';
import  {CategoryService}   from './categories/categories.service';


import {HttpModule}    from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
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
})
export class AppModule {
}

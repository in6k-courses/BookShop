import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent }   from './book/book.component';
import { BooksDetailComponent }   from './book-details/book-details.component';
import { BookSearchComponent }    from './book-search/book-search.component';
import { ShopComponent }    from './shop/shop.component';
import { CategoryComponent }    from './categories/categories.component';

const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books',  component: BookComponent },
    { path: 'search',  component: BookSearchComponent },
    {path: 'detail/:id',  component: BooksDetailComponent },
    {path: 'shop',  component: ShopComponent },
    {path: 'categories',  component: CategoryComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

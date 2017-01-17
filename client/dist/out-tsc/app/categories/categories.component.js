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
import { CategoryService } from './categories.service';
export var CategoryComponent = (function () {
    function CategoryComponent(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
    }
    CategoryComponent.prototype.getBooksByCategory = function (category) {
        this.router.navigate(['categories/', category.id]);
    };
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (categories) { return _this.categories = categories; });
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryComponent.prototype.showBooks = function (category) {
        this.router.navigate(['/', category.id]);
    };
    CategoryComponent = __decorate([
        Component({
            selector: 'categories',
            templateUrl: 'categories.component.html',
            styleUrls: ['categories.component.css']
        }), 
        __metadata('design:paramtypes', [Router, CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/categories/categories.component.js.map
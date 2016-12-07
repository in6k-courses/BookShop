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
export var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.categoryUrl = '/api/categories/';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.categoryUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CategoryService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], CategoryService);
    return CategoryService;
}());
//# sourceMappingURL=/home/employee/IdeaProjects/BookShop/client/src/app/categories/categories.service.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _book_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book-list/book-list.component */ "./src/app/book/book-list/book-list.component.ts");
/* harmony import */ var _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book/edit-book/edit-book.component */ "./src/app/book/edit-book/edit-book.component.ts");


var routes = [
    { path: 'books', component: _book_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__["BookListComponent"] },
    { path: 'books/add', component: _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_1__["EditBookComponent"] },
    { path: 'books/:id', component: _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_1__["EditBookComponent"] },
    { path: '', redirectTo: '/books', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <bs-header></bs-header>\n    </div>\n  </div>\n  <div class=\"row\">\n   <div class=\"col\">\n    <bs-navbar></bs-navbar>\n   </div>\n  </div>\n  <div class=\"row\">\n   <div class=\"col\"> \n     <router-outlet></router-outlet>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _book_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book/book-list/book-list.component */ "./src/app/book/book-list/book-list.component.ts");
/* harmony import */ var _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/edit-book/edit-book.component */ "./src/app/book/edit-book/edit-book.component.ts");
/* harmony import */ var _book_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book/search-form/search-form.component */ "./src/app/book/search-form/search-form.component.ts");
/* harmony import */ var _book_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book/table/table.component */ "./src/app/book/table/table.component.ts");
/* harmony import */ var _book_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book/pagination/pagination.component */ "./src/app/book/pagination/pagination.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _book_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__["BookListComponent"],
                _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_6__["EditBookComponent"],
                _book_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__["SearchFormComponent"],
                _book_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _book_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book-list/book-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/book/book-list/book-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-list-title {\n    padding: 10px;\n\n}"

/***/ }),

/***/ "./src/app/book/book-list/book-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/book/book-list/book-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"book-list-title\">Borrowed Book List</h1>\n  <div class=\"row\">\n    <div class=\"col\">\n      <bs-search-form></bs-search-form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <bs-table [books]=\"bookList\"></bs-table>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <bs-pagination [totalItems]=\"bookList.length\" [pageSize]=\"5\" (onPageSelected)=\"changePage($event)\">\n      </bs-pagination>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book/book-list/book-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/book/book-list/book-list.component.ts ***!
  \*******************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/book/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService) {
        this.bookService = bookService;
        this.bookList = [];
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.bookList = this.bookService.getAll();
    };
    BookListComponent.prototype.changePage = function (newPage) {
        console.log("[BookListComponent] New pagination page: ", newPage);
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book/edit-book/edit-book.component.css":
/*!********************************************************!*\
  !*** ./src/app/book/edit-book/edit-book.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-edit-table {\n    padding: 40px 20px;\n}"

/***/ }),

/***/ "./src/app/book/edit-book/edit-book.component.html":
/*!*********************************************************!*\
  !*** ./src/app/book/edit-book/edit-book.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"bookForm\" (submit)=\"onSubmit()\" class=\"form-edit-table\">\n\t<div class=\"form-group row\">\n\t\t<label for=\"title\" class=\"col-2 col-form-label\">Title</label>\n\t\t<div class=\"col-10\">\n\t\t\t<input class=\"form-control\" type=\"text\" id=\"title\" placeholder=\"Title\"\n\t\t\t\tformControlName=\"title\">\n\t\t\t\n\t\t\t<small class=\"text-danger\" \n\t\t\t\t*ngIf=\"bookForm.controls.title.touched && bookForm.controls.title.errors?.required\">\n\t\t\t\tTitle is required</small>\n\n\t\t\t<small class=\"text-danger\" \n\t\t\t\t*ngIf=\"bookForm.controls.title.touched && bookForm.controls.title.errors?.minlength\">\n\t\t\t\tTitle should be at least two characters long</small>\n\t\t</div>\n  </div>\n  \n  <div class=\"form-group row\">\n      <label for=\"author\" class=\"col-2 col-form-label\">Author</label>\n      <div class=\"col-10\">\n        <input class=\"form-control\" type=\"text\" id=\"author\" placeholder=\"Author\"\n          formControlName=\"author\">\n        <small class=\"text-danger\" \n          *ngIf=\"bookForm.controls.author.touched && bookForm.controls.author.errors?.required\">\n          Author is required</small>\n      </div>\n    </div>\n\n\t<div class=\"form-group row\">\n\t\t<label for=\"year\" class=\"col-2 col-form-label\">Year</label>\n\t\t<div class=\"col-10\">\n\t\t\t<input class=\"form-control\" type=\"number\" id=\"year\" placeholder=\"Year\"\n\t\t\t\tformControlName=\"year\">\n\t\t\t<small class=\"text-danger\" \n\t\t\t\t*ngIf=\"bookForm.controls.year.touched && bookForm.controls.year.errors?.required\">\n\t\t\t\tYear is required</small>\n\t\t</div>\n\t</div>\n\n\n\n\t<div class=\"form-group row\">\n\t\t<label for=\"country\" class=\"col-2 col-form-label\">Country</label>\n\t\t<div class=\"col-10\">\n\t\t\t<input class=\"form-control\" type=\"text\" id=\"country\" placeholder=\"Country\"\n\t\t\t\tformControlName=\"country\">\n\t\t\t<small class=\"text-danger\" \n\t\t\t\t*ngIf=\"bookForm.controls.country.touched && bookForm.controls.country.errors?.required\">\n\t\t\t\tCountry is required</small>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group row\">\n\t\t<label for=\"borrower\" class=\"col-2 col-form-label\">Borrower</label>\n\t\t<div class=\"col-10\">\n\t\t\t<input class=\"form-control\" type=\"text\" id=\"borrower\" placeholder=\"Borrower\"\n\t\t\t\tformControlName=\"borrower\">\n\t\t\t<small class=\"text-danger\" \n\t\t\t\t*ngIf=\"bookForm.controls.borrower.touched && bookForm.controls.borrower.errors?.required\">\n\t\t\t\tBorrower is required</small>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"form-group row float-right\">\n\t\t<div class=\"col-12\">\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\"\n\t\t\t\t[disabled]=\"bookForm.invalid\">Submit</button>\n\t\t</div>\n\t</div>\n</form>"

/***/ }),

/***/ "./src/app/book/edit-book/edit-book.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/book/edit-book/edit-book.component.ts ***!
  \*******************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/book.model */ "./src/app/book/model/book.model.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/book.service */ "./src/app/book/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(fb, bookService, router, route) {
        this.fb = fb;
        this.bookService = bookService;
        this.router = router;
        this.route = route;
        this.createForm();
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        if (id) {
            this.book = this.bookService.get(Number(id));
            this.bookForm.patchValue(this.book);
        }
    };
    EditBookComponent.prototype.createForm = function () {
        this.bookForm = this.fb.group({
            'title': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            'author': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'year': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'country': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'borrower': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    EditBookComponent.prototype.onSubmit = function () {
        var submittedBook = new _model_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"](this.bookForm.value);
        if (this.book && this.book._id) {
            submittedBook._id = this.book._id;
            this.bookService.update(submittedBook);
        }
        else {
            this.bookService.add(submittedBook);
        }
        this.bookForm.reset();
        this.router.navigate(['books/']);
    };
    EditBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-edit-book',
            template: __webpack_require__(/*! ./edit-book.component.html */ "./src/app/book/edit-book/edit-book.component.html"),
            styles: [__webpack_require__(/*! ./edit-book.component.css */ "./src/app/book/edit-book/edit-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/book/model/book.model.ts":
/*!******************************************!*\
  !*** ./src/app/book/model/book.model.ts ***!
  \******************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(obj) {
        this._id = obj && obj._id || null;
        this.title = obj && obj.title || null;
        this.author = obj && obj.author || null;
        this.year = obj && obj.year || null;
        this.country = obj && obj.country || null;
        this.borrower = obj && obj.borrower || null;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/book/pagination/pagination.component.css":
/*!**********************************************************!*\
  !*** ./src/app/book/pagination/pagination.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/pagination/pagination.component.html":
/*!***********************************************************!*\
  !*** ./src/app/book/pagination/pagination.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <nav aria-label=\"Page navigation example\">\n      <ul class=\"pagination justify-content-center\">\n        \n        <li class=\"page-item\" (click)=\"pageSelected(activePage-1)\" *ngIf=\"activePage>1\">\n          <a class=\"page-link\">Previous</a>\n        </li>\n        \n        <li class=\"page-item\" *ngFor=\"let i of pages\" (click)=\"pageSelected(i)\" [ngClass]=\"{'active': i==activePage}\">\n          <a class=\"page-link\">{{i}}</a>\n        </li>\n        \n        <li class=\"page-item\" (click)=\"pageSelected(activePage+1)\" *ngIf=\"activePage<getNoPages()\">\n          <a class=\"page-link\">Next</a>\n        </li>\n      \n      </ul>\n    </nav>\n    </div>"

/***/ }),

/***/ "./src/app/book/pagination/pagination.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/book/pagination/pagination.component.ts ***!
  \*********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.activePage = 1;
        this.onPageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.getNoPages = function () {
        return Math.ceil(this.totalItems / this.pageSize);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.pages = [];
        for (var i = 1; i <= this.getNoPages(); i++) {
            this.pages.push(i);
        }
    };
    PaginationComponent.prototype.pageSelected = function (newPage) {
        if (newPage >= 1 && newPage <= this.getNoPages()) {
            this.activePage = newPage;
            this.onPageSelected.emit(this.activePage);
        }
        console.log("Active page set to: ", this.activePage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "onPageSelected", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/book/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/book/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/book/search-form/search-form.component.css":
/*!************************************************************!*\
  !*** ./src/app/book/search-form/search-form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/search-form/search-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/book/search-form/search-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/search-form/search-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/book/search-form/search-form.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/book/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/book/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/book/services/book.service.ts":
/*!***********************************************!*\
  !*** ./src/app/book/services/book.service.ts ***!
  \***********************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/book.model */ "./src/app/book/model/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BOOKS = [{ "_id": 1, "title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "year": 1890, "country": "Great Britain", "borrower": "Maria Lane" }, { "_id": 2, "title": "Dopler", "author": "Erlend Loe", "year": 2004, "country": "Norway", "borrower": "Anita Smith" }, { "_id": 3, "title": "Naive. Super", "author": "Erlend Loe", "year": 2006, "country": "Norway", "borrower": " John Doe" }, { "_id": 4, "title": "Magic Belgrade", "author": "Momo Kapor", "year": 2008, "country": "Serbia", "borrower": "Will Rige" }, { "_id": 5, "title": "A man called Ove", "author": "Fredrik Backman", "year": 2014, "country": "Sweden", "borrower": "Atria Mao" }, { "_id": 6, "title": "Island", "author": "Mesa Selimovic", "year": 1974, "country": "Serbia", "borrower": "Mia Golding" }, { "_id": 7, "title": "Fortress", "author": "Mesa Selimovic", "year": 1970, "country": "Serbia", "borrower": "Lorem Ipsum" }, { "_id": 8, "title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "year": 1981, "country": "Great Britain", "borrower": "Joao Deno" }, { "_id": 9, "title": "Summerhill", "author": "A.S.Neill", "year": 1960, "country": "Great Britain", "borrower": "Hart Willing" }, { "_id": 10, "title": "Anna Karenina", "author": "Leo Tolstoy", "year": 1878, "country": "Russia", "borrower": "Sergey Stamin" }];
var BookService = /** @class */ (function () {
    function BookService() {
        this.bookList = [];
        this.lastId = 10;
        for (var _i = 0, BOOKS_1 = BOOKS; _i < BOOKS_1.length; _i++) {
            var bookObj = BOOKS_1[_i];
            this.bookList.push(new _model_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](bookObj));
        }
    }
    BookService.prototype.getAll = function () {
        return this.bookList;
    };
    BookService.prototype.get = function (id) {
        var book = this.bookList.find(function (book) { return book._id == id; });
        return book;
    };
    BookService.prototype.add = function (newBook) {
        this.lastId += 1;
        newBook._id = this.lastId;
        this.bookList.push(newBook);
    };
    BookService.prototype.remove = function (id) {
        var index = this.bookList.findIndex(function (book) { return book._id == id; });
        if (index > -1) {
            this.bookList.splice(index, 1);
        }
    };
    BookService.prototype.update = function (editedBook) {
        var index = this.bookList.findIndex(function (book) { return book._id == editedBook._id; });
        this.bookList[index] = editedBook;
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/book/table/table.component.css":
/*!************************************************!*\
  !*** ./src/app/book/table/table.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/table/table.component.html":
/*!*************************************************!*\
  !*** ./src/app/book/table/table.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Title<button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span></button> </th>\n        <th>Author<button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span></button> </th>\n        <th>Year <button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span></button> </th>\n        <th>Country <button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span></button> </th>\n        <th>Borrower<button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span></button> </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of books\">\n        <td>{{ book.title }}</td>\n        <td>{{ book.author }}</td>\n        <td>{{ book.year }}</td>\n        <td>{{ book.country }}</td>\n        <td>{{ book.borrower }}</td>\n        <td><button class=\"btn btn-link\" (click)=\"onDelete(book._id)\"><span class=\"fa fa-remove\"></span></button></td>\n        <td><button class=\"btn btn-link\" [routerLink]=\"['/books/', book._id]\"><span class=\"fa fa-edit\"></span></button></td>\n      </tr>\n    </tbody>\n  </table>\n  "

/***/ }),

/***/ "./src/app/book/table/table.component.ts":
/*!***********************************************!*\
  !*** ./src/app/book/table/table.component.ts ***!
  \***********************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/book/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = /** @class */ (function () {
    function TableComponent(bookService) {
        this.bookService = bookService;
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.onDelete = function (id) {
        // console.log('Deleting book ', id);
        this.bookService.remove(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "books", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/book/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/book/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/images/books.jpg\" alt=\"books\" class=\"img-fluid rounded\">"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n  <a class=\"navbar-brand\">Book Shelf</a>\n\n  <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/books']\">Home</a>\n        </li>\n    \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/books/add']\">Add book</a>\n        </li>\t\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\">About books</a>\n    </li>\n  </ul>\n\n</nav>"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbookair/Desktop/book-shelf/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
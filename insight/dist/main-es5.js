(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/appnav/appnav.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/appnav/appnav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Insight </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/products\">Products <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/orders\">Orders</a>\r\n      </li>\r\n    </ul>\r\n      <ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex\">\r\n\r\n        <li class=\"nav-item\" style=\"padding: 0 20px; font-size: 1.4em\">\r\n          <a class=\"nav-link p-2\" routerLink=\"/cart\" style=\"color:#fff\">\r\n            <i class=\"fas fa-shopping-cart\"></i> <span class=\"badge badge-light\" style=\"margin-left: 8px\" *ngIf=\"cart.length\">{{cart.length}}</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-appnav></app-appnav>\r\n<div class=\"container\">\r\n  <div class=\"py-5 text-center\"><h2>Cart</h2></div>\r\n\r\n  <div class=\"row\" *ngIf=\"cart.length; else noItemsInCart\">\r\n    <div class=\"col-md-4 order-md-2 mb-4\">\r\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n        <span class=\"text-muted\">Your cart</span>\r\n        <span class=\"badge badge-secondary badge-pill\">{{cart.length}}</span>\r\n      </h4>\r\n      <ul class=\"list-group mb-3\">\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n          <span>Total (USD)</span> <strong>{{cartTotal | currency}}</strong>\r\n        </li>\r\n      </ul>\r\n      <button class=\"btn btn-primary btn-block\" routerLink=\"/checkout\">Checkout</button>\r\n    </div>\r\n    <div class=\"col-md-8 order-md-1\">\r\n      <ul class=\"list-group mb-3\">\r\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let item of cart\">\r\n          <div class=\"flex-grow-1\">\r\n            <h6 class=\"my-0\">{{item.name}}</h6>\r\n            <small class=\"text-muted\">{{item.description}}</small>\r\n          </div>\r\n          <div class=\"d-flex align-items-center\">\r\n            <h4 class=\"my-0\">{{item.price | currency}}</h4>\r\n          </div>\r\n          <div class=\"d-flex align-items-center\">\r\n            <button class=\"btn\" (click)=\"removeItemFromCart(item)\"><i class=\"far fa-times-circle\"></i></button>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #noItemsInCart>\r\n    <h2 class=\"text-center\">Your Cart is empty</h2>\r\n  </ng-template>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-appnav></app-appnav>\r\n<div class=\"container\">\r\n  <div class=\"py-5 text-center\">\r\n    <h2>Checkout</h2>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"cart.length; else noItemsInCart\">\r\n    <div class=\"col-md-4 order-md-2 mb-4\">\r\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n        <span class=\"text-muted\">Your cart</span>\r\n        <span class=\"badge badge-secondary badge-pill\">{{cart.length}}</span>\r\n      </h4>\r\n      <ul class=\"list-group mb-3\">\r\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let item of cart\">\r\n          <div>\r\n            <h6 class=\"my-0\">{{item.name}}</h6>\r\n            <small class=\"text-muted\">{{item.description}} </small>\r\n          </div>\r\n          <span class=\"text-muted\">{{item.price | currency}}</span>\r\n        </li>\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n          <span>Total (USD)</span>\r\n          <strong>{{cartTotal | currency}}</strong>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 order-md-1\">\r\n      <h4 class=\"mb-3\">Billing address</h4>\r\n      <form class=\"needs-validation\" novalidate=\"\" [formGroup]=\"checkoutForm\" (ngSubmit)=\"doCheckout()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 mb-3\">\r\n            <label for=\"firstName\">First name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required=\"\" formControlName=\"firstName\">\r\n            <div class=\"invalid-feedback\">Valid first name is required.</div>\r\n          </div>\r\n          <div class=\"col-md-6 mb-3\">\r\n            <label for=\"lastName\">Last name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required=\"\" formControlName=\"lastName\">\r\n            <div class=\"invalid-feedback\">Valid last name is required.</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <label for=\"email\">Email <span class=\"text-muted\"></span></label>\r\n          <input type=\"email\" email class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" formControlName=\"email\">\r\n          <div class=\"invalid-feedback\">Please enter a valid email address for shipping updates.</div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <label for=\"address\">Address</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required=\"\" formControlName=\"addressOne\">\r\n          <div class=\"invalid-feedback\">Please enter your shipping address.</div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\r\n          <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\" formControlName=\"addressTwo\">\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5 mb-3\">\r\n            <label for=\"country\">Country</label>\r\n            <select class=\"custom-select d-block w-100\" id=\"country\" required=\"\" formControlName=\"country\">\r\n              <option value=\"\">Choose...</option>\r\n              <option>United States</option>\r\n            </select>\r\n            <div class=\"invalid-feedback\">Please select a valid country.</div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"state\">State</label>\r\n            <select class=\"custom-select d-block w-100\" id=\"state\" required=\"\" formControlName=\"state\">\r\n              <option value=\"\">Choose...</option>\r\n              <option>California</option>\r\n            </select>\r\n            <div class=\"invalid-feedback\">Please provide a valid state.</div>\r\n          </div>\r\n          <div class=\"col-md-3 mb-3\">\r\n            <label for=\"zip\">Zip</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required=\"\" formControlName=\"zip\">\r\n            <div class=\"invalid-feedback\">Zip code required.</div>\r\n          </div>\r\n        </div>\r\n\r\n        <hr class=\"mb-4\">\r\n        <button class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!checkoutForm.valid\" type=\"submit\">Place Order</button>\r\n      </form>\r\n      <div id=\"snackbar\"></div>\r\n    </div>\r\n  </div>\r\n  <ng-template #noItemsInCart>\r\n    <h2 class=\"text-center\">Your Cart is empty</h2>\r\n  </ng-template>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-appnav></app-appnav>\r\n<div class=\"container\">\r\n  <br><br>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card text-white bg-secondary mb-3\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text d-flex justify-content-around\">\r\n            <i class=\"fas fa-5x fa-box\"></i> <span class=\"statsNum\">{{orders.length}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-white bg-success mb-3\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text d-flex justify-content-around\">\r\n            <i class=\"fas fa-5x fa-money-bill-alt\"></i> <span class=\"statsNum\">{{totalEarnings(orders) | currency}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n\r\n      <div class=\"card text-white bg-info mb-3\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text d-flex justify-content-around\">\r\n            <i class=\"fas fa-5x fa-sticky-note\"></i> <span class=\"statsNum\">{{totalItems(orders)}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card mt-2\" *ngFor=\"let order of orders\">\r\n    <div class=\"card-body p-0 pl-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col d-flex flex-column justify-content-center\">\r\n          <h5 class=\"card-title\">Address</h5>\r\n          <p class=\"card-text\">\r\n            Name: {{order.firstName}} {{order.lastName}}<br />\r\n            Address: {{order.addressOne}}<br />\r\n            Address: {{order.addressTwo}} <br />\r\n            {{order.country}}, {{order.state}}, {{order.zip}}<br />\r\n          </p>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h5 class=\"card-title\">Order Items</h5>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\" *ngFor=\"let item of order.items\">{{item.name}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer text-muted text-right\">\r\n      <b>\r\n        Order Id: {{order._id}} <br>\r\n        Total: {{orderTotal(order.items) | currency}}\r\n      </b>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productlist/productlist.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productlist/productlist.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-appnav></app-appnav>\r\n<section class=\"jumbotron text-center\">\r\n  <div class=\"container\">\r\n    <h1 class=\"jumbotron-heading\">Learn Code</h1>\r\n    <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\r\n    <p>\r\n      <a href=\"\" class=\"btn btn-primary my-2\">Get Started</a>\r\n    </p>\r\n  </div>\r\n</section>\r\n<div class=\"album py-5 bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\" *ngFor=\"let item of products\">\r\n        <div class=\"card mb-4 shadow-sm\">\r\n          <img class=\"card-img-top\"\r\n               alt=\"Thumbnail [100%x225]\"\r\n               style=\" width: 100%; display: block;\"\r\n               [src]=\"item.image\"\r\n               data-holder-rendered=\"true\" />\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-text\">{{item.name}}</h4>\r\n            <p class=\"card-text\">{{item.description | truncate: [140, '...']}}</p>\r\n            <div class=\"d-flex justify-content-between align-items-center\">\r\n              <h2 class=\"card-text\">{{item.price | currency}}</h2>\r\n              <button type=\"button\" class=\"btn\" (click)=\"addItemToCart(item)\" [class.btn-outline-primary]=\"itemInCart(item).length\">\r\n                <i class=\"fas fa-shopping-cart\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'insight';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _appnav_appnav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appnav/appnav.component */ "./src/app/appnav/appnav.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/truncate.pipe.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_8__["ProductlistComponent"],
                _appnav_appnav_component__WEBPACK_IMPORTED_MODULE_9__["AppnavComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__["PagenotfoundComponent"],
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_13__["TruncatePipe"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["APP_ROUTES"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");





var APP_ROUTES = [
    { path: 'products', component: _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_0__["ProductlistComponent"] },
    { path: 'orders', component: _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"] },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"] }
];


/***/ }),

/***/ "./src/app/appnav/appnav.component.css":
/*!*********************************************!*\
  !*** ./src/app/appnav/appnav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG5hdi9hcHBuYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/appnav/appnav.component.ts":
/*!********************************************!*\
  !*** ./src/app/appnav/appnav.component.ts ***!
  \********************************************/
/*! exports provided: AppnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppnavComponent", function() { return AppnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");



var AppnavComponent = /** @class */ (function () {
    function AppnavComponent(productsService) {
        this.productsService = productsService;
        this.cart = [];
    }
    AppnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getCart().subscribe(function (data) {
            _this.cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
        });
    };
    AppnavComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
    ]; };
    AppnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appnav',
            template: __webpack_require__(/*! raw-loader!./appnav.component.html */ "./node_modules/raw-loader/index.js!./src/app/appnav/appnav.component.html"),
            styles: [__webpack_require__(/*! ./appnav.component.css */ "./src/app/appnav/appnav.component.css")]
        })
    ], AppnavComponent);
    return AppnavComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");



var CartComponent = /** @class */ (function () {
    function CartComponent(productsService) {
        this.productsService = productsService;
        this.cart = [];
        this.cartTotal = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getCart().subscribe(function (data) {
            _this.cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
            _this.cartTotal = _this.cart.reduce(function (acc, cur) { return acc + Number(cur.price); }, 0);
        });
    };
    CartComponent.prototype.removeItemFromCart = function (item) {
        this.productsService.removeFromCart(item.id);
    };
    CartComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
    ]; };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        })
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#snackbar {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-left: -125px;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n}\r\n\r\n  #snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  }\r\n\r\n  @-webkit-keyframes fadein {\r\n  from {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n  @keyframes fadein {\r\n  from {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n  @-webkit-keyframes fadeout {\r\n  from {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n  @keyframes fadeout {\r\n  from {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0VBRUU7SUFDRSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztFQUMzQzs7RUFFRjtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7QUFDRjs7RUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7QUFDRjs7RUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7RUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc25hY2tiYXIge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbiAgI3NuYWNrYmFyLnNob3cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICB9XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, fb, productsService) {
        this.router = router;
        this.fb = fb;
        this.productsService = productsService;
        this.cart = [];
        this.cartTotal = 0;
        this.checkoutForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressTwo: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getCart().subscribe(function (data) {
            _this.cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
            _this.cartTotal = _this.cart.reduce(function (acc, cur) { return acc + Number(cur.price); }, 0);
        });
    };
    CheckoutComponent.prototype.doCheckout = function () {
        var _this = this;
        var order = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.checkoutForm.value, { items: this.cart });
        this.productsService.checkout(order).subscribe(function (res) {
            var snackbar = document.getElementById('snackbar');
            snackbar.innerHTML = 'Order placed successfully';
            snackbar.className = 'show';
            setTimeout(function () {
                snackbar.className = snackbar.className.replace('show', '');
                _this.productsService.clearCart();
                _this.router.navigate(['/products']);
            }, 3000);
        });
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
    ]; };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statsNum {\r\n  font-size: 3em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzTnVtIHtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrderComponent = /** @class */ (function () {
    function OrderComponent(httpClient) {
        this.httpClient = httpClient;
        this.orders = [];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get('/api/orders').subscribe(function (data) { return _this.orders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data); });
    };
    OrderComponent.prototype.totalEarnings = function (orders) {
        var _this = this;
        return orders.reduce(function (acc, cur) { return acc + _this.orderTotal(cur.items); }, 0);
    };
    OrderComponent.prototype.totalItems = function (orders) {
        return orders.reduce(function (acc, cur) { return acc + cur.items.length; }, 0);
    };
    OrderComponent.prototype.orderTotal = function (items) {
        return items.reduce(function (acc, cur) { return acc + cur.price; }, 0);
    };
    OrderComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        })
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: "\n    <p>\n      pagenotfound works!\n    </p>\n  "
        })
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/productlist/productlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/productlist/productlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RsaXN0L3Byb2R1Y3RsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productlist/productlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");



var ProductlistComponent = /** @class */ (function () {
    function ProductlistComponent(productsService) {
        this.productsService = productsService;
        this.products = [];
    }
    ProductlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.fetchProducts();
        this.productsService.getProducts().subscribe(function (data) {
            _this.products = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
        });
    };
    ProductlistComponent.prototype.addItemToCart = function (item) {
        this.productsService.addToCart(item._id);
    };
    ProductlistComponent.prototype.itemInCart = function (item) {
        return this.productsService.findItemInCart(item._id);
    };
    ProductlistComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
    ]; };
    ProductlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productlist',
            template: __webpack_require__(/*! raw-loader!./productlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/productlist/productlist.component.html"),
            styles: [__webpack_require__(/*! ./productlist.component.css */ "./src/app/productlist/productlist.component.css")]
        })
    ], ProductlistComponent);
    return ProductlistComponent;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this._products = [];
        this._cart = [];
        this.productsSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._products);
        this.cartSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._cart);
    }
    ProductsService.prototype.fetchProducts = function () {
        var _this = this;
        this.http.get('/api/products').subscribe(function (data) {
            _this._products = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
            _this.productsSub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this._products));
        });
    };
    ProductsService.prototype.getProducts = function () {
        return this.productsSub.asObservable();
    };
    ProductsService.prototype.getCart = function () {
        return this.cartSub.asObservable();
    };
    ProductsService.prototype.addToCart = function (id) {
        var product = this.findItemInProducts(id);
        if (product.length !== 0) {
            if (this.findItemInCart(id).length) {
                this.removeFromCart(id);
            }
            else {
                this._cart.push(product[0]);
            }
            this.cartSub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this._cart));
        }
    };
    ProductsService.prototype.removeFromCart = function (id) {
        if (this.findItemInCart(id).length) {
            var item = this.findItemInCart(id)[0];
            var index = this._cart.indexOf(item);
            this._cart.splice(index, 1);
        }
        this.cartSub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this._cart));
    };
    ProductsService.prototype.clearCart = function () {
        this.cartSub.next([]);
    };
    ProductsService.prototype.findItemInCart = function (id) {
        var item = this._cart.filter(function (product) { return product._id === id; });
        return item;
    };
    ProductsService.prototype.findItemInProducts = function (id) {
        var item = this._products.filter(function (product) { return product._id === id; });
        return item;
    };
    ProductsService.prototype.checkout = function (data) {
        return this.http.post('/api/checkout', data);
    };
    ProductsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/truncate.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/truncate.pipe.ts ***!
  \**********************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\insight\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
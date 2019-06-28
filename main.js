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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th , td {\r\n    border: 1px solid grey;\r\n    border-collapse: collapse;\r\n    padding: 5px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGFBQWE7R0FDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoICwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch] = \"x\">\n  <h1 *ngSwitchCase=\"1\">Heading One</h1>\n  <h1 *ngSwitchCase=\"2\">Heading Two</h1>\n</div>\n\n<div *ngIf=\"y\">\nThis is visible\n</div>\n\n<div *ngIf=\"y; else elsepart\">\n  y is true\n</div>\n<ng-template #elsepart>\n  y is false\n</ng-template>\n<br><br>\n<div *ngIf=\"a>b ; else abc\">\n  a is greater than b\n</div>\n<br><br>\n<ng-template #abc>\n  b is greater than a\n</ng-template>\n\n<div *ngIf = \"p > q ; then if1 else else1\">\n</div>\n<ng-template #if1>p is greater</ng-template>\n<ng-template #else1>q is greater</ng-template>\n<br><br>\n\n<div *ngIf = \"p>q; then if2 else else2\"></div>\n<ng-template #if2>\n  <ng-container *ngIf=\"p>r; then if3 else else3\"></ng-container>\n  <ng-template #if3>p is grt</ng-template>\n  <ng-template #else3> r is grt</ng-template>\n</ng-template>\n\n<ng-template #else2>\n    <ng-container *ngIf=\"q>r; then if4 else else4\"></ng-container>\n    <ng-template #if4> q is grt </ng-template>\n    <ng-template #else4> r is grt</ng-template>\n</ng-template>\n\n<ul *ngFor=\"let x of myarr\">\n  <li>{{x}}</li>\n</ul>\n\n{{myobj.fname}}\n<div *ngFor=\"let x of myobjarr\">\n  <h1>{{x.fname}}</h1>\n  <h2>{{x.age}}</h2>\n</div>\n\n<div *ngFor=\"let x of myobj1\">\n    First Name:<h4>{{x.fname}}</h4>\n    Last Name<h4>{{x.lname}}</h4>\n    Age<h4>{{x.age}}</h4>\n</div>\n<br><br>\n<table>\n  <tr>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Age</th>\n    <th>City</th>\n  </tr>\n  <tr *ngFor=\"let x of myobj1\">\n    <td>{{x.fname}}</td>\n    <td>{{x.lname}}</td>\n    <td>{{x.age1}}</td>\n    <td>{{x.City}}</td>\n  </tr>\n</table>\n<br><br>\n<div [ngSwitch]=\"arr\">\n\n  <input type=\"text\" name=\"kkk\" [(ngModel)]=\"arr\" />\n\n  <h1 *ngSwitchCase=\"1\">Sunday</h1>\n  <h1 *ngSwitchCase=\"2\">Monday</h1>\n  <h1 *ngSwitchCase=\"3\">Tuesday</h1>\n  <h1 *ngSwitchCase=\"4\">Wednesday</h1>\n  <h1 *ngSwitchCase=\"5\">Thursday</h1>\n  <h1 *ngSwitchCase=\"6\">Friday</h1>\n  <h1 *ngSwitchCase=\"7\">Saturday</h1>\n  <h1 *ngSwitchDefault>Wrong Choice</h1>\n</div>\n<br><br><br>\n\n\n  <input type=\"number\" #num1 > \n  <input type=\"number\" #num2>\n  <button type=\"button\"(click)=\"showdiv()\">Calculate</button>\n\n  <div *ngIf=\"ishidden\">\n      Enter your choice : <input type=\"text\"  [(ngModel)]=\"arr1\" />\n      <div [ngSwitch]=\"arr1\" >\n        <h3 *ngSwitchCase=\"1\">Addition is {{ ( num1.value + num2.value ) }}</h3>\n        <h3 *ngSwitchCase=\"2\">Substraction is {{(num1.value - num2.value)}}</h3>\n        <h3 *ngSwitchCase=\"3\">Multiplication is {{(num1.value * num2.value)}}</h3>\n        <h3 *ngSwitchCase=\"4\">Division is {{(num1.value / num2. value)}}</h3>\n      </div>\n  </div>\n\n<br><br><br>\n<div>\n    <button (click)=\"show = !show\">{{show ? 'hide' : 'show'}}</button>\n    show = {{show}}\n    <br>\n    <div *ngIf=\"show; else elseBlock\">Text to show</div>\n    <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>\n</div>\n<br><br><br>\n<table *ngFor=\"let user of users\">\n    <tr>\n      <td>{{user.name}}</td> \n    </tr>\n    <tr *ngFor=\"let qualifica of user.qualification\">\n      <td> {{ qualifica }} </td>\n    </tr>   \n  </table>\n\n  <br><br><br>\n\n  <ul>\n      <li *ngFor=\"let group of hueGroups\">\n      {{group.name}}\n      <ul>\n          <li *ngFor=\"let light of group.lights\">\n          {{light.name}}\n          </li>\n      </ul>\n      </li>\n  </ul>\n\n  <br><br><br>\n\n<router-outlet></router-outlet>"

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
        this.title = 'Project3';
        this.myvar = "";
        this.x = 2;
        this.y = true;
        this.a = 20;
        this.b = 30;
        this.p = 4;
        this.q = 5;
        this.r = 6;
        this.myarr = [1, 2, 3, 4, 5, 6];
        this.myobj = {
            "fname": "ABCD",
            "lname": "XYZW"
        };
        this.myobjarr = [
            { "fname": "sdtrdy", "lname": "ffhfgh", "age": "21" },
            { "fname": "sdtrdy", "lname": "ffhfgh", "age": "21" },
            { "fname": "sdtrdy", "lname": "ffhfgh", "age": "21" },
            { "fname": "sdtrdy", "lname": "ffhfgh", "age": "21" },
            { "fname": "sdtrdy", "lname": "ffhfgh", "age": "21" },
        ];
        this.myobj1 = [
            { "fname": "John", "lname": "Leo", "age1": "20", "City": "Nagpur" },
            { "fname": "Rocky", "lname": "Roy", "age1": "21", "City": "Pune" },
            { "fname": "John", "lname": "Mry", "age1": "23", "City": "Mumbai" },
            { "fname": "Marry", "lname": "xyz", "age1": "22", "City": "Nagpur" },
        ];
        this.arr = 0;
        this.arr1 = 0;
        this.ishidden = false;
        this.show = true;
        this.users = [
            { name: "Anil Singh", qualification: ["B.Sc.", "MCA", "MCTS", "MCP"] },
            { name: "Reena Singh", qualification: ["B A", "M A", "BTC"] }
        ];
        this.hueGroups = [{
                name: "group 1",
                lights: [{
                        name: "light 1"
                    }, {
                        name: "light 2"
                    }]
            },
            {
                name: "group 2",
                lights: [{
                        name: "light 3"
                    }, {
                        name: "light 4"
                    }]
            }];
    }
    AppComponent.prototype.showdiv = function () {
        if (this.ishidden) {
            this.ishidden = false;
        }
        else {
            this.ishidden = true;
        }
    };
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! E:\Demo1\Project3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
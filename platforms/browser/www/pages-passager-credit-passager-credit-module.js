(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-passager-credit-passager-credit-module"],{

/***/ "./src/app/pages/passager-credit/passager-credit.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/passager-credit/passager-credit.module.ts ***!
  \*****************************************************************/
/*! exports provided: PassagerCreditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagerCreditPageModule", function() { return PassagerCreditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _passager_credit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passager-credit.page */ "./src/app/pages/passager-credit/passager-credit.page.ts");







var routes = [
    {
        path: '',
        component: _passager_credit_page__WEBPACK_IMPORTED_MODULE_6__["PassagerCreditPage"]
    }
];
var PassagerCreditPageModule = /** @class */ (function () {
    function PassagerCreditPageModule() {
    }
    PassagerCreditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_passager_credit_page__WEBPACK_IMPORTED_MODULE_6__["PassagerCreditPage"]]
        })
    ], PassagerCreditPageModule);
    return PassagerCreditPageModule;
}());



/***/ }),

/***/ "./src/app/pages/passager-credit/passager-credit.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/passager-credit/passager-credit.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  \n  <div class=\"bg\"></div>\n\n</body>"

/***/ }),

/***/ "./src/app/pages/passager-credit/passager-credit.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/passager-credit/passager-credit.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url('background_Vert.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvaW5lbWlvdC9Eb2N1bWVudHMvRVBJVEVDSC9Db21vb3YzL0NvTW9vdk5ldy9zcmMvYXBwL3BhZ2VzL3Bhc3NhZ2VyLWNyZWRpdC9wYXNzYWdlci1jcmVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQWdFO0VBQ2hFLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3NhZ2VyLWNyZWRpdC9wYXNzYWdlci1jcmVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRfVmVydC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/passager-credit/passager-credit.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/passager-credit/passager-credit.page.ts ***!
  \***************************************************************/
/*! exports provided: PassagerCreditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagerCreditPage", function() { return PassagerCreditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PassagerCreditPage = /** @class */ (function () {
    function PassagerCreditPage() {
    }
    PassagerCreditPage.prototype.ngOnInit = function () {
    };
    PassagerCreditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-passager-credit',
            template: __webpack_require__(/*! ./passager-credit.page.html */ "./src/app/pages/passager-credit/passager-credit.page.html"),
            styles: [__webpack_require__(/*! ./passager-credit.page.scss */ "./src/app/pages/passager-credit/passager-credit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PassagerCreditPage);
    return PassagerCreditPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-passager-credit-passager-credit-module.js.map
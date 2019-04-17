(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-second-view-second-view-module"],{

/***/ "./src/app/pages/second-view/second-view.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/second-view/second-view.module.ts ***!
  \*********************************************************/
/*! exports provided: SecondViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondViewPageModule", function() { return SecondViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _second_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second-view.page */ "./src/app/pages/second-view/second-view.page.ts");







var routes = [
    {
        path: '',
        component: _second_view_page__WEBPACK_IMPORTED_MODULE_6__["SecondViewPage"]
    }
];
var SecondViewPageModule = /** @class */ (function () {
    function SecondViewPageModule() {
    }
    SecondViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_second_view_page__WEBPACK_IMPORTED_MODULE_6__["SecondViewPage"]]
        })
    ], SecondViewPageModule);
    return SecondViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/second-view/second-view.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/second-view/second-view.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button (click)=\"navToFirstPage()\">back</ion-button>\n\n\n<ion-label>Informations profil</ion-label>\n  <form #form=\"ngForm\" (ngSubmit)=\"logForm(form)\">\n      <ion-item>\n          <ion-input name=\"Prénom\" placeholder=\"Prénom\" type=\"text\" ngModel required></ion-input>\n      </ion-item>\n            \n      <ion-item>\n        <ion-input name=\"Nom\" placeholder=\"Nom\" type=\"text\" ngModel required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input name=\"birth\" placeholder=\"Date de naissance\" type=\"number\" ngModel required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input name=\"gender\" placeholder=\"Genre\" type=\"text\" ngModel required></ion-input>\n      </ion-item>\n      \n    <ion-button type=\"submit\" (click)=\"navToThirdPage()\"> Continuer </ion-button>\n  </form>\n  \n\n\n"

/***/ }),

/***/ "./src/app/pages/second-view/second-view.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/second-view/second-view.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY29uZC12aWV3L3NlY29uZC12aWV3LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/second-view/second-view.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/second-view/second-view.page.ts ***!
  \*******************************************************/
/*! exports provided: SecondViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondViewPage", function() { return SecondViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SecondViewPage = /** @class */ (function () {
    function SecondViewPage(router) {
        this.router = router;
    }
    SecondViewPage.prototype.ngOnInit = function () {
    };
    SecondViewPage.prototype.logForm = function (form) {
        console.log(form.value);
    };
    SecondViewPage.prototype.navToFirstPage = function () {
        this.router.navigateByUrl("/first-view");
    };
    SecondViewPage.prototype.navToThirdPage = function () {
        this.router.navigateByUrl("/third-view");
    };
    SecondViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second-view',
            template: __webpack_require__(/*! ./second-view.page.html */ "./src/app/pages/second-view/second-view.page.html"),
            styles: [__webpack_require__(/*! ./second-view.page.scss */ "./src/app/pages/second-view/second-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SecondViewPage);
    return SecondViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-second-view-second-view-module.js.map
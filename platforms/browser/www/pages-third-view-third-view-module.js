(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-third-view-third-view-module"],{

/***/ "./src/app/pages/third-view/third-view.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/third-view/third-view.module.ts ***!
  \*******************************************************/
/*! exports provided: ThirdViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdViewPageModule", function() { return ThirdViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _third_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./third-view.page */ "./src/app/pages/third-view/third-view.page.ts");







var routes = [
    {
        path: '',
        component: _third_view_page__WEBPACK_IMPORTED_MODULE_6__["ThirdViewPage"]
    }
];
var ThirdViewPageModule = /** @class */ (function () {
    function ThirdViewPageModule() {
    }
    ThirdViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_third_view_page__WEBPACK_IMPORTED_MODULE_6__["ThirdViewPage"]]
        })
    ], ThirdViewPageModule);
    return ThirdViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/third-view/third-view.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/third-view/third-view.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button (click)=\"navToSecondPage()\"> back </ion-button>\n\n<ion-label>Ajoutez votre numéro de téléphone</ion-label>\n  <form #form=\"ngForm\" (ngSubmit)=\"logForm(form)\">\n      <ion-item>\n          <ion-input name=\"Country\" placeholder=\"Pays\" type=\"text\" ngModel required></ion-input>\n      </ion-item>\n            \n      <ion-item>\n        <ion-input name=\"Phone\" placeholder=\"Numéro de téléphone\" type=\"number\" ngModel required></ion-input>\n      </ion-item>\n      \n    <ion-button type=\"submit\" (click)=\"navToFourthPage()\"> Continuer </ion-button>\n  </form>"

/***/ }),

/***/ "./src/app/pages/third-view/third-view.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/third-view/third-view.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoaXJkLXZpZXcvdGhpcmQtdmlldy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/third-view/third-view.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/third-view/third-view.page.ts ***!
  \*****************************************************/
/*! exports provided: ThirdViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdViewPage", function() { return ThirdViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ThirdViewPage = /** @class */ (function () {
    function ThirdViewPage(router) {
        this.router = router;
    }
    ThirdViewPage.prototype.ngOnInit = function () {
    };
    ThirdViewPage.prototype.logForm = function (form) {
        console.log(form.value);
    };
    ThirdViewPage.prototype.navToSecondPage = function () {
        this.router.navigateByUrl('/second-view');
    };
    ThirdViewPage.prototype.navToFourthPage = function () {
        this.router.navigateByUrl('/fourth-view');
    };
    ThirdViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-third-view',
            template: __webpack_require__(/*! ./third-view.page.html */ "./src/app/pages/third-view/third-view.page.html"),
            styles: [__webpack_require__(/*! ./third-view.page.scss */ "./src/app/pages/third-view/third-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ThirdViewPage);
    return ThirdViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-third-view-third-view-module.js.map
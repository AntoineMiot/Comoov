(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-first-view-first-view-module"],{

/***/ "./src/app/pages/first-view/first-view.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/first-view/first-view.module.ts ***!
  \*******************************************************/
/*! exports provided: FirstViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstViewPageModule", function() { return FirstViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _first_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-view.page */ "./src/app/pages/first-view/first-view.page.ts");







//import { ComponentFactory } from '@angular/core/src/render3';
var routes = [
    {
        path: '',
        component: _first_view_page__WEBPACK_IMPORTED_MODULE_6__["FirstViewPage"]
    }
];
var FirstViewPageModule = /** @class */ (function () {
    function FirstViewPageModule() {
    }
    FirstViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_first_view_page__WEBPACK_IMPORTED_MODULE_6__["FirstViewPage"]]
        })
    ], FirstViewPageModule);
    return FirstViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/first-view/first-view.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/first-view/first-view.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:200i,300,300i,400,400i,500,500i,600,600i,700,700i\" rel=\"stylesheet\">\n</head>\n\n<body>\n  <ion-row justify-content-center class=\"FirstRow\">\n    <ion-col align-self-center>\n        <div text-center class=\"header\">Créer un compte</div>\n    </ion-col>\n  </ion-row>\n\n<ion-row justify-content-center>\n  <ion-col align-self-center>\n  <form #form=\"ngForm\" (ngSubmit)=\"logForm(form)\">\n      <ion-item>\n          <ion-input name=\"AdresseMail\" placeholder=\"Adresse email\" type=\"email\" ngModel required></ion-input>\n      </ion-item>\n    <br>\n      <ion-item>\n        <ion-input name=\"Password\" placeholder=\"Mot de passe\" type=\"password\" ngModel required></ion-input>\n      </ion-item> \n      <ion-button type=\"submit\" (click)=\"navToSecondPage()\"> Continuer </ion-button>\n  </form>\n  </ion-col>\n</ion-row>\n</body>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/first-view/first-view.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/first-view/first-view.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('background1.png');\n  background-repeat: no-repeat;\n  background-size: 100%; }\n\n.header {\n  font-size: 7vw;\n  color: white;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: bold;\n  font-style: italic; }\n\n.FirstRow {\n  height: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvaW5lbWlvdC9Eb2N1bWVudHMvRVBJVEVDSC9Db21vb3YzL0NvTW9vdk5ldy9zcmMvYXBwL3BhZ2VzL2ZpcnN0LXZpZXcvZmlyc3Qtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBNEQ7RUFDNUQsNEJBQTRCO0VBQzVCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXJzdC12aWV3L2ZpcnN0LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLkZpcnN0Um93IHtcbiAgICBoZWlnaHQ6IDMwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/first-view/first-view.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/first-view/first-view.page.ts ***!
  \*****************************************************/
/*! exports provided: FirstViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstViewPage", function() { return FirstViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FirstViewPage = /** @class */ (function () {
    function FirstViewPage(router) {
        this.router = router;
    }
    FirstViewPage.prototype.ngOnInit = function () {
    };
    FirstViewPage.prototype.logForm = function (form) {
        console.log(form.value);
    };
    FirstViewPage.prototype.navToSecondPage = function () {
        this.router.navigateByUrl("/second-view");
    };
    FirstViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first-view',
            template: __webpack_require__(/*! ./first-view.page.html */ "./src/app/pages/first-view/first-view.page.html"),
            styles: [__webpack_require__(/*! ./first-view.page.scss */ "./src/app/pages/first-view/first-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FirstViewPage);
    return FirstViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-first-view-first-view-module.js.map
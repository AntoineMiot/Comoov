(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fourth-view-fourth-view-module"],{

/***/ "./src/app/pages/fourth-view/fourth-view.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/fourth-view/fourth-view.module.ts ***!
  \*********************************************************/
/*! exports provided: FourthViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourthViewPageModule", function() { return FourthViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fourth_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fourth-view.page */ "./src/app/pages/fourth-view/fourth-view.page.ts");







var routes = [
    {
        path: '',
        component: _fourth_view_page__WEBPACK_IMPORTED_MODULE_6__["FourthViewPage"]
    }
];
var FourthViewPageModule = /** @class */ (function () {
    function FourthViewPageModule() {
    }
    FourthViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fourth_view_page__WEBPACK_IMPORTED_MODULE_6__["FourthViewPage"]]
        })
    ], FourthViewPageModule);
    return FourthViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fourth-view/fourth-view.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/fourth-view/fourth-view.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button (click)=\"navToThirdPage()\"> back </ion-button>\n\n<ion-label> Bonjour \" \" </ion-label>\n<ion-label> Qui êtes vous aujourd'hui ? </ion-label>\n\n<ion-button (click)=\"navToConducteurCarte()\"> Conduteur </ion-button>\n<ion-button (click)=\"navToPassagerCarte()\"> Passager </ion-button>"

/***/ }),

/***/ "./src/app/pages/fourth-view/fourth-view.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/fourth-view/fourth-view.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url('background2.png');\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%; }\n\n.BackButton {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  height: 50px;\n  width: 30px;\n  background-color: transparent; }\n\n.PassengerButton {\n  position: absolute;\n  top: 500px;\n  left: 85px;\n  width: 200px;\n  height: 70px;\n  border: none;\n  border-radius: 37px;\n  -moz-border-radius: 37px;\n  -webkit-border-radius: 37px;\n  padding: 14px 40px;\n  background-color: #2ae399;\n  color: white; }\n\n.DriverButton {\n  position: absolute;\n  top: 395px;\n  left: 85px;\n  width: 200px;\n  height: 70px;\n  border: none;\n  border-radius: 37px;\n  -moz-border-radius: 37px;\n  -webkit-border-radius: 37px;\n  padding: 14px 40px;\n  background-color: #091fc5;\n  color: white; }\n\nh3 {\n  position: absolute;\n  top: 90px;\n  left: 65px;\n  color: white;\n  font-size: 26px; }\n\np {\n  position: absolute;\n  top: 150px;\n  left: 65px;\n  color: white;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvaW5lbWlvdC9Eb2N1bWVudHMvRVBJVEVDSC9Db21vb3YzL0NvTW9vdk5ldy9zcmMvYXBwL3BhZ2VzL2ZvdXJ0aC12aWV3L2ZvdXJ0aC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUE0RDtFQUM1RCw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVc7RUFDWCxXQUFXO0VBQ1gsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxVQUFTO0VBQ1QsWUFBVztFQUNYLFlBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW9CO0VBQ3BCLHdCQUF5QjtFQUN6QiwyQkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHlCQUFpQztFQUNqQyxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxVQUFTO0VBQ1QsWUFBVztFQUNYLFlBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW9CO0VBQ3BCLHdCQUF5QjtFQUN6QiwyQkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHlCQUErQjtFQUMvQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm91cnRoLXZpZXcvZm91cnRoLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQyLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLkJhY2tCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLlBhc3NlbmdlckJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1MDBweDtcbiAgICBsZWZ0Ojg1cHg7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgaGVpZ2h0OjcwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXMgOiAzN3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cyA6IDM3cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzIDogMzdweDtcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLDIyNywxNTMpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLkRyaXZlckJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDozOTVweDtcbiAgICBsZWZ0Ojg1cHg7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgaGVpZ2h0OjcwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXMgOiAzN3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cyA6IDM3cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzIDogMzdweDtcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksMzEsMTk3KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmgzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjkwcHg7XG4gICAgbGVmdDo2NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI2cHg7XG59XG5cbnAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDY1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/fourth-view/fourth-view.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/fourth-view/fourth-view.page.ts ***!
  \*******************************************************/
/*! exports provided: FourthViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourthViewPage", function() { return FourthViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FourthViewPage = /** @class */ (function () {
    function FourthViewPage(router) {
        this.router = router;
    }
    FourthViewPage.prototype.ngOnInit = function () {
    };
    FourthViewPage.prototype.navToThirdPage = function () {
        this.router.navigateByUrl('/third-view');
    };
    FourthViewPage.prototype.navToPassagerCarte = function () {
        this.router.navigateByUrl('/passager-carte');
    };
    FourthViewPage.prototype.navToConducteurCarte = function () {
        this.router.navigateByUrl('/conducteur-carte');
    };
    FourthViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fourth-view',
            template: __webpack_require__(/*! ./fourth-view.page.html */ "./src/app/pages/fourth-view/fourth-view.page.html"),
            styles: [__webpack_require__(/*! ./fourth-view.page.scss */ "./src/app/pages/fourth-view/fourth-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FourthViewPage);
    return FourthViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fourth-view-fourth-view-module.js.map
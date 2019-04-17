(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");







var routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
        })
    ], TestPageModule);
    return TestPageModule;
}());



/***/ }),

/***/ "./src/app/pages/test/test.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n/* Create three unequal columns that floats next to each other */\n.column {\n  float: left;\n  padding: 10px;\n  height: 1366px; /* Should be removed. Only for demonstration */\n}\n\n.left, .right {\n  width: 25%;\n}\n\n.middle {\n  width: 50%;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\nbutton {\n    position:static;\n    top: 80%;\n    left:30%;\n    background-color: #ff3a00;\n    color: white;\n    border-radius : 37px;\n    -moz-border-radius : 37px;\n    -webkit-border-radius : 37px;\n    padding: 14px 40px;\n}\n\ninput[type=email] {\n    position: absolute;\n    top: 200px;\n    left: 65px;\n    background-color: white;\n    border: none;\n    border-radius : 37px;\n    -moz-border-radius : 37px;\n    -webkit-border-radius : 37px;\n    padding: 14px 40px;\n}\n\ninput[type=password] {\n    position: absolute;\n    top: 270px;\n    left: 65px;\n    background-color: white;\n    border: none;\n    border-radius : 37px;\n    -moz-border-radius : 37px;\n    -webkit-border-radius : 37px;\n    padding: 14px 40px;\n}\n\n.Text {\n    position: absolute;\n    top: 100px;\n    left: 65px;\n    color: white\n}\n</style>\n</head>\n<body>\n\n\n<div class=\"row\">\n  <div class=\"column left\" style=\"background-color:#aaa;\">\n    <h2>Column 1</h2>\n    <p>Some text..</p>\n  </div>\n  <div class=\"column middle\" style=\"background-color:#bbb;\">\n\n    <h2 class=\"Text\"> Créer un compte</h2>\n    <form action=\"/action_page.php\">\n    \n      <div>\n        <input type=\"email\" placeholder=\"Adresse email\">\n      </div>\n    \n      <div>\n        <input type=\"password\" placeholder=\"Mot de passe\"> \n      </div>\n    \n      <button type=\"submit\" (click)=\"navToSecondView()\"> Continuer</button>\n    \n    </form>\n\n  </div>\n  <div class=\"column right\" style=\"background-color:#ccc;\">\n    <h2>Column 3</h2>\n    <p>Some text..</p>\n  </div>\n</div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/pages/test/test.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/test/test.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestPage = /** @class */ (function () {
    function TestPage() {
    }
    TestPage.prototype.ngOnInit = function () {
    };
    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.page.html */ "./src/app/pages/test/test.page.html"),
            styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/pages/test/test.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestPage);
    return TestPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module.js.map
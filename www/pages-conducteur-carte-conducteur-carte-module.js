(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-conducteur-carte-conducteur-carte-module"],{

/***/ "./src/app/pages/conducteur-carte/conducteur-carte.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/conducteur-carte/conducteur-carte.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConducteurCartePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConducteurCartePageModule", function() { return ConducteurCartePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conducteur_carte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conducteur-carte.page */ "./src/app/pages/conducteur-carte/conducteur-carte.page.ts");







var routes = [
    {
        path: '',
        component: _conducteur_carte_page__WEBPACK_IMPORTED_MODULE_6__["GGMaps"]
    }
];
var ConducteurCartePageModule = /** @class */ (function () {
    function ConducteurCartePageModule() {
    }
    ConducteurCartePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_conducteur_carte_page__WEBPACK_IMPORTED_MODULE_6__["GGMaps"]]
        })
    ], ConducteurCartePageModule);
    return ConducteurCartePageModule;
}());



/***/ }),

/***/ "./src/app/pages/conducteur-carte/conducteur-carte.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/conducteur-carte/conducteur-carte.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-button (click)=\"navToPassagerCarte()\"> Passager </ion-button>\n</ion-header>\n\n<form #form=\"ngForm\" (ngSubmit)=\"logForm(form)\">\n<ion-item>\n  <ion-input name=\"Départ\" type=\"text\" placeholder=\"Départ\" ngModel required></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-input name=\"Arrivée\" type=\"text\" placeholder=\"Arrivée\" ngModel required></ion-input>\n</ion-item>\n</form>\n\n<ion-content>\n  <div #Map class=\"map\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/conducteur-carte/conducteur-carte.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/conducteur-carte/conducteur-carte.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.bg {\n  background-image: url('BasCarte_Bleu.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%; }\nbutton {\n  position: absolute;\n  top: 10%;\n  right: 10%; }\ninput[type=text] {\n  background-color: white;\n  border: none;\n  border: none;\n  border-radius: 37px;\n  -moz-border-radius: 37px;\n  -webkit-border-radius: 37px;\n  padding: 10px 40px; }\ninput[id=Départ] {\n  position: absolute;\n  top: 78%;\n  left: 18%; }\ninput[id=Arrivée] {\n  position: absolute;\n  top: 87%;\n  left: 18%; }\nimg {\n  position: absolute;\n  top: 80%;\n  left: 10%;\n  width: 5%; }\n.map {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZHVjdGV1ci1jYXJ0ZS9jb25kdWN0ZXVyLWNhcnRlLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hbnRvaW5lbWlvdC9Eb2N1bWVudHMvRVBJVEVDSC9Db21vb3YzL0NvTW9vdk5ldy9zcmMvYXBwL3BhZ2VzL2NvbmR1Y3RldXItY2FydGUvY29uZHVjdGV1ci1jYXJ0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksMENBQThEO0VBQzlELDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUdmO0VBQ0ksa0JBQWlCO0VBQ2pCLFFBQVE7RUFDUixVQUFTLEVBQUE7QUFHYjtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFvQjtFQUNwQix3QkFBeUI7RUFDekIsMkJBQTRCO0VBQzVCLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxTQUFRLEVBQUE7QUFHWjtFQUNJLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUSxFQUFBO0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTLEVBQUE7QUFHYjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmR1Y3RldXItY2FydGUvY29uZHVjdGV1ci1jYXJ0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL0Jhc0NhcnRlX0JsZXUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIHJpZ2h0OiAxMCU7IH1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzdweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzN3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDM3cHg7XG4gIHBhZGRpbmc6IDEwcHggNDBweDsgfVxuXG5pbnB1dFtpZD1Ew6lwYXJ0XSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3OCU7XG4gIGxlZnQ6IDE4JTsgfVxuXG5pbnB1dFtpZD1BcnJpdsOpZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODclO1xuICBsZWZ0OiAxOCU7IH1cblxuaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwJTtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogNSU7IH1cblxuLm1hcCB7XG4gIGhlaWdodDogMTAwJTsgfVxuIiwiLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL0Jhc0NhcnRlX0JsZXUucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgcmlnaHQ6MTAlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXMgOiAzN3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cyA6IDM3cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzIDogMzdweDtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG59XG5cbmlucHV0W2lkPUTDqXBhcnRdIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6NzglO1xuICAgIGxlZnQ6MTglO1xufVxuXG5pbnB1dFtpZD1BcnJpdsOpZV0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6ODclO1xuICAgIGxlZnQ6MTglO1xufVxuXG5pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDgwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgd2lkdGg6IDUlO1xufVxuXG4ubWFwe1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/conducteur-carte/conducteur-carte.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/conducteur-carte/conducteur-carte.page.ts ***!
  \*****************************************************************/
/*! exports provided: GGMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GGMaps", function() { return GGMaps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



var GGMaps = /** @class */ (function () {
    function GGMaps(zone, geolocation) {
        var _this = this;
        this.zone = zone;
        this.geolocation = geolocation;
        this.location = { lat: null, lng: null };
        this.markerOptions = { position: null, map: null, title: null };
        this.apiKey = 'AIzaSyAxk7XVX99nwt8Ek079u_EkY18ForFJoFg'; /*Your API Key*/
        /*Get Current location*/
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("Getting_GPS_position");
            _this.location.lat = position.coords.latitude;
            console.log("Lat", _this.location.lat);
            _this.location.lng = position.coords.longitude;
            console.log("Lng", _this.location.lng);
        });
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 21,
            mapTypeControl: false
        };
        setTimeout(function () {
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, _this.mapOptions);
            /*Marker Options*/
            _this.markerOptions.position = _this.location;
            _this.markerOptions.map = _this.map;
            _this.markerOptions.title = 'My Location';
            _this.marker = new google.maps.Marker(_this.markerOptions);
        }, 3000);
        /*load google map script dynamically */
        var script = document.createElement('script');
        script.id = 'googleMap';
        if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
        }
        else {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=';
        }
        document.head.appendChild(script);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GGMaps.prototype, "mapElement", void 0);
    GGMaps = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conducteur-carte',
            template: __webpack_require__(/*! ./conducteur-carte.page.html */ "./src/app/pages/conducteur-carte/conducteur-carte.page.html"),
            styles: [__webpack_require__(/*! ./conducteur-carte.page.scss */ "./src/app/pages/conducteur-carte/conducteur-carte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], GGMaps);
    return GGMaps;
}());



/***/ })

}]);
//# sourceMappingURL=pages-conducteur-carte-conducteur-carte-module.js.map
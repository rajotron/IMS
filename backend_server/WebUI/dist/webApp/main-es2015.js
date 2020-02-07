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

module.exports = "<mat-toolbar color=\"primary\" class=\"app-header\">\n  <div><a href=\"https://www.positronx.io\" target=\"_blank\" class=\"positronx\">INVENTORY MANAGEMENT SYSTEM</a></div>\n  <span class=\"nav-tool-items\">\n    <button mat-button (click)=\"logout()\">Log Out</button>\n    <!-- <a mat-button mat-raised-button routerLink=\"register\" routerLinkActive=\"active\">Register</a> -->\n  </span>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"userLabel\">User : {{username}}</span>\n <div class=\"row\">\n  <div class=\"col-lg-12 tableCss\">\n    <span class=\"heading1\">Shopping Centres</span>\n<!--  <mat-table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container *ngFor=\"let column of displayedColumns\" [matColumnDef]=\"column\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > {{column}} </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"agreementNum\"> {{row[column] || ''}} </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table> -->\n     <!--  </div></div> -->\n <mat-table [dataSource]=\"dataSource\" matSort >\n\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > Id </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"id\"]}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"name\"]}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"address\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > address </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\">{{row[\"address\"]}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"created_at\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header >created_at</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"created_at\">{{row[\"created_at\"]|date:'dd/MM/yyyy, h:mm a'}}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"created_by\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > created_by </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"created_by\"]}}\n            </mat-cell>\n          </ng-container>\n\n           <ng-container matColumnDef=\"updated_at\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header >updated_at</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"updated_at\">{{row[\"updated_at\"]|date:'dd/MM/yyyy, h:mm a'}}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"updated_by\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > updated_by </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"updated_by\"]}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"View Assets\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > View Assets </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> <button mat-raised-button color=\"primary\" (click)='openDialog2(row)' class=\"mr-1\">VIEW</button> </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > Action </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> <button mat-raised-button color=\"primary\" (click)='openDialog(row)' class=\"mr-1\">EDIT</button> </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n      </div></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dialog1.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dialog1.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n<div class=\"row justify-content-center\"  style=\"height: 100vh\" >\n  <div class=\"col-12\" > \n    <div class=\"wrapper1\">\n<h3 mat-dialog-title>Update Shopping Centre</h3>\n<h4>Name:<span class=\"red\">{{data.name}}</span>, ID: <span class=\"red\">{{data.id}}</span></h4>\n<div mat-dialog-content>\n  <p class=\"labels\">Name</p>\n  <mat-form-field  class=\"formField\">\n    <input matInput [(ngModel)]=\"data.name\">\n  </mat-form-field>\n  <p class=\"labels\">Address</p>\n  <mat-form-field class=\"formField\">\n    <input matInput [(ngModel)]=\"data.address\">\n  </mat-form-field>\n  <p class=\"labels\">created_by</p>\n  <mat-form-field class=\"formField\">\n    <input matInput [(ngModel)]=\"data.created_by\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n  <button mat-button (click)=\"update()\" cdkFocusInitial>Update</button>\n</div>\n</div></div></div></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dialog2.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dialog2.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n<div class=\"row justify-content-center\"  style=\"height: 100vh\" >\n  <div class=\"col-12\" > \n    <div class=\"wrapper1\">\n<h3 mat-dialog-title>Assets in Shopping Centre</h3>\n<h4>Name:<span class=\"red\">{{data.name}}</span>, ID: <span class=\"red\">{{data.id}}</span></h4>\n <mat-table [dataSource]=\"dataSource\" matSort >\n  <!-- asset_id: 1\nshoppingcentre_id: 1\nname: \"Big Bazaar\"\ndimension: \"23x45x34\"\naddress: \"Plot-9, LTF-3\"\nstatus: \"OFFLINE\"\ncreated_at: \"2020-02-06T07:07:09.485Z\"\ncreated_by: \"user1\" -->\n\n          <ng-container matColumnDef=\"asset_id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > Id </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"asset_id\"]}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"shoppingcentre_id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > shoppingcentre_id </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"shoppingcentre_id\"]}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"name\"]}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"address\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > address </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\">{{row[\"address\"]}}\n            </mat-cell>\n          </ng-container>\n           <ng-container matColumnDef=\"dimension\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > dimension </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\">{{row[\"dimension\"]}}\n            </mat-cell>\n          </ng-container>\n           <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > status </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\">{{row[\"status\"]}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"created_at\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header >created_at</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"created_at\">{{row[\"created_at\"]|date:'dd/MM/yyyy, h:mm a'}}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"created_by\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > created_by </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"created_by\"]}}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"updated_at\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header >updated_at</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"updated_at\">{{row[\"updated_at\"]|date:'dd/MM/yyyy, h:mm a'}}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"updated_by\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > updated_by </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row[\"updated_by\"]}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header > Action </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> <button mat-raised-button color=\"primary\" (click)='openDialog(row)' class=\"mr-1\">EDIT</button> </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n</div>\n</div></div></div></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dialog3.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dialog3.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n<div class=\"row justify-content-center\"  style=\"height: 100vh\" >\n  <div class=\"col-6\" > \n    <div class=\"wrapper1\">\n<h3 mat-dialog-title>Update Asset Info</h3>\n<h4>Name:<span class=\"red\">{{data.name}}</span>, ID: <span class=\"red\">{{data.asset_id}}</span></h4>\n<div mat-dialog-content>\n  <p class=\"labels\">Name</p>\n  <mat-form-field  class=\"formField\">\n    <input matInput [(ngModel)]=\"data.name\">\n  </mat-form-field>\n  <p class=\"labels\">shoppingcentre_id</p>\n  <mat-form-field class=\"formField\">\n    <input matInput [(ngModel)]=\"data.shoppingcentre_id\">\n  </mat-form-field>\n  <p class=\"labels\">dimension</p>\n  <mat-form-field class=\"formField\">\n    <input matInput [(ngModel)]=\"data.dimension\">\n  </mat-form-field>\n  <p class=\"labels\">address</p>\n  <mat-form-field class=\"formField\">\n    <input matInput [(ngModel)]=\"data.address\">\n  </mat-form-field>\n  <p class=\"labels\">status</p>\n  <mat-form-field class=\"status\">\n    <input matInput [(ngModel)]=\"data.status\">\n  </mat-form-field>\n  <!-- <mat-form-field class=\"formField\">\n    <input matInput [(ngModel)]=\"data.created_by\">\n  </mat-form-field> -->\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n  <button mat-button (click)=\"update()\" cdkFocusInitial>Update</button>\n</div>\n</div></div></div></div>\n\n<!-- asset_id\", \"shoppingcentre_id\", \"name\", \"dimension\", \"address\", \"status\", \"created_at\", \"created_by\", \"Action -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n<div class=\"row justify-content-center align-items-center\"  style=\"height: 100vh\" >\n\t<div class=\"col-6\" > \n<div class=\"login-wrapper text-center\">\n\n     <mat-card >\n      <mat-card-header>\n        <mat-card-title>Log in</mat-card-title>\n      </mat-card-header>\n  \n      <form class=\"example-form\" #myform=\"ngForm\">\n        <mat-card-content>\n          <mat-form-field class=\"example-full-width\">\n            <span class=\"label\">Username</span>\n            <mat-label></mat-label>\n            <input matInput placeholder=\"username\" name=\"username\"   [(ngModel)]=\"username\">\n          </mat-form-field>\n  \n          <mat-form-field class=\"example-full-width\">\n            <span class=\"label\">Password</span>\n            <mat-label></mat-label>\n            <input matInput placeholder=\"password\" name=\"password\"   [(ngModel)]=\"password\">\n          </mat-form-field>\n        </mat-card-content>\n        <button mat-stroked-button color=\"accent\" (click)=\"onSubmit(myform)\" class=\"btn-block\">Log in</button>\n      </form>\n    </mat-card>\n\n   \n  \n  </div></div></div></div>\n"

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        ]
    })
], AngularMaterialModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/guards/auth-guard.service */ "./src/app/services/guards/auth-guard.service.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    /*{ path: 'dashboard', component: DashboardComponent },*/
    { path: '**', redirectTo: 'login' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");





let AppComponent = class AppComponent {
    constructor(auth, router, _api) {
        this.auth = auth;
        this.router = router;
        this._api = _api;
        this.title = 'webApp';
    }
    ngOnInit() {
        this.databaseConnection();
    }
    databaseConnection() {
        this._api.connectToDB().subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                console.log("Connection to database setup successfully!!!");
            }
            else {
                console.log("Connection to database is unsuccessful!!!");
            }
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
    logout() {
        this.auth.setLoggedOut();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/guards/auth-guard.service */ "./src/app/services/guards/auth-guard.service.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog2"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog3"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()
        ],
        providers: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        entryComponents: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog2"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog3"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.userLabel {\n  position: fixed;\n  /* float: right; */\n  top: 80px;\n  margin-right: 21px;\n  right: 0;\n  background: black;\n  font-weight: 700;\n  /* left: -22px; */\n  border-radius: 31px;\n  padding: 17px;\n  z-index: 10;\n  color: white;\n}\n\n.tableCss {\n  background: #ffffffd1;\n  width: 80%;\n  top: 183px;\n  /* z-index: -1; */\n  position: relative;\n  margin: auto;\n}\n\nspan.heading1 {\n  color: white;\n  display: block;\n  text-align: center;\n  background-color: #4486ba;\n  /* padding-left: 20px; */\n  width: 100%;\n  padding: 12px;\n  position: relative;\n  font-weight: 700;\n  font-size: 36px;\n}\n\nmat-header-cell {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9yYWpvdHJvbi9fbXlfZHJpdmUvcHJvamVjdHMzL2p3YS93ZWJBcHAvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsZUFBQTtFQUNKLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENDO0VBQ0csaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLnVzZXJMYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgdG9wOiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjFweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC8qIGxlZnQ6IC0yMnB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgcGFkZGluZzogMTdweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZUNzc3tcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZDE7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0b3A6IDE4M3B4O1xuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbnNwYW4uaGVhZGluZzEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0ODZiYTtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDIwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG59XG4gbWF0LWhlYWRlci1jZWxse1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cblxuXG4iLCJzcGFuLnVzZXJMYWJlbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICB0b3A6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogMjFweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBmb250LXdlaWdodDogNzAwO1xuICAvKiBsZWZ0OiAtMjJweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgcGFkZGluZzogMTdweDtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlQ3NzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmQxO1xuICB3aWR0aDogODAlO1xuICB0b3A6IDE4M3B4O1xuICAvKiB6LWluZGV4OiAtMTsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbnNwYW4uaGVhZGluZzEge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDg2YmE7XG4gIC8qIHBhZGRpbmctbGVmdDogMjBweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, DialogOverviewExampleDialog, DialogOverviewExampleDialog2, DialogOverviewExampleDialog3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog2", function() { return DialogOverviewExampleDialog2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog3", function() { return DialogOverviewExampleDialog3; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");







/*import {MatDialog, MatDialogConfig} from "@angular/material";
*/ 
let DashboardComponent = class DashboardComponent {
    constructor(dialog, router, notify, _api, cdr) {
        this.dialog = dialog;
        this.router = router;
        this.notify = notify;
        this._api = _api;
        this.cdr = cdr;
        this.displayedColumns = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.getProperty = (obj, path) => (path.split('.').reduce((o, p) => o && o[p], obj));
    }
    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.getShoppingCentreDetails();
    }
    getShoppingCentreDetails() {
        this._api.getShoppingCentreDetails().subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                console.log("Details --", res.data);
                var columnsOfData = Object.keys(res.data[0]);
                columnsOfData.push('Action');
                columnsOfData.push('View Assets');
                this.displayedColumns = columnsOfData;
                console.log("Columns - ", this.displayedColumns);
                this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.dataSource.data = res.data;
                this.cdr.detectChanges();
                /*this.notify.success("Success - ",res.message);
                localStorage.setItem('username',res.data[0].username);
                localStorage.setItem('token',res.data[0].token);
                this.router.navigateByUrl('/dashboard');*/
                console.log("shopping centre details fetched successfully");
            }
            else {
                console.log("failure in fetching shopping centre details ");
            }
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
    openDialog(row) {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '100%',
            data: row
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getShoppingCentreDetails();
        });
    }
    openDialog2(row) {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
            width: '100%',
            data: row
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getShoppingCentreDetails();
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false })
], DashboardComponent.prototype, "sort", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialog, router, notify, _api, cdr, dialogRef, data) {
        this.dialog = dialog;
        this.router = router;
        this.notify = notify;
        this._api = _api;
        this.cdr = cdr;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    update() {
        console.log("Data -------------------- ", this.data);
        this._api.updateShoppingCentreDetails(this.data).subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                console.log("Details --", res.data);
                this.notify.success("Success - ", res.message);
                console.log("shopping centre details fetched successfully");
            }
            else {
                this.notify.error("Failure - ", res.message);
                console.log("failure in fetching shopping centre details ");
            }
            this.dialogRef.close();
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog1.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dialog1.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog);

let DialogOverviewExampleDialog2 = class DialogOverviewExampleDialog2 {
    constructor(dialog, router, notify, _api, cdr, dialogRef, data) {
        this.dialog = dialog;
        this.router = router;
        this.notify = notify;
        this._api = _api;
        this.cdr = cdr;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.getProperty = (obj, path) => (path.split('.').reduce((o, p) => o && o[p], obj));
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.fetchAssets();
    }
    fetchAssets() {
        var obj = {
            id: this.data.id
        };
        this._api.getAssets(obj).subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                console.log("Details --", res.data);
                var columnsOfData = Object.keys(res.data[0]);
                columnsOfData.push('Action');
                this.displayedColumns = columnsOfData;
                console.log("Columns - ", this.displayedColumns);
                this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
                setTimeout(() => this.dataSource.sort = this.sort);
                this.dataSource.data = res.data;
                this.cdr.detectChanges();
                /*this.notify.success("Success - ",res.message);
                localStorage.setItem('username',res.data[0].username);
                localStorage.setItem('token',res.data[0].token);
                this.router.navigateByUrl('/dashboard');*/
                console.log("shopping centre details fetched successfully");
            }
            else {
                console.log("failure in fetching shopping centre details ");
            }
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
    update() {
        console.log("Data -------------------- ", this.data);
        this._api.updateShoppingCentreDetails(this.data).subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                console.log("Details --", res.data);
                this.notify.success("Success - ", res.message);
                console.log("shopping centre details fetched successfully");
            }
            else {
                this.notify.error("Failure - ", res.message);
                console.log("failure in fetching shopping centre details ");
            }
            this.dialogRef.close();
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
    openDialog(row) {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog3, {
            width: '100%',
            data: row
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.fetchAssets();
        });
    }
};
DialogOverviewExampleDialog2.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false })
], DialogOverviewExampleDialog2.prototype, "sort", void 0);
DialogOverviewExampleDialog2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog2',
        template: __webpack_require__(/*! raw-loader!./dialog2.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dialog2.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog2);

let DialogOverviewExampleDialog3 = class DialogOverviewExampleDialog3 {
    constructor(dialog, router, notify, _api, cdr, dialogRef, data) {
        this.dialog = dialog;
        this.router = router;
        this.notify = notify;
        this._api = _api;
        this.cdr = cdr;
        this.dialogRef = dialogRef;
        this.data = data;
        this.status = [
            { value: 'ONLINE', viewValue: 'ONLINE' },
            { value: 'OFFLINE', viewValue: 'OFFLINE' }
        ];
    }
    onNoClick() {
        this.dialogRef.close();
    }
    update() {
        console.log("Data -------------------- ", this.data);
        this._api.updateAssets(this.data).subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                console.log("Details --", res.data);
                this.notify.success("Success - ", res.message);
                console.log("shopping centre details fetched successfully");
            }
            else {
                this.notify.error("Failure - ", res.message);
                console.log("failure in fetching shopping centre details ");
            }
            this.dialogRef.close();
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
};
DialogOverviewExampleDialog3.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog3',
        template: __webpack_require__(/*! raw-loader!./dialog3.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dialog3.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog3);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.label {\n  top: -16px;\n  color: #3b6b81;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9yYWpvdHJvbi9fbXlfZHJpdmUvcHJvamVjdHMzL2p3YS93ZWJBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuc3Bhbi5sYWJlbCB7XG4gICAgdG9wOiAtMTZweDtcbiAgICBjb2xvcjogIzNiNmI4MTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Iiwic3Bhbi5sYWJlbCB7XG4gIHRvcDogLTE2cHg7XG4gIGNvbG9yOiAjM2I2YjgxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notify.service */ "./src/app/services/notify.service.ts");






let LoginComponent = class LoginComponent {
    constructor(auth, router, notify, _api) {
        this.auth = auth;
        this.router = router;
        this.notify = notify;
        this._api = _api;
    }
    ngOnInit() {
        this.databaseConnection();
    }
    goToDashboard() {
    }
    databaseConnection() {
        this._api.connectToDB().subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                console.log("Connection to database setup successfully!!!");
            }
            else {
                console.log("Connection to database is unsuccessful!!!");
            }
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
    onSubmit(form) {
        console.log('Your form data : ', form.value);
        this._api.login(form.value).subscribe((res) => {
            //this.result=res;
            if (res.code == 'Success') {
                this.notify.success("Success - ", res.message);
                localStorage.setItem('username', res.data[0].username);
                localStorage.setItem('token', res.data[0].token);
                this.auth.setLoggedIn();
                this.router.navigateByUrl('/dashboard');
            }
            else {
                this.notify.error("Failure - ", res.message);
            }
        }, err => {
            if (err.status === 0 || err.status === 408) {
            }
            else {
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisService", function() { return ApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ApisService = class ApisService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Api_url;
    }
    setHeads(options) {
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');
        var header;
        if (options == 'one') {
            header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-type', 'application/json').set('token', token || '').set('username', username || '')
            };
            console.log("options...");
            return header;
        }
        if (options == 'two') {
            header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
            };
            return header;
        }
        if (options == 'three') {
            header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'enctype': 'multipart/form-data',
                })
            };
            return header;
        }
        if (options == 'four') {
            header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-type': 'application/json',
                })
            };
            return header;
        }
    }
    login(data) {
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/user/login', data, options);
    }
    Logout(data) {
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/api/user/logout', data, options);
    }
    connectToDB() {
        var options = this.setHeads('two');
        return this.httpClient.get(this.API_URL + '/db/connection', options);
    }
    getShoppingCentreDetails() {
        var options = this.setHeads('one');
        return this.httpClient.get(this.API_URL + '/shoppingcentre/getdata', options);
    }
    getAssets(data) {
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/assets/getdata', data, options);
    }
    updateShoppingCentreDetails(data) {
        var obj = {
            username: localStorage.getItem('username'),
            data: data
        };
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/shoppingcentre/update', obj, options);
    }
    updateAssets(data) {
        var obj = {
            username: localStorage.getItem('username'),
            data: data
        };
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/assets/update', obj, options);
    }
};
ApisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApisService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthService = class AuthService {
    constructor(_router) {
        this._router = _router;
        this.isLoggedIn = false;
    }
    isAuthenticated() {
        if (this.isLoggedIn == true) {
            return true;
        }
        else {
            return false;
        }
    }
    setLoggedIn() {
        this.isLoggedIn = true;
    }
    setLoggedOut() {
        this.isLoggedIn = false;
        this._router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/guards/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/guards/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuardService = class AuthGuardService {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate(next, state) {
        if (this._authService.isAuthenticated()) {
            return true;
        }
        // navigate to login page
        this._router.navigate(['/login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/notify.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/notify.service.ts ***!
  \********************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let NotifyService = class NotifyService {
    constructor(toastr) {
        this.toastr = toastr;
        this.fromWhere = "bottom-right";
    }
    success(bold, message) {
        this.toastr.success(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`, "", {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + this.fromWhere
        });
    }
    error(bold, message) {
        this.toastr.error(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`, "", {
            timeOut: 2000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + this.fromWhere
        });
    }
    info(bold, message) {
        this.toastr.info(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`, "", {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + this.fromWhere
        });
    }
    warning(bold, message) {
        this.toastr.warning(`<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`, "", {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + this.fromWhere
        });
    }
};
NotifyService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotifyService);



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
const environment = {
    production: false,
    webAppUrl: 'http://localhost:4200/#/',
    Api_url: 'http://localhost:9091'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/rajotron/_my_drive/projects3/jwa/webApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
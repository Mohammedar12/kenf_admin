(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "f4AX":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _authfake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authfake.service */ "DYii");






class UserProfileService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.httpOptions = {};
        this.authService.currentUser.subscribe(user => {
            this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "x-auth-token": user.token }) };
            console.log(user);
        });
    }
    getUserGroup() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + `/user/group`, this.httpOptions);
    }
    delUserGroup(sysInfo) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + `/user/group?id=` + sysInfo, this.httpOptions);
    }
    updateUserGroup(sysInfo) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + `/user/group`, sysInfo, this.httpOptions);
    }
    adduser(adduser) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + `/user/addUser`, adduser, this.httpOptions);
    }
    getAll() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + `/user/all`, this.httpOptions);
    }
    getFile(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + `/getfile?id=` + id);
    }
    register(user) {
        return this.http.post(`/users/register`, user);
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authfake_service__WEBPACK_IMPORTED_MODULE_3__["AuthfakeauthenticationService"])); };
UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _authfake_service__WEBPACK_IMPORTED_MODULE_3__["AuthfakeauthenticationService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "f4AX":
    /*!***********************************************!*\
      !*** ./src/app/core/services/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserProfileService */

    /***/
    function f4AX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileService", function () {
        return UserProfileService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _authfake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authfake.service */
      "DYii");

      var UserProfileService = /*#__PURE__*/function () {
        function UserProfileService(http, authService) {
          var _this = this;

          _classCallCheck(this, UserProfileService);

          this.http = http;
          this.authService = authService;
          this.httpOptions = {};
          this.authService.currentUser.subscribe(function (user) {
            _this.httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "x-auth-token": user.token
              })
            };
            console.log(user);
          });
        }

        _createClass(UserProfileService, [{
          key: "getUserGroup",
          value: function getUserGroup() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + "/user/group", this.httpOptions);
          }
        }, {
          key: "delUserGroup",
          value: function delUserGroup(sysInfo) {
            return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + "/user/group?id=" + sysInfo, this.httpOptions);
          }
        }, {
          key: "updateUserGroup",
          value: function updateUserGroup(sysInfo) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + "/user/group", sysInfo, this.httpOptions);
          }
        }, {
          key: "adduser",
          value: function adduser(_adduser) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + "/user/addUser", _adduser, this.httpOptions);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + "/user/all", this.httpOptions);
          }
        }, {
          key: "getFile",
          value: function getFile(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend + "/getfile?id=" + id);
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post("/users/register", user);
          }
        }]);

        return UserProfileService;
      }();

      UserProfileService.ɵfac = function UserProfileService_Factory(t) {
        return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authfake_service__WEBPACK_IMPORTED_MODULE_3__["AuthfakeauthenticationService"]));
      };

      UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserProfileService,
        factory: UserProfileService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _authfake_service__WEBPACK_IMPORTED_MODULE_3__["AuthfakeauthenticationService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "DrA5":
    /*!**********************************************!*\
      !*** ./src/app/account/auth/auth-routing.ts ***!
      \**********************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function DrA5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "GMhe");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup/signup.component */
      "Nok1");
      /* harmony import */


      var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./passwordreset/passwordreset.component */
      "by6y");

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: 'reset-password',
        component: _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_4__["PasswordresetComponent"]
      }];

      var AuthRoutingModule = /*#__PURE__*/_createClass(function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      });

      AuthRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "GMhe":
    /*!*******************************************************!*\
      !*** ./src/app/account/auth/login/login.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function GMhe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      "7dP1");
      /* harmony import */


      var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/authfake.service */
      "DYii");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function LoginComponent_ngb_alert_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.error);
        }
      }

      function LoginComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_div_31_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email must be a valid email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoginComponent_div_31_div_1_Template, 2, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LoginComponent_div_31_div_2_Template, 2, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.email.errors.email);
        }
      }

      function LoginComponent_div_36_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoginComponent_div_36_div_1_Template, 2, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };
      /**
       * Login component
       */


      var LoginComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function LoginComponent(formBuilder, route, router, authenticationService, authFackservice) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.authFackservice = authFackservice;
          this.submitted = false;
          this.error = ''; // set the currenr year

          this.year = new Date().getFullYear();
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }); // reset login status
            // this.authenticationService.logout();
            // get return url from route parameters or default to '/'
            // tslint:disable-next-line: no-string-literal

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
          /**
           * Form submit
           */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              // if (environment.defaultauth === 'firebase') {
              //   this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
              //     this.router.navigate(['/dashboard']);
              //   })
              //     .catch(error => {
              //       this.error = error ? error : '';
              //     });
              // } else {
              this.authFackservice.login(this.f.email.value, this.f.password.value) //  .pipe(first())
              .subscribe(function (data) {
                console.log(data);

                _this.router.navigate(['/dashboard']);
              }, function (error) {
                _this.error = error ? error : '';
              }); // }
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__["AuthfakeauthenticationService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 51,
        vars: 11,
        consts: [[1, "home-btn", "d-none", "d-sm-block"], ["href", "/", 1, "text-dark"], [1, "mdi", "mdi-home-variant", "h2"], [1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-soft-primary"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/kanf-logo.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["href", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "form-group", "mb-3"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customControlInline", 1, "custom-control-input"], ["for", "customControlInline", 1, "custom-control-label"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], ["routerLink", "/account/reset-password", 1, "text-muted"], [1, "mdi", "mdi-lock", "mr-1"], [1, "mt-5", "text-center"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h5", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Welcome Back !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sign in to continue to Kenf Admin Dashboard.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "form", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_25_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, LoginComponent_ngb_alert_26_Template, 2, 2, "ngb-alert", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, LoginComponent_div_31_Template, 3, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, LoginComponent_div_36_Template, 2, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Remember me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Forgot your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA9 ", ctx.year, " Kenf.");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__["AuthfakeauthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Nok1":
    /*!*********************************************************!*\
      !*** ./src/app/account/auth/signup/signup.component.ts ***!
      \*********************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function Nok1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      "7dP1");
      /* harmony import */


      var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/services/user.service */
      "f4AX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function SignupComponent_ngb_alert_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Registeration successfull. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);
        }
      }

      function SignupComponent_ngb_alert_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.error);
        }
      }

      function SignupComponent_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Userame is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupComponent_div_32_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.username.errors.required);
        }
      }

      function SignupComponent_div_37_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_div_37_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email must be a valid email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupComponent_div_37_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SignupComponent_div_37_div_2_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.email.errors.email);
        }
      }

      function SignupComponent_div_42_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupComponent_div_42_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.f.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var SignupComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function SignupComponent(formBuilder, route, router, authenticationService, userService) {
          _classCallCheck(this, SignupComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.submitted = false;
          this.error = '';
          this.successmsg = false; // set the currenr year

          this.year = new Date().getFullYear();
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signupForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.signupForm.controls;
          }
          /**
           * On submit form
           */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.signupForm.invalid) {
              return;
            } else {
              if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultauth === 'firebase') {
                this.authenticationService.register(this.f.email.value, this.f.password.value).then(function (res) {
                  _this2.successmsg = true;

                  if (_this2.successmsg) {
                    _this2.router.navigate(['/dashboard']);
                  }
                })["catch"](function (error) {
                  _this2.error = error ? error : '';
                });
              } else {
                this.userService.register(this.signupForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
                  _this2.successmsg = true;

                  if (_this2.successmsg) {
                    _this2.router.navigate(['/account/login']);
                  }
                }, function (error) {
                  _this2.error = error ? error : '';
                });
              }
            }
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.??fac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserProfileService"]));
      };

      SignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 73,
        vars: 16,
        consts: [[1, "home-btn", "d-none", "d-sm-block"], ["href", "/", 1, "text-dark"], [1, "mdi", "mdi-home-variant", "h2"], [1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-soft-primary"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["href", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], ["name", "signupForm", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["type", "success", 3, "dismissible", 4, "ngIf"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "form-group", "mb-3"], ["for", "username"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], [1, "form-group"], ["for", "password"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mb-0"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "font-weight-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h5", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Free Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Get your free Skote account now.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "form", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_25_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, SignupComponent_ngb_alert_26_Template, 2, 1, "ngb-alert", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, SignupComponent_ngb_alert_27_Template, 2, 2, "ngb-alert", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, SignupComponent_div_32_Template, 2, 1, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, SignupComponent_div_37_Template, 3, 2, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, SignupComponent_div_42_Template, 2, 1, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Sign in with");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "ul", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "By registering you agree to the Skote ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Terms of Use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Already have an account ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " by Themesbrand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.signupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.successmsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx.submitted && ctx.f.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA9 ", ctx.year, " Skote. Crafted with ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlert"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
          }, {
            type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserProfileService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "by6y":
    /*!***********************************************************************!*\
      !*** ./src/app/account/auth/passwordreset/passwordreset.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PasswordresetComponent */

    /***/
    function by6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordresetComponent", function () {
        return PasswordresetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      "7dP1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function PasswordresetComponent_ngb_alert_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.error);
        }
      }

      function PasswordresetComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PasswordresetComponent_div_30_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email must be a valid email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PasswordresetComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PasswordresetComponent_div_30_div_1_Template, 2, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PasswordresetComponent_div_30_div_2_Template, 2, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.email.errors.email);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };
      /**
       * Reset-password component
       */


      var PasswordresetComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function PasswordresetComponent(formBuilder, route, router, authenticationService) {
          _classCallCheck(this, PasswordresetComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.submitted = false;
          this.error = '';
          this.success = '';
          this.loading = false; // set the currenr year

          this.year = new Date().getFullYear();
        }

        _createClass(PasswordresetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.resetForm.controls;
          }
          /**
           * On submit form
           */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.success = '';
            this.submitted = true; // stop here if form is invalid

            if (this.resetForm.invalid) {
              return;
            }

            if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultauth === 'firebase') {
              this.authenticationService.resetPassword(this.f.email.value)["catch"](function (error) {
                _this3.error = error ? error : '';
              });
            }
          }
        }]);

        return PasswordresetComponent;
      }();

      PasswordresetComponent.??fac = function PasswordresetComponent_Factory(t) {
        return new (t || PasswordresetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      PasswordresetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PasswordresetComponent,
        selectors: [["app-passwordreset"]],
        decls: 42,
        vars: 7,
        consts: [[1, "home-btn", "d-none", "d-sm-block"], ["href", "/", 1, "text-dark"], [1, "mdi", "mdi-home-variant", "h2"], [1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-soft-primary"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["href", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], ["name", "resetForm", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "form-group", "mb-3"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "mb-0", "row"], [1, "col-12", "text-right"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "font-weight-medium", "text-primary"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function PasswordresetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h5", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Re-Password with Skote.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function PasswordresetComponent_Template_form_ngSubmit_24_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, PasswordresetComponent_ngb_alert_25_Template, 2, 2, "ngb-alert", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, PasswordresetComponent_div_30_Template, 3, 2, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Remember It ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Sign In here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.resetForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA9 ", ctx.year, " Kenf.");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZHJlc2V0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PasswordresetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-passwordreset',
            templateUrl: './passwordreset.component.html',
            styleUrls: ['./passwordreset.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cnSs":
    /*!*********************************************!*\
      !*** ./src/app/account/auth/auth.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthModule */

    /***/
    function cnSs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/ui/ui.module */
      "4zvT");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "GMhe");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup/signup.component */
      "Nok1");
      /* harmony import */


      var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth-routing */
      "DrA5");
      /* harmony import */


      var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./passwordreset/passwordreset.component */
      "by6y");

      var AuthModule = /*#__PURE__*/_createClass(function AuthModule() {
        _classCallCheck(this, AuthModule);
      });

      AuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthModule
      });
      AuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordresetComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordresetComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jcJX":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountModule */

    /***/
    function jcJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return AccountModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-routing.module */
      "sGj0");
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth.module */
      "cnSs");

      var AccountModule = /*#__PURE__*/_createClass(function AccountModule() {
        _classCallCheck(this, AccountModule);
      });

      AccountModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AccountModule
      });
      AccountModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AccountModule_Factory(t) {
          return new (t || AccountModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AccountModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccountModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "sGj0":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountRoutingModule */

    /***/
    function sGj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
        return AccountRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "cnSs")).then(function (m) {
            return m.AuthModule;
          });
        }
      }];

      var AccountRoutingModule = /*#__PURE__*/_createClass(function AccountRoutingModule() {
        _classCallCheck(this, AccountRoutingModule);
      });

      AccountRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AccountRoutingModule
      });
      AccountRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AccountRoutingModule_Factory(t) {
          return new (t || AccountRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AccountRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccountRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map
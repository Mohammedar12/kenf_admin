(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"], {
    /***/
    "46V9":
    /*!********************************************************!*\
      !*** ./src/app/pages/customers/customers.component.ts ***!
      \********************************************************/

    /*! exports provided: CustomersComponent */

    /***/
    function V9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
        return CustomersComponent;
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


      var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/services/customer.service */
      "5LAb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/ui/pagetitle/pagetitle.component */
      "V5ls");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");

      function CustomersComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_33_Template_a_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var customers_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](36);

            return ctx_r5.openEdit(_r1, customers_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_33_Template_a_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var customers_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.deleteGroupItem(customers_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var customers_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "customCheck", i_r4, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("for", "customCheck", i_r4, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customers_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customers_r3.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customers_r3.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customers_r3.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", customers_r3.rating, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customers_r3.balance);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](23, 9, customers_r3.createdAt, "dd/LL/YYYY"));
        }
      }

      function CustomersComponent_ng_template_35_ngb_alert_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r9.error);
        }
      }

      function CustomersComponent_ng_template_35_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "ID is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_ng_template_35_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_template_35_div_12_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.fe.id.errors.required);
        }
      }

      function CustomersComponent_ng_template_35_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_ng_template_35_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_template_35_div_17_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.fe.name.errors.required);
        }
      }

      function CustomersComponent_ng_template_35_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "phone is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_ng_template_35_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_template_35_div_22_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.fe.phone.errors.required);
        }
      }

      function CustomersComponent_ng_template_35_div_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_ng_template_35_div_27_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email must be a valid email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_ng_template_35_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_template_35_div_27_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomersComponent_ng_template_35_div_27_div_2_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.fe.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.fe.email.errors.email);
        }
      }

      function CustomersComponent_ng_template_35_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Address is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_ng_template_35_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_template_35_div_32_div_1_Template, 2, 0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.fe.address.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function CustomersComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Edit Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_template_35_Template_button_click_3_listener() {
            var modal_r8 = ctx.$implicit;
            return modal_r8.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CustomersComponent_ng_template_35_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var modal_r8 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.onEdit(modal_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, CustomersComponent_ng_template_35_ngb_alert_7_Template, 2, 2, "ngb-alert", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CustomersComponent_ng_template_35_div_12_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CustomersComponent_ng_template_35_div_17_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, CustomersComponent_ng_template_35_div_22_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, CustomersComponent_ng_template_35_div_27_Template, 3, 2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, CustomersComponent_ng_template_35_div_32_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_template_35_Template_button_click_34_listener() {
            var modal_r8 = ctx.$implicit;
            return modal_r8.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r2.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, ctx_r2.submitted && ctx_r2.fe.id.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.submitted && ctx_r2.fe.id.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c0, ctx_r2.submitted && ctx_r2.fe.name.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.submitted && ctx_r2.fe.name.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](16, _c0, ctx_r2.submitted && ctx_r2.fe.phone.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.submitted && ctx_r2.fe.phone.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](18, _c0, ctx_r2.submitted && ctx_r2.fe.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.submitted && ctx_r2.fe.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](20, _c0, ctx_r2.submitted && ctx_r2.fe.address.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.submitted && ctx_r2.fe.address.errors);
        }
      }
      /**
       * Ecomerce Customers component
       */


      var CustomersComponent = /*#__PURE__*/function () {
        function CustomersComponent(customerService, modalService, formBuilder) {
          _classCallCheck(this, CustomersComponent);

          this.customerService = customerService;
          this.modalService = modalService;
          this.formBuilder = formBuilder;
          this.submitted = false;
          this.error = "";
        }

        _createClass(CustomersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.breadCrumbItems = [{
              label: 'Customers'
            }, {
              label: 'Customers',
              active: true
            }];
            this.currentpage = 1;
            this.customerService.getCustomers().subscribe(function (val) {
              _this.customersData = val;
              console.log(val);
            });
            this.editForm = this.formBuilder.group({
              id: [{
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            /**
             * Fetches the data
             */
            // this._fetchData();
          }
        }, {
          key: "fe",
          get: function get() {
            return this.editForm.controls;
          }
        }, {
          key: "openEdit",
          value: function openEdit(content, id) {
            var _this2 = this;

            var newTable = this.customersData.filter(function (data) {
              return data.id == id;
            });
            this.editForm.controls['id'].setValue(newTable[0].id);
            this.editForm.controls['name'].setValue(newTable[0].name);
            this.editForm.controls['phone'].setValue(newTable[0].phone);
            this.editForm.controls['address'].setValue(newTable[0].address);
            this.editForm.controls['email'].setValue(newTable[0].email);
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this2.editForm.reset();

              console.log("Closed with: ".concat(result));
            }, function (reason) {
              _this2.editForm.reset(); // console.log(      `Dismissed ${this.getDismissReason(reason)}` );

            });
          }
          /**
           * Customers data fetches
           */
          // private _fetchData() {
          //   this.customersData = customersData;
          // }

        }, {
          key: "deleteGroupItem",
          value: function deleteGroupItem(id) {
            var _this3 = this;

            this.customerService.delCustomer(id).subscribe(function (data) {
              _this3.customersData = _this3.customersData.filter(function (data) {
                return data.id != id;
              }); // this.sharedDataService.changeTable(newTable);
              // modal.close();
              // this.newForm.reset();
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(modal) {
            var _this4 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.editForm.invalid) {
              return;
            } else {
              var post_data = this.editForm.getRawValue();
              this.customerService.updateCustomer(post_data).subscribe(function (data) {
                console.log(post_data);

                var findIndex = _this4.customersData.findIndex(function (data) {
                  return data.id == post_data.id;
                });

                _this4.customersData[findIndex] = {
                  id: post_data.id,
                  name: post_data.name,
                  email: post_data.email,
                  phone: post_data.phone,
                  address: post_data.address,
                  createdAt: _this4.customersData[findIndex].createdAt
                }; // this.sharedDataService.changeTable(this.customersData);

                _this4.submitted = false;
                modal.close();

                _this4.editForm.reset();
              });
            }
          }
        }]);

        return CustomersComponent;
      }();

      CustomersComponent.??fac = function CustomersComponent_Factory(t) {
        return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      CustomersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CustomersComponent,
        selectors: [["app-customers"]],
        decls: 37,
        vars: 6,
        consts: [[1, "container-fluid"], ["title", "Customers", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "mr-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "table-responsive"], [1, "table", "table-centered", "table-nowrap"], [4, "ngFor", "ngForOf"], ["role", "document"], ["editContent", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id"], [1, "custom-control-label", 3, "for"], [1, "mb-1"], [1, "mb-0"], [1, "badge", "badge-success", "font-size-12"], [1, "mdi", "mdi-star", "mr-1"], ["container", "body", "ngbDropdown", "", "placement", "bottom-right", 1, "dropdown"], ["href", "javascript: void(0);", "data-toggle", "dropdown", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "dropdown-toggle", "card-drop"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [1, "mdi", "mdi-account-edit"], [1, "mdi", "mdi-delete"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], ["id", "editForm", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "form-group"], ["for", "name_en"], ["type", "text", "formControlName", "id", "id", "id", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "name", "id", "name", 1, "form-control", 3, "ngClass"], ["for", "name_ar"], ["type", "text", "formControlName", "phone", "id", "phone", 1, "form-control", 3, "ngClass"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["for", "address"], ["type", "text", "formControlName", "address", "id", "address", 1, "form-control", 3, "ngClass"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "form", "editForm", "value", "Save", 1, "btn", "btn-primary"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function CustomersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-page-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomersComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.term = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Phone / Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Rating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Total purchases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Joining Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, CustomersComponent_tr_33_Template, 35, 12, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, CustomersComponent_ng_template_35_Template, 37, 22, "ng-template", 15, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("breadcrumbItems", ctx.breadCrumbItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.term);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](34, 3, ctx.customersData, ctx.term));
          }
        },
        directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__["PagetitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]],
        pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customers',
            templateUrl: './customers.component.html',
            styleUrls: ['./customers.component.scss']
          }]
        }], function () {
          return [{
            type: _core_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9Flm":
    /*!************************************************************!*\
      !*** ./src/app/pages/customers/orders/orders.component.ts ***!
      \************************************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function Flm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/customer.service */
      "5LAb");
      /* harmony import */


      var _core_services_marketing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/marketing.service */
      "ovIy");
      /* harmony import */


      var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/ui/pagetitle/pagetitle.component */
      "V5ls");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angularx-qrcode */
      "0hV+");

      function OrdersComponent_tr_32_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrdersComponent_tr_32_div_10_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var product_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](36);

            return ctx_r8.openDetail(_r3, product_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var product_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", product_r7.name_en, " ");
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "badge-soft-danger": a0,
          "badge-soft-warning": a1,
          "badge-soft-info": a2
        };
      };

      function OrdersComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, OrdersComponent_tr_32_div_10_Template, 3, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrdersComponent_tr_32_Template_a_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var data_r5 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);

            return ctx_r10.openEdit(_r1, data_r5._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrdersComponent_tr_32_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var data_r5 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.deleteGroupItem(data_r5._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var data_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "customCheck", data_r5.index, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("for", "customCheck", data_r5.index, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r5.order_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", data_r5.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r5.customer_id.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", data_r5.coupon_id == null ? null : data_r5.coupon_id.code, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r5.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](19, 10, data_r5.createdAt, "dd/LL/YYYY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](13, _c0, data_r5.status === "REJECTED" || data_r5.status === "CANCELED", data_r5.status === "SHIPPED" || data_r5.status === "DELIVERED", data_r5.status === "WAITING"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r5.status);
        }
      }

      function OrdersComponent_ng_template_33_ngb_alert_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r14.error);
        }
      }

      function OrdersComponent_ng_template_33_ng_select_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ng-select", 41);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("items", ctx_r15.order_status);
        }
      }

      function OrdersComponent_ng_template_33_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Status is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrdersComponent_ng_template_33_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrdersComponent_ng_template_33_div_10_div_1_Template, 2, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.fe.status.errors.required);
        }
      }

      function OrdersComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Change Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrdersComponent_ng_template_33_Template_button_click_3_listener() {
            var modal_r13 = ctx.$implicit;
            return modal_r13.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OrdersComponent_ng_template_33_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var modal_r13 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.onEdit(modal_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, OrdersComponent_ng_template_33_ngb_alert_7_Template, 2, 2, "ngb-alert", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, OrdersComponent_ng_template_33_ng_select_9_Template, 1, 1, "ng-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, OrdersComponent_ng_template_33_div_10_Template, 2, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrdersComponent_ng_template_33_Template_button_click_12_listener() {
            var modal_r13 = ctx.$implicit;
            return modal_r13.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r2.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.change_badge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.submittedEdit && ctx_r2.fe.status.errors);
        }
      }

      function OrdersComponent_ng_template_35_ngb_alert_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r23.error);
        }
      }

      function OrdersComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Order Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrdersComponent_ng_template_35_Template_button_click_3_listener() {
            var modal_r22 = ctx.$implicit;
            return modal_r22.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, OrdersComponent_ng_template_35_ngb_alert_6_Template, 2, 2, "ngb-alert", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Title: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Price: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Qrcode: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "qrcode", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrdersComponent_ng_template_35_Template_button_click_29_listener() {
            var modal_r22 = ctx.$implicit;
            return modal_r22.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r4.backend + "/getfile/?id=" + ctx_r4.selectedProductImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA0 ", ctx_r4.selectedProductTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA0 ", ctx_r4.selectedProductPrice, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA0 ", ctx_r4.generateQrcode, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("qrdata", ctx_r4.generateQrcode)("width", 200)("errorCorrectionLevel", "M");
        }
      }
      /**
       * Ecommerce orders component
       */


      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent(customerService, modalService, formBuilder, marketingService) {
          _classCallCheck(this, OrdersComponent);

          this.customerService = customerService;
          this.modalService = modalService;
          this.formBuilder = formBuilder;
          this.marketingService = marketingService;
          this.change_badge = [true];
          this.backend = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend;
          this.error = '';
          this.submitted = false;
          this.submittedEdit = false;
          this.generateQrcode = "";
          this.barcodeImage = "";
          this.selectedProductTitle = "";
          this.selectedProductPrice = "";
          this.selectedProductImage = "";
        }

        _createClass(OrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.customerService.getOrders().subscribe(function (orders) {
              _this5.transactions = orders;
              console.log(orders);
            });
            this.editForm = this.formBuilder.group({
              order_id: [''],
              // customer: ['', [Validators.required]],
              // discount: ['', [Validators.required]],
              // total: ['', [Validators.required]],
              status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.order_status = ['WAITING', 'SHIPPED', 'PREPARED', 'HAND_OVERED', 'DELIVERED', 'REJECTED', 'CANCELED', 'ACCEPTED'];
            this.breadCrumbItems = [{
              label: 'Customers'
            }, {
              label: 'Orders',
              active: true
            }];
          }
        }, {
          key: "fe",
          get: function get() {
            return this.editForm.controls;
          }
        }, {
          key: "selectedStatusFunc",
          value: function selectedStatusFunc(status) {
            console.log(status);
          }
        }, {
          key: "openDetail",
          value: function openDetail(content, product) {
            var _this6 = this;

            this.generateQrcode = product.barcode;
            this.selectedProductTitle = product.name_en;
            this.selectedProductPrice = product.extra_price;
            this.selectedProductImage = product.images[0];
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              // this.editForm.reset();
              console.log("Closed with: ".concat(result));
            }, function (reason) {
              // this.editForm.reset();
              console.log("Dismissed ".concat(_this6.getDismissReason(reason)));
            });
          }
        }, {
          key: "openEdit",
          value: function openEdit(content, id) {
            var _this7 = this;

            var newTable = this.transactions.filter(function (item) {
              return item._id == id;
            });
            this.editForm.controls['order_id'].setValue(newTable[0].order_id); // this.editForm.controls['customer'].setValue(newTable[0].customer_id.name);
            // this.editForm.controls['discount'].setValue(newTable[0].coupon_id.code);
            // this.editForm.controls['total'].setValue(newTable[0].totalPrice);

            this.editForm.controls['status'].setValue(newTable[0].status);
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              // this.editForm.reset();
              console.log("Closed with: ".concat(result));
            }, function (reason) {
              // this.editForm.reset();
              console.log("Dismissed ".concat(_this7.getDismissReason(reason)));
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(modal) {
            var _this8 = this;

            this.submittedEdit = true;

            if (this.editForm.invalid) {
              return;
            } else {
              var post_data = this.editForm.getRawValue();
              this.customerService.updateOrder(post_data).subscribe(function (data) {
                _this8.transactions = _this8.transactions.map(function (item) {
                  if (item.order_id == post_data.order_id) {
                    item.status = post_data.status;
                  }

                  return item;
                });
              });
              modal.close();
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "deleteGroupItem",
          value: function deleteGroupItem(id) {
            var _this9 = this;

            this.customerService.delOrders(id).subscribe(function (data) {
              _this9.transactions = _this9.transactions.filter(function (item) {
                return item._id != id;
              });
            });
          }
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.??fac = function OrdersComponent_Factory(t) {
        return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_marketing_service__WEBPACK_IMPORTED_MODULE_5__["MarketingService"]));
      };

      OrdersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrdersComponent,
        selectors: [["app-orders"]],
        decls: 37,
        vars: 2,
        consts: [[1, "container-fluid"], ["title", "Orders", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "thead-light"], [2, "width", "20px"], [1, "custom-control", "custom-checkbox"], ["id", "customCheck", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck", 1, "custom-control-label"], [4, "ngFor", "ngForOf"], ["role", "document"], ["editContent", ""], ["detailContent", ""], ["type", "checkbox", 1, "custom-control-input", 3, "id"], [1, "custom-control-label", 3, "for"], ["href", "javascript: void(0);", 1, "text-body", "font-weight-bold"], [1, "badge", "badge-pill", "badge-soft-success", "font-size-12", 3, "ngClass"], ["ngbDropdown", "", "container", "body", "placement", "bottom-left"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "true", 1, "mdi", "mdi-dots-vertical", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [1, "mdi", "mdi-account-edit"], [1, "mdi", "mdi-delete"], ["href", "javascript: void(0);", 1, "text-body", "font-weight-bold", 3, "click"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], ["id", "editForm", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "form-group"], ["formControlName", "status", 3, "items", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "form", "editForm", "value", "Save", 1, "btn", "btn-primary"], ["type", "danger", 3, "dismissible"], ["formControlName", "status", 3, "items"], [1, "invalid-feedback"], [4, "ngIf"], [1, "d-flex", "mx-2"], [2, "width", "200px", "height", "200px", 3, "src"], [1, "ml-2"], [1, "d-flex"], ["id", "product_name mr-2"], ["for", "product_name", 1, "font-weight-bold"], [1, "d-flex", "mt-2"], ["id", "product_price mr-2"], ["for", "product_price", 1, "font-weight-bold"], ["id", "qrcode mr-2"], ["for", "qrcode", 1, "font-weight-bold"], [1, "d-flex", "justify-content-center"], [3, "qrdata", "width", "errorCorrectionLevel"]],
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-page-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "thead", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Order ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Discount code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, OrdersComponent_tr_32_Template, 33, 17, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, OrdersComponent_ng_template_33_Template, 15, 4, "ng-template", 14, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, OrdersComponent_ng_template_35_Template, 31, 8, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("breadcrumbItems", ctx.breadCrumbItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.transactions);
          }
        },
        directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__["PagetitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlert"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [".ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%] {\n  height: 140px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHdCQUFBO0FBQVIiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.scss']
          }]
        }], function () {
          return [{
            type: _core_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _core_services_marketing_service__WEBPACK_IMPORTED_MODULE_5__["MarketingService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SUx8":
    /*!*****************************************************!*\
      !*** ./src/app/pages/customers/customers.module.ts ***!
      \*****************************************************/

    /*! exports provided: CustomersModule */

    /***/
    function SUx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersModule", function () {
        return CustomersModule;
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


      var _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customers-routing.module */
      "Z2eP");
      /* harmony import */


      var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/ui/ui.module */
      "4zvT");
      /* harmony import */


      var _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/widget/widget.module */
      "+mqE");
      /* harmony import */


      var ng5_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng5-slider */
      "EsRS");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-dropzone-wrapper */
      "vV3i");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./customers.component */
      "46V9");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./orders/orders.component */
      "9Flm");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angularx-qrcode */
      "0hV+");

      var config = {// Change this to your upload POST address:
      };

      var CustomersModule = /*#__PURE__*/_createClass(function CustomersModule() {
        _classCallCheck(this, CustomersModule);
      });

      CustomersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CustomersModule
      });
      CustomersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CustomersModule_Factory(t) {
          return new (t || CustomersModule)();
        },
        providers: [{
          provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DROPZONE_CONFIG"],
          useValue: config
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_5__["WidgetModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_6__["Ng5SliderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__["QRCodeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CustomersModule, {
          declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_11__["CustomersComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_5__["WidgetModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_6__["Ng5SliderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__["QRCodeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            // tslint:disable-next-line: max-line-length
            declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_11__["CustomersComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_5__["WidgetModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_6__["Ng5SliderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__["QRCodeModule"]],
            providers: [{
              provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DROPZONE_CONFIG"],
              useValue: config
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Z2eP":
    /*!*************************************************************!*\
      !*** ./src/app/pages/customers/customers-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CustomersRoutingModule */

    /***/
    function Z2eP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function () {
        return CustomersRoutingModule;
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


      var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customers.component */
      "46V9");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders/orders.component */
      "9Flm");

      var routes = [{
        path: '',
        redirectTo: 'list'
      }, {
        path: 'list',
        component: _customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]
      }, {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]
      }];

      var CustomersRoutingModule = /*#__PURE__*/_createClass(function CustomersRoutingModule() {
        _classCallCheck(this, CustomersRoutingModule);
      });

      CustomersRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CustomersRoutingModule
      });
      CustomersRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CustomersRoutingModule_Factory(t) {
          return new (t || CustomersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CustomersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersRoutingModule, [{
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
//# sourceMappingURL=customers-customers-module-es5.js.map
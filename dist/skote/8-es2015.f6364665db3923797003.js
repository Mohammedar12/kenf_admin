(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{SUx8:function(e,c,t){"use strict";t.r(c),t.d(c,"CustomersModule",function(){return W});var i=t("ofXK"),d=t("3Pt+"),o=t("tyNb"),r=t("fXoL"),n=t("5LAb"),s=t("1kSV"),a=t("V5ls"),l=t("cZdB");function u(e,c){if(1&e){const e=r.fc();r.ec(0,"tr"),r.ec(1,"td"),r.ec(2,"div",17),r.Zb(3,"input",18),r.ec(4,"label",19),r.Zc(5,"\xa0"),r.dc(),r.dc(),r.dc(),r.ec(6,"td"),r.Zc(7),r.dc(),r.ec(8,"td"),r.ec(9,"p",20),r.Zc(10),r.dc(),r.ec(11,"p",21),r.Zc(12),r.dc(),r.dc(),r.ec(13,"td"),r.Zc(14),r.dc(),r.ec(15,"td"),r.ec(16,"span",22),r.Zb(17,"i",23),r.Zc(18),r.dc(),r.dc(),r.ec(19,"td"),r.Zc(20),r.dc(),r.ec(21,"td"),r.Zc(22),r.sc(23,"date"),r.dc(),r.ec(24,"td"),r.ec(25,"div",24),r.ec(26,"a",25),r.Zb(27,"i",26),r.dc(),r.ec(28,"ul",27),r.ec(29,"a",28),r.oc("click",function(){r.Nc(e);const t=c.$implicit,i=r.rc(),d=r.Kc(36);return i.openEdit(d,t.id)}),r.Zb(30,"i",29),r.Zc(31,"Edit"),r.dc(),r.ec(32,"a",28),r.oc("click",function(){r.Nc(e);const t=c.$implicit;return r.rc().deleteGroupItem(t.id)}),r.Zb(33,"i",30),r.Zc(34,"delete"),r.dc(),r.dc(),r.dc(),r.dc(),r.dc()}if(2&e){const e=c.$implicit,t=c.index;r.Kb(3),r.Ac("id","customCheck",t,""),r.Kb(1),r.Ac("for","customCheck",t,""),r.Kb(3),r.ad(e.name),r.Kb(3),r.ad(e.phone),r.Kb(2),r.ad(e.email),r.Kb(2),r.ad(e.address),r.Kb(4),r.bd(" ",e.rating," "),r.Kb(2),r.ad(e.balance),r.Kb(2),r.ad(r.uc(23,9,e.createdAt,"dd/LL/YYYY"))}}function m(e,c){if(1&e&&(r.ec(0,"ngb-alert",51),r.Zc(1),r.dc()),2&e){const e=r.rc(2);r.yc("dismissible",!1),r.Kb(1),r.ad(e.error)}}function b(e,c){1&e&&(r.ec(0,"div"),r.Zc(1,"ID is required"),r.dc())}function f(e,c){if(1&e&&(r.ec(0,"div",52),r.Xc(1,b,2,0,"div",53),r.dc()),2&e){const e=r.rc(2);r.Kb(1),r.yc("ngIf",e.fe.id.errors.required)}}function p(e,c){1&e&&(r.ec(0,"div"),r.Zc(1,"Name is required"),r.dc())}function h(e,c){if(1&e&&(r.ec(0,"div",52),r.Xc(1,p,2,0,"div",53),r.dc()),2&e){const e=r.rc(2);r.Kb(1),r.yc("ngIf",e.fe.name.errors.required)}}function g(e,c){1&e&&(r.ec(0,"div"),r.Zc(1,"phone is required"),r.dc())}function v(e,c){if(1&e&&(r.ec(0,"div",52),r.Xc(1,g,2,0,"div",53),r.dc()),2&e){const e=r.rc(2);r.Kb(1),r.yc("ngIf",e.fe.phone.errors.required)}}function Z(e,c){1&e&&(r.ec(0,"div"),r.Zc(1,"Email is required"),r.dc())}function C(e,c){1&e&&(r.ec(0,"div"),r.Zc(1,"Email must be a valid email address"),r.dc())}function y(e,c){if(1&e&&(r.ec(0,"div",52),r.Xc(1,Z,2,0,"div",53),r.Xc(2,C,2,0,"div",53),r.dc()),2&e){const e=r.rc(2);r.Kb(1),r.yc("ngIf",e.fe.email.errors.required),r.Kb(1),r.yc("ngIf",e.fe.email.errors.email)}}function E(e,c){1&e&&(r.ec(0,"div"),r.Zc(1,"Address is required"),r.dc())}function I(e,c){if(1&e&&(r.ec(0,"div",52),r.Xc(1,E,2,0,"div",53),r.dc()),2&e){const e=r.rc(2);r.Kb(1),r.yc("ngIf",e.fe.address.errors.required)}}const K=function(e){return{"is-invalid":e}};function k(e,c){if(1&e){const e=r.fc();r.ec(0,"div",31),r.ec(1,"h5",32),r.Zc(2,"Edit Customer"),r.dc(),r.ec(3,"button",33),r.oc("click",function(){return c.$implicit.dismiss("Cross click")}),r.Zc(4,"\xd7"),r.dc(),r.dc(),r.ec(5,"div",34),r.ec(6,"form",35),r.oc("ngSubmit",function(){r.Nc(e);const t=c.$implicit;return r.rc().onEdit(t)}),r.Xc(7,m,2,2,"ngb-alert",36),r.ec(8,"div",37),r.ec(9,"label",38),r.Zc(10,"ID"),r.dc(),r.Zb(11,"input",39),r.Xc(12,f,2,1,"div",40),r.dc(),r.ec(13,"div",37),r.ec(14,"label",38),r.Zc(15,"Name"),r.dc(),r.Zb(16,"input",41),r.Xc(17,h,2,1,"div",40),r.dc(),r.ec(18,"div",37),r.ec(19,"label",42),r.Zc(20,"Phone"),r.dc(),r.Zb(21,"input",43),r.Xc(22,v,2,1,"div",40),r.dc(),r.ec(23,"div",37),r.ec(24,"label",44),r.Zc(25,"Email"),r.dc(),r.Zb(26,"input",45),r.Xc(27,y,3,2,"div",40),r.dc(),r.ec(28,"div",37),r.ec(29,"label",46),r.Zc(30,"Address"),r.dc(),r.Zb(31,"input",47),r.Xc(32,I,2,1,"div",40),r.dc(),r.dc(),r.dc(),r.ec(33,"div",48),r.ec(34,"button",49),r.oc("click",function(){return c.$implicit.close("Close click")}),r.Zc(35,"Close"),r.dc(),r.Zb(36,"input",50),r.dc()}if(2&e){const e=r.rc();r.Kb(6),r.yc("formGroup",e.editForm),r.Kb(1),r.yc("ngIf",e.error),r.Kb(4),r.yc("ngClass",r.Cc(12,K,e.submitted&&e.fe.id.errors)),r.Kb(1),r.yc("ngIf",e.submitted&&e.fe.id.errors),r.Kb(4),r.yc("ngClass",r.Cc(14,K,e.submitted&&e.fe.name.errors)),r.Kb(1),r.yc("ngIf",e.submitted&&e.fe.name.errors),r.Kb(4),r.yc("ngClass",r.Cc(16,K,e.submitted&&e.fe.phone.errors)),r.Kb(1),r.yc("ngIf",e.submitted&&e.fe.phone.errors),r.Kb(4),r.yc("ngClass",r.Cc(18,K,e.submitted&&e.fe.email.errors)),r.Kb(1),r.yc("ngIf",e.submitted&&e.fe.email.errors),r.Kb(4),r.yc("ngClass",r.Cc(20,K,e.submitted&&e.fe.address.errors)),r.Kb(1),r.yc("ngIf",e.submitted&&e.fe.address.errors)}}let D=(()=>{class e{constructor(e,c,t){this.customerService=e,this.modalService=c,this.formBuilder=t,this.submitted=!1,this.error=""}ngOnInit(){this.breadCrumbItems=[{label:"Customers"},{label:"Customers",active:!0}],this.currentpage=1,this.customerService.getCustomers().subscribe(e=>{this.customersData=e,console.log(e)}),this.editForm=this.formBuilder.group({id:[{value:"",disabled:!0},[d.w.required]],name:["",[d.w.required]],phone:["",[d.w.required]],email:["",[d.w.required,d.w.email]],address:["",[d.w.required]]})}get fe(){return this.editForm.controls}openEdit(e,c){let t=this.customersData.filter(e=>e.id==c);this.editForm.controls.id.setValue(t[0].id),this.editForm.controls.name.setValue(t[0].name),this.editForm.controls.phone.setValue(t[0].phone),this.editForm.controls.address.setValue(t[0].address),this.editForm.controls.email.setValue(t[0].email),this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{this.editForm.reset(),console.log("Closed with: "+e)},e=>{this.editForm.reset()})}deleteGroupItem(e){this.customerService.delCustomer(e).subscribe(c=>{this.customersData=this.customersData.filter(c=>c.id!=e)})}onEdit(e){if(this.submitted=!0,!this.editForm.invalid){let c=this.editForm.getRawValue(),t=c.id;delete c.id,this.customerService.updateCustomer(c,t).subscribe(t=>{console.log(c);let i=this.customersData.findIndex(e=>e.id==c.id);this.customersData[i]={id:c.id,name:c.name,email:c.email,phone:c.phone,address:c.address,createdAt:this.customersData[i].createdAt},this.submitted=!1,e.close(),this.editForm.reset()})}}}return e.\u0275fac=function(c){return new(c||e)(r.Yb(n.a),r.Yb(s.t),r.Yb(d.e))},e.\u0275cmp=r.Sb({type:e,selectors:[["app-customers"]],decls:37,vars:6,consts:[[1,"container-fluid"],["title","Customers",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],[1,"col-sm-4"],[1,"search-box","mr-2","mb-2","d-inline-block"],[1,"position-relative"],["type","text","placeholder","Search...",1,"form-control",3,"ngModel","ngModelChange"],[1,"bx","bx-search-alt","search-icon"],[1,"table-responsive"],[1,"table","table-centered","table-nowrap"],[4,"ngFor","ngForOf"],["role","document"],["editContent",""],[1,"custom-control","custom-checkbox"],["type","checkbox",1,"custom-control-input",3,"id"],[1,"custom-control-label",3,"for"],[1,"mb-1"],[1,"mb-0"],[1,"badge","badge-success","font-size-12"],[1,"mdi","mdi-star","mr-1"],["container","body","ngbDropdown","","placement","bottom-right",1,"dropdown"],["href","javascript: void(0);","data-toggle","dropdown","ngbDropdownToggle","","aria-expanded","false",1,"dropdown-toggle","card-drop"],[1,"mdi","mdi-dots-horizontal","font-size-18"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"click"],[1,"mdi","mdi-account-edit"],[1,"mdi","mdi-delete"],[1,"modal-header"],[1,"modal-title","mt-0"],["type","button","aria-hidden","true",1,"close",3,"click"],[1,"modal-body"],["id","editForm",1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group"],["for","name_en"],["type","text","formControlName","id","id","id",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","name","id","name",1,"form-control",3,"ngClass"],["for","name_ar"],["type","text","formControlName","phone","id","phone",1,"form-control",3,"ngClass"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["for","address"],["type","text","formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"],["type","submit","form","editForm","value","Save",1,"btn","btn-primary"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,c){1&e&&(r.ec(0,"div",0),r.Zb(1,"app-page-title",1),r.ec(2,"div",2),r.ec(3,"div",3),r.ec(4,"div",4),r.ec(5,"div",5),r.ec(6,"div",6),r.ec(7,"div",7),r.ec(8,"div",8),r.ec(9,"div",9),r.ec(10,"input",10),r.oc("ngModelChange",function(e){return c.term=e}),r.dc(),r.Zb(11,"i",11),r.dc(),r.dc(),r.dc(),r.dc(),r.ec(12,"div",12),r.ec(13,"table",13),r.ec(14,"thead"),r.ec(15,"tr"),r.ec(16,"th"),r.Zc(17,"#"),r.dc(),r.ec(18,"th"),r.Zc(19,"Name"),r.dc(),r.ec(20,"th"),r.Zc(21,"Phone / Email"),r.dc(),r.ec(22,"th"),r.Zc(23,"Address"),r.dc(),r.ec(24,"th"),r.Zc(25,"Rating"),r.dc(),r.ec(26,"th"),r.Zc(27,"Total purchases"),r.dc(),r.ec(28,"th"),r.Zc(29,"Joining Date"),r.dc(),r.ec(30,"th"),r.Zc(31,"Action"),r.dc(),r.dc(),r.dc(),r.ec(32,"tbody"),r.Xc(33,u,35,12,"tr",14),r.sc(34,"filter"),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.Xc(35,k,37,22,"ng-template",15,16,r.Yc)),2&e&&(r.Kb(1),r.yc("breadcrumbItems",c.breadCrumbItems),r.Kb(9),r.yc("ngModel",c.term),r.Kb(23),r.yc("ngForOf",r.uc(34,3,c.customersData,c.term)))},directives:[a.a,d.b,d.n,d.q,i.m,s.m,s.q,s.o,d.y,d.o,d.i,i.n,d.g,i.l,s.d],pipes:[l.a,i.e],styles:[""]}),e})();var w=t("AytR"),S=t("ovIy"),P=t("ZOsW"),N=t("0hV+");function A(e,c){if(1&e){const e=r.fc();r.ec(0,"div"),r.ec(1,"a",29),r.oc("click",function(){r.Nc(e);const t=c.$implicit,i=r.rc(2),d=r.Kc(38);return i.openDetail(d,null==t?null:t.product,t)}),r.Zc(2),r.dc(),r.dc()}if(2&e){const e=c.$implicit;r.Kb(2),r.bd("",null==e||null==e.product?null:e.product.name_en," ")}}function F(e,c){if(1&e){const e=r.fc();r.ec(0,"ul",30),r.ec(1,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"WAITING")}),r.Zc(2,"WAITING"),r.dc(),r.ec(3,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"SHIPPED")}),r.Zc(4,"SHIPPED"),r.dc(),r.ec(5,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"PREPARED")}),r.Zc(6,"PREPARED"),r.dc(),r.ec(7,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"HAND_OVERED")}),r.Zc(8,"HAND_OVERED"),r.dc(),r.ec(9,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"DELIVERED")}),r.Zc(10,"DELIVERED"),r.dc(),r.ec(11,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"REJECTED")}),r.Zc(12,"REJECTED"),r.dc(),r.ec(13,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"CANCELED")}),r.Zc(14,"CANCELED"),r.dc(),r.ec(15,"li",31),r.oc("click",function(){r.Nc(e);const c=r.rc().$implicit;return r.rc().changeOrderStatus(c.id,"ACCEPTED")}),r.Zc(16,"ACCEPTED"),r.dc(),r.dc()}}const O=function(e,c,t){return{"badge-soft-danger":e,"badge-soft-warning":c,"badge-soft-info":t}};function x(e,c){if(1&e){const e=r.fc();r.ec(0,"tr"),r.ec(1,"td"),r.ec(2,"div",10),r.Zb(3,"input",18),r.ec(4,"label",19),r.Zc(5,"\xa0"),r.dc(),r.dc(),r.dc(),r.ec(6,"td"),r.ec(7,"a",20),r.Zc(8),r.dc(),r.dc(),r.ec(9,"td"),r.Xc(10,A,3,1,"div",13),r.dc(),r.ec(11,"td"),r.Zc(12),r.dc(),r.ec(13,"td"),r.Zc(14),r.dc(),r.ec(15,"td"),r.Zc(16),r.dc(),r.ec(17,"td"),r.Zc(18),r.sc(19,"date"),r.dc(),r.ec(20,"td"),r.ec(21,"button",21),r.Zc(22),r.dc(),r.Xc(23,F,17,0,"ng-template",null,22,r.Yc),r.dc(),r.ec(25,"td"),r.ec(26,"div",23),r.Zb(27,"i",24),r.ec(28,"div",25),r.ec(29,"a",26),r.oc("click",function(){r.Nc(e);const t=c.$implicit,i=r.rc(),d=r.Kc(36);return i.openEdit(d,t.id)}),r.Zb(30,"i",27),r.Zc(31,"Status"),r.dc(),r.ec(32,"a",26),r.oc("click",function(){r.Nc(e);const t=c.$implicit;return r.rc().deleteGroupItem(t.id)}),r.Zb(33,"i",28),r.Zc(34,"Delete"),r.dc(),r.dc(),r.dc(),r.dc(),r.dc()}if(2&e){const e=c.$implicit,t=r.Kc(24);r.rc();const i=r.Kc(34);r.Kb(3),r.Ac("id","customCheck",e.index,""),r.Kb(1),r.Ac("for","customCheck",e.index,""),r.Kb(4),r.ad(null==e.paymentInfo?null:e.paymentInfo.invoiceId),r.Kb(2),r.yc("ngForOf",e.items),r.Kb(2),r.ad(null==e.billingInfo?null:e.billingInfo.name),r.Kb(2),r.bd(" ",null==e.coupon?null:e.coupon.code," "),r.Kb(2),r.ad(e.totalPrice),r.Kb(2),r.ad(r.uc(19,13,e.createdAt,"dd/LL/YYYY")),r.Kb(3),r.yc("animation",!0)("ngbPopover",t)("popoverTitle",i)("ngClass",r.Ec(16,O,"REJECTED"===e.status||"CANCELED"===e.status,"SHIPPED"===e.status||"DELIVERED"===e.status,"WAITING"===e.status)),r.Kb(1),r.ad(e.status)}}function q(e,c){1&e&&(r.ec(0,"b"),r.Zc(1,"Change Status"),r.dc())}function X(e,c){if(1&e&&(r.ec(0,"ngb-alert",44),r.Zc(1),r.dc()),2&e){const e=r.rc(2);r.yc("dismissible",!1),r.Kb(1),r.ad(e.error)}}function R(e,c){if(1&e&&r.Zb(0,"ng-select",45),2&e){const e=r.rc(2);r.yc("items",e.order_status)}}function T(e,c){1&e&&(r.ec(0,"div"),r.Zc(1,"Status is required"),r.dc())}function $(e,c){if(1&e&&(r.ec(0,"div",46),r.Xc(1,T,2,0,"div",47),r.dc()),2&e){const e=r.rc(2);r.Kb(1),r.yc("ngIf",e.fe.status.errors.required)}}function _(e,c){if(1&e){const e=r.fc();r.ec(0,"div",32),r.ec(1,"h5",33),r.Zc(2,"Change Status"),r.dc(),r.ec(3,"button",34),r.oc("click",function(){return c.$implicit.dismiss("Cross click")}),r.Zc(4,"\xd7"),r.dc(),r.dc(),r.ec(5,"div",35),r.ec(6,"form",36),r.oc("ngSubmit",function(){r.Nc(e);const t=c.$implicit;return r.rc().onEdit(t)}),r.Xc(7,X,2,2,"ngb-alert",37),r.ec(8,"div",38),r.Xc(9,R,1,1,"ng-select",39),r.Xc(10,$,2,1,"div",40),r.dc(),r.dc(),r.dc(),r.ec(11,"div",41),r.ec(12,"button",42),r.oc("click",function(){return c.$implicit.close("Close click")}),r.Zc(13,"Close"),r.dc(),r.Zb(14,"input",43),r.dc()}if(2&e){const e=r.rc();r.Kb(6),r.yc("formGroup",e.editForm),r.Kb(1),r.yc("ngIf",e.error),r.Kb(2),r.yc("ngIf",e.change_badge),r.Kb(1),r.yc("ngIf",e.submittedEdit&&e.fe.status.errors)}}function V(e,c){if(1&e&&(r.ec(0,"ngb-alert",44),r.Zc(1),r.dc()),2&e){const e=r.rc(2);r.yc("dismissible",!1),r.Kb(1),r.ad(e.error)}}function L(e,c){if(1&e&&(r.ec(0,"div",32),r.ec(1,"h5",33),r.Zc(2,"Order Details"),r.dc(),r.ec(3,"button",34),r.oc("click",function(){return c.$implicit.dismiss("Cross click")}),r.Zc(4,"\xd7"),r.dc(),r.dc(),r.ec(5,"div",35),r.Xc(6,V,2,2,"ngb-alert",37),r.ec(7,"div",48),r.ec(8,"div"),r.Zb(9,"img",49),r.dc(),r.ec(10,"div",50),r.ec(11,"div",51),r.ec(12,"label",52),r.Zc(13,"Title: "),r.dc(),r.ec(14,"div",53),r.Zc(15),r.dc(),r.dc(),r.ec(16,"div",54),r.ec(17,"label",55),r.Zc(18,"Price: "),r.dc(),r.ec(19,"div",56),r.Zc(20),r.dc(),r.dc(),r.ec(21,"div",54),r.ec(22,"label",57),r.Zc(23,"Qrcode: "),r.dc(),r.ec(24,"div",58),r.Zc(25),r.dc(),r.dc(),r.dc(),r.dc(),r.ec(26,"div",59),r.Zb(27,"qrcode",60),r.dc(),r.dc(),r.ec(28,"div",41),r.ec(29,"button",42),r.oc("click",function(){return c.$implicit.close("Close click")}),r.Zc(30,"Close"),r.dc(),r.dc()),2&e){const e=r.rc();r.Kb(6),r.yc("ngIf",e.error),r.Kb(3),r.zc("src",e.imageBackend+(null==e.selectedProductImage?null:e.selectedProductImage.link),r.Pc),r.Kb(6),r.bd("\xa0 ",e.selectedProductTitle,""),r.Kb(5),r.bd("\xa0 ",e.selectedProductPrice,""),r.Kb(5),r.bd("\xa0 ",e.generateQrcode,""),r.Kb(2),r.yc("qrdata",e.generateQrcode)("width",200)("errorCorrectionLevel","M")}}const Y=[{path:"",redirectTo:"list"},{path:"list",component:D},{path:"orders",component:(()=>{class e{constructor(e,c,t,i){this.customerService=e,this.modalService=c,this.formBuilder=t,this.marketingService=i,this.change_badge=[!0],this.backend=w.a.backend,this.imageBackend=w.a.imageBackend,this.error="",this.submitted=!1,this.submittedEdit=!1,this.generateQrcode="",this.barcodeImage="",this.selectedProductTitle="",this.selectedProductPrice="",this.selectedProductImage=""}ngOnInit(){this.customerService.getOrders().subscribe(e=>{console.log("vdf"),this.transactions=e,console.log(e)},e=>{console.log(e)}),this.editForm=this.formBuilder.group({oto_id:[""],status:["",[d.w.required]]}),this.order_status=["WAITING","SHIPPED","PREPARED","HAND_OVERED","DELIVERED","REJECTED","CANCELED","ACCEPTED"],this.breadCrumbItems=[{label:"Customers"},{label:"Orders",active:!0}]}get fe(){return this.editForm.controls}selectedStatusFunc(e){console.log(e)}openDetail(e,c,t){this.generateQrcode=c.barcode,this.selectedProductTitle=c.name_en,this.selectedProductPrice=t.price,this.selectedProductImage=c.images[0],this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{console.log("Closed with: "+e)},e=>{console.log("Dismissed "+this.getDismissReason(e))})}openEdit(e,c){let t=this.transactions.filter(e=>e._id==c);this.editForm.controls.oto_id.setValue(t[0].tryoto_id),this.editForm.controls.status.setValue(t[0].status),this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{console.log("Closed with: "+e)},e=>{console.log("Dismissed "+this.getDismissReason(e))})}onEdit(e){if(this.submittedEdit=!0,!this.editForm.invalid){let c=this.editForm.getRawValue(),t=c.id;delete c.id,this.customerService.updateOrder(c,t).subscribe(e=>{this.transactions=this.transactions.map(e=>(e.id==t&&(e.status=c.status),e))}),e.close()}}getDismissReason(e){return e===s.a.ESC?"by pressing ESC":e===s.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e}deleteGroupItem(e){this.customerService.delOrders(e).subscribe(c=>{this.transactions=this.transactions.filter(c=>c._id!=e)})}changeOrderStatus(e,c){this.customerService.updateOrder({status:c},e).subscribe(t=>{this.transactions=this.transactions.map(t=>(t.id==e&&(t.status=c),t))})}}return e.\u0275fac=function(c){return new(c||e)(r.Yb(n.a),r.Yb(s.t),r.Yb(d.e),r.Yb(S.a))},e.\u0275cmp=r.Sb({type:e,selectors:[["app-orders"]],decls:39,vars:2,consts:[[1,"container-fluid"],["title","Orders",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"table-responsive","mb-0"],[1,"table","table-centered","table-nowrap"],[1,"thead-light"],[2,"width","20px"],[1,"custom-control","custom-checkbox"],["id","customCheck","type","checkbox",1,"custom-control-input"],["for","customCheck",1,"custom-control-label"],[4,"ngFor","ngForOf"],["popTitle",""],["role","document"],["editContent",""],["detailContent",""],["type","checkbox",1,"custom-control-input",3,"id"],[1,"custom-control-label",3,"for"],["href","javascript: void(0);",1,"text-body","font-weight-bold"],[1,"badge","badge-pill","badge-soft-success","font-size-12",2,"border","none",3,"animation","ngbPopover","popoverTitle","ngClass"],["popOver",""],["ngbDropdown","","container","body","placement","bottom-left"],["ngbDropdownToggle","","data-toggle","dropdown","aria-expanded","true",1,"mdi","mdi-dots-vertical","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"click"],[1,"mdi","mdi-account-edit"],[1,"mdi","mdi-delete"],["href","javascript: void(0);",1,"text-body","font-weight-bold",3,"click"],[1,"menu_list"],[3,"click"],[1,"modal-header"],[1,"modal-title","mt-0"],["type","button","aria-hidden","true",1,"close",3,"click"],[1,"modal-body"],["id","editForm",1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group"],["formControlName","status",3,"items",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"],["type","submit","form","editForm","value","Save",1,"btn","btn-primary"],["type","danger",3,"dismissible"],["formControlName","status",3,"items"],[1,"invalid-feedback"],[4,"ngIf"],[1,"d-flex","mx-2"],[2,"width","200px","height","200px",3,"src"],[1,"ml-2"],[1,"d-flex"],["id","product_name mr-2"],["for","product_name",1,"font-weight-bold"],[1,"d-flex","mt-2"],["id","product_price mr-2"],["for","product_price",1,"font-weight-bold"],["id","qrcode mr-2"],["for","qrcode",1,"font-weight-bold"],[1,"d-flex","justify-content-center"],[3,"qrdata","width","errorCorrectionLevel"]],template:function(e,c){1&e&&(r.ec(0,"div",0),r.Zb(1,"app-page-title",1),r.ec(2,"div",2),r.ec(3,"div",3),r.ec(4,"div",4),r.ec(5,"div",5),r.ec(6,"div",6),r.ec(7,"table",7),r.ec(8,"thead",8),r.ec(9,"tr"),r.ec(10,"th",9),r.ec(11,"div",10),r.Zb(12,"input",11),r.ec(13,"label",12),r.Zc(14,"\xa0"),r.dc(),r.dc(),r.dc(),r.ec(15,"th"),r.Zc(16,"Order ID"),r.dc(),r.ec(17,"th"),r.Zc(18,"Product"),r.dc(),r.ec(19,"th"),r.Zc(20,"Customer"),r.dc(),r.ec(21,"th"),r.Zc(22,"Discount code"),r.dc(),r.ec(23,"th"),r.Zc(24,"Total"),r.dc(),r.ec(25,"th"),r.Zc(26,"Date"),r.dc(),r.ec(27,"th"),r.Zc(28,"Status"),r.dc(),r.ec(29,"th"),r.Zc(30,"Action"),r.dc(),r.dc(),r.dc(),r.ec(31,"tbody"),r.Xc(32,x,35,20,"tr",13),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.dc(),r.Xc(33,q,2,0,"ng-template",null,14,r.Yc),r.Xc(35,_,15,4,"ng-template",15,16,r.Yc),r.Xc(37,L,31,8,"ng-template",15,17,r.Yc)),2&e&&(r.Kb(1),r.yc("breadcrumbItems",c.breadCrumbItems),r.Kb(31),r.yc("ngForOf",c.transactions))},directives:[a.a,i.m,s.K,i.l,s.m,s.q,s.o,d.y,d.o,d.i,i.n,s.d,P.a,d.n,d.g,N.a],pipes:[i.e],styles:[".ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]{height:140px!important}"]}),e})()}];let B=(()=>{class e{}return e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({factory:function(c){return new(c||e)},imports:[[o.f.forChild(Y)],o.f]}),e})();var G=t("4zvT"),M=t("+mqE"),z=t("EsRS"),H=t("vV3i");const J={};let W=(()=>{class e{}return e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({factory:function(c){return new(c||e)},providers:[{provide:H.a,useValue:J}],imports:[[i.c,B,s.A,d.k,l.b,s.e,s.p,H.c,d.t,G.a,M.a,z.a,P.b,s.E,N.b,s.v]]}),e})()}}]);
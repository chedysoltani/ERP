"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_admin_admin_module_ts"],{

/***/ 3627:
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-auth/admin-auth.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAuthComponent: () => (/* binding */ AdminAuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/admin-auth.service */ 4858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function AdminAuthComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function AdminAuthComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Acc\u00E9der au panneau ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminAuthComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Authentification... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AdminAuthComponent {
  constructor(adminAuth, router) {
    this.adminAuth = adminAuth;
    this.router = router;
    this.email = '';
    this.password = '';
    this.showPassword = false;
    this.loading = false;
    this.error = '';
  }
  ngOnInit() {
    if (this.adminAuth.isLoggedIn) {
      this.router.navigate(['/admin/dashboard']);
    }
  }
  login() {
    if (!this.email || !this.password) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }
    this.loading = true;
    this.error = '';
    this.adminAuth.login(this.email, this.password).subscribe({
      next: res => {
        this.loading = false;
        if (res.success && res.data?.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.error = 'Accès refusé. Compte administrateur requis.';
        }
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Erreur de connexion.';
      }
    });
  }
  static {
    this.ɵfac = function AdminAuthComponent_Factory(t) {
      return new (t || AdminAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__.AdminAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminAuthComponent,
      selectors: [["app-admin-auth"]],
      decls: 47,
      vars: 11,
      consts: [["loginForm", "ngForm"], [1, "admin-login-page"], [1, "bg-orbs"], [1, "orb", "orb-1"], [1, "orb", "orb-2"], [1, "orb", "orb-3"], [1, "login-container"], [1, "brand-section"], [1, "brand-logo"], [1, "bi", "bi-shield-fill-check"], [1, "brand-title"], [1, "gradient-text"], [1, "brand-subtitle"], [1, "login-card", "glass-card"], [1, "card-header-section"], ["autocomplete", "off", 1, "login-form", 3, "ngSubmit"], ["class", "alert-error", 4, "ngIf"], [1, "field-group"], [1, "field-label"], [1, "field-input-wrap"], [1, "bi", "bi-envelope", "field-icon"], ["type", "email", "name", "email", "placeholder", "admin@entreprise.com", "autocomplete", "username", "required", "", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-lock", "field-icon"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", "required", "", 1, "field-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-pw", 3, "click"], [1, "bi"], ["type", "submit", 1, "btn-login", 3, "disabled"], [4, "ngIf"], ["class", "loading-spin", 4, "ngIf"], [1, "card-footer-note"], [1, "bi", "bi-shield-fill-exclamation"], ["routerLink", "/landing", 1, "back-link"], [1, "bi", "bi-arrow-left"], [1, "alert-error"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "bi", "bi-shield-lock", "me-2"], [1, "loading-spin"], [1, "bi", "bi-arrow-clockwise", "spin-icon"]],
      template: function AdminAuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "SIT ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Portail Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Connexion Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Acc\u00E8s r\u00E9serv\u00E9 aux administrateurs syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdminAuthComponent_Template_form_ngSubmit_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.login());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminAuthComponent_div_23_Template, 3, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Adresse email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminAuthComponent_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17)(31, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminAuthComponent_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminAuthComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.showPassword = !ctx.showPassword);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AdminAuthComponent_span_39_Template, 3, 0, "span", 27)(40, AdminAuthComponent_span_40_Template, 3, 0, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Acc\u00E8s s\u00E9curis\u00E9 \u2014 activit\u00E9 journalis\u00E9e ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Retour \u00E0 l'accueil ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-eye", !ctx.showPassword)("bi-eye-slash", ctx.showPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".admin-login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-darker, #020617);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  font-family: 'Inter', sans-serif;\n}\n\n\n\n.bg-orbs[_ngcontent-%COMP%] { position: absolute; inset: 0; pointer-events: none; }\n.orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.18;\n  animation: _ngcontent-%COMP%_floatOrb 8s ease-in-out infinite;\n}\n.orb-1[_ngcontent-%COMP%] { width: 500px; height: 500px; background: #6366f1; top: -150px; left: -150px; animation-delay: 0s; }\n.orb-2[_ngcontent-%COMP%] { width: 400px; height: 400px; background: #0ea5e9; bottom: -100px; right: -100px; animation-delay: 3s; }\n.orb-3[_ngcontent-%COMP%] { width: 300px; height: 300px; background: #f43f5e; top: 40%; left: 50%; animation-delay: 1.5s; }\n\n@keyframes _ngcontent-%COMP%_floatOrb {\n  0%, 100% { transform: translateY(0) scale(1); }\n  50% { transform: translateY(-30px) scale(1.05); }\n}\n\n\n\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 24px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from { opacity: 0; transform: translateY(24px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n.brand-section[_ngcontent-%COMP%] { text-align: center; }\n.brand-logo[_ngcontent-%COMP%] {\n  width: 72px; height: 72px;\n  background: linear-gradient(135deg, #6366f1, #0ea5e9);\n  border-radius: 20px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 32px; color: #fff;\n  margin: 0 auto 16px;\n  box-shadow: 0 0 40px rgba(99,102,241,0.4);\n  animation: _ngcontent-%COMP%_pulseLogo 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseLogo {\n  0%, 100% { box-shadow: 0 0 40px rgba(99,102,241,0.4); }\n  50%       { box-shadow: 0 0 60px rgba(99,102,241,0.7); }\n}\n.brand-title[_ngcontent-%COMP%] { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: #f8fafc; margin: 0; }\n.brand-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #0ea5e9);\n  -webkit-background-clip: text; -webkit-text-fill-color: transparent;\n}\n.brand-subtitle[_ngcontent-%COMP%] { color: #64748b; font-size: 14px; margin: 4px 0 0; }\n\n\n\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(15, 23, 42, 0.8);\n  border: 1px solid rgba(99,102,241,0.15);\n  border-radius: 20px;\n  padding: 32px;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);\n}\n.card-header-section[_ngcontent-%COMP%] { margin-bottom: 28px; }\n.card-header-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 6px; }\n.card-header-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #64748b; font-size: 13px; margin: 0; }\n\n\n\n.login-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 18px; }\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(244,63,94,0.12);\n  border: 1px solid rgba(244,63,94,0.3);\n  color: #fb7185;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  display: flex; align-items: center; gap: 8px;\n  animation: _ngcontent-%COMP%_shake 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-6px); }\n  75% { transform: translateX(6px); }\n}\n\n.field-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.field-label[_ngcontent-%COMP%] { color: #94a3b8; font-size: 13px; font-weight: 500; }\n.field-input-wrap[_ngcontent-%COMP%] { position: relative; }\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute; left: 14px; top: 50%; transform: translateY(-50%);\n  color: #475569; font-size: 15px; pointer-events: none;\n}\n.field-input[_ngcontent-%COMP%] {\n  width: 100%; background: rgba(30, 41, 59, 0.6);\n  border: 1px solid rgba(99,102,241,0.2);\n  border-radius: 10px; padding: 11px 14px 11px 40px;\n  color: #f8fafc; font-size: 14px; outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.field-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);\n}\n.field-input[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.toggle-pw[_ngcontent-%COMP%] {\n  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);\n  background: none; border: none; color: #64748b; cursor: pointer;\n  font-size: 16px; padding: 4px; transition: color 0.2s;\n}\n.toggle-pw[_ngcontent-%COMP%]:hover { color: #6366f1; }\n\n\n\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%; padding: 13px;\n  background: linear-gradient(135deg, #6366f1, #0ea5e9);\n  border: none; border-radius: 12px;\n  color: #fff; font-size: 15px; font-weight: 600;\n  cursor: pointer; transition: all 0.3s;\n  display: flex; align-items: center; justify-content: center;\n  gap: 8px; font-family: 'Inter', sans-serif;\n  box-shadow: 0 4px 20px rgba(99,102,241,0.35);\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(99,102,241,0.5);\n}\n.btn-login[_ngcontent-%COMP%]:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }\n\n.loading-spin[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.spin-icon[_ngcontent-%COMP%] { display: inline-block; animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n\n\n\n.card-footer-note[_ngcontent-%COMP%] {\n  margin-top: 20px; padding-top: 16px;\n  border-top: 1px solid rgba(99,102,241,0.1);\n  color: #475569; font-size: 12px;\n  display: flex; align-items: center; gap: 6px;\n}\n\n\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b; font-size: 13px; text-decoration: none;\n  display: flex; align-items: center; gap: 6px;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover { color: #6366f1; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1hdXRoL2FkbWluLWF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUEsbUJBQW1CO0FBQ25CLFdBQVcsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO0FBQy9EO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJDQUEyQztBQUM3QztBQUNBLFNBQVMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFO0FBQzNHLFNBQVMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFO0FBQy9HLFNBQVMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFOztBQUV2RztFQUNFLFdBQVcsaUNBQWlDLEVBQUU7RUFDOUMsTUFBTSx3Q0FBd0MsRUFBRTtBQUNsRDs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtFQUNoRCxPQUFPLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUMvQzs7QUFFQSxVQUFVO0FBQ1YsaUJBQWlCLGtCQUFrQixFQUFFO0FB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RCxnQkFBZ0I7QUFDaEI7RUFDRSxnQkFBZ0IsRUFBRSxpQkFBaUI7RUFDbkMsMENBQTBDO0VBQzFDLGNBQWMsRUFBRSxlQUFlO0VBQy9CLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRO0FBQzlDOztBQUVBLGNBQWM7QUFDZDtFQUNFLGNBQWMsRUFBRSxlQUFlLEVBQUUscUJBQXFCO0VBQ3RELGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRO0VBQzVDLHNCQUFzQjtBQUN4QjtBQUNBLG1CQUFtQixjQUFjLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tbG9naW4tcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrZXIsICMwMjA2MTcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cblxuLyogT3JiIGJhY2tncm91bmQgKi9cbi5iZy1vcmJzIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi5vcmIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsdGVyOiBibHVyKDgwcHgpO1xuICBvcGFjaXR5OiAwLjE4O1xuICBhbmltYXRpb246IGZsb2F0T3JiIDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLm9yYi0xIHsgd2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDUwMHB4OyBiYWNrZ3JvdW5kOiAjNjM2NmYxOyB0b3A6IC0xNTBweDsgbGVmdDogLTE1MHB4OyBhbmltYXRpb24tZGVsYXk6IDBzOyB9XG4ub3JiLTIgeyB3aWR0aDogNDAwcHg7IGhlaWdodDogNDAwcHg7IGJhY2tncm91bmQ6ICMwZWE1ZTk7IGJvdHRvbTogLTEwMHB4OyByaWdodDogLTEwMHB4OyBhbmltYXRpb24tZGVsYXk6IDNzOyB9XG4ub3JiLTMgeyB3aWR0aDogMzAwcHg7IGhlaWdodDogMzAwcHg7IGJhY2tncm91bmQ6ICNmNDNmNWU7IHRvcDogNDAlOyBsZWZ0OiA1MCU7IGFuaW1hdGlvbi1kZWxheTogMS41czsgfVxuXG5Aa2V5ZnJhbWVzIGZsb2F0T3JiIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSBzY2FsZSgxLjA1KTsgfVxufVxuXG4vKiBDb250YWluZXIgKi9cbi5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcGFkZGluZzogMjRweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0cHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLyogQnJhbmQgKi9cbi5icmFuZC1zZWN0aW9uIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4uYnJhbmQtbG9nbyB7XG4gIHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICMwZWE1ZTkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4OyBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSg5OSwxMDIsMjQxLDAuNCk7XG4gIGFuaW1hdGlvbjogcHVsc2VMb2dvIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBwdWxzZUxvZ28ge1xuICAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoOTksMTAyLDI0MSwwLjQpOyB9XG4gIDUwJSAgICAgICB7IGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoOTksMTAyLDI0MSwwLjcpOyB9XG59XG4uYnJhbmQtdGl0bGUgeyBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDA7IH1cbi5icmFuZC10aXRsZSAuZ3JhZGllbnQtdGV4dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICMwZWE1ZTkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJyYW5kLXN1YnRpdGxlIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTRweDsgbWFyZ2luOiA0cHggMCAwOyB9XG5cbi8qIENhcmQgKi9cbi5sb2dpbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA0OHB4IHJnYmEoMCwwLDAsMC40KSwgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG59XG4uY2FyZC1oZWFkZXItc2VjdGlvbiB7IG1hcmdpbi1ib3R0b206IDI4cHg7IH1cbi5jYXJkLWhlYWRlci1zZWN0aW9uIGgyIHsgY29sb3I6ICNmOGZhZmM7IGZvbnQtc2l6ZTogMjJweDsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luOiAwIDAgNnB4OyB9XG4uY2FyZC1oZWFkZXItc2VjdGlvbiBwIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luOiAwOyB9XG5cbi8qIEZvcm0gKi9cbi5sb2dpbi1mb3JtIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxOHB4OyB9XG4uYWxlcnQtZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjEyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDQsNjMsOTQsMC4zKTtcbiAgY29sb3I6ICNmYjcxODU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjRzIGVhc2U7XG59XG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpOyB9XG59XG5cbi5maWVsZC1ncm91cCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogOHB4OyB9XG4uZmllbGQtbGFiZWwgeyBjb2xvcjogIzk0YTNiODsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyB9XG4uZmllbGQtaW5wdXQtd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmZpZWxkLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDE0cHg7IHRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjNDc1NTY5OyBmb250LXNpemU6IDE1cHg7IHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmZpZWxkLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6IHJnYmEoMzAsIDQxLCA1OSwgMC42KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDExcHggMTRweCAxMXB4IDQwcHg7XG4gIGNvbG9yOiAjZjhmYWZjOyBmb250LXNpemU6IDE0cHg7IG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLmZpZWxkLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xufVxuLmZpZWxkLWlucHV0OjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNDc1NTY5OyB9XG4udG9nZ2xlLXB3IHtcbiAgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTJweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBjb2xvcjogIzY0NzQ4YjsgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7IHBhZGRpbmc6IDRweDsgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cbi50b2dnbGUtcHc6aG92ZXIgeyBjb2xvcjogIzYzNjZmMTsgfVxuXG4vKiBCdXR0b24gKi9cbi5idG4tbG9naW4ge1xuICB3aWR0aDogMTAwJTsgcGFkZGluZzogMTNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgIzBlYTVlOSk7XG4gIGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4OyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk5LDEwMiwyNDEsMC4zNSk7XG59XG4uYnRuLWxvZ2luOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoOTksMTAyLDI0MSwwLjUpO1xufVxuLmJ0bi1sb2dpbjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNjsgY3Vyc29yOiBub3QtYWxsb3dlZDsgdHJhbnNmb3JtOiBub25lOyB9XG5cbi5sb2FkaW5nLXNwaW4geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgfVxuLnNwaW4taWNvbiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuQGtleWZyYW1lcyBzcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuLyogRm9vdGVyIG5vdGUgKi9cbi5jYXJkLWZvb3Rlci1ub3RlIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgcGFkZGluZy10b3A6IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcbiAgY29sb3I6ICM0NzU1Njk7IGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG59XG5cbi8qIEJhY2sgbGluayAqL1xuLmJhY2stbGluayB7XG4gIGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDEzcHg7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG4uYmFjay1saW5rOmhvdmVyIHsgY29sb3I6ICM2MzY2ZjE7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6597:
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/admin-auth.service */ 4858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





const _c0 = () => ({
  nom: "A",
  prenom: "",
  role: "admin",
  id: 0,
  email: "",
  actif: 1
});
const _c1 = () => ["admin", "manager", "employee"];
const _c2 = () => ({
  name: "API Backend",
  status: "ok",
  latency: "12ms"
});
const _c3 = () => ({
  name: "Base de donn\u00E9es",
  status: "ok",
  latency: "3ms"
});
const _c4 = () => ({
  name: "Authentification JWT",
  status: "ok",
  latency: "1ms"
});
const _c5 = () => ({
  name: "Module Pr\u00E9sence",
  status: "ok",
  latency: "8ms"
});
const _c6 = () => ({
  name: "Module Documents",
  status: "ok",
  latency: "15ms"
});
const _c7 = () => ({
  name: "IA & Recommandations",
  status: "ok",
  latency: "45ms"
});
const _c8 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function AdminDashboardComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.unreadNotifications);
  }
}
function AdminDashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 263)(1, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Administrateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.admin == null ? null : ctx_r0.admin.prenom, " ", ctx_r0.admin == null ? null : ctx_r0.admin.nom, "");
  }
}
function AdminDashboardComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.unreadNotifications);
  }
}
function AdminDashboardComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_77_Template_div_click_0_listener() {
      const n_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](n_r3.read = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 269)(4, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("unread", !n_r3.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("notif-color-" + n_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](n_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r3.time);
  }
}
function AdminDashboardComponent_div_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_194_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 275)(1, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 277)(4, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 279)(7, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.getAvatarColor(log_r4.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getInitials(log_r4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", log_r4.prenom, " ", log_r4.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-" + log_r4.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r4.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(log_r4.lastActivity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", log_r4.actif)("inactive", !log_r4.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r4.actif ? "Actif" : "Inactif", " ");
  }
}
function AdminDashboardComponent_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aucune activit\u00E9 r\u00E9cente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_tr_280_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.telephone);
  }
}
function AdminDashboardComponent_tr_280_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 284)(1, "td")(2, "div", 285)(3, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 287)(6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminDashboardComponent_tr_280_div_8_Template, 2, 1, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td")(16, "div", 292)(17, "button", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_280_Template_button_click_17_listener() {
      const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleUserStatus(user_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 297)(24, "div", 298)(25, "button", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_280_Template_button_click_25_listener() {
      const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openEditUser(user_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_280_Template_button_click_27_listener() {
      const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openResetPassword(user_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_280_Template_button_click_29_listener() {
      const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.confirmDelete(user_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.getAvatarColor(user_r6.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getInitials(user_r6), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", user_r6.prenom, " ", user_r6.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r6.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-" + user_r6.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.getRoleIcon(user_r6.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r6.role === "admin" ? "Admin" : user_r6.role === "manager" ? "Manager" : "Employ\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("on", user_r6.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", user_r6.actif ? "D\u00E9sactiver" : "Activer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.actif ? "Actif" : "Inactif");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatDate(user_r6.date_creation || ""));
  }
}
function AdminDashboardComponent_tr_281_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Aucun utilisateur trouv\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_div_282_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_282_button_3_Template_button_click_0_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.currentPage = p_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", p_r9 === ctx_r0.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r9, " ");
  }
}
function AdminDashboardComponent_div_282_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 306)(1, "button", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_282_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.currentPage = ctx_r0.currentPage - 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminDashboardComponent_div_282_button_3_Template, 2, 3, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_282_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.currentPage = ctx_r0.currentPage + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.totalPagesArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function AdminDashboardComponent_div_301_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 320);
  }
}
function AdminDashboardComponent_div_301_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 321);
  }
}
function AdminDashboardComponent_div_301_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 312)(1, "div", 313)(2, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminDashboardComponent_div_301_i_3_Template, 1, 0, "i", 315)(4, AdminDashboardComponent_div_301_i_4_Template, 1, 0, "i", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 221)(11, "input", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_div_301_Template_input_ngModelChange_11_listener($event) {
      const perm_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r11], $event) || (ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r11] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const perm_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](perm_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R\u00F4le : ", ctx_r0.selectedPermRole, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r0.selectedPermRole === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.selectedPermRole === "admin");
  }
}
function AdminDashboardComponent_div_303_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 322)(1, "div", 323)(2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 327)(10, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const role_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-icon-" + role_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.getRoleIcon(role_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r12 === "admin" ? "Administrateur" : role_r12 === "manager" ? "Manager" : "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getRoleBarWidth(role_r12), "% des utilisateurs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.getPermCount(role_r12, true), " autoris\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.getPermCount(role_r12, false), " bloqu\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("fill-" + role_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r0.getRoleBarWidth(role_r12), "%");
  }
}
function AdminDashboardComponent_div_358_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rs_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("dot-" + rs_r13.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rs_r13.role === "admin" ? "Admin" : rs_r13.role === "manager" ? "Manager" : "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rs_r13.count);
  }
}
function AdminDashboardComponent_div_364_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 334)(1, "div", 335)(2, "div", 336)(3, "span", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r14 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r0.getMaxGrowth() ? d_r14.count / ctx_r0.getMaxGrowth() * 100 : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r14.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, d_r14.day, "dd/MM"));
  }
}
function AdminDashboardComponent_div_365_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aucune donn\u00E9e disponible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_404_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 341)(1, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "En ligne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r15.latency);
  }
}
function AdminDashboardComponent_div_417_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 346)(1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 349)(6, "div", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-delay", i_r17 * 40, "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r17 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.getAvatarColor(log_r16.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getInitials(log_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", log_r16.prenom, " ", log_r16.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r16.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-" + log_r16.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r16.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatDate(log_r16.lastActivity));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", log_r16.actif)("inactive", !log_r16.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-circle-fill", log_r16.actif)("bi-circle", !log_r16.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r16.actif ? "Actif" : "Inactif", " ");
  }
}
function AdminDashboardComponent_div_418_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aucune activit\u00E9 enregistr\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_563_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.modalError, " ");
  }
}
function AdminDashboardComponent_div_592_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 241)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_div_592_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r0.userForm.password, $event) || (ctx_r0.userForm.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.userForm.password);
  }
}
function AdminDashboardComponent_span_597_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sauvegarder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_598_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sauvegarde...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_617_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_618_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_628_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.modalError, " ");
  }
}
function AdminDashboardComponent_span_645_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " R\u00E9initialiser");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_646_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AdminDashboardComponent {
  get admin() {
    return this.adminAuth.currentAdmin;
  }
  get unreadNotifications() {
    return this.notifications.filter(n => !n.read).length;
  }
  get pagedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.pageSize);
  }
  get totalPagesArr() {
    return Array.from({
      length: this.totalPages
    }, (_, i) => i + 1);
  }
  get permissionsList() {
    return Object.keys(this.permissions['admin']);
  }
  constructor(adminAuth, router) {
    this.adminAuth = adminAuth;
    this.router = router;
    // Layout
    this.sidebarCollapsed = false;
    this.mobileMenuOpen = false;
    this.darkMode = true;
    this.activeSection = 'overview';
    this.searchQuery = '';
    this.showNotifications = false;
    this.showProfileMenu = false;
    // Data
    this.stats = {
      totalUsers: 0,
      activeEmployees: 0,
      activeManagers: 0,
      totalAdmins: 0,
      todayLogins: 0,
      inactiveUsers: 0,
      attendanceToday: 0
    };
    this.users = [];
    this.filteredUsers = [];
    this.activityLogs = [];
    this.roleStats = [];
    this.growthData = [];
    // Animated counters
    this.animatedStats = {
      totalUsers: 0,
      activeEmployees: 0,
      activeManagers: 0,
      todayLogins: 0
    };
    // User management
    this.userSearch = '';
    this.userRoleFilter = 'all';
    this.userStatusFilter = 'all';
    this.currentPage = 1;
    this.pageSize = 8;
    this.showUserModal = false;
    this.showDeleteModal = false;
    this.showResetModal = false;
    this.editingUser = null;
    this.deletingUser = null;
    this.resetPasswordUser = null;
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.modalLoading = false;
    this.modalError = '';
    this.modalSuccess = '';
    this.userForm = {};
    // Permissions config
    this.permissions = {
      admin: {
        'Gestion utilisateurs': true,
        'Gestion projets': true,
        'Gestion tâches': true,
        'Gestion réunions': true,
        'Analytics': true,
        'Documents': true,
        'Présence': true,
        'Configuration': true,
        'Rôles & Permissions': true
      },
      manager: {
        'Gestion utilisateurs': true,
        'Gestion projets': true,
        'Gestion tâches': true,
        'Gestion réunions': true,
        'Analytics': true,
        'Documents': true,
        'Présence': true,
        'Configuration': false,
        'Rôles & Permissions': false
      },
      employee: {
        'Gestion utilisateurs': false,
        'Gestion projets': false,
        'Gestion tâches': true,
        'Gestion réunions': true,
        'Analytics': false,
        'Documents': true,
        'Présence': true,
        'Configuration': false,
        'Rôles & Permissions': false
      }
    };
    this.selectedPermRole = 'admin';
    // System settings
    this.settings = {
      platformName: 'SIT ERP',
      maintenanceMode: false,
      registrationOpen: true,
      emailNotifications: true,
      twoFactorRequired: false,
      sessionTimeout: 60,
      maxLoginAttempts: 15,
      aiEnabled: true,
      darkModeDefault: true,
      language: 'fr'
    };
    this.settingsSaved = false;
    // Notifications
    this.notifications = [{
      id: 1,
      icon: 'bi-person-plus',
      text: 'Nouvel utilisateur inscrit',
      time: 'Il y a 5 min',
      read: false,
      color: 'success'
    }, {
      id: 2,
      icon: 'bi-shield-exclamation',
      text: 'Tentative de connexion échouée',
      time: 'Il y a 22 min',
      read: false,
      color: 'warning'
    }, {
      id: 3,
      icon: 'bi-check-circle',
      text: 'Sauvegarde système complète',
      time: 'Il y a 1h',
      read: true,
      color: 'info'
    }];
    this.animationFrames = [];
  }
  ngOnInit() {
    this.loadAll();
    this.statsInterval = setInterval(() => this.loadStats(), 30000);
  }
  ngOnDestroy() {
    clearInterval(this.statsInterval);
    this.animationFrames.forEach(id => cancelAnimationFrame(id));
  }
  loadAll() {
    this.loadStats();
    this.loadUsers();
    this.loadActivity();
    this.loadRoleStats();
    this.loadGrowth();
  }
  loadStats() {
    this.adminAuth.getStats().subscribe({
      next: res => {
        if (res.success) {
          this.stats = res.data;
          this.animateCounters();
        }
      }
    });
  }
  loadUsers() {
    this.adminAuth.getUsers().subscribe({
      next: res => {
        if (res.success) {
          this.users = res.data;
          this.applyFilters();
        }
      }
    });
  }
  loadActivity() {
    this.adminAuth.getActivity().subscribe({
      next: res => {
        if (res.success) this.activityLogs = res.data;
      }
    });
  }
  loadRoleStats() {
    this.adminAuth.getRoleStats().subscribe({
      next: res => {
        if (res.success) this.roleStats = res.data;
      }
    });
  }
  loadGrowth() {
    this.adminAuth.getGrowth().subscribe({
      next: res => {
        if (res.success) this.growthData = res.data;
      }
    });
  }
  animateCounters() {
    const targets = {
      totalUsers: this.stats.totalUsers,
      activeEmployees: this.stats.activeEmployees,
      activeManagers: this.stats.activeManagers,
      todayLogins: this.stats.todayLogins
    };
    const duration = 1200;
    const start = performance.now();
    const animate = time => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      this.animatedStats = {
        totalUsers: Math.round(targets.totalUsers * ease),
        activeEmployees: Math.round(targets.activeEmployees * ease),
        activeManagers: Math.round(targets.activeManagers * ease),
        todayLogins: Math.round(targets.todayLogins * ease)
      };
      if (progress < 1) {
        const id = requestAnimationFrame(animate);
        this.animationFrames.push(id);
      }
    };
    const id = requestAnimationFrame(animate);
    this.animationFrames.push(id);
  }
  applyFilters() {
    let result = [...this.users];
    if (this.userSearch) {
      const q = this.userSearch.toLowerCase();
      result = result.filter(u => u.nom.toLowerCase().includes(q) || u.prenom.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    if (this.userRoleFilter !== 'all') result = result.filter(u => u.role === this.userRoleFilter);
    if (this.userStatusFilter !== 'all') result = result.filter(u => this.userStatusFilter === 'active' ? u.actif : !u.actif);
    this.filteredUsers = result;
    this.currentPage = 1;
  }
  setSection(section) {
    this.activeSection = section;
    this.mobileMenuOpen = false;
  }
  openCreateUser() {
    this.editingUser = null;
    this.userForm = {
      role: 'employee'
    };
    this.modalError = '';
    this.modalSuccess = '';
    this.showUserModal = true;
  }
  openEditUser(user) {
    this.editingUser = user;
    this.userForm = {
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      telephone: user.telephone,
      role: user.role
    };
    this.modalError = '';
    this.modalSuccess = '';
    this.showUserModal = true;
  }
  saveUser() {
    this.modalError = '';
    this.modalLoading = true;
    const action = this.editingUser ? this.adminAuth.updateUser(this.editingUser.id, this.userForm) : this.adminAuth.createUser(this.userForm);
    action.subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showUserModal = false;
          this.loadUsers();
          this.loadStats();
        } else {
          this.modalError = res.message;
        }
      },
      error: err => {
        this.modalLoading = false;
        this.modalError = err.error?.message || 'Erreur lors de la sauvegarde.';
      }
    });
  }
  confirmDelete(user) {
    this.deletingUser = user;
    this.showDeleteModal = true;
  }
  deleteUser() {
    if (!this.deletingUser) return;
    this.modalLoading = true;
    this.adminAuth.deleteUser(this.deletingUser.id).subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showDeleteModal = false;
          this.deletingUser = null;
          this.loadUsers();
          this.loadStats();
        }
      },
      error: () => {
        this.modalLoading = false;
      }
    });
  }
  toggleUserStatus(user) {
    this.adminAuth.toggleUser(user.id).subscribe({
      next: res => {
        if (res.success) {
          user.actif = res.actif;
          this.loadStats();
        }
      }
    });
  }
  openResetPassword(user) {
    this.resetPasswordUser = user;
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.modalError = '';
    this.showResetModal = true;
  }
  resetPassword() {
    if (this.newPassword !== this.confirmNewPassword) {
      this.modalError = 'Les mots de passe ne correspondent pas.';
      return;
    }
    if (!this.resetPasswordUser) return;
    this.modalLoading = true;
    this.adminAuth.resetPassword(this.resetPasswordUser.id, this.newPassword).subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showResetModal = false;
          this.resetPasswordUser = null;
        } else {
          this.modalError = res.message;
        }
      },
      error: err => {
        this.modalLoading = false;
        this.modalError = err.error?.message || 'Erreur.';
      }
    });
  }
  saveSettings() {
    this.settingsSaved = true;
    setTimeout(() => this.settingsSaved = false, 3000);
  }
  logout() {
    this.adminAuth.logout();
    this.router.navigate(['/admin/login']);
  }
  getRoleColor(role) {
    return role === 'admin' ? 'danger' : role === 'manager' ? 'warning' : 'primary';
  }
  getRoleIcon(role) {
    return role === 'admin' ? 'bi-shield-fill' : role === 'manager' ? 'bi-briefcase-fill' : 'bi-person-fill';
  }
  getInitials(user) {
    return `${user.prenom?.[0] || ''}${user.nom?.[0] || ''}`.toUpperCase();
  }
  getPermCount(role, allowed) {
    const perms = this.permissions[role];
    if (!perms) return 0;
    return Object.values(perms).filter(v => v === allowed).length;
  }
  getAvatarColor(role) {
    return role === 'admin' ? '#f43f5e' : role === 'manager' ? '#f59e0b' : '#6366f1';
  }
  getRoleBarWidth(role) {
    const found = this.roleStats.find(r => r.role === role);
    if (!found || !this.stats.totalUsers) return 0;
    return Math.round(found.count / this.stats.totalUsers * 100);
  }
  getMaxGrowth() {
    return Math.max(1, ...this.growthData.map(d => d.count));
  }
  formatDate(dateStr) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  onDocumentClick(e) {
    const target = e.target;
    if (!target.closest('.notif-bell-wrap')) this.showNotifications = false;
    if (!target.closest('.profile-menu-wrap')) this.showProfileMenu = false;
  }
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__.AdminAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      hostBindings: function AdminDashboardComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      decls: 647,
      vars: 172,
      consts: [[1, "admin-shell"], [1, "admin-sidebar"], [1, "sidebar-brand", 3, "click"], [1, "sidebar-logo"], [1, "bi", "bi-shield-fill-check"], [1, "sidebar-brand-text"], [1, "sidebar-nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "bi", "bi-grid-fill", "nav-icon"], [1, "nav-label"], ["class", "nav-pill", 4, "ngIf"], [1, "bi", "bi-people-fill", "nav-icon"], [1, "nav-count"], [1, "bi", "bi-key-fill", "nav-icon"], [1, "bi", "bi-bar-chart-fill", "nav-icon"], [1, "bi", "bi-activity", "nav-icon"], [1, "bi", "bi-gear-fill", "nav-icon"], [1, "sidebar-footer"], [1, "sidebar-admin-card"], [1, "admin-avatar-sm"], ["class", "admin-info", 4, "ngIf"], ["title", "R\u00E9duire", 1, "btn-collapse", 3, "click"], [1, "bi"], [1, "sidebar-overlay", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "topbar-left"], [1, "mobile-menu-btn", 3, "click"], [1, "bi", "bi-list"], [1, "topbar-search-wrap"], [1, "bi", "bi-search", "topbar-search-icon"], ["type", "text", "placeholder", "Recherche globale...", 1, "topbar-search", 3, "ngModelChange", "ngModel"], [1, "search-kbd"], [1, "topbar-right"], [1, "system-status"], [1, "status-dot", "online"], [1, "status-text"], [1, "notif-bell-wrap"], [1, "icon-btn", 3, "click"], [1, "bi", "bi-bell-fill"], ["class", "notif-badge", 4, "ngIf"], [1, "notif-dropdown"], [1, "notif-header"], [1, "notif-count"], [1, "notif-list"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "icon-btn", "theme-toggle", 3, "click", "title"], [1, "profile-menu-wrap"], [1, "admin-avatar-btn", 3, "click"], [1, "profile-dropdown"], [1, "profile-header"], [1, "profile-action", 3, "click"], [1, "bi", "bi-gear"], [1, "profile-action", "danger", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "admin-content"], [1, "page-section"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-primary-action", 3, "click"], [1, "bi", "bi-person-plus-fill", "me-2"], [1, "stats-grid"], [1, "stat-card", "stat-indigo"], [1, "stat-top"], [1, "stat-icon-wrap", "indigo"], [1, "bi", "bi-people-fill"], [1, "stat-trend", "up"], [1, "bi", "bi-arrow-up-right"], [1, "stat-value"], [1, "stat-label"], [1, "stat-bar"], [1, "stat-bar-fill"], [1, "stat-card", "stat-emerald"], [1, "stat-icon-wrap", "emerald"], [1, "bi", "bi-person-check-fill"], [1, "stat-bar-fill", "emerald"], [1, "stat-card", "stat-amber"], [1, "stat-icon-wrap", "amber"], [1, "bi", "bi-briefcase-fill"], [1, "stat-trend", "neutral"], [1, "bi", "bi-dash"], [1, "stat-bar-fill", "amber"], [1, "stat-card", "stat-sky"], [1, "stat-icon-wrap", "sky"], [1, "bi", "bi-box-arrow-in-right"], [1, "stat-bar-fill", "sky"], [1, "stat-card", "stat-rose"], [1, "stat-icon-wrap", "rose"], [1, "bi", "bi-person-x-fill"], ["class", "stat-trend down", 4, "ngIf"], ["class", "stat-trend up", 4, "ngIf"], [1, "stat-bar-fill", "rose"], [1, "stat-card", "stat-violet"], [1, "stat-icon-wrap", "violet"], [1, "bi", "bi-calendar-check-fill"], [1, "stat-bar-fill", "violet"], [1, "overview-bottom"], [1, "activity-card", "glass-card"], [1, "card-section-header"], [1, "bi", "bi-activity", "me-2", "text-indigo"], [1, "btn-text", 3, "click"], [1, "bi", "bi-arrow-right"], [1, "activity-list"], ["class", "activity-row", 4, "ngFor", "ngForOf"], ["class", "activity-empty", 4, "ngIf"], [1, "quick-actions-card", "glass-card"], [1, "bi", "bi-lightning-fill", "me-2", "text-amber"], [1, "quick-actions-grid"], [1, "quick-btn", 3, "click"], [1, "quick-icon", "indigo"], [1, "bi", "bi-person-plus-fill"], [1, "quick-icon", "amber"], [1, "bi", "bi-key-fill"], [1, "quick-icon", "sky"], [1, "bi", "bi-bar-chart-fill"], [1, "quick-icon", "violet"], [1, "bi", "bi-gear-fill"], [1, "quick-icon", "emerald"], [1, "bi", "bi-arrow-clockwise"], [1, "quick-icon", "rose"], [1, "bi", "bi-journal-text"], [1, "filters-bar", "glass-card"], [1, "filter-search-wrap"], [1, "bi", "bi-search", "filter-search-icon"], ["type", "text", "placeholder", "Rechercher par nom, email...", 1, "filter-search", 3, "ngModelChange", "ngModel"], [1, "filter-chips"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "admin"], ["value", "manager"], ["value", "employee"], ["value", "active"], ["value", "inactive"], [1, "table-card", "glass-card"], [1, "data-table"], [1, "th-actions"], ["class", "table-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination-bar", 4, "ngIf"], [1, "role-tabs"], [1, "role-tab", 3, "click"], [1, "bi", "bi-shield-fill", "me-2", "text-rose"], [1, "bi", "bi-briefcase-fill", "me-2", "text-amber"], [1, "bi", "bi-person-fill", "me-2", "text-indigo"], [1, "permissions-grid"], ["class", "perm-card glass-card", 4, "ngFor", "ngForOf"], [1, "role-summary-grid"], ["class", "role-summary-card glass-card", 4, "ngFor", "ngForOf"], [1, "btn-secondary-action", 3, "click"], [1, "bi", "bi-arrow-clockwise", "me-2"], [1, "kpi-row"], [1, "kpi-card", "glass-card"], [1, "kpi-icon", "indigo"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "emerald"], [1, "bi", "bi-activity"], [1, "kpi-icon", "rose"], [1, "bi", "bi-person-x"], [1, "kpi-icon", "sky"], [1, "bi", "bi-calendar-check"], [1, "charts-row"], [1, "chart-card", "glass-card"], [1, "chart-title"], [1, "bi", "bi-pie-chart-fill", "me-2"], [1, "donut-chart-wrap"], ["viewBox", "0 0 120 120", 1, "donut-svg"], ["cx", "60", "cy", "60", "r", "45", "fill", "none", "stroke", "#1e293b", "stroke-width", "18", 1, "donut-ring"], ["cx", "60", "cy", "60", "r", "45", "fill", "none", "stroke", "#6366f1", "stroke-width", "18", "stroke-dasharray", "283", "stroke-dashoffset", "0", "transform", "rotate(-90 60 60)", 1, "donut-seg", "seg-indigo"], [1, "donut-center"], [1, "donut-total"], [1, "donut-label"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "bi", "bi-graph-up", "me-2"], [1, "bar-chart-wrap"], ["class", "bar-group", 4, "ngFor", "ngForOf"], ["class", "bar-empty", 4, "ngIf"], [1, "bi", "bi-toggle-on", "me-2"], [1, "status-chart"], [1, "status-ring-wrap"], [1, "ring-segment", "active"], [1, "status-stats"], [1, "status-stat"], [1, "ss-dot", "active"], [1, "ss-info"], [1, "ss-value"], [1, "ss-label"], [1, "ss-dot", "inactive"], [1, "ss-dot", "admin"], [1, "system-health-card", "glass-card"], [1, "bi", "bi-cpu-fill", "me-2", "text-indigo"], [1, "health-badge", "online"], [1, "bi", "bi-circle-fill", "me-1"], [1, "health-modules"], ["class", "health-module", 4, "ngFor", "ngForOf"], [1, "activity-full-card", "glass-card"], [1, "activity-full-list"], ["class", "activity-full-row", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["class", "table-empty", 4, "ngIf"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "settings-saved-banner"], [1, "bi", "bi-check-circle-fill"], [1, "settings-grid"], [1, "settings-section", "glass-card"], [1, "settings-section-header"], [1, "settings-section-icon", "indigo"], [1, "bi", "bi-building"], [1, "settings-fields"], [1, "settings-field"], ["type", "text", 1, "settings-input", 3, "ngModelChange", "ngModel"], [1, "settings-input", 3, "ngModelChange", "ngModel"], ["value", "fr"], ["value", "en"], ["value", "ar"], [1, "settings-toggle-field"], [1, "settings-toggle-info"], [1, "toggle-title"], [1, "toggle-desc"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "toggle-track"], [1, "toggle-thumb"], [1, "settings-section-icon", "rose"], [1, "bi", "bi-shield-fill"], ["type", "number", "min", "5", "max", "480", 1, "settings-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "3", "max", "50", 1, "settings-input", 3, "ngModelChange", "ngModel"], [1, "settings-section-icon", "amber"], [1, "settings-section-icon", "violet"], [1, "bi", "bi-robot"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body"], ["class", "alert-error", 4, "ngIf"], [1, "modal-fields"], [1, "modal-field-row"], [1, "modal-field"], ["type", "text", "placeholder", "Pr\u00E9nom", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "email@exemple.com", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+216 XX XXX XXX", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "modal-input", 3, "ngModelChange", "ngModel"], ["class", "modal-field", 4, "ngIf"], [1, "modal-footer"], [1, "btn-modal-cancel", 3, "click"], [1, "btn-modal-save", 3, "click", "disabled"], [1, "modal-box", "modal-sm", 3, "click"], [1, "modal-header", "danger"], [1, "bi", "bi-trash-fill", "me-2"], [1, "delete-confirm-text"], [1, "btn-modal-delete", 3, "click", "disabled"], [1, "bi", "bi-key-fill", "me-2"], [2, "color", "#94a3b8", "font-size", "13px", "margin-bottom", "16px"], [2, "color", "#f8fafc"], ["type", "password", "placeholder", "Min. 6 caract\u00E8res", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "modal-field", 2, "margin-top", "12px"], ["type", "password", "placeholder", "Confirmer", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "nav-pill"], [1, "admin-info"], [1, "admin-name"], [1, "admin-role-badge"], [1, "notif-badge"], [1, "notif-item", 3, "click"], [1, "notif-icon-wrap"], [1, "notif-body"], [1, "notif-text"], [1, "notif-time"], [1, "stat-trend", "down"], [1, "bi", "bi-exclamation"], [1, "bi", "bi-check"], [1, "activity-row"], [1, "activity-avatar"], [1, "activity-info"], [1, "activity-name"], [1, "activity-detail"], [1, "role-chip"], [1, "activity-status"], [1, "activity-empty"], [1, "bi", "bi-inbox"], [1, "table-row"], [1, "user-cell"], [1, "user-avatar"], [1, "user-info"], [1, "user-fullname"], ["class", "user-tel", 4, "ngIf"], [1, "td-email"], [1, "bi", "me-1"], [1, "status-toggle-wrap"], [1, "status-toggle", 3, "click", "title"], [1, "status-toggle-thumb"], [1, "status-label"], [1, "td-date"], [1, "td-actions"], [1, "row-actions"], ["title", "Modifier", 1, "row-btn", "edit", 3, "click"], [1, "bi", "bi-pencil-fill"], ["title", "R\u00E9initialiser MDP", 1, "row-btn", "key", 3, "click"], ["title", "Supprimer", 1, "row-btn", "delete", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "user-tel"], ["colspan", "6", 1, "table-empty"], [1, "pagination-bar"], [1, "page-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"], [1, "page-btn", 3, "click"], [1, "perm-card", "glass-card"], [1, "perm-info"], [1, "perm-icon-wrap"], ["class", "bi bi-check-circle-fill text-emerald", 4, "ngIf"], ["class", "bi bi-x-circle-fill text-rose", 4, "ngIf"], [1, "perm-name"], [1, "perm-role-note"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "bi", "bi-check-circle-fill", "text-emerald"], [1, "bi", "bi-x-circle-fill", "text-rose"], [1, "role-summary-card", "glass-card"], [1, "role-summary-header"], [1, "role-summary-icon"], [1, "role-summary-title"], [1, "role-summary-count"], [1, "role-perm-count"], [1, "perm-active"], [1, "perm-blocked"], [1, "role-progress-bar"], [1, "role-progress-fill"], [1, "legend-item"], [1, "legend-dot"], [1, "bar-group"], [1, "bar-col"], [1, "bar-fill", "indigo"], [1, "bar-value"], [1, "bar-label"], [1, "bar-empty"], [1, "bi", "bi-bar-chart"], [1, "health-module"], [1, "hm-icon", "ok"], [1, "hm-name"], [1, "hm-latency"], [1, "hm-status", "online"], [1, "activity-full-row"], [1, "afl-index"], [1, "afl-avatar"], [1, "afl-info"], [1, "afl-name"], [1, "afl-email"], [1, "afl-time"], [1, "afl-status"], [1, "table-empty"], [1, "alert-error"], [1, "bi", "bi-exclamation-triangle-fill"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "bi", "bi-arrow-clockwise", "spin-icon", "me-1"], [1, "bi", "bi-trash-fill", "me-1"], [1, "bi", "bi-key-fill", "me-1"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_2_listener() {
            return ctx.setSection("overview");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SIT ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nav", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Principal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_12_listener() {
            return ctx.setSection("overview");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Vue d'ensemble");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AdminDashboardComponent_span_16_Template, 2, 1, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_17_listener() {
            return ctx.setSection("users");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_23_listener() {
            return ctx.setSection("roles");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "R\u00F4les & Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Supervision");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_29_listener() {
            return ctx.setSection("analytics");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_33_listener() {
            return ctx.setSection("activity");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Activit\u00E9 syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_39_listener() {
            return ctx.setSection("settings");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 18)(44, "div", 19)(45, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AdminDashboardComponent_div_47_Template, 5, 2, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_48_listener() {
            return ctx.sidebarCollapsed = !ctx.sidebarCollapsed;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_50_listener() {
            return ctx.mobileMenuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 25)(52, "header", 26)(53, "div", 27)(54, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_54_listener() {
            return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "kbd", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u2318K");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 34)(62, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Syst\u00E8me OK");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 38)(67, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_67_listener() {
            return ctx.showNotifications = !ctx.showNotifications;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AdminDashboardComponent_span_69_Template, 2, 1, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 42)(71, "div", 43)(72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, AdminDashboardComponent_div_77_Template, 8, 8, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_78_listener() {
            return ctx.darkMode = !ctx.darkMode;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 48)(81, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_81_listener() {
            return ctx.showProfileMenu = !ctx.showProfileMenu;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 50)(84, "div", 51)(85, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_89_listener() {
            ctx.setSection("settings");
            return ctx.showProfileMenu = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Param\u00E8tres ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_92_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " D\u00E9connexion ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "main", 56)(96, "section", 57)(97, "div", 58)(98, "div")(99, "h2", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Vue d'ensemble");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Tableau de bord administrateur \u2014 donn\u00E9es en temps r\u00E9el");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_103_listener() {
            return ctx.openCreateUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Nouvel utilisateur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 63)(107, "div", 64)(108, "div", 65)(109, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " +12%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Total utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 74)(121, "div", 65)(122, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " Actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Employ\u00E9s actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 78)(134, "div", 65)(135, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "i", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Stable");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Managers actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "div", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 84)(147, "div", 65)(148, "div", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Aujourd'hui");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Connexions du jour");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 88)(160, "div", 65)(161, "div", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](163, AdminDashboardComponent_div_163_Template, 3, 0, "div", 91)(164, AdminDashboardComponent_div_164_Template, 3, 0, "div", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Comptes d\u00E9sactiv\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "div", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 94)(172, "div", 65)(173, "div", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " Pr\u00E9sences");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Pr\u00E9sences aujourd'hui");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 98)(185, "div", 99)(186, "div", 100)(187, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Activit\u00E9 r\u00E9cente");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "button", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_190_listener() {
            return ctx.setSection("activity");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Voir tout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](194, AdminDashboardComponent_div_194_Template, 12, 14, "div", 105)(195, AdminDashboardComponent_div_195_Template, 3, 0, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 107)(197, "div", 100)(198, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Actions rapides");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 109)(202, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_202_listener() {
            return ctx.openCreateUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "i", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Ajouter utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_207_listener() {
            return ctx.setSection("roles");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "G\u00E9rer permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_212_listener() {
            return ctx.setSection("analytics");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_217_listener() {
            return ctx.setSection("settings");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "i", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_222_listener() {
            return ctx.loadAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Actualiser");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_227_listener() {
            return ctx.setSection("activity");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Logs syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "section", 57)(233, "div", 58)(234, "div")(235, "h2", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Gestion des utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_239_listener() {
            return ctx.openCreateUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Nouvel utilisateur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 123)(243, "div", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "i", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "input", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_245_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userSearch, $event) || (ctx.userSearch = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_245_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 127)(247, "select", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_247_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userRoleFilter, $event) || (ctx.userRoleFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_247_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "option", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Tous les r\u00F4les");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "option", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "option", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "option", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "select", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_256_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userStatusFilter, $event) || (ctx.userStatusFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_256_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "option", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Tous les statuts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "option", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Actif");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "option", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Inactif");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 135)(264, "table", 136)(265, "thead")(266, "tr")(267, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "R\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Statut");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Inscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "th", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](280, AdminDashboardComponent_tr_280_Template, 31, 17, "tr", 138)(281, AdminDashboardComponent_tr_281_Template, 4, 0, "tr", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](282, AdminDashboardComponent_div_282_Template, 6, 3, "div", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "section", 57)(284, "div", 58)(285, "div")(286, "h2", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "R\u00F4les & Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Contr\u00F4le des acc\u00E8s par r\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 141)(291, "button", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_291_listener() {
            return ctx.selectedPermRole = "admin";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Administrateur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "button", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_294_listener() {
            return ctx.selectedPermRole = "manager";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "i", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Manager ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "button", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_297_listener() {
            return ctx.selectedPermRole = "employee";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "i", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Employ\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](301, AdminDashboardComponent_div_301_Template, 14, 8, "div", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](303, AdminDashboardComponent_div_303_Template, 16, 12, "div", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "section", 57)(305, "div", 58)(306, "div")(307, "h2", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "Analytics & Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Visualisation des donn\u00E9es plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "button", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_311_listener() {
            return ctx.loadAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "i", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 152)(315, "div", 153)(316, "div", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Total comptes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 153)(323, "div", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "i", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Comptes actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 153)(330, "div", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](331, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Comptes inactifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 153)(337, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "i", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Pr\u00E9sences auj.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 163)(344, "div", 164)(345, "div", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "i", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "R\u00E9partition par r\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "svg", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](350, "circle", 169)(351, "circle", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 171)(353, "div", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "div", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](358, AdminDashboardComponent_div_358_Template, 6, 4, "div", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 164)(360, "div", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "i", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "Inscriptions (7 derniers jours)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](364, AdminDashboardComponent_div_364_Template, 8, 7, "div", 178)(365, AdminDashboardComponent_div_365_Template, 3, 0, "div", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 164)(367, "div", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Comptes actifs vs inactifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 181)(371, "div", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](372, "div", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 184)(374, "div", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "div", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 187)(377, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "div", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "div", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 187)(384, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "Inactifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "div", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 187)(391, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Admins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 192)(396, "div", 100)(397, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "i", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "\u00C9tat du syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "span", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](401, "i", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Op\u00E9rationnel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "div", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](404, AdminDashboardComponent_div_404_Template, 9, 2, "div", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "section", 57)(406, "div", 58)(407, "div")(408, "h2", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](409, "Activit\u00E9 syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "Logs et \u00E9v\u00E9nements r\u00E9cents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "button", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_412_listener() {
            return ctx.loadActivity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "i", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div", 198)(416, "div", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](417, AdminDashboardComponent_div_417_Template, 17, 22, "div", 200)(418, AdminDashboardComponent_div_418_Template, 3, 0, "div", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "section", 57)(420, "div", 58)(421, "div")(422, "h2", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "Param\u00E8tres globaux");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "Configuration de la plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_426_listener() {
            return ctx.saveSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](427, "i", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Sauvegarder ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "div", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, " Param\u00E8tres sauvegard\u00E9s avec succ\u00E8s ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 205)(433, "div", 206)(434, "div", 207)(435, "div", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "i", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div")(438, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, "Plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "Configuration g\u00E9n\u00E9rale");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "div", 210)(443, "div", 211)(444, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, "Nom de la plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "input", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_446_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.platformName, $event) || (ctx.settings.platformName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 211)(448, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "Langue par d\u00E9faut");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "select", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_450_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.language, $event) || (ctx.settings.language = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "option", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Fran\u00E7ais");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "option", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "English");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "option", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "div", 217)(458, "div", 218)(459, "span", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Mode maintenance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "span", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Restreint l'acc\u00E8s aux admins uniquement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "label", 221)(464, "input", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_464_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.maintenanceMode, $event) || (ctx.settings.maintenanceMode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "span", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](466, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 217)(468, "div", 218)(469, "span", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "Inscriptions ouvertes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "span", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](472, "Autoriser les nouvelles inscriptions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "label", 221)(474, "input", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_474_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.registrationOpen, $event) || (ctx.settings.registrationOpen = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "span", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](476, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 206)(478, "div", 207)(479, "div", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](480, "i", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div")(482, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "S\u00E9curit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Authentification & acc\u00E8s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 210)(487, "div", 211)(488, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "Timeout session (minutes)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "input", 227);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_490_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.sessionTimeout, $event) || (ctx.settings.sessionTimeout = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "div", 211)(492, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "Tentatives de connexion max");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "input", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_494_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.maxLoginAttempts, $event) || (ctx.settings.maxLoginAttempts = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "div", 217)(496, "div", 218)(497, "span", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](498, "Double authentification");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "span", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "Requis pour tous les comptes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "label", 221)(502, "input", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_502_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.twoFactorRequired, $event) || (ctx.settings.twoFactorRequired = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "span", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](504, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "div", 206)(506, "div", 207)(507, "div", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](508, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "div")(510, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "Alertes et communications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 210)(515, "div", 217)(516, "div", 218)(517, "span", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "Notifications email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "span", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Envoyer des alertes par email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "label", 221)(522, "input", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_522_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.emailNotifications, $event) || (ctx.settings.emailNotifications = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "span", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](524, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 206)(526, "div", 207)(527, "div", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](528, "i", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "div")(530, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, "IA & Int\u00E9grations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, "Modules intelligents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div", 210)(535, "div", 217)(536, "div", 218)(537, "span", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Module IA actif");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "span", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "Recommandations et analyses IA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "label", 221)(542, "input", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_542_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.aiEnabled, $event) || (ctx.settings.aiEnabled = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "span", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](544, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "div", 217)(546, "div", 218)(547, "span", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "Mode sombre par d\u00E9faut");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "span", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](550, "Th\u00E8me sombre pour les nouveaux utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "label", 221)(552, "input", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_552_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.darkModeDefault, $event) || (ctx.settings.darkModeDefault = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "span", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](554, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "div", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_555_listener() {
            return ctx.showUserModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](556, "div", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_556_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "div", 234)(558, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](559);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "button", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_560_listener() {
            return ctx.showUserModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "i", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](563, AdminDashboardComponent_div_563_Template, 3, 1, "div", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 239)(565, "div", 240)(566, "div", 241)(567, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "Pr\u00E9nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "input", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_569_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.prenom, $event) || (ctx.userForm.prenom = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "div", 241)(571, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "Nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "input", 243);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_573_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.nom, $event) || (ctx.userForm.nom = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "div", 241)(575, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](576, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "input", 244);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_577_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.email, $event) || (ctx.userForm.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "div", 241)(579, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](580, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "input", 245);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_581_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.telephone, $event) || (ctx.userForm.telephone = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "div", 241)(583, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](584, "R\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "select", 246);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_585_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.role, $event) || (ctx.userForm.role = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "option", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](587, "Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "option", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](589, "Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "option", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](591, "Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](592, AdminDashboardComponent_div_592_Template, 4, 1, "div", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "div", 248)(594, "button", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_594_listener() {
            return ctx.showUserModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](595, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "button", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_596_listener() {
            return ctx.saveUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](597, AdminDashboardComponent_span_597_Template, 3, 0, "span", 139)(598, AdminDashboardComponent_span_598_Template, 3, 0, "span", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "div", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_599_listener() {
            return ctx.showDeleteModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "div", 251);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_600_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "div", 252)(602, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](603, "i", 253);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](604, "Supprimer l'utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "button", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_605_listener() {
            return ctx.showDeleteModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](606, "i", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "div", 237)(608, "p", 254);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](609, " \u00CAtes-vous s\u00FBr de vouloir supprimer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](610, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](611);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, " ? Cette action est irr\u00E9versible. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "div", 248)(614, "button", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_614_listener() {
            return ctx.showDeleteModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](615, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "button", 255);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_616_listener() {
            return ctx.deleteUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](617, AdminDashboardComponent_span_617_Template, 3, 0, "span", 139)(618, AdminDashboardComponent_span_618_Template, 2, 0, "span", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "div", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_619_listener() {
            return ctx.showResetModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "div", 251);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_620_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "div", 234)(622, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](623, "i", 256);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "R\u00E9initialiser le mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "button", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_625_listener() {
            return ctx.showResetModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](626, "i", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "div", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](628, AdminDashboardComponent_div_628_Template, 3, 1, "div", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "p", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](630, " Nouveau mot de passe pour ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](631, "strong", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](632);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](633, "div", 241)(634, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](635, "Nouveau mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "input", 259);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_636_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.newPassword, $event) || (ctx.newPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](637, "div", 260)(638, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](639, "Confirmer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](640, "input", 261);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_640_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.confirmNewPassword, $event) || (ctx.confirmNewPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](641, "div", 248)(642, "button", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_642_listener() {
            return ctx.showResetModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](643, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](644, "button", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_644_listener() {
            return ctx.resetPassword();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](645, AdminDashboardComponent_span_645_Template, 3, 0, "span", 139)(646, AdminDashboardComponent_span_646_Template, 2, 0, "span", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sidebar-collapsed", ctx.sidebarCollapsed)("light-mode", !ctx.darkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.mobileMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadNotifications > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.getAvatarColor((ctx.admin == null ? null : ctx.admin.role) || "admin"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getInitials(ctx.admin || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](156, _c0)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sidebarCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-chevron-double-left", !ctx.sidebarCollapsed)("bi-chevron-double-right", ctx.sidebarCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.mobileMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadNotifications > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.unreadNotifications, " nouvelles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.darkMode ? "Mode clair" : "Mode sombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-sun-fill", ctx.darkMode)("bi-moon-fill", !ctx.darkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.getAvatarColor((ctx.admin == null ? null : ctx.admin.role) || "admin"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getInitials(ctx.admin || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](157, _c0)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showProfileMenu);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.admin == null ? null : ctx.admin.prenom, " ", ctx.admin == null ? null : ctx.admin.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.admin == null ? null : ctx.admin.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.activeEmployees);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.activeEmployees / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.activeManagers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.activeManagers / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.todayLogins);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.todayLogins / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stats.inactiveUsers > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stats.inactiveUsers === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.inactiveUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.inactiveUsers / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.attendanceToday);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.attendanceToday / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activityLogs.slice(0, 6));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activityLogs.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.filteredUsers.length, " utilisateur(s) trouv\u00E9(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userRoleFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userStatusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pagedUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pagedUsers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPermRole === "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPermRole === "manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPermRole === "employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissionsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](158, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.activeEmployees + ctx.stats.activeManagers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.inactiveUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.attendanceToday);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roleStats);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.growthData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.growthData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("--pct", ctx.stats.totalUsers ? (ctx.stats.activeEmployees + ctx.stats.activeManagers) / ctx.stats.totalUsers : 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.activeEmployees + ctx.stats.activeManagers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.inactiveUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalAdmins);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction6"](165, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](159, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](160, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](161, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](162, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](163, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](164, _c7)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activityLogs);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activityLogs.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.settingsSaved);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.platformName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.language);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.maintenanceMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.registrationOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.sessionTimeout);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.maxLoginAttempts);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.twoFactorRequired);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.emailNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.aiEnabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.darkModeDefault);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.editingUser ? "Modifier" : "Cr\u00E9er", " un utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalError);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.prenom);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.nom);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.telephone);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editingUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showDeleteModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.deletingUser == null ? null : ctx.deletingUser.prenom, " ", ctx.deletingUser == null ? null : ctx.deletingUser.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showResetModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalError);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.resetPasswordUser == null ? null : ctx.resetPasswordUser.prenom, " ", ctx.resetPasswordUser == null ? null : ctx.resetPasswordUser.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.newPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmNewPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["\n\n\n\n\n[_nghost-%COMP%] { display: block; height: 100vh; }\n\n\n\n.admin-shell[_ngcontent-%COMP%] {\n  --sidebar-w: 260px;\n  --sidebar-w-sm: 72px;\n  --topbar-h: 64px;\n  --bg: #0b1120;\n  --bg-card: rgba(15,23,42,0.75);\n  --bg-card-hover: rgba(20,30,55,0.9);\n  --border: rgba(99,102,241,0.12);\n  --text-primary: #f1f5f9;\n  --text-secondary: #94a3b8;\n  --text-muted: #475569;\n  --indigo: #6366f1;\n  --indigo-glow: rgba(99,102,241,0.25);\n  --sky: #0ea5e9;\n  --emerald: #10b981;\n  --amber: #f59e0b;\n  --rose: #f43f5e;\n  --violet: #8b5cf6;\n  display: flex;\n  height: 100vh;\n  background: var(--bg);\n  overflow: hidden;\n  font-family: 'Inter', sans-serif;\n  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);\n}\n\n.admin-shell.light-mode[_ngcontent-%COMP%] {\n  --bg: #f1f5f9;\n  --bg-card: rgba(255,255,255,0.85);\n  --border: rgba(99,102,241,0.15);\n  --text-primary: #0f172a;\n  --text-secondary: #475569;\n  --text-muted: #94a3b8;\n}\n\n\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-width: var(--sidebar-w);\n  height: 100vh;\n  background: rgba(8,13,28,0.95);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s cubic-bezier(0.16,1,0.3,1), min-width 0.3s;\n  position: relative;\n  z-index: 100;\n  backdrop-filter: blur(20px);\n  overflow: hidden;\n}\n\n.sidebar-collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w-sm);\n  min-width: var(--sidebar-w-sm);\n}\n\n\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 18px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border);\n  min-height: 64px;\n  overflow: hidden;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  background: linear-gradient(135deg, var(--indigo), var(--sky));\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 18px; color: #fff;\n  box-shadow: 0 0 20px var(--indigo-glow);\n}\n.sidebar-brand-text[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 17px;\n  font-family: 'Syne', sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.sidebar-brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--indigo); }\n.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-brand-text[_ngcontent-%COMP%] { display: none; }\n\n\n\n.sidebar-nav[_ngcontent-%COMP%] { flex: 1; padding: 16px 10px; overflow-y: auto; overflow-x: hidden; }\n.nav-section-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 10px 10px 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity 0.2s;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] { opacity: 0; height: 0; padding: 0; }\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.nav-item[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.08); color: var(--text-primary); }\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.15);\n  color: var(--indigo);\n  box-shadow: inset 3px 0 0 var(--indigo);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] { color: var(--indigo); }\n.nav-icon[_ngcontent-%COMP%] { font-size: 16px; min-width: 16px; transition: transform 0.2s; }\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] { transform: scale(1.1); }\n.nav-label[_ngcontent-%COMP%] { font-size: 14px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; }\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] { display: none; }\n.nav-pill[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--rose);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 2px 7px;\n}\n.nav-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--text-muted);\n  font-size: 12px;\n  font-weight: 600;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-pill[_ngcontent-%COMP%], .sidebar-collapsed[_ngcontent-%COMP%]   .nav-count[_ngcontent-%COMP%] { display: none; }\n\n\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sidebar-admin-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.admin-avatar-sm[_ngcontent-%COMP%] {\n  width: 34px; height: 34px; min-width: 34px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.admin-info[_ngcontent-%COMP%] { min-width: 0; overflow: hidden; }\n.admin-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.admin-role-badge[_ngcontent-%COMP%] { color: var(--indigo); font-size: 11px; font-weight: 500; }\n.sidebar-collapsed[_ngcontent-%COMP%]   .admin-info[_ngcontent-%COMP%] { display: none; }\n\n.btn-collapse[_ngcontent-%COMP%] {\n  background: none; border: 1px solid var(--border);\n  border-radius: 8px; padding: 6px 8px;\n  color: var(--text-muted); cursor: pointer;\n  transition: all 0.2s; min-width: 32px;\n}\n.btn-collapse[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.1); color: var(--indigo); border-color: var(--indigo); }\n\n\n\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 99;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.sidebar-overlay.visible[_ngcontent-%COMP%] { opacity: 1; }\n\n\n\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n\n\n\n.admin-topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  background: rgba(8,13,28,0.9);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  gap: 16px;\n  backdrop-filter: blur(20px);\n  flex-shrink: 0;\n}\n.light-mode[_ngcontent-%COMP%]   .admin-topbar[_ngcontent-%COMP%] { background: rgba(248,250,252,0.9); }\n\n.topbar-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none; border: 1px solid var(--border);\n  border-radius: 8px; padding: 6px 10px;\n  color: var(--text-secondary); cursor: pointer;\n  font-size: 18px; transition: all 0.2s;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]:hover { color: var(--indigo); border-color: var(--indigo); }\n\n.topbar-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 400px;\n  width: 100%;\n}\n.topbar-search-icon[_ngcontent-%COMP%] {\n  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);\n  color: var(--text-muted); font-size: 14px; pointer-events: none;\n}\n.topbar-search[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 40px 8px 36px;\n  color: var(--text-primary);\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.topbar-search[_ngcontent-%COMP%]:focus { border-color: var(--indigo); box-shadow: 0 0 0 3px var(--indigo-glow); }\n.topbar-search[_ngcontent-%COMP%]::placeholder { color: var(--text-muted); }\n.search-kbd[_ngcontent-%COMP%] {\n  position: absolute; right: 10px; top: 50%; transform: translateY(-50%);\n  background: rgba(99,102,241,0.1); border: 1px solid var(--border);\n  border-radius: 4px; padding: 1px 6px; font-size: 10px; color: var(--text-muted);\n}\n\n.topbar-right[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n\n.system-status[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 6px;\n  padding: 5px 12px;\n  background: rgba(16,185,129,0.08);\n  border: 1px solid rgba(16,185,129,0.2);\n  border-radius: 20px;\n  font-size: 12px; font-weight: 500; color: var(--emerald);\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 7px; height: 7px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_blink 2s ease-in-out infinite;\n}\n.status-dot.online[_ngcontent-%COMP%] { background: var(--emerald); box-shadow: 0 0 6px var(--emerald); }\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% { opacity: 1; } 50% { opacity: 0.4; }\n}\n.status-text[_ngcontent-%COMP%] { white-space: nowrap; }\n\n\n\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px; height: 36px;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  color: var(--text-secondary); cursor: pointer;\n  font-size: 15px; transition: all 0.2s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.1); color: var(--indigo); border-color: var(--indigo); }\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute; top: -4px; right: -4px;\n  background: var(--rose);\n  color: #fff; font-size: 9px; font-weight: 700;\n  border-radius: 10px; padding: 1px 4px;\n  border: 2px solid var(--bg);\n}\n\n\n\n.notif-bell-wrap[_ngcontent-%COMP%] { position: relative; }\n.notif-dropdown[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 320px;\n  background: rgba(8,13,28,0.97);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 0;\n  opacity: 0; transform: translateY(-10px) scale(0.97);\n  pointer-events: none;\n  transition: all 0.2s cubic-bezier(0.16,1,0.3,1);\n  z-index: 200;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 20px 40px rgba(0,0,0,0.4);\n  overflow: hidden;\n}\n.notif-dropdown.open[_ngcontent-%COMP%] { opacity: 1; transform: none; pointer-events: all; }\n.notif-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex; justify-content: space-between; align-items: center;\n  border-bottom: 1px solid var(--border);\n  font-weight: 600; color: var(--text-primary); font-size: 13px;\n}\n.notif-count[_ngcontent-%COMP%] { color: var(--indigo); font-size: 11px; }\n.notif-item[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; cursor: pointer;\n  transition: background 0.15s;\n  border-bottom: 1px solid rgba(255,255,255,0.03);\n}\n.notif-item[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.06); }\n.notif-item.unread[_ngcontent-%COMP%] { background: rgba(99,102,241,0.04); }\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; min-width: 32px;\n  border-radius: 8px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 14px;\n}\n.notif-color-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.notif-color-warning[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.notif-color-info[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.notif-body[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.notif-text[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 500; }\n.notif-time[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; margin-top: 2px; }\n\n\n\n.profile-menu-wrap[_ngcontent-%COMP%] { position: relative; }\n.admin-avatar-btn[_ngcontent-%COMP%] {\n  width: 36px; height: 36px;\n  border-radius: 10px;\n  border: none; cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n  transition: all 0.2s;\n  box-shadow: 0 0 15px rgba(99,102,241,0.3);\n}\n.admin-avatar-btn[_ngcontent-%COMP%]:hover { transform: scale(1.05); }\n.profile-dropdown[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 200px;\n  background: rgba(8,13,28,0.97);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 8px;\n  opacity: 0; transform: translateY(-8px) scale(0.97);\n  pointer-events: none;\n  transition: all 0.2s;\n  z-index: 200;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 16px 32px rgba(0,0,0,0.4);\n}\n.profile-dropdown.open[_ngcontent-%COMP%] { opacity: 1; transform: none; pointer-events: all; }\n.profile-header[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 6px;\n}\n.profile-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; color: var(--text-primary); font-size: 13px; }\n.profile-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; }\n.profile-action[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  width: 100%; padding: 8px 12px;\n  background: none; border: none; border-radius: 8px;\n  color: var(--text-secondary); font-size: 13px; cursor: pointer;\n  transition: all 0.15s; text-align: left;\n}\n.profile-action[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.08); color: var(--text-primary); }\n.profile-action.danger[_ngcontent-%COMP%]:hover { background: rgba(244,63,94,0.08); color: var(--rose); }\n\n\n\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1; overflow-y: auto;\n  padding: 28px;\n  display: flex; flex-direction: column; gap: 0;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99,102,241,0.3) transparent;\n}\n.admin-content[_ngcontent-%COMP%]::-webkit-scrollbar { width: 6px; }\n.admin-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 3px; }\n\n\n\n.page-section[_ngcontent-%COMP%] { display: none; flex-direction: column; gap: 24px; animation: _ngcontent-%COMP%_fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1); }\n.page-section.active[_ngcontent-%COMP%] { display: flex; }\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from { opacity: 0; transform: translateY(16px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 24px; font-weight: 800;\n  color: var(--text-primary); margin: 0 0 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 14px; margin: 0; }\n\n\n\n.btn-primary-action[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: linear-gradient(135deg, var(--indigo), var(--sky));\n  border: none; border-radius: 10px;\n  color: #fff; font-size: 14px; font-weight: 600;\n  cursor: pointer; transition: all 0.3s;\n  display: flex; align-items: center;\n  font-family: 'Inter', sans-serif;\n  box-shadow: 0 4px 16px var(--indigo-glow);\n  white-space: nowrap;\n}\n.btn-primary-action[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.4); }\n\n.btn-secondary-action[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: rgba(99,102,241,0.1);\n  border: 1px solid rgba(99,102,241,0.25);\n  border-radius: 10px;\n  color: var(--indigo); font-size: 14px; font-weight: 500;\n  cursor: pointer; transition: all 0.2s;\n  display: flex; align-items: center;\n  font-family: 'Inter', sans-serif;\n  white-space: nowrap;\n}\n.btn-secondary-action[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.18); }\n\n.btn-text[_ngcontent-%COMP%] {\n  background: none; border: none;\n  color: var(--indigo); font-size: 13px; cursor: pointer;\n  display: flex; align-items: center; gap: 4px;\n  font-family: 'Inter', sans-serif;\n  transition: color 0.2s;\n}\n.btn-text[_ngcontent-%COMP%]:hover { color: #818cf8; }\n\n\n\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  backdrop-filter: blur(16px);\n  box-shadow: 0 4px 24px rgba(0,0,0,0.2);\n  transition: box-shadow 0.3s;\n}\n.glass-card[_ngcontent-%COMP%]:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.3); }\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  backdrop-filter: blur(16px);\n  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }\n\n.stat-top[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px; height: 40px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 18px;\n}\n.stat-icon-wrap.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.stat-icon-wrap.emerald[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.stat-icon-wrap.amber[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.stat-icon-wrap.sky[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.stat-icon-wrap.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.stat-icon-wrap.violet[_ngcontent-%COMP%] { background: rgba(139,92,246,0.15); color: var(--violet); }\n\n.stat-trend[_ngcontent-%COMP%] {\n  font-size: 11px; font-weight: 600;\n  padding: 3px 7px; border-radius: 6px;\n  display: flex; align-items: center; gap: 3px;\n}\n.stat-trend.up[_ngcontent-%COMP%] { background: rgba(16,185,129,0.12); color: var(--emerald); }\n.stat-trend.down[_ngcontent-%COMP%] { background: rgba(244,63,94,0.12); color: var(--rose); }\n.stat-trend.neutral[_ngcontent-%COMP%] { background: rgba(100,116,139,0.12); color: var(--text-muted); }\n\n.stat-value[_ngcontent-%COMP%] { font-size: 32px; font-weight: 800; color: var(--text-primary); line-height: 1; margin-bottom: 4px; }\n.stat-label[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 13px; margin-bottom: 12px; }\n\n.stat-bar[_ngcontent-%COMP%] { height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }\n.stat-bar-fill[_ngcontent-%COMP%] {\n  height: 100%; border-radius: 2px;\n  background: var(--indigo);\n  transition: width 1s cubic-bezier(0.16,1,0.3,1);\n}\n.stat-bar-fill.emerald[_ngcontent-%COMP%] { background: var(--emerald); }\n.stat-bar-fill.amber[_ngcontent-%COMP%] { background: var(--amber); }\n.stat-bar-fill.sky[_ngcontent-%COMP%] { background: var(--sky); }\n.stat-bar-fill.rose[_ngcontent-%COMP%] { background: var(--rose); }\n.stat-bar-fill.violet[_ngcontent-%COMP%] { background: var(--violet); }\n\n\n\n.overview-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n}\n\n.card-section-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 0;\n}\n\n\n\n.activity-card[_ngcontent-%COMP%] { padding: 20px; }\n.activity-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; }\n.activity-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 10px 8px; border-radius: 10px;\n  transition: background 0.15s;\n}\n.activity-row[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.05); }\n.activity-avatar[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.activity-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.activity-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; }\n.activity-detail[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; display: flex; align-items: center; gap: 6px; margin-top: 2px; }\n.activity-status[_ngcontent-%COMP%] {\n  font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 6px;\n  white-space: nowrap;\n}\n.activity-status.active[_ngcontent-%COMP%] { background: rgba(16,185,129,0.12); color: var(--emerald); }\n.activity-status.inactive[_ngcontent-%COMP%] { background: rgba(244,63,94,0.12); color: var(--rose); }\n.activity-empty[_ngcontent-%COMP%] { color: var(--text-muted); text-align: center; padding: 24px; font-size: 13px; }\n\n\n\n.quick-actions-card[_ngcontent-%COMP%] { padding: 20px; }\n.quick-actions-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n.quick-btn[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; align-items: center; gap: 8px;\n  padding: 14px 8px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 12px; cursor: pointer;\n  transition: all 0.2s; color: var(--text-secondary);\n  font-size: 12px; font-weight: 500; font-family: 'Inter', sans-serif;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99,102,241,0.08);\n  border-color: rgba(99,102,241,0.25);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.quick-icon[_ngcontent-%COMP%] {\n  width: 36px; height: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 16px;\n}\n.quick-icon.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.quick-icon.amber[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.quick-icon.sky[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.quick-icon.violet[_ngcontent-%COMP%] { background: rgba(139,92,246,0.15); color: var(--violet); }\n.quick-icon.emerald[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.quick-icon.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n\n\n\n.role-chip[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center;\n  padding: 3px 9px; border-radius: 6px;\n  font-size: 11px; font-weight: 600; white-space: nowrap;\n}\n.role-admin[_ngcontent-%COMP%] { background: rgba(244,63,94,0.12); color: var(--rose); border: 1px solid rgba(244,63,94,0.2); }\n.role-manager[_ngcontent-%COMP%] { background: rgba(245,158,11,0.12); color: var(--amber); border: 1px solid rgba(245,158,11,0.2); }\n.role-employee[_ngcontent-%COMP%] { background: rgba(99,102,241,0.12); color: var(--indigo); border: 1px solid rgba(99,102,241,0.2); }\n\n\n\n.text-indigo[_ngcontent-%COMP%] { color: var(--indigo); }\n.text-emerald[_ngcontent-%COMP%] { color: var(--emerald); }\n.text-amber[_ngcontent-%COMP%] { color: var(--amber); }\n.text-sky[_ngcontent-%COMP%] { color: var(--sky); }\n.text-rose[_ngcontent-%COMP%] { color: var(--rose); }\n\n\n\n.filters-bar[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;\n}\n.filter-search-wrap[_ngcontent-%COMP%] { position: relative; flex: 1; min-width: 200px; }\n.filter-search-icon[_ngcontent-%COMP%] {\n  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);\n  color: var(--text-muted); font-size: 14px;\n}\n.filter-search[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 8px 12px 8px 36px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  transition: border-color 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.filter-search[_ngcontent-%COMP%]:focus { border-color: var(--indigo); }\n.filter-search[_ngcontent-%COMP%]::placeholder { color: var(--text-muted); }\n.filter-chips[_ngcontent-%COMP%] { display: flex; gap: 8px; flex-wrap: wrap; }\n.filter-select[_ngcontent-%COMP%] {\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 7px 12px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  cursor: pointer; font-family: 'Inter', sans-serif;\n}\n\n\n\n.table-card[_ngcontent-%COMP%] { padding: 0; overflow: hidden; }\n.data-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] { border-bottom: 1px solid var(--border); }\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: var(--text-muted); font-size: 11px; font-weight: 600;\n  text-transform: uppercase; letter-spacing: 0.05em;\n  text-align: left; white-space: nowrap;\n}\n.th-actions[_ngcontent-%COMP%] { text-align: right; }\n.table-row[_ngcontent-%COMP%] { border-bottom: 1px solid rgba(255,255,255,0.03); transition: background 0.15s; }\n.table-row[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.04); }\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 12px 16px; }\n\n.user-cell[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.user-fullname[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; }\n.user-tel[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; margin-top: 2px; }\n.td-email[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 13px; }\n.td-date[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; white-space: nowrap; }\n.td-actions[_ngcontent-%COMP%] { text-align: right; }\n\n.row-actions[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: flex-end; gap: 6px; }\n.row-btn[_ngcontent-%COMP%] {\n  width: 30px; height: 30px;\n  border-radius: 7px; border: 1px solid var(--border);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; cursor: pointer; transition: all 0.15s;\n  background: rgba(30,41,59,0.4); color: var(--text-muted);\n}\n.row-btn.edit[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.15); color: var(--indigo); border-color: rgba(99,102,241,0.3); }\n.row-btn.key[_ngcontent-%COMP%]:hover { background: rgba(245,158,11,0.15); color: var(--amber); border-color: rgba(245,158,11,0.3); }\n.row-btn.delete[_ngcontent-%COMP%]:hover { background: rgba(244,63,94,0.15); color: var(--rose); border-color: rgba(244,63,94,0.3); }\n\n.table-empty[_ngcontent-%COMP%] { text-align: center; padding: 40px; color: var(--text-muted); font-size: 14px; }\n\n\n\n.status-toggle-wrap[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.status-toggle[_ngcontent-%COMP%] {\n  width: 36px; height: 20px;\n  background: rgba(100,116,139,0.3);\n  border: none; border-radius: 10px;\n  cursor: pointer; position: relative;\n  transition: background 0.2s;\n  padding: 0;\n}\n.status-toggle.on[_ngcontent-%COMP%] { background: var(--emerald); }\n.status-toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute; top: 2px; left: 2px;\n  width: 16px; height: 16px;\n  background: #fff; border-radius: 50%;\n  transition: transform 0.2s;\n  pointer-events: none;\n}\n.status-toggle.on[_ngcontent-%COMP%]   .status-toggle-thumb[_ngcontent-%COMP%] { transform: translateX(16px); }\n.status-label[_ngcontent-%COMP%] { font-size: 12px; color: var(--text-muted); }\n\n\n\n.pagination-bar[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: center; gap: 6px;\n  padding: 14px;\n  border-top: 1px solid var(--border);\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 32px; height: 32px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 8px; color: var(--text-secondary);\n  font-size: 13px; cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  transition: all 0.15s; font-family: 'Inter', sans-serif;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) { background: rgba(99,102,241,0.1); color: var(--indigo); }\n.page-btn.active[_ngcontent-%COMP%] { background: var(--indigo); color: #fff; border-color: var(--indigo); }\n.page-btn[_ngcontent-%COMP%]:disabled { opacity: 0.3; cursor: not-allowed; }\n\n\n\n.role-tabs[_ngcontent-%COMP%] {\n  display: flex; gap: 8px; flex-wrap: wrap;\n}\n.role-tab[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  color: var(--text-secondary); font-size: 14px; font-weight: 500;\n  cursor: pointer; transition: all 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.role-tab[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.08); color: var(--text-primary); }\n.role-tab.active[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); border-color: rgba(99,102,241,0.3); }\n\n.permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 12px;\n}\n.perm-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex; align-items: center; justify-content: space-between; gap: 12px;\n  transition: all 0.2s;\n}\n.perm-card[_ngcontent-%COMP%]:hover { transform: translateY(-2px); }\n.perm-info[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }\n.perm-icon-wrap[_ngcontent-%COMP%] { font-size: 18px; min-width: 20px; }\n.perm-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 14px; font-weight: 500; }\n.perm-role-note[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; }\n\n\n\n.toggle-switch[_ngcontent-%COMP%] { position: relative; display: inline-flex; cursor: pointer; }\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { display: none; }\n.toggle-track[_ngcontent-%COMP%] {\n  width: 44px; height: 24px;\n  background: rgba(100,116,139,0.3);\n  border-radius: 12px; transition: background 0.2s;\n  position: relative;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] { background: var(--indigo); }\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute; top: 3px; left: 3px;\n  width: 18px; height: 18px;\n  background: #fff; border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.3);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] { transform: translateX(20px); }\n.toggle-switch.disabled[_ngcontent-%COMP%] { opacity: 0.4; cursor: not-allowed; pointer-events: none; }\n\n\n\n.role-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.role-summary-card[_ngcontent-%COMP%] { padding: 20px; }\n.role-summary-header[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }\n.role-summary-icon[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px;\n}\n.role-icon-admin[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.role-icon-manager[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.role-icon-employee[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.role-summary-title[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 15px; font-weight: 700; }\n.role-summary-count[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; margin-top: 2px; }\n.role-perm-count[_ngcontent-%COMP%] { display: flex; gap: 12px; margin-bottom: 12px; font-size: 12px; }\n.perm-active[_ngcontent-%COMP%] { color: var(--emerald); }\n.perm-blocked[_ngcontent-%COMP%] { color: var(--rose); }\n.role-progress-bar[_ngcontent-%COMP%] { height: 4px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }\n.role-progress-fill[_ngcontent-%COMP%] {\n  height: 100%; border-radius: 2px;\n  transition: width 1s cubic-bezier(0.16,1,0.3,1);\n}\n.fill-admin[_ngcontent-%COMP%] { background: var(--rose); }\n.fill-manager[_ngcontent-%COMP%] { background: var(--amber); }\n.fill-employee[_ngcontent-%COMP%] { background: var(--indigo); }\n\n\n\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 14px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex; flex-direction: column; align-items: center; text-align: center;\n  gap: 6px; transition: all 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover { transform: translateY(-3px); }\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px; margin-bottom: 4px;\n}\n.kpi-icon.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.kpi-icon.emerald[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.kpi-icon.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.kpi-icon.sky[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.kpi-value[_ngcontent-%COMP%] { font-size: 28px; font-weight: 800; color: var(--text-primary); line-height: 1; }\n.kpi-label[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 12px; }\n\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.chart-card[_ngcontent-%COMP%] { padding: 20px; }\n.chart-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; display: flex; align-items: center; }\n\n\n\n.donut-chart-wrap[_ngcontent-%COMP%] { position: relative; display: flex; justify-content: center; margin-bottom: 16px; }\n.donut-svg[_ngcontent-%COMP%] { width: 120px; height: 120px; }\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute; top: 50%; left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.donut-total[_ngcontent-%COMP%] { font-size: 22px; font-weight: 800; color: var(--text-primary); }\n.donut-label[_ngcontent-%COMP%] { font-size: 10px; color: var(--text-muted); }\n.chart-legend[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.legend-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-secondary); }\n.legend-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { margin-left: auto; color: var(--text-primary); }\n.legend-dot[_ngcontent-%COMP%] { width: 10px; height: 10px; border-radius: 50%; min-width: 10px; }\n.dot-admin[_ngcontent-%COMP%] { background: var(--rose); }\n.dot-manager[_ngcontent-%COMP%] { background: var(--amber); }\n.dot-employee[_ngcontent-%COMP%] { background: var(--indigo); }\n\n\n\n.bar-chart-wrap[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-end; gap: 6px;\n  height: 100px; padding-bottom: 20px; position: relative;\n}\n.bar-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; flex: 1; height: 100%; }\n.bar-col[_ngcontent-%COMP%] { flex: 1; display: flex; align-items: flex-end; width: 100%; }\n.bar-fill[_ngcontent-%COMP%] {\n  width: 100%; border-radius: 4px 4px 0 0;\n  min-height: 4px; transition: height 1s cubic-bezier(0.16,1,0.3,1);\n  position: relative; display: flex; align-items: flex-start; justify-content: center;\n}\n.bar-fill.indigo[_ngcontent-%COMP%] { background: linear-gradient(to top, var(--indigo), rgba(99,102,241,0.5)); }\n.bar-value[_ngcontent-%COMP%] { font-size: 9px; color: var(--text-muted); margin-top: 2px; }\n.bar-label[_ngcontent-%COMP%] { font-size: 9px; color: var(--text-muted); margin-top: 4px; }\n.bar-empty[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 13px; width: 100%; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 20px 0; }\n\n\n\n.status-chart[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 20px; }\n.status-ring-wrap[_ngcontent-%COMP%] { position: relative; }\n.ring-segment[_ngcontent-%COMP%] {\n  width: 90px; height: 90px;\n  border-radius: 50%;\n  background: conic-gradient(var(--emerald) calc(var(--pct) * 360deg), rgba(255,255,255,0.07) 0deg);\n  display: flex; align-items: center; justify-content: center;\n}\n.status-stats[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; flex: 1; }\n.status-stat[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.ss-dot[_ngcontent-%COMP%] { width: 10px; height: 10px; border-radius: 50%; min-width: 10px; }\n.ss-dot.active[_ngcontent-%COMP%] { background: var(--emerald); }\n.ss-dot.inactive[_ngcontent-%COMP%] { background: var(--rose); }\n.ss-dot.admin[_ngcontent-%COMP%] { background: var(--indigo); }\n.ss-info[_ngcontent-%COMP%] {}\n.ss-value[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; color: var(--text-primary); line-height: 1; }\n.ss-label[_ngcontent-%COMP%] { font-size: 11px; color: var(--text-muted); }\n\n\n\n.system-health-card[_ngcontent-%COMP%] { padding: 20px; }\n.health-badge[_ngcontent-%COMP%] {\n  padding: 5px 12px; border-radius: 20px;\n  font-size: 12px; font-weight: 600;\n  display: flex; align-items: center;\n}\n.health-badge.online[_ngcontent-%COMP%] { background: rgba(16,185,129,0.12); color: var(--emerald); }\n.health-modules[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; margin-top: 4px; }\n.health-module[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  padding: 12px 14px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n}\n.hm-icon[_ngcontent-%COMP%] { font-size: 16px; }\n.hm-icon.ok[_ngcontent-%COMP%] { color: var(--emerald); }\n.hm-name[_ngcontent-%COMP%] { flex: 1; color: var(--text-primary); font-size: 13px; font-weight: 500; }\n.hm-latency[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; }\n.hm-status[_ngcontent-%COMP%] { font-size: 11px; font-weight: 600; }\n.hm-status.online[_ngcontent-%COMP%] { color: var(--emerald); }\n\n\n\n.activity-full-card[_ngcontent-%COMP%] { padding: 0; overflow: hidden; }\n.activity-full-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.activity-full-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.03);\n  transition: background 0.15s;\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s both;\n}\n.activity-full-row[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.04); }\n.afl-index[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; min-width: 28px; }\n.afl-avatar[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.afl-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.afl-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; }\n.afl-email[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.afl-time[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; white-space: nowrap; }\n.afl-status[_ngcontent-%COMP%] { font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 4px; white-space: nowrap; }\n.afl-status.active[_ngcontent-%COMP%] { color: var(--emerald); }\n.afl-status.inactive[_ngcontent-%COMP%] { color: var(--rose); }\n\n\n\n.settings-saved-banner[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(16,185,129,0.1);\n  border: 1px solid rgba(16,185,129,0.25);\n  border-radius: 10px;\n  color: var(--emerald);\n  font-size: 14px; font-weight: 500;\n  display: flex; align-items: center; gap: 8px;\n  opacity: 0; transform: translateY(-8px);\n  transition: all 0.3s;\n  pointer-events: none;\n}\n.settings-saved-banner.visible[_ngcontent-%COMP%] { opacity: 1; transform: none; }\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.settings-section[_ngcontent-%COMP%] { padding: 22px; }\n.settings-section-header[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px;\n}\n.settings-section-icon[_ngcontent-%COMP%] {\n  width: 44px; height: 44px; min-width: 44px;\n  border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px;\n}\n.settings-section-icon.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.settings-section-icon.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.settings-section-icon.amber[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.settings-section-icon.violet[_ngcontent-%COMP%] { background: rgba(139,92,246,0.15); color: var(--violet); }\n.settings-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }\n.settings-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 12px; color: var(--text-muted); margin: 0; }\n.settings-fields[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 14px; }\n.settings-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; color: var(--text-secondary); font-size: 12px; font-weight: 500; margin-bottom: 6px; }\n.settings-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 8px 12px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  transition: border-color 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.settings-input[_ngcontent-%COMP%]:focus { border-color: var(--indigo); }\n.settings-toggle-field[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between; gap: 12px;\n}\n.settings-toggle-info[_ngcontent-%COMP%] { flex: 1; }\n.toggle-title[_ngcontent-%COMP%] { display: block; color: var(--text-primary); font-size: 13px; font-weight: 500; }\n.toggle-desc[_ngcontent-%COMP%] { display: block; color: var(--text-muted); font-size: 11px; margin-top: 2px; }\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.6);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 500;\n  opacity: 0; pointer-events: none;\n  transition: opacity 0.25s;\n  backdrop-filter: blur(4px);\n  padding: 20px;\n}\n.modal-overlay.open[_ngcontent-%COMP%] { opacity: 1; pointer-events: all; }\n\n.modal-box[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  width: 100%; max-width: 520px;\n  box-shadow: 0 24px 60px rgba(0,0,0,0.5);\n  transform: scale(0.96) translateY(16px);\n  transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);\n  overflow: hidden;\n}\n.modal-box.modal-sm[_ngcontent-%COMP%] { max-width: 400px; }\n.modal-overlay.open[_ngcontent-%COMP%]   .modal-box[_ngcontent-%COMP%] { transform: none; }\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  display: flex; align-items: center; justify-content: space-between;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; }\n.modal-header.danger[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { color: var(--rose); }\n.modal-close[_ngcontent-%COMP%] {\n  background: none; border: none;\n  color: var(--text-muted); cursor: pointer; font-size: 16px;\n  width: 28px; height: 28px;\n  display: flex; align-items: center; justify-content: center;\n  border-radius: 6px; transition: all 0.15s;\n}\n.modal-close[_ngcontent-%COMP%]:hover { background: rgba(244,63,94,0.1); color: var(--rose); }\n\n.modal-body[_ngcontent-%COMP%] { padding: 20px; }\n.modal-fields[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 14px; }\n.modal-field-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.modal-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; color: var(--text-secondary); font-size: 12px; font-weight: 500; margin-bottom: 6px; }\n.modal-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.6);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 9px 12px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  transition: border-color 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.modal-input[_ngcontent-%COMP%]:focus { border-color: var(--indigo); box-shadow: 0 0 0 3px var(--indigo-glow); }\n\n.delete-confirm-text[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 14px; line-height: 1.6; }\n.delete-confirm-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--text-primary); }\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex; align-items: center; justify-content: flex-end; gap: 10px;\n  border-top: 1px solid var(--border);\n}\n.btn-modal-cancel[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; color: var(--text-secondary);\n  font-size: 13px; font-weight: 500; cursor: pointer;\n  transition: all 0.15s; font-family: 'Inter', sans-serif;\n}\n.btn-modal-cancel[_ngcontent-%COMP%]:hover { background: rgba(30,41,59,0.8); color: var(--text-primary); }\n.btn-modal-save[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: linear-gradient(135deg, var(--indigo), var(--sky));\n  border: none; border-radius: 9px;\n  color: #fff; font-size: 13px; font-weight: 600;\n  cursor: pointer; transition: all 0.2s;\n  display: flex; align-items: center; gap: 6px;\n  font-family: 'Inter', sans-serif;\n}\n.btn-modal-save[_ngcontent-%COMP%]:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px var(--indigo-glow); }\n.btn-modal-save[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n.btn-modal-delete[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: linear-gradient(135deg, var(--rose), #dc2626);\n  border: none; border-radius: 9px;\n  color: #fff; font-size: 13px; font-weight: 600;\n  cursor: pointer; transition: all 0.2s;\n  display: flex; align-items: center; gap: 6px;\n  font-family: 'Inter', sans-serif;\n}\n.btn-modal-delete[_ngcontent-%COMP%]:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(244,63,94,0.35); }\n.btn-modal-delete[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(244,63,94,0.1);\n  border: 1px solid rgba(244,63,94,0.25);\n  color: #fb7185; border-radius: 9px;\n  padding: 10px 14px; font-size: 13px;\n  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;\n}\n\n.spin-icon[_ngcontent-%COMP%] { display: inline-block; animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n\n\n\n@media (max-width: 1024px) {\n  .overview-bottom[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .charts-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n@media (max-width: 768px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    position: fixed; left: -100%; top: 0; height: 100vh;\n    width: 260px !important; min-width: 260px !important;\n    transition: left 0.3s cubic-bezier(0.16,1,0.3,1);\n    z-index: 200;\n  }\n  .admin-sidebar.open[_ngcontent-%COMP%] { left: 0; }\n  .sidebar-overlay[_ngcontent-%COMP%] { display: block; pointer-events: none; }\n  .sidebar-overlay.visible[_ngcontent-%COMP%] { pointer-events: all; }\n  .mobile-menu-btn[_ngcontent-%COMP%] { display: flex; }\n  .topbar-search-wrap[_ngcontent-%COMP%] { max-width: 200px; }\n  .system-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] { display: none; }\n  .admin-content[_ngcontent-%COMP%] { padding: 16px; }\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n  .modal-field-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .search-kbd[_ngcontent-%COMP%] { display: none; }\n}\n\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .admin-content[_ngcontent-%COMP%] { padding: 12px; }\n  .page-header[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; }\n  .filters-bar[_ngcontent-%COMP%] { flex-direction: column; }\n  .kpi-row[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3dEQUV3RDs7QUFFeEQsUUFBUSxjQUFjLEVBQUUsYUFBYSxFQUFFOztBQUV2QyxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlFQUFpRTtFQUNqRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFD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QkFBNkIsWUFBWSxFQUFFLG1CQUFtQixFQUFFOztBQUVoRTtFQUNFLCtCQUErQjtFQUMvQixzQ0FBc0M7RUFDdEMsY0FBYyxFQUFFLGtCQUFrQjtFQUNsQyxrQkFBa0IsRUFBRSxlQUFlO0VBQ25DLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CO0FBQ25FOztBQUVBLGFBQWEscUJBQXFCLEVBQUUsa0NBQWtDLEVBQUU7QUFDeEUsa0JBQWtCLEtBQUsseUJBQXlCLEVBQUUsRUFBRTs7QUFFcEQseURBQXlEO0FBQ3pEO0VBQ0UsbUJBQW1CLDBCQUEwQixFQUFFO0VBQy9DLGNBQWMsMEJBQTBCLEVBQUU7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGFBQWE7SUFDbkQsdUJBQXVCLEVBQUUsMkJBQTJCO0lBQ3BELGdEQUFnRDtJQUNoRCxZQUFZO0VBQ2Q7RUFDQSxzQkFBc0IsT0FBTyxFQUFFO0VBQy9CLG1CQUFtQixjQUFjLEVBQUUsb0JBQW9CLEVBQUU7RUFDekQsMkJBQTJCLG1CQUFtQixFQUFFO0VBQ2hELG1CQUFtQixhQUFhLEVBQUU7RUFDbEMsc0JBQXNCLGdCQUFnQixFQUFFO0VBQ3hDLDhCQUE4QixhQUFhLEVBQUU7RUFDN0MsaUJBQWlCLGFBQWEsRUFBRTtFQUNoQyxjQUFjLHFDQUFxQyxFQUFFO0VBQ3JELG1CQUFtQiwwQkFBMEIsRUFBRTtFQUMvQyxjQUFjLGFBQWEsRUFBRTtBQUMvQjs7QUFFQTtFQUNFLGNBQWMsMEJBQTBCLEVBQUU7RUFDMUMsaUJBQWlCLGFBQWEsRUFBRTtFQUNoQyxlQUFlLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFO0VBQ2hFLGVBQWUsc0JBQXNCLEVBQUU7RUFDdkMsV0FBVyxxQ0FBcUMsRUFBRTtBQUNwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgQURNSU4gREFTSEJPQVJEIMOiwoDClCBQcmVtaXVtIERlc2lnbiBTeXN0ZW1cbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG46aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDEwMHZoOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBWYXJpYWJsZXMgw6LClMKAw6LClMKAICovXG4uYWRtaW4tc2hlbGwge1xuICAtLXNpZGViYXItdzogMjYwcHg7XG4gIC0tc2lkZWJhci13LXNtOiA3MnB4O1xuICAtLXRvcGJhci1oOiA2NHB4O1xuICAtLWJnOiAjMGIxMTIwO1xuICAtLWJnLWNhcmQ6IHJnYmEoMTUsMjMsNDIsMC43NSk7XG4gIC0tYmctY2FyZC1ob3ZlcjogcmdiYSgyMCwzMCw1NSwwLjkpO1xuICAtLWJvcmRlcjogcmdiYSg5OSwxMDIsMjQxLDAuMTIpO1xuICAtLXRleHQtcHJpbWFyeTogI2YxZjVmOTtcbiAgLS10ZXh0LXNlY29uZGFyeTogIzk0YTNiODtcbiAgLS10ZXh0LW11dGVkOiAjNDc1NTY5O1xuICAtLWluZGlnbzogIzYzNjZmMTtcbiAgLS1pbmRpZ28tZ2xvdzogcmdiYSg5OSwxMDIsMjQxLDAuMjUpO1xuICAtLXNreTogIzBlYTVlOTtcbiAgLS1lbWVyYWxkOiAjMTBiOTgxO1xuICAtLWFtYmVyOiAjZjU5ZTBiO1xuICAtLXJvc2U6ICNmNDNmNWU7XG4gIC0tdmlvbGV0OiAjOGI1Y2Y2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKTtcbn1cblxuLmFkbWluLXNoZWxsLmxpZ2h0LW1vZGUge1xuICAtLWJnOiAjZjFmNWY5O1xuICAtLWJnLWNhcmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XG4gIC0tYm9yZGVyOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7XG4gIC0tdGV4dC1wcmltYXJ5OiAjMGYxNzJhO1xuICAtLXRleHQtc2Vjb25kYXJ5OiAjNDc1NTY5O1xuICAtLXRleHQtbXV0ZWQ6ICM5NGEzYjg7XG59XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBTSURFQkFSIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLmFkbWluLXNpZGViYXIge1xuICB3aWR0aDogdmFyKC0tc2lkZWJhci13KTtcbiAgbWluLXdpZHRoOiB2YXIoLS1zaWRlYmFyLXcpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgsMTMsMjgsMC45NSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSksIG1pbi13aWR0aCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2lkZWJhci1jb2xsYXBzZWQgLmFkbWluLXNpZGViYXIge1xuICB3aWR0aDogdmFyKC0tc2lkZWJhci13LXNtKTtcbiAgbWluLXdpZHRoOiB2YXIoLS1zaWRlYmFyLXctc20pO1xufVxuXG4vKiBCcmFuZCAqL1xuLnNpZGViYXItYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHggMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyLWxvZ28ge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBtaW4td2lkdGg6IDM2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWluZGlnbyksIHZhcigtLXNreSkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggdmFyKC0taW5kaWdvLWdsb3cpO1xufVxuLnNpZGViYXItYnJhbmQtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2lkZWJhci1icmFuZC10ZXh0IHN0cm9uZyB7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4uc2lkZWJhci1jb2xsYXBzZWQgLnNpZGViYXItYnJhbmQtdGV4dCB7IGRpc3BsYXk6IG5vbmU7IH1cblxuLyogTmF2ICovXG4uc2lkZWJhci1uYXYgeyBmbGV4OiAxOyBwYWRkaW5nOiAxNnB4IDEwcHg7IG92ZXJmbG93LXk6IGF1dG87IG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuLm5hdi1zZWN0aW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHBhZGRpbmc6IDEwcHggMTBweCA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cbi5zaWRlYmFyLWNvbGxhcHNlZCAubmF2LXNlY3Rpb24tbGFiZWwgeyBvcGFjaXR5OiAwOyBoZWlnaHQ6IDA7IHBhZGRpbmc6IDA7IH1cblxuLm5hdi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4ubmF2LWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wOCk7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyB9XG4ubmF2LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xuICBjb2xvcjogdmFyKC0taW5kaWdvKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDAgMCB2YXIoLS1pbmRpZ28pO1xufVxuLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWljb24geyBjb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLm5hdi1pY29uIHsgZm9udC1zaXplOiAxNnB4OyBtaW4td2lkdGg6IDE2cHg7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzOyB9XG4ubmF2LWl0ZW06aG92ZXIgLm5hdi1pY29uIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4ubmF2LWxhYmVsIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuLnNpZGViYXItY29sbGFwc2VkIC5uYXYtbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9XG4ubmF2LXBpbGwge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0tcm9zZSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG59XG4ubmF2LWNvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNpZGViYXItY29sbGFwc2VkIC5uYXYtcGlsbCxcbi5zaWRlYmFyLWNvbGxhcHNlZCAubmF2LWNvdW50IHsgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBTaWRlYmFyIGZvb3RlciAqL1xuLnNpZGViYXItZm9vdGVyIHtcbiAgcGFkZGluZzogMTJweCAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLnNpZGViYXItYWRtaW4tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuLmFkbWluLWF2YXRhci1zbSB7XG4gIHdpZHRoOiAzNHB4OyBoZWlnaHQ6IDM0cHg7IG1pbi13aWR0aDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7XG59XG4uYWRtaW4taW5mbyB7IG1pbi13aWR0aDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuLmFkbWluLW5hbWUgeyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuLmFkbWluLXJvbGUtYmFkZ2UgeyBjb2xvcjogdmFyKC0taW5kaWdvKTsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNTAwOyB9XG4uc2lkZWJhci1jb2xsYXBzZWQgLmFkbWluLWluZm8geyBkaXNwbGF5OiBub25lOyB9XG5cbi5idG4tY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDZweCA4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgbWluLXdpZHRoOiAzMnB4O1xufVxuLmJ0bi1jb2xsYXBzZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjEpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG5cbi8qIE92ZXJsYXkgKG1vYmlsZSkgKi9cbi5zaWRlYmFyLW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gIHotaW5kZXg6IDk5O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG59XG4uc2lkZWJhci1vdmVybGF5LnZpc2libGUgeyBvcGFjaXR5OiAxOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBNQUlOIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLmFkbWluLW1haW4ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBUT1BCQVIgw6LClMKAw6LClMKAw6LClMKAICovXG4uYWRtaW4tdG9wYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS10b3BiYXItaCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoOCwxMywyOCwwLjkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGdhcDogMTZweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5saWdodC1tb2RlIC5hZG1pbi10b3BiYXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwyNTAsMjUyLDAuOSk7IH1cblxuLnRvcGJhci1sZWZ0IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5tb2JpbGUtbWVudS1idG4ge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDZweCAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4ubW9iaWxlLW1lbnUtYnRuOmhvdmVyIHsgY29sb3I6IHZhcigtLWluZGlnbyk7IGJvcmRlci1jb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuXG4udG9wYmFyLXNlYXJjaC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi50b3BiYXItc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDEycHg7IHRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxNHB4OyBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50b3BiYXItc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogOHB4IDQwcHggOHB4IDM2cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi50b3BiYXItc2VhcmNoOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmRpZ28pOyBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0taW5kaWdvLWdsb3cpOyB9XG4udG9wYmFyLXNlYXJjaDo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbi5zZWFyY2gta2JkIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTBweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMSk7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogMXB4IDZweDsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi50b3BiYXItcmlnaHQgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgfVxuXG4uc3lzdGVtLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7XG59XG4uc3RhdHVzLWRvdCB7XG4gIHdpZHRoOiA3cHg7IGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYmxpbmsgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG4uc3RhdHVzLWRvdC5vbmxpbmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkKTsgYm94LXNoYWRvdzogMCAwIDZweCB2YXIoLS1lbWVyYWxkKTsgfVxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfSA1MCUgeyBvcGFjaXR5OiAwLjQ7IH1cbn1cbi5zdGF0dXMtdGV4dCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLyogSWNvbiBidXR0b25zICovXG4uaWNvbi1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5pY29uLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjEpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4ubm90aWYtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTRweDsgcmlnaHQ6IC00cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJvc2UpO1xuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiA5cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDFweCA0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnKTtcbn1cblxuLyogTm90aWZpY2F0aW9ucyBkcm9wZG93biAqL1xuLm5vdGlmLWJlbGwtd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLm5vdGlmLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IGNhbGMoMTAwJSArIDEwcHgpOyByaWdodDogMDtcbiAgd2lkdGg6IDMyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgsMTMsMjgsMC45Nyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMC45Nyk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKTtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwwLDAsMC40KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RpZi1kcm9wZG93bi5vcGVuIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBub25lOyBwb2ludGVyLWV2ZW50czogYWxsOyB9XG4ubm90aWYtaGVhZGVyIHtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBmb250LXdlaWdodDogNjAwOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4O1xufVxuLm5vdGlmLWNvdW50IHsgY29sb3I6IHZhcigtLWluZGlnbyk7IGZvbnQtc2l6ZTogMTFweDsgfVxuLm5vdGlmLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7XG59XG4ubm90aWYtaXRlbTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA2KTsgfVxuLm5vdGlmLWl0ZW0udW5yZWFkIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDQpOyB9XG4ubm90aWYtaWNvbi13cmFwIHtcbiAgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDsgbWluLXdpZHRoOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubm90aWYtY29sb3Itc3VjY2VzcyB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjE1KTsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4ubm90aWYtY29sb3Itd2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjE1KTsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxuLm5vdGlmLWNvbG9yLWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xNSk7IGNvbG9yOiB2YXIoLS1za3kpOyB9XG4ubm90aWYtYm9keSB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLm5vdGlmLXRleHQgeyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyB9XG4ubm90aWYtdGltZSB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxMXB4OyBtYXJnaW4tdG9wOiAycHg7IH1cblxuLyogUHJvZmlsZSBtZW51ICovXG4ucHJvZmlsZS1tZW51LXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5hZG1pbi1hdmF0YXItYnRuIHtcbiAgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSg5OSwxMDIsMjQxLDAuMyk7XG59XG4uYWRtaW4tYXZhdGFyLWJ0bjpob3ZlciB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbi5wcm9maWxlLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IGNhbGMoMTAwJSArIDEwcHgpOyByaWdodDogMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgsMTMsMjgsMC45Nyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHNjYWxlKDAuOTcpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHotaW5kZXg6IDIwMDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3gtc2hhZG93OiAwIDE2cHggMzJweCByZ2JhKDAsMCwwLDAuNCk7XG59XG4ucHJvZmlsZS1kcm9wZG93bi5vcGVuIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBub25lOyBwb2ludGVyLWV2ZW50czogYWxsOyB9XG4ucHJvZmlsZS1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDEycHggMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5wcm9maWxlLWhlYWRlciBzdHJvbmcgeyBkaXNwbGF5OiBibG9jazsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgfVxuLnByb2ZpbGUtaGVhZGVyIHNwYW4geyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgfVxuLnByb2ZpbGUtYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XG4gIHdpZHRoOiAxMDAlOyBwYWRkaW5nOiA4cHggMTJweDtcbiAgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogMTNweDsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7IHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucHJvZmlsZS1hY3Rpb246aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wOCk7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyB9XG4ucHJvZmlsZS1hY3Rpb24uZGFuZ2VyOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4wOCk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuXG4vKiDDosKVwpDDosKVwpDDosKVwpAgQ09OVEVOVCBBUkVBIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLmFkbWluLWNvbnRlbnQge1xuICBmbGV4OiAxOyBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAyOHB4O1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDA7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4zKSB0cmFuc3BhcmVudDtcbn1cbi5hZG1pbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA2cHg7IH1cbi5hZG1pbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjMpOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cblxuLyogUGFnZSBzZWN0aW9ucyAqL1xuLnBhZ2Utc2VjdGlvbiB7IGRpc3BsYXk6IG5vbmU7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjRweDsgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjRzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpOyB9XG4ucGFnZS1zZWN0aW9uLmFjdGl2ZSB7IGRpc3BsYXk6IGZsZXg7IH1cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucGFnZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IG1hcmdpbjogMCAwIDRweDtcbn1cbi5wYWdlLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiAxNHB4OyBtYXJnaW46IDA7IH1cblxuLyogQnV0dG9ucyAqL1xuLmJ0bi1wcmltYXJ5LWFjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW5kaWdvKSwgdmFyKC0tc2t5KSk7XG4gIGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggdmFyKC0taW5kaWdvLWdsb3cpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJ0bi1wcmltYXJ5LWFjdGlvbjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDk5LDEwMiwyNDEsMC40KTsgfVxuXG4uYnRuLXNlY29uZGFyeS1hY3Rpb24ge1xuICBwYWRkaW5nOiA5cHggMThweDtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHZhcigtLWluZGlnbyk7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYnRuLXNlY29uZGFyeS1hY3Rpb246aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xOCk7IH1cblxuLmJ0bi10ZXh0IHtcbiAgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0taW5kaWdvKTsgZm9udC1zaXplOiAxM3B4OyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4O1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cbi5idG4tdGV4dDpob3ZlciB7IGNvbG9yOiAjODE4Y2Y4OyB9XG5cbi8qIEdsYXNzIGNhcmQgKi9cbi5nbGFzcy1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsMCwwLDAuMik7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcbn1cbi5nbGFzcy1jYXJkOmhvdmVyIHsgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsMCwwLDAuMyk7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIFNUQVRTIEdSSUQgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4uc3RhdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3RhdC1jYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5zdGF0LWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7IGJveC1zaGFkb3c6IDAgMTJweCAzMnB4IHJnYmEoMCwwLDAsMC4zKTsgfVxuXG4uc3RhdC10b3AgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDE0cHg7IH1cbi5zdGF0LWljb24td3JhcCB7XG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc3RhdC1pY29uLXdyYXAuaW5kaWdvIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLnN0YXQtaWNvbi13cmFwLmVtZXJhbGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xNSk7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuLnN0YXQtaWNvbi13cmFwLmFtYmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG4uc3RhdC1pY29uLXdyYXAuc2t5IHsgYmFja2dyb3VuZDogcmdiYSgxNCwxNjUsMjMzLDAuMTUpOyBjb2xvcjogdmFyKC0tc2t5KTsgfVxuLnN0YXQtaWNvbi13cmFwLnJvc2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjE1KTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG4uc3RhdC1pY29uLXdyYXAudmlvbGV0IHsgYmFja2dyb3VuZDogcmdiYSgxMzksOTIsMjQ2LDAuMTUpOyBjb2xvcjogdmFyKC0tdmlvbGV0KTsgfVxuXG4uc3RhdC10cmVuZCB7XG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogM3B4IDdweDsgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweDtcbn1cbi5zdGF0LXRyZW5kLnVwIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTIpOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5zdGF0LXRyZW5kLmRvd24geyBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjEyKTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG4uc3RhdC10cmVuZC5uZXV0cmFsIHsgYmFja2dyb3VuZDogcmdiYSgxMDAsMTE2LDEzOSwwLjEyKTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG5cbi5zdGF0LXZhbHVlIHsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgbGluZS1oZWlnaHQ6IDE7IG1hcmdpbi1ib3R0b206IDRweDsgfVxuLnN0YXQtbGFiZWwgeyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBmb250LXNpemU6IDEzcHg7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cblxuLnN0YXQtYmFyIHsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7IGJvcmRlci1yYWRpdXM6IDJweDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuLnN0YXQtYmFyLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSk7XG59XG4uc3RhdC1iYXItZmlsbC5lbWVyYWxkIHsgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZCk7IH1cbi5zdGF0LWJhci1maWxsLmFtYmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpOyB9XG4uc3RhdC1iYXItZmlsbC5za3kgeyBiYWNrZ3JvdW5kOiB2YXIoLS1za3kpOyB9XG4uc3RhdC1iYXItZmlsbC5yb3NlIHsgYmFja2dyb3VuZDogdmFyKC0tcm9zZSk7IH1cbi5zdGF0LWJhci1maWxsLnZpb2xldCB7IGJhY2tncm91bmQ6IHZhcigtLXZpb2xldCk7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIE9WRVJWSUVXIEJPVFRPTSDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5vdmVydmlldy1ib3R0b20ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2FyZC1zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jYXJkLXNlY3Rpb24taGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAxNXB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgbWFyZ2luOiAwO1xufVxuXG4vKiBBY3Rpdml0eSBjYXJkICovXG4uYWN0aXZpdHktY2FyZCB7IHBhZGRpbmc6IDIwcHg7IH1cbi5hY3Rpdml0eS1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAycHg7IH1cbi5hY3Rpdml0eS1yb3cge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggOHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuLmFjdGl2aXR5LXJvdzpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA1KTsgfVxuLmFjdGl2aXR5LWF2YXRhciB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IG1pbi13aWR0aDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7XG59XG4uYWN0aXZpdHktaW5mbyB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLmFjdGl2aXR5LW5hbWUgeyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyB9XG4uYWN0aXZpdHktZGV0YWlsIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBtYXJnaW4tdG9wOiAycHg7IH1cbi5hY3Rpdml0eS1zdGF0dXMge1xuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDNweCA4cHg7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5hY3Rpdml0eS1zdGF0dXMuYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTIpOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5hY3Rpdml0eS1zdGF0dXMuaW5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjEyKTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG4uYWN0aXZpdHktZW1wdHkgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjRweDsgZm9udC1zaXplOiAxM3B4OyB9XG5cbi8qIFF1aWNrIGFjdGlvbnMgKi9cbi5xdWljay1hY3Rpb25zLWNhcmQgeyBwYWRkaW5nOiAyMHB4OyB9XG4ucXVpY2stYWN0aW9ucy1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDEwcHg7IH1cbi5xdWljay1idG4ge1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgcGFkZGluZzogMTRweCA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC40KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi5xdWljay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wOCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMjUpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLnF1aWNrLWljb24ge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnF1aWNrLWljb24uaW5kaWdvIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLnF1aWNrLWljb24uYW1iZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiB2YXIoLS1hbWJlcik7IH1cbi5xdWljay1pY29uLnNreSB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6IHZhcigtLXNreSk7IH1cbi5xdWljay1pY29uLnZpb2xldCB7IGJhY2tncm91bmQ6IHJnYmEoMTM5LDkyLDI0NiwwLjE1KTsgY29sb3I6IHZhcigtLXZpb2xldCk7IH1cbi5xdWljay1pY29uLmVtZXJhbGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xNSk7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuLnF1aWNrLWljb24ucm9zZSB7IGJhY2tncm91bmQ6IHJnYmEoMjQ0LDYzLDk0LDAuMTUpOyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIFJPTEUgQ0hJUFMgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4ucm9sZS1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCA5cHg7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnJvbGUtYWRtaW4geyBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjEyKTsgY29sb3I6IHZhcigtLXJvc2UpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NCw2Myw5NCwwLjIpOyB9XG4ucm9sZS1tYW5hZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTIpOyBjb2xvcjogdmFyKC0tYW1iZXIpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsMC4yKTsgfVxuLnJvbGUtZW1wbG95ZWUgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xMik7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTsgfVxuXG4vKiBDb2xvciB1dGlsaXRpZXMgKi9cbi50ZXh0LWluZGlnbyB7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4udGV4dC1lbWVyYWxkIHsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4udGV4dC1hbWJlciB7IGNvbG9yOiB2YXIoLS1hbWJlcik7IH1cbi50ZXh0LXNreSB7IGNvbG9yOiB2YXIoLS1za3kpOyB9XG4udGV4dC1yb3NlIHsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBGSUxURVJTIEJBUiDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5maWx0ZXJzLWJhciB7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsdGVyLXNlYXJjaC13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyBmbGV4OiAxOyBtaW4td2lkdGg6IDIwMHB4OyB9XG4uZmlsdGVyLXNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxMnB4OyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTRweDtcbn1cbi5maWx0ZXItc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4OyBwYWRkaW5nOiA4cHggMTJweCA4cHggMzZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLmZpbHRlci1zZWFyY2g6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5maWx0ZXItc2VhcmNoOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuLmZpbHRlci1jaGlwcyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cbi5maWx0ZXItc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCw0MSw1OSwwLjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA5cHg7IHBhZGRpbmc6IDdweCAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuXG4vKiDDosKVwpDDosKVwpDDosKVwpAgVEFCTEUgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4udGFibGUtY2FyZCB7IHBhZGRpbmc6IDA7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5kYXRhLXRhYmxlIHsgd2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cbi5kYXRhLXRhYmxlIHRoZWFkIHRyIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH1cbi5kYXRhLXRhYmxlIHRoIHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50aC1hY3Rpb25zIHsgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbi50YWJsZS1yb3cgeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1czsgfVxuLnRhYmxlLXJvdzpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA0KTsgfVxuLmRhdGEtdGFibGUgdGQgeyBwYWRkaW5nOiAxMnB4IDE2cHg7IH1cblxuLnVzZXItY2VsbCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgfVxuLnVzZXItYXZhdGFyIHtcbiAgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDsgbWluLXdpZHRoOiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2ZmZjtcbn1cbi51c2VyLWZ1bGxuYW1lIHsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLnVzZXItdGVsIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IG1hcmdpbi10b3A6IDJweDsgfVxuLnRkLWVtYWlsIHsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiAxM3B4OyB9XG4udGQtZGF0ZSB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxMnB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4udGQtYWN0aW9ucyB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi5yb3ctYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGdhcDogNnB4OyB9XG4ucm93LWJ0biB7XG4gIHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC40KTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuLnJvdy1idG4uZWRpdDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6IHZhcigtLWluZGlnbyk7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMyk7IH1cbi5yb3ctYnRuLmtleTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjE1KTsgY29sb3I6IHZhcigtLWFtYmVyKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwxNTgsMTEsMC4zKTsgfVxuLnJvdy1idG4uZGVsZXRlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xNSk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NCw2Myw5NCwwLjMpOyB9XG5cbi50YWJsZS1lbXB0eSB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNDBweDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDE0cHg7IH1cblxuLyogU3RhdHVzIHRvZ2dsZSAqL1xuLnN0YXR1cy10b2dnbGUtd3JhcCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XG4uc3RhdHVzLXRvZ2dsZSB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAwLDExNiwxMzksMC4zKTtcbiAgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICBwYWRkaW5nOiAwO1xufVxuLnN0YXR1cy10b2dnbGUub24geyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkKTsgfVxuLnN0YXR1cy10b2dnbGUtdGh1bWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMnB4OyBsZWZ0OiAycHg7XG4gIHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN0YXR1cy10b2dnbGUub24gLnN0YXR1cy10b2dnbGUtdGh1bWIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7IH1cbi5zdGF0dXMtbGFiZWwgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuXG4vKiBQYWdpbmF0aW9uICovXG4ucGFnaW5hdGlvbi1iYXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuLnBhZ2UtYnRuIHtcbiAgbWluLXdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC40KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEzcHg7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1czsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG59XG4ucGFnZS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xKTsgY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5wYWdlLWJ0bi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1pbmRpZ28pOyBjb2xvcjogI2ZmZjsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4ucGFnZS1idG46ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjM7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIFJPTEVTICYgUEVSTUlTU0lPTlMgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4ucm9sZS10YWJzIHtcbiAgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IGZsZXgtd3JhcDogd3JhcDtcbn1cbi5yb2xlLXRhYiB7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG59XG4ucm9sZS10YWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wOCk7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyB9XG4ucm9sZS10YWIuYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4zKTsgfVxuXG4ucGVybWlzc2lvbnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xufVxuLnBlcm0tY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5wZXJtLWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbi5wZXJtLWluZm8geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLnBlcm0taWNvbi13cmFwIHsgZm9udC1zaXplOiAxOHB4OyBtaW4td2lkdGg6IDIwcHg7IH1cbi5wZXJtLW5hbWUgeyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwOyB9XG4ucGVybS1yb2xlLW5vdGUgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgfVxuXG4vKiBUb2dnbGUgc3dpdGNoICovXG4udG9nZ2xlLXN3aXRjaCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogaW5saW5lLWZsZXg7IGN1cnNvcjogcG9pbnRlcjsgfVxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQgeyBkaXNwbGF5OiBub25lOyB9XG4udG9nZ2xlLXRyYWNrIHtcbiAgd2lkdGg6IDQ0cHg7IGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsMTE2LDEzOSwwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4OyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50b2dnbGUtc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAudG9nZ2xlLXRyYWNrIHsgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvKTsgfVxuLnRvZ2dsZS10aHVtYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAzcHg7IGxlZnQ6IDNweDtcbiAgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcbn1cbi50b2dnbGUtc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAudG9nZ2xlLXRyYWNrIC50b2dnbGUtdGh1bWIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH1cbi50b2dnbGUtc3dpdGNoLmRpc2FibGVkIHsgb3BhY2l0eTogMC40OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4vKiBSb2xlIHN1bW1hcnkgKi9cbi5yb2xlLXN1bW1hcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuLnJvbGUtc3VtbWFyeS1jYXJkIHsgcGFkZGluZzogMjBweDsgfVxuLnJvbGUtc3VtbWFyeS1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE0cHg7IG1hcmdpbi1ib3R0b206IDE0cHg7IH1cbi5yb2xlLXN1bW1hcnktaWNvbiB7XG4gIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucm9sZS1pY29uLWFkbWluIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xNSk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuLnJvbGUtaWNvbi1tYW5hZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG4ucm9sZS1pY29uLWVtcGxveWVlIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLnJvbGUtc3VtbWFyeS10aXRsZSB7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cbi5yb2xlLXN1bW1hcnktY291bnQgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTJweDsgbWFyZ2luLXRvcDogMnB4OyB9XG4ucm9sZS1wZXJtLWNvdW50IHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyBmb250LXNpemU6IDEycHg7IH1cbi5wZXJtLWFjdGl2ZSB7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuLnBlcm0tYmxvY2tlZCB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuLnJvbGUtcHJvZ3Jlc3MtYmFyIHsgaGVpZ2h0OiA0cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7IGJvcmRlci1yYWRpdXM6IDJweDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuLnJvbGUtcHJvZ3Jlc3MtZmlsbCB7XG4gIGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKTtcbn1cbi5maWxsLWFkbWluIHsgYmFja2dyb3VuZDogdmFyKC0tcm9zZSk7IH1cbi5maWxsLW1hbmFnZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlcik7IH1cbi5maWxsLWVtcGxveWVlIHsgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvKTsgfVxuXG4vKiDDosKVwpDDosKVwpDDosKVwpAgQU5BTFlUSUNTIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLmtwaS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gIGdhcDogMTRweDtcbn1cbi5rcGktY2FyZCB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiA2cHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmtwaS1jYXJkOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyB9XG4ua3BpLWljb24ge1xuICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4OyBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ua3BpLWljb24uaW5kaWdvIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLmtwaS1pY29uLmVtZXJhbGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xNSk7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuLmtwaS1pY29uLnJvc2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjE1KTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG4ua3BpLWljb24uc2t5IHsgYmFja2dyb3VuZDogcmdiYSgxNCwxNjUsMjMzLDAuMTUpOyBjb2xvcjogdmFyKC0tc2t5KTsgfVxuLmtwaS12YWx1ZSB7IGZvbnQtc2l6ZTogMjhweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGxpbmUtaGVpZ2h0OiAxOyB9XG4ua3BpLWxhYmVsIHsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5jaGFydHMtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG4uY2hhcnQtY2FyZCB7IHBhZGRpbmc6IDIwcHg7IH1cbi5jaGFydC10aXRsZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IG1hcmdpbi1ib3R0b206IDIwcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLyogRG9udXQgY2hhcnQgKi9cbi5kb251dC1jaGFydC13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuLmRvbnV0LXN2ZyB7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiAxMjBweDsgfVxuLmRvbnV0LWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kb251dC10b3RhbCB7IGZvbnQtc2l6ZTogMjJweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IH1cbi5kb251dC1sYWJlbCB7IGZvbnQtc2l6ZTogMTBweDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4uY2hhcnQtbGVnZW5kIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA4cHg7IH1cbi5sZWdlbmQtaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IH1cbi5sZWdlbmQtaXRlbSBzdHJvbmcgeyBtYXJnaW4tbGVmdDogYXV0bzsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IH1cbi5sZWdlbmQtZG90IHsgd2lkdGg6IDEwcHg7IGhlaWdodDogMTBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBtaW4td2lkdGg6IDEwcHg7IH1cbi5kb3QtYWRtaW4geyBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlKTsgfVxuLmRvdC1tYW5hZ2VyIHsgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpOyB9XG4uZG90LWVtcGxveWVlIHsgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvKTsgfVxuXG4vKiBCYXIgY2hhcnQgKi9cbi5iYXItY2hhcnQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgZ2FwOiA2cHg7XG4gIGhlaWdodDogMTAwcHg7IHBhZGRpbmctYm90dG9tOiAyMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFyLWdyb3VwIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleDogMTsgaGVpZ2h0OiAxMDAlOyB9XG4uYmFyLWNvbCB7IGZsZXg6IDE7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgd2lkdGg6IDEwMCU7IH1cbi5iYXItZmlsbCB7XG4gIHdpZHRoOiAxMDAlOyBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgbWluLWhlaWdodDogNHB4OyB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJhci1maWxsLmluZGlnbyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLWluZGlnbyksIHJnYmEoOTksMTAyLDI0MSwwLjUpKTsgfVxuLmJhci12YWx1ZSB7IGZvbnQtc2l6ZTogOXB4OyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi10b3A6IDJweDsgfVxuLmJhci1sYWJlbCB7IGZvbnQtc2l6ZTogOXB4OyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi10b3A6IDRweDsgfVxuLmJhci1lbXB0eSB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxM3B4OyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgcGFkZGluZzogMjBweCAwOyB9XG5cbi8qIFN0YXR1cyBjaGFydCAqL1xuLnN0YXR1cy1jaGFydCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMjBweDsgfVxuLnN0YXR1cy1yaW5nLXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5yaW5nLXNlZ21lbnQge1xuICB3aWR0aDogOTBweDsgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KHZhcigtLWVtZXJhbGQpIGNhbGModmFyKC0tcGN0KSAqIDM2MGRlZyksIHJnYmEoMjU1LDI1NSwyNTUsMC4wNykgMGRlZyk7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN0YXR1cy1zdGF0cyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgZmxleDogMTsgfVxuLnN0YXR1cy1zdGF0IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IH1cbi5zcy1kb3QgeyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG1pbi13aWR0aDogMTBweDsgfVxuLnNzLWRvdC5hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkKTsgfVxuLnNzLWRvdC5pbmFjdGl2ZSB7IGJhY2tncm91bmQ6IHZhcigtLXJvc2UpOyB9XG4uc3MtZG90LmFkbWluIHsgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvKTsgfVxuLnNzLWluZm8ge31cbi5zcy12YWx1ZSB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGxpbmUtaGVpZ2h0OiAxOyB9XG4uc3MtbGFiZWwgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuXG4vKiBTeXN0ZW0gaGVhbHRoICovXG4uc3lzdGVtLWhlYWx0aC1jYXJkIHsgcGFkZGluZzogMjBweDsgfVxuLmhlYWx0aC1iYWRnZSB7XG4gIHBhZGRpbmc6IDVweCAxMnB4OyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhbHRoLWJhZGdlLm9ubGluZSB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEyKTsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4uaGVhbHRoLW1vZHVsZXMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNDBweCwgMWZyKSk7IGdhcDogMTBweDsgbWFyZ2luLXRvcDogNHB4OyB9XG4uaGVhbHRoLW1vZHVsZSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaG0taWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgfVxuLmhtLWljb24ub2sgeyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5obS1uYW1lIHsgZmxleDogMTsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuLmhtLWxhdGVuY3kgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgfVxuLmhtLXN0YXR1cyB7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLmhtLXN0YXR1cy5vbmxpbmUgeyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIEFDVElWSVRZIEZVTEwgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4uYWN0aXZpdHktZnVsbC1jYXJkIHsgcGFkZGluZzogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuLmFjdGl2aXR5LWZ1bGwtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5hY3Rpdml0eS1mdWxsLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcbiAgcGFkZGluZzogMTJweCAyMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjNzIGJvdGg7XG59XG4uYWN0aXZpdHktZnVsbC1yb3c6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wNCk7IH1cbi5hZmwtaW5kZXggeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTJweDsgbWluLXdpZHRoOiAyOHB4OyB9XG4uYWZsLWF2YXRhciB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IG1pbi13aWR0aDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7XG59XG4uYWZsLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5hZmwtbmFtZSB7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5hZmwtZW1haWwgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbi5hZmwtdGltZSB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxMnB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uYWZsLXN0YXR1cyB7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbi5hZmwtc3RhdHVzLmFjdGl2ZSB7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuLmFmbC1zdGF0dXMuaW5hY3RpdmUgeyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIFNFVFRJTkdTIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLnNldHRpbmdzLXNhdmVkLWJhbm5lciB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHZhcigtLWVtZXJhbGQpO1xuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xuICBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zZXR0aW5ncy1zYXZlZC1iYW5uZXIudmlzaWJsZSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogbm9uZTsgfVxuLnNldHRpbmdzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcbn1cbi5zZXR0aW5ncy1zZWN0aW9uIHsgcGFkZGluZzogMjJweDsgfVxuLnNldHRpbmdzLXNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMTRweDsgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zZXR0aW5ncy1zZWN0aW9uLWljb24ge1xuICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4OyBtaW4td2lkdGg6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc2V0dGluZ3Mtc2VjdGlvbi1pY29uLmluZGlnbyB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5zZXR0aW5ncy1zZWN0aW9uLWljb24ucm9zZSB7IGJhY2tncm91bmQ6IHJnYmEoMjQ0LDYzLDk0LDAuMTUpOyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cbi5zZXR0aW5ncy1zZWN0aW9uLWljb24uYW1iZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiB2YXIoLS1hbWJlcik7IH1cbi5zZXR0aW5ncy1zZWN0aW9uLWljb24udmlvbGV0IHsgYmFja2dyb3VuZDogcmdiYSgxMzksOTIsMjQ2LDAuMTUpOyBjb2xvcjogdmFyKC0tdmlvbGV0KTsgfVxuLnNldHRpbmdzLXNlY3Rpb24taGVhZGVyIGgzIHsgZm9udC1zaXplOiAxNXB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgbWFyZ2luOiAwIDAgNHB4OyB9XG4uc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXIgcCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW46IDA7IH1cbi5zZXR0aW5ncy1maWVsZHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE0cHg7IH1cbi5zZXR0aW5ncy1maWVsZCBsYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuLnNldHRpbmdzLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4OyBwYWRkaW5nOiA4cHggMTJweDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLnNldHRpbmdzLWlucHV0OmZvY3VzIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4uc2V0dGluZ3MtdG9nZ2xlLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEycHg7XG59XG4uc2V0dGluZ3MtdG9nZ2xlLWluZm8geyBmbGV4OiAxOyB9XG4udG9nZ2xlLXRpdGxlIHsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbi50b2dnbGUtZGVzYyB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgbWFyZ2luLXRvcDogMnB4OyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBNT0RBTFMgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDUwMDtcbiAgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1vZGFsLW92ZXJsYXkub3BlbiB7IG9wYWNpdHk6IDE7IHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cblxuLm1vZGFsLWJveCB7XG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDUyMHB4O1xuICBib3gtc2hhZG93OiAwIDI0cHggNjBweCByZ2JhKDAsMCwwLDAuNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NikgdHJhbnNsYXRlWSgxNnB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vZGFsLWJveC5tb2RhbC1zbSB7IG1heC13aWR0aDogNDAwcHg7IH1cbi5tb2RhbC1vdmVybGF5Lm9wZW4gLm1vZGFsLWJveCB7IHRyYW5zZm9ybTogbm9uZTsgfVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMThweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuLm1vZGFsLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IG1hcmdpbjogMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuLm1vZGFsLWhlYWRlci5kYW5nZXIgaDMgeyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cbi5tb2RhbC1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDsgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuLm1vZGFsLWNsb3NlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xKTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG5cbi5tb2RhbC1ib2R5IHsgcGFkZGluZzogMjBweDsgfVxuLm1vZGFsLWZpZWxkcyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTRweDsgfVxuLm1vZGFsLWZpZWxkLXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAxMnB4OyB9XG4ubW9kYWwtZmllbGQgbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbi5tb2RhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDlweDsgcGFkZGluZzogOXB4IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi5tb2RhbC1pbnB1dDpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0taW5kaWdvKTsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWluZGlnby1nbG93KTsgfVxuXG4uZGVsZXRlLWNvbmZpcm0tdGV4dCB7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuNjsgfVxuLmRlbGV0ZS1jb25maXJtLXRleHQgc3Ryb25nIHsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IH1cblxuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgZ2FwOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cbi5idG4tbW9kYWwtY2FuY2VsIHtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4OyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzOyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi5idG4tbW9kYWwtY2FuY2VsOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgzMCw0MSw1OSwwLjgpOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgfVxuLmJ0bi1tb2RhbC1zYXZlIHtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWluZGlnbyksIHZhcigtLXNreSkpO1xuICBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDlweDtcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLmJ0bi1tb2RhbC1zYXZlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHZhcigtLWluZGlnby1nbG93KTsgfVxuLmJ0bi1tb2RhbC1zYXZlOmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4uYnRuLW1vZGFsLWRlbGV0ZSB7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1yb3NlKSwgI2RjMjYyNik7XG4gIGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogOXB4O1xuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG59XG4uYnRuLW1vZGFsLWRlbGV0ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDI0NCw2Myw5NCwwLjM1KTsgfVxuLmJ0bi1tb2RhbC1kZWxldGU6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuLmFsZXJ0LWVycm9yIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDQsNjMsOTQsMC4yNSk7XG4gIGNvbG9yOiAjZmI3MTg1OyBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDsgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnNwaW4taWNvbiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuQGtleWZyYW1lcyBzcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIFJFU1BPTlNJVkUgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5vdmVydmlldy1ib3R0b20geyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAuY2hhcnRzLXJvdyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWRtaW4tc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkOyBsZWZ0OiAtMTAwJTsgdG9wOiAwOyBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAyNjBweCAhaW1wb3J0YW50OyBtaW4td2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgfVxuICAuYWRtaW4tc2lkZWJhci5vcGVuIHsgbGVmdDogMDsgfVxuICAuc2lkZWJhci1vdmVybGF5IHsgZGlzcGxheTogYmxvY2s7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5zaWRlYmFyLW92ZXJsYXkudmlzaWJsZSB7IHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cbiAgLm1vYmlsZS1tZW51LWJ0biB7IGRpc3BsYXk6IGZsZXg7IH1cbiAgLnRvcGJhci1zZWFyY2gtd3JhcCB7IG1heC13aWR0aDogMjAwcHg7IH1cbiAgLnN5c3RlbS1zdGF0dXMgLnN0YXR1cy10ZXh0IHsgZGlzcGxheTogbm9uZTsgfVxuICAuYWRtaW4tY29udGVudCB7IHBhZGRpbmc6IDE2cHg7IH1cbiAgLnN0YXRzLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyB9XG4gIC5tb2RhbC1maWVsZC1yb3cgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAuc2VhcmNoLWtiZCB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zdGF0cy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLmFkbWluLWNvbnRlbnQgeyBwYWRkaW5nOiAxMnB4OyB9XG4gIC5wYWdlLWhlYWRlciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gIC5maWx0ZXJzLWJhciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmtwaS1yb3cgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3661:
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../guards/admin-auth.guard */ 6406);
/* harmony import */ var _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-auth/admin-auth.component */ 3627);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 6597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__.AdminAuthComponent
}, {
  path: 'dashboard',
  component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent,
  canActivate: [_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AdminAuthGuard]
}];
class AdminRoutingModule {
  static {
    this.ɵfac = function AdminRoutingModule_Factory(t) {
      return new (t || AdminRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6836:
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3661);
/* harmony import */ var _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-auth/admin-auth.component */ 3627);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 6597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);








class AdminModule {
  static {
    this.ɵfac = function AdminModule_Factory(t) {
      return new (t || AdminModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__.AdminAuthComponent, _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 6406:
/*!********************************************!*\
  !*** ./src/app/guards/admin-auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAuthGuard: () => (/* binding */ AdminAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin-auth.service */ 4858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AdminAuthGuard {
  constructor(adminAuth, router) {
    this.adminAuth = adminAuth;
    this.router = router;
  }
  canActivate() {
    if (this.adminAuth.isLoggedIn) return true;
    this.router.navigate(['/admin-login']);
    return false;
  }
  static {
    this.ɵfac = function AdminAuthGuard_Factory(t) {
      return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__.AdminAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminAuthGuard,
      factory: AdminAuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4858:
/*!************************************************!*\
  !*** ./src/app/services/admin-auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAuthService: () => (/* binding */ AdminAuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class AdminAuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.currentAdminSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.currentAdmin$ = this.currentAdminSubject.asObservable();
    this.loadFromStorage();
  }
  loadFromStorage() {
    try {
      const stored = localStorage.getItem('adminUser');
      if (stored) this.currentAdminSubject.next(JSON.parse(stored));
    } catch (_) {}
  }
  get token() {
    return localStorage.getItem('adminToken');
  }
  get isLoggedIn() {
    return !!this.token && !!this.currentAdminSubject.value;
  }
  get currentAdmin() {
    return this.currentAdminSubject.value;
  }
  headers() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/users/login`, {
      email,
      password
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
      if (res.success && res.data?.role === 'admin') {
        // token is at res.token, not res.data.token
        localStorage.setItem('adminToken', res.token);
        const userWithToken = {
          ...res.data,
          token: res.token
        };
        localStorage.setItem('adminUser', JSON.stringify(userWithToken));
        this.currentAdminSubject.next(userWithToken);
      }
    }));
  }
  logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    this.currentAdminSubject.next(null);
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/admin/stats`, {
      headers: this.headers()
    });
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}/admin/users`, {
      headers: this.headers()
    });
  }
  createUser(data) {
    return this.http.post(`${this.apiUrl}/admin/users`, data, {
      headers: this.headers()
    });
  }
  updateUser(id, data) {
    return this.http.put(`${this.apiUrl}/admin/users/${id}`, data, {
      headers: this.headers()
    });
  }
  toggleUser(id) {
    return this.http.patch(`${this.apiUrl}/admin/users/${id}/toggle`, {}, {
      headers: this.headers()
    });
  }
  resetPassword(id, newPassword) {
    return this.http.patch(`${this.apiUrl}/admin/users/${id}/reset-password`, {
      newPassword
    }, {
      headers: this.headers()
    });
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, {
      headers: this.headers()
    });
  }
  getActivity() {
    return this.http.get(`${this.apiUrl}/admin/activity`, {
      headers: this.headers()
    });
  }
  getRoleStats() {
    return this.http.get(`${this.apiUrl}/admin/role-stats`, {
      headers: this.headers()
    });
  }
  getGrowth() {
    return this.http.get(`${this.apiUrl}/admin/growth`, {
      headers: this.headers()
    });
  }
  static {
    this.ɵfac = function AdminAuthService_Factory(t) {
      return new (t || AdminAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AdminAuthService,
      factory: AdminAuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_admin_module_ts.js.map
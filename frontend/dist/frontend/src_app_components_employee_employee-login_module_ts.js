"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_employee_employee-login_module_ts"],{

/***/ 599:
/*!*****************************************************************!*\
  !*** ./src/app/components/employee/employee-login.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeLoginComponent: () => (/* binding */ EmployeeLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_employee_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/employee-auth.service */ 2447);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function EmployeeLoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function EmployeeLoginComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Acc\u00E9der \u00E0 mon espace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmployeeLoginComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 32);
  }
}
function EmployeeLoginComponent_i_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
  }
}
class EmployeeLoginComponent {
  constructor(router, employeeAuthService) {
    this.router = router;
    this.employeeAuthService = employeeAuthService;
    this.email = '';
    this.password = '';
    this.isLoading = false;
    this.errorMessage = '';
  }
  ngOnInit() {
    // La page de login doit toujours être accessible
    // Pas de redirection automatique pour permettre aux utilisateurs de se reconnecter
  }
  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.employeeAuthService.login(this.email, this.password).subscribe({
      next: employee => {
        this.router.navigate(['/employee']);
        this.isLoading = false;
      },
      error: error => {
        this.errorMessage = error.message || 'Erreur de connexion';
        this.isLoading = false;
      }
    });
  }
  goToManagerLogin() {
    this.router.navigate(['/manager-login']);
  }
  static {
    this.ɵfac = function EmployeeLoginComponent_Factory(t) {
      return new (t || EmployeeLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_employee_auth_service__WEBPACK_IMPORTED_MODULE_0__.EmployeeAuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmployeeLoginComponent,
      selectors: [["app-employee-login"]],
      decls: 42,
      vars: 7,
      consts: [[1, "auth-page", "employee-theme"], [1, "background-blobs"], [1, "blob", "blob-1"], [1, "blob", "blob-2"], [1, "auth-container", "fade-in"], [1, "auth-card", "glass-card"], [1, "auth-header"], [1, "logo-wrap"], [1, "logo-icon"], [1, "bi", "bi-person-badge"], [1, "logo-text"], [1, "auth-title"], [1, "auth-subtitle"], ["class", "auth-alert error", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], [1, "input-group"], [1, "input-field"], [1, "bi", "bi-envelope"], ["type", "email", "name", "email", "placeholder", "nom@entreprise.com", "required", "", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-shield-lock"], ["type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-premium", "btn-secondary", "w-full", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["class", "bi bi-box-arrow-in-right", 4, "ngIf"], [1, "auth-footer"], [3, "click"], [1, "back-link"], ["href", "/"], [1, "bi", "bi-arrow-left"], [1, "auth-alert", "error"], [1, "bi", "bi-exclamation-circle"], [1, "spinner"], [1, "bi", "bi-box-arrow-in-right"]],
      template: function EmployeeLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SIT ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Espace Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Connectez-vous pour acc\u00E9der \u00E0 vos missions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EmployeeLoginComponent_div_16_Template, 4, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeLoginComponent_Template_form_ngSubmit_17_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15)(19, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email professionnel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeLoginComponent_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15)(25, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeLoginComponent_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, EmployeeLoginComponent_span_31_Template, 2, 0, "span", 22)(32, EmployeeLoginComponent_span_32_Template, 1, 0, "span", 23)(33, EmployeeLoginComponent_i_33_Template, 1, 0, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Vous \u00EAtes un manager ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeLoginComponent_Template_button_click_36_listener() {
            return ctx.goToManagerLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Acc\u00E8s Portail");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27)(39, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Retour \u00E0 l'accueil");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["\n\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  padding: 20px;\n  background: var(--bg-darker);\n}\n\n.employee-theme[_ngcontent-%COMP%] {\n  --theme-primary: #0ea5e9;\n  --theme-secondary: #2dd4bf;\n  --theme-glow: rgba(14, 165, 233, 0.4);\n}\n\n.background-blobs[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n\n.blob[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  filter: blur(100px);\n  border-radius: 50%;\n  opacity: 0.2;\n}\n\n.blob-1[_ngcontent-%COMP%] {\n  background: var(--theme-primary);\n  top: -100px;\n  left: -100px;\n  animation: _ngcontent-%COMP%_blobFloat 20s infinite alternate;\n}\n\n.blob-2[_ngcontent-%COMP%] {\n  background: var(--theme-secondary);\n  bottom: -100px;\n  right: -100px;\n  animation: _ngcontent-%COMP%_blobFloat 25s infinite alternate-reverse;\n}\n\n@keyframes _ngcontent-%COMP%_blobFloat {\n  from { transform: translate(0, 0) scale(1); }\n  to { transform: translate(100px, 50px) scale(1.2); }\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 440px;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  padding: 48px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n  color: white;\n  border-radius: var(--radius-lg);\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.logo-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary));\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  box-shadow: 0 8px 20px var(--theme-glow);\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-weight: 800;\n  font-size: 1.75rem;\n  letter-spacing: -1px;\n}\n\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 8px;\n}\n\n.auth-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.95rem;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #94a3b8;\n}\n\n.input-field[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-md);\n  transition: var(--transition-fast);\n  display: flex;\n  align-items: center;\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  color: #64748b;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px 12px 48px;\n  background: transparent;\n  border: none;\n  color: white;\n  outline: none;\n  font-size: 1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #475569;\n}\n\n.input-field[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--theme-primary);\n  background: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 0 0 4px var(--theme-glow);\n}\n\n.w-full[_ngcontent-%COMP%] { width: 100%; justify-content: center; }\n\n.auth-alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  font-size: 0.9rem;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n\n.auth-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--theme-primary);\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 4px;\n}\n\n.auth-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  text-align: center;\n}\n\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: var(--transition-fast);\n}\n\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to { transform: rotate(360deg); }\n}\n\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] { padding: 32px 24px; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQzs7QUFFMUM7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsT0FBTyxtQ0FBbUMsRUFBRTtFQUM1QyxLQUFLLDRDQUE0QyxFQUFFO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUZBQWlGO0VBQ2pGLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLHVDQUF1QztBQUN6Qzs7QUFFQSxVQUFVLFdBQVcsRUFBRSx1QkFBdUIsRUFBRTs7QUFFaEQ7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxLQUFLLHlCQUF5QixFQUFFO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYSxrQkFBa0IsRUFBRTtBQUNuQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLSBFbXBsb3llZSBMb2dpbiBQcmVtaXVtIFN0eWxlcyAtLS0gKi9cblxuLmF1dGgtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrZXIpO1xufVxuXG4uZW1wbG95ZWUtdGhlbWUge1xuICAtLXRoZW1lLXByaW1hcnk6ICMwZWE1ZTk7XG4gIC0tdGhlbWUtc2Vjb25kYXJ5OiAjMmRkNGJmO1xuICAtLXRoZW1lLWdsb3c6IHJnYmEoMTQsIDE2NSwgMjMzLCAwLjQpO1xufVxuXG4uYmFja2dyb3VuZC1ibG9icyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5ibG9iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGZpbHRlcjogYmx1cigxMDBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uYmxvYi0xIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtcHJpbWFyeSk7XG4gIHRvcDogLTEwMHB4O1xuICBsZWZ0OiAtMTAwcHg7XG4gIGFuaW1hdGlvbjogYmxvYkZsb2F0IDIwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5ibG9iLTIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1zZWNvbmRhcnkpO1xuICBib3R0b206IC0xMDBweDtcbiAgcmlnaHQ6IC0xMDBweDtcbiAgYW5pbWF0aW9uOiBibG9iRmxvYXQgMjVzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsb2JGbG9hdCB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4LCA1MHB4KSBzY2FsZSgxLjIpOyB9XG59XG5cbi5hdXRoLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDQwcHg7XG59XG5cbi5hdXRoLWNhcmQge1xuICBwYWRkaW5nOiA0OHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xufVxuXG4uYXV0aC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5sb2dvLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubG9nby1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdGhlbWUtcHJpbWFyeSksIHZhcigtLXRoZW1lLXNlY29uZGFyeSkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggdmFyKC0tdGhlbWUtZ2xvdyk7XG59XG5cbi5sb2dvLXRleHQge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuXG4uYXV0aC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5hdXRoLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cblxuLmF1dGgtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5pbnB1dC1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjOTRhM2I4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0LWZpZWxkIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uaW5wdXQtZmllbGQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggNDhweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzQ3NTU2OTtcbn1cblxuLmlucHV0LWZpZWxkOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCB2YXIoLS10aGVtZS1nbG93KTtcbn1cblxuLnctZnVsbCB7IHdpZHRoOiAxMDAlOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uYXV0aC1hbGVydCB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4yKTtcbiAgY29sb3I6ICNmY2E1YTU7XG59XG5cbi5hdXRoLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uYXV0aC1mb290ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmF1dGgtZm9vdGVyIGJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYmFjay1saW5rIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjay1saW5rIGEge1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcbn1cblxuLmJhY2stbGluayBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3Bpbm5lciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hdXRoLWNhcmQgeyBwYWRkaW5nOiAzMnB4IDI0cHg7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7366:
/*!**************************************************************!*\
  !*** ./src/app/components/employee/employee-login.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeLoginModule: () => (/* binding */ EmployeeLoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _employee_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-login.component */ 599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






class EmployeeLoginModule {
  static {
    this.ɵfac = function EmployeeLoginModule_Factory(t) {
      return new (t || EmployeeLoginModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmployeeLoginModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
        path: '',
        component: _employee_login_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeLoginComponent
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmployeeLoginModule, {
    declarations: [_employee_login_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeLoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 2447:
/*!***************************************************!*\
  !*** ./src/app/services/employee-auth.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeAuthService: () => (/* binding */ EmployeeAuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);






class EmployeeAuthService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    // Ne pas charger automatiquement depuis localStorage pour éviter la redirection
    this.currentEmployeeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.currentEmployee = this.currentEmployeeSubject.asObservable();
  }
  get currentEmployeeValue() {
    return this.currentEmployeeSubject.value;
  }
  get isLoggedIn() {
    return !!this.currentEmployeeValue;
  }
  login(email, password) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/login`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      // Vérifier si l'utilisateur est un employé
      if (response.success && response.data && response.data.role === 'employee') {
        const employee = {
          ...response.data,
          manager_id: 1,
          token: response.token
        };
        // Clear any stale manager session before setting employee session
        localStorage.removeItem('managerToken');
        localStorage.removeItem('currentManager');
        localStorage.setItem('currentEmployee', JSON.stringify(employee));
        localStorage.setItem('employeeToken', response.token);
        this.currentEmployeeSubject.next(employee);
        console.log('Employé authentifié:', employee);
        return employee;
      } else if (response.success && response.data && response.data.role !== 'employee') {
        throw new Error('Accès réservé aux employés. Votre rôle est: ' + response.data.role);
      } else {
        throw new Error('Email ou mot de passe incorrect');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      const msg = error.error?.message || 'Email ou mot de passe incorrect';
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(msg));
    }));
  }
  logout() {
    localStorage.removeItem('currentEmployee');
    this.currentEmployeeSubject.next(null);
    this.router.navigate(['/employee-login']);
  }
  // Méthode pour charger manuellement l'employé depuis localStorage si nécessaire
  loadEmployeeFromStorage() {
    const employeeData = localStorage.getItem('currentEmployee');
    if (employeeData) {
      try {
        const employee = JSON.parse(employeeData);
        this.currentEmployeeSubject.next(employee);
        return true;
      } catch (e) {
        localStorage.removeItem('currentEmployee');
      }
    }
    return false;
  }
  static {
    this.ɵfac = function EmployeeAuthService_Factory(t) {
      return new (t || EmployeeAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: EmployeeAuthService,
      factory: EmployeeAuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_employee_employee-login_module_ts.js.map
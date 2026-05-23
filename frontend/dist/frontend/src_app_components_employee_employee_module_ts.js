"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_employee_employee_module_ts"],{

/***/ 2178:
/*!*********************************************************************!*\
  !*** ./src/app/components/employee/employee-dashboard.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeDashboardComponent: () => (/* binding */ EmployeeDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _employee_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-tasks.component */ 9260);
/* harmony import */ var _employee_timesheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-timesheet.component */ 6694);
/* harmony import */ var _skills_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills-profile.component */ 3505);
/* harmony import */ var _employee_pointage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-pointage.component */ 3287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_manager_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/manager-auth.service */ 6250);
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/employee.service */ 3878);
/* harmony import */ var _services_documents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/documents.service */ 9592);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ 8397);















const _c0 = a0 => ({
  active: a0
});
function EmployeeDashboardComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.taskNotificationCount);
  }
}
function EmployeeDashboardComponent_div_47_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 60)(4, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const activity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](activity_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("bi " + activity_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](activity_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](activity_r2.time);
  }
}
function EmployeeDashboardComponent_div_47_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 67)(7, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 69)(10, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 73)(17, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_47_div_60_Template_button_click_17_listener() {
      const meeting_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.joinMeeting(meeting_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Rejoindre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meeting_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](meeting_r4.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](meeting_r4.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](meeting_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", meeting_r4.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", meeting_r4.location, " ");
  }
}
function EmployeeDashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "section", 28)(2, "div", 29)(3, "div", 30)(4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 33)(7, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "T\u00E2ches Termin\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 30)(12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 33)(15, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "En Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 30)(20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 33)(23, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Heures Travaill\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 30)(28, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 33)(31, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "R\u00E9unions \u00E0 Venir");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "section", 42)(36, "div", 43)(37, "div", 44)(38, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Mes T\u00E2ches");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Voir tout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "app-employee-tasks", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 49)(45, "div", 44)(46, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Activit\u00E9s R\u00E9centes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, EmployeeDashboardComponent_div_47_div_51_Template, 8, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "section", 54)(53, "div", 55)(54, "div", 44)(55, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "R\u00E9unions \u00E0 Venir");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Voir tout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, EmployeeDashboardComponent_div_47_div_60_Template, 20, 5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.employeeStats.tasksCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.employeeStats.tasksInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.employeeStats.hoursWorked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.employeeStats.upcomingMeetings);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", ctx_r0.currentEmployee == null ? null : ctx_r0.currentEmployee.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.recentActivities);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.myMeetings.slice(0, 2));
  }
}
function EmployeeDashboardComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-employee-tasks", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", ctx_r0.currentEmployee == null ? null : ctx_r0.currentEmployee.id);
  }
}
function EmployeeDashboardComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-employee-timesheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function EmployeeDashboardComponent_div_50_div_9_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", participant_r6.charAt(0), " ");
  }
}
function EmployeeDashboardComponent_div_50_div_9_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meeting_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" +", meeting_r7.participants.length - 3, " ");
  }
}
function EmployeeDashboardComponent_div_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 87)(12, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, EmployeeDashboardComponent_div_50_div_9_div_25_Template, 2, 1, "div", 91)(26, EmployeeDashboardComponent_div_50_div_9_div_26_Template, 2, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 73)(28, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_50_div_9_Template_button_click_28_listener() {
      const meeting_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.joinMeeting(meeting_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, " Rejoindre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meeting_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](meeting_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", meeting_r7.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", meeting_r7.time, " (", meeting_r7.duration, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](meeting_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](meeting_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](meeting_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](meeting_r7.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", meeting_r7.participants.length, " participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", meeting_r7.participants.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", meeting_r7.participants.length > 3);
  }
}
function EmployeeDashboardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "div", 76)(2, "h2", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Mes R\u00E9unions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 78)(5, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Nouvelle R\u00E9union ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, EmployeeDashboardComponent_div_50_div_9_Template, 31, 12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.myMeetings);
  }
}
function EmployeeDashboardComponent_div_51_div_8_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", doc_r10.description, " ");
  }
}
function EmployeeDashboardComponent_div_51_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 101)(1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, EmployeeDashboardComponent_div_51_div_8_div_1_div_8_Template, 2, 1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 107)(10, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_51_div_8_div_1_Template_button_click_10_listener() {
      const doc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.downloadDocument(doc_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " T\u00E9l\u00E9charger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.getFileIcon(doc_r10.file_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](doc_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", doc_r10.file_type.split("/")[1].toUpperCase(), " \u00E2\u20AC\u00A2 ", doc_r10.file_size, " MB \u00E2\u20AC\u00A2 ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 6, doc_r10.created_at, "dd MMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", doc_r10.description);
  }
}
function EmployeeDashboardComponent_div_51_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmployeeDashboardComponent_div_51_div_8_div_1_Template, 13, 9, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.documents);
  }
}
function EmployeeDashboardComponent_div_51_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 111)(1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Aucun document");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Vous n'avez pas encore de documents assign\u00E9s.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function EmployeeDashboardComponent_div_51_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Chargement des documents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function EmployeeDashboardComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "div", 76)(2, "h2", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Mes Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 78)(5, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_51_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.loadDocuments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Actualiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, EmployeeDashboardComponent_div_51_div_8_Template, 2, 1, "div", 96)(9, EmployeeDashboardComponent_div_51_div_9_Template, 7, 0, "div", 97)(10, EmployeeDashboardComponent_div_51_div_10_Template, 4, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("spin", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.documents.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.documents.length === 0 && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.loading);
  }
}
function EmployeeDashboardComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-skills-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function EmployeeDashboardComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-employee-pointage", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", (tmp_1_0 = ctx_r0.currentEmployee == null ? null : ctx_r0.currentEmployee.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0);
  }
}
class EmployeeDashboardComponent {
  constructor(router, managerAuthService, employeeService, documentsService, toast) {
    this.router = router;
    this.managerAuthService = managerAuthService;
    this.employeeService = employeeService;
    this.documentsService = documentsService;
    this.toast = toast;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.activeSection = 'dashboard';
    this.currentEmployee = null;
    this.loading = false;
    this.documents = [];
    // Dashboard stats
    this.employeeStats = {
      tasksCompleted: 0,
      tasksInProgress: 0,
      hoursWorked: 0,
      upcomingMeetings: 0,
      pendingTasks: 0
    };
    /** Nombre de notifications de tâche non lues (assignations, etc.) */
    this.taskNotificationCount = 0;
    // Données pour le dashboard
    this.myTasks = [];
    this.myMeetings = [];
    this.myTimesheets = [];
    this.recentActivities = [];
    // Variables pour le modal de création de timesheet
    this.showCreateTimesheetModal = false;
    this.newTimesheet = {
      date: '',
      project_id: null,
      hours: 0,
      description: ''
    };
    // Liste des projets disponibles
    this.availableProjects = [];
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit() {
    this.checkEmployeeAuth();
    this.loadEmployeeData();
    this.loadMeetingsFromDatabase();
    this.calculateStats();
  }
  checkEmployeeAuth() {
    // Vérifier si l'employé est connecté
    const employeeData = localStorage.getItem('currentEmployee');
    if (employeeData) {
      this.currentEmployee = JSON.parse(employeeData);
    } else {
      // Rediriger vers la page de login employé
      this.router.navigate(['/employee-login']);
    }
  }
  loadEmployeeData() {
    if (!this.currentEmployee) return;
    // Charger les données réelles depuis le backend
    this.loadRealEmployeeData();
    this.loadDocuments();
  }
  loadRealEmployeeData() {
    const employeeId = this.currentEmployee?.id;
    if (!employeeId) return;
    // Charger le dashboard complet
    this.employeeService.getEmployeeDashboard(employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          const data = response.data;
          this.employeeStats.tasksCompleted = data.stats.done;
          this.employeeStats.tasksInProgress = data.stats.in_progress;
          this.employeeStats.pendingTasks = data.stats.todo;
          this.employeeStats.upcomingMeetings = data.upcomingMeetings.length;
          this.myTasks = this.formatTasks(data.recentTasks);
          this.myMeetings = this.formatMeetings(data.upcomingMeetings);
        }
      },
      error: () => {
        this.toast.error('Erreur lors du chargement des données');
      }
    });
    // Charger les timesheets séparément
    this.loadTimesheets();
    this.employeeService.getTaskNotifications(employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        if (res?.success) this.taskNotificationCount = Number(res.unreadCount) || 0;
      },
      error: () => {
        this.taskNotificationCount = 0;
      }
    });
  }
  formatTasks(tasks) {
    return tasks.map(task => ({
      id: task.id,
      title: task.title,
      description: task.description || '',
      priority: task.priority,
      dueDate: task.due_date ? new Date(task.due_date).toLocaleDateString('fr-FR', {
        month: 'short',
        day: 'numeric'
      }) : '',
      progress: task.progress || 0,
      status: task.status,
      assignee: 'Moi',
      tags: task.tags ? JSON.parse(task.tags) : []
    }));
  }
  formatMeetings(meetings) {
    return meetings.map(meeting => {
      const dateTime = new Date(meeting.date_time);
      return {
        id: meeting.id,
        title: meeting.title,
        type: meeting.type,
        date: dateTime.toLocaleDateString('fr-FR', {
          month: 'short',
          day: 'numeric'
        }),
        time: dateTime.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        duration: meeting.duration,
        participants: ['Équipe'],
        location: meeting.location,
        description: meeting.description
      };
    });
  }
  loadRecentActivities() {
    // Données mockées pour les activités récentes
    this.recentActivities = [{
      id: 1,
      type: 'task',
      title: 'Tâche "Finaliser le rapport mensuel" mise à jour',
      time: 'Il y a 2 heures',
      icon: 'bi-check-circle',
      color: 'success'
    }, {
      id: 2,
      type: 'meeting',
      title: 'Réunion "Daily Stand-up" confirmée',
      time: 'Il y a 4 heures',
      icon: 'bi-calendar-check',
      color: 'info'
    }, {
      id: 3,
      type: 'timesheet',
      title: 'Timesheet du 31 Mars validé',
      time: 'Hier',
      icon: 'bi-clock-history',
      color: 'warning'
    }, {
      id: 4,
      type: 'task',
      title: 'Nouvelle tâche assignée: "Code review"',
      time: 'Il y a 2 jours',
      icon: 'bi-plus-circle',
      color: 'primary'
    }];
  }
  calculateStats() {
    // Calculer les statistiques
    this.employeeStats.tasksCompleted = this.myTasks.filter(t => t.status === 'done').length;
    this.employeeStats.tasksInProgress = this.myTasks.filter(t => t.status === 'in_progress').length;
    this.employeeStats.pendingTasks = this.myTasks.filter(t => t.status === 'todo').length;
    this.employeeStats.upcomingMeetings = this.myMeetings.length;
    this.employeeStats.hoursWorked = this.myTimesheets.filter(t => t.status === 'validated').reduce((sum, t) => sum + t.hours, 0);
  }
  changeSection(sectionId) {
    this.activeSection = sectionId;
  }
  // Méthodes pour les tâches
  updateTaskProgress(taskId, progress) {
    const task = this.myTasks.find(t => t.id === taskId);
    if (task) {
      task.progress = progress;
      // Déterminer le nouveau statut
      let newStatus = task.status;
      if (progress === 100) {
        newStatus = 'done';
      } else if (progress > 0 && task.status === 'todo') {
        newStatus = 'in_progress';
      }
      // Mettre à jour sur le backend
      if (this.currentEmployee) {
        this.employeeService.updateTaskStatus(this.currentEmployee.id, taskId, newStatus).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
          next: response => {
            if (response.success) {
              task.status = newStatus;
              this.calculateStats();
            }
          },
          error: () => {
            task.status = newStatus;
            this.calculateStats();
          }
        });
      } else {
        task.status = newStatus;
        this.calculateStats();
      }
    }
  }
  increaseTaskProgress(taskId) {
    const task = this.myTasks.find(t => t.id === taskId);
    if (task) {
      const newProgress = Math.min(100, task.progress + 10);
      this.updateTaskProgress(taskId, newProgress);
    }
  }
  completeTask(taskId) {
    this.updateTaskProgress(taskId, 100);
  }
  loadMeetingsFromDatabase() {
    if (!this.currentEmployee) return;
    this.managerAuthService.getEmployeeMeetings(this.currentEmployee.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        const meetings = response.data || response;
        this.myMeetings = meetings.map(meeting => ({
          id: meeting.id,
          title: meeting.title,
          type: meeting.type,
          date: new Date(meeting.date_time).toLocaleDateString('fr-FR'),
          time: new Date(meeting.date_time).toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
          }),
          duration: meeting.duration,
          participants: [],
          location: meeting.location,
          description: meeting.description,
          status: meeting.meeting_status || 'pending',
          color: meeting.type === 'team' ? '#10B981' : meeting.type === 'client' ? '#3B82F6' : meeting.type === 'technical' ? '#F59E0B' : '#8B5CF6'
        }));
        this.calculateStats();
      },
      error: () => {
        this.myMeetings = [];
        this.calculateStats();
      }
    });
  }
  // Méthodes pour les réunions
  joinMeeting(meetingId) {
    const meeting = this.myMeetings.find(m => m.id === meetingId);
    if (meeting) {
      this.toast.warning(`Rejoindre la réunion: ${meeting.title} — fonctionnalité à venir`);
    }
  }
  updateMeetingStatus(meetingId, status) {
    if (!this.currentEmployee) return;
    this.managerAuthService.updateMeetingAttendance(meetingId, this.currentEmployee.id, status).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.toast.success('Statut de participation mis à jour');
        this.loadMeetingsFromDatabase();
      },
      error: () => {
        this.toast.error('Erreur lors de la mise à jour du statut');
      }
    });
  }
  // Méthodes pour les timesheets
  loadTimesheets() {
    if (!this.currentEmployee) return;
    this.employeeService.getEmployeeTimesheets(this.currentEmployee.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.myTimesheets = response.data;
          this.calculateStats();
        }
      },
      error: () => {
        this.myTimesheets = [];
      }
    });
  }
  submitTimesheet(timesheetId) {
    if (!this.currentEmployee) return;
    this.employeeService.submitTimesheet(this.currentEmployee.id, timesheetId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          const timesheet = this.myTimesheets.find(t => t.id === timesheetId);
          if (timesheet) timesheet.status = 'submitted';
          this.toast.success('Timesheet soumis pour validation');
        }
      },
      error: () => {
        this.toast.error('Erreur lors de la soumission du timesheet');
      }
    });
  }
  openCreateTimesheetModal() {
    this.showCreateTimesheetModal = true;
    this.resetTimesheetForm();
    this.loadAvailableProjects();
  }
  loadAvailableProjects() {
    if (!this.currentEmployee) return;
    this.employeeService.getEmployeeProjects(this.currentEmployee.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) this.availableProjects = response.data;
      },
      error: () => {
        this.availableProjects = [];
      }
    });
  }
  closeCreateTimesheetModal() {
    this.showCreateTimesheetModal = false;
    this.resetTimesheetForm();
  }
  resetTimesheetForm() {
    this.newTimesheet = {
      date: '',
      project_id: null,
      hours: 0,
      description: ''
    };
  }
  createTimesheet() {
    if (!this.currentEmployee) return;
    if (!this.newTimesheet.date || !this.newTimesheet.hours) {
      this.toast.warning('Veuillez remplir tous les champs obligatoires');
      return;
    }
    const timesheetData = {
      date: new Date(this.newTimesheet.date).toISOString().split('T')[0],
      project_id: this.newTimesheet.project_id,
      hours: this.newTimesheet.hours,
      description: this.newTimesheet.description,
      status: 'pending'
    };
    this.employeeService.createTimesheet(this.currentEmployee.id, timesheetData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.toast.success('Timesheet créé avec succès');
          this.closeCreateTimesheetModal();
          this.loadTimesheets();
        }
      },
      error: () => {
        this.toast.error('Erreur lors de la création du timesheet');
      }
    });
  }
  // Méthodes utilitaires
  getPriorityColor(priority) {
    const colors = {
      'high': '#EF4444',
      'medium': '#F59E0B',
      'low': '#10B981'
    };
    return colors[priority] || '#6B7280';
  }
  getStatusColor(status) {
    const colors = {
      'done': '#10B981',
      'in_progress': '#3B82F6',
      'todo': '#6B7280',
      'validated': '#10B981',
      'pending': '#F59E0B',
      'submitted': '#3B82F6'
    };
    return colors[status] || '#6B7280';
  }
  getTaskStatusLabel(status) {
    const labels = {
      'done': 'Terminé',
      'in_progress': 'En cours',
      'todo': 'À faire'
    };
    return labels[status] || status;
  }
  getTimesheetStatusLabel(status) {
    const labels = {
      'validated': 'Validé',
      'pending': 'En attente',
      'submitted': 'Soumis'
    };
    return labels[status] || status;
  }
  logout() {
    localStorage.removeItem('currentEmployee');
    this.router.navigate(['/employee-login']);
  }
  stopPropagation(event) {
    event.stopPropagation();
  }
  loadDocuments() {
    this.loading = true;
    if (!this.currentEmployee) {
      this.loading = false;
      return;
    }
    this.documentsService.getMyDocuments(this.currentEmployee.id).subscribe({
      next: response => {
        if (response.success) {
          this.documents = response.data;
        }
        this.loading = false;
      },
      error: error => {
        console.error('Erreur lors du chargement des documents:', error);
        this.loading = false;
      }
    });
  }
  downloadDocument(doc) {
    this.documentsService.downloadDocument(doc.file_path);
  }
  getFileIcon(type) {
    if (type.includes('pdf')) return 'bi-file-earmark-pdf text-danger';
    if (type.includes('word') || type.includes('doc')) return 'bi-file-earmark-word text-primary';
    if (type.includes('image')) return 'bi-file-earmark-image text-success';
    return 'bi-file-earmark-text';
  }
  static {
    this.ɵfac = function EmployeeDashboardComponent_Factory(t) {
      return new (t || EmployeeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_manager_auth_service__WEBPACK_IMPORTED_MODULE_4__.ManagerAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_documents_service__WEBPACK_IMPORTED_MODULE_6__.DocumentsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: EmployeeDashboardComponent,
      selectors: [["app-employee-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 54,
      vars: 38,
      consts: [[1, "employee-dashboard"], [1, "dashboard-header"], [1, "header-left"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-right"], [1, "header-actions"], ["title", "Notifications", 1, "btn-notification"], [1, "bi", "bi-bell"], ["class", "notification-badge", 4, "ngIf"], ["title", "Profil", 1, "btn-profile"], [1, "bi", "bi-person-circle"], ["title", "D\u00E9connexion", 1, "btn-logout", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "dashboard-nav"], [1, "nav-items"], [1, "nav-item", 3, "click"], [1, "bi", "bi-grid"], [1, "bi", "bi-list-task"], [1, "bi", "bi-clock"], [1, "bi", "bi-calendar"], [1, "bi", "bi-file-text"], [1, "bi", "bi-award"], [1, "bi", "bi-fingerprint"], [1, "dashboard-content"], ["class", "section fade-in", 4, "ngIf"], [1, "notification-badge"], [1, "section", "fade-in"], [1, "stats-section"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "blue"], [1, "bi", "bi-check-circle"], [1, "stat-content"], [1, "stat-number"], [1, "stat-label"], [1, "stat-icon", "orange"], [1, "bi", "bi-hourglass-split"], [1, "stat-icon", "green"], [1, "bi", "bi-clock-history"], [1, "stat-icon", "purple"], [1, "bi", "bi-calendar-event"], [1, "content-grid"], [1, "card", "tasks-card"], [1, "card-header"], [1, "card-title"], [1, "view-all-btn"], [1, "tasks-content"], [3, "employeeId"], [1, "card", "activities-card"], [1, "refresh-btn"], [1, "bi", "bi-arrow-clockwise"], [1, "activities-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "meetings-section"], [1, "card", "meetings-card"], [1, "meetings-list"], ["class", "meeting-item", 4, "ngFor", "ngForOf"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-content"], [1, "activity-title"], [1, "activity-time"], [1, "meeting-item"], [1, "meeting-time"], [1, "time"], [1, "duration"], [1, "meeting-info"], [1, "meeting-title"], [1, "meeting-meta"], [1, "meeting-date"], [1, "meeting-location"], [1, "bi", "bi-geo-alt"], [1, "meeting-actions"], [1, "btn-join", 3, "click"], [1, "bi", "bi-camera-video"], [1, "section-header"], [1, "section-title"], [1, "section-actions"], [1, "btn-primary"], [1, "bi", "bi-plus-circle"], [1, "meetings-grid"], ["class", "meeting-card", 4, "ngFor", "ngForOf"], [1, "meeting-card"], [1, "meeting-header"], [1, "meeting-type"], [1, "meeting-description"], [1, "meeting-details"], [1, "meeting-detail"], [1, "bi", "bi-people"], [1, "meeting-participants"], ["class", "participant-avatar", 4, "ngFor", "ngForOf"], ["class", "participant-more", 4, "ngIf"], [1, "participant-avatar"], [1, "participant-more"], [1, "btn-refresh", 3, "click", "disabled"], ["class", "documents-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "documents-grid"], ["class", "document-card", 4, "ngFor", "ngForOf"], [1, "document-card"], [1, "document-icon"], [1, "bi", 3, "ngClass"], [1, "document-title"], [1, "document-info"], ["class", "document-description", 4, "ngIf"], [1, "document-actions"], ["title", "T\u00E9l\u00E9charger / Voir", 1, "btn-download", 3, "click"], [1, "bi", "bi-download"], [1, "document-description"], [1, "empty-state"], [1, "empty-icon"], [1, "bi", "bi-folder2-open"], [1, "loading-state"], [1, "spinner"]],
      template: function EmployeeDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Tableau de Bord Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, EmployeeDashboardComponent_span_11_Template, 2, 1, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_14_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "nav", 14)(17, "div", 15)(18, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_18_listener() {
            return ctx.changeSection("dashboard");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_22_listener() {
            return ctx.changeSection("taches");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Mes T\u00E2ches");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_26_listener() {
            return ctx.changeSection("timesheet");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Timesheet");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_30_listener() {
            return ctx.changeSection("reunions");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "R\u00E9unions");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_34_listener() {
            return ctx.changeSection("documents");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_38_listener() {
            return ctx.changeSection("competences");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Comp\u00E9tences");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_42_listener() {
            return ctx.changeSection("pointage");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Pointage");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "main", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, EmployeeDashboardComponent_div_47_Template, 61, 7, "div", 25)(48, EmployeeDashboardComponent_div_48_Template, 2, 1, "div", 25)(49, EmployeeDashboardComponent_div_49_Template, 2, 0, "div", 25)(50, EmployeeDashboardComponent_div_50_Template, 10, 1, "div", 25)(51, EmployeeDashboardComponent_div_51_Template, 11, 6, "div", 25)(52, EmployeeDashboardComponent_div_52_Template, 2, 0, "div", 25)(53, EmployeeDashboardComponent_div_53_Template, 2, 1, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Bienvenue, ", ctx.currentEmployee == null ? null : ctx.currentEmployee.prenom, " ", ctx.currentEmployee == null ? null : ctx.currentEmployee.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.taskNotificationCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c0, ctx.activeSection === "dashboard"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](26, _c0, ctx.activeSection === "taches"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](28, _c0, ctx.activeSection === "timesheet"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](30, _c0, ctx.activeSection === "reunions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](32, _c0, ctx.activeSection === "documents"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](34, _c0, ctx.activeSection === "competences"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](36, _c0, ctx.activeSection === "pointage"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeSection === "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeSection === "taches");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeSection === "timesheet");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeSection === "reunions");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeSection === "documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeSection === "competences");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeSection === "pointage");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _employee_tasks_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeTasksComponent, _employee_timesheet_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeTimesheetComponent, _skills_profile_component__WEBPACK_IMPORTED_MODULE_2__.SkillsProfileComponent, _employee_pointage_component__WEBPACK_IMPORTED_MODULE_3__.EmployeePointageComponent],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&family=Syne[_ngcontent-%COMP%]:wght@600;700[_ngcontent-%COMP%];800&display=swap)[_ngcontent-%COMP%];\n\n.documents-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;\n}\n.document-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; padding: 22px; transition: all 0.3s;\n  display: flex; flex-direction: column; gap: 12px;\n}\n.document-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(14,165,233,0.3); transform: translateY(-3px);\n  box-shadow: 0 10px 28px rgba(0,0,0,0.3);\n}\n.document-icon[_ngcontent-%COMP%] {\n  width: 52px; height: 52px; border-radius: 14px;\n  background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.15);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 22px; color: #38bdf8;\n}\n.document-title[_ngcontent-%COMP%] {\n  font-size: 15px; font-weight: 700; color: #f8fafc; margin: 0;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.document-info[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin: 0; }\n.document-description[_ngcontent-%COMP%] { font-size: 13px; color: #94a3b8; line-height: 1.5; }\n.document-actions[_ngcontent-%COMP%] { margin-top: auto; }\n.document-actions[_ngcontent-%COMP%]   .btn-download[_ngcontent-%COMP%] {\n  width: 100%; padding: 9px 16px; border-radius: 10px;\n  background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.2);\n  color: #38bdf8; font-size: 13px; font-weight: 600; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;\n}\n.document-actions[_ngcontent-%COMP%]   .btn-download[_ngcontent-%COMP%]:hover { background: rgba(14,165,233,0.2); }\n\n.btn-refresh[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  padding: 9px 18px; border-radius: 10px;\n  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);\n  color: #94a3b8; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n.btn-refresh[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n.spin[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n\n.loading-state[_ngcontent-%COMP%] { text-align: center; padding: 60px 20px; }\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #64748b; margin-top: 16px; font-size: 14px; }\n.spinner[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border: 3px solid rgba(255,255,255,0.1);\n  border-top-color: #0ea5e9; border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite; margin: 0 auto;\n}\n\n.empty-icon[_ngcontent-%COMP%] { font-size: 48px; color: #334155; margin-bottom: 16px; }\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; color: #94a3b8; margin-bottom: 8px; }\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 14px; color: #64748b; }\n\n\n\n.meeting-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 20px; margin-bottom: 12px; transition: all 0.2s;\n  border-left: 3px solid #6366f1;\n}\n.meeting-card[_ngcontent-%COMP%]:hover { border-color: rgba(99,102,241,0.3); background: rgba(255,255,255,0.06); }\n.meeting-card[_ngcontent-%COMP%]   .meeting-title[_ngcontent-%COMP%] { font-size: 15px; font-weight: 700; color: #f8fafc; margin: 0 0 10px 0; }\n.meeting-details[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }\n.meeting-detail[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; }\n.meeting-detail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #6366f1; width: 14px; }\n.meeting-participants[_ngcontent-%COMP%] { display: flex; gap: -4px; margin-bottom: 14px; }\n.participant-avatar[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border-radius: 50%; border: 2px solid #0f172a;\n  background: linear-gradient(135deg, #6366f1, #a855f7);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; font-weight: 700; color: white; margin-left: -6px;\n}\n.participant-avatar[_ngcontent-%COMP%]:first-child { margin-left: 0; }\n.participant-more[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border-radius: 50%; border: 2px solid #0f172a;\n  background: rgba(255,255,255,0.08); color: #94a3b8;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 10px; font-weight: 700; margin-left: -6px;\n}\n.meeting-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; }\n.btn-join[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center; gap: 6px;\n  padding: 8px 16px; border-radius: 9px;\n  background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2);\n  color: #a5b4fc; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;\n}\n.btn-join[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.22); }\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);\n  display: flex; align-items: center; justify-content: center; z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #1e293b; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px;\n  padding: 32px; width: 520px; max-width: 95vw; max-height: 90vh; overflow-y: auto;\n  box-shadow: 0 24px 48px rgba(0,0,0,0.5);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4,0,0.2,1);\n}\n@keyframes _ngcontent-%COMP%_slideUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }\n.modal-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }\n.modal-title[_ngcontent-%COMP%] { font-family: 'Syne',sans-serif; font-size: 20px; font-weight: 700; color: #f8fafc; }\n.modal-close[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px; background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.15); color: #f87171; }\n.modal-body[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 18px; }\n.form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 500; color: #94a3b8; }\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px; padding: 10px 14px; color: #f8fafc;\n  font-size: 14px; font-family: 'Inter',sans-serif; outline: none; transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9; background: rgba(14,165,233,0.06); box-shadow: 0 0 0 3px rgba(14,165,233,0.15);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; }\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { resize: vertical; min-height: 80px; }\n.form-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 12px; padding-top: 8px; }\n\n\n\n\n\n\n.tasks-list[_ngcontent-%COMP%] { padding: 0; }\n.task-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.task-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 4px 0; }\n.task-description[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin: 0 0 6px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.task-meta[_ngcontent-%COMP%] { display: flex; gap: 12px; font-size: 11px; color: #64748b; flex-wrap: wrap; }\n.due-date[_ngcontent-%COMP%], .priority[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; }\n.task-progress[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; width: 120px; flex-shrink: 0; }\n.task-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] { flex: 1; }\n.progress-text[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; width: 36px; text-align: right; flex-shrink: 0; }\n\n\n\n.tasks-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;\n}\n.task-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 20px; transition: all 0.3s;\n}\n.task-card[_ngcontent-%COMP%]:hover { border-color: rgba(14,165,233,0.25); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }\n.task-card.completed[_ngcontent-%COMP%] { opacity: 0.6; }\n.task-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 10px; }\n.task-card[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] { font-size: 15px; font-weight: 600; color: #f8fafc; margin: 0; }\n.task-priority[_ngcontent-%COMP%] {\n  padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600;\n  color: white; flex-shrink: 0; text-transform: capitalize;\n}\n.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] { color: #64748b; font-size: 13px; margin-bottom: 14px; line-height: 1.5; }\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%] { gap: 14px; margin-bottom: 14px; }\n.task-due[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; font-size: 12px; color: #64748b; }\n.task-status[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; }\n.task-progress-section[_ngcontent-%COMP%] { margin-bottom: 14px; }\n.progress-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; font-size: 11px; color: #64748b; margin-bottom: 6px; }\n.task-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; }\n.task-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  flex: 1; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8;\n  font-size: 12px; font-weight: 500; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n.btn-complete[_ngcontent-%COMP%] { background: rgba(16,185,129,0.1) !important; color: #34d399 !important; border-color: rgba(16,185,129,0.2) !important; }\n.btn-complete[_ngcontent-%COMP%]:hover { background: rgba(16,185,129,0.2) !important; }\n\n\n\n.section-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: #f8fafc; }\n.section-actions[_ngcontent-%COMP%] { display: flex; gap: 10px; align-items: center; }\n.filter-controls[_ngcontent-%COMP%] { display: flex; gap: 10px; }\n.filter-select[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px; padding: 8px 12px; color: #94a3b8;\n  font-size: 13px; outline: none; cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; color: #f8fafc; }\n\n\n\n.activities-list[_ngcontent-%COMP%] { padding: 8px 0; }\n.activity-item[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 14px; padding: 12px 20px; transition: background 0.2s; }\n.activity-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.activity-icon[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center; font-size: 15px;\n}\n.activity-icon.blue[_ngcontent-%COMP%]   { background: rgba(59,130,246,0.15); color: #60a5fa; }\n.activity-icon.green[_ngcontent-%COMP%]  { background: rgba(16,185,129,0.15); color: #34d399; }\n.activity-icon.purple[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: #a5b4fc; }\n.activity-icon.orange[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; }\n.activity-content[_ngcontent-%COMP%] { flex: 1; }\n.activity-title[_ngcontent-%COMP%] { font-size: 13px; font-weight: 500; color: #cbd5e1; margin: 0 0 3px 0; }\n.activity-time[_ngcontent-%COMP%] { font-size: 11px; color: #475569; }\n.refresh-btn[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; transition: all 0.2s;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n\n\n\n.meetings-section[_ngcontent-%COMP%] { margin-top: 20px; }\n.meetings-list[_ngcontent-%COMP%] { padding: 0; }\n.meeting-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 16px;\n  padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); transition: background 0.2s;\n}\n.meeting-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.meeting-item[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n.meeting-time[_ngcontent-%COMP%] { text-align: center; flex-shrink: 0; min-width: 60px; }\n.meeting-time[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] { display: block; font-size: 16px; font-weight: 700; color: #f8fafc; }\n.meeting-time[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] { display: block; font-size: 11px; color: #64748b; }\n.meeting-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.meeting-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 6px 0; }\n.meeting-meta[_ngcontent-%COMP%] { display: flex; gap: 14px; font-size: 12px; color: #64748b; }\n.meeting-date[_ngcontent-%COMP%], .meeting-location[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; }\n.meeting-actions[_ngcontent-%COMP%] { flex-shrink: 0; }\n.btn-join[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.2);\n  color: #a5b4fc; padding: 7px 14px; border-radius: 8px;\n  font-size: 12px; font-weight: 600; cursor: pointer;\n  display: flex; align-items: center; gap: 6px; transition: all 0.2s;\n}\n.btn-join[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.25); }\n\n\n\n.timesheet-table-container[_ngcontent-%COMP%] { overflow-x: auto; }\n.timesheet-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.timesheet-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left; padding: 12px 16px;\n  font-size: 11px; font-weight: 600; color: #64748b;\n  text-transform: uppercase; letter-spacing: 0.08em;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  background: rgba(255,255,255,0.02);\n}\n.timesheet-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px; font-size: 14px; color: #cbd5e1;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n}\n.timesheet-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); }\n\n\n\n.documents-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;\n}\n.document-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 20px; transition: all 0.3s;\n  display: flex; align-items: center; gap: 16px;\n}\n.document-card[_ngcontent-%COMP%]:hover { border-color: rgba(14,165,233,0.3); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.25); }\n.doc-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: 12px; background: rgba(14,165,233,0.1); color: #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }\n.doc-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.doc-name[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 4px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.doc-meta[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; }\n.doc-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; flex-shrink: 0; }\n.btn-download[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; transition: all 0.2s;\n}\n.btn-download[_ngcontent-%COMP%]:hover { background: rgba(14,165,233,0.15); color: #38bdf8; }\n\n\n\n\n.employee-dashboard[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #0f172a;\n  color: #f8fafc;\n  font-family: 'Inter', sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.dashboard-header[_ngcontent-%COMP%] {\n  background: rgba(15,23,42,0.95);\n  backdrop-filter: blur(12px);\n  padding: 0 28px;\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  position: sticky; top: 0; z-index: 100;\n  flex-shrink: 0;\n}\n\n.header-left[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Syne', sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc;\n  letter-spacing: -0.02em;\n}\n\n.header-left[_ngcontent-%COMP%]   .dashboard-subtitle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.btn-notification[_ngcontent-%COMP%], .btn-profile[_ngcontent-%COMP%], .btn-logout[_ngcontent-%COMP%] {\n  width: 38px; height: 38px;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 16px; position: relative;\n  background: rgba(255,255,255,0.05);\n  color: #94a3b8;\n}\n\n.btn-notification[_ngcontent-%COMP%]:hover, .btn-profile[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.1);\n  color: #f8fafc;\n}\n\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239,68,68,0.15);\n  color: #f87171;\n  border-color: rgba(239,68,68,0.2);\n}\n\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute; top: -4px; right: -4px;\n  background: #ef4444; color: white;\n  width: 18px; height: 18px; border-radius: 50%;\n  font-size: 10px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid #0f172a;\n}\n\n\n\n.dashboard-nav[_ngcontent-%COMP%] {\n  background: rgba(15,23,42,0.8);\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  padding: 0 28px;\n  flex-shrink: 0;\n  backdrop-filter: blur(8px);\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  display: flex; gap: 4px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  padding: 14px 16px;\n  font-size: 14px; font-weight: 500; color: #64748b;\n  cursor: pointer; border: none;\n  background: transparent;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover { color: #f8fafc; }\n\n.nav-item.active[_ngcontent-%COMP%], .nav-item[class*=\"active\"][_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  border-bottom-color: #6366f1;\n}\n\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 15px; }\n\n\n\n.dashboard-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px;\n  overflow-y: auto;\n  background: #0f172a;\n}\n\n\n\n.section[_ngcontent-%COMP%], .fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.4s cubic-bezier(0.4,0,0.2,1) both;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(14px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n.stats-section[_ngcontent-%COMP%] { margin-bottom: 28px; }\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; padding: 22px;\n  display: flex; align-items: center; gap: 16px;\n  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);\n  backdrop-filter: blur(8px);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.07);\n  border-color: rgba(99,102,241,0.3);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.3);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px; height: 48px; border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px; color: white; flex-shrink: 0;\n}\n.stat-icon.blue[_ngcontent-%COMP%]   { background: linear-gradient(135deg,#3b82f6,#1d4ed8); box-shadow: 0 4px 12px rgba(59,130,246,0.3); }\n.stat-icon.green[_ngcontent-%COMP%]  { background: linear-gradient(135deg,#10b981,#059669); box-shadow: 0 4px 12px rgba(16,185,129,0.3); }\n.stat-icon.purple[_ngcontent-%COMP%] { background: linear-gradient(135deg,#8b5cf6,#6366f1); box-shadow: 0 4px 12px rgba(139,92,246,0.3); }\n.stat-icon.orange[_ngcontent-%COMP%] { background: linear-gradient(135deg,#f59e0b,#d97706); box-shadow: 0 4px 12px rgba(245,158,11,0.3); }\n\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 28px; font-weight: 700;\n  color: #f8fafc; margin: 0 0 4px 0;\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px; color: #64748b; margin: 0;\n  text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; overflow: hidden;\n  backdrop-filter: blur(8px);\n  transition: border-color 0.3s;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]:hover { border-color: rgba(99,102,241,0.2); }\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  display: flex; align-items: center; justify-content: space-between;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px; font-weight: 600; color: #f8fafc; margin: 0;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;\n}\n@media (max-width: 1024px) { .content-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n\n\n.task-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 14px;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n  transition: background 0.2s;\n}\n.task-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.task-item[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n\n\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center;\n  padding: 3px 10px; border-radius: 100px;\n  font-size: 11px; font-weight: 600;\n}\n.badge-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }\n.badge-warning[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }\n.badge-danger[_ngcontent-%COMP%]  { background: rgba(239,68,68,0.15);  color: #f87171; border: 1px solid rgba(239,68,68,0.2); }\n.badge-info[_ngcontent-%COMP%]    { background: rgba(14,165,233,0.15); color: #38bdf8; border: 1px solid rgba(14,165,233,0.2); }\n.badge-purple[_ngcontent-%COMP%]  { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }\n\n\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg,#6366f1,#4f46e5);\n  color: white; border: none; padding: 10px 20px; border-radius: 10px;\n  font-size: 14px; font-weight: 600; cursor: pointer;\n  transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px;\n  box-shadow: 0 4px 12px rgba(99,102,241,0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(99,102,241,0.4); }\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.06); color: #cbd5e1;\n  border: 1px solid rgba(255,255,255,0.1);\n  padding: 10px 20px; border-radius: 10px;\n  font-size: 14px; font-weight: 500; cursor: pointer;\n  transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n\n\n\n.form-group[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block; font-size: 13px; font-weight: 500;\n  color: #94a3b8; margin-bottom: 8px;\n}\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px; padding: 10px 14px;\n  color: #f8fafc; font-size: 14px; font-family: 'Inter', sans-serif;\n  outline: none; transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9;\n  background: rgba(14,165,233,0.06);\n  box-shadow: 0 0 0 3px rgba(14,165,233,0.15);\n}\n.form-control[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; color: #f8fafc; }\n\n\n\n.table-container[_ngcontent-%COMP%] { overflow-x: auto; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\nth[_ngcontent-%COMP%] {\n  text-align: left; padding: 12px 20px;\n  font-size: 11px; font-weight: 600; color: #64748b;\n  text-transform: uppercase; letter-spacing: 0.08em;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  background: rgba(255,255,255,0.02);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 14px 20px; font-size: 14px; color: #cbd5e1;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n  transition: background 0.2s;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); }\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\n\n\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #0ea5e9, #2dd4bf);\n  border-radius: 3px;\n  transition: width 0.6s cubic-bezier(0.4,0,0.2,1);\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 1000; animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; } to { opacity: 1; } }\n\n.modal[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 20px; padding: 32px;\n  width: 520px; max-width: 95vw; max-height: 90vh; overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4,0,0.2,1);\n  box-shadow: 0 24px 48px rgba(0,0,0,0.5);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { opacity: 0; transform: translateY(24px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px; border-radius: 10px;\n  display: flex; align-items: center; gap: 10px;\n  margin-bottom: 16px; font-size: 14px;\n}\n.alert-danger[_ngcontent-%COMP%] { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #f87171; }\n.alert-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); color: #34d399; }\n\n\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 20px; font-weight: 700; color: #f8fafc;\n}\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center; padding: 60px 20px; color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 48px; margin-bottom: 16px; opacity: 0.3; display: block; }\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; color: #94a3b8; margin-bottom: 8px; }\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar { width: 5px; height: 5px; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-track { background: transparent; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }\n\n\n\n.doc-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 12px; padding: 18px;\n  transition: all 0.3s;\n  display: flex; align-items: center; gap: 14px;\n}\n.doc-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(14,165,233,0.3);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.25);\n}\n\n\n\n.meeting-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 12px; padding: 18px;\n  transition: all 0.3s; margin-bottom: 12px;\n}\n.meeting-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99,102,241,0.3);\n  transform: translateY(-2px);\n}\n\n\n\n.timesheet-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 14px;\n  padding: 14px 0;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n}\n.timesheet-row[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n\n\n\n.skill-bar[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\n}\n.skill-label[_ngcontent-%COMP%] { font-size: 13px; color: #94a3b8; width: 120px; flex-shrink: 0; }\n.skill-track[_ngcontent-%COMP%] {\n  flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px;\n}\n.skill-fill[_ngcontent-%COMP%] {\n  height: 100%; background: linear-gradient(90deg,#6366f1,#0ea5e9);\n  border-radius: 3px; transition: width 0.8s cubic-bezier(0.4,0,0.2,1);\n}\n.skill-value[_ngcontent-%COMP%] { font-size: 13px; color: #64748b; width: 36px; text-align: right; }\n\n\n\n@media (max-width: 768px) {\n  .dashboard-header[_ngcontent-%COMP%] { padding: 0 16px; }\n  .dashboard-nav[_ngcontent-%COMP%] { padding: 0 16px; }\n  .dashboard-content[_ngcontent-%COMP%] { padding: 16px; }\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .content-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxhQUFhLEVBQUUsNERBQTRELEVBQUUsU0FBUztBQUN4RjtBQUNBO0VBQ0Usa0NBQWtDLEVBQUUsd0NBQXdDO0VBQzVFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxvQkFBb0I7RUFDeEQsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFNBQVM7QUFDbEQ7QUFDQTtFQUNFLGtDQUFrQyxFQUFFLDJCQUEyQjtFQUMvRCx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CO0VBQzlDLGdDQUFnQyxFQUFFLHVDQUF1QztFQUN6RSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCO0VBQzNELGVBQWUsRUFBRSxjQUFjO0FBQ2pDO0FBQ0E7RUFDRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFNBQVM7RUFDNUQsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCO0FBQ2hFO0FBQ0EsaUJBQWlCLGVBQWUsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFO0FBQzdELHdCQUF3QixlQUFlLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFO0FBQzNFLG9CQUFvQixnQkFBZ0IsRUFBRTtBQUN0QztFQUNFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUI7RUFDbkQsZ0NBQWdDLEVBQUUsc0NBQXNDO0VBQ3hFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZTtFQUNsRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQjtBQUM3RjtBQUNBLHdDQUF3QyxnQ0FBZ0MsRUFBRTs7QUFFMUU7RUFDRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsUUFBUTtFQUM1QyxpQkFB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b20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1TeW5lOndnaHRANjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8qIMOiwpXCkMOiwpXCkCBET0NVTUVOVFMgU0VDVElPTiAoRW1wbG95ZWUpIMOiwpXCkMOiwpXCkCAqL1xuLmRvY3VtZW50cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpOyBnYXA6IDE2cHg7XG59XG4uZG9jdW1lbnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDIycHg7IHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7XG59XG4uZG9jdW1lbnQtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNCwxNjUsMjMzLDAuMyk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuLmRvY3VtZW50LWljb24ge1xuICB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNCwxNjUsMjMzLDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4OyBjb2xvcjogIzM4YmRmODtcbn1cbi5kb2N1bWVudC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZG9jdW1lbnQtaW5mbyB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMDsgfVxuLmRvY3VtZW50LWRlc2NyaXB0aW9uIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzk0YTNiODsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuLmRvY3VtZW50LWFjdGlvbnMgeyBtYXJnaW4tdG9wOiBhdXRvOyB9XG4uZG9jdW1lbnQtYWN0aW9ucyAuYnRuLWRvd25sb2FkIHtcbiAgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDlweCAxNnB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNCwxNjUsMjMzLDAuMik7XG4gIGNvbG9yOiAjMzhiZGY4OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogOHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5kb2N1bWVudC1hY3Rpb25zIC5idG4tZG93bmxvYWQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4yKTsgfVxuXG4uYnRuLXJlZnJlc2gge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgcGFkZGluZzogOXB4IDE4cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgY29sb3I6ICM5NGEzYjg7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5idG4tcmVmcmVzaDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgY29sb3I6ICNmOGZhZmM7IH1cbi5idG4tcmVmcmVzaDpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuQGtleWZyYW1lcyBzcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cbi5zcGluIHsgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG4ubG9hZGluZy1zdGF0ZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNjBweCAyMHB4OyB9XG4ubG9hZGluZy1zdGF0ZSBwIHsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi10b3A6IDE2cHg7IGZvbnQtc2l6ZTogMTRweDsgfVxuLnNwaW5uZXIge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwZWE1ZTk7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlOyBtYXJnaW46IDAgYXV0bztcbn1cblxuLmVtcHR5LWljb24geyBmb250LXNpemU6IDQ4cHg7IGNvbG9yOiAjMzM0MTU1OyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4uZW1wdHktc3RhdGUgaDMgeyBmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjOTRhM2I4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbi5lbXB0eS1zdGF0ZSBwIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuXG4vKiDDosKVwpDDosKVwpAgTUVFVElOR1MgU0VDVElPTiAoRW1wbG95ZWUpIMOiwpXCkMOiwpXCkCAqL1xuLm1lZXRpbmctY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7IHBhZGRpbmc6IDIwcHg7IG1hcmdpbi1ib3R0b206IDEycHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM2MzY2ZjE7XG59XG4ubWVldGluZy1jYXJkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4zKTsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTsgfVxuLm1lZXRpbmctY2FyZCAubWVldGluZy10aXRsZSB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMCAwIDEwcHggMDsgfVxuLm1lZXRpbmctZGV0YWlscyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4ubWVldGluZy1kZXRhaWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzk0YTNiODsgfVxuLm1lZXRpbmctZGV0YWlsIGkgeyBjb2xvcjogIzYzNjZmMTsgd2lkdGg6IDE0cHg7IH1cbi5tZWV0aW5nLXBhcnRpY2lwYW50cyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogLTRweDsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuLnBhcnRpY2lwYW50LWF2YXRhciB7XG4gIHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgI2E4NTVmNyk7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB3aGl0ZTsgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG4ucGFydGljaXBhbnQtYXZhdGFyOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDA7IH1cbi5wYXJ0aWNpcGFudC1tb3JlIHtcbiAgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpOyBjb2xvcjogIzk0YTNiODtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG4ubWVldGluZy1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IH1cbi5idG4tam9pbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTIpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTtcbiAgY29sb3I6ICNhNWI0ZmM7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5idG4tam9pbjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjIyKTsgfVxuXG4vKiDDosKVwpDDosKVwpAgTU9EQUwgKEVtcGxveWVlKSDDosKVwpDDosKVwpAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHotaW5kZXg6IDEwMDA7XG59XG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxZTI5M2I7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzJweDsgd2lkdGg6IDUyMHB4OyBtYXgtd2lkdGg6IDk1dnc7IG1heC1oZWlnaHQ6IDkwdmg7IG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMjRweCA0OHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbn1cbkBrZXlmcmFtZXMgc2xpZGVVcCB7IGZyb20geyBvcGFjaXR5OjA7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKDI0cHgpOyB9IHRvIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTsgfSB9XG4ubW9kYWwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG4ubW9kYWwtdGl0bGUgeyBmb250LWZhbWlseTogJ1N5bmUnLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IH1cbi5tb2RhbC1jbG9zZSB7XG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBjb2xvcjogIzk0YTNiODsgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxNnB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5tb2RhbC1jbG9zZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMTUpOyBjb2xvcjogI2Y4NzE3MTsgfVxuLm1vZGFsLWJvZHkgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE4cHg7IH1cbi5mb3JtLWdyb3VwIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA4cHg7IH1cbi5mb3JtLWdyb3VwIGxhYmVsIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjb2xvcjogIzk0YTNiODsgfVxuLmZvcm0tZ3JvdXAgaW5wdXQsIC5mb3JtLWdyb3VwIHNlbGVjdCwgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDEwcHggMTRweDsgY29sb3I6ICNmOGZhZmM7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjsgb3V0bGluZTogbm9uZTsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cywgLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzLCAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzBlYTVlOTsgYmFja2dyb3VuZDogcmdiYSgxNCwxNjUsMjMzLDAuMDYpOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNCwxNjUsMjMzLDAuMTUpO1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyLCAuZm9ybS1ncm91cCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIgeyBjb2xvcjogIzQ3NTU2OTsgfVxuLmZvcm0tZ3JvdXAgc2VsZWN0IG9wdGlvbiB7IGJhY2tncm91bmQ6ICMxZTI5M2I7IH1cbi5mb3JtLWdyb3VwIHRleHRhcmVhIHsgcmVzaXplOiB2ZXJ0aWNhbDsgbWluLWhlaWdodDogODBweDsgfVxuLmZvcm0tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGdhcDogMTJweDsgcGFkZGluZy10b3A6IDhweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgTUlTU0lORyBVVElMSVRZIENMQVNTRVMgw6LClMKAw6LClMKAICovXG5cbi8qIFRhc2sgbGlzdCBpdGVtcyAoZGFzaGJvYXJkIHNlY3Rpb24pICovXG4udGFza3MtbGlzdCB7IHBhZGRpbmc6IDA7IH1cbi50YXNrLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi50YXNrLXRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgNHB4IDA7IH1cbi50YXNrLWRlc2NyaXB0aW9uIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiAwIDAgNnB4IDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4udGFzay1tZXRhIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjQ3NDhiOyBmbGV4LXdyYXA6IHdyYXA7IH1cbi5kdWUtZGF0ZSwgLnByaW9yaXR5IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cbi50YXNrLXByb2dyZXNzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyB3aWR0aDogMTIwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4udGFzay1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHsgZmxleDogMTsgfVxuLnByb2dyZXNzLXRleHQgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB3aWR0aDogMzZweDsgdGV4dC1hbGlnbjogcmlnaHQ7IGZsZXgtc2hyaW5rOiAwOyB9XG5cbi8qIFRhc2sgZ3JpZCAodGFjaGVzIHNlY3Rpb24pICovXG4udGFza3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgZ2FwOiAxNnB4O1xufVxuLnRhc2stY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7IHBhZGRpbmc6IDIwcHg7IHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnRhc2stY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogcmdiYSgxNCwxNjUsMjMzLDAuMjUpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLDAsMCwwLjI1KTsgfVxuLnRhc2stY2FyZC5jb21wbGV0ZWQgeyBvcGFjaXR5OiAwLjY7IH1cbi50YXNrLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMTBweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuLnRhc2stY2FyZCAudGFzay10aXRsZSB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMDsgfVxuLnRhc2stcHJpb3JpdHkge1xuICBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMTAwcHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlOyBmbGV4LXNocmluazogMDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4udGFzay1jYXJkIC50YXNrLWRlc2NyaXB0aW9uIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luLWJvdHRvbTogMTRweDsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuLnRhc2stY2FyZCAudGFzay1tZXRhIHsgZ2FwOiAxNHB4OyBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4udGFzay1kdWUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuLnRhc2stc3RhdHVzIHsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyB9XG4udGFzay1wcm9ncmVzcy1zZWN0aW9uIHsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuLnByb2dyZXNzLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4udGFzay1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IH1cbi50YXNrLWFjdGlvbnMgLmJ0bi1hY3Rpb24ge1xuICBmbGV4OiAxOyBwYWRkaW5nOiA4cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBjb2xvcjogIzk0YTNiODtcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDRweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4udGFzay1hY3Rpb25zIC5idG4tYWN0aW9uOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBjb2xvcjogI2Y4ZmFmYzsgfVxuLmJ0bi1jb21wbGV0ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEpICFpbXBvcnRhbnQ7IGNvbG9yOiAjMzRkMzk5ICFpbXBvcnRhbnQ7IGJvcmRlci1jb2xvcjogcmdiYSgxNiwxODUsMTI5LDAuMikgIWltcG9ydGFudDsgfVxuLmJ0bi1jb21wbGV0ZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjIpICFpbXBvcnRhbnQ7IH1cblxuLyogU2VjdGlvbiBoZWFkZXIgKi9cbi5zZWN0aW9uLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuLnNlY3Rpb24taGVhZGVyIC5zZWN0aW9uLXRpdGxlIHsgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYzsgfVxuLnNlY3Rpb24tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuLmZpbHRlci1jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgfVxuLmZpbHRlci1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogOHB4IDEycHg7IGNvbG9yOiAjOTRhM2I4O1xuICBmb250LXNpemU6IDEzcHg7IG91dGxpbmU6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWx0ZXItc2VsZWN0IG9wdGlvbiB7IGJhY2tncm91bmQ6ICMxZTI5M2I7IGNvbG9yOiAjZjhmYWZjOyB9XG5cbi8qIEFjdGl2aXRpZXMgKi9cbi5hY3Rpdml0aWVzLWxpc3QgeyBwYWRkaW5nOiA4cHggMDsgfVxuLmFjdGl2aXR5LWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxNHB4OyBwYWRkaW5nOiAxMnB4IDIwcHg7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yczsgfVxuLmFjdGl2aXR5LWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG4uYWN0aXZpdHktaWNvbiB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxNXB4O1xufVxuLmFjdGl2aXR5LWljb24uYmx1ZSAgIHsgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LDAuMTUpOyBjb2xvcjogIzYwYTVmYTsgfVxuLmFjdGl2aXR5LWljb24uZ3JlZW4gIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTUpOyBjb2xvcjogIzM0ZDM5OTsgfVxuLmFjdGl2aXR5LWljb24ucHVycGxlIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogI2E1YjRmYzsgfVxuLmFjdGl2aXR5LWljb24ub3JhbmdlIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogI2ZiYmYyNDsgfVxuLmFjdGl2aXR5LWNvbnRlbnQgeyBmbGV4OiAxOyB9XG4uYWN0aXZpdHktdGl0bGUgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiAjY2JkNWUxOyBtYXJnaW46IDAgMCAzcHggMDsgfVxuLmFjdGl2aXR5LXRpbWUgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNDc1NTY5OyB9XG4ucmVmcmVzaC1idG4ge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgY29sb3I6ICM5NGEzYjg7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLnJlZnJlc2gtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBjb2xvcjogI2Y4ZmFmYzsgfVxuXG4vKiBNZWV0aW5ncyAqL1xuLm1lZXRpbmdzLXNlY3Rpb24geyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4ubWVldGluZ3MtbGlzdCB7IHBhZGRpbmc6IDA7IH1cbi5tZWV0aW5nLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMjBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cbi5tZWV0aW5nLWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG4ubWVldGluZy1pdGVtOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4ubWVldGluZy10aW1lIHsgdGV4dC1hbGlnbjogY2VudGVyOyBmbGV4LXNocmluazogMDsgbWluLXdpZHRoOiA2MHB4OyB9XG4ubWVldGluZy10aW1lIC50aW1lIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IH1cbi5tZWV0aW5nLXRpbWUgLmR1cmF0aW9uIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IH1cbi5tZWV0aW5nLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5tZWV0aW5nLXRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgNnB4IDA7IH1cbi5tZWV0aW5nLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDE0cHg7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IH1cbi5tZWV0aW5nLWRhdGUsIC5tZWV0aW5nLWxvY2F0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cbi5tZWV0aW5nLWFjdGlvbnMgeyBmbGV4LXNocmluazogMDsgfVxuLmJ0bi1qb2luIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTtcbiAgY29sb3I6ICNhNWI0ZmM7IHBhZGRpbmc6IDdweCAxNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uYnRuLWpvaW46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7IH1cblxuLyogVGltZXNoZWV0IHRhYmxlICovXG4udGltZXNoZWV0LXRhYmxlLWNvbnRhaW5lciB7IG92ZXJmbG93LXg6IGF1dG87IH1cbi50aW1lc2hlZXQtdGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuLnRpbWVzaGVldC10YWJsZSB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XG59XG4udGltZXNoZWV0LXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTRweCAxNnB4OyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjY2JkNWUxO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbn1cbi50aW1lc2hlZXQtdGFibGUgdHI6aG92ZXIgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG5cbi8qIERvY3VtZW50IGNhcmRzICovXG4uZG9jdW1lbnRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7IGdhcDogMTZweDtcbn1cbi5kb2N1bWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDsgcGFkZGluZzogMjBweDsgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTZweDtcbn1cbi5kb2N1bWVudC1jYXJkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LDE2NSwyMzMsMC4zKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7IH1cbi5kb2MtaWNvbiB7IHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjEpOyBjb2xvcjogIzM4YmRmODsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMjBweDsgZmxleC1zaHJpbms6IDA7IH1cbi5kb2MtaW5mbyB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLmRvYy1uYW1lIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgNHB4IDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4uZG9jLW1ldGEgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB9XG4uZG9jLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgZmxleC1zaHJpbms6IDA7IH1cbi5idG4tZG93bmxvYWQge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgY29sb3I6ICM5NGEzYjg7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmJ0bi1kb3dubG9hZDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6ICMzOGJkZjg7IH1cblxuXG4vKiDDosKUwoDDosKUwoAgQkFTRSDDosKUwoDDosKUwoAgKi9cbi5lbXBsb3llZS1kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiDDosKUwoDDosKUwoAgSEVBREVSIMOiwpTCgMOiwpTCgCAqL1xuLmRhc2hib2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LDIzLDQyLDAuOTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIHBhZGRpbmc6IDAgMjhweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IHotaW5kZXg6IDEwMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5oZWFkZXItbGVmdCAuZGFzaGJvYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZjhmYWZjO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLmhlYWRlci1sZWZ0IC5kYXNoYm9hcmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4tbm90aWZpY2F0aW9uLFxuLmJ0bi1wcm9maWxlLFxuLmJ0bi1sb2dvdXQge1xuICB3aWR0aDogMzhweDsgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBmb250LXNpemU6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgY29sb3I6ICM5NGEzYjg7XG59XG5cbi5idG4tbm90aWZpY2F0aW9uOmhvdmVyLFxuLmJ0bi1wcm9maWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBjb2xvcjogI2Y4ZmFmYztcbn1cblxuLmJ0bi1sb2dvdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjE1KTtcbiAgY29sb3I6ICNmODcxNzE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzksNjgsNjgsMC4yKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtNHB4OyByaWdodDogLTRweDtcbiAgYmFja2dyb3VuZDogI2VmNDQ0NDsgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBOQVYgw6LClMKAw6LClMKAICovXG4uZGFzaGJvYXJkLW5hdiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsMjMsNDIsMC44KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIHBhZGRpbmc6IDAgMjhweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xufVxuXG4ubmF2LWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDsgZ2FwOiA0cHg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDsgY29sb3I6ICM2NDc0OGI7XG4gIGN1cnNvcjogcG9pbnRlcjsgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHsgY29sb3I6ICNmOGZhZmM7IH1cblxuLm5hdi1pdGVtLmFjdGl2ZSxcbi5uYXYtaXRlbVtjbGFzcyo9XCJhY3RpdmVcIl0ge1xuICBjb2xvcjogI2E1YjRmYztcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYzNjZmMTtcbn1cblxuLm5hdi1pdGVtIGkgeyBmb250LXNpemU6IDE1cHg7IH1cblxuLyogw6LClMKAw6LClMKAIENPTlRFTlQgw6LClMKAw6LClMKAICovXG4uZGFzaGJvYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyOHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU0VDVElPTiBBTklNQVRJT04gw6LClMKAw6LClMKAICovXG4uc2VjdGlvbiwgLmZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVVcCAwLjRzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSkgYm90aDtcbn1cbkBrZXlmcmFtZXMgZmFkZVVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBTVEFUUyDDosKUwoDDosKUwoAgKi9cbi5zdGF0cy1zZWN0aW9uIHsgbWFyZ2luLWJvdHRvbTogMjhweDsgfVxuLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3RhdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDsgcGFkZGluZzogMjJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cbi5zdGF0LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjMpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4uc3RhdC1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDsgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDsgY29sb3I6IHdoaXRlOyBmbGV4LXNocmluazogMDtcbn1cbi5zdGF0LWljb24uYmx1ZSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjM2I4MmY2LCMxZDRlZDgpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTksMTMwLDI0NiwwLjMpOyB9XG4uc3RhdC1pY29uLmdyZWVuICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzEwYjk4MSwjMDU5NjY5KTsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE2LDE4NSwxMjksMC4zKTsgfVxuLnN0YXQtaWNvbi5wdXJwbGUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM4YjVjZjYsIzYzNjZmMSk7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMzksOTIsMjQ2LDAuMyk7IH1cbi5zdGF0LWljb24ub3JhbmdlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjZjU5ZTBiLCNkOTc3MDYpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjQ1LDE1OCwxMSwwLjMpOyB9XG5cbi5zdGF0LWNvbnRlbnQgaDMge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDAgMCA0cHggMDtcbn1cbi5zdGF0LWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTsgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogw6LClMKAw6LClMKAIENBUkRTIMOiwpTCgMOiwpTCgCAqL1xuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4OyBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMik7IH1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDA7XG59XG5cbi5jb250ZW50LWdyaWQge1xuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMjBweDsgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHsgLmNvbnRlbnQtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cblxuLyogw6LClMKAw6LClMKAIFRBU0sgSVRFTVMgw6LClMKAw6LClMKAICovXG4udGFzay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG59XG4udGFzay1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgfVxuLnRhc2staXRlbTpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG4vKiDDosKUwoDDosKUwoAgQkFER0VTIMOiwpTCgMOiwpTCgCAqL1xuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwO1xufVxuLmJhZGdlLXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xNSk7IGNvbG9yOiAjMzRkMzk5OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTsgfVxuLmJhZGdlLXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiAjZmJiZjI0OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsMC4yKTsgfVxuLmJhZGdlLWRhbmdlciAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjE1KTsgIGNvbG9yOiAjZjg3MTcxOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjIpOyB9XG4uYmFkZ2UtaW5mbyAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6ICMzOGJkZjg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQsMTY1LDIzMywwLjIpOyB9XG4uYmFkZ2UtcHVycGxlICB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6ICNhNWI0ZmM7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjIpOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBCVVRUT05TIMOiwpTCgMOiwpTCgCAqL1xuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjNjM2NmYxLCM0ZjQ2ZTUpO1xuICBjb2xvcjogd2hpdGU7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogMTBweCAyMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDk5LDEwMiwyNDEsMC4zKTtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDk5LDEwMiwyNDEsMC40KTsgfVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGNvbG9yOiAjY2JkNWUxO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDsgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgY29sb3I6ICNmOGZhZmM7IH1cblxuLyogw6LClMKAw6LClMKAIEZPUk1TIMOiwpTCgMOiwpTCgCAqL1xuLmZvcm0tZ3JvdXAgeyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjOTRhM2I4OyBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZm9ybS1jb250cm9sLCAuZm9ybS1zZWxlY3QsIC5mb3JtLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogMTBweCAxNHB4O1xuICBjb2xvcjogI2Y4ZmFmYzsgZm9udC1zaXplOiAxNHB4OyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1zZWxlY3Q6Zm9jdXMsIC5mb3JtLXRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMGVhNWU5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4wNik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE0LDE2NSwyMzMsMC4xNSk7XG59XG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNDc1NTY5OyB9XG4uZm9ybS1zZWxlY3Qgb3B0aW9uIHsgYmFja2dyb3VuZDogIzFlMjkzYjsgY29sb3I6ICNmOGZhZmM7IH1cblxuLyogw6LClMKAw6LClMKAIFRBQkxFUyDDosKUwoDDosKUwoAgKi9cbi50YWJsZS1jb250YWluZXIgeyBvdmVyZmxvdy14OiBhdXRvOyB9XG50YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XG59XG50ZCB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogI2NiZDVlMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cbnRyOmhvdmVyIHRkIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgfVxudHI6bGFzdC1jaGlsZCB0ZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLyogw6LClMKAw6LClMKAIFBST0dSRVNTIMOiwpTCgMOiwpTCgCAqL1xuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogNnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpOyBib3JkZXItcmFkaXVzOiAzcHg7IG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGVhNWU5LCAjMmRkNGJmKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBNT0RBTCDDosKUwoDDosKUwoAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7IGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZWFzZTtcbn1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6IDA7IH0gdG8geyBvcGFjaXR5OiAxOyB9IH1cblxuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogIzFlMjkzYjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAzMnB4O1xuICB3aWR0aDogNTIwcHg7IG1heC13aWR0aDogOTV2dzsgbWF4LWhlaWdodDogOTB2aDsgb3ZlcmZsb3cteTogYXV0bztcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDQ4cHggcmdiYSgwLDAsMCwwLjUpO1xufVxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBBTEVSVFMgw6LClMKAw6LClMKAICovXG4uYWxlcnQge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgZm9udC1zaXplOiAxNHB4O1xufVxuLmFsZXJ0LWRhbmdlciB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LDAuMik7IGNvbG9yOiAjZjg3MTcxOyB9XG4uYWxlcnQtc3VjY2VzcyB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTsgY29sb3I6ICMzNGQzOTk7IH1cblxuLyogw6LClMKAw6LClMKAIFNFQ1RJT04gSEVBREVSIMOiwpTCgMOiwpTCgCAqL1xuLnNlY3Rpb24taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYztcbn1cblxuLyogw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgCAqL1xuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA2MHB4IDIwcHg7IGNvbG9yOiAjNjQ3NDhiO1xufVxuLmVtcHR5LXN0YXRlIGkgeyBmb250LXNpemU6IDQ4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IG9wYWNpdHk6IDAuMzsgZGlzcGxheTogYmxvY2s7IH1cbi5lbXB0eS1zdGF0ZSBoMyB7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM5NGEzYjg7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgU0NST0xMQkFSIMOiwpTCgMOiwpTCgCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA1cHg7IGhlaWdodDogNXB4OyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTsgfVxuXG4vKiDDosKUwoDDosKUwoAgRE9DVU1FTlQgQ0FSRFMgw6LClMKAw6LClMKAICovXG4uZG9jLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4O1xufVxuLmRvYy1jYXJkOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LDE2NSwyMzMsMC4zKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4yNSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBNRUVUSU5HIENBUkRTIMOiwpTCgMOiwpTCgCAqL1xuLm1lZXRpbmctY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm1lZXRpbmctY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLyogw6LClMKAw6LClMKAIFRJTUVTSEVFVCDDosKUwoDDosKUwoAgKi9cbi50aW1lc2hlZXQtcm93IHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xufVxuLnRpbWVzaGVldC1yb3c6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLyogw6LClMKAw6LClMKAIFNLSUxMUyDDosKUwoDDosKUwoAgKi9cbi5za2lsbC1iYXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uc2tpbGwtbGFiZWwgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjOTRhM2I4OyB3aWR0aDogMTIwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uc2tpbGwtdHJhY2sge1xuICBmbGV4OiAxOyBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnNraWxsLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjNjM2NmYxLCMwZWE1ZTkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7IHRyYW5zaXRpb246IHdpZHRoIDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbn1cbi5za2lsbC12YWx1ZSB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2NDc0OGI7IHdpZHRoOiAzNnB4OyB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4vKiDDosKUwoDDosKUwoAgUkVTUE9OU0lWRSDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGFzaGJvYXJkLWhlYWRlciB7IHBhZGRpbmc6IDAgMTZweDsgfVxuICAuZGFzaGJvYXJkLW5hdiB7IHBhZGRpbmc6IDAgMTZweDsgfVxuICAuZGFzaGJvYXJkLWNvbnRlbnQgeyBwYWRkaW5nOiAxNnB4OyB9XG4gIC5zdGF0cy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyB9XG4gIC5jb250ZW50LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAubmF2LWl0ZW0gc3BhbiB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3287:
/*!********************************************************************!*\
  !*** ./src/app/components/employee/employee-pointage.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeePointageComponent: () => (/* binding */ EmployeePointageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/attendance.service */ 9425);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast.service */ 8397);









function EmployeePointageComponent_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " D\u00E9part");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatTime(ctx_r0.todayRecord.check_out_time));
  }
}
function EmployeePointageComponent_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Heures");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.todayRecord.total_hours, "h");
  }
}
function EmployeePointageComponent_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Retard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.todayRecord.late_minutes, " min");
  }
}
function EmployeePointageComponent_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Heures sup.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("+", (ctx_r0.todayRecord.overtime_minutes / 60).toFixed(1), "h");
  }
}
function EmployeePointageComponent_div_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " En pr\u00E9sence depuis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.elapsedTime);
  }
}
function EmployeePointageComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Arriv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EmployeePointageComponent_div_14_div_7_Template, 6, 1, "div", 44)(8, EmployeePointageComponent_div_14_div_8_Template, 6, 1, "div", 44)(9, EmployeePointageComponent_div_14_div_9_Template, 6, 1, "div", 45)(10, EmployeePointageComponent_div_14_div_10_Template, 6, 1, "div", 44)(11, EmployeePointageComponent_div_14_div_11_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatTime(ctx_r0.todayRecord.check_in_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.todayRecord == null ? null : ctx_r0.todayRecord.check_out_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.todayRecord == null ? null : ctx_r0.todayRecord.total_hours) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.todayRecord == null ? null : ctx_r0.todayRecord.late_minutes) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.todayRecord == null ? null : ctx_r0.todayRecord.overtime_minutes) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.todayRecord == null ? null : ctx_r0.todayRecord.check_in_time) && !(ctx_r0.todayRecord == null ? null : ctx_r0.todayRecord.check_out_time));
  }
}
function EmployeePointageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Horaire : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.todayRecord.scheduled_start == null ? null : ctx_r0.todayRecord.scheduled_start.substring(0, 5), " \u2013 ", ctx_r0.todayRecord.scheduled_end == null ? null : ctx_r0.todayRecord.scheduled_end.substring(0, 5), "");
  }
}
function EmployeePointageComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeePointageComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.doCheckIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "En cours..." : "Pointer l'arriv\u00E9e", " ");
  }
}
function EmployeePointageComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeePointageComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.doCheckOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "En cours..." : "Pointer le d\u00E9part", " ");
  }
}
function EmployeePointageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Journ\u00E9e compl\u00E8te enregistr\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployeePointageComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Pointage disponible \u00E0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.checkInWindowTime);
  }
}
function EmployeePointageComponent_div_55_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const leave_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", leave_r4.response_note, " ");
  }
}
function EmployeePointageComponent_div_55_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68)(1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 70)(4, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EmployeePointageComponent_div_55_div_3_div_10_Template, 3, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const leave_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "leave-" + leave_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.formatDate(leave_r4.start_date), " \u2192 ", ctx_r0.formatDate(leave_r4.end_date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.leaveTypeLabel(leave_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.leaveStatusLabel(leave_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", leave_r4.days_count, "j");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", leave_r4.response_note);
  }
}
function EmployeePointageComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Mes demandes r\u00E9centes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EmployeePointageComponent_div_55_div_3_Template, 11, 7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.myLeaves.slice(0, 5));
  }
}
function EmployeePointageComponent_div_60_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.monthStats.late_days, " retards");
  }
}
function EmployeePointageComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EmployeePointageComponent_div_60_span_5_Template, 2, 1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.monthStats.present_days, " pr\u00E9sents");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.monthStats.absent_days, " absents");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.monthStats.late_days > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (+ctx_r0.monthStats.total_hours).toFixed(0), "h travaill\u00E9es");
  }
}
function EmployeePointageComponent_div_62_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatTime(record_r5.check_in_time));
  }
}
function EmployeePointageComponent_div_62_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployeePointageComponent_div_62_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatTime(record_r5.check_out_time));
  }
}
function EmployeePointageComponent_div_62_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployeePointageComponent_div_62_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", record_r5.total_hours, "h");
  }
}
function EmployeePointageComponent_div_62_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("+", record_r5.late_minutes, "min");
  }
}
function EmployeePointageComponent_div_62_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployeePointageComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83)(1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EmployeePointageComponent_div_62_span_4_Template, 2, 1, "span", 86)(5, EmployeePointageComponent_div_62_span_5_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EmployeePointageComponent_div_62_span_7_Template, 2, 1, "span", 86)(8, EmployeePointageComponent_div_62_span_8_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EmployeePointageComponent_div_62_div_9_Template, 2, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EmployeePointageComponent_div_62_div_13_Template, 2, 1, "div", 92)(14, EmployeePointageComponent_div_62_div_14_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "status-" + (record_r5.status || "absent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatDate(record_r5.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", record_r5.check_in_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !record_r5.check_in_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", record_r5.check_out_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !record_r5.check_out_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", record_r5.total_hours > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", record_r5.status || "absent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.statusLabels[record_r5.status || "absent"] || record_r5.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", record_r5.late_minutes > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", record_r5.manager_validated);
  }
}
function EmployeePointageComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Aucun enregistrement ce mois-ci ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class EmployeePointageComponent {
  // Returns true once the current time reaches scheduled_start minus 1 hour.
  // Falls back to always-open when no schedule is configured.
  get checkInWindowOpen() {
    const start = this.todayRecord?.scheduled_start;
    if (!start) return true;
    const [h, m] = start.split(':').map(Number);
    const windowStart = new Date();
    windowStart.setHours(h, m, 0, 0);
    windowStart.setTime(windowStart.getTime() - 60 * 60 * 1000);
    return this.nowMs >= windowStart.getTime();
  }
  get checkInWindowTime() {
    const start = this.todayRecord?.scheduled_start;
    if (!start) return '';
    const [h, m] = start.split(':').map(Number);
    const windowStart = new Date();
    windowStart.setHours(h - 1, m, 0, 0);
    return windowStart.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  get canCheckIn() {
    return !this.todayRecord?.check_in_time && this.checkInWindowOpen;
  }
  get canCheckOut() {
    return !!this.todayRecord?.check_in_time && !this.todayRecord?.check_out_time;
  }
  get isDone() {
    return !!this.todayRecord?.check_in_time && !!this.todayRecord?.check_out_time;
  }
  get statusClass() {
    if (!this.todayRecord?.check_in_time) return 'idle';
    if (this.isDone) return 'done';
    return this.todayRecord?.status || 'present';
  }
  get statusIcon() {
    const m = {
      idle: 'bi-clock',
      present: 'bi-person-check-fill',
      late: 'bi-exclamation-circle-fill',
      done: 'bi-check-circle-fill',
      absent: 'bi-person-x-fill',
      leave: 'bi-calendar-check'
    };
    return m[this.statusClass] || 'bi-clock';
  }
  get statusLabel() {
    if (!this.todayRecord?.check_in_time) return 'Non pointé';
    if (this.isDone) return 'Journée terminée';
    if (this.todayRecord?.status === 'late') return `En retard (${this.todayRecord.late_minutes} min)`;
    return 'En présence';
  }
  constructor(attendanceService, toast) {
    this.attendanceService = attendanceService;
    this.toast = toast;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.loading = false;
    this.todayRecord = null;
    this.history = [];
    this.monthStats = null;
    this.myLeaves = [];
    this.elapsedTime = '00:00:00';
    this.currentTime = '';
    this.todayLabel = '';
    this.fullDate = '';
    this.nowMs = Date.now();
    this.leaveForm = {
      type: 'vacation',
      start_date: '',
      end_date: '',
      reason: ''
    };
    this.statusLabels = {
      present: 'Présent',
      late: 'En retard',
      absent: 'Absent',
      leave: 'Congé',
      half_day: 'Demi-journée',
      holiday: 'Férié'
    };
  }
  ngOnInit() {
    this.updateDateTime();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      this.updateDateTime();
      this.updateElapsed();
    });
    this.loadTodayStatus();
    this.loadHistory();
    this.loadMyLeaves();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  updateDateTime() {
    const now = new Date();
    this.nowMs = now.getTime();
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    this.todayLabel = days[now.getDay()];
    this.fullDate = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    this.currentTime = now.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  updateElapsed() {
    if (!this.todayRecord?.check_in_time || this.todayRecord?.check_out_time) return;
    const diff = Math.floor((Date.now() - new Date(this.todayRecord.check_in_time).getTime()) / 1000);
    const h = Math.floor(diff / 3600).toString().padStart(2, '0');
    const m = Math.floor(diff % 3600 / 60).toString().padStart(2, '0');
    const s = (diff % 60).toString().padStart(2, '0');
    this.elapsedTime = `${h}:${m}:${s}`;
  }
  loadTodayStatus() {
    this.attendanceService.getTodayStatus(this.employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        if (res.success) {
          this.todayRecord = res.data.status === 'not_checked_in' ? {
            scheduled_start: res.data.schedule?.start_time,
            scheduled_end: res.data.schedule?.end_time
          } : res.data;
        }
      },
      error: () => {}
    });
  }
  loadHistory() {
    this.attendanceService.getHistory(this.employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        if (res.success) {
          this.history = res.data.records || [];
          this.monthStats = res.data.stats;
        }
      },
      error: () => {}
    });
  }
  loadMyLeaves() {
    this.attendanceService.getMyLeaves(this.employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        if (res.success) this.myLeaves = res.data || [];
      },
      error: () => {}
    });
  }
  doCheckIn() {
    this.loading = true;
    this.attendanceService.checkIn(this.employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        this.loading = false;
        if (res.success) {
          this.toast.success(res.message);
          this.loadTodayStatus();
          this.loadHistory();
        }
      },
      error: err => {
        this.loading = false;
        this.toast.error(err?.error?.message || 'Erreur lors du pointage d\'arrivée.');
      }
    });
  }
  doCheckOut() {
    this.loading = true;
    this.attendanceService.checkOut(this.employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        this.loading = false;
        if (res.success) {
          this.toast.success(res.message);
          this.loadTodayStatus();
          this.loadHistory();
        }
      },
      error: err => {
        this.loading = false;
        this.toast.error(err?.error?.message || 'Erreur lors du pointage de départ.');
      }
    });
  }
  submitLeave() {
    if (!this.leaveForm.start_date || !this.leaveForm.end_date) {
      this.toast.warning('Veuillez saisir les dates de congé.');
      return;
    }
    this.loading = true;
    this.attendanceService.requestLeave(this.employeeId, this.leaveForm).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        this.loading = false;
        if (res.success) {
          this.toast.success(res.message);
          this.leaveForm = {
            type: 'vacation',
            start_date: '',
            end_date: '',
            reason: ''
          };
          this.loadMyLeaves();
        }
      },
      error: err => {
        this.loading = false;
        this.toast.error(err?.error?.message || 'Erreur lors de la demande de congé.');
      }
    });
  }
  formatTime(dt) {
    if (!dt) return '—';
    return new Date(dt).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  formatDate(d) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short'
    });
  }
  leaveTypeLabel(type) {
    return {
      vacation: 'Congés',
      sick: 'Maladie',
      personal: 'Personnel',
      maternity: 'Maternité',
      other: 'Autre'
    }[type] || type;
  }
  leaveStatusLabel(status) {
    return {
      pending: 'En attente',
      approved: 'Approuvé',
      rejected: 'Refusé'
    }[status] || status;
  }
  static {
    this.ɵfac = function EmployeePointageComponent_Factory(t) {
      return new (t || EmployeePointageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_attendance_service__WEBPACK_IMPORTED_MODULE_0__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmployeePointageComponent,
      selectors: [["app-employee-pointage"]],
      inputs: {
        employeeId: "employeeId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 64,
      vars: 21,
      consts: [[1, "pointage-wrapper"], [1, "pointage-card"], [1, "pointage-header"], [1, "pointage-date"], [1, "day-label"], [1, "full-date"], [1, "live-clock"], [1, "status-banner", 3, "ngClass"], [1, "bi", 3, "ngClass"], ["class", "session-info", 4, "ngIf"], ["class", "schedule-info", 4, "ngIf"], [1, "pointage-actions"], ["class", "btn-checkin", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-checkout", 3, "disabled", "click", 4, "ngIf"], ["class", "done-badge", 4, "ngIf"], ["class", "waiting-badge", 4, "ngIf"], [1, "leave-card"], [1, "card-title"], [1, "bi", "bi-calendar-x"], [1, "leave-form"], [1, "form-row"], [1, "form-group"], [3, "ngModelChange", "ngModel"], ["value", "vacation"], ["value", "sick"], ["value", "personal"], ["value", "other"], [1, "form-row", "two-cols"], ["type", "date", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Raison de la demande...", 3, "ngModelChange", "ngModel"], [1, "btn-leave", 3, "click", "disabled"], [1, "bi", "bi-send"], ["class", "my-leaves", 4, "ngIf"], [1, "history-card"], [1, "bi", "bi-calendar3"], ["class", "history-stats", 4, "ngIf"], [1, "history-list"], ["class", "history-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "no-history", 4, "ngIf"], [1, "session-info"], [1, "info-row"], [1, "info-label"], [1, "bi", "bi-box-arrow-in-right"], [1, "info-value"], ["class", "info-row", 4, "ngIf"], ["class", "info-row late", 4, "ngIf"], ["class", "live-timer", 4, "ngIf"], [1, "bi", "bi-box-arrow-right"], [1, "bi", "bi-clock"], [1, "info-value", "accent"], [1, "info-row", "late"], [1, "bi", "bi-exclamation-triangle"], [1, "info-value", "danger"], [1, "bi", "bi-plus-circle"], [1, "info-value", "success"], [1, "live-timer"], [1, "bi", "bi-clock-history"], [1, "schedule-info"], [1, "schedule-label"], [1, "btn-checkin", 3, "click", "disabled"], [1, "btn-checkout", 3, "click", "disabled"], [1, "done-badge"], [1, "bi", "bi-check-circle-fill"], [1, "waiting-badge"], [1, "bi", "bi-hourglass-split"], [1, "my-leaves"], [1, "leaves-title"], ["class", "leave-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "leave-item", 3, "ngClass"], [1, "leave-dates"], [1, "leave-meta"], [1, "leave-type-badge"], [1, "leave-status-badge"], [1, "leave-days"], ["class", "leave-response", 4, "ngIf"], [1, "leave-response"], [1, "bi", "bi-chat-left-text"], [1, "history-stats"], [1, "stat-chip", "present"], [1, "stat-chip", "absent"], ["class", "stat-chip late", 4, "ngIf"], [1, "stat-chip", "hours"], [1, "stat-chip", "late"], [1, "history-item", 3, "ngClass"], [1, "h-date"], [1, "h-times"], [4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "bi", "bi-arrow-right"], ["class", "h-hours", 4, "ngIf"], [1, "h-status"], [1, "status-dot", 3, "ngClass"], ["class", "h-late", 4, "ngIf"], ["class", "h-validated", 4, "ngIf"], [1, "no-data"], [1, "h-hours"], [1, "h-late"], [1, "h-validated"], ["title", "Valid\u00E9 par le manager", 1, "bi", "bi-patch-check-fill", "text-success"], [1, "no-history"]],
      template: function EmployeePointageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EmployeePointageComponent_div_14_Template, 12, 6, "div", 9)(15, EmployeePointageComponent_div_15_Template, 5, 2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EmployeePointageComponent_button_17_Template, 3, 2, "button", 12)(18, EmployeePointageComponent_button_18_Template, 3, 2, "button", 13)(19, EmployeePointageComponent_div_19_Template, 3, 0, "div", 14)(20, EmployeePointageComponent_div_20_Template, 5, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Demande de cong\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmployeePointageComponent_Template_select_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.leaveForm.type, $event) || (ctx.leaveForm.type = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Cong\u00E9s pay\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Arr\u00EAt maladie");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Cong\u00E9 personnel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Autre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 27)(40, "div", 21)(41, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Date d\u00E9but");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmployeePointageComponent_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.leaveForm.start_date, $event) || (ctx.leaveForm.start_date = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 21)(45, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Date fin");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmployeePointageComponent_Template_input_ngModelChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.leaveForm.end_date, $event) || (ctx.leaveForm.end_date = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 21)(49, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Motif (facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "textarea", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmployeePointageComponent_Template_textarea_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.leaveForm.reason, $event) || (ctx.leaveForm.reason = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeePointageComponent_Template_button_click_52_listener() {
            return ctx.submitLeave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Soumettre la demande ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, EmployeePointageComponent_div_55_Template, 4, 1, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 33)(57, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Historique du mois ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, EmployeePointageComponent_div_60_Template, 8, 4, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, EmployeePointageComponent_div_62_Template, 15, 11, "div", 37)(63, EmployeePointageComponent_div_63_Template, 3, 0, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.todayLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.fullDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentTime);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.statusClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.statusIcon);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statusLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.todayRecord == null ? null : ctx.todayRecord.check_in_time);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.todayRecord == null ? null : ctx.todayRecord.scheduled_start);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.canCheckIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.canCheckOut);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDone);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.canCheckIn && !ctx.canCheckOut && !ctx.isDone);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.leaveForm.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.leaveForm.start_date);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.leaveForm.end_date);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.leaveForm.reason);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading || !ctx.leaveForm.start_date || !ctx.leaveForm.end_date);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myLeaves.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.monthStats);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.history.slice(0, 10));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.history.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
      styles: [".pointage-wrapper[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; max-width: 700px; }\n\n    \n\n    .pointage-card[_ngcontent-%COMP%] {\n      background: #1a1a2e; border: 1px solid rgba(255,255,255,0.08);\n      border-radius: 16px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n    }\n    .pointage-header[_ngcontent-%COMP%] {\n      display: flex; justify-content: space-between; align-items: center;\n      margin-bottom: 20px;\n    }\n    .day-label[_ngcontent-%COMP%] { display: block; color: rgba(255,255,255,0.5); font-size: .75rem; text-transform: uppercase; letter-spacing: 1px; }\n    .full-date[_ngcontent-%COMP%] { font-size: 1rem; font-weight: 600; color: #e2e8f0; }\n    .live-clock[_ngcontent-%COMP%] { font-size: 2rem; font-weight: 700; color: #e2e8f0; font-variant-numeric: tabular-nums; }\n\n    \n\n    .status-banner[_ngcontent-%COMP%] {\n      display: flex; align-items: center; gap: 8px;\n      padding: 10px 16px; border-radius: 10px; margin-bottom: 20px;\n      font-weight: 600; font-size: .875rem;\n    }\n    .status-banner.present[_ngcontent-%COMP%] { background: rgba(34,197,94,.15); color: #22c55e; border: 1px solid rgba(34,197,94,.3); }\n    .status-banner.late[_ngcontent-%COMP%]    { background: rgba(245,158,11,.15); color: #f59e0b; border: 1px solid rgba(245,158,11,.3); }\n    .status-banner.absent[_ngcontent-%COMP%]  { background: rgba(239,68,68,.15);  color: #ef4444; border: 1px solid rgba(239,68,68,.3); }\n    .status-banner.done[_ngcontent-%COMP%]    { background: rgba(59,130,246,.15); color: #3b82f6; border: 1px solid rgba(59,130,246,.3); }\n    .status-banner.idle[_ngcontent-%COMP%]    { background: rgba(107,114,128,.15); color: #9ca3af; border: 1px solid rgba(107,114,128,.2); }\n\n    \n\n    .session-info[_ngcontent-%COMP%] { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 16px; margin-bottom: 16px; }\n    .info-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }\n    .info-row[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n    .info-label[_ngcontent-%COMP%] { color: rgba(255,255,255,0.5); font-size: .85rem; display: flex; align-items: center; gap: 6px; }\n    .info-value[_ngcontent-%COMP%] { font-weight: 600; color: #e2e8f0; }\n    .info-value.accent[_ngcontent-%COMP%]  { color: #3b82f6; }\n    .info-value.danger[_ngcontent-%COMP%]  { color: #ef4444; }\n    .info-value.success[_ngcontent-%COMP%] { color: #22c55e; }\n    .live-timer[_ngcontent-%COMP%] {\n      margin-top: 12px; padding: 8px 12px; background: rgba(59,130,246,.1);\n      border-radius: 8px; color: #93c5fd; font-size: .85rem;\n      display: flex; align-items: center; gap: 6px;\n    }\n\n    \n\n    .schedule-info[_ngcontent-%COMP%] { color: rgba(255,255,255,0.4); font-size: .8rem; margin-bottom: 20px; }\n    .schedule-label[_ngcontent-%COMP%] { font-weight: 600; }\n\n    \n\n    .pointage-actions[_ngcontent-%COMP%] { display: flex; gap: 12px; flex-wrap: wrap; }\n    .btn-checkin[_ngcontent-%COMP%], .btn-checkout[_ngcontent-%COMP%] {\n      flex: 1; padding: 14px 20px; border: none; border-radius: 10px;\n      font-size: .9rem; font-weight: 600; cursor: pointer;\n      display: flex; align-items: center; justify-content: center; gap: 8px;\n      transition: all 150ms;\n    }\n    .btn-checkin[_ngcontent-%COMP%]  { background: linear-gradient(135deg, #22c55e, #16a34a); color: #fff; }\n    .btn-checkin[_ngcontent-%COMP%]:hover  { filter: brightness(1.1); transform: translateY(-1px); }\n    .btn-checkout[_ngcontent-%COMP%] { background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; }\n    .btn-checkout[_ngcontent-%COMP%]:hover { filter: brightness(1.1); transform: translateY(-1px); }\n    .btn-checkin[_ngcontent-%COMP%]:disabled, .btn-checkout[_ngcontent-%COMP%]:disabled { opacity: .5; cursor: not-allowed; transform: none; }\n    .done-badge[_ngcontent-%COMP%] {\n      flex: 1; padding: 14px; text-align: center; border-radius: 10px;\n      background: rgba(59,130,246,.1); color: #60a5fa;\n      font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;\n    }\n    .waiting-badge[_ngcontent-%COMP%] {\n      flex: 1; padding: 14px; text-align: center; border-radius: 10px;\n      background: rgba(245,158,11,.1); color: #fbbf24;\n      font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 8px;\n      font-size: .9rem;\n    }\n\n    \n\n    .leave-card[_ngcontent-%COMP%], .history-card[_ngcontent-%COMP%] {\n      background: #1a1a2e; border: 1px solid rgba(255,255,255,0.08);\n      border-radius: 16px; padding: 24px;\n    }\n    .card-title[_ngcontent-%COMP%] {\n      font-weight: 700; color: #e2e8f0; margin-bottom: 16px;\n      display: flex; align-items: center; gap: 8px; flex-wrap: wrap;\n    }\n    .history-stats[_ngcontent-%COMP%] { display: flex; gap: 6px; flex-wrap: wrap; margin-left: auto; }\n    .stat-chip[_ngcontent-%COMP%] {\n      padding: 3px 10px; border-radius: 20px; font-size: .75rem; font-weight: 600;\n    }\n    .stat-chip.present[_ngcontent-%COMP%] { background: rgba(34,197,94,.2); color: #22c55e; }\n    .stat-chip.absent[_ngcontent-%COMP%]  { background: rgba(239,68,68,.2);  color: #ef4444; }\n    .stat-chip.late[_ngcontent-%COMP%]    { background: rgba(245,158,11,.2); color: #f59e0b; }\n    .stat-chip.hours[_ngcontent-%COMP%]   { background: rgba(59,130,246,.2); color: #60a5fa; }\n\n    \n\n    .leave-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n    .form-row[_ngcontent-%COMP%] { display: flex; gap: 12px; }\n    .form-row.two-cols[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] { flex: 1; }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n    .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color: rgba(255,255,255,0.6); font-size: .8rem; font-weight: 500; }\n    .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);\n      border-radius: 8px; padding: 10px 12px; color: #e2e8f0; font-size: .875rem;\n    }\n    .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { resize: vertical; }\n    .btn-leave[_ngcontent-%COMP%] {\n      padding: 12px; background: linear-gradient(135deg, #8b5cf6, #6d28d9);\n      color: #fff; border: none; border-radius: 10px; font-weight: 600;\n      cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;\n    }\n    .btn-leave[_ngcontent-%COMP%]:disabled { opacity: .5; cursor: not-allowed; }\n\n    \n\n    .my-leaves[_ngcontent-%COMP%] { margin-top: 20px; }\n    .leaves-title[_ngcontent-%COMP%] { color: rgba(255,255,255,0.5); font-size: .8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }\n    .leave-item[_ngcontent-%COMP%] { padding: 10px 12px; border-radius: 8px; margin-bottom: 8px; border-left: 3px solid transparent; }\n    .leave-item.leave-pending[_ngcontent-%COMP%]  { background: rgba(245,158,11,.08); border-color: #f59e0b; }\n    .leave-item.leave-approved[_ngcontent-%COMP%] { background: rgba(34,197,94,.08);  border-color: #22c55e; }\n    .leave-item.leave-rejected[_ngcontent-%COMP%] { background: rgba(239,68,68,.08);  border-color: #ef4444; }\n    .leave-dates[_ngcontent-%COMP%] { font-weight: 600; color: #e2e8f0; font-size: .875rem; margin-bottom: 4px; }\n    .leave-meta[_ngcontent-%COMP%] { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }\n    .leave-type-badge[_ngcontent-%COMP%], .leave-status-badge[_ngcontent-%COMP%], .leave-days[_ngcontent-%COMP%] {\n      padding: 2px 8px; border-radius: 20px; font-size: .75rem; font-weight: 500;\n      background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6);\n    }\n    .leave-response[_ngcontent-%COMP%] { margin-top: 4px; font-size: .8rem; color: rgba(255,255,255,0.4); font-style: italic; }\n\n    \n\n    .history-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n    .history-item[_ngcontent-%COMP%] {\n      display: grid; grid-template-columns: 100px 1fr auto auto auto auto;\n      align-items: center; gap: 8px;\n      padding: 10px 12px; border-radius: 8px;\n      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);\n      font-size: .85rem;\n    }\n    .history-item.status-present[_ngcontent-%COMP%] { border-left: 3px solid #22c55e; }\n    .history-item.status-late[_ngcontent-%COMP%]    { border-left: 3px solid #f59e0b; }\n    .history-item.status-absent[_ngcontent-%COMP%]  { border-left: 3px solid #ef4444; opacity: .7; }\n    .history-item.status-leave[_ngcontent-%COMP%]   { border-left: 3px solid #8b5cf6; }\n    .h-date[_ngcontent-%COMP%] { color: rgba(255,255,255,0.7); font-weight: 600; font-size: .8rem; }\n    .h-times[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,0.6); }\n    .no-data[_ngcontent-%COMP%] { color: rgba(255,255,255,0.25); }\n    .h-hours[_ngcontent-%COMP%] { color: #60a5fa; font-weight: 600; }\n    .h-status[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 5px; }\n    .status-dot[_ngcontent-%COMP%] { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }\n    .status-dot.present[_ngcontent-%COMP%] { background: #22c55e; }\n    .status-dot.late[_ngcontent-%COMP%]    { background: #f59e0b; }\n    .status-dot.absent[_ngcontent-%COMP%]  { background: #ef4444; }\n    .status-dot.leave[_ngcontent-%COMP%]   { background: #8b5cf6; }\n    .h-late[_ngcontent-%COMP%] { color: #f59e0b; font-size: .78rem; }\n    .no-history[_ngcontent-%COMP%] {\n      text-align: center; padding: 30px; color: rgba(255,255,255,0.3);\n      display: flex; flex-direction: column; align-items: center; gap: 8px;\n    }\n    .no-history[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 2rem; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS1wb2ludGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLG9CQUFvQixhQUFhLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFOztJQUV4RixxQkFBcUI7SUFDckI7TUFDRSxtQkFBbUIsRUFBRSx3Q0FBd0M7TUFDN0QsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLHNDQUFzQztJQUM1RTtJQUNBO01BQ0UsYUFBYSxFQUFFLDhCQUE4QixFQUFFLG1CQUFtQjtNQUNsRSxtQkFBbUI7SUFDckI7SUFDQSxhQUFhLGNBQWMsRUFBRSw0QkFBNEIsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRTtJQUM5SCxhQUFhLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUU7SUFDaEUsY0FBYyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGtDQUFrQyxFQUFFOztJQUVyRyxrQkFBa0I7SUFDbEI7TUFDRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsUUFBUTtNQUM1QyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7TUFDNUQsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3RDO0lBQ0EseUJBQXlCLCtCQUErQixFQUFFLGNBQWMsRUFBRSxvQ0FBb0MsRUFBRTtJQUNoSCx5QkFBeUIsZ0NBQWdDLEVBQUUsY0FBYyxFQUFFLHFDQUFxQyxFQUFFO0lBQ2xILHlCQUF5QiwrQkFBK0IsR0FBRyxjQUFjLEVBQUUsb0NBQW9DLEVBQUU7SUFDakgseUJBQXlCLGdDQUFnQyxFQUFFLGNBQWMsRUFBRSxxQ0FBcUMsRUFBRTtJQUNsSCx5QkFBeUIsaUNBQWlDLEVBQUUsY0FBYyxFQUFFLHNDQUFzQyxFQUFFOztJQUVwSCxrQkFBa0I7SUFDbEIsZ0JBQWdCLGtDQUFrQyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFB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QUUsd0NBQXdDO01BQzVFLGlCQUFpQjtJQUNuQjtJQUNBLCtCQUErQiw4QkFBOEIsRUFBRTtJQUMvRCwrQkFBK0IsOEJBQThCLEVBQUU7SUFDL0QsK0JBQStCLDhCQUE4QixFQUFFLFdBQVcsRUFBRTtJQUM1RSwrQkFBK0IsOEJBQThCLEVBQUU7SUFDL0QsVUFBVSw0QkFBNEIsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRTtJQUM1RSxXQUFXLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUU7SUFDdkYsV0FBVyw2QkFBNkIsRUFBRTtJQUMxQyxXQUFXLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRTtJQUM3QyxZQUFZLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUU7SUFDMUQsY0FBYyxVQUFVLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtJQUMzRSxzQkFBc0IsbUJBQW1CLEVBQUU7SUFDM0Msc0JBQXNCLG1CQUFtQixFQUFFO0lBQzNDLHNCQUFzQixtQkFBbUIsRUFBRTtJQUMzQyxzQkFBc0IsbUJBQW1CLEVBQUU7SUFDM0MsVUFBVSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7SUFDN0M7TUFDRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsNEJBQTRCO01BQy9ELGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxRQUFRO0lBQ3RFO0lBQ0EsZ0JBQWdCLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5wb2ludGFnZS13cmFwcGVyIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAyMHB4OyBtYXgtd2lkdGg6IDcwMHB4OyB9XG5cbiAgICAvKiBDYXJ0ZSBwcmluY2lwYWxlICovXG4gICAgLnBvaW50YWdlLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogIzFhMWEyZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDI4cHg7IGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIH1cbiAgICAucG9pbnRhZ2UtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5kYXktbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgZm9udC1zaXplOiAuNzVyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAxcHg7IH1cbiAgICAuZnVsbC1kYXRlIHsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2UyZThmMDsgfVxuICAgIC5saXZlLWNsb2NrIHsgZm9udC1zaXplOiAycmVtOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2UyZThmMDsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxuXG4gICAgLyogU3RhdHVzIGJhbm5lciAqL1xuICAgIC5zdGF0dXMtYmFubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAuODc1cmVtO1xuICAgIH1cbiAgICAuc3RhdHVzLWJhbm5lci5wcmVzZW50IHsgYmFja2dyb3VuZDogcmdiYSgzNCwxOTcsOTQsLjE1KTsgY29sb3I6ICMyMmM1NWU7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzQsMTk3LDk0LC4zKTsgfVxuICAgIC5zdGF0dXMtYmFubmVyLmxhdGUgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsLjE1KTsgY29sb3I6ICNmNTllMGI7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LDE1OCwxMSwuMyk7IH1cbiAgICAuc3RhdHVzLWJhbm5lci5hYnNlbnQgIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjE1KTsgIGNvbG9yOiAjZWY0NDQ0OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwuMyk7IH1cbiAgICAuc3RhdHVzLWJhbm5lci5kb25lICAgIHsgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LC4xNSk7IGNvbG9yOiAjM2I4MmY2OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU5LDEzMCwyNDYsLjMpOyB9XG4gICAgLnN0YXR1cy1iYW5uZXIuaWRsZSAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTA3LDExNCwxMjgsLjE1KTsgY29sb3I6ICM5Y2EzYWY7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA3LDExNCwxMjgsLjIpOyB9XG5cbiAgICAvKiBJbmZvcyBzZXNzaW9uICovXG4gICAgLnNlc3Npb24taW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDE2cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICAuaW5mby1yb3cgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDZweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgfVxuICAgIC5pbmZvLXJvdzpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICAgIC5pbmZvLWxhYmVsIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgZm9udC1zaXplOiAuODVyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XG4gICAgLmluZm8tdmFsdWUgeyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2UyZThmMDsgfVxuICAgIC5pbmZvLXZhbHVlLmFjY2VudCAgeyBjb2xvcjogIzNiODJmNjsgfVxuICAgIC5pbmZvLXZhbHVlLmRhbmdlciAgeyBjb2xvcjogI2VmNDQ0NDsgfVxuICAgIC5pbmZvLXZhbHVlLnN1Y2Nlc3MgeyBjb2xvcjogIzIyYzU1ZTsgfVxuICAgIC5saXZlLXRpbWVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7IHBhZGRpbmc6IDhweCAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDU5LDEzMCwyNDYsLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4OyBjb2xvcjogIzkzYzVmZDsgZm9udC1zaXplOiAuODVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcbiAgICB9XG5cbiAgICAvKiBTY2hlZHVsZSAqL1xuICAgIC5zY2hlZHVsZS1pbmZvIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTsgZm9udC1zaXplOiAuOHJlbTsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgIC5zY2hlZHVsZS1sYWJlbCB7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuICAgIC8qIEFjdGlvbnMgKi9cbiAgICAucG9pbnRhZ2UtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgLmJ0bi1jaGVja2luLCAuYnRuLWNoZWNrb3V0IHtcbiAgICAgIGZsZXg6IDE7IHBhZGRpbmc6IDE0cHggMjBweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAuOXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogOHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xuICAgIH1cbiAgICAuYnRuLWNoZWNraW4gIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIyYzU1ZSwgIzE2YTM0YSk7IGNvbG9yOiAjZmZmOyB9XG4gICAgLmJ0bi1jaGVja2luOmhvdmVyICB7IGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cbiAgICAuYnRuLWNoZWNrb3V0IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmNDQ0NCwgI2RjMjYyNik7IGNvbG9yOiAjZmZmOyB9XG4gICAgLmJ0bi1jaGVja291dDpob3ZlciB7IGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cbiAgICAuYnRuLWNoZWNraW46ZGlzYWJsZWQsIC5idG4tY2hlY2tvdXQ6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgdHJhbnNmb3JtOiBub25lOyB9XG4gICAgLmRvbmUtYmFkZ2Uge1xuICAgICAgZmxleDogMTsgcGFkZGluZzogMTRweDsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LC4xKTsgY29sb3I6ICM2MGE1ZmE7XG4gICAgICBmb250LXdlaWdodDogNjAwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA4cHg7XG4gICAgfVxuICAgIC53YWl0aW5nLWJhZGdlIHtcbiAgICAgIGZsZXg6IDE7IHBhZGRpbmc6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwuMSk7IGNvbG9yOiAjZmJiZjI0O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogOHB4O1xuICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICB9XG5cbiAgICAvKiBMZWF2ZSBjYXJkICovXG4gICAgLmxlYXZlLWNhcmQsIC5oaXN0b3J5LWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogIzFhMWEyZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDI0cHg7XG4gICAgfVxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZTJlOGYwOyBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gICAgLmhpc3Rvcnktc3RhdHMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgZmxleC13cmFwOiB3cmFwOyBtYXJnaW4tbGVmdDogYXV0bzsgfVxuICAgIC5zdGF0LWNoaXAge1xuICAgICAgcGFkZGluZzogM3B4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGZvbnQtc2l6ZTogLjc1cmVtOyBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuc3RhdC1jaGlwLnByZXNlbnQgeyBiYWNrZ3JvdW5kOiByZ2JhKDM0LDE5Nyw5NCwuMik7IGNvbG9yOiAjMjJjNTVlOyB9XG4gICAgLnN0YXQtY2hpcC5hYnNlbnQgIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjIpOyAgY29sb3I6ICNlZjQ0NDQ7IH1cbiAgICAuc3RhdC1jaGlwLmxhdGUgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsLjIpOyBjb2xvcjogI2Y1OWUwYjsgfVxuICAgIC5zdGF0LWNoaXAuaG91cnMgICB7IGJhY2tncm91bmQ6IHJnYmEoNTksMTMwLDI0NiwuMik7IGNvbG9yOiAjNjBhNWZhOyB9XG5cbiAgICAvKiBGb3JtICovXG4gICAgLmxlYXZlLWZvcm0geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7IH1cbiAgICAuZm9ybS1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IH1cbiAgICAuZm9ybS1yb3cudHdvLWNvbHMgLmZvcm0tZ3JvdXAgeyBmbGV4OiAxOyB9XG4gICAgLmZvcm0tZ3JvdXAgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDZweDsgfVxuICAgIC5mb3JtLWdyb3VwIGxhYmVsIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgZm9udC1zaXplOiAuOHJlbTsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgIC5mb3JtLWdyb3VwIGlucHV0LCAuZm9ybS1ncm91cCBzZWxlY3QsIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDEwcHggMTJweDsgY29sb3I6ICNlMmU4ZjA7IGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICB9XG4gICAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEgeyByZXNpemU6IHZlcnRpY2FsOyB9XG4gICAgLmJ0bi1sZWF2ZSB7XG4gICAgICBwYWRkaW5nOiAxMnB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGI1Y2Y2LCAjNmQyOGQ5KTtcbiAgICAgIGNvbG9yOiAjZmZmOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDhweDtcbiAgICB9XG4gICAgLmJ0bi1sZWF2ZTpkaXNhYmxlZCB7IG9wYWNpdHk6IC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbiAgICAvKiBNeSBsZWF2ZXMgKi9cbiAgICAubXktbGVhdmVzIHsgbWFyZ2luLXRvcDogMjBweDsgfVxuICAgIC5sZWF2ZXMtdGl0bGUgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpOyBmb250LXNpemU6IC44cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMXB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4gICAgLmxlYXZlLWl0ZW0geyBwYWRkaW5nOiAxMHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgbWFyZ2luLWJvdHRvbTogOHB4OyBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50OyB9XG4gICAgLmxlYXZlLWl0ZW0ubGVhdmUtcGVuZGluZyAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsLjA4KTsgYm9yZGVyLWNvbG9yOiAjZjU5ZTBiOyB9XG4gICAgLmxlYXZlLWl0ZW0ubGVhdmUtYXBwcm92ZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDM0LDE5Nyw5NCwuMDgpOyAgYm9yZGVyLWNvbG9yOiAjMjJjNTVlOyB9XG4gICAgLmxlYXZlLWl0ZW0ubGVhdmUtcmVqZWN0ZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwuMDgpOyAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0OyB9XG4gICAgLmxlYXZlLWRhdGVzIHsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNlMmU4ZjA7IGZvbnQtc2l6ZTogLjg3NXJlbTsgbWFyZ2luLWJvdHRvbTogNHB4OyB9XG4gICAgLmxlYXZlLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgLmxlYXZlLXR5cGUtYmFkZ2UsIC5sZWF2ZS1zdGF0dXMtYmFkZ2UsIC5sZWF2ZS1kYXlzIHtcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGZvbnQtc2l6ZTogLjc1cmVtOyBmb250LXdlaWdodDogNTAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICB9XG4gICAgLmxlYXZlLXJlc3BvbnNlIHsgbWFyZ2luLXRvcDogNHB4OyBmb250LXNpemU6IC44cmVtOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQpOyBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuICAgIC8qIEhpc3RvcnkgKi9cbiAgICAuaGlzdG9yeS1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IH1cbiAgICAuaGlzdG9yeS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xuICAgIH1cbiAgICAuaGlzdG9yeS1pdGVtLnN0YXR1cy1wcmVzZW50IHsgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMjJjNTVlOyB9XG4gICAgLmhpc3RvcnktaXRlbS5zdGF0dXMtbGF0ZSAgICB7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y1OWUwYjsgfVxuICAgIC5oaXN0b3J5LWl0ZW0uc3RhdHVzLWFic2VudCAgeyBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlZjQ0NDQ7IG9wYWNpdHk6IC43OyB9XG4gICAgLmhpc3RvcnktaXRlbS5zdGF0dXMtbGVhdmUgICB7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzhiNWNmNjsgfVxuICAgIC5oLWRhdGUgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IC44cmVtOyB9XG4gICAgLmgtdGltZXMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgfVxuICAgIC5uby1kYXRhIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSk7IH1cbiAgICAuaC1ob3VycyB7IGNvbG9yOiAjNjBhNWZhOyBmb250LXdlaWdodDogNjAwOyB9XG4gICAgLmgtc3RhdHVzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7IH1cbiAgICAuc3RhdHVzLWRvdCB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGZsZXgtc2hyaW5rOiAwOyB9XG4gICAgLnN0YXR1cy1kb3QucHJlc2VudCB7IGJhY2tncm91bmQ6ICMyMmM1NWU7IH1cbiAgICAuc3RhdHVzLWRvdC5sYXRlICAgIHsgYmFja2dyb3VuZDogI2Y1OWUwYjsgfVxuICAgIC5zdGF0dXMtZG90LmFic2VudCAgeyBiYWNrZ3JvdW5kOiAjZWY0NDQ0OyB9XG4gICAgLnN0YXR1cy1kb3QubGVhdmUgICB7IGJhY2tncm91bmQ6ICM4YjVjZjY7IH1cbiAgICAuaC1sYXRlIHsgY29sb3I6ICNmNTllMGI7IGZvbnQtc2l6ZTogLjc4cmVtOyB9XG4gICAgLm5vLWhpc3Rvcnkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAzMHB4OyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XG4gICAgfVxuICAgIC5uby1oaXN0b3J5IGkgeyBmb250LXNpemU6IDJyZW07IH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9260:
/*!*****************************************************************!*\
  !*** ./src/app/components/employee/employee-tasks.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeTasksComponent: () => (/* binding */ EmployeeTasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _employee_time_tracker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-time-tracker.component */ 9138);
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee.service */ 3878);






function EmployeeTasksComponent_div_10_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r2.description, " ");
  }
}
function EmployeeTasksComponent_div_10_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.formatDate(task_r2.due_date), " ");
  }
}
function EmployeeTasksComponent_div_10_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", task_r2.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", task_r2.progress, "%");
  }
}
function EmployeeTasksComponent_div_10_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r2.project_name, " ");
  }
}
function EmployeeTasksComponent_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeeTasksComponent_div_10_div_4_Template_div_click_0_listener() {
      const task_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectTask(task_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EmployeeTasksComponent_div_10_div_4_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EmployeeTasksComponent_div_10_div_4_div_11_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EmployeeTasksComponent_div_10_div_4_div_12_Template, 5, 3, "div", 20)(13, EmployeeTasksComponent_div_10_div_4_div_13_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.getTaskPriorityClass(task_r2.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", (ctx_r2.selectedTask == null ? null : ctx_r2.selectedTask.id) === task_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("priority-" + task_r2.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getPriorityLabel(task_r2.priority), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("status-" + task_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.getStatusIcon(task_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getStatusLabel(task_r2.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r2.due_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r2.progress !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r2.project_name);
  }
}
function EmployeeTasksComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "S\u00E9lectionnez une t\u00E2che pour le pointage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EmployeeTasksComponent_div_10_div_4_Template, 14, 16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
  }
}
function EmployeeTasksComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-employee-time-tracker", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("taskId", ctx_r2.selectedTask.id)("employeeId", ctx_r2.currentEmployeeId)("currentTask", ctx_r2.selectedTask);
  }
}
function EmployeeTasksComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aucune t\u00E2che assign\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Vous n'avez actuellement aucune t\u00E2che assign\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class EmployeeTasksComponent {
  constructor(employeeService) {
    this.employeeService = employeeService;
    this.taskSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.tasks = [];
    this.selectedTask = null;
  }
  ngOnInit() {
    this.currentEmployeeId = this.employeeId ?? this.getCurrentEmployeeIdFromStorage() ?? undefined;
    this.loadEmployeeTasks();
  }
  getCurrentEmployeeIdFromStorage() {
    const employeeData = localStorage.getItem('currentEmployee');
    if (!employeeData) {
      return null;
    }
    try {
      const employee = JSON.parse(employeeData);
      return employee?.id ?? null;
    } catch {
      return null;
    }
  }
  loadEmployeeTasks() {
    if (!this.currentEmployeeId) {
      console.warn('Aucun employé connecté, impossible de charger les tâches.');
      this.tasks = [];
      return;
    }
    this.employeeService.getEmployeeTasks(this.currentEmployeeId).subscribe({
      next: response => {
        if (response.success && Array.isArray(response.data)) {
          this.tasks = response.data;
        } else {
          console.warn('Réponse inattendue de l\'API des tâches employé:', response);
          this.tasks = [];
        }
      },
      error: error => {
        console.error('Erreur lors du chargement des tâches employé:', error);
        this.tasks = [];
      }
    });
  }
  selectTask(task) {
    this.selectedTask = task;
    this.taskSelected.emit(task);
  }
  get inProgressTasks() {
    return this.tasks.filter(task => task.status === 'in_progress');
  }
  getTaskPriorityClass(priority) {
    return `priority-${priority}`;
  }
  getPriorityLabel(priority) {
    switch (priority) {
      case 'high':
        return 'Élevée';
      case 'medium':
        return 'Moyenne';
      case 'low':
        return 'Faible';
      default:
        return priority;
    }
  }
  getStatusIcon(status) {
    switch (status) {
      case 'todo':
        return 'bi-circle';
      case 'in_progress':
        return 'bi-play-circle-fill';
      case 'completed':
        return 'bi-check-circle-fill';
      default:
        return 'bi-circle';
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case 'todo':
        return 'À faire';
      case 'in_progress':
        return 'En cours';
      case 'completed':
        return 'Terminée';
      default:
        return status;
    }
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short'
    });
  }
  static {
    this.ɵfac = function EmployeeTasksComponent_Factory(t) {
      return new (t || EmployeeTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_1__.EmployeeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmployeeTasksComponent,
      selectors: [["app-employee-tasks"]],
      inputs: {
        employeeId: "employeeId"
      },
      outputs: {
        taskSelected: "taskSelected"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 5,
      consts: [[1, "employee-tasks"], [1, "tasks-header"], [1, "bi", "bi-list-task"], [1, "tasks-stats"], [1, "stat"], ["class", "task-selection", 4, "ngIf"], ["class", "time-tracker-section", 4, "ngIf"], ["class", "no-tasks-message", 4, "ngIf"], [1, "task-selection"], [1, "task-grid"], ["class", "task-card", 3, "selected", "class", "click", 4, "ngFor", "ngForOf"], [1, "task-card", 3, "click"], [1, "task-header"], [1, "task-title"], [1, "task-priority"], ["class", "task-description", 4, "ngIf"], [1, "task-meta"], [1, "task-status"], [1, "bi", 3, "ngClass"], ["class", "task-due-date", 4, "ngIf"], ["class", "task-progress", 4, "ngIf"], ["class", "task-project", 4, "ngIf"], [1, "task-description"], [1, "task-due-date"], [1, "bi", "bi-calendar"], [1, "task-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "task-project"], [1, "bi", "bi-folder"], [1, "time-tracker-section"], [3, "taskId", "employeeId", "currentTask"], [1, "no-tasks-message"], [1, "bi", "bi-inbox"]],
      template: function EmployeeTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Mes T\u00E2ches");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EmployeeTasksComponent_div_10_Template, 5, 1, "div", 5)(11, EmployeeTasksComponent_div_11_Template, 2, 3, "div", 6)(12, EmployeeTasksComponent_div_12_Template, 6, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.tasks.length, " t\u00E2ches");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.inProgressTasks.length, " en cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tasks.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedTask);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tasks.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _employee_time_tracker_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeTimeTrackerComponent],
      styles: [".employee-tasks[_ngcontent-%COMP%] {\n      background: white;\n      border-radius: 16px;\n      padding: 24px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n      border: 1px solid #e5e7eb;\n    }\n\n    .tasks-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 24px;\n      padding-bottom: 16px;\n      border-bottom: 1px solid #e5e7eb;\n    }\n\n    .tasks-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 20px;\n      font-weight: 700;\n      color: #1f2937;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .tasks-stats[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 16px;\n    }\n\n    .stat[_ngcontent-%COMP%] {\n      font-size: 14px;\n      color: #6b7280;\n      background: #f3f4f6;\n      padding: 6px 12px;\n      border-radius: 20px;\n      font-weight: 500;\n    }\n\n    .task-selection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 16px 0;\n      font-size: 16px;\n      font-weight: 600;\n      color: #374151;\n    }\n\n    .task-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      gap: 16px;\n      margin-bottom: 24px;\n    }\n\n    .task-card[_ngcontent-%COMP%] {\n      background: #f9fafb;\n      border: 2px solid transparent;\n      border-radius: 12px;\n      padding: 20px;\n      cursor: pointer;\n      transition: all 0.2s ease;\n      position: relative;\n    }\n\n    .task-card[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n    }\n\n    .task-card.selected[_ngcontent-%COMP%] {\n      border-color: #3b82f6;\n      background: #eff6ff;\n      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n    }\n\n    .task-card.high[_ngcontent-%COMP%] {\n      border-left: 4px solid #ef4444;\n    }\n\n    .task-card.medium[_ngcontent-%COMP%] {\n      border-left: 4px solid #f59e0b;\n    }\n\n    .task-card.low[_ngcontent-%COMP%] {\n      border-left: 4px solid #10b981;\n    }\n\n    .task-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n      margin-bottom: 12px;\n    }\n\n    .task-title[_ngcontent-%COMP%] {\n      font-size: 16px;\n      font-weight: 700;\n      color: #1f2937;\n      flex: 1;\n      margin-right: 12px;\n    }\n\n    .task-priority[_ngcontent-%COMP%] {\n      padding: 4px 8px;\n      border-radius: 12px;\n      font-size: 11px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n\n    .priority-high[_ngcontent-%COMP%] {\n      background: #fef2f2;\n      color: #dc2626;\n    }\n\n    .priority-medium[_ngcontent-%COMP%] {\n      background: #fef3c7;\n      color: #d97706;\n    }\n\n    .priority-low[_ngcontent-%COMP%] {\n      background: #dcfce7;\n      color: #166534;\n    }\n\n    .task-description[_ngcontent-%COMP%] {\n      color: #6b7280;\n      font-size: 14px;\n      margin-bottom: 16px;\n      line-height: 1.5;\n    }\n\n    .task-meta[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 16px;\n    }\n\n    .task-status[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      padding: 6px 12px;\n      border-radius: 20px;\n      font-size: 12px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n\n    .status-todo[_ngcontent-%COMP%] {\n      background: #e5e7eb;\n      color: #374151;\n    }\n\n    .status-in_progress[_ngcontent-%COMP%] {\n      background: #dbeafe;\n      color: #1e40af;\n    }\n\n    .status-completed[_ngcontent-%COMP%] {\n      background: #dcfce7;\n      color: #166534;\n    }\n\n    .task-due-date[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 4px;\n      font-size: 12px;\n      color: #6b7280;\n      font-weight: 500;\n    }\n\n    .task-progress[_ngcontent-%COMP%] {\n      margin-bottom: 16px;\n    }\n\n    .progress-bar[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 8px;\n      background: #e5e7eb;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-bottom: 8px;\n    }\n\n    .progress-fill[_ngcontent-%COMP%] {\n      height: 100%;\n      background: linear-gradient(90deg, #3b82f6, #1d4ed8);\n      border-radius: 4px;\n      transition: width 0.3s ease;\n    }\n\n    .progress-text[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #6b7280;\n      font-weight: 600;\n    }\n\n    .task-project[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      font-size: 12px;\n      color: #6b7280;\n      font-weight: 500;\n    }\n\n    .time-tracker-section[_ngcontent-%COMP%] {\n      margin-top: 32px;\n      padding-top: 24px;\n      border-top: 1px solid #e5e7eb;\n    }\n\n    .no-tasks-message[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 60px 20px;\n      color: #6b7280;\n    }\n\n    .no-tasks-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 48px;\n      display: block;\n      margin-bottom: 16px;\n      opacity: 0.5;\n    }\n\n    .no-tasks-message[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 8px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #374151;\n    }\n\n    .no-tasks-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 14px;\n    }\n\n    \n\n    @media (max-width: 768px) {\n      .task-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n\n      .task-header[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 8px;\n      }\n\n      .task-meta[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 8px;\n      }\n\n      .tasks-header[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 12px;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS10YXNrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsMENBQTBDO01BQzFDLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsZ0NBQWdDO0lBQ2xDOztJQUVBO01BQ0UsU0FBUztNQUNULGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsUUFBUTtJQUNWOztJQUVBO01BQ0UsYUFBYTtNQUNiLFNBQVM7SUFDWDs7SUFFQTtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGFBQWE7TUFDYiw0REFBNEQ7TUFDNUQsU0FBUztNQUNULG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLDJCQUEyQjtNQUMzQix5Q0FBeUM7SUFDM0M7O0lBRUE7TUFDRSxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLDZDQUE2QztJQUMvQzs7SUFFQTtNQUNFLDhCQUE4QjtJQUNoQzs7SUFFQTtNQUNFLDhCQUE4QjtJQUNoQzs7SUFFQTtNQUNFLDhCQUE4QjtJQUNoQzs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLE9BQU87TUFDUCxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIseUJBQXlCO01BQ3pCLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO01BQ1IsZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixvREFBb0Q7TUFDcEQsa0JBQWtCO01BQ2xCLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO01BQ1IsZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLDZCQUE2QjtJQUMvQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxTQUFTO01BQ1QsZUFBZTtJQUNqQjs7SUFFQSxlQUFlO0lBQ2Y7TUFDRTtRQUNFLDBCQUEwQjtNQUM1Qjs7TUFFQTtRQUNFLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsUUFBUTtNQUNWOztNQUVBO1FBQ0Usc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixRQUFRO01BQ1Y7O01BRUE7UUFDRSxzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLFNBQVM7TUFDWDtJQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmVtcGxveWVlLXRhc2tzIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIH1cblxuICAgIC50YXNrcy1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICB9XG5cbiAgICAudGFza3MtaGVhZGVyIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgLnRhc2tzLXN0YXRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgLnN0YXQge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAudGFzay1zZWxlY3Rpb24gaDQge1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgIH1cblxuICAgIC50YXNrLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLnRhc2stY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnRhc2stY2FyZDpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAudGFzay1jYXJkLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzNiODJmNjtcbiAgICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMSk7XG4gICAgfVxuXG4gICAgLnRhc2stY2FyZC5oaWdoIHtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2VmNDQ0NDtcbiAgICB9XG5cbiAgICAudGFzay1jYXJkLm1lZGl1bSB7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmNTllMGI7XG4gICAgfVxuXG4gICAgLnRhc2stY2FyZC5sb3cge1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMTBiOTgxO1xuICAgIH1cblxuICAgIC50YXNrLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgIC50YXNrLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgLnRhc2stcHJpb3JpdHkge1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG5cbiAgICAucHJpb3JpdHktaGlnaCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xuICAgICAgY29sb3I6ICNkYzI2MjY7XG4gICAgfVxuXG4gICAgLnByaW9yaXR5LW1lZGl1bSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICAgICAgY29sb3I6ICNkOTc3MDY7XG4gICAgfVxuXG4gICAgLnByaW9yaXR5LWxvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xuICAgICAgY29sb3I6ICMxNjY1MzQ7XG4gICAgfVxuXG4gICAgLnRhc2stZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG5cbiAgICAudGFzay1tZXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAudGFzay1zdGF0dXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cblxuICAgIC5zdGF0dXMtdG9kbyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xuICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgfVxuXG4gICAgLnN0YXR1cy1pbl9wcm9ncmVzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xuICAgICAgY29sb3I6ICMxZTQwYWY7XG4gICAgfVxuXG4gICAgLnN0YXR1cy1jb21wbGV0ZWQge1xuICAgICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICAgIGNvbG9yOiAjMTY2NTM0O1xuICAgIH1cblxuICAgIC50YXNrLWR1ZS1kYXRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnRhc2stcHJvZ3Jlc3Mge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtZmlsbCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzYjgyZjYsICMxZDRlZDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAudGFzay1wcm9qZWN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnRpbWUtdHJhY2tlci1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIH1cblxuICAgIC5uby10YXNrcy1tZXNzYWdlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIH1cblxuICAgIC5uby10YXNrcy1tZXNzYWdlIGkge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5uby10YXNrcy1tZXNzYWdlIGg0IHtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgIH1cblxuICAgIC5uby10YXNrcy1tZXNzYWdlIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC50YXNrLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cblxuICAgICAgLnRhc2staGVhZGVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuXG4gICAgICAudGFzay1tZXRhIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuXG4gICAgICAudGFza3MtaGVhZGVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9138:
/*!************************************************************************!*\
  !*** ./src/app/components/employee/employee-time-tracker.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeTimeTrackerComponent: () => (/* binding */ EmployeeTimeTrackerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task-enhanced.service */ 6784);






function EmployeeTimeTrackerComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " En cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmployeeTimeTrackerComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21)(5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentTask.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "status-" + ctx_r0.currentTask.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getTaskStatusLabel(ctx_r0.currentTask.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "priority-" + ctx_r0.currentTask.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getPriorityLabel(ctx_r0.currentTask.priority), " ");
  }
}
function EmployeeTimeTrackerComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Pointage en cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatTime(ctx_r0.elapsedTime));
  }
}
function EmployeeTimeTrackerComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeTimeTrackerComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.startSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " D\u00E9marrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmployeeTimeTrackerComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeTimeTrackerComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.pauseSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmployeeTimeTrackerComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeTimeTrackerComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.resumeSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Reprendre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmployeeTimeTrackerComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeTimeTrackerComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.completeSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Terminer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmployeeTimeTrackerComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "S\u00E9lectionnez une t\u00E2che pour commencer le pointage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EmployeeTimeTrackerComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Aujourd'hui");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 39)(5, "div", 40)(6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Total point\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 40)(11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "T\u00E2ches point\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatTime(ctx_r0.todayTotalSeconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.todayTasksSessions.length);
  }
}
function EmployeeTimeTrackerComponent_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const session_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r6.task_title || "T\u00E2che #" + session_r6.task_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatTime(session_r6.duration_seconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "status-" + session_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatusLabel(session_r6.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDateTime(session_r6.start_time), " ");
  }
}
function EmployeeTimeTrackerComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " T\u00E2ches point\u00E9es aujourd'hui");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EmployeeTimeTrackerComponent_div_17_div_5_Template, 9, 5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.todayTasksSessions);
  }
}
class EmployeeTimeTrackerComponent {
  constructor(taskEnhancedService) {
    this.taskEnhancedService = taskEnhancedService;
    this.taskCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.activeSession = null;
    this.sessions = [];
    this.todayTasksSessions = [];
    this.elapsedTime = 0;
    this.sessionDescription = '';
    this.timerInterval = null;
  }
  ngOnInit() {
    if (this.taskId) {
      this.loadSessions();
      this.checkActiveSession();
    }
    if (this.employeeId) {
      this.loadTodaysSessions();
    }
  }
  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  loadSessions() {
    this.taskEnhancedService.getTaskTimeSessions(this.taskId).subscribe({
      next: response => {
        this.sessions = response.data || [];
      },
      error: error => {
        console.error('Erreur lors du chargement des sessions:', error);
      }
    });
  }
  loadTodaysSessions() {
    if (!this.employeeId) return;
    this.taskEnhancedService.getTodaySessionsByEmployee(this.employeeId).subscribe({
      next: response => {
        this.todayTasksSessions = response.data?.sessions || [];
      },
      error: error => {
        console.error('Erreur lors du chargement des sessions d\'aujourd\'hui:', error);
      }
    });
  }
  checkActiveSession() {
    const runningSession = this.sessions.find(s => s.status === 'running');
    if (runningSession) {
      this.activeSession = runningSession;
      this.startTimer();
    }
  }
  startSession() {
    if (this.employeeId == null) {
      alert('Impossible de démarrer le pointage : employé non identifié.');
      return;
    }
    const employeeId = this.employeeId;
    const description = `Pointage ${this.currentTask?.title || 'tâche'}`;
    this.taskEnhancedService.startTimeSession(this.taskId, employeeId, description).subscribe({
      next: response => {
        this.activeSession = {
          id: response.data.sessionId,
          task_id: this.taskId,
          employee_id: employeeId,
          start_time: new Date().toISOString(),
          end_time: null,
          duration_seconds: 0,
          status: 'running',
          description,
          employee_name: '',
          task_title: this.currentTask?.title
        };
        this.startTimer();
        if (this.currentTask) {
          this.currentTask.status = 'in_progress';
        }
      },
      error: error => {
        console.error('Erreur lors du démarrage de la session:', error);
        const message = error?.error?.message || 'Erreur lors du démarrage du pointage. Veuillez réessayer.';
        alert(message);
      }
    });
  }
  pauseSession() {
    if (this.activeSession) {
      this.taskEnhancedService.pauseTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: response => {
          this.activeSession.status = 'paused';
          this.activeSession.duration_seconds = response.data.duration;
          this.stopTimer();
          this.loadSessions();
        },
        error: error => {
          console.error('Erreur lors de la pause:', error);
          alert('Erreur lors de la mise en pause. Veuillez réessayer.');
        }
      });
    }
  }
  resumeSession() {
    if (this.activeSession) {
      this.taskEnhancedService.resumeTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: response => {
          this.activeSession.status = 'running';
          this.startTimer();
        },
        error: error => {
          console.error('Erreur lors de la reprise:', error);
          const message = error?.error?.message || 'Erreur lors de la reprise. Veuillez réessayer.';
          alert(message);
        }
      });
    }
  }
  completeSession() {
    if (this.activeSession) {
      this.taskEnhancedService.completeTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: response => {
          const hours = response.data?.hours || 0;
          alert(`Pointage terminé : ${hours}h\nTâche passée à "Complétée"\nTimesheet créé`);
          this.activeSession = null;
          this.stopTimer();
          this.elapsedTime = 0;
          if (this.currentTask) {
            this.currentTask.status = 'done';
          }
          this.loadSessions();
          this.loadTodaysSessions();
          this.taskCompleted.emit({
            taskId: this.taskId,
            hours
          });
        },
        error: error => {
          console.error('Erreur lors de la fin de session:', error);
          alert('Erreur lors de la fin du pointage. Veuillez réessayer.');
        }
      });
    }
  }
  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.activeSession && this.activeSession.status === 'running') {
        this.elapsedTime++;
      }
    }, 1000);
  }
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  getStatusLabel(status) {
    switch (status) {
      case 'running':
        return 'En cours';
      case 'paused':
        return 'En pause';
      case 'completed':
        return 'Complétée';
      default:
        return status;
    }
  }
  getTaskStatusLabel(status) {
    switch (status) {
      case 'todo':
        return 'À faire';
      case 'in_progress':
        return 'En cours';
      case 'done':
        return 'Terminée';
      default:
        return status;
    }
  }
  getPriorityLabel(priority) {
    switch (priority) {
      case 'high':
        return 'Élevée';
      case 'medium':
        return 'Moyenne';
      case 'low':
        return 'Faible';
      default:
        return priority;
    }
  }
  get todayTotalSeconds() {
    return this.todayTasksSessions.reduce((total, session) => total + session.duration_seconds, 0);
  }
  get todayTotalHours() {
    return parseFloat((this.todayTotalSeconds / 3600).toFixed(2));
  }
  static {
    this.ɵfac = function EmployeeTimeTrackerComponent_Factory(t) {
      return new (t || EmployeeTimeTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_0__.TaskEnhancedService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmployeeTimeTrackerComponent,
      selectors: [["app-employee-time-tracker"]],
      inputs: {
        taskId: "taskId",
        employeeId: "employeeId",
        currentTask: "currentTask"
      },
      outputs: {
        taskCompleted: "taskCompleted"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 10,
      consts: [[1, "employee-time-tracker"], [1, "tracker-main"], [1, "tracker-header"], [1, "bi", "bi-stopwatch-fill"], ["class", "active-indicator", 4, "ngIf"], ["class", "current-task-info", 4, "ngIf"], ["class", "timer-section", 4, "ngIf"], [1, "controls-section"], [1, "control-buttons"], ["class", "btn-control btn-start", 3, "click", 4, "ngIf"], ["class", "btn-control btn-pause", 3, "click", 4, "ngIf"], ["class", "btn-control btn-resume", 3, "click", 4, "ngIf"], ["class", "btn-control btn-stop", 3, "click", 4, "ngIf"], ["class", "no-task-message", 4, "ngIf"], ["class", "today-summary", 4, "ngIf"], ["class", "today-sessions", 4, "ngIf"], [1, "active-indicator"], [1, "bi", "bi-circle-fill"], [1, "current-task-info"], [1, "task-info-card"], [1, "task-title"], [1, "task-meta"], [1, "task-status", 3, "ngClass"], [1, "task-priority", 3, "ngClass"], [1, "timer-section"], [1, "timer-display"], [1, "timer-value"], [1, "session-status"], [1, "btn-control", "btn-start", 3, "click"], [1, "bi", "bi-play-circle-fill"], [1, "btn-control", "btn-pause", 3, "click"], [1, "bi", "bi-pause-circle-fill"], [1, "btn-control", "btn-resume", 3, "click"], [1, "btn-control", "btn-stop", 3, "click"], [1, "bi", "bi-stop-circle-fill"], [1, "no-task-message"], [1, "bi", "bi-inbox"], [1, "today-summary"], [1, "bi", "bi-calendar-day"], [1, "summary-stats"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "today-sessions"], [1, "bi", "bi-list-ul"], [1, "sessions-grid"], ["class", "session-card", 4, "ngFor", "ngForOf"], [1, "session-card"], [1, "session-task-title"], [1, "session-time"], [1, "session-status", 3, "ngClass"], [1, "session-time-range"]],
      template: function EmployeeTimeTrackerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Pointage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EmployeeTimeTrackerComponent_span_6_Template, 3, 0, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EmployeeTimeTrackerComponent_div_7_Template, 9, 5, "div", 5)(8, EmployeeTimeTrackerComponent_div_8_Template, 6, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EmployeeTimeTrackerComponent_button_11_Template, 3, 0, "button", 9)(12, EmployeeTimeTrackerComponent_button_12_Template, 3, 0, "button", 10)(13, EmployeeTimeTrackerComponent_button_13_Template, 3, 0, "button", 11)(14, EmployeeTimeTrackerComponent_button_14_Template, 3, 0, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeTimeTrackerComponent_div_15_Template, 4, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EmployeeTimeTrackerComponent_div_16_Template, 15, 2, "div", 14)(17, EmployeeTimeTrackerComponent_div_17_Template, 6, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSession);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentTask);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSession);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activeSession && ctx.currentTask);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSession && ctx.activeSession.status === "running");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSession && ctx.activeSession.status === "paused");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSession);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currentTask);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todayTotalHours > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todayTasksSessions.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
      styles: [".employee-time-tracker[_ngcontent-%COMP%] {\n      background: white;\n      border-radius: 16px;\n      padding: 24px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n      border: 1px solid #e5e7eb;\n    }\n\n    .tracker-main[_ngcontent-%COMP%] {\n      margin-bottom: 32px;\n      padding-bottom: 24px;\n      border-bottom: 1px solid #e5e7eb;\n    }\n\n    .tracker-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px;\n    }\n\n    .tracker-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 20px;\n      font-weight: 700;\n      color: #1f2937;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .active-indicator[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      padding: 8px 12px;\n      background: #dcfce7;\n      border-radius: 20px;\n      color: #166534;\n      font-size: 12px;\n      font-weight: 600;\n    }\n\n    .active-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 10px;\n      animation: _ngcontent-%COMP%_pulse 2s infinite;\n    }\n\n    @keyframes _ngcontent-%COMP%_pulse {\n      0%, 100% { opacity: 1; }\n      50% { opacity: 0.5; }\n    }\n\n    .current-task-info[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n    }\n\n    .task-info-card[_ngcontent-%COMP%] {\n      background: #f0f9ff;\n      border: 1px solid #bfdbfe;\n      border-radius: 12px;\n      padding: 16px;\n      border-left: 4px solid #3b82f6;\n    }\n\n    .task-title[_ngcontent-%COMP%] {\n      font-size: 16px;\n      font-weight: 700;\n      color: #1f2937;\n      margin-bottom: 8px;\n    }\n\n    .task-meta[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n    }\n\n    .task-status[_ngcontent-%COMP%] {\n      display: inline-block;\n      padding: 4px 12px;\n      border-radius: 20px;\n      font-size: 11px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n\n    .task-status.status-todo[_ngcontent-%COMP%] {\n      background: #e5e7eb;\n      color: #374151;\n    }\n\n    .task-status.status-in_progress[_ngcontent-%COMP%] {\n      background: #dbeafe;\n      color: #1e40af;\n    }\n\n    .task-status.status-done[_ngcontent-%COMP%] {\n      background: #dcfce7;\n      color: #166534;\n    }\n\n    .task-priority[_ngcontent-%COMP%] {\n      display: inline-block;\n      padding: 4px 8px;\n      border-radius: 6px;\n      font-size: 10px;\n      font-weight: 600;\n      text-transform: uppercase;\n    }\n\n    .task-priority.priority-high[_ngcontent-%COMP%] {\n      background: #fef2f2;\n      color: #dc2626;\n    }\n\n    .task-priority.priority-medium[_ngcontent-%COMP%] {\n      background: #fef3c7;\n      color: #d97706;\n    }\n\n    .task-priority.priority-low[_ngcontent-%COMP%] {\n      background: #dcfce7;\n      color: #166534;\n    }\n\n    .timer-section[_ngcontent-%COMP%] {\n      margin: 20px 0;\n    }\n\n    .timer-display[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 40px;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      border-radius: 16px;\n      color: white;\n      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);\n    }\n\n    .timer-value[_ngcontent-%COMP%] {\n      font-size: 56px;\n      font-weight: 800;\n      font-family: 'Courier New', monospace;\n      margin-bottom: 12px;\n      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    }\n\n    .session-status[_ngcontent-%COMP%] {\n      font-size: 16px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n    }\n\n    .controls-section[_ngcontent-%COMP%] {\n      margin: 24px 0;\n    }\n\n    .control-buttons[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n      gap: 12px;\n    }\n\n    .btn-control[_ngcontent-%COMP%] {\n      padding: 14px 16px;\n      border: none;\n      border-radius: 12px;\n      font-size: 13px;\n      font-weight: 600;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      transition: all 0.2s ease;\n    }\n\n    .btn-start[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #10b981, #059669);\n      color: white;\n    }\n\n    .btn-start[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);\n    }\n\n    .btn-pause[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #f59e0b, #d97706);\n      color: white;\n    }\n\n    .btn-pause[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);\n    }\n\n    .btn-resume[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #3b82f6, #2563eb);\n      color: white;\n    }\n\n    .btn-resume[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);\n    }\n\n    .btn-stop[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #ef4444, #dc2626);\n      color: white;\n    }\n\n    .btn-stop[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);\n    }\n\n    .no-task-message[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 40px 20px;\n      color: #6b7280;\n      background: #f9fafb;\n      border-radius: 12px;\n      border: 2px dashed #d1d5db;\n    }\n\n    .no-task-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 32px;\n      display: block;\n      margin-bottom: 12px;\n      opacity: 0.6;\n    }\n\n    .today-summary[_ngcontent-%COMP%] {\n      margin-bottom: 24px;\n    }\n\n    .today-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 16px 0;\n      font-size: 16px;\n      font-weight: 700;\n      color: #1f2937;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .summary-stats[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n      gap: 12px;\n    }\n\n    .stat-card[_ngcontent-%COMP%] {\n      background: #f3f4f6;\n      border-radius: 12px;\n      padding: 16px;\n      text-align: center;\n      border: 1px solid #e5e7eb;\n    }\n\n    .stat-value[_ngcontent-%COMP%] {\n      font-size: 28px;\n      font-weight: 800;\n      font-family: 'Courier New', monospace;\n      color: #1f2937;\n      margin-bottom: 4px;\n    }\n\n    .stat-label[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #6b7280;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n      font-weight: 600;\n    }\n\n    .today-sessions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 16px 0;\n      font-size: 16px;\n      font-weight: 700;\n      color: #1f2937;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .sessions-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n      gap: 12px;\n    }\n\n    .session-card[_ngcontent-%COMP%] {\n      background: #f9fafb;\n      border-radius: 12px;\n      padding: 16px;\n      border: 1px solid #e5e7eb;\n      border-left: 4px solid #3b82f6;\n    }\n\n    .session-task-title[_ngcontent-%COMP%] {\n      font-size: 14px;\n      font-weight: 700;\n      color: #1f2937;\n      margin-bottom: 8px;\n    }\n\n    .session-time[_ngcontent-%COMP%] {\n      font-size: 18px;\n      font-weight: 800;\n      font-family: 'Courier New', monospace;\n      color: #3b82f6;\n      margin-bottom: 8px;\n    }\n\n    .session-status[_ngcontent-%COMP%] {\n      display: inline-block;\n      padding: 4px 8px;\n      border-radius: 12px;\n      font-size: 10px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n      margin-bottom: 8px;\n    }\n\n    .session-status.status-completed[_ngcontent-%COMP%] {\n      background: #dcfce7;\n      color: #166534;\n    }\n\n    .session-status.status-paused[_ngcontent-%COMP%] {\n      background: #fef3c7;\n      color: #92400e;\n    }\n\n    .session-status.status-running[_ngcontent-%COMP%] {\n      background: #dbeafe;\n      color: #1e40af;\n    }\n\n    .session-time-range[_ngcontent-%COMP%] {\n      font-size: 11px;\n      color: #6b7280;\n    }\n\n    @media (max-width: 768px) {\n      .control-buttons[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n\n      .timer-value[_ngcontent-%COMP%] {\n        font-size: 36px;\n      }\n\n      .sessions-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS10aW1lLXRyYWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLDBDQUEwQztNQUMxQyx5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLGdDQUFnQztJQUNsQzs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7SUFDVjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZUFBZTtNQUNmLDRCQUE0QjtJQUM5Qjs7SUFFQTtNQUNFLFdBQVcsVUFBVSxFQUFFO01BQ3ZCLE1BQU0sWUFBWSxFQUFFO0lBQ3RCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLDhCQUE4QjtJQUNoQzs7SUFFQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixTQUFTO01BQ1QsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UscUJBQXFCO01BQ3JCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCOztJQUVB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QUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIscUNBQXFDO01BQ3JDLGNBQWM7TUFDZCxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFDckIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsZUFBZTtNQUNmLGNBQWM7SUFDaEI7O0lBRUE7TUFDRTtRQUNFLDBCQUEwQjtNQUM1Qjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSwwQkFBMEI7TUFDNUI7SUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5lbXBsb3llZS10aW1lLXRyYWNrZXIge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgfVxuXG4gICAgLnRyYWNrZXItbWFpbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICB9XG5cbiAgICAudHJhY2tlci1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC50cmFja2VyLWhlYWRlciBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5hY3RpdmUtaW5kaWNhdG9yIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgY29sb3I6ICMxNjY1MzQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5hY3RpdmUtaW5kaWNhdG9yIGkge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgNTAlIHsgb3BhY2l0eTogMC41OyB9XG4gICAgfVxuXG4gICAgLmN1cnJlbnQtdGFzay1pbmZvIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRhc2staW5mby1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGY5ZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzYjgyZjY7XG4gICAgfVxuXG4gICAgLnRhc2stdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC50YXNrLW1ldGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRhc2stc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cblxuICAgIC50YXNrLXN0YXR1cy5zdGF0dXMtdG9kbyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xuICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgfVxuXG4gICAgLnRhc2stc3RhdHVzLnN0YXR1cy1pbl9wcm9ncmVzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xuICAgICAgY29sb3I6ICMxZTQwYWY7XG4gICAgfVxuXG4gICAgLnRhc2stc3RhdHVzLnN0YXR1cy1kb25lIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgICBjb2xvcjogIzE2NjUzNDtcbiAgICB9XG5cbiAgICAudGFzay1wcmlvcml0eSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLnRhc2stcHJpb3JpdHkucHJpb3JpdHktaGlnaCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xuICAgICAgY29sb3I6ICNkYzI2MjY7XG4gICAgfVxuXG4gICAgLnRhc2stcHJpb3JpdHkucHJpb3JpdHktbWVkaXVtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gICAgICBjb2xvcjogI2Q5NzcwNjtcbiAgICB9XG5cbiAgICAudGFzay1wcmlvcml0eS5wcmlvcml0eS1sb3cge1xuICAgICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICAgIGNvbG9yOiAjMTY2NTM0O1xuICAgIH1cblxuICAgIC50aW1lci1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cblxuICAgIC50aW1lci1kaXNwbGF5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuICAgIH1cblxuICAgIC50aW1lci12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAuc2Vzc2lvbi1zdGF0dXMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIH1cblxuICAgIC5jb250cm9scy1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbjogMjRweCAwO1xuICAgIH1cblxuICAgIC5jb250cm9sLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5idG4tY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLmJ0bi1zdGFydCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYnRuLXN0YXJ0OmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuNCk7XG4gICAgfVxuXG4gICAgLmJ0bi1wYXVzZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU5ZTBiLCAjZDk3NzA2KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYnRuLXBhdXNlOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuNCk7XG4gICAgfVxuXG4gICAgLmJ0bi1yZXN1bWUge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzNiODJmNiwgIzI1NjNlYik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmJ0bi1yZXN1bWU6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDU5LCAxMzAsIDI0NiwgMC40KTtcbiAgICB9XG5cbiAgICAuYnRuLXN0b3Age1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmNDQ0NCwgI2RjMjYyNik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmJ0bi1zdG9wOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyMzksIDY4LCA2OCwgMC40KTtcbiAgICB9XG5cbiAgICAubm8tdGFzay1tZXNzYWdlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2QxZDVkYjtcbiAgICB9XG5cbiAgICAubm8tdGFzay1tZXNzYWdlIGkge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cblxuICAgIC50b2RheS1zdW1tYXJ5IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLnRvZGF5LXN1bW1hcnkgaDQge1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuc3VtbWFyeS1zdGF0cyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLnN0YXQtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgLnN0YXQtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAudG9kYXktc2Vzc2lvbnMgaDQge1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuc2Vzc2lvbnMtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTgwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5zZXNzaW9uLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzNiODJmNjtcbiAgICB9XG5cbiAgICAuc2Vzc2lvbi10YXNrLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuc2Vzc2lvbi10aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgY29sb3I6ICMzYjgyZjY7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnNlc3Npb24tc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnNlc3Npb24tc3RhdHVzLnN0YXR1cy1jb21wbGV0ZWQge1xuICAgICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICAgIGNvbG9yOiAjMTY2NTM0O1xuICAgIH1cblxuICAgIC5zZXNzaW9uLXN0YXR1cy5zdGF0dXMtcGF1c2VkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gICAgICBjb2xvcjogIzkyNDAwZTtcbiAgICB9XG5cbiAgICAuc2Vzc2lvbi1zdGF0dXMuc3RhdHVzLXJ1bm5pbmcge1xuICAgICAgYmFja2dyb3VuZDogI2RiZWFmZTtcbiAgICAgIGNvbG9yOiAjMWU0MGFmO1xuICAgIH1cblxuICAgIC5zZXNzaW9uLXRpbWUtcmFuZ2Uge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuY29udHJvbC1idXR0b25zIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG5cbiAgICAgIC50aW1lci12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIH1cblxuICAgICAgLnNlc3Npb25zLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6694:
/*!*********************************************************************!*\
  !*** ./src/app/components/employee/employee-timesheet.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeTimesheetComponent: () => (/* binding */ EmployeeTimesheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





function EmployeeTimesheetComponent_div_39_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r1.description, " ");
  }
}
function EmployeeTimesheetComponent_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 42)(8, "div", 43)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 45)(14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EmployeeTimesheetComponent_div_39_div_2_div_20_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(entry_r1.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("status-" + entry_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusLabel(entry_r1.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1.task_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.formatTime(entry_r1.start_time), " - ", ctx_r1.formatTime(entry_r1.end_time), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDuration(entry_r1.duration_seconds), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r1.description);
  }
}
function EmployeeTimesheetComponent_div_39_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const summary_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDate(summary_r3.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDuration(summary_r3.totalSeconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", summary_r3.entries.length, " session(s)");
  }
}
function EmployeeTimesheetComponent_div_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "R\u00E9sum\u00E9 Journalier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeTimesheetComponent_div_39_div_3_div_4_Template, 7, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dailySummaries);
  }
}
function EmployeeTimesheetComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeTimesheetComponent_div_39_div_2_Template, 21, 10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeeTimesheetComponent_div_39_div_3_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dailySummaries.length > 0);
  }
}
function EmployeeTimesheetComponent_div_40_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67)(1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDayName(day_r4.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDate(day_r4.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDuration(day_r4.totalSeconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", day_r4.entries.length, " session(s)");
  }
}
function EmployeeTimesheetComponent_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmployeeTimesheetComponent_div_40_div_2_div_7_Template, 9, 4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const week_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatWeekRange(week_r5.weekStart, week_r5.weekEnd));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDuration(week_r5.totalSeconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", week_r5.dailySummaries);
  }
}
function EmployeeTimesheetComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeTimesheetComponent_div_40_div_2_Template, 8, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.weeklySummaries);
  }
}
function EmployeeTimesheetComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aucune donn\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vous n'avez pas encore enregistr\u00E9 de temps de travail pour cette p\u00E9riode.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class EmployeeTimesheetComponent {
  constructor() {
    this.viewMode = 'daily';
    this.selectedPeriod = 'current_week';
    this.selectedStatus = 'all';
    this.timesheetEntries = [];
    this.filteredEntries = [];
    this.dailySummaries = [];
    this.weeklySummaries = [];
  }
  ngOnInit() {
    this.loadTimesheetData();
  }
  loadTimesheetData() {
    // Simulation des données - à remplacer par un appel API réel
    this.timesheetEntries = [{
      id: 1,
      date: '2024-01-08',
      task_title: 'Finaliser le rapport mensuel',
      project_name: 'Rapports Financiers',
      hours: 2.5,
      description: 'Travail sur les données financières du mois',
      status: 'approved',
      start_time: '09:00',
      end_time: '11:30',
      duration_seconds: 9000
    }, {
      id: 2,
      date: '2024-01-08',
      task_title: 'Réunion client - Présentation',
      project_name: 'Projet Alpha',
      hours: 1.0,
      description: 'Préparation de la présentation client',
      status: 'submitted',
      start_time: '14:00',
      end_time: '15:00',
      duration_seconds: 3600
    }, {
      id: 3,
      date: '2024-01-09',
      task_title: 'Code review - Module authentification',
      project_name: 'Développement',
      hours: 3.0,
      description: 'Revue du code et corrections',
      status: 'draft',
      start_time: '10:00',
      end_time: '13:00',
      duration_seconds: 10800
    }, {
      id: 4,
      date: '2024-01-10',
      task_title: 'Mise à jour documentation',
      project_name: 'Documentation',
      hours: 1.5,
      description: 'Mise à jour des guides utilisateur',
      status: 'approved',
      start_time: '09:30',
      end_time: '11:00',
      duration_seconds: 5400
    }];
    this.filterEntries();
    this.calculateSummaries();
  }
  filterEntries() {
    this.filteredEntries = this.timesheetEntries.filter(entry => {
      if (this.selectedStatus !== 'all' && entry.status !== this.selectedStatus) {
        return false;
      }
      return true;
    });
  }
  calculateSummaries() {
    // Calcul des résumés journaliers
    const dailyMap = new Map();
    this.timesheetEntries.forEach(entry => {
      if (!dailyMap.has(entry.date)) {
        dailyMap.set(entry.date, []);
      }
      dailyMap.get(entry.date).push(entry);
    });
    this.dailySummaries = Array.from(dailyMap.entries()).map(([date, entries]) => ({
      date,
      totalHours: entries.reduce((sum, entry) => sum + entry.hours, 0),
      totalSeconds: entries.reduce((sum, entry) => sum + entry.duration_seconds, 0),
      entries
    }));
    // Calcul des résumés hebdomadaires
    this.calculateWeeklySummaries();
  }
  calculateWeeklySummaries() {
    const weeks = new Map();
    this.timesheetEntries.forEach(entry => {
      const date = new Date(entry.date);
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay()); // Dimanche comme début de semaine
      const weekKey = weekStart.toISOString().split('T')[0];
      if (!weeks.has(weekKey)) {
        weeks.set(weekKey, []);
      }
      weeks.get(weekKey).push(entry);
    });
    this.weeklySummaries = Array.from(weeks.entries()).map(([weekStart, entries]) => {
      const startDate = new Date(weekStart);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);
      const dailySummaries = this.dailySummaries.filter(summary => {
        const summaryDate = new Date(summary.date);
        return summaryDate >= startDate && summaryDate <= endDate;
      });
      return {
        weekStart,
        weekEnd: endDate.toISOString().split('T')[0],
        totalHours: entries.reduce((sum, entry) => sum + entry.hours, 0),
        totalSeconds: entries.reduce((sum, entry) => sum + entry.duration_seconds, 0),
        dailySummaries
      };
    });
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  }
  formatTime(timeString) {
    return timeString;
  }
  formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    return `${hours}h ${minutes}m`;
  }
  formatWeekRange(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startStr = startDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short'
    });
    const endStr = endDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short'
    });
    return `${startStr} - ${endStr}`;
  }
  formatDayName(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'short'
    });
  }
  getStatusLabel(status) {
    switch (status) {
      case 'draft':
        return 'Brouillon';
      case 'submitted':
        return 'Soumis';
      case 'approved':
        return 'Approuvé';
      case 'rejected':
        return 'Rejeté';
      default:
        return status;
    }
  }
  get totalSeconds() {
    return this.timesheetEntries.reduce((sum, entry) => sum + entry.duration_seconds, 0);
  }
  get totalEntries() {
    return this.timesheetEntries.length;
  }
  get averageHoursPerDay() {
    const uniqueDays = new Set(this.timesheetEntries.map(entry => entry.date)).size;
    return uniqueDays > 0 ? this.totalSeconds / 3600 / uniqueDays : 0;
  }
  get maxDaySeconds() {
    return Math.max(...this.dailySummaries.map(day => day.totalSeconds), 0);
  }
  static {
    this.ɵfac = function EmployeeTimesheetComponent_Factory(t) {
      return new (t || EmployeeTimesheetComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeTimesheetComponent,
      selectors: [["app-employee-timesheet"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 79,
      vars: 13,
      consts: [[1, "employee-timesheet"], [1, "timesheet-header"], [1, "bi", "bi-clock-history"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], [1, "filters-section"], [1, "filter-group"], [3, "ngModelChange", "change", "ngModel"], ["value", "current_week"], ["value", "last_week"], ["value", "current_month"], ["value", "last_month"], ["value", "last_30_days"], ["value", "all"], ["value", "draft"], ["value", "submitted"], ["value", "approved"], ["value", "rejected"], ["class", "daily-view", 4, "ngIf"], ["class", "weekly-view", 4, "ngIf"], [1, "statistics-section"], [1, "bi", "bi-bar-chart"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "blue"], [1, "stat-content"], [1, "stat-icon", "green"], [1, "bi", "bi-calendar-check"], [1, "stat-icon", "orange"], [1, "bi", "bi-graph-up"], [1, "stat-icon", "purple"], [1, "bi", "bi-trophy"], ["class", "no-data-message", 4, "ngIf"], [1, "daily-view"], [1, "daily-entries"], ["class", "timesheet-entry", 4, "ngFor", "ngForOf"], ["class", "daily-summary", 4, "ngIf"], [1, "timesheet-entry"], [1, "entry-header"], [1, "entry-date"], [1, "bi", "bi-calendar-day"], [1, "entry-status"], [1, "entry-content"], [1, "entry-task"], [1, "project-name"], [1, "entry-time"], [1, "time-range"], [1, "bi", "bi-clock"], [1, "duration"], [1, "bi", "bi-stopwatch"], ["class", "entry-description", 4, "ngIf"], [1, "entry-description"], [1, "daily-summary"], [1, "summary-grid"], ["class", "summary-card", 4, "ngFor", "ngForOf"], [1, "summary-card"], [1, "summary-date"], [1, "summary-hours"], [1, "summary-entries"], [1, "weekly-view"], [1, "weekly-entries"], ["class", "week-summary", 4, "ngFor", "ngForOf"], [1, "week-summary"], [1, "week-header"], [1, "week-total"], [1, "week-details"], ["class", "day-summary", 4, "ngFor", "ngForOf"], [1, "day-summary"], [1, "day-name"], [1, "day-date"], [1, "day-hours"], [1, "day-entries"], [1, "no-data-message"], [1, "bi", "bi-calendar-x"]],
      template: function EmployeeTimesheetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Historique des Temps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeTimesheetComponent_Template_button_click_6_listener() {
            return ctx.setViewMode("daily");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Vue Journali\u00E8re ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeTimesheetComponent_Template_button_click_8_listener() {
            return ctx.setViewMode("weekly");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Vue Hebdomadaire ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "P\u00E9riode:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeTimesheetComponent_Template_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmployeeTimesheetComponent_Template_select_change_14_listener() {
            return ctx.loadTimesheetData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cette semaine");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Semaine derni\u00E8re");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ce mois");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mois dernier");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "30 derniers jours");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6)(26, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Statut:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeTimesheetComponent_Template_select_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmployeeTimesheetComponent_Template_select_change_28_listener() {
            return ctx.filterEntries();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Brouillon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Soumis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Approuv\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Rejet\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EmployeeTimesheetComponent_div_39_Template, 4, 2, "div", 18)(40, EmployeeTimesheetComponent_div_40_Template, 3, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20)(42, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Statistiques");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22)(46, "div", 23)(47, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25)(50, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Total travaill\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23)(55, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25)(58, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sessions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23)(63, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25)(66, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Moyenne/jour");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 23)(71, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 25)(74, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Journ\u00E9e record");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, EmployeeTimesheetComponent_div_78_Template, 6, 0, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode === "daily");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode === "weekly");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedPeriod);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewMode === "daily");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewMode === "weekly");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatDuration(ctx.totalSeconds));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalEntries);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.averageHoursPerDay.toFixed(1), "h");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatDuration(ctx.maxDaySeconds));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredEntries.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".employee-timesheet[_ngcontent-%COMP%] {\n      background: white;\n      border-radius: 16px;\n      padding: 24px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n      border: 1px solid #e5e7eb;\n    }\n\n    .timesheet-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 24px;\n      padding-bottom: 16px;\n      border-bottom: 1px solid #e5e7eb;\n    }\n\n    .timesheet-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 20px;\n      font-weight: 700;\n      color: #1f2937;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .view-toggle[_ngcontent-%COMP%] {\n      display: flex;\n      background: #f3f4f6;\n      border-radius: 8px;\n      padding: 4px;\n    }\n\n    .toggle-btn[_ngcontent-%COMP%] {\n      background: transparent;\n      border: none;\n      padding: 8px 16px;\n      border-radius: 6px;\n      font-size: 14px;\n      font-weight: 500;\n      cursor: pointer;\n      transition: all 0.2s;\n      color: #6b7280;\n    }\n\n    .toggle-btn.active[_ngcontent-%COMP%] {\n      background: white;\n      color: #1f2937;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    }\n\n    .filters-section[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 20px;\n      margin-bottom: 24px;\n      padding: 20px;\n      background: #f9fafb;\n      border-radius: 12px;\n      border: 1px solid #e5e7eb;\n    }\n\n    .filter-group[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n    }\n\n    .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n      font-size: 14px;\n      font-weight: 600;\n      color: #374151;\n    }\n\n    .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n      padding: 8px 12px;\n      border: 1px solid #d1d5db;\n      border-radius: 8px;\n      font-size: 14px;\n      background: white;\n    }\n\n    .daily-entries[_ngcontent-%COMP%] {\n      margin-bottom: 32px;\n    }\n\n    .timesheet-entry[_ngcontent-%COMP%] {\n      background: #f9fafb;\n      border: 1px solid #e5e7eb;\n      border-radius: 12px;\n      padding: 20px;\n      margin-bottom: 16px;\n    }\n\n    .entry-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 16px;\n    }\n\n    .entry-date[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 14px;\n      font-weight: 600;\n      color: #1f2937;\n    }\n\n    .entry-status[_ngcontent-%COMP%] {\n      padding: 6px 12px;\n      border-radius: 20px;\n      font-size: 11px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n\n    .status-draft[_ngcontent-%COMP%] {\n      background: #e5e7eb;\n      color: #374151;\n    }\n\n    .status-submitted[_ngcontent-%COMP%] {\n      background: #dbeafe;\n      color: #1e40af;\n    }\n\n    .status-approved[_ngcontent-%COMP%] {\n      background: #dcfce7;\n      color: #166534;\n    }\n\n    .status-rejected[_ngcontent-%COMP%] {\n      background: #fef2f2;\n      color: #dc2626;\n    }\n\n    .entry-content[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      gap: 16px;\n      align-items: start;\n    }\n\n    .entry-task[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n\n    .entry-task[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      font-size: 16px;\n      color: #1f2937;\n    }\n\n    .project-name[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #6b7280;\n      background: #e5e7eb;\n      padding: 2px 6px;\n      border-radius: 4px;\n      align-self: flex-start;\n    }\n\n    .entry-time[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n      text-align: right;\n    }\n\n    .time-range[_ngcontent-%COMP%], .duration[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      font-size: 14px;\n      color: #374151;\n      font-weight: 500;\n    }\n\n    .entry-description[_ngcontent-%COMP%] {\n      grid-column: 1 / -1;\n      margin-top: 12px;\n      padding: 12px;\n      background: white;\n      border-radius: 8px;\n      border-left: 3px solid #3b82f6;\n      font-size: 14px;\n      color: #6b7280;\n      font-style: italic;\n    }\n\n    .daily-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 16px 0;\n      font-size: 16px;\n      font-weight: 600;\n      color: #374151;\n    }\n\n    .summary-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      gap: 16px;\n    }\n\n    .summary-card[_ngcontent-%COMP%] {\n      background: #f9fafb;\n      padding: 16px;\n      border-radius: 12px;\n      border: 1px solid #e5e7eb;\n      text-align: center;\n    }\n\n    .summary-date[_ngcontent-%COMP%] {\n      font-size: 14px;\n      font-weight: 600;\n      color: #1f2937;\n      margin-bottom: 8px;\n    }\n\n    .summary-hours[_ngcontent-%COMP%] {\n      font-size: 18px;\n      font-weight: 700;\n      color: #3b82f6;\n      margin-bottom: 4px;\n    }\n\n    .summary-entries[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #6b7280;\n    }\n\n    .weekly-view[_ngcontent-%COMP%] {\n      margin-bottom: 32px;\n    }\n\n    .week-summary[_ngcontent-%COMP%] {\n      background: #f9fafb;\n      border: 1px solid #e5e7eb;\n      border-radius: 12px;\n      padding: 20px;\n      margin-bottom: 16px;\n    }\n\n    .week-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 16px;\n      padding-bottom: 12px;\n      border-bottom: 1px solid #e5e7eb;\n    }\n\n    .week-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 16px;\n      font-weight: 600;\n      color: #1f2937;\n    }\n\n    .week-total[_ngcontent-%COMP%] {\n      font-size: 18px;\n      font-weight: 700;\n      color: #3b82f6;\n    }\n\n    .week-details[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n      gap: 12px;\n    }\n\n    .day-summary[_ngcontent-%COMP%] {\n      background: white;\n      padding: 12px;\n      border-radius: 8px;\n      border: 1px solid #e5e7eb;\n      text-align: center;\n    }\n\n    .day-name[_ngcontent-%COMP%] {\n      font-size: 12px;\n      font-weight: 600;\n      color: #6b7280;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n      margin-bottom: 4px;\n    }\n\n    .day-date[_ngcontent-%COMP%] {\n      font-size: 14px;\n      font-weight: 500;\n      color: #374151;\n      margin-bottom: 8px;\n    }\n\n    .day-hours[_ngcontent-%COMP%] {\n      font-size: 16px;\n      font-weight: 700;\n      color: #3b82f6;\n      margin-bottom: 4px;\n    }\n\n    .day-entries[_ngcontent-%COMP%] {\n      font-size: 11px;\n      color: #6b7280;\n    }\n\n    .statistics-section[_ngcontent-%COMP%] {\n      padding-top: 24px;\n      border-top: 1px solid #e5e7eb;\n    }\n\n    .statistics-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 20px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #1f2937;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .stats-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      gap: 16px;\n    }\n\n    .stat-card[_ngcontent-%COMP%] {\n      background: #f9fafb;\n      border: 1px solid #e5e7eb;\n      border-radius: 12px;\n      padding: 20px;\n      display: flex;\n      align-items: center;\n      gap: 16px;\n    }\n\n    .stat-icon[_ngcontent-%COMP%] {\n      width: 48px;\n      height: 48px;\n      border-radius: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 20px;\n    }\n\n    .stat-icon.blue[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #3b82f6, #1d4ed8);\n      color: white;\n    }\n\n    .stat-icon.green[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #10b981, #059669);\n      color: white;\n    }\n\n    .stat-icon.orange[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #f59e0b, #d97706);\n      color: white;\n    }\n\n    .stat-icon.purple[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #8b5cf6, #7c3aed);\n      color: white;\n    }\n\n    .stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0 0 4px 0;\n      font-size: 24px;\n      font-weight: 700;\n      color: #1f2937;\n    }\n\n    .stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 12px;\n      color: #6b7280;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n      font-weight: 600;\n    }\n\n    .no-data-message[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 60px 20px;\n      color: #6b7280;\n    }\n\n    .no-data-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 48px;\n      display: block;\n      margin-bottom: 16px;\n      opacity: 0.5;\n    }\n\n    .no-data-message[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 8px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #374151;\n    }\n\n    .no-data-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 14px;\n    }\n\n    \n\n    @media (max-width: 768px) {\n      .timesheet-header[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 12px;\n      }\n\n      .filters-section[_ngcontent-%COMP%] {\n        flex-direction: column;\n        gap: 16px;\n      }\n\n      .entry-content[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        gap: 12px;\n      }\n\n      .entry-time[_ngcontent-%COMP%] {\n        text-align: left;\n      }\n\n      .stats-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n\n      .week-details[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS10aW1lc2hlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLDBDQUEwQztNQUMxQyx5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLGdDQUFnQztJQUNsQzs7SUFFQTtNQUNFLFNBQVM7TUFDVCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7SUFDVjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixjQUFjO01BQ2Qsd0NBQXdDO0lBQzFDOztJQUVBO01BQ0UsYUFBYTtNQUNiLFNBQVM7TUFDVCxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixRQUFRO0lBQ1Y7O0lBRUE7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLHlCQUF5QjtN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UztNQUNYOztNQUVBO1FBQ0Usc0JBQXNCO1FBQ3RCLFNBQVM7TUFDWDs7TUFFQTtRQUNFLDBCQUEwQjtRQUMxQixTQUFTO01BQ1g7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSwwQkFBMEI7TUFDNUI7O01BRUE7UUFDRSwwQkFBMEI7TUFDNUI7SUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5lbXBsb3llZS10aW1lc2hlZXQge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgfVxuXG4gICAgLnRpbWVzaGVldC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICB9XG5cbiAgICAudGltZXNoZWV0LWhlYWRlciBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC52aWV3LXRvZ2dsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICB9XG5cbiAgICAudG9nZ2xlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgfVxuXG4gICAgLnRvZ2dsZS1idG4uYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cblxuICAgIC5maWx0ZXJzLXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIH1cblxuICAgIC5maWx0ZXItZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuZmlsdGVyLWdyb3VwIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzM3NDE1MTtcbiAgICB9XG5cbiAgICAuZmlsdGVyLWdyb3VwIHNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZGFpbHktZW50cmllcyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC50aW1lc2hlZXQtZW50cnkge1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLmVudHJ5LWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLmVudHJ5LWRhdGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICB9XG5cbiAgICAuZW50cnktc3RhdHVzIHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cblxuICAgIC5zdGF0dXMtZHJhZnQge1xuICAgICAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgIH1cblxuICAgIC5zdGF0dXMtc3VibWl0dGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkYmVhZmU7XG4gICAgICBjb2xvcjogIzFlNDBhZjtcbiAgICB9XG5cbiAgICAuc3RhdHVzLWFwcHJvdmVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgICBjb2xvcjogIzE2NjUzNDtcbiAgICB9XG5cbiAgICAuc3RhdHVzLXJlamVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XG4gICAgICBjb2xvcjogI2RjMjYyNjtcbiAgICB9XG5cbiAgICAuZW50cnktY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICB9XG5cbiAgICAuZW50cnktdGFzayB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5lbnRyeS10YXNrIHN0cm9uZyB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICB9XG5cbiAgICAucHJvamVjdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5lbnRyeS10aW1lIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAudGltZS1yYW5nZSwgLmR1cmF0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzM3NDE1MTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmVudHJ5LWRlc2NyaXB0aW9uIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjM2I4MmY2O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuXG4gICAgLmRhaWx5LXN1bW1hcnkgaDQge1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgIH1cblxuICAgIC5zdW1tYXJ5LWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuc3VtbWFyeS1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnN1bW1hcnktZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnN1bW1hcnktaG91cnMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjM2I4MmY2O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5zdW1tYXJ5LWVudHJpZXMge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgfVxuXG4gICAgLndlZWtseS12aWV3IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLndlZWstc3VtbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAud2Vlay1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICB9XG5cbiAgICAud2Vlay1oZWFkZXIgaDQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgIH1cblxuICAgIC53ZWVrLXRvdGFsIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzNiODJmNjtcbiAgICB9XG5cbiAgICAud2Vlay1kZXRhaWxzIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAuZGF5LXN1bW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZGF5LW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuZGF5LWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5kYXktaG91cnMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjM2I4MmY2O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5kYXktZW50cmllcyB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICB9XG5cbiAgICAuc3RhdGlzdGljcy1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgfVxuXG4gICAgLnN0YXRpc3RpY3Mtc2VjdGlvbiBoNCB7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5zdGF0cy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuc3RhdC1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuc3RhdC1pY29uIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnN0YXQtaWNvbi5ibHVlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzYjgyZjYsICMxZDRlZDgpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24uZ3JlZW4ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnN0YXQtaWNvbi5vcmFuZ2Uge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2Q5NzcwNik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnN0YXQtaWNvbi5wdXJwbGUge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiNWNmNiwgIzdjM2FlZCk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnN0YXQtY29udGVudCBoMyB7XG4gICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICB9XG5cbiAgICAuc3RhdC1jb250ZW50IHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAubm8tZGF0YS1tZXNzYWdlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIH1cblxuICAgIC5uby1kYXRhLW1lc3NhZ2UgaSB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLm5vLWRhdGEtbWVzc2FnZSBoNCB7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzM3NDE1MTtcbiAgICB9XG5cbiAgICAubm8tZGF0YS1tZXNzYWdlIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC50aW1lc2hlZXQtaGVhZGVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmZpbHRlcnMtc2VjdGlvbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmVudHJ5LWNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuZW50cnktdGltZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0cy1ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG5cbiAgICAgIC53ZWVrLWRldGFpbHMge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1098:
/*!********************************************************!*\
  !*** ./src/app/components/employee/employee.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeModule: () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _employee_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-dashboard.component */ 2178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _employee_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeDashboardComponent
}];
class EmployeeModule {
  static {
    this.ɵfac = function EmployeeModule_Factory(t) {
      return new (t || EmployeeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _employee_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeDashboardComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmployeeModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _employee_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeDashboardComponent]
  });
})();

/***/ }),

/***/ 3505:
/*!*****************************************************************!*\
  !*** ./src/app/components/employee/skills-profile.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsProfileComponent: () => (/* binding */ SkillsProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _models_skills_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/skills.model */ 7452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/skills.service */ 8772);








function SkillsProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Score Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 12)(7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Comp\u00E9tences");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12)(12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Sp\u00E9cialit\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.skillsProfile.overallScore, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.skillsProfile.skills.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.skillsProfile.technologies.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.skillsProfile.specialities.length);
  }
}
function SkillsProfileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Chargement du profil... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SkillsProfileComponent_div_12_div_12_div_7_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r5.name, " ");
  }
}
function SkillsProfileComponent_div_12_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SkillsProfileComponent_div_12_div_12_div_7_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.addSkill());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 36)(3, "div", 37)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nom de la comp\u00E9tence");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 37)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SkillsProfileComponent_div_12_div_12_div_7_option_11_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 36)(13, "div", 37)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Niveau (1-5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 37)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Ann\u00E9es d'exp\u00E9rience");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 37)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Comp\u00E9tence valid\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 45)(28, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_12_div_7_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.resetSkillForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.skillsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.skillCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getLevelLabel(ctx_r0.skillsForm.value.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.editingSkill ? "Mettre \u00E0 jour" : "Ajouter", " ");
  }
}
function SkillsProfileComponent_div_12_div_12_div_9_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713 Valid\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SkillsProfileComponent_div_12_div_12_div_9_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Derni\u00E8re utilisation: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, skill_r7.lastUsed, "shortDate"), " ");
  }
}
function SkillsProfileComponent_div_12_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 53)(8, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_12_div_9_Template_button_click_8_listener() {
      const skill_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.editSkill(skill_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_12_div_9_Template_button_click_10_listener() {
      const skill_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.deleteSkill(skill_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 58)(13, "div", 59)(14, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SkillsProfileComponent_div_12_div_12_div_9_span_19_Template, 2, 0, "span", 64)(20, SkillsProfileComponent_div_12_div_12_div_9_span_20_Template, 3, 4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", skill_r7.level * 20, "%")("background-color", ctx_r0.getLevelColor(skill_r7.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.getLevelLabel(skill_r7.level), " (", skill_r7.yearsExperience, " ans)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", skill_r7.validated);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", skill_r7.lastUsed);
  }
}
function SkillsProfileComponent_div_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Mes Comp\u00E9tences");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_12_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.showAddSkillForm = !ctx_r0.showAddSkillForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Ajouter une comp\u00E9tence ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SkillsProfileComponent_div_12_div_12_div_7_Template, 32, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SkillsProfileComponent_div_12_div_12_div_9_Template, 21, 10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showAddSkillForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.skillsProfile.skills);
  }
}
function SkillsProfileComponent_div_12_div_13_div_7_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r10.name, " ");
  }
}
function SkillsProfileComponent_div_12_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "form", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SkillsProfileComponent_div_12_div_13_div_7_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.addTechnology());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 36)(3, "div", 37)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nom de la technologie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 37)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SkillsProfileComponent_div_12_div_13_div_7_option_11_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 36)(13, "div", 37)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Ma\u00EEtrise");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "select", 72)(17, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Interm\u00E9diaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Avanc\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 37)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Nombre de projets");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 45)(30, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_13_div_7_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.resetTechnologyForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.technologiesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.technologyCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.editingTechnology ? "Mettre \u00E0 jour" : "Ajouter", " ");
  }
}
function SkillsProfileComponent_div_12_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 82)(8, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_13_div_9_Template_button_click_8_listener() {
      const tech_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.editTechnology(tech_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_13_div_9_Template_button_click_10_listener() {
      const tech_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.deleteTechnology(tech_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 83)(13, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 85)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const tech_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tech_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tech_r12.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r0.getProficiencyColor(tech_r12.proficiency));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.getProficiencyLabel(tech_r12.proficiency), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", tech_r12.projects, " projet(s)");
  }
}
function SkillsProfileComponent_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Mes Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.showAddTechnologyForm = !ctx_r0.showAddTechnologyForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Ajouter une technologie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SkillsProfileComponent_div_12_div_13_div_7_Template, 34, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SkillsProfileComponent_div_12_div_13_div_9_Template, 18, 6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showAddTechnologyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.skillsProfile.technologies);
  }
}
function SkillsProfileComponent_div_12_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "form", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SkillsProfileComponent_div_12_div_14_div_7_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.addSpeciality());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 37)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nom de la sp\u00E9cialit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 37)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Domaine");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 37)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "textarea", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 45)(15, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_14_div_7_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.resetSpecialityForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.specialitiesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.editingSpeciality ? "Mettre \u00E0 jour" : "Ajouter", " ");
  }
}
function SkillsProfileComponent_div_12_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 96)(8, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_14_div_9_Template_button_click_8_listener() {
      const speciality_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.editSpeciality(speciality_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_14_div_9_Template_button_click_10_listener() {
      const speciality_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.deleteSpeciality(speciality_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const speciality_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](speciality_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](speciality_r16.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", speciality_r16.description, " ");
  }
}
function SkillsProfileComponent_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Mes Sp\u00E9cialit\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_div_14_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.showAddSpecialityForm = !ctx_r0.showAddSpecialityForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Ajouter une sp\u00E9cialit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SkillsProfileComponent_div_12_div_14_div_7_Template, 19, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SkillsProfileComponent_div_12_div_14_div_9_Template, 14, 3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showAddSpecialityForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.skillsProfile.specialities);
  }
}
function SkillsProfileComponent_div_12_div_15_div_5_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const strength_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](strength_r17);
  }
}
function SkillsProfileComponent_div_12_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Forces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SkillsProfileComponent_div_12_div_15_div_5_li_5_Template, 2, 1, "li", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.skillsProfile.strengths);
  }
}
function SkillsProfileComponent_div_12_div_15_div_6_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const area_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](area_r18);
  }
}
function SkillsProfileComponent_div_12_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 106)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Axes d'am\u00E9lioration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SkillsProfileComponent_div_12_div_15_div_6_li_5_Template, 2, 1, "li", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.skillsProfile.improvementAreas);
  }
}
function SkillsProfileComponent_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Analyse du Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SkillsProfileComponent_div_12_div_15_div_5_Template, 6, 1, "div", 101)(6, SkillsProfileComponent_div_12_div_15_div_6_Template, 6, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.skillsProfile.strengths.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.skillsProfile.improvementAreas.length > 0);
  }
}
function SkillsProfileComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.activeTab = "skills");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Comp\u00E9tences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.activeTab = "technologies");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Technologies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_div_12_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.activeTab = "specialities");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Sp\u00E9cialit\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SkillsProfileComponent_div_12_div_12_Template, 10, 2, "div", 25)(13, SkillsProfileComponent_div_12_div_13_Template, 10, 2, "div", 25)(14, SkillsProfileComponent_div_12_div_14_Template, 10, 2, "div", 25)(15, SkillsProfileComponent_div_12_div_15_Template, 7, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.activeTab === "skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.activeTab === "technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.activeTab === "specialities");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "specialities");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.skillsProfile.strengths.length > 0 || ctx_r0.skillsProfile.improvementAreas.length > 0);
  }
}
class SkillsProfileComponent {
  constructor(fb, skillsService) {
    this.fb = fb;
    this.skillsService = skillsService;
    this.currentEmployeeId = 0;
    this.skillsProfile = null;
    this.loading = false;
    this.saving = false;
    this.skillCategories = this.skillsService.getSkillCategories();
    this.technologyCategories = _models_skills_model__WEBPACK_IMPORTED_MODULE_0__.TECHNOLOGY_CATEGORIES;
    // États pour l'UI
    this.activeTab = 'skills';
    this.showAddSkillForm = false;
    this.showAddTechnologyForm = false;
    this.showAddSpecialityForm = false;
    this.editingSkill = null;
    this.editingTechnology = null;
    this.editingSpeciality = null;
    this.initializeForms();
  }
  ngOnInit() {
    this.getCurrentEmployeeId();
    this.loadSkillsProfile();
  }
  getCurrentEmployeeId() {
    const employeeData = localStorage.getItem('currentEmployee');
    if (employeeData) {
      const employee = JSON.parse(employeeData);
      this.currentEmployeeId = employee.id;
    }
  }
  initializeForms() {
    // Formulaire pour les compétences
    this.skillsForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      category: ['technical', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      level: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(5)]],
      yearsExperience: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      validated: [false]
    });
    // Formulaire pour les technologies
    this.technologiesForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      category: ['frontend', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      proficiency: ['intermediate', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      projects: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]]
    });
    // Formulaire pour les spécialités
    this.specialitiesForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      domain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  loadSkillsProfile() {
    this.loading = true;
    this.skillsService.getEmployeeSkillsProfile(this.currentEmployeeId).subscribe({
      next: profile => {
        this.skillsProfile = profile;
        this.loading = false;
        console.log('Profil de compétences chargé depuis l\'API:', profile);
      },
      error: error => {
        console.error('Erreur lors du chargement du profil:', error);
        this.loading = false;
        // Utiliser des données mockées en cas d'erreur API
        this.loadMockSkillsProfile();
      }
    });
  }
  // Charger des données mockées pour démonstration
  loadMockSkillsProfile() {
    this.skillsProfile = {
      employeeId: this.currentEmployeeId,
      skills: [{
        id: 1,
        name: 'JavaScript',
        category: 'technical',
        level: 4,
        yearsExperience: 3,
        validated: true,
        lastUsed: new Date()
      }, {
        id: 2,
        name: 'React',
        category: 'technical',
        level: 4,
        yearsExperience: 2,
        validated: true,
        lastUsed: new Date()
      }, {
        id: 3,
        name: 'Node.js',
        category: 'technical',
        level: 3,
        yearsExperience: 2,
        validated: false,
        lastUsed: new Date()
      }],
      technologies: [{
        id: 1,
        name: 'Angular',
        category: 'frontend',
        proficiency: 'advanced',
        projects: 5
      }, {
        id: 2,
        name: 'Docker',
        category: 'devops',
        proficiency: 'intermediate',
        projects: 2
      }],
      specialities: [{
        id: 1,
        name: 'Développement Frontend',
        domain: 'Informatique',
        description: 'Spécialisé dans les applications web modernes avec React et Angular'
      }],
      overallScore: 75,
      lastUpdated: new Date(),
      strengths: ['Expertise en JavaScript et React', 'Solide expérience en développement frontend'],
      improvementAreas: ['Améliorer les compétences backend', 'Valider plus de certifications']
    };
    console.log('Profil mocké chargé:', this.skillsProfile);
  }
  // Méthodes pour les compétences
  addSkill() {
    if (this.skillsForm.invalid) return;
    const skillData = {
      ...this.skillsForm.value,
      lastUsed: new Date()
    };
    if (this.editingSkill) {
      // Mettre à jour la compétence existante via l'API
      this.skillsService.updateSkill(this.currentEmployeeId, this.editingSkill.id, skillData).subscribe({
        next: () => {
          this.updateLocalSkill(this.editingSkill.id, skillData);
          this.resetSkillForm();
          console.log('Compétence mise à jour via API:', skillData);
        },
        error: error => {
          console.error('Erreur lors de la mise à jour:', error);
          // En cas d'erreur, mise à jour locale
          this.updateLocalSkill(this.editingSkill.id, skillData);
          this.resetSkillForm();
        }
      });
    } else {
      // Ajouter via l'API
      this.skillsService.addSkill(this.currentEmployeeId, skillData).subscribe({
        next: response => {
          const newSkill = {
            id: response.id || Date.now(),
            ...skillData
          };
          this.skillsProfile?.skills.push(newSkill);
          this.resetSkillForm();
          console.log('Compétence ajoutée via API:', newSkill);
        },
        error: error => {
          console.error('Erreur lors de l\'ajout:', error);
          // En cas d'erreur, ajout local
          const newSkill = {
            id: Date.now(),
            ...skillData
          };
          this.skillsProfile?.skills.push(newSkill);
          this.resetSkillForm();
        }
      });
    }
  }
  updateLocalSkill(skillId, updates) {
    if (this.skillsProfile) {
      const skillIndex = this.skillsProfile.skills.findIndex(s => s.id === skillId);
      if (skillIndex !== -1) {
        this.skillsProfile.skills[skillIndex] = {
          ...this.skillsProfile.skills[skillIndex],
          ...updates
        };
      }
    }
  }
  editSkill(skill) {
    this.editingSkill = skill;
    this.skillsForm.patchValue({
      name: skill.name,
      category: skill.category,
      level: skill.level,
      yearsExperience: skill.yearsExperience,
      validated: skill.validated
    });
    this.showAddSkillForm = true;
  }
  deleteSkill(skillId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette compétence ?')) {
      // Supprimer localement
      if (this.skillsProfile) {
        this.skillsProfile.skills = this.skillsProfile.skills.filter(s => s.id !== skillId);
        console.log('Compétence supprimée localement:', skillId);
      }
    }
  }
  resetSkillForm() {
    this.skillsForm.reset({
      name: '',
      category: 'technical',
      level: 3,
      yearsExperience: 0,
      validated: false
    });
    this.editingSkill = null;
    this.showAddSkillForm = false;
  }
  // Méthodes pour les technologies
  addTechnology() {
    if (this.technologiesForm.invalid) return;
    const techData = this.technologiesForm.value;
    if (this.editingTechnology) {
      // Mettre à jour localement
      this.updateLocalTechnology(this.editingTechnology.id, techData);
      this.resetTechnologyForm();
      console.log('Technologie mise à jour localement:', techData);
    } else {
      // Ajouter localement
      const newTech = {
        id: Date.now(),
        ...techData
      };
      this.skillsProfile?.technologies.push(newTech);
      this.resetTechnologyForm();
      console.log('Technologie ajoutée localement:', newTech);
    }
  }
  updateLocalTechnology(techId, updates) {
    if (this.skillsProfile) {
      const techIndex = this.skillsProfile.technologies.findIndex(t => t.id === techId);
      if (techIndex !== -1) {
        this.skillsProfile.technologies[techIndex] = {
          ...this.skillsProfile.technologies[techIndex],
          ...updates
        };
      }
    }
  }
  editTechnology(technology) {
    this.editingTechnology = technology;
    this.technologiesForm.patchValue(technology);
    this.showAddTechnologyForm = true;
  }
  deleteTechnology(techId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette technologie ?')) {
      // Supprimer localement
      if (this.skillsProfile) {
        this.skillsProfile.technologies = this.skillsProfile.technologies.filter(t => t.id !== techId);
        console.log('Technologie supprimée localement:', techId);
      }
    }
  }
  resetTechnologyForm() {
    this.technologiesForm.reset({
      name: '',
      category: 'frontend',
      proficiency: 'intermediate',
      projects: 0
    });
    this.editingTechnology = null;
    this.showAddTechnologyForm = false;
  }
  // Méthodes pour les spécialités
  addSpeciality() {
    if (this.specialitiesForm.invalid) return;
    const specialityData = this.specialitiesForm.value;
    if (this.editingSpeciality) {
      // Mise à jour locale pour l'instant
      this.updateLocalSpeciality(this.editingSpeciality.id, specialityData);
      this.resetSpecialityForm();
      console.log('Spécialité mise à jour localement:', specialityData);
    } else {
      // Ajouter localement
      const newSpeciality = {
        id: Date.now(),
        ...specialityData
      };
      this.skillsProfile?.specialities.push(newSpeciality);
      this.resetSpecialityForm();
      console.log('Spécialité ajoutée localement:', newSpeciality);
    }
  }
  updateLocalSpeciality(specialityId, updates) {
    if (this.skillsProfile) {
      const specialityIndex = this.skillsProfile.specialities.findIndex(s => s.id === specialityId);
      if (specialityIndex !== -1) {
        this.skillsProfile.specialities[specialityIndex] = {
          ...this.skillsProfile.specialities[specialityIndex],
          ...updates
        };
      }
    }
  }
  editSpeciality(speciality) {
    this.editingSpeciality = speciality;
    this.specialitiesForm.patchValue(speciality);
    this.showAddSpecialityForm = true;
  }
  deleteSpeciality(specialityId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette spécialité ?')) {
      // Supprimer localement
      if (this.skillsProfile) {
        this.skillsProfile.specialities = this.skillsProfile.specialities.filter(s => s.id !== specialityId);
        console.log('Spécialité supprimée localement:', specialityId);
      }
    }
  }
  resetSpecialityForm() {
    this.specialitiesForm.reset({
      name: '',
      domain: '',
      description: ''
    });
    this.editingSpeciality = null;
    this.showAddSpecialityForm = false;
  }
  // Sauvegarder tout le profil
  saveProfile() {
    if (!this.skillsProfile) return;
    this.saving = true;
    // Mettre à jour le score global et l'analyse
    this.skillsProfile.overallScore = this.skillsService.calculateOverallScore(this.skillsProfile);
    const analysis = this.skillsService.analyzeProfile(this.skillsProfile);
    this.skillsProfile.strengths = analysis.strengths;
    this.skillsProfile.improvementAreas = analysis.improvementAreas;
    this.skillsProfile.lastUpdated = new Date();
    // Pour l'instant, sauvegarder localement
    console.log('Profil sauvegardé localement:', this.skillsProfile);
    this.saving = false;
    alert('Profil de compétences sauvegardé localement avec succès !');
    // TODO: Activer quand l'API backend sera prête
    // this.skillsService.saveEmployeeSkillsProfile(this.skillsProfile).subscribe({...});
  }
  // Utilitaires
  getLevelLabel(level) {
    const labels = ['', 'Débutant', 'Intermédiaire', 'Compétent', 'Avancé', 'Expert'];
    return labels[level] || '';
  }
  getProficiencyLabel(proficiency) {
    const labels = {
      'basic': 'Base',
      'intermediate': 'Intermédiaire',
      'advanced': 'Avancé',
      'expert': 'Expert'
    };
    return labels[proficiency] || proficiency;
  }
  getLevelColor(level) {
    const colors = ['', '#ef4444', '#f59e0b', '#eab308', '#22c55e', '#10b981'];
    return colors[level] || '#6b7280';
  }
  getProficiencyColor(proficiency) {
    const colors = {
      'basic': '#ef4444',
      'intermediate': '#f59e0b',
      'advanced': '#eab308',
      'expert': '#10b981'
    };
    return colors[proficiency] || '#6b7280';
  }
  static {
    this.ɵfac = function SkillsProfileComponent_Factory(t) {
      return new (t || SkillsProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_1__.SkillsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SkillsProfileComponent,
      selectors: [["app-skills-profile"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 5,
      consts: [[1, "skills-profile-container"], [1, "profile-header"], [1, "header-content"], [1, "profile-title"], [1, "bi", "bi-award"], ["class", "profile-stats", 4, "ngIf"], [1, "profile-actions"], [1, "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-save"], ["class", "loading-container", 4, "ngIf"], ["class", "profile-content", 4, "ngIf"], [1, "profile-stats"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "loading-container"], [1, "loading-spinner"], [1, "bi", "bi-arrow-repeat"], [1, "profile-content"], [1, "tabs-container"], [1, "tabs"], [1, "tab-button", 3, "click"], [1, "bi", "bi-gear"], [1, "bi", "bi-cpu"], [1, "bi", "bi-star"], ["class", "tab-content", 4, "ngIf"], ["class", "profile-analysis", 4, "ngIf"], [1, "tab-content"], [1, "section-header"], [1, "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], ["class", "form-container", 4, "ngIf"], [1, "skills-grid"], ["class", "skill-card", 4, "ngFor", "ngForOf"], [1, "form-container"], [1, "skill-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Ex: JavaScript"], ["formControlName", "category"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "range", "formControlName", "level", "min", "1", "max", "5"], [1, "level-display"], ["type", "number", "formControlName", "yearsExperience", "min", "0", "step", "0.5"], ["type", "checkbox", "formControlName", "validated"], [1, "form-actions"], ["type", "submit", 1, "btn-primary"], ["type", "button", 1, "btn-secondary", 3, "click"], [3, "value"], [1, "skill-card"], [1, "skill-header"], [1, "skill-info"], [1, "skill-category"], [1, "skill-actions"], ["title", "Modifier", 1, "btn-icon", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Supprimer", 1, "btn-icon", "btn-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "skill-details"], [1, "skill-level"], [1, "level-bar"], [1, "level-fill"], [1, "level-text"], [1, "skill-meta"], ["class", "badge", 4, "ngIf"], ["class", "last-used", 4, "ngIf"], [1, "badge"], [1, "last-used"], [1, "technologies-grid"], ["class", "technology-card", 4, "ngFor", "ngForOf"], [1, "technology-form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", "placeholder", "Ex: React"], ["formControlName", "proficiency"], ["value", "basic"], ["value", "intermediate"], ["value", "advanced"], ["value", "expert"], ["type", "number", "formControlName", "projects", "min", "0"], [1, "technology-card"], [1, "tech-header"], [1, "tech-info"], [1, "tech-category"], [1, "tech-actions"], [1, "tech-details"], [1, "proficiency-badge"], [1, "tech-meta"], [1, "specialities-list"], ["class", "speciality-card", 4, "ngFor", "ngForOf"], [1, "speciality-form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", "placeholder", "Ex: D\u00E9veloppement web"], ["type", "text", "formControlName", "domain", "placeholder", "Ex: Informatique"], ["formControlName", "description", "rows", "3", "placeholder", "D\u00E9crivez votre sp\u00E9cialit\u00E9..."], [1, "speciality-card"], [1, "speciality-header"], [1, "speciality-info"], [1, "speciality-domain"], [1, "speciality-actions"], [1, "speciality-description"], [1, "profile-analysis"], [1, "analysis-section"], [1, "analysis-grid"], ["class", "analysis-card strengths", 4, "ngIf"], ["class", "analysis-card improvements", 4, "ngIf"], [1, "analysis-card", "strengths"], [1, "bi", "bi-trophy"], [4, "ngFor", "ngForOf"], [1, "analysis-card", "improvements"], [1, "bi", "bi-arrow-up-circle"]],
      template: function SkillsProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Mon Profil de Comp\u00E9tences ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SkillsProfileComponent_div_6_Template, 21, 4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsProfileComponent_Template_button_click_8_listener() {
            return ctx.saveProfile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SkillsProfileComponent_div_11_Template, 4, 0, "div", 9)(12, SkillsProfileComponent_div_12_Template, 16, 10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skillsProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.saving ? "Sauvegarde..." : "Sauvegarder", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.skillsProfile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".skills-profile-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 30px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #f3f4f6;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.profile-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.profile-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n\n.profile-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 16px;\n  max-width: 500px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 16px;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.profile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: #6b7280;\n  font-size: 16px;\n}\n\n.loading-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n\n\n.tabs-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  border-bottom: 2px solid #e5e7eb;\n  padding-bottom: 0;\n}\n\n.tab-button[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.tab-button[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  background: #f8fafc;\n}\n\n.tab-button.active[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n  background: #f8fafc;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n\n\n\n.form-container[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n\n.skill-form[_ngcontent-%COMP%], .technology-form[_ngcontent-%COMP%], .speciality-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s ease;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n\n.form-group[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.level-display[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #3b82f6;\n  margin-left: 12px;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n\n\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #6b7280;\n  transition: all 0.2s ease;\n}\n\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #3b82f6;\n}\n\n.btn-icon.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #ef4444;\n}\n\n\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.technologies-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 16px;\n}\n\n.specialities-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n\n\n.skill-card[_ngcontent-%COMP%], .technology-card[_ngcontent-%COMP%], .speciality-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.2s ease;\n}\n\n.skill-card[_ngcontent-%COMP%]:hover, .technology-card[_ngcontent-%COMP%]:hover, .speciality-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.skill-header[_ngcontent-%COMP%], .tech-header[_ngcontent-%COMP%], .speciality-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n\n.skill-info[_ngcontent-%COMP%], .tech-info[_ngcontent-%COMP%], .speciality-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.skill-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .tech-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .speciality-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 4px 0;\n}\n\n.skill-category[_ngcontent-%COMP%], .tech-category[_ngcontent-%COMP%], .speciality-domain[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.skill-actions[_ngcontent-%COMP%], .tech-actions[_ngcontent-%COMP%], .speciality-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n\n\n.skill-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.skill-level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.level-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.level-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n\n.level-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n\n.skill-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-weight: 500;\n}\n\n.last-used[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n\n\n\n.tech-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n}\n\n.proficiency-badge[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 11px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.tech-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n\n\n\n.speciality-description[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 14px;\n  line-height: 1.5;\n  margin-top: 8px;\n}\n\n\n\n.profile-analysis[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 2px solid #f3f4f6;\n}\n\n.analysis-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 16px;\n}\n\n.analysis-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.analysis-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n\n.analysis-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.analysis-card.strengths[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n\n.analysis-card.improvements[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n\n.analysis-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n\n.analysis-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #4b5563;\n  line-height: 1.5;\n}\n\n\n\n@media (max-width: 768px) {\n  .skills-profile-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  \n  .profile-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n  }\n  \n  .profile-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .skills-grid[_ngcontent-%COMP%], .technologies-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .analysis-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9za2lsbHMtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLE9B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Q0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscy1wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyogRW4tdMODwqp0ZSAqL1xuLnByb2ZpbGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjNmNGY2O1xufVxuXG4uaGVhZGVyLWNvbnRlbnQge1xuICBmbGV4OiAxO1xufVxuXG4ucHJvZmlsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLnByb2ZpbGUtdGl0bGUgaSB7XG4gIGNvbG9yOiAjM2I4MmY2O1xufVxuXG4ucHJvZmlsZS1zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5zdGF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc3RhdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC45O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5wcm9maWxlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG59XG5cbi8qIExvYWRpbmcgKi9cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIE9uZ2xldHMgKi9cbi50YWJzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVlN2ViO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnRhYi1idXR0b24ge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4udGFiLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjM2I4MmY2O1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xufVxuXG4udGFiLWJ1dHRvbi5hY3RpdmUge1xuICBjb2xvcjogIzNiODJmNjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzNiODJmNjtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLyogU2VjdGlvbnMgKi9cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGb3JtdWxhaXJlcyAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uc2tpbGwtZm9ybSxcbi50ZWNobm9sb2d5LWZvcm0sXG4uc3BlY2lhbGl0eS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZm9ybS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzNzQxNTE7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LFxuLmZvcm0tZ3JvdXAgc2VsZWN0LFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cyxcbi5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyxcbi5mb3JtLWdyb3VwIHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMSk7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sZXZlbC1kaXNwbGF5IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzYjgyZjY7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4vKiBCb3V0b25zICovXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjM2I4MmY2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XG59XG5cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjNmI3MjgwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGI1NTYzO1xufVxuXG4uYnRuLWljb24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uYnRuLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICBjb2xvcjogIzNiODJmNjtcbn1cblxuLmJ0bi1pY29uLmJ0bi1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xuICBjb2xvcjogI2VmNDQ0NDtcbn1cblxuLyogR3JpbGxlcyAqL1xuLnNraWxscy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG5cbi50ZWNobm9sb2dpZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3BlY2lhbGl0aWVzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi8qIENhcnRlcyAqL1xuLnNraWxsLWNhcmQsXG4udGVjaG5vbG9neS1jYXJkLFxuLnNwZWNpYWxpdHktY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xufVxuXG4uc2tpbGwtY2FyZDpob3Zlcixcbi50ZWNobm9sb2d5LWNhcmQ6aG92ZXIsXG4uc3BlY2lhbGl0eS1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnNraWxsLWhlYWRlcixcbi50ZWNoLWhlYWRlcixcbi5zcGVjaWFsaXR5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5za2lsbC1pbmZvLFxuLnRlY2gtaW5mbyxcbi5zcGVjaWFsaXR5LWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4uc2tpbGwtaW5mbyBoNCxcbi50ZWNoLWluZm8gaDQsXG4uc3BlY2lhbGl0eS1pbmZvIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luOiAwIDAgNHB4IDA7XG59XG5cbi5za2lsbC1jYXRlZ29yeSxcbi50ZWNoLWNhdGVnb3J5LFxuLnNwZWNpYWxpdHktZG9tYWluIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc2tpbGwtYWN0aW9ucyxcbi50ZWNoLWFjdGlvbnMsXG4uc3BlY2lhbGl0eS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG59XG5cbi8qIETDg8KpdGFpbHMgZGVzIGNvbXDDg8KpdGVuY2VzICovXG4uc2tpbGwtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uc2tpbGwtbGV2ZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5sZXZlbC1iYXIge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGV2ZWwtZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sZXZlbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnNraWxsLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICMxMGI5ODE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGFzdC11c2VkIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzljYTNhZjtcbn1cblxuLyogRMODwql0YWlscyBkZXMgdGVjaG5vbG9naWVzICovXG4udGVjaC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5wcm9maWNpZW5jeS1iYWRnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGVjaC1tZXRhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbn1cblxuLyogU3DDg8KpY2lhbGl0w4PCqXMgKi9cbi5zcGVjaWFsaXR5LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM0YjU1NjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vKiBBbmFseXNlIGR1IHByb2ZpbCAqL1xuLnByb2ZpbGUtYW5hbHlzaXMge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmM2Y0ZjY7XG59XG5cbi5hbmFseXNpcy1zZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmFuYWx5c2lzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYW5hbHlzaXMtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uYW5hbHlzaXMtY2FyZCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hbmFseXNpcy1jYXJkLnN0cmVuZ3RocyBoNCB7XG4gIGNvbG9yOiAjMTBiOTgxO1xufVxuXG4uYW5hbHlzaXMtY2FyZC5pbXByb3ZlbWVudHMgaDQge1xuICBjb2xvcjogI2Y1OWUwYjtcbn1cblxuLmFuYWx5c2lzLWNhcmQgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmFuYWx5c2lzLWNhcmQgbGkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNraWxscy1wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLnByb2ZpbGUtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLnByb2ZpbGUtc3RhdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgXG4gIC50YWJzIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG4gIFxuICAuZm9ybS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIFxuICAuc2tpbGxzLWdyaWQsXG4gIC50ZWNobm9sb2dpZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5hbmFseXNpcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3878:
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeService: () => (/* binding */ EmployeeService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class EmployeeService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/employee`;
    this.tasksBase = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks`;
  }
  getTaskNotifications(employeeId) {
    return this.http.get(`${this.tasksBase}/notifications/employee/${employeeId}`);
  }
  // Récupérer le dashboard complet de l'employé
  getEmployeeDashboard(employeeId) {
    return this.http.get(`${this.baseUrl}/${employeeId}/dashboard`);
  }
  // Récupérer les tâches de l'employé
  getEmployeeTasks(employeeId) {
    return this.http.get(`${this.baseUrl}/${employeeId}/tasks`);
  }
  // Récupérer les projets de l'employé
  getEmployeeProjects(employeeId) {
    return this.http.get(`${this.baseUrl}/${employeeId}/projects`);
  }
  // Récupérer les réunions de l'employé
  getEmployeeMeetings(employeeId) {
    return this.http.get(`${this.baseUrl}/${employeeId}/meetings`);
  }
  // Mettre à jour le statut d'une tâche
  updateTaskStatus(employeeId, taskId, status) {
    return this.http.put(`${this.baseUrl}/${employeeId}/tasks/${taskId}/status`, {
      status
    });
  }
  // Récupérer les timesheets de l'employé
  getEmployeeTimesheets(employeeId) {
    return this.http.get(`${this.baseUrl}/${employeeId}/timesheets`);
  }
  // Créer un nouveau timesheet
  createTimesheet(employeeId, timesheetData) {
    return this.http.post(`${this.baseUrl}/${employeeId}/timesheets`, timesheetData);
  }
  // Mettre à jour un timesheet
  updateTimesheet(employeeId, timesheetId, timesheetData) {
    return this.http.put(`${this.baseUrl}/${employeeId}/timesheets/${timesheetId}`, timesheetData);
  }
  // Soumettre un timesheet pour validation
  submitTimesheet(employeeId, timesheetId) {
    return this.http.put(`${this.baseUrl}/${employeeId}/timesheets/${timesheetId}/submit`, {});
  }
  // Supprimer un timesheet
  deleteTimesheet(employeeId, timesheetId) {
    return this.http.delete(`${this.baseUrl}/${employeeId}/timesheets/${timesheetId}`);
  }
  static {
    this.ɵfac = function EmployeeService_Factory(t) {
      return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9240:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 4876);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_employee_employee_module_ts.js.map
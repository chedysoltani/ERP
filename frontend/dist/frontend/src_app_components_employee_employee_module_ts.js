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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/manager-auth.service */ 6250);
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee.service */ 3878);
/* harmony import */ var _services_documents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documents.service */ 9592);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _skills_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills-profile.component */ 3505);








const _c0 = a0 => ({
  active: a0
});
const _c1 = a0 => ({
  "completed": a0
});
function EmployeeDashboardComponent_div_44_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 61)(7, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 64)(13, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r1.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r1.getPriorityColor(task_r1.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r1.priority, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", task_r1.progress, "%")("background-color", ctx_r1.getStatusColor(task_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", task_r1.progress, "%");
  }
}
function EmployeeDashboardComponent_div_44_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 68)(1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 70)(4, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const activity_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](activity_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("bi " + activity_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](activity_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](activity_r3.time);
  }
}
function EmployeeDashboardComponent_div_44_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73)(1, "div", 74)(2, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 77)(7, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 79)(10, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 83)(17, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_44_div_60_Template_button_click_17_listener() {
      const meeting_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.joinMeeting(meeting_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Rejoindre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meeting_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](meeting_r5.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](meeting_r5.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](meeting_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", meeting_r5.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", meeting_r5.location, " ");
  }
}
function EmployeeDashboardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "section", 27)(2, "div", 28)(3, "div", 29)(4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 32)(7, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "T\u00E2ches Termin\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 29)(12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 32)(15, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "En Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 29)(20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 32)(23, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Heures Travaill\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 29)(28, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 32)(31, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "R\u00E9unions \u00E0 Venir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "section", 41)(36, "div", 42)(37, "div", 43)(38, "h2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Mes T\u00E2ches");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Voir tout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, EmployeeDashboardComponent_div_44_div_43_Template, 17, 11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 48)(45, "div", 43)(46, "h2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Activit\u00E9s R\u00E9centes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, EmployeeDashboardComponent_div_44_div_51_Template, 8, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "section", 53)(53, "div", 54)(54, "div", 43)(55, "h2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "R\u00E9unions \u00E0 Venir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Voir tout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, EmployeeDashboardComponent_div_44_div_60_Template, 20, 5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.employeeStats.tasksCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.employeeStats.tasksInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.employeeStats.hoursWorked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.employeeStats.upcomingMeetings);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.myTasks.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.recentActivities);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.myMeetings.slice(0, 2));
  }
}
function EmployeeDashboardComponent_div_45_div_25_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_45_div_25_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.completeTask(task_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Terminer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EmployeeDashboardComponent_div_45_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 93)(1, "div", 94)(2, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 61)(9, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 98)(15, "div", 99)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 100)(23, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_45_div_25_Template_button_click_23_listener() {
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.increaseTaskProgress(task_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " +10% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, EmployeeDashboardComponent_div_45_div_25_button_26_Template, 3, 0, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, task_r7.status === "done"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r1.getPriorityColor(task_r7.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r7.priority, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r7.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r1.getStatusColor(task_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTaskStatusLabel(task_r7.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", task_r7.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", task_r7.progress, "%")("background-color", ctx_r1.getStatusColor(task_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", task_r7.status !== "done");
  }
}
function EmployeeDashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 86)(2, "h2", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mes T\u00E2ches");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 88)(5, "div", 89)(6, "select", 90)(7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Toutes les priorit\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Haute");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Basse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 90)(16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Tous les statuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u00C3\u20AC faire");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "En cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Termin\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, EmployeeDashboardComponent_div_45_div_25_Template, 27, 19, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.myTasks);
  }
}
function EmployeeDashboardComponent_div_46_tr_25_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_46_tr_25_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const timesheet_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.submitTimesheet(timesheet_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EmployeeDashboardComponent_div_46_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "div", 112)(14, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, EmployeeDashboardComponent_div_46_tr_25_button_16_Template, 2, 0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const timesheet_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](timesheet_r11.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](timesheet_r11.project);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", timesheet_r11.hours, "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](timesheet_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r1.getStatusColor(timesheet_r11.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTimesheetStatusLabel(timesheet_r11.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", timesheet_r11.status === "pending");
  }
}
function EmployeeDashboardComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 86)(2, "h2", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Timesheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 88)(5, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_46_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openCreateTimesheetModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Ajouter Timesheet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 108)(9, "table", 109)(10, "thead")(11, "tr")(12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Heures");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, EmployeeDashboardComponent_div_46_tr_25_Template, 17, 8, "tr", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.myTimesheets);
  }
}
function EmployeeDashboardComponent_div_47_div_9_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", participant_r13.charAt(0), " ");
  }
}
function EmployeeDashboardComponent_div_47_div_9_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meeting_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" +", meeting_r14.participants.length - 3, " ");
  }
}
function EmployeeDashboardComponent_div_47_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 121)(1, "div", 122)(2, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 125)(12, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, EmployeeDashboardComponent_div_47_div_9_div_25_Template, 2, 1, "div", 129)(26, EmployeeDashboardComponent_div_47_div_9_div_26_Template, 2, 1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 83)(28, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_47_div_9_Template_button_click_28_listener() {
      const meeting_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.joinMeeting(meeting_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Rejoindre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meeting_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](meeting_r14.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", meeting_r14.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", meeting_r14.time, " (", meeting_r14.duration, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](meeting_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](meeting_r14.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](meeting_r14.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](meeting_r14.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", meeting_r14.participants.length, " participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", meeting_r14.participants.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", meeting_r14.participants.length > 3);
  }
}
function EmployeeDashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 86)(2, "h2", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mes R\u00E9unions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 88)(5, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Nouvelle R\u00E9union ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EmployeeDashboardComponent_div_47_div_9_Template, 31, 12, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.myMeetings);
  }
}
function EmployeeDashboardComponent_div_48_div_8_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", doc_r17.description, " ");
  }
}
function EmployeeDashboardComponent_div_48_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EmployeeDashboardComponent_div_48_div_8_div_1_div_8_Template, 2, 1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 145)(10, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_48_div_8_div_1_Template_button_click_10_listener() {
      const doc_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.downloadDocument(doc_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " T\u00E9l\u00E9charger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getFileIcon(doc_r17.file_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](doc_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", doc_r17.file_type.split("/")[1].toUpperCase(), " \u00E2\u20AC\u00A2 ", doc_r17.file_size, " MB \u00E2\u20AC\u00A2 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 6, doc_r17.created_at, "dd MMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", doc_r17.description);
  }
}
function EmployeeDashboardComponent_div_48_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EmployeeDashboardComponent_div_48_div_8_div_1_Template, 13, 9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.documents);
  }
}
function EmployeeDashboardComponent_div_48_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 149)(1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucun document");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Vous n'avez pas encore de documents assign\u00E9s.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function EmployeeDashboardComponent_div_48_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chargement des documents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function EmployeeDashboardComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 86)(2, "h2", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mes Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 88)(5, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_48_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.loadDocuments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Actualiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EmployeeDashboardComponent_div_48_div_8_Template, 2, 1, "div", 134)(9, EmployeeDashboardComponent_div_48_div_9_Template, 7, 0, "div", 135)(10, EmployeeDashboardComponent_div_48_div_10_Template, 4, 0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("spin", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.documents.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.documents.length === 0 && !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
  }
}
function EmployeeDashboardComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-skills-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EmployeeDashboardComponent_div_50_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", project_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", project_r19.name, " ");
  }
}
function EmployeeDashboardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_50_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeCreateTimesheetModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_50_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.stopPropagation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 156)(3, "h2", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Ajouter un Timesheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_50_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeCreateTimesheetModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EmployeeDashboardComponent_div_50_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createTimesheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 161)(9, "label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeDashboardComponent_div_50_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.newTimesheet.date, $event) || (ctx_r1.newTimesheet.date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 161)(13, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeDashboardComponent_div_50_Template_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.newTimesheet.project_id, $event) || (ctx_r1.newTimesheet.project_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "S\u00E9lectionner un projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, EmployeeDashboardComponent_div_50_option_18_Template, 2, 2, "option", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 161)(20, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Heures travaill\u00E9es *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeDashboardComponent_div_50_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.newTimesheet.hours, $event) || (ctx_r1.newTimesheet.hours = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 161)(24, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "textarea", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeDashboardComponent_div_50_Template_textarea_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.newTimesheet.description, $event) || (ctx_r1.newTimesheet.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 172)(28, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_50_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeCreateTimesheetModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Cr\u00E9er ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newTimesheet.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newTimesheet.project_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.availableProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newTimesheet.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newTimesheet.description);
  }
}
class EmployeeDashboardComponent {
  constructor(router, managerAuthService, employeeService, documentsService) {
    this.router = router;
    this.managerAuthService = managerAuthService;
    this.employeeService = employeeService;
    this.documentsService = documentsService;
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
    // Données pour le dashboard
    this.myTasks = [];
    this.myMeetings = [];
    this.myTimesheets = [];
    this.recentActivities = [];
    // Données mockées pour les tâches
    this.baseTasks = [{
      id: 1,
      title: 'Finaliser le rapport mensuel',
      description: 'Préparer et soumettre le rapport d\'activité du mois',
      priority: 'high',
      dueDate: '03 Avril',
      progress: 75,
      status: 'in_progress',
      assignee: 'Moi',
      tags: ['rapport', 'mensuel']
    }, {
      id: 2,
      title: 'Réunion client - Présentation',
      description: 'Présenter les avancées du projet au client',
      priority: 'high',
      dueDate: '05 Avril',
      progress: 50,
      status: 'todo',
      assignee: 'Moi',
      tags: ['client', 'présentation']
    }, {
      id: 3,
      title: 'Code review - Module authentification',
      description: 'Revoir le code du module d\'authentification',
      priority: 'medium',
      dueDate: '04 Avril',
      progress: 90,
      status: 'in_progress',
      assignee: 'Moi',
      tags: ['code', 'review']
    }, {
      id: 4,
      title: 'Mise à jour documentation technique',
      description: 'Mettre à jour la documentation API',
      priority: 'low',
      dueDate: '08 Avril',
      progress: 30,
      status: 'todo',
      assignee: 'Moi',
      tags: ['documentation', 'api']
    }];
    // Données mockées pour les réunions
    this.baseMeetings = [{
      id: 1,
      title: 'Daily Stand-up',
      type: 'team',
      date: '01 Avril',
      time: '09:00',
      duration: '15 min',
      participants: ['Jean Dupont', 'Marie Martin', 'Pierre Durand'],
      location: 'Salle A',
      description: 'Point quotidien sur l\'avancement des tâches'
    }, {
      id: 2,
      title: 'Réunion projet ERP',
      type: 'project',
      date: '02 Avril',
      time: '14:00',
      duration: '1h',
      participants: ['Jean Dupont', 'Sophie Lefebvre', 'Thomas Bernard'],
      location: 'Salle B',
      description: 'Discussion sur les avancées du projet ERP'
    }, {
      id: 3,
      title: 'Review de code',
      type: 'technical',
      date: '03 Avril',
      time: '10:30',
      duration: '30 min',
      participants: ['Marie Martin', 'Paul Lefevre'],
      location: 'Visio',
      description: 'Review du code du module authentification'
    }];
    // Données mockées pour les timesheets
    this.baseTimesheets = [{
      id: 1,
      date: '31 Mars',
      project: 'Développement ERP',
      hours: 8,
      description: 'Développement module utilisateur',
      status: 'validated'
    }, {
      id: 2,
      date: '30 Mars',
      project: 'Site E-commerce',
      hours: 7.5,
      description: 'Intégration panier d\'achat',
      status: 'validated'
    }, {
      id: 3,
      date: '29 Mars',
      project: 'Application Mobile',
      hours: 8,
      description: 'Développement interface iOS',
      status: 'pending'
    }];
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
    this.employeeService.getEmployeeDashboard(employeeId).subscribe({
      next: response => {
        if (response.success) {
          const data = response.data;
          // Mettre à jour les statistiques
          this.employeeStats.tasksCompleted = data.stats.done;
          this.employeeStats.tasksInProgress = data.stats.in_progress;
          this.employeeStats.pendingTasks = data.stats.todo;
          this.employeeStats.upcomingMeetings = data.upcomingMeetings.length;
          // Mettre à jour les données
          this.myTasks = this.formatTasks(data.recentTasks);
          this.myMeetings = this.formatMeetings(data.upcomingMeetings);
          console.log('Données employé chargées:', response);
        }
      },
      error: error => {
        console.error('Erreur lors du chargement des données employé:', error);
        // En cas d'erreur, utiliser les données mockées
        this.loadMockData();
      }
    });
    // Charger les timesheets séparément
    this.loadTimesheets();
  }
  loadMockData() {
    // Charger les données mockées en fallback
    this.myTasks = [...this.baseTasks];
    this.myMeetings = [...this.baseMeetings];
    this.myTimesheets = [...this.baseTimesheets];
    this.calculateStats();
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
        this.employeeService.updateTaskStatus(this.currentEmployee.id, taskId, newStatus).subscribe({
          next: response => {
            if (response.success) {
              task.status = newStatus;
              this.calculateStats();
              console.log('Statut de tâche mis à jour:', response);
            }
          },
          error: error => {
            console.error('Erreur lors de la mise à jour du statut:', error);
            // En cas d'erreur, mettre à jour localement quand même
            task.status = newStatus;
            this.calculateStats();
          }
        });
      } else {
        // Fallback local si pas d'employé connecté
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
    console.log('Début du chargement des réunions assignées depuis la base...');
    if (!this.currentEmployee) {
      console.error('Aucun employé connecté pour charger les réunions');
      return;
    }
    this.managerAuthService.getEmployeeMeetings(this.currentEmployee.id).subscribe({
      next: response => {
        const meetings = response.data || response;
        console.log('Réunions assignées chargées depuis la base:', meetings);
        // Transformer les réunions pour l'affichage
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
        console.log('Réunions transformées pour affichage:', this.myMeetings);
        // Mettre à jour les statistiques
        this.calculateStats();
      },
      error: error => {
        console.error('Erreur lors du chargement des réunions assignées:', error);
        // En cas d'erreur, utiliser les données mockées
        console.log('Fallback: utilisation des données mockées pour les réunions');
        this.myMeetings = [...this.baseMeetings];
        this.calculateStats();
      }
    });
  }
  // Méthodes pour les réunions
  joinMeeting(meetingId) {
    const meeting = this.myMeetings.find(m => m.id === meetingId);
    if (meeting) {
      alert(`Rejoindre la réunion: ${meeting.title}`);
      // TODO: Implémenter la logique pour rejoindre la réunion
    }
  }
  updateMeetingStatus(meetingId, status) {
    if (!this.currentEmployee) return;
    this.managerAuthService.updateMeetingAttendance(meetingId, this.currentEmployee.id, status).subscribe({
      next: response => {
        console.log('Statut de réunion mis à jour:', response);
        alert('Statut de participation mis à jour avec succès');
        // Recharger les réunions
        this.loadMeetingsFromDatabase();
      },
      error: error => {
        console.error('Erreur lors de la mise à jour du statut:', error);
        alert('Erreur lors de la mise à jour du statut');
      }
    });
  }
  // Méthodes pour les timesheets
  loadTimesheets() {
    if (!this.currentEmployee) return;
    this.employeeService.getEmployeeTimesheets(this.currentEmployee.id).subscribe({
      next: response => {
        if (response.success) {
          this.myTimesheets = response.data;
          console.log('Timesheets chargés:', this.myTimesheets);
          this.calculateStats();
        }
      },
      error: error => {
        console.error('Erreur lors du chargement des timesheets:', error);
        // En cas d'erreur, utiliser les données mockées
        this.myTimesheets = [...this.baseTimesheets];
      }
    });
  }
  submitTimesheet(timesheetId) {
    if (!this.currentEmployee) return;
    this.employeeService.submitTimesheet(this.currentEmployee.id, timesheetId).subscribe({
      next: response => {
        if (response.success) {
          const timesheet = this.myTimesheets.find(t => t.id === timesheetId);
          if (timesheet) {
            timesheet.status = 'submitted';
            alert('Timesheet soumis pour validation');
          }
        }
      },
      error: error => {
        console.error('Erreur lors de la soumission du timesheet:', error);
        alert('Erreur lors de la soumission du timesheet');
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
    this.employeeService.getEmployeeProjects(this.currentEmployee.id).subscribe({
      next: response => {
        if (response.success) {
          this.availableProjects = response.data;
        }
      },
      error: error => {
        console.error('Erreur lors du chargement des projets:', error);
        // Projets par défaut si erreur
        this.availableProjects = [{
          id: 1,
          name: 'Développement ERP'
        }, {
          id: 2,
          name: 'Site E-commerce'
        }, {
          id: 3,
          name: 'Application Mobile'
        }];
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
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    const timesheetData = {
      date: new Date(this.newTimesheet.date).toISOString().split('T')[0],
      project_id: this.newTimesheet.project_id,
      hours: this.newTimesheet.hours,
      description: this.newTimesheet.description,
      status: 'pending'
    };
    this.employeeService.createTimesheet(this.currentEmployee.id, timesheetData).subscribe({
      next: response => {
        if (response.success) {
          alert('Timesheet créé avec succès');
          this.closeCreateTimesheetModal();
          this.loadTimesheets(); // Recharger la liste
        }
      },
      error: error => {
        console.error('Erreur lors de la création du timesheet:', error);
        alert('Erreur lors de la création du timesheet');
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
      return new (t || EmployeeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__.ManagerAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_1__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_documents_service__WEBPACK_IMPORTED_MODULE_2__.DocumentsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: EmployeeDashboardComponent,
      selectors: [["app-employee-dashboard"]],
      decls: 51,
      vars: 33,
      consts: [[1, "employee-dashboard"], [1, "dashboard-header"], [1, "header-left"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-right"], [1, "header-actions"], ["title", "Notifications", 1, "btn-notification"], [1, "bi", "bi-bell"], [1, "notification-badge"], ["title", "Profil", 1, "btn-profile"], [1, "bi", "bi-person-circle"], ["title", "D\u00E9connexion", 1, "btn-logout", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "dashboard-nav"], [1, "nav-items"], [1, "nav-item", 3, "click"], [1, "bi", "bi-grid"], [1, "bi", "bi-list-task"], [1, "bi", "bi-clock"], [1, "bi", "bi-calendar"], [1, "bi", "bi-file-text"], [1, "bi", "bi-award"], [1, "dashboard-content"], ["class", "section fade-in", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "section", "fade-in"], [1, "stats-section"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "blue"], [1, "bi", "bi-check-circle"], [1, "stat-content"], [1, "stat-number"], [1, "stat-label"], [1, "stat-icon", "orange"], [1, "bi", "bi-hourglass-split"], [1, "stat-icon", "green"], [1, "bi", "bi-clock-history"], [1, "stat-icon", "purple"], [1, "bi", "bi-calendar-event"], [1, "content-grid"], [1, "card", "tasks-card"], [1, "card-header"], [1, "card-title"], [1, "view-all-btn"], [1, "tasks-list"], ["class", "task-item", 4, "ngFor", "ngForOf"], [1, "card", "activities-card"], [1, "refresh-btn"], [1, "bi", "bi-arrow-clockwise"], [1, "activities-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "meetings-section"], [1, "card", "meetings-card"], [1, "meetings-list"], ["class", "meeting-item", 4, "ngFor", "ngForOf"], [1, "task-item"], [1, "task-info"], [1, "task-title"], [1, "task-description"], [1, "task-meta"], [1, "due-date"], [1, "priority"], [1, "task-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-content"], [1, "activity-title"], [1, "activity-time"], [1, "meeting-item"], [1, "meeting-time"], [1, "time"], [1, "duration"], [1, "meeting-info"], [1, "meeting-title"], [1, "meeting-meta"], [1, "meeting-date"], [1, "meeting-location"], [1, "bi", "bi-geo-alt"], [1, "meeting-actions"], [1, "btn-join", 3, "click"], [1, "bi", "bi-camera-video"], [1, "section-header"], [1, "section-title"], [1, "section-actions"], [1, "filter-controls"], [1, "filter-select"], [1, "tasks-grid"], ["class", "task-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "task-card"], [1, "task-header"], [1, "task-priority"], [1, "task-due"], [1, "task-status"], [1, "task-progress-section"], [1, "progress-header"], [1, "task-actions"], [1, "btn-action", 3, "click"], [1, "bi", "bi-plus"], ["class", "btn-action btn-complete", 3, "click", 4, "ngIf"], [1, "btn-action", "btn-complete", 3, "click"], [1, "bi", "bi-check"], [1, "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "timesheet-table-container"], [1, "timesheet-table"], [4, "ngFor", "ngForOf"], [1, "status-badge"], [1, "table-actions"], ["title", "Modifier", 1, "btn-edit"], [1, "bi", "bi-pencil"], ["class", "btn-submit", "title", "Soumettre", 3, "click", 4, "ngIf"], ["title", "Soumettre", 1, "btn-submit", 3, "click"], [1, "bi", "bi-send"], [1, "btn-primary"], [1, "meetings-grid"], ["class", "meeting-card", 4, "ngFor", "ngForOf"], [1, "meeting-card"], [1, "meeting-header"], [1, "meeting-type"], [1, "meeting-description"], [1, "meeting-details"], [1, "meeting-detail"], [1, "bi", "bi-people"], [1, "meeting-participants"], ["class", "participant-avatar", 4, "ngFor", "ngForOf"], ["class", "participant-more", 4, "ngIf"], [1, "participant-avatar"], [1, "participant-more"], [1, "btn-refresh", 3, "click", "disabled"], ["class", "documents-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "documents-grid"], ["class", "document-card", 4, "ngFor", "ngForOf"], [1, "document-card"], [1, "document-icon"], [1, "bi", 3, "ngClass"], [1, "document-title"], [1, "document-info"], ["class", "document-description", 4, "ngIf"], [1, "document-actions"], ["title", "T\u00E9l\u00E9charger / Voir", 1, "btn-download", 3, "click"], [1, "bi", "bi-download"], [1, "document-description"], [1, "empty-state"], [1, "empty-icon"], [1, "bi", "bi-folder2-open"], [1, "loading-state"], [1, "spinner"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body", 3, "ngSubmit"], [1, "form-group"], ["for", "timesheetDate"], ["type", "date", "id", "timesheetDate", "name", "timesheetDate", "required", "", 3, "ngModelChange", "ngModel"], ["for", "timesheetProject"], ["id", "timesheetProject", "name", "timesheetProject", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "timesheetHours"], ["type", "number", "id", "timesheetHours", "name", "timesheetHours", "required", "", "min", "0.5", "max", "24", "step", "0.5", "placeholder", "8", 3, "ngModelChange", "ngModel"], ["for", "timesheetDescription"], ["id", "timesheetDescription", "name", "timesheetDescription", "rows", "3", "placeholder", "Description des t\u00E2ches effectu\u00E9es...", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary"], [3, "value"]],
      template: function EmployeeDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Tableau de Bord Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_15_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nav", 14)(18, "div", 15)(19, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_19_listener() {
            return ctx.changeSection("dashboard");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_23_listener() {
            return ctx.changeSection("taches");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Mes T\u00E2ches");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_27_listener() {
            return ctx.changeSection("timesheet");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Timesheet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_31_listener() {
            return ctx.changeSection("reunions");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "R\u00E9unions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_35_listener() {
            return ctx.changeSection("documents");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_39_listener() {
            return ctx.changeSection("competences");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Comp\u00E9tences");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "main", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, EmployeeDashboardComponent_div_44_Template, 61, 7, "div", 24)(45, EmployeeDashboardComponent_div_45_Template, 26, 1, "div", 24)(46, EmployeeDashboardComponent_div_46_Template, 26, 1, "div", 24)(47, EmployeeDashboardComponent_div_47_Template, 10, 1, "div", 24)(48, EmployeeDashboardComponent_div_48_Template, 11, 6, "div", 24)(49, EmployeeDashboardComponent_div_49_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, EmployeeDashboardComponent_div_50_Template, 33, 5, "div", 25);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Bienvenue, ", ctx.currentEmployee == null ? null : ctx.currentEmployee.prenom, " ", ctx.currentEmployee == null ? null : ctx.currentEmployee.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c0, ctx.activeSection === "dashboard"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c0, ctx.activeSection === "taches"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, ctx.activeSection === "timesheet"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c0, ctx.activeSection === "reunions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c0, ctx.activeSection === "documents"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c0, ctx.activeSection === "competences"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeSection === "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeSection === "taches");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeSection === "timesheet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeSection === "reunions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeSection === "documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeSection === "competences");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCreateTimesheetModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _skills_profile_component__WEBPACK_IMPORTED_MODULE_3__.SkillsProfileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&family=Syne[_ngcontent-%COMP%]:wght@600;700[_ngcontent-%COMP%];800&display=swap)[_ngcontent-%COMP%];\n\n.documents-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;\n}\n.document-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; padding: 22px; transition: all 0.3s;\n  display: flex; flex-direction: column; gap: 12px;\n}\n.document-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(14,165,233,0.3); transform: translateY(-3px);\n  box-shadow: 0 10px 28px rgba(0,0,0,0.3);\n}\n.document-icon[_ngcontent-%COMP%] {\n  width: 52px; height: 52px; border-radius: 14px;\n  background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.15);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 22px; color: #38bdf8;\n}\n.document-title[_ngcontent-%COMP%] {\n  font-size: 15px; font-weight: 700; color: #f8fafc; margin: 0;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.document-info[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin: 0; }\n.document-description[_ngcontent-%COMP%] { font-size: 13px; color: #94a3b8; line-height: 1.5; }\n.document-actions[_ngcontent-%COMP%] { margin-top: auto; }\n.document-actions[_ngcontent-%COMP%]   .btn-download[_ngcontent-%COMP%] {\n  width: 100%; padding: 9px 16px; border-radius: 10px;\n  background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.2);\n  color: #38bdf8; font-size: 13px; font-weight: 600; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;\n}\n.document-actions[_ngcontent-%COMP%]   .btn-download[_ngcontent-%COMP%]:hover { background: rgba(14,165,233,0.2); }\n\n.btn-refresh[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  padding: 9px 18px; border-radius: 10px;\n  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);\n  color: #94a3b8; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n.btn-refresh[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n.spin[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n\n.loading-state[_ngcontent-%COMP%] { text-align: center; padding: 60px 20px; }\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #64748b; margin-top: 16px; font-size: 14px; }\n.spinner[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border: 3px solid rgba(255,255,255,0.1);\n  border-top-color: #0ea5e9; border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite; margin: 0 auto;\n}\n\n.empty-icon[_ngcontent-%COMP%] { font-size: 48px; color: #334155; margin-bottom: 16px; }\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; color: #94a3b8; margin-bottom: 8px; }\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 14px; color: #64748b; }\n\n\n\n.meeting-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 20px; margin-bottom: 12px; transition: all 0.2s;\n  border-left: 3px solid #6366f1;\n}\n.meeting-card[_ngcontent-%COMP%]:hover { border-color: rgba(99,102,241,0.3); background: rgba(255,255,255,0.06); }\n.meeting-card[_ngcontent-%COMP%]   .meeting-title[_ngcontent-%COMP%] { font-size: 15px; font-weight: 700; color: #f8fafc; margin: 0 0 10px 0; }\n.meeting-details[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }\n.meeting-detail[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; }\n.meeting-detail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #6366f1; width: 14px; }\n.meeting-participants[_ngcontent-%COMP%] { display: flex; gap: -4px; margin-bottom: 14px; }\n.participant-avatar[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border-radius: 50%; border: 2px solid #0f172a;\n  background: linear-gradient(135deg, #6366f1, #a855f7);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; font-weight: 700; color: white; margin-left: -6px;\n}\n.participant-avatar[_ngcontent-%COMP%]:first-child { margin-left: 0; }\n.participant-more[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border-radius: 50%; border: 2px solid #0f172a;\n  background: rgba(255,255,255,0.08); color: #94a3b8;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 10px; font-weight: 700; margin-left: -6px;\n}\n.meeting-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; }\n.btn-join[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center; gap: 6px;\n  padding: 8px 16px; border-radius: 9px;\n  background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2);\n  color: #a5b4fc; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;\n}\n.btn-join[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.22); }\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);\n  display: flex; align-items: center; justify-content: center; z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #1e293b; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px;\n  padding: 32px; width: 520px; max-width: 95vw; max-height: 90vh; overflow-y: auto;\n  box-shadow: 0 24px 48px rgba(0,0,0,0.5);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4,0,0.2,1);\n}\n@keyframes _ngcontent-%COMP%_slideUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }\n.modal-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }\n.modal-title[_ngcontent-%COMP%] { font-family: 'Syne',sans-serif; font-size: 20px; font-weight: 700; color: #f8fafc; }\n.modal-close[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px; background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.15); color: #f87171; }\n.modal-body[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 18px; }\n.form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 500; color: #94a3b8; }\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px; padding: 10px 14px; color: #f8fafc;\n  font-size: 14px; font-family: 'Inter',sans-serif; outline: none; transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9; background: rgba(14,165,233,0.06); box-shadow: 0 0 0 3px rgba(14,165,233,0.15);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; }\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { resize: vertical; min-height: 80px; }\n.form-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 12px; padding-top: 8px; }\n\n\n\n\n\n\n.tasks-list[_ngcontent-%COMP%] { padding: 0; }\n.task-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.task-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 4px 0; }\n.task-description[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin: 0 0 6px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.task-meta[_ngcontent-%COMP%] { display: flex; gap: 12px; font-size: 11px; color: #64748b; flex-wrap: wrap; }\n.due-date[_ngcontent-%COMP%], .priority[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; }\n.task-progress[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; width: 120px; flex-shrink: 0; }\n.task-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] { flex: 1; }\n.progress-text[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; width: 36px; text-align: right; flex-shrink: 0; }\n\n\n\n.tasks-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;\n}\n.task-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 20px; transition: all 0.3s;\n}\n.task-card[_ngcontent-%COMP%]:hover { border-color: rgba(14,165,233,0.25); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }\n.task-card.completed[_ngcontent-%COMP%] { opacity: 0.6; }\n.task-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 10px; }\n.task-card[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] { font-size: 15px; font-weight: 600; color: #f8fafc; margin: 0; }\n.task-priority[_ngcontent-%COMP%] {\n  padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600;\n  color: white; flex-shrink: 0; text-transform: capitalize;\n}\n.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] { color: #64748b; font-size: 13px; margin-bottom: 14px; line-height: 1.5; }\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%] { gap: 14px; margin-bottom: 14px; }\n.task-due[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; font-size: 12px; color: #64748b; }\n.task-status[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; }\n.task-progress-section[_ngcontent-%COMP%] { margin-bottom: 14px; }\n.progress-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; font-size: 11px; color: #64748b; margin-bottom: 6px; }\n.task-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; }\n.task-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  flex: 1; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8;\n  font-size: 12px; font-weight: 500; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n.btn-complete[_ngcontent-%COMP%] { background: rgba(16,185,129,0.1) !important; color: #34d399 !important; border-color: rgba(16,185,129,0.2) !important; }\n.btn-complete[_ngcontent-%COMP%]:hover { background: rgba(16,185,129,0.2) !important; }\n\n\n\n.section-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: #f8fafc; }\n.section-actions[_ngcontent-%COMP%] { display: flex; gap: 10px; align-items: center; }\n.filter-controls[_ngcontent-%COMP%] { display: flex; gap: 10px; }\n.filter-select[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px; padding: 8px 12px; color: #94a3b8;\n  font-size: 13px; outline: none; cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; color: #f8fafc; }\n\n\n\n.activities-list[_ngcontent-%COMP%] { padding: 8px 0; }\n.activity-item[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 14px; padding: 12px 20px; transition: background 0.2s; }\n.activity-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.activity-icon[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center; font-size: 15px;\n}\n.activity-icon.blue[_ngcontent-%COMP%]   { background: rgba(59,130,246,0.15); color: #60a5fa; }\n.activity-icon.green[_ngcontent-%COMP%]  { background: rgba(16,185,129,0.15); color: #34d399; }\n.activity-icon.purple[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: #a5b4fc; }\n.activity-icon.orange[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; }\n.activity-content[_ngcontent-%COMP%] { flex: 1; }\n.activity-title[_ngcontent-%COMP%] { font-size: 13px; font-weight: 500; color: #cbd5e1; margin: 0 0 3px 0; }\n.activity-time[_ngcontent-%COMP%] { font-size: 11px; color: #475569; }\n.refresh-btn[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; transition: all 0.2s;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n\n\n\n.meetings-section[_ngcontent-%COMP%] { margin-top: 20px; }\n.meetings-list[_ngcontent-%COMP%] { padding: 0; }\n.meeting-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 16px;\n  padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); transition: background 0.2s;\n}\n.meeting-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.meeting-item[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n.meeting-time[_ngcontent-%COMP%] { text-align: center; flex-shrink: 0; min-width: 60px; }\n.meeting-time[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] { display: block; font-size: 16px; font-weight: 700; color: #f8fafc; }\n.meeting-time[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] { display: block; font-size: 11px; color: #64748b; }\n.meeting-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.meeting-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 6px 0; }\n.meeting-meta[_ngcontent-%COMP%] { display: flex; gap: 14px; font-size: 12px; color: #64748b; }\n.meeting-date[_ngcontent-%COMP%], .meeting-location[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; }\n.meeting-actions[_ngcontent-%COMP%] { flex-shrink: 0; }\n.btn-join[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.2);\n  color: #a5b4fc; padding: 7px 14px; border-radius: 8px;\n  font-size: 12px; font-weight: 600; cursor: pointer;\n  display: flex; align-items: center; gap: 6px; transition: all 0.2s;\n}\n.btn-join[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.25); }\n\n\n\n.timesheet-table-container[_ngcontent-%COMP%] { overflow-x: auto; }\n.timesheet-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.timesheet-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left; padding: 12px 16px;\n  font-size: 11px; font-weight: 600; color: #64748b;\n  text-transform: uppercase; letter-spacing: 0.08em;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  background: rgba(255,255,255,0.02);\n}\n.timesheet-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px; font-size: 14px; color: #cbd5e1;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n}\n.timesheet-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); }\n\n\n\n.documents-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;\n}\n.document-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 20px; transition: all 0.3s;\n  display: flex; align-items: center; gap: 16px;\n}\n.document-card[_ngcontent-%COMP%]:hover { border-color: rgba(14,165,233,0.3); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.25); }\n.doc-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: 12px; background: rgba(14,165,233,0.1); color: #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }\n.doc-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.doc-name[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 4px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.doc-meta[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; }\n.doc-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; flex-shrink: 0; }\n.btn-download[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; transition: all 0.2s;\n}\n.btn-download[_ngcontent-%COMP%]:hover { background: rgba(14,165,233,0.15); color: #38bdf8; }\n\n\n\n\n.employee-dashboard[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #0f172a;\n  color: #f8fafc;\n  font-family: 'Inter', sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.dashboard-header[_ngcontent-%COMP%] {\n  background: rgba(15,23,42,0.95);\n  backdrop-filter: blur(12px);\n  padding: 0 28px;\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  position: sticky; top: 0; z-index: 100;\n  flex-shrink: 0;\n}\n\n.header-left[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Syne', sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc;\n  letter-spacing: -0.02em;\n}\n\n.header-left[_ngcontent-%COMP%]   .dashboard-subtitle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.btn-notification[_ngcontent-%COMP%], .btn-profile[_ngcontent-%COMP%], .btn-logout[_ngcontent-%COMP%] {\n  width: 38px; height: 38px;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 16px; position: relative;\n  background: rgba(255,255,255,0.05);\n  color: #94a3b8;\n}\n\n.btn-notification[_ngcontent-%COMP%]:hover, .btn-profile[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.1);\n  color: #f8fafc;\n}\n\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239,68,68,0.15);\n  color: #f87171;\n  border-color: rgba(239,68,68,0.2);\n}\n\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute; top: -4px; right: -4px;\n  background: #ef4444; color: white;\n  width: 18px; height: 18px; border-radius: 50%;\n  font-size: 10px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid #0f172a;\n}\n\n\n\n.dashboard-nav[_ngcontent-%COMP%] {\n  background: rgba(15,23,42,0.8);\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  padding: 0 28px;\n  flex-shrink: 0;\n  backdrop-filter: blur(8px);\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  display: flex; gap: 4px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  padding: 14px 16px;\n  font-size: 14px; font-weight: 500; color: #64748b;\n  cursor: pointer; border: none;\n  background: transparent;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover { color: #f8fafc; }\n\n.nav-item.active[_ngcontent-%COMP%], .nav-item[class*=\"active\"][_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  border-bottom-color: #6366f1;\n}\n\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 15px; }\n\n\n\n.dashboard-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px;\n  overflow-y: auto;\n  background: #0f172a;\n}\n\n\n\n.section[_ngcontent-%COMP%], .fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.4s cubic-bezier(0.4,0,0.2,1) both;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(14px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n.stats-section[_ngcontent-%COMP%] { margin-bottom: 28px; }\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; padding: 22px;\n  display: flex; align-items: center; gap: 16px;\n  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);\n  backdrop-filter: blur(8px);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.07);\n  border-color: rgba(99,102,241,0.3);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.3);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px; height: 48px; border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px; color: white; flex-shrink: 0;\n}\n.stat-icon.blue[_ngcontent-%COMP%]   { background: linear-gradient(135deg,#3b82f6,#1d4ed8); box-shadow: 0 4px 12px rgba(59,130,246,0.3); }\n.stat-icon.green[_ngcontent-%COMP%]  { background: linear-gradient(135deg,#10b981,#059669); box-shadow: 0 4px 12px rgba(16,185,129,0.3); }\n.stat-icon.purple[_ngcontent-%COMP%] { background: linear-gradient(135deg,#8b5cf6,#6366f1); box-shadow: 0 4px 12px rgba(139,92,246,0.3); }\n.stat-icon.orange[_ngcontent-%COMP%] { background: linear-gradient(135deg,#f59e0b,#d97706); box-shadow: 0 4px 12px rgba(245,158,11,0.3); }\n\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 28px; font-weight: 700;\n  color: #f8fafc; margin: 0 0 4px 0;\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px; color: #64748b; margin: 0;\n  text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; overflow: hidden;\n  backdrop-filter: blur(8px);\n  transition: border-color 0.3s;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]:hover { border-color: rgba(99,102,241,0.2); }\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  display: flex; align-items: center; justify-content: space-between;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px; font-weight: 600; color: #f8fafc; margin: 0;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;\n}\n@media (max-width: 1024px) { .content-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n\n\n.task-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 14px;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n  transition: background 0.2s;\n}\n.task-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.task-item[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n\n\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center;\n  padding: 3px 10px; border-radius: 100px;\n  font-size: 11px; font-weight: 600;\n}\n.badge-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }\n.badge-warning[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }\n.badge-danger[_ngcontent-%COMP%]  { background: rgba(239,68,68,0.15);  color: #f87171; border: 1px solid rgba(239,68,68,0.2); }\n.badge-info[_ngcontent-%COMP%]    { background: rgba(14,165,233,0.15); color: #38bdf8; border: 1px solid rgba(14,165,233,0.2); }\n.badge-purple[_ngcontent-%COMP%]  { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }\n\n\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg,#6366f1,#4f46e5);\n  color: white; border: none; padding: 10px 20px; border-radius: 10px;\n  font-size: 14px; font-weight: 600; cursor: pointer;\n  transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px;\n  box-shadow: 0 4px 12px rgba(99,102,241,0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(99,102,241,0.4); }\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.06); color: #cbd5e1;\n  border: 1px solid rgba(255,255,255,0.1);\n  padding: 10px 20px; border-radius: 10px;\n  font-size: 14px; font-weight: 500; cursor: pointer;\n  transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n\n\n\n.form-group[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block; font-size: 13px; font-weight: 500;\n  color: #94a3b8; margin-bottom: 8px;\n}\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px; padding: 10px 14px;\n  color: #f8fafc; font-size: 14px; font-family: 'Inter', sans-serif;\n  outline: none; transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9;\n  background: rgba(14,165,233,0.06);\n  box-shadow: 0 0 0 3px rgba(14,165,233,0.15);\n}\n.form-control[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; color: #f8fafc; }\n\n\n\n.table-container[_ngcontent-%COMP%] { overflow-x: auto; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\nth[_ngcontent-%COMP%] {\n  text-align: left; padding: 12px 20px;\n  font-size: 11px; font-weight: 600; color: #64748b;\n  text-transform: uppercase; letter-spacing: 0.08em;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  background: rgba(255,255,255,0.02);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 14px 20px; font-size: 14px; color: #cbd5e1;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n  transition: background 0.2s;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); }\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\n\n\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #0ea5e9, #2dd4bf);\n  border-radius: 3px;\n  transition: width 0.6s cubic-bezier(0.4,0,0.2,1);\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 1000; animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; } to { opacity: 1; } }\n\n.modal[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 20px; padding: 32px;\n  width: 520px; max-width: 95vw; max-height: 90vh; overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4,0,0.2,1);\n  box-shadow: 0 24px 48px rgba(0,0,0,0.5);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { opacity: 0; transform: translateY(24px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px; border-radius: 10px;\n  display: flex; align-items: center; gap: 10px;\n  margin-bottom: 16px; font-size: 14px;\n}\n.alert-danger[_ngcontent-%COMP%] { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #f87171; }\n.alert-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); color: #34d399; }\n\n\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 20px; font-weight: 700; color: #f8fafc;\n}\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center; padding: 60px 20px; color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 48px; margin-bottom: 16px; opacity: 0.3; display: block; }\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; color: #94a3b8; margin-bottom: 8px; }\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar { width: 5px; height: 5px; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-track { background: transparent; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }\n\n\n\n.doc-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 12px; padding: 18px;\n  transition: all 0.3s;\n  display: flex; align-items: center; gap: 14px;\n}\n.doc-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(14,165,233,0.3);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.25);\n}\n\n\n\n.meeting-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 12px; padding: 18px;\n  transition: all 0.3s; margin-bottom: 12px;\n}\n.meeting-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99,102,241,0.3);\n  transform: translateY(-2px);\n}\n\n\n\n.timesheet-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 14px;\n  padding: 14px 0;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n}\n.timesheet-row[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n\n\n\n.skill-bar[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\n}\n.skill-label[_ngcontent-%COMP%] { font-size: 13px; color: #94a3b8; width: 120px; flex-shrink: 0; }\n.skill-track[_ngcontent-%COMP%] {\n  flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px;\n}\n.skill-fill[_ngcontent-%COMP%] {\n  height: 100%; background: linear-gradient(90deg,#6366f1,#0ea5e9);\n  border-radius: 3px; transition: width 0.8s cubic-bezier(0.4,0,0.2,1);\n}\n.skill-value[_ngcontent-%COMP%] { font-size: 13px; color: #64748b; width: 36px; text-align: right; }\n\n\n\n@media (max-width: 768px) {\n  .dashboard-header[_ngcontent-%COMP%] { padding: 0 16px; }\n  .dashboard-nav[_ngcontent-%COMP%] { padding: 0 16px; }\n  .dashboard-content[_ngcontent-%COMP%] { padding: 16px; }\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .content-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxhQUFhLEVBQUUsNERBQTRELEVBQUUsU0FBUztBQUN4RjtBQUNBO0VBQ0Usa0NBQWtDLEVBQUUsd0NBQXdDO0VBQzVFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxvQkFBb0I7RUFDeEQsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFNBQVM7QUFDbEQ7QUFDQTtFQUNFLGtDQUFrQyxFQUFFLDJCQUEyQjtFQUMvRCx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CO0VBQzlDLGdDQUFnQyxFQUFFLHVDQUF1QztFQUN6RSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCO0VBQzNELGVBQWUsRUFBRSxjQUFjO0FBQ2pDO0FBQ0E7RUFDRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFNBQVM7RUFDNUQsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCO0FBQ2hFO0FBQ0EsaUJBQWlCLGVBQWUsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFO0FBQzdELHdCQUF3QixlQUFlLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFO0FBQzNFLG9CQUFvQixnQkFBZ0IsRUFBRTtBQUN0QztFQUNFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUI7RUFDbkQsZ0NBQWdDLEVBQUUsc0NBQXNDO0VBQ3hFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZTtFQUNsRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQjtBQUM3RjtBQUNBLHdDQUF3QyxnQ0FBZ0MsRUFBRTs7QUFFMUU7RUFDRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsUUFBUTtFQUM1QyxpQkFB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b20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1TeW5lOndnaHRANjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8qIMOiwpXCkMOiwpXCkCBET0NVTUVOVFMgU0VDVElPTiAoRW1wbG95ZWUpIMOiwpXCkMOiwpXCkCAqL1xuLmRvY3VtZW50cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpOyBnYXA6IDE2cHg7XG59XG4uZG9jdW1lbnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDIycHg7IHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7XG59XG4uZG9jdW1lbnQtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNCwxNjUsMjMzLDAuMyk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuLmRvY3VtZW50LWljb24ge1xuICB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNCwxNjUsMjMzLDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4OyBjb2xvcjogIzM4YmRmODtcbn1cbi5kb2N1bWVudC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZG9jdW1lbnQtaW5mbyB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMDsgfVxuLmRvY3VtZW50LWRlc2NyaXB0aW9uIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzk0YTNiODsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuLmRvY3VtZW50LWFjdGlvbnMgeyBtYXJnaW4tdG9wOiBhdXRvOyB9XG4uZG9jdW1lbnQtYWN0aW9ucyAuYnRuLWRvd25sb2FkIHtcbiAgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDlweCAxNnB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNCwxNjUsMjMzLDAuMik7XG4gIGNvbG9yOiAjMzhiZGY4OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogOHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5kb2N1bWVudC1hY3Rpb25zIC5idG4tZG93bmxvYWQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4yKTsgfVxuXG4uYnRuLXJlZnJlc2gge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgcGFkZGluZzogOXB4IDE4cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgY29sb3I6ICM5NGEzYjg7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5idG4tcmVmcmVzaDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgY29sb3I6ICNmOGZhZmM7IH1cbi5idG4tcmVmcmVzaDpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuQGtleWZyYW1lcyBzcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cbi5zcGluIHsgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG4ubG9hZGluZy1zdGF0ZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNjBweCAyMHB4OyB9XG4ubG9hZGluZy1zdGF0ZSBwIHsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi10b3A6IDE2cHg7IGZvbnQtc2l6ZTogMTRweDsgfVxuLnNwaW5uZXIge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwZWE1ZTk7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlOyBtYXJnaW46IDAgYXV0bztcbn1cblxuLmVtcHR5LWljb24geyBmb250LXNpemU6IDQ4cHg7IGNvbG9yOiAjMzM0MTU1OyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4uZW1wdHktc3RhdGUgaDMgeyBmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjOTRhM2I4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbi5lbXB0eS1zdGF0ZSBwIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuXG4vKiDDosKVwpDDosKVwpAgTUVFVElOR1MgU0VDVElPTiAoRW1wbG95ZWUpIMOiwpXCkMOiwpXCkCAqL1xuLm1lZXRpbmctY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7IHBhZGRpbmc6IDIwcHg7IG1hcmdpbi1ib3R0b206IDEycHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM2MzY2ZjE7XG59XG4ubWVldGluZy1jYXJkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4zKTsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTsgfVxuLm1lZXRpbmctY2FyZCAubWVldGluZy10aXRsZSB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMCAwIDEwcHggMDsgfVxuLm1lZXRpbmctZGV0YWlscyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4ubWVldGluZy1kZXRhaWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzk0YTNiODsgfVxuLm1lZXRpbmctZGV0YWlsIGkgeyBjb2xvcjogIzYzNjZmMTsgd2lkdGg6IDE0cHg7IH1cbi5tZWV0aW5nLXBhcnRpY2lwYW50cyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogLTRweDsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuLnBhcnRpY2lwYW50LWF2YXRhciB7XG4gIHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgI2E4NTVmNyk7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB3aGl0ZTsgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG4ucGFydGljaXBhbnQtYXZhdGFyOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDA7IH1cbi5wYXJ0aWNpcGFudC1tb3JlIHtcbiAgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpOyBjb2xvcjogIzk0YTNiODtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG4ubWVldGluZy1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IH1cbi5idG4tam9pbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTIpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTtcbiAgY29sb3I6ICNhNWI0ZmM7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5idG4tam9pbjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjIyKTsgfVxuXG4vKiDDosKVwpDDosKVwpAgTU9EQUwgKEVtcGxveWVlKSDDosKVwpDDosKVwpAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHotaW5kZXg6IDEwMDA7XG59XG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxZTI5M2I7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzJweDsgd2lkdGg6IDUyMHB4OyBtYXgtd2lkdGg6IDk1dnc7IG1heC1oZWlnaHQ6IDkwdmg7IG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMjRweCA0OHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbn1cbkBrZXlmcmFtZXMgc2xpZGVVcCB7IGZyb20geyBvcGFjaXR5OjA7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKDI0cHgpOyB9IHRvIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTsgfSB9XG4ubW9kYWwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG4ubW9kYWwtdGl0bGUgeyBmb250LWZhbWlseTogJ1N5bmUnLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IH1cbi5tb2RhbC1jbG9zZSB7XG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBjb2xvcjogIzk0YTNiODsgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxNnB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5tb2RhbC1jbG9zZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMTUpOyBjb2xvcjogI2Y4NzE3MTsgfVxuLm1vZGFsLWJvZHkgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE4cHg7IH1cbi5mb3JtLWdyb3VwIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA4cHg7IH1cbi5mb3JtLWdyb3VwIGxhYmVsIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjb2xvcjogIzk0YTNiODsgfVxuLmZvcm0tZ3JvdXAgaW5wdXQsIC5mb3JtLWdyb3VwIHNlbGVjdCwgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDEwcHggMTRweDsgY29sb3I6ICNmOGZhZmM7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjsgb3V0bGluZTogbm9uZTsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cywgLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzLCAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzBlYTVlOTsgYmFja2dyb3VuZDogcmdiYSgxNCwxNjUsMjMzLDAuMDYpOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNCwxNjUsMjMzLDAuMTUpO1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyLCAuZm9ybS1ncm91cCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIgeyBjb2xvcjogIzQ3NTU2OTsgfVxuLmZvcm0tZ3JvdXAgc2VsZWN0IG9wdGlvbiB7IGJhY2tncm91bmQ6ICMxZTI5M2I7IH1cbi5mb3JtLWdyb3VwIHRleHRhcmVhIHsgcmVzaXplOiB2ZXJ0aWNhbDsgbWluLWhlaWdodDogODBweDsgfVxuLmZvcm0tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGdhcDogMTJweDsgcGFkZGluZy10b3A6IDhweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgTUlTU0lORyBVVElMSVRZIENMQVNTRVMgw6LClMKAw6LClMKAICovXG5cbi8qIFRhc2sgbGlzdCBpdGVtcyAoZGFzaGJvYXJkIHNlY3Rpb24pICovXG4udGFza3MtbGlzdCB7IHBhZGRpbmc6IDA7IH1cbi50YXNrLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi50YXNrLXRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgNHB4IDA7IH1cbi50YXNrLWRlc2NyaXB0aW9uIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiAwIDAgNnB4IDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4udGFzay1tZXRhIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjQ3NDhiOyBmbGV4LXdyYXA6IHdyYXA7IH1cbi5kdWUtZGF0ZSwgLnByaW9yaXR5IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cbi50YXNrLXByb2dyZXNzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyB3aWR0aDogMTIwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4udGFzay1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHsgZmxleDogMTsgfVxuLnByb2dyZXNzLXRleHQgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB3aWR0aDogMzZweDsgdGV4dC1hbGlnbjogcmlnaHQ7IGZsZXgtc2hyaW5rOiAwOyB9XG5cbi8qIFRhc2sgZ3JpZCAodGFjaGVzIHNlY3Rpb24pICovXG4udGFza3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgZ2FwOiAxNnB4O1xufVxuLnRhc2stY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7IHBhZGRpbmc6IDIwcHg7IHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnRhc2stY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogcmdiYSgxNCwxNjUsMjMzLDAuMjUpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLDAsMCwwLjI1KTsgfVxuLnRhc2stY2FyZC5jb21wbGV0ZWQgeyBvcGFjaXR5OiAwLjY7IH1cbi50YXNrLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMTBweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuLnRhc2stY2FyZCAudGFzay10aXRsZSB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMDsgfVxuLnRhc2stcHJpb3JpdHkge1xuICBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMTAwcHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlOyBmbGV4LXNocmluazogMDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4udGFzay1jYXJkIC50YXNrLWRlc2NyaXB0aW9uIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luLWJvdHRvbTogMTRweDsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuLnRhc2stY2FyZCAudGFzay1tZXRhIHsgZ2FwOiAxNHB4OyBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4udGFzay1kdWUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuLnRhc2stc3RhdHVzIHsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyB9XG4udGFzay1wcm9ncmVzcy1zZWN0aW9uIHsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuLnByb2dyZXNzLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4udGFzay1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IH1cbi50YXNrLWFjdGlvbnMgLmJ0bi1hY3Rpb24ge1xuICBmbGV4OiAxOyBwYWRkaW5nOiA4cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBjb2xvcjogIzk0YTNiODtcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDRweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4udGFzay1hY3Rpb25zIC5idG4tYWN0aW9uOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBjb2xvcjogI2Y4ZmFmYzsgfVxuLmJ0bi1jb21wbGV0ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEpICFpbXBvcnRhbnQ7IGNvbG9yOiAjMzRkMzk5ICFpbXBvcnRhbnQ7IGJvcmRlci1jb2xvcjogcmdiYSgxNiwxODUsMTI5LDAuMikgIWltcG9ydGFudDsgfVxuLmJ0bi1jb21wbGV0ZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjIpICFpbXBvcnRhbnQ7IH1cblxuLyogU2VjdGlvbiBoZWFkZXIgKi9cbi5zZWN0aW9uLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuLnNlY3Rpb24taGVhZGVyIC5zZWN0aW9uLXRpdGxlIHsgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYzsgfVxuLnNlY3Rpb24tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuLmZpbHRlci1jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgfVxuLmZpbHRlci1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogOHB4IDEycHg7IGNvbG9yOiAjOTRhM2I4O1xuICBmb250LXNpemU6IDEzcHg7IG91dGxpbmU6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWx0ZXItc2VsZWN0IG9wdGlvbiB7IGJhY2tncm91bmQ6ICMxZTI5M2I7IGNvbG9yOiAjZjhmYWZjOyB9XG5cbi8qIEFjdGl2aXRpZXMgKi9cbi5hY3Rpdml0aWVzLWxpc3QgeyBwYWRkaW5nOiA4cHggMDsgfVxuLmFjdGl2aXR5LWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxNHB4OyBwYWRkaW5nOiAxMnB4IDIwcHg7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yczsgfVxuLmFjdGl2aXR5LWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG4uYWN0aXZpdHktaWNvbiB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxNXB4O1xufVxuLmFjdGl2aXR5LWljb24uYmx1ZSAgIHsgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LDAuMTUpOyBjb2xvcjogIzYwYTVmYTsgfVxuLmFjdGl2aXR5LWljb24uZ3JlZW4gIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTUpOyBjb2xvcjogIzM0ZDM5OTsgfVxuLmFjdGl2aXR5LWljb24ucHVycGxlIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogI2E1YjRmYzsgfVxuLmFjdGl2aXR5LWljb24ub3JhbmdlIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogI2ZiYmYyNDsgfVxuLmFjdGl2aXR5LWNvbnRlbnQgeyBmbGV4OiAxOyB9XG4uYWN0aXZpdHktdGl0bGUgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiAjY2JkNWUxOyBtYXJnaW46IDAgMCAzcHggMDsgfVxuLmFjdGl2aXR5LXRpbWUgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNDc1NTY5OyB9XG4ucmVmcmVzaC1idG4ge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgY29sb3I6ICM5NGEzYjg7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLnJlZnJlc2gtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBjb2xvcjogI2Y4ZmFmYzsgfVxuXG4vKiBNZWV0aW5ncyAqL1xuLm1lZXRpbmdzLXNlY3Rpb24geyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4ubWVldGluZ3MtbGlzdCB7IHBhZGRpbmc6IDA7IH1cbi5tZWV0aW5nLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMjBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cbi5tZWV0aW5nLWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG4ubWVldGluZy1pdGVtOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4ubWVldGluZy10aW1lIHsgdGV4dC1hbGlnbjogY2VudGVyOyBmbGV4LXNocmluazogMDsgbWluLXdpZHRoOiA2MHB4OyB9XG4ubWVldGluZy10aW1lIC50aW1lIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IH1cbi5tZWV0aW5nLXRpbWUgLmR1cmF0aW9uIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IH1cbi5tZWV0aW5nLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5tZWV0aW5nLXRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgNnB4IDA7IH1cbi5tZWV0aW5nLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDE0cHg7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IH1cbi5tZWV0aW5nLWRhdGUsIC5tZWV0aW5nLWxvY2F0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cbi5tZWV0aW5nLWFjdGlvbnMgeyBmbGV4LXNocmluazogMDsgfVxuLmJ0bi1qb2luIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTtcbiAgY29sb3I6ICNhNWI0ZmM7IHBhZGRpbmc6IDdweCAxNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uYnRuLWpvaW46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7IH1cblxuLyogVGltZXNoZWV0IHRhYmxlICovXG4udGltZXNoZWV0LXRhYmxlLWNvbnRhaW5lciB7IG92ZXJmbG93LXg6IGF1dG87IH1cbi50aW1lc2hlZXQtdGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuLnRpbWVzaGVldC10YWJsZSB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XG59XG4udGltZXNoZWV0LXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTRweCAxNnB4OyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjY2JkNWUxO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbn1cbi50aW1lc2hlZXQtdGFibGUgdHI6aG92ZXIgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG5cbi8qIERvY3VtZW50IGNhcmRzICovXG4uZG9jdW1lbnRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7IGdhcDogMTZweDtcbn1cbi5kb2N1bWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDsgcGFkZGluZzogMjBweDsgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTZweDtcbn1cbi5kb2N1bWVudC1jYXJkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LDE2NSwyMzMsMC4zKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7IH1cbi5kb2MtaWNvbiB7IHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjEpOyBjb2xvcjogIzM4YmRmODsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMjBweDsgZmxleC1zaHJpbms6IDA7IH1cbi5kb2MtaW5mbyB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLmRvYy1uYW1lIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgNHB4IDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4uZG9jLW1ldGEgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB9XG4uZG9jLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgZmxleC1zaHJpbms6IDA7IH1cbi5idG4tZG93bmxvYWQge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgY29sb3I6ICM5NGEzYjg7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmJ0bi1kb3dubG9hZDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6ICMzOGJkZjg7IH1cblxuXG4vKiDDosKUwoDDosKUwoAgQkFTRSDDosKUwoDDosKUwoAgKi9cbi5lbXBsb3llZS1kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiDDosKUwoDDosKUwoAgSEVBREVSIMOiwpTCgMOiwpTCgCAqL1xuLmRhc2hib2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LDIzLDQyLDAuOTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIHBhZGRpbmc6IDAgMjhweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IHotaW5kZXg6IDEwMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5oZWFkZXItbGVmdCAuZGFzaGJvYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZjhmYWZjO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLmhlYWRlci1sZWZ0IC5kYXNoYm9hcmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4tbm90aWZpY2F0aW9uLFxuLmJ0bi1wcm9maWxlLFxuLmJ0bi1sb2dvdXQge1xuICB3aWR0aDogMzhweDsgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBmb250LXNpemU6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgY29sb3I6ICM5NGEzYjg7XG59XG5cbi5idG4tbm90aWZpY2F0aW9uOmhvdmVyLFxuLmJ0bi1wcm9maWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBjb2xvcjogI2Y4ZmFmYztcbn1cblxuLmJ0bi1sb2dvdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjE1KTtcbiAgY29sb3I6ICNmODcxNzE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzksNjgsNjgsMC4yKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtNHB4OyByaWdodDogLTRweDtcbiAgYmFja2dyb3VuZDogI2VmNDQ0NDsgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBOQVYgw6LClMKAw6LClMKAICovXG4uZGFzaGJvYXJkLW5hdiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsMjMsNDIsMC44KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIHBhZGRpbmc6IDAgMjhweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xufVxuXG4ubmF2LWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDsgZ2FwOiA0cHg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDsgY29sb3I6ICM2NDc0OGI7XG4gIGN1cnNvcjogcG9pbnRlcjsgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHsgY29sb3I6ICNmOGZhZmM7IH1cblxuLm5hdi1pdGVtLmFjdGl2ZSxcbi5uYXYtaXRlbVtjbGFzcyo9XCJhY3RpdmVcIl0ge1xuICBjb2xvcjogI2E1YjRmYztcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYzNjZmMTtcbn1cblxuLm5hdi1pdGVtIGkgeyBmb250LXNpemU6IDE1cHg7IH1cblxuLyogw6LClMKAw6LClMKAIENPTlRFTlQgw6LClMKAw6LClMKAICovXG4uZGFzaGJvYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyOHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU0VDVElPTiBBTklNQVRJT04gw6LClMKAw6LClMKAICovXG4uc2VjdGlvbiwgLmZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVVcCAwLjRzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSkgYm90aDtcbn1cbkBrZXlmcmFtZXMgZmFkZVVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBTVEFUUyDDosKUwoDDosKUwoAgKi9cbi5zdGF0cy1zZWN0aW9uIHsgbWFyZ2luLWJvdHRvbTogMjhweDsgfVxuLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3RhdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDsgcGFkZGluZzogMjJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cbi5zdGF0LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjMpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4uc3RhdC1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDsgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDsgY29sb3I6IHdoaXRlOyBmbGV4LXNocmluazogMDtcbn1cbi5zdGF0LWljb24uYmx1ZSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjM2I4MmY2LCMxZDRlZDgpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTksMTMwLDI0NiwwLjMpOyB9XG4uc3RhdC1pY29uLmdyZWVuICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzEwYjk4MSwjMDU5NjY5KTsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE2LDE4NSwxMjksMC4zKTsgfVxuLnN0YXQtaWNvbi5wdXJwbGUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM4YjVjZjYsIzYzNjZmMSk7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMzksOTIsMjQ2LDAuMyk7IH1cbi5zdGF0LWljb24ub3JhbmdlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjZjU5ZTBiLCNkOTc3MDYpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjQ1LDE1OCwxMSwwLjMpOyB9XG5cbi5zdGF0LWNvbnRlbnQgaDMge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDAgMCA0cHggMDtcbn1cbi5zdGF0LWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTsgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogw6LClMKAw6LClMKAIENBUkRTIMOiwpTCgMOiwpTCgCAqL1xuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4OyBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMik7IH1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDA7XG59XG5cbi5jb250ZW50LWdyaWQge1xuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMjBweDsgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHsgLmNvbnRlbnQtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cblxuLyogw6LClMKAw6LClMKAIFRBU0sgSVRFTVMgw6LClMKAw6LClMKAICovXG4udGFzay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG59XG4udGFzay1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgfVxuLnRhc2staXRlbTpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG4vKiDDosKUwoDDosKUwoAgQkFER0VTIMOiwpTCgMOiwpTCgCAqL1xuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwO1xufVxuLmJhZGdlLXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xNSk7IGNvbG9yOiAjMzRkMzk5OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTsgfVxuLmJhZGdlLXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiAjZmJiZjI0OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsMC4yKTsgfVxuLmJhZGdlLWRhbmdlciAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjE1KTsgIGNvbG9yOiAjZjg3MTcxOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjIpOyB9XG4uYmFkZ2UtaW5mbyAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6ICMzOGJkZjg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQsMTY1LDIzMywwLjIpOyB9XG4uYmFkZ2UtcHVycGxlICB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6ICNhNWI0ZmM7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjIpOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBCVVRUT05TIMOiwpTCgMOiwpTCgCAqL1xuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjNjM2NmYxLCM0ZjQ2ZTUpO1xuICBjb2xvcjogd2hpdGU7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogMTBweCAyMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDk5LDEwMiwyNDEsMC4zKTtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDk5LDEwMiwyNDEsMC40KTsgfVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGNvbG9yOiAjY2JkNWUxO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDsgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgY29sb3I6ICNmOGZhZmM7IH1cblxuLyogw6LClMKAw6LClMKAIEZPUk1TIMOiwpTCgMOiwpTCgCAqL1xuLmZvcm0tZ3JvdXAgeyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjOTRhM2I4OyBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZm9ybS1jb250cm9sLCAuZm9ybS1zZWxlY3QsIC5mb3JtLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogMTBweCAxNHB4O1xuICBjb2xvcjogI2Y4ZmFmYzsgZm9udC1zaXplOiAxNHB4OyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1zZWxlY3Q6Zm9jdXMsIC5mb3JtLXRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMGVhNWU5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4wNik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE0LDE2NSwyMzMsMC4xNSk7XG59XG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNDc1NTY5OyB9XG4uZm9ybS1zZWxlY3Qgb3B0aW9uIHsgYmFja2dyb3VuZDogIzFlMjkzYjsgY29sb3I6ICNmOGZhZmM7IH1cblxuLyogw6LClMKAw6LClMKAIFRBQkxFUyDDosKUwoDDosKUwoAgKi9cbi50YWJsZS1jb250YWluZXIgeyBvdmVyZmxvdy14OiBhdXRvOyB9XG50YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XG59XG50ZCB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogI2NiZDVlMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cbnRyOmhvdmVyIHRkIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgfVxudHI6bGFzdC1jaGlsZCB0ZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLyogw6LClMKAw6LClMKAIFBST0dSRVNTIMOiwpTCgMOiwpTCgCAqL1xuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogNnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpOyBib3JkZXItcmFkaXVzOiAzcHg7IG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGVhNWU5LCAjMmRkNGJmKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBNT0RBTCDDosKUwoDDosKUwoAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7IGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZWFzZTtcbn1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6IDA7IH0gdG8geyBvcGFjaXR5OiAxOyB9IH1cblxuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogIzFlMjkzYjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAzMnB4O1xuICB3aWR0aDogNTIwcHg7IG1heC13aWR0aDogOTV2dzsgbWF4LWhlaWdodDogOTB2aDsgb3ZlcmZsb3cteTogYXV0bztcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDQ4cHggcmdiYSgwLDAsMCwwLjUpO1xufVxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBBTEVSVFMgw6LClMKAw6LClMKAICovXG4uYWxlcnQge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgZm9udC1zaXplOiAxNHB4O1xufVxuLmFsZXJ0LWRhbmdlciB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LDAuMik7IGNvbG9yOiAjZjg3MTcxOyB9XG4uYWxlcnQtc3VjY2VzcyB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTsgY29sb3I6ICMzNGQzOTk7IH1cblxuLyogw6LClMKAw6LClMKAIFNFQ1RJT04gSEVBREVSIMOiwpTCgMOiwpTCgCAqL1xuLnNlY3Rpb24taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYztcbn1cblxuLyogw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgCAqL1xuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA2MHB4IDIwcHg7IGNvbG9yOiAjNjQ3NDhiO1xufVxuLmVtcHR5LXN0YXRlIGkgeyBmb250LXNpemU6IDQ4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IG9wYWNpdHk6IDAuMzsgZGlzcGxheTogYmxvY2s7IH1cbi5lbXB0eS1zdGF0ZSBoMyB7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM5NGEzYjg7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgU0NST0xMQkFSIMOiwpTCgMOiwpTCgCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA1cHg7IGhlaWdodDogNXB4OyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTsgfVxuXG4vKiDDosKUwoDDosKUwoAgRE9DVU1FTlQgQ0FSRFMgw6LClMKAw6LClMKAICovXG4uZG9jLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4O1xufVxuLmRvYy1jYXJkOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LDE2NSwyMzMsMC4zKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4yNSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBNRUVUSU5HIENBUkRTIMOiwpTCgMOiwpTCgCAqL1xuLm1lZXRpbmctY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm1lZXRpbmctY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLyogw6LClMKAw6LClMKAIFRJTUVTSEVFVCDDosKUwoDDosKUwoAgKi9cbi50aW1lc2hlZXQtcm93IHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xufVxuLnRpbWVzaGVldC1yb3c6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLyogw6LClMKAw6LClMKAIFNLSUxMUyDDosKUwoDDosKUwoAgKi9cbi5za2lsbC1iYXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uc2tpbGwtbGFiZWwgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjOTRhM2I4OyB3aWR0aDogMTIwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uc2tpbGwtdHJhY2sge1xuICBmbGV4OiAxOyBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnNraWxsLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjNjM2NmYxLCMwZWE1ZTkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7IHRyYW5zaXRpb246IHdpZHRoIDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbn1cbi5za2lsbC12YWx1ZSB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2NDc0OGI7IHdpZHRoOiAzNnB4OyB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4vKiDDosKUwoDDosKUwoAgUkVTUE9OU0lWRSDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGFzaGJvYXJkLWhlYWRlciB7IHBhZGRpbmc6IDAgMTZweDsgfVxuICAuZGFzaGJvYXJkLW5hdiB7IHBhZGRpbmc6IDAgMTZweDsgfVxuICAuZGFzaGJvYXJkLWNvbnRlbnQgeyBwYWRkaW5nOiAxNnB4OyB9XG4gIC5zdGF0cy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyB9XG4gIC5jb250ZW50LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAubmF2LWl0ZW0gc3BhbiB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _employee_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-dashboard.component */ 2178);
/* harmony import */ var _skills_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills-profile.component */ 3505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);







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
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeModule, {
    declarations: [_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeDashboardComponent, _skills_profile_component__WEBPACK_IMPORTED_MODULE_1__.SkillsProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _models_skills_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/skills.model */ 7452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/skills.service */ 8772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class EmployeeService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'http://localhost:3001/api/employee';
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
      return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_employee_employee_module_ts.js.map
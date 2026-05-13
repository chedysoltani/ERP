"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_manager_manager_module_ts"],{

/***/ 5775:
/*!****************************************************************!*\
  !*** ./src/app/components/manager/enhanced-gantt.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnhancedGanttComponent: () => (/* binding */ EnhancedGanttComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/analytics.service */ 2210);
/* harmony import */ var _services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task-enhanced.service */ 6784);





function EnhancedGanttComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnhancedGanttComponent_button_17_Template_button_click_0_listener() {
      const mode_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changeView(mode_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r2.currentView === mode_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mode_r2.label, " ");
  }
}
function EnhancedGanttComponent_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const date_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](date_r4.label);
  }
}
function EnhancedGanttComponent_div_21_div_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assignment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", assignment_r6.employee_name)("ngClass", "assignment-" + assignment_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", assignment_r6.employee_initials, " ");
  }
}
function EnhancedGanttComponent_div_21_div_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", task_r7.dependencies.length, " dep(s)");
  }
}
function EnhancedGanttComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 34)(5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EnhancedGanttComponent_div_21_div_7_div_12_Template, 2, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EnhancedGanttComponent_div_21_div_7_div_13_Template, 4, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 41)(15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragstart", function EnhancedGanttComponent_div_21_div_7_Template_div_dragstart_15_listener($event) {
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onDragStart($event, task_r7));
    })("dragend", function EnhancedGanttComponent_div_21_div_7_Template_div_dragend_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("blocked", task_r7.is_blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "status-" + task_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "priority-" + task_r7.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r7.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", task_r7.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", task_r7.assignments);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r7.dependencies && task_r7.dependencies.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r2.getTaskLeftPosition(task_r7), "%")("width", ctx_r2.getTaskWidth(task_r7), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("blocked", task_r7.is_blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "status-" + task_r7.status)("draggable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", task_r7.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r7.title);
  }
}
function EnhancedGanttComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EnhancedGanttComponent_div_21_div_5_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EnhancedGanttComponent_div_21_div_7_Template, 19, 21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.timelineDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
  }
}
function EnhancedGanttComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loading Gantt Chart...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class EnhancedGanttComponent {
  constructor(analyticsService, taskEnhancedService) {
    this.analyticsService = analyticsService;
    this.taskEnhancedService = taskEnhancedService;
    this.tasks = [];
    this.loading = false;
    this.currentView = 'week';
    this.viewModes = [{
      value: 'day',
      label: 'Day'
    }, {
      value: 'week',
      label: 'Week'
    }, {
      value: 'month',
      label: 'Month'
    }];
    this.timelineDates = [];
  }
  ngOnInit() {
    if (this.projectId) {
      this.loadGanttData();
    }
  }
  loadGanttData() {
    this.loading = true;
    this.analyticsService.getGanttData(this.projectId).subscribe({
      next: response => {
        this.tasks = response.data || [];
        this.generateTimeline();
        this.loading = false;
      },
      error: error => {
        console.error('Error loading Gantt data:', error);
        this.loading = false;
      }
    });
  }
  generateTimeline() {
    if (this.tasks.length === 0) return;
    const startDate = new Date(Math.min(...this.tasks.map(t => new Date(t.start_date).getTime())));
    const endDate = new Date(Math.max(...this.tasks.map(t => new Date(t.end_date).getTime())));
    // Add buffer days
    startDate.setDate(startDate.getDate() - 2);
    endDate.setDate(endDate.getDate() + 2);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    this.timelineDates = [];
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      this.timelineDates.push({
        date: date,
        label: this.formatDateLabel(date)
      });
    }
  }
  formatDateLabel(date) {
    switch (this.currentView) {
      case 'day':
        return date.toLocaleDateString('en-US', {
          weekday: 'short',
          day: 'numeric'
        });
      case 'week':
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
      case 'month':
        return date.toLocaleDateString('en-US', {
          month: 'short'
        });
      default:
        return date.getDate().toString();
    }
  }
  getTaskLeftPosition(task) {
    if (this.timelineDates.length === 0) return 0;
    const taskStart = new Date(task.start_date);
    const timelineStart = new Date(this.timelineDates[0].date);
    const totalDays = this.timelineDates.length;
    const daysFromStart = Math.ceil((taskStart.getTime() - timelineStart.getTime()) / (1000 * 60 * 60 * 24));
    return daysFromStart / totalDays * 100;
  }
  getTaskWidth(task) {
    if (this.timelineDates.length === 0) return 0;
    const taskStart = new Date(task.start_date);
    const taskEnd = new Date(task.end_date);
    const totalDays = this.timelineDates.length;
    const taskDuration = Math.ceil((taskEnd.getTime() - taskStart.getTime()) / (1000 * 60 * 60 * 24));
    return taskDuration / totalDays * 100;
  }
  changeView(view) {
    this.currentView = view;
    this.generateTimeline();
  }
  onDragStart(event, task) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('taskId', task.id.toString());
    }
  }
  onDragEnd(event) {
    // Handle drag end - update task dates
  }
  get uniqueEmployees() {
    const employees = new Set();
    this.tasks.forEach(task => {
      task.assignments?.forEach(assignment => {
        employees.add(assignment.employee_id);
      });
    });
    return employees.size;
  }
  get totalDependencies() {
    return this.tasks.reduce((total, task) => total + (task.dependencies?.length || 0), 0);
  }
  static {
    this.ɵfac = function EnhancedGanttComponent_Factory(t) {
      return new (t || EnhancedGanttComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_1__.TaskEnhancedService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EnhancedGanttComponent,
      selectors: [["app-enhanced-gantt"]],
      inputs: {
        projectId: "projectId",
        projectName: "projectName"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 7,
      consts: [[1, "enhanced-gantt-container"], [1, "gantt-header"], [1, "gantt-title"], [1, "gantt-stats"], [1, "stat-item"], [1, "bi", "bi-list-task"], [1, "bi", "bi-people"], [1, "bi", "bi-link"], [1, "gantt-controls"], [1, "view-modes"], ["class", "view-mode-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "refresh-btn", 3, "click"], [1, "bi", "bi-arrow-clockwise"], ["class", "gantt-timeline", 4, "ngIf"], ["class", "gantt-loading", 4, "ngIf"], [1, "gantt-legend"], [1, "legend-item"], [1, "legend-color", "status-todo"], [1, "legend-color", "status-in_progress"], [1, "legend-color", "status-done"], [1, "legend-color", "blocked"], [1, "view-mode-btn", 3, "click"], [1, "gantt-timeline"], [1, "timeline-header"], [1, "task-column-header"], [1, "timeline-dates"], ["class", "timeline-date", 4, "ngFor", "ngForOf"], [1, "gantt-body"], ["class", "gantt-row", 3, "blocked", 4, "ngFor", "ngForOf"], [1, "timeline-date"], [1, "date-label"], [1, "gantt-row"], [1, "task-info"], [1, "task-title"], [1, "task-meta"], [1, "task-status", 3, "ngClass"], [1, "task-priority", 3, "ngClass"], [1, "task-progress"], [1, "task-assignments"], ["class", "employee-avatar", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], ["class", "task-dependencies", 4, "ngIf"], [1, "timeline-bar-container"], [1, "timeline-bar", 3, "dragstart", "dragend", "ngClass", "draggable"], [1, "bar-progress"], [1, "bar-label"], [1, "employee-avatar", 3, "title", "ngClass"], [1, "task-dependencies"], [1, "bi", "bi-link-45deg"], [1, "gantt-loading"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]],
      template: function EnhancedGanttComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EnhancedGanttComponent_button_17_Template, 2, 3, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnhancedGanttComponent_Template_button_click_18_listener() {
            return ctx.loadGanttData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Refresh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, EnhancedGanttComponent_div_21_Template, 8, 2, "div", 13)(22, EnhancedGanttComponent_div_22_Template, 6, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15)(24, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "To Do");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "In Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Done");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Blocked");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectName || "Project Gantt Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.tasks.length, " Tasks ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.uniqueEmployees, " Employees ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.totalDependencies, " Dependencies ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.viewModes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".enhanced-gantt-container[_ngcontent-%COMP%] {\n      background: white;\n      border-radius: 12px;\n      padding: 24px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n    .gantt-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 24px;\n      padding-bottom: 16px;\n      border-bottom: 1px solid #e0e0e0;\n    }\n\n    .gantt-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0 0 8px 0;\n      font-size: 24px;\n      font-weight: 600;\n      color: #333;\n    }\n\n    .gantt-stats[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 16px;\n    }\n\n    .stat-item[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      font-size: 14px;\n      color: #666;\n    }\n\n    .stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 16px;\n    }\n\n    .gantt-controls[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n    }\n\n    .view-modes[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 4px;\n      background: #f5f5f5;\n      padding: 4px;\n      border-radius: 8px;\n    }\n\n    .view-mode-btn[_ngcontent-%COMP%] {\n      padding: 8px 16px;\n      border: none;\n      background: transparent;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 14px;\n      font-weight: 500;\n      color: #666;\n      transition: all 0.2s;\n    }\n\n    .view-mode-btn[_ngcontent-%COMP%]:hover {\n      background: rgba(0,0,0,0.05);\n    }\n\n    .view-mode-btn.active[_ngcontent-%COMP%] {\n      background: white;\n      color: #1976d2;\n      box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n    }\n\n    .refresh-btn[_ngcontent-%COMP%] {\n      padding: 8px 16px;\n      border: 1px solid #e0e0e0;\n      background: white;\n      border-radius: 8px;\n      cursor: pointer;\n      font-size: 14px;\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      transition: all 0.2s;\n    }\n\n    .refresh-btn[_ngcontent-%COMP%]:hover {\n      background: #f5f5f5;\n    }\n\n    .gantt-timeline[_ngcontent-%COMP%] {\n      overflow-x: auto;\n    }\n\n    .timeline-header[_ngcontent-%COMP%] {\n      display: flex;\n      background: #f9f9f9;\n      padding: 12px;\n      border-radius: 8px 8px 0 0;\n      border: 1px solid #e0e0e0;\n      border-bottom: none;\n    }\n\n    .task-column-header[_ngcontent-%COMP%] {\n      width: 300px;\n      min-width: 300px;\n      font-weight: 600;\n      color: #333;\n      padding: 8px;\n    }\n\n    .timeline-dates[_ngcontent-%COMP%] {\n      display: flex;\n      flex: 1;\n    }\n\n    .timeline-date[_ngcontent-%COMP%] {\n      flex: 1;\n      text-align: center;\n      padding: 8px;\n      font-size: 12px;\n      color: #666;\n      border-left: 1px solid #e0e0e0;\n    }\n\n    .gantt-body[_ngcontent-%COMP%] {\n      border: 1px solid #e0e0e0;\n      border-radius: 0 0 8px 8px;\n    }\n\n    .gantt-row[_ngcontent-%COMP%] {\n      display: flex;\n      padding: 12px;\n      border-bottom: 1px solid #e0e0e0;\n      transition: background 0.2s;\n    }\n\n    .gantt-row[_ngcontent-%COMP%]:hover {\n      background: #f9f9f9;\n    }\n\n    .gantt-row.blocked[_ngcontent-%COMP%] {\n      background: rgba(255, 152, 0, 0.05);\n    }\n\n    .task-info[_ngcontent-%COMP%] {\n      width: 300px;\n      min-width: 300px;\n      padding-right: 16px;\n    }\n\n    .task-title[_ngcontent-%COMP%] {\n      font-weight: 500;\n      color: #333;\n      margin-bottom: 8px;\n      font-size: 14px;\n    }\n\n    .task-meta[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 8px;\n      margin-bottom: 8px;\n    }\n\n    .task-status[_ngcontent-%COMP%], .task-priority[_ngcontent-%COMP%] {\n      padding: 2px 8px;\n      border-radius: 4px;\n      font-size: 11px;\n      font-weight: 500;\n      text-transform: uppercase;\n    }\n\n    .task-status.todo[_ngcontent-%COMP%] { background: #e3f2fd; color: #1976d2; }\n    .task-status.in_progress[_ngcontent-%COMP%] { background: #fff3e0; color: #f57c00; }\n    .task-status.done[_ngcontent-%COMP%] { background: #e8f5e9; color: #388e3c; }\n    .task-status.cancelled[_ngcontent-%COMP%] { background: #ffebee; color: #d32f2f; }\n\n    .task-priority.low[_ngcontent-%COMP%] { background: #e8f5e9; color: #388e3c; }\n    .task-priority.medium[_ngcontent-%COMP%] { background: #fff3e0; color: #f57c00; }\n    .task-priority.high[_ngcontent-%COMP%] { background: #ffebee; color: #d32f2f; }\n\n    .task-progress[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #666;\n    }\n\n    .task-assignments[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 4px;\n      margin-bottom: 8px;\n    }\n\n    .employee-avatar[_ngcontent-%COMP%] {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      background: #1976d2;\n      color: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 11px;\n      font-weight: 600;\n      cursor: pointer;\n      transition: transform 0.2s;\n    }\n\n    .employee-avatar[_ngcontent-%COMP%]:hover {\n      transform: scale(1.1);\n    }\n\n    .employee-avatar.assignment-pending[_ngcontent-%COMP%] { background: #9e9e9e; }\n    .employee-avatar.assignment-in_progress[_ngcontent-%COMP%] { background: #f57c00; }\n    .employee-avatar.assignment-completed[_ngcontent-%COMP%] { background: #388e3c; }\n\n    .task-dependencies[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 4px;\n      font-size: 12px;\n      color: #666;\n    }\n\n    .timeline-bar-container[_ngcontent-%COMP%] {\n      flex: 1;\n      position: relative;\n      min-height: 40px;\n    }\n\n    .timeline-bar[_ngcontent-%COMP%] {\n      position: absolute;\n      height: 32px;\n      border-radius: 6px;\n      cursor: move;\n      transition: box-shadow 0.2s;\n      overflow: hidden;\n    }\n\n    .timeline-bar[_ngcontent-%COMP%]:hover {\n      box-shadow: 0 2px 8px rgba(0,0,0,0.2);\n    }\n\n    .timeline-bar.status-todo[_ngcontent-%COMP%] { background: #2196f3; }\n    .timeline-bar.status-in_progress[_ngcontent-%COMP%] { background: #ff9800; }\n    .timeline-bar.status-done[_ngcontent-%COMP%] { background: #4caf50; }\n    .timeline-bar.status-cancelled[_ngcontent-%COMP%] { background: #f44336; }\n    .timeline-bar.blocked[_ngcontent-%COMP%] { background: #ff9800; opacity: 0.6; }\n\n    .bar-progress[_ngcontent-%COMP%] {\n      height: 100%;\n      background: rgba(255,255,255,0.3);\n      transition: width 0.3s;\n    }\n\n    .bar-label[_ngcontent-%COMP%] {\n      position: absolute;\n      left: 8px;\n      top: 50%;\n      transform: translateY(-50%);\n      color: white;\n      font-size: 11px;\n      font-weight: 500;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: calc(100% - 16px);\n    }\n\n    .gantt-loading[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 48px;\n      color: #666;\n    }\n\n    .gantt-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin-top: 16px;\n    }\n\n    .gantt-legend[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 24px;\n      margin-top: 16px;\n      padding-top: 16px;\n      border-top: 1px solid #e0e0e0;\n    }\n\n    .legend-item[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 13px;\n      color: #666;\n    }\n\n    .legend-color[_ngcontent-%COMP%] {\n      width: 16px;\n      height: 16px;\n      border-radius: 4px;\n    }\n\n    .legend-color.status-todo[_ngcontent-%COMP%] { background: #2196f3; }\n    .legend-color.status-in_progress[_ngcontent-%COMP%] { background: #ff9800; }\n    .legend-color.status-done[_ngcontent-%COMP%] { background: #4caf50; }\n    .legend-color.blocked[_ngcontent-%COMP%] { background: #ff9800; opacity: 0.6; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL2VuaGFuY2VkLWdhbnR0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixxQ0FBcUM7SUFDdkM7O0lBRUE7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLGdDQUFnQztJQUNsQzs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGFBQWE7TUFDYixTQUFTO0lBQ1g7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixlQUFlO01BQ2YsV0FBVztJQUNiOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixTQUFTO01BQ1QsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsYUFBYTtNQUNiLFFBQVE7TUFDUixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0UsNEJBQTRCO0lBQzlCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxxQ0FBcUM7SUFDdkM7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGVBQWU7TUFDZixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxn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QjtNQUN2QixhQUFhO01BQ2IsV0FBVztJQUNiOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLFNBQVM7TUFDVCxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLDZCQUE2QjtJQUMvQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLGVBQWU7TUFDZixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjs7SUFFQSw0QkFBNEIsbUJBQW1CLEVBQUU7SUFDakQsbUNBQW1DLG1CQUFtQixFQUFFO0lBQ3hELDRCQUE0QixtQkFBbUIsRUFBRTtJQUNqRCx3QkFBd0IsbUJBQW1CLEVBQUUsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmVuaGFuY2VkLWdhbnR0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG5cbiAgICAuZ2FudHQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgfVxuXG4gICAgLmdhbnR0LXRpdGxlIGgyIHtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5nYW50dC1zdGF0cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zdGF0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5zdGF0LWl0ZW0gaSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmdhbnR0LWNvbnRyb2xzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC52aWV3LW1vZGVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuXG4gICAgLnZpZXctbW9kZS1idG4ge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIH1cblxuICAgIC52aWV3LW1vZGUtYnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgfVxuXG4gICAgLnZpZXctbW9kZS1idG4uYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cblxuICAgIC5yZWZyZXNoLWJ0biB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB9XG5cbiAgICAucmVmcmVzaC1idG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICB9XG5cbiAgICAuZ2FudHQtdGltZWxpbmUge1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICAudGltZWxpbmUtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgLnRhc2stY29sdW1uLWhlYWRlciB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cblxuICAgIC50aW1lbGluZS1kYXRlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtZGF0ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgfVxuXG4gICAgLmdhbnR0LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xuICAgIH1cblxuICAgIC5nYW50dC1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICB9XG5cbiAgICAuZ2FudHQtcm93OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgfVxuXG4gICAgLmdhbnR0LXJvdy5ibG9ja2VkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMDUpO1xuICAgIH1cblxuICAgIC50YXNrLWluZm8ge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgLnRhc2stdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC50YXNrLW1ldGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC50YXNrLXN0YXR1cywgLnRhc2stcHJpb3JpdHkge1xuICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgIC50YXNrLXN0YXR1cy50b2RvIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxOTc2ZDI7IH1cbiAgICAudGFzay1zdGF0dXMuaW5fcHJvZ3Jlc3MgeyBiYWNrZ3JvdW5kOiAjZmZmM2UwOyBjb2xvcjogI2Y1N2MwMDsgfVxuICAgIC50YXNrLXN0YXR1cy5kb25lIHsgYmFja2dyb3VuZDogI2U4ZjVlOTsgY29sb3I6ICMzODhlM2M7IH1cbiAgICAudGFzay1zdGF0dXMuY2FuY2VsbGVkIHsgYmFja2dyb3VuZDogI2ZmZWJlZTsgY29sb3I6ICNkMzJmMmY7IH1cblxuICAgIC50YXNrLXByaW9yaXR5LmxvdyB7IGJhY2tncm91bmQ6ICNlOGY1ZTk7IGNvbG9yOiAjMzg4ZTNjOyB9XG4gICAgLnRhc2stcHJpb3JpdHkubWVkaXVtIHsgYmFja2dyb3VuZDogI2ZmZjNlMDsgY29sb3I6ICNmNTdjMDA7IH1cbiAgICAudGFzay1wcmlvcml0eS5oaWdoIHsgYmFja2dyb3VuZDogI2ZmZWJlZTsgY29sb3I6ICNkMzJmMmY7IH1cblxuICAgIC50YXNrLXByb2dyZXNzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC50YXNrLWFzc2lnbm1lbnRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuZW1wbG95ZWUtYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogIzE5NzZkMjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgfVxuXG4gICAgLmVtcGxveWVlLWF2YXRhcjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuXG4gICAgLmVtcGxveWVlLWF2YXRhci5hc3NpZ25tZW50LXBlbmRpbmcgeyBiYWNrZ3JvdW5kOiAjOWU5ZTllOyB9XG4gICAgLmVtcGxveWVlLWF2YXRhci5hc3NpZ25tZW50LWluX3Byb2dyZXNzIHsgYmFja2dyb3VuZDogI2Y1N2MwMDsgfVxuICAgIC5lbXBsb3llZS1hdmF0YXIuYXNzaWdubWVudC1jb21wbGV0ZWQgeyBiYWNrZ3JvdW5kOiAjMzg4ZTNjOyB9XG5cbiAgICAudGFzay1kZXBlbmRlbmNpZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC50aW1lbGluZS1iYXItY29udGFpbmVyIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC50aW1lbGluZS1iYXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtYmFyOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWJhci5zdGF0dXMtdG9kbyB7IGJhY2tncm91bmQ6ICMyMTk2ZjM7IH1cbiAgICAudGltZWxpbmUtYmFyLnN0YXR1cy1pbl9wcm9ncmVzcyB7IGJhY2tncm91bmQ6ICNmZjk4MDA7IH1cbiAgICAudGltZWxpbmUtYmFyLnN0YXR1cy1kb25lIHsgYmFja2dyb3VuZDogIzRjYWY1MDsgfVxuICAgIC50aW1lbGluZS1iYXIuc3RhdHVzLWNhbmNlbGxlZCB7IGJhY2tncm91bmQ6ICNmNDQzMzY7IH1cbiAgICAudGltZWxpbmUtYmFyLmJsb2NrZWQgeyBiYWNrZ3JvdW5kOiAjZmY5ODAwOyBvcGFjaXR5OiAwLjY7IH1cblxuICAgIC5iYXItcHJvZ3Jlc3Mge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG5cbiAgICAuYmFyLWxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDhweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgIH1cblxuICAgIC5nYW50dC1sb2FkaW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDhweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5nYW50dC1sb2FkaW5nIHAge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAuZ2FudHQtbGVnZW5kIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDI0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICB9XG5cbiAgICAubGVnZW5kLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5sZWdlbmQtY29sb3Ige1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLmxlZ2VuZC1jb2xvci5zdGF0dXMtdG9kbyB7IGJhY2tncm91bmQ6ICMyMTk2ZjM7IH1cbiAgICAubGVnZW5kLWNvbG9yLnN0YXR1cy1pbl9wcm9ncmVzcyB7IGJhY2tncm91bmQ6ICNmZjk4MDA7IH1cbiAgICAubGVnZW5kLWNvbG9yLnN0YXR1cy1kb25lIHsgYmFja2dyb3VuZDogIzRjYWY1MDsgfVxuICAgIC5sZWdlbmQtY29sb3IuYmxvY2tlZCB7IGJhY2tncm91bmQ6ICNmZjk4MDA7IG9wYWNpdHk6IDAuNjsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5056:
/*!*******************************************************************!*\
  !*** ./src/app/components/manager/manager-dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagerDashboardComponent: () => (/* binding */ ManagerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/manager-auth.service */ 6250);
/* harmony import */ var _services_documents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/documents.service */ 9592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analytics.service */ 2210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _enhanced_gantt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enhanced-gantt.component */ 5775);
/* harmony import */ var _task_recommendation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-recommendation.component */ 2417);
/* harmony import */ var _project_simulator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-simulator.component */ 2580);










const _c0 = a0 => ({
  "background-color": a0
});
function ManagerDashboardComponent_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.badge);
  }
}
function ManagerDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_12_Template_div_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navigate(item_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManagerDashboardComponent_div_12_span_4_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.activeSection === item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bi ", item_r2.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r2.badge);
  }
}
function ManagerDashboardComponent_div_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.badge);
  }
}
function ManagerDashboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_15_Template_div_click_0_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navigate(item_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManagerDashboardComponent_div_15_span_4_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.activeSection === item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bi ", item_r5.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r5.badge);
  }
}
function ManagerDashboardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_18_Template_div_click_0_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navigate(item_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.activeSection === item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bi ", item_r7.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r7.label);
  }
}
function ManagerDashboardComponent_div_44_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_44_div_43_Template_div_click_0_listener() {
      const project_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewProject(project_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 67)(2, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 69)(5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 73)(13, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](project_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", project_r9.team, " membres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 7, project_r9.deadline, "dd MMM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", project_r9.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, ctx_r2.getStatusColor(project_r9.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", project_r9.progress, "%");
  }
}
function ManagerDashboardComponent_div_44_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Aucune t\u00E2che en attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Toutes les t\u00E2ches sont trait\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ManagerDashboardComponent_div_44_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79)(1, "div", 80)(2, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManagerDashboardComponent_div_44_div_52_Template_input_change_2_listener() {
      const task_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.toggleTaskSelection(task_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 83)(5, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 86)(10, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 92)(21, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 94)(24, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_44_div_52_Template_button_click_24_listener() {
      const task_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewTaskDetails(task_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_44_div_52_Template_button_click_26_listener() {
      const task_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.approveTask(task_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_44_div_52_Template_button_click_28_listener() {
      const task_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.rejectTask(task_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "task-", task_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "task-", task_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r11.assignee, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r11.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](19, 13, task_r11.submittedAt, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("priority-" + task_r11.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c0, ctx_r2.getPriorityColor(task_r11.priority)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r11.priority, " ");
  }
}
function ManagerDashboardComponent_div_44_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 101)(1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 104)(4, "h4", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 106)(7, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 109)(14, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "svg", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "circle", 112)(17, "circle", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const member_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "https://picsum.photos/seed/", member_r12.name, "/50/50", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", member_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](member_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", member_r12.completedTasks, " compl\u00E9t\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", member_r12.ongoingTasks, " en cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("stroke", ctx_r2.getEfficiencyColor(member_r12.efficiency))("stroke-dasharray", member_r12.efficiency * 1.57 + " 157");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", member_r12.efficiency, "%");
  }
}
function ManagerDashboardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "section", 35)(2, "div", 36)(3, "div", 37)(4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 40)(7, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Employ\u00E9s Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 37)(12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 40)(15, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Projets Actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 37)(20, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 40)(23, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "T\u00E2ches Compl\u00E9t\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 37)(28, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 40)(31, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "R\u00E9unions \u00E0 Venir");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "section", 49)(36, "div", 50)(37, "div", 51)(38, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Projets R\u00E9cents");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Voir tout");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ManagerDashboardComponent_div_44_div_43_Template, 17, 12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 56)(45, "div", 51)(46, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "T\u00E2ches en Attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, ManagerDashboardComponent_div_44_div_51_Template, 6, 0, "div", 59)(52, ManagerDashboardComponent_div_44_div_52_Template, 30, 18, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "section", 61)(54, "div", 62)(55, "div", 51)(56, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Performance de l'\u00C9quipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "select", 63)(59, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Cette semaine");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Ce mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Ce trimestre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, ManagerDashboardComponent_div_44_div_66_Template, 20, 9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalStats.totalEmployees);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalStats.activeProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalStats.completedTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalStats.pendingApprovals);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.recentProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.pendingTasks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.pendingTasks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.pendingTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.teamPerformance);
  }
}
function ManagerDashboardComponent_div_45_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 124)(1, "div", 125)(2, "h3", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 128)(7, "div", 73)(8, "div", 129)(9, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 69)(16, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 133)(26, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_45_div_26_Template_button_click_26_listener() {
      const project_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewProject(project_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Voir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_45_div_26_Template_button_click_29_listener() {
      const project_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editProject(project_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](project_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("status-" + project_r15.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", project_r15.status === "active" ? "Actif" : "En pause", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", project_r15.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", project_r15.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, ctx_r2.getStatusColor(project_r15.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", project_r15.team, " membres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 10, project_r15.deadline, "dd MMM yyyy"));
  }
}
function ManagerDashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 115)(2, "div", 116)(3, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_45_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openCreateProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Cr\u00E9er Projet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_45_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.testClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Test Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 120)(9, "select", 121)(10, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Tous les statuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Compl\u00E9t\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "En pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "select", 121)(19, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Toutes les \u00E9quipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u00C9quipe A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\u00C9quipe B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ManagerDashboardComponent_div_45_div_26_Template, 32, 15, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.recentProjects);
  }
}
function ManagerDashboardComponent_div_46_div_19_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tag_r19);
  }
}
function ManagerDashboardComponent_div_46_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dragstart", function ManagerDashboardComponent_div_46_div_19_Template_div_dragstart_0_listener($event) {
      const task_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragStart(task_r18, $event));
    })("dragend", function ManagerDashboardComponent_div_46_div_19_Template_div_dragend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 86)(7, "div", 150)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ManagerDashboardComponent_div_46_div_19_span_17_Template, 2, 1, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 94)(19, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_46_div_19_Template_button_click_19_listener() {
      const task_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editTask(task_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_46_div_19_Template_button_click_21_listener() {
      const task_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteTask(task_r18.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("priority-" + task_r18.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r18.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("avatar grad-", task_r18.avatarColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r18.assigneeInitials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r18.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r18.dueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", task_r18.tags);
  }
}
function ManagerDashboardComponent_div_46_div_27_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tag_r22);
  }
}
function ManagerDashboardComponent_div_46_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dragstart", function ManagerDashboardComponent_div_46_div_27_Template_div_dragstart_0_listener($event) {
      const task_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragStart(task_r21, $event));
    })("dragend", function ManagerDashboardComponent_div_46_div_27_Template_div_dragend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 158)(7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 86)(12, "div", 150)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ManagerDashboardComponent_div_46_div_27_span_22_Template, 2, 1, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("priority-" + task_r21.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r21.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", task_r21.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", task_r21.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("avatar grad-", task_r21.avatarColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r21.assigneeInitials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r21.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r21.dueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", task_r21.tags);
  }
}
function ManagerDashboardComponent_div_46_div_35_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tag_r25);
  }
}
function ManagerDashboardComponent_div_46_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dragstart", function ManagerDashboardComponent_div_46_div_35_Template_div_dragstart_0_listener($event) {
      const task_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragStart(task_r24, $event));
    })("dragend", function ManagerDashboardComponent_div_46_div_35_Template_div_dragend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 86)(7, "div", 150)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ManagerDashboardComponent_div_46_div_35_span_17_Template, 2, 1, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("priority-" + task_r24.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r24.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("avatar grad-", task_r24.avatarColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r24.assigneeInitials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r24.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r24.completedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", task_r24.tags);
  }
}
function ManagerDashboardComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 136)(2, "div", 116)(3, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_46_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openCreateTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Nouvelle T\u00E2che ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 137)(7, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 141)(12, "div", 142)(13, "div", 143)(14, "h3", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "To Do");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dragover", function ManagerDashboardComponent_div_46_Template_div_dragover_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragOver($event));
    })("drop", function ManagerDashboardComponent_div_46_Template_div_drop_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDrop($event, "todo"));
    })("dragenter", function ManagerDashboardComponent_div_46_Template_div_dragenter_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragEnter($event));
    })("dragleave", function ManagerDashboardComponent_div_46_Template_div_dragleave_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ManagerDashboardComponent_div_46_div_19_Template, 23, 11, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 142)(21, "div", 143)(22, "h3", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dragover", function ManagerDashboardComponent_div_46_Template_div_dragover_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragOver($event));
    })("drop", function ManagerDashboardComponent_div_46_Template_div_drop_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDrop($event, "in_progress"));
    })("dragenter", function ManagerDashboardComponent_div_46_Template_div_dragenter_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragEnter($event));
    })("dragleave", function ManagerDashboardComponent_div_46_Template_div_dragleave_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ManagerDashboardComponent_div_46_div_27_Template, 23, 14, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 142)(29, "div", 143)(30, "h3", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dragover", function ManagerDashboardComponent_div_46_Template_div_dragover_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragOver($event));
    })("drop", function ManagerDashboardComponent_div_46_Template_div_drop_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDrop($event, "done"));
    })("dragenter", function ManagerDashboardComponent_div_46_Template_div_dragenter_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragEnter($event));
    })("dragleave", function ManagerDashboardComponent_div_46_Template_div_dragleave_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ManagerDashboardComponent_div_46_div_35_Template, 18, 11, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.todoTasks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.todoTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.inProgressTasks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.inProgressTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.doneTasks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.doneTasks);
  }
}
function ManagerDashboardComponent_div_47_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", project_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](project_r27.name);
  }
}
function ManagerDashboardComponent_div_47_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-enhanced-gantt", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("projectId", ctx_r2.selectedProjectForAnalytics)("projectName", ctx_r2.getGanttProjectName());
  }
}
function ManagerDashboardComponent_div_47_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "S\u00E9lectionnez un projet pour voir son diagramme de Gantt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ManagerDashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 162)(2, "h2", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Diagramme de Gantt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 164)(5, "select", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_47_Template_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.selectedProjectForAnalytics, $event) || (ctx_r2.selectedProjectForAnalytics = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManagerDashboardComponent_div_47_Template_select_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.loadAnalytics(ctx_r2.selectedProjectForAnalytics));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Tous les projets");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ManagerDashboardComponent_div_47_option_8_Template, 2, 2, "option", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ManagerDashboardComponent_div_47_div_9_Template, 2, 2, "div", 168)(10, ManagerDashboardComponent_div_47_div_10_Template, 4, 0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedProjectForAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.recentProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedProjectForAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.selectedProjectForAnalytics);
  }
}
function ManagerDashboardComponent_div_48_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", project_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](project_r29.name);
  }
}
function ManagerDashboardComponent_div_48_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 180)(1, "div", 181)(2, "div", 182)(3, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 185)(6, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Projets Totaux");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 182)(11, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 185)(14, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "T\u00E2ches Termin\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 182)(19, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 185)(22, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "T\u00E2ches en Retard");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 182)(27, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 185)(30, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Heures Travaill\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getGlobalTotalProjects());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getGlobalCompletedTasks());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getGlobalDelayedTasks());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.getGlobalActualHours().toFixed(1), "h");
  }
}
function ManagerDashboardComponent_div_48_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 180)(1, "div", 181)(2, "div", 182)(3, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 185)(6, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "T\u00E2ches Totales");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 182)(11, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 185)(14, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Compl\u00E9tion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 182)(19, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 185)(22, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Heures Estim\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 182)(27, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 185)(30, "h3", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Employ\u00E9s Assign\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getProjectTotalTasks());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.getProjectCompletionPercentage(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.getProjectEstimatedHours(), "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getWorkloadDistributionLength());
  }
}
function ManagerDashboardComponent_div_48_div_9_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 199)(1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 201)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const employee_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](employee_r30.employee_initials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](employee_r30.employee_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", employee_r30.assigned_tasks, " t\u00E2ches assign\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", (tmp_8_0 = employee_r30.avg_progress) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 0, "%");
  }
}
function ManagerDashboardComponent_div_48_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 195)(1, "h3", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Distribution de la Charge de Travail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManagerDashboardComponent_div_48_div_9_div_3_div_4_Template, 10, 5, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.analyticsData.workloadDistribution);
  }
}
function ManagerDashboardComponent_div_48_div_9_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 204)(1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 207)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r31.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r31.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](task_r31.is_blocked ? "Bloqu\u00E9e" : "En retard");
  }
}
function ManagerDashboardComponent_div_48_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 195)(1, "h3", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "T\u00E2ches Requ\u00E9rant une Attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManagerDashboardComponent_div_48_div_9_div_4_div_4_Template, 10, 3, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.analyticsData.attentionTasks);
  }
}
function ManagerDashboardComponent_div_48_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerDashboardComponent_div_48_div_9_div_1_Template, 34, 4, "div", 178)(2, ManagerDashboardComponent_div_48_div_9_div_2_Template, 34, 4, "div", 178)(3, ManagerDashboardComponent_div_48_div_9_div_3_Template, 5, 1, "div", 179)(4, ManagerDashboardComponent_div_48_div_9_div_4_Template, 5, 1, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.selectedProjectForAnalytics && ctx_r2.analyticsData.globalStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedProjectForAnalytics && ctx_r2.analyticsData.projectStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.analyticsData.workloadDistribution && ctx_r2.analyticsData.workloadDistribution.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.analyticsData.attentionTasks && ctx_r2.analyticsData.attentionTasks.length > 0);
  }
}
function ManagerDashboardComponent_div_48_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Chargement des analytics...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ManagerDashboardComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 173)(2, "h2", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Analytics & KPIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 174)(5, "select", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_48_Template_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.selectedProjectForAnalytics, $event) || (ctx_r2.selectedProjectForAnalytics = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManagerDashboardComponent_div_48_Template_select_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.loadAnalytics(ctx_r2.selectedProjectForAnalytics));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Vue Globale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ManagerDashboardComponent_div_48_option_8_Template, 2, 2, "option", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ManagerDashboardComponent_div_48_div_9_Template, 5, 4, "div", 175)(10, ManagerDashboardComponent_div_48_div_10_Template, 4, 0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedProjectForAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.recentProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.analyticsData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.analyticsData);
  }
}
function ManagerDashboardComponent_div_49_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 226)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 12)(6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td")(11, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td")(15, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td")(23, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td")(26, "div", 232)(27, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_49_tr_69_Template_button_click_27_listener() {
      const user_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editUser(user_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_49_tr_69_Template_button_click_31_listener() {
      const user_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteUser(user_r34.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r34 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("avatar grad-", user_r34.avatarColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r34.initials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("ID: ", user_r34.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("role-" + user_r34.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.getRoleIcon(user_r34.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r34.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("href", "mailto:", user_r34.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r34.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r34.phone || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](21, 18, user_r34.createdAt, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](user_r34.active ? "status-active" : "status-inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r34.active ? "Actif" : "Inactif", " ");
  }
}
function ManagerDashboardComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 211)(2, "div", 116)(3, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_49_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openCreateUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Ajouter un utilisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "select", 121)(9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Tous les r\u00F4les");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 214)(18, "div", 215)(19, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 217)(22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Total Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 215)(27, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 217)(30, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Managers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 215)(35, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 217)(38, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Employ\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 215)(43, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 217)(46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 223)(51, "table", 224)(52, "thead")(53, "tr")(54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Date de cr\u00E9ation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, ManagerDashboardComponent_div_49_tr_69_Template, 33, 21, "tr", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.allUsers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.managersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.employeesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.adminsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.allUsers);
  }
}
function ManagerDashboardComponent_div_50_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](day_r36);
  }
}
function ManagerDashboardComponent_div_50_div_23_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 263);
  }
  if (rf & 2) {
    const meeting_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, meeting_r39.color))("title", meeting_r39.title + " - " + meeting_r39.time);
  }
}
function ManagerDashboardComponent_div_50_div_23_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "+" + (day_r38.meetings.length - 4) + " r\u00E9union(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" +", day_r38.meetings.length - 4, " ");
  }
}
function ManagerDashboardComponent_div_50_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerDashboardComponent_div_50_div_23_div_3_div_1_Template, 1, 4, "div", 261)(2, ManagerDashboardComponent_div_50_div_23_div_3_span_2_Template, 2, 2, "span", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", day_r38.meetings.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", day_r38.meetings.length > 4);
  }
}
function ManagerDashboardComponent_div_50_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", day_r38.meetings.length, " ");
  }
}
function ManagerDashboardComponent_div_50_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_div_23_Template_div_click_0_listener() {
      const day_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](day_r38.hasMeeting ? ctx_r2.showDayMeetingsModalFunc(day_r38) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManagerDashboardComponent_div_50_div_23_div_3_Template, 3, 2, "div", 258)(4, ManagerDashboardComponent_div_50_div_23_div_4_Template, 2, 1, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r38 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("today", day_r38.isToday)("has-meeting", day_r38.hasMeeting)("clickable", day_r38.hasMeeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", day_r38.meetings.length > 0 ? ctx_r2.getDayMeetingsTooltip(day_r38) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](day_r38.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", day_r38.meetings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", day_r38.meetings.length > 0);
  }
}
function ManagerDashboardComponent_div_50_div_28_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, participant_r41.color))("title", participant_r41.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](participant_r41.initials);
  }
}
function ManagerDashboardComponent_div_50_div_28_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meeting_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" +", ctx_r2.getMeetingParticipants(meeting_r42).length - 3, " ");
  }
}
function ManagerDashboardComponent_div_50_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 266)(1, "div", 267)(2, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 270)(8, "h4", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 272)(11, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 275)(18, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ManagerDashboardComponent_div_50_div_28_div_19_Template, 2, 5, "div", 277)(20, ManagerDashboardComponent_div_50_div_28_span_20_Template, 2, 1, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 280)(24, "button", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_div_28_Template_button_click_24_listener() {
      const meeting_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewMeeting(meeting_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_div_28_Template_button_click_26_listener() {
      const meeting_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editMeeting(meeting_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_div_28_Template_button_click_28_listener() {
      const meeting_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteMeeting(meeting_r42.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meeting_r42 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("meeting-" + meeting_r42.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 11, meeting_r42.date, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](meeting_r42.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](meeting_r42.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", meeting_r42.location === "Visioconf\u00E9rence" ? "bi-camera-video" : "bi-geo-alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", meeting_r42.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 14, meeting_r42.date, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.getMeetingParticipants(meeting_r42).slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.getMeetingParticipants(meeting_r42).length > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", meeting_r42.participants, " participants");
  }
}
function ManagerDashboardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 238)(2, "div", 116)(3, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openCreateMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Nouvelle R\u00E9union ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 137)(7, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 241)(12, "div", 242)(13, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.previousMonth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h3", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.nextMonth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_50_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.goToCurrentMonth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ManagerDashboardComponent_div_50_div_22_Template, 2, 1, "div", 250)(23, ManagerDashboardComponent_div_50_div_23_Template, 5, 10, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 252)(25, "h3", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "R\u00E9unions \u00E0 venir");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ManagerDashboardComponent_div_50_div_28_Template, 30, 17, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.calendarMonth, " ", ctx_r2.calendarYear, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.weekDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.calendarDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.upcomingMeetings);
  }
}
function ManagerDashboardComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-task-recommendation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-project-simulator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_53_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td")(7, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 289)(18, "div", 294)(19, "button", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_53_tr_25_Template_button_click_19_listener() {
      const doc_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.documentsService.downloadDocument(doc_r45.file_path));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_53_tr_25_Template_button_click_21_listener() {
      const doc_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteDocument(doc_r45.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const doc_r45 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.getFileIcon(doc_r45.file_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](doc_r45.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](doc_r45.employee_name || "Tous");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](doc_r45.file_type ? (doc_r45.file_type.split("/")[1] || doc_r45.file_type).toUpperCase() : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", doc_r45.file_size, " MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 6, doc_r45.created_at, "dd/MM/yyyy"));
  }
}
function ManagerDashboardComponent_div_53_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 296)(2, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Aucun document trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function ManagerDashboardComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 284)(2, "div", 116)(3, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_53_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openAddDocumentModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Ajouter un document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 120)(7, "input", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_53_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.searchTerm, $event) || (ctx_r2.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 287)(9, "table", 288)(10, "thead")(11, "tr")(12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Taille");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ManagerDashboardComponent_div_53_tr_25_Template, 23, 9, "tr", 225)(26, ManagerDashboardComponent_div_53_tr_26_Template, 6, 0, "tr", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.getFilteredDocuments());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.getFilteredDocuments().length === 0);
  }
}
function ManagerDashboardComponent_div_54_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", user_r47.prenom + " " + user_r47.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" \u00C9quipe de ", user_r47.prenom, " ", user_r47.nom, " ");
  }
}
function ManagerDashboardComponent_div_54_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cr\u00E9er le projet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_54_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cr\u00E9ation en cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_54_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_54_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cr\u00E9er un nouveau projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_54_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 305)(8, "div", 306)(9, "label", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Nom du projet *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_54_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newProject.name, $event) || (ctx_r2.newProject.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 306)(13, "label", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "textarea", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_54_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newProject.description, $event) || (ctx_r2.newProject.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 311)(17, "div", 306)(18, "label", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u00C9quipe assign\u00E9e *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_54_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newProject.team, $event) || (ctx_r2.newProject.team = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "S\u00E9lectionner une \u00E9quipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ManagerDashboardComponent_div_54_option_23_Template, 2, 3, "option", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 306)(25, "label", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Priorit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "select", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_54_Template_select_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newProject.priority, $event) || (ctx_r2.newProject.priority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "option", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Basse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Haute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 311)(35, "div", 306)(36, "label", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Date de d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "input", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_54_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newProject.startDate, $event) || (ctx_r2.newProject.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 306)(40, "label", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Date de fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "input", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_54_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newProject.endDate, $event) || (ctx_r2.newProject.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 306)(44, "label", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Budget (\u00E2\u00E2\u20AC\u0161\u00C2\u00AC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "input", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_54_Template_input_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newProject.budget, $event) || (ctx_r2.newProject.budget = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 327)(48, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_54_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_54_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.createProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, ManagerDashboardComponent_div_54_span_51_Template, 3, 0, "span", 168)(52, ManagerDashboardComponent_div_54_span_52_Template, 3, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newProject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newProject.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newProject.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.allUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newProject.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newProject.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newProject.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newProject.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.isCreateProjectDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_55_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeViewProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_55_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "D\u00E9tails du projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_55_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeViewProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 305)(8, "div", 333)(9, "div", 334)(10, "h3", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 336)(15, "div", 337)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 338)(21, "div", 337)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\u00C9quipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 337)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 339)(30, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 338)(35, "div", 337)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Date de d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 337)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Date de fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 338)(48, "div", 337)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Priorit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "span", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 337)(54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 337)(59, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Date limite");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 341)(65, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_55_Template_button_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeViewProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "button", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_55_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editProject(ctx_r2.selectedProject));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "status-" + (ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.getStatusLabel(ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.description) || "Aucune description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.startDate) ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](40, 14, ctx_r2.selectedProject.startDate, "dd MMM yyyy") : "Non d\u00E9finie");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.endDate) ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](46, 17, ctx_r2.selectedProject.endDate, "dd MMM yyyy") : "Non d\u00E9finie");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "priority-" + (ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.getPriorityLabel(ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.priority), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.budget) ? ctx_r2.selectedProject.budget + " \u00E2\u00E2\u20AC\u0161\u00C2\u00AC" : "Non d\u00E9fini");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.deadline) ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](63, 20, ctx_r2.selectedProject.deadline, "dd MMM yyyy") : "Non d\u00E9finie");
  }
}
function ManagerDashboardComponent_div_56_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Mettre \u00E0 jour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_56_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Mise \u00E0 jour... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_56_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_56_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Modifier le projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_56_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_56_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.updateProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 306)(9, "label", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Nom du projet *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_56_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.projectToEdit.name, $event) || (ctx_r2.projectToEdit.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 306)(13, "label", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "textarea", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_56_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.projectToEdit.description, $event) || (ctx_r2.projectToEdit.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 311)(17, "div", 306)(18, "label", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u00C9quipe assign\u00E9e *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_56_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.projectToEdit.team, $event) || (ctx_r2.projectToEdit.team = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "S\u00E9lectionner une \u00E9quipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\u00C9quipe A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u00C9quipe B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\u00C9quipe C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 306)(30, "label", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Priorit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "select", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_56_Template_select_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.projectToEdit.priority, $event) || (ctx_r2.projectToEdit.priority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "option", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Basse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "option", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "option", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Haute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 311)(40, "div", 306)(41, "label", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Date de d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "input", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_56_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.projectToEdit.startDate, $event) || (ctx_r2.projectToEdit.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 306)(45, "label", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Date de fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "input", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_56_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.projectToEdit.endDate, $event) || (ctx_r2.projectToEdit.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 306)(49, "label", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Budget (\u00E2\u00E2\u20AC\u0161\u00C2\u00AC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "input", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_56_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.projectToEdit.budget, $event) || (ctx_r2.projectToEdit.budget = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 327)(53, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_56_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditProjectModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, ManagerDashboardComponent_div_56_span_56_Template, 3, 0, "span", 168)(57, ManagerDashboardComponent_div_56_span_57_Template, 3, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.projectToEdit.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.projectToEdit.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.projectToEdit.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.projectToEdit.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.projectToEdit.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.projectToEdit.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.projectToEdit.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_57_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cr\u00E9er l'utilisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_57_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cr\u00E9ation en cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_57_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_57_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cr\u00E9er un nouvel utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_57_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_57_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 311)(9, "div", 306)(10, "label", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Nom *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_57_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newUser.nom, $event) || (ctx_r2.newUser.nom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 306)(14, "label", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Pr\u00E9nom *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_57_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newUser.prenom, $event) || (ctx_r2.newUser.prenom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 306)(18, "label", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_57_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newUser.email, $event) || (ctx_r2.newUser.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 306)(22, "label", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Mot de passe *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "input", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_57_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newUser.password, $event) || (ctx_r2.newUser.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 311)(26, "div", 306)(27, "label", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "R\u00F4le *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "select", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_57_Template_select_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newUser.role, $event) || (ctx_r2.newUser.role = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "S\u00E9lectionner un r\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "option", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "option", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 306)(39, "label", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "input", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_57_Template_input_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newUser.telephone, $event) || (ctx_r2.newUser.telephone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 327)(43, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_57_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ManagerDashboardComponent_div_57_span_46_Template, 3, 0, "span", 168)(47, ManagerDashboardComponent_div_57_span_47_Template, 3, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newUser.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newUser.prenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newUser.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newUser.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newUser.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_58_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Mettre \u00E0 jour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_58_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Mise \u00E0 jour... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_58_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_58_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Modifier l'utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_58_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_58_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitUserEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 311)(9, "div", 306)(10, "label", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Nom *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_58_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.userToEdit.nom, $event) || (ctx_r2.userToEdit.nom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 306)(14, "label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Pr\u00E9nom *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_58_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.userToEdit.prenom, $event) || (ctx_r2.userToEdit.prenom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 306)(18, "label", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_58_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.userToEdit.email, $event) || (ctx_r2.userToEdit.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 311)(22, "div", 306)(23, "label", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "R\u00F4le *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "select", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_58_Template_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.userToEdit.role, $event) || (ctx_r2.userToEdit.role = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "S\u00E9lectionner un r\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "option", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 306)(35, "label", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "input", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_58_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.userToEdit.telephone, $event) || (ctx_r2.userToEdit.telephone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 327)(39, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_58_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ManagerDashboardComponent_div_58_span_42_Template, 3, 0, "span", 168)(43, ManagerDashboardComponent_div_58_span_43_Template, 3, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userToEdit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userToEdit.prenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userToEdit.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userToEdit.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userToEdit.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_59_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", user_r53.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", user_r53.prenom, " ", user_r53.nom, " ");
  }
}
function ManagerDashboardComponent_div_59_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", project_r54.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", project_r54.name, " ");
  }
}
function ManagerDashboardComponent_div_59_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cr\u00E9er la t\u00E2che");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_59_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cr\u00E9ation...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_59_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_59_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Nouvelle T\u00E2che");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_59_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_59_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitTask());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 306)(9, "label", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Titre de la t\u00E2che *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_59_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newTask.title, $event) || (ctx_r2.newTask.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 306)(13, "label", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "textarea", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_59_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newTask.description, $event) || (ctx_r2.newTask.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 311)(17, "div", 306)(18, "label", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Priorit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_59_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newTask.priority, $event) || (ctx_r2.newTask.priority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Basse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Haute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 306)(28, "label", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Assign\u00E9 \u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "select", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_59_Template_select_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newTask.assignee_id, $event) || (ctx_r2.newTask.assignee_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ManagerDashboardComponent_div_59_option_33_Template, 2, 3, "option", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 311)(35, "div", 306)(36, "label", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "select", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_59_Template_select_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newTask.project_id, $event) || (ctx_r2.newTask.project_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ManagerDashboardComponent_div_59_option_41_Template, 2, 2, "option", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 306)(43, "label", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Date d'\u00E9ch\u00E9ance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "input", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_59_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newTask.due_date, $event) || (ctx_r2.newTask.due_date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 306)(47, "label", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Heures estim\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_59_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newTask.estimated_hours, $event) || (ctx_r2.newTask.estimated_hours = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 327)(51, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_59_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ManagerDashboardComponent_div_59_span_54_Template, 2, 0, "span", 168)(55, ManagerDashboardComponent_div_59_span_55_Template, 2, 0, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newTask.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newTask.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newTask.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newTask.assignee_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.allUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newTask.project_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.recentProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newTask.due_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newTask.estimated_hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_60_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mettre \u00E0 jour");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_60_span_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mise \u00E0 jour...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_60_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_60_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Modifier la T\u00E2che");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_60_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_60_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitTaskEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 306)(9, "label", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Titre de la t\u00E2che *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_60_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.taskToEdit.title, $event) || (ctx_r2.taskToEdit.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 306)(13, "label", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "textarea", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_60_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.taskToEdit.description, $event) || (ctx_r2.taskToEdit.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 311)(17, "div", 306)(18, "label", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Priorit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_60_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.taskToEdit.priority, $event) || (ctx_r2.taskToEdit.priority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Basse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Haute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 306)(28, "label", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Assign\u00E9 \u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "select", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_60_Template_select_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.taskToEdit.assignee_id, $event) || (ctx_r2.taskToEdit.assignee_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "option", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Jean Dupont");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "option", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Marie Martin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "option", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Pierre Bernard");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 311)(40, "div", 306)(41, "label", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "select", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_60_Template_select_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.taskToEdit.project_id, $event) || (ctx_r2.taskToEdit.project_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "option", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Formation Angular Avanc\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "option", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Migration Cloud Infrastructure");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "option", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "E-learning Platform V2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 306)(53, "label", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Date d'\u00E9ch\u00E9ance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "input", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_60_Template_input_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.taskToEdit.due_date, $event) || (ctx_r2.taskToEdit.due_date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 306)(57, "label", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Heures estim\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "input", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_60_Template_input_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.taskToEdit.estimated_hours, $event) || (ctx_r2.taskToEdit.estimated_hours = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 327)(61, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_60_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, ManagerDashboardComponent_div_60_span_64_Template, 2, 0, "span", 168)(65, ManagerDashboardComponent_div_60_span_65_Template, 2, 0, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.taskToEdit.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.taskToEdit.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.taskToEdit.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.taskToEdit.assignee_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.taskToEdit.project_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.taskToEdit.due_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.taskToEdit.estimated_hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_61_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 424)(1, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 270)(6, "h4", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 426)(9, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 280)(15, "button", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_61_div_8_div_1_Template_button_click_15_listener() {
      const meeting_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewMeetingFromDay(meeting_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_61_div_8_div_1_Template_button_click_17_listener() {
      const meeting_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editMeetingFromDay(meeting_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meeting_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("meeting-" + meeting_r58.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](meeting_r58.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](meeting_r58.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", meeting_r58.location === "Visioconf\u00E9rence" ? "bi-camera-video" : "bi-geo-alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", meeting_r58.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](meeting_r58.duration);
  }
}
function ManagerDashboardComponent_div_61_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 422);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerDashboardComponent_div_61_div_8_div_1_Template, 19, 7, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.selectedDayMeetings);
  }
}
function ManagerDashboardComponent_div_61_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 428);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Aucune r\u00E9union ce jour");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Cliquez sur \"Nouvelle R\u00E9union\" pour en cr\u00E9er une.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ManagerDashboardComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_61_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeDayMeetingsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 418);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_61_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.stopPropagation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_61_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeDayMeetingsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ManagerDashboardComponent_div_61_div_8_Template, 2, 1, "div", 419)(9, ManagerDashboardComponent_div_61_div_9_Template, 6, 0, "div", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 421)(11, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_61_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeDayMeetingsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_61_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openCreateMeetingModalForDay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Cr\u00E9er une r\u00E9union ce jour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" R\u00E9unions du ", ctx_r2.selectedDay == null ? null : ctx_r2.selectedDay.number, " ", ctx_r2.calendarMonth, " ", ctx_r2.calendarYear, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedDayMeetings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.selectedDayMeetings.length);
  }
}
function ManagerDashboardComponent_div_62_div_52_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManagerDashboardComponent_div_62_div_52_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const employee_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.updateSelectedEmployees(employee_r61.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "employee-", employee_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("name", "employee-", employee_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", employee_r61.id)("checked", ctx_r2.newMeeting.selectedEmployees && ctx_r2.newMeeting.selectedEmployees.includes(employee_r61.id));
  }
}
function ManagerDashboardComponent_div_62_div_52_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 459)(1, "div", 460);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 201)(4, "div", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const employee_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "employee-", employee_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, ctx_r2.getAvatarColor(employee_r61.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employee_r61.initials, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](employee_r61.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](employee_r61.email);
  }
}
function ManagerDashboardComponent_div_62_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 455);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerDashboardComponent_div_62_div_52_input_1_Template, 1, 6, "input", 456)(2, ManagerDashboardComponent_div_62_div_52_label_2_Template, 8, 8, "label", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", employee_r61.role === "employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", employee_r61.role === "employee");
  }
}
function ManagerDashboardComponent_div_62_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cr\u00E9er la r\u00E9union");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_62_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cr\u00E9ation...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_62_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_62_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.stopPropagation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cr\u00E9er une nouvelle r\u00E9union");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_62_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_62_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.createMeeting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 306)(9, "label", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Titre de la r\u00E9union *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 431);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_62_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newMeeting.title, $event) || (ctx_r2.newMeeting.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 311)(13, "div", 306)(14, "label", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 433);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_62_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newMeeting.date, $event) || (ctx_r2.newMeeting.date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 306)(18, "label", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Dur\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_62_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newMeeting.duration, $event) || (ctx_r2.newMeeting.duration = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "1 heure");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "1h30");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 439);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "2 heures");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "3 heures");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 311)(32, "div", 306)(33, "label", 441);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Lieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "input", 442);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_62_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newMeeting.location, $event) || (ctx_r2.newMeeting.location = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 306)(37, "label", 443);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "select", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_62_Template_select_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newMeeting.type, $event) || (ctx_r2.newMeeting.type = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "option", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\u00C9quipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "option", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Technique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "option", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Revue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 306)(49, "label", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Employ\u00E9s concern\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, ManagerDashboardComponent_div_62_div_52_Template, 3, 2, "div", 451);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 452);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 306)(56, "label", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "textarea", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_62_Template_textarea_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newMeeting.notes, $event) || (ctx_r2.newMeeting.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 327)(60, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_62_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeCreateMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, ManagerDashboardComponent_div_62_span_63_Template, 2, 0, "span", 168)(64, ManagerDashboardComponent_div_62_span_64_Template, 2, 0, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newMeeting.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newMeeting.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newMeeting.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newMeeting.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newMeeting.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.allUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r2.newMeeting.selectedEmployees == null ? null : ctx_r2.newMeeting.selectedEmployees.length) || 0, " employ\u00E9(s) s\u00E9lectionn\u00E9(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newMeeting.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_63_div_7_div_30_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r63);
  }
}
function ManagerDashboardComponent_div_63_div_7_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 338)(1, "div", 466)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Ordre du jour");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ManagerDashboardComponent_div_63_div_7_div_30_li_5_Template, 2, 1, "li", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.selectedMeeting.agenda);
  }
}
function ManagerDashboardComponent_div_63_div_7_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 338)(1, "div", 466)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.selectedMeeting.notes);
  }
}
function ManagerDashboardComponent_div_63_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 305)(1, "div", 426)(2, "div", 334)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 464);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 338)(8, "div", 337)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 337)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Dur\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 338)(20, "div", 337)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Lieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 337)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ManagerDashboardComponent_div_63_div_7_div_30_Template, 6, 1, "div", 465)(31, ManagerDashboardComponent_div_63_div_7_div_31_Template, 6, 1, "div", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.selectedMeeting.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c0, ctx_r2.getMeetingTypeColor(ctx_r2.selectedMeeting.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.getMeetingTypeLabel(ctx_r2.selectedMeeting.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](13, 9, ctx_r2.selectedMeeting.date, "dd MMMM yyyy \u00E0 HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.selectedMeeting.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.selectedMeeting.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.selectedMeeting.participants, " personnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedMeeting.agenda && ctx_r2.selectedMeeting.agenda.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedMeeting.notes);
  }
}
function ManagerDashboardComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_63_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeViewMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_63_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.stopPropagation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "D\u00E9tails de la r\u00E9union");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_63_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeViewMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ManagerDashboardComponent_div_63_div_7_Template, 32, 14, "div", 463);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 421)(9, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_63_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeViewMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_63_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editMeeting(ctx_r2.selectedMeeting));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedMeeting);
  }
}
function ManagerDashboardComponent_div_64_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mettre \u00E0 jour");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_64_span_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mise \u00E0 jour...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_64_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_64_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.stopPropagation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Modifier la r\u00E9union");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_64_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_64_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.updateMeeting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 306)(9, "label", 467);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Titre de la r\u00E9union *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 468);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_64_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.meetingToEdit.title, $event) || (ctx_r2.meetingToEdit.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 311)(13, "div", 306)(14, "label", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_64_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.meetingToEdit.date, $event) || (ctx_r2.meetingToEdit.date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 306)(18, "label", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Dur\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 472);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_64_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.meetingToEdit.duration, $event) || (ctx_r2.meetingToEdit.duration = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "1 heure");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "1h30");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 439);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "2 heures");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "3 heures");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 311)(32, "div", 306)(33, "label", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Lieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "input", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_64_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.meetingToEdit.location, $event) || (ctx_r2.meetingToEdit.location = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 306)(37, "label", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "select", 476);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_64_Template_select_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.meetingToEdit.type, $event) || (ctx_r2.meetingToEdit.type = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "option", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\u00C9quipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "option", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Technique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "option", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Revue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 306)(49, "label", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Nombre de participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "input", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_64_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.meetingToEdit.participants, $event) || (ctx_r2.meetingToEdit.participants = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 306)(53, "label", 479);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "textarea", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_64_Template_textarea_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.meetingToEdit.notes, $event) || (ctx_r2.meetingToEdit.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 327)(57, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_64_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeEditMeetingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ManagerDashboardComponent_div_64_span_60_Template, 2, 0, "span", 168)(61, ManagerDashboardComponent_div_64_span_61_Template, 2, 0, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.meetingToEdit.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.meetingToEdit.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.meetingToEdit.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.meetingToEdit.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.meetingToEdit.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.meetingToEdit.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.meetingToEdit.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function ManagerDashboardComponent_div_65_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", user_r66.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", user_r66.prenom, " ", user_r66.nom, " ");
  }
}
function ManagerDashboardComponent_div_65_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 493);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.selectedFile.name, " (", (ctx_r2.selectedFile.size / 1024).toFixed(1), " KB)");
  }
}
function ManagerDashboardComponent_div_65_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 495);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cliquez pour choisir un fichier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ManagerDashboardComponent_div_65_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_65_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " T\u00E9l\u00E9chargement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerDashboardComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_65_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeAddDocumentModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_65_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 301)(3, "h2", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Ajouter un document");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_65_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeAddDocumentModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ManagerDashboardComponent_div_65_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 306)(9, "label", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Titre du document *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 482);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_65_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newDocData.title, $event) || (ctx_r2.newDocData.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 306)(13, "label", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "textarea", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_65_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newDocData.description, $event) || (ctx_r2.newDocData.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 306)(17, "label", 485);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Assigner \u00E0 l'employ\u00E9 *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "select", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ManagerDashboardComponent_div_65_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newDocData.employeeId, $event) || (ctx_r2.newDocData.employeeId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "S\u00E9lectionner un employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ManagerDashboardComponent_div_65_option_22_Template, 2, 3, "option", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 306)(24, "label", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Fichier * (PDF, DOC, PNG, JPG - Max 10MB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 488)(27, "input", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManagerDashboardComponent_div_65_Template_input_change_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ManagerDashboardComponent_div_65_div_28_Template, 4, 2, "div", 490)(29, ManagerDashboardComponent_div_65_div_29_Template, 4, 0, "div", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 327)(31, "button", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_div_65_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closeAddDocumentModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ManagerDashboardComponent_div_65_span_34_Template, 3, 0, "span", 168)(35, ManagerDashboardComponent_div_65_span_35_Template, 3, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newDocData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newDocData.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newDocData.employeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.getOnlyEmployees());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.isAddDocumentDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
class ManagerDashboardComponent {
  ngOnInit() {
    this.currentManager = this.managerAuthService.currentManagerValue;
    // Vérifier si le manager est connecté
    if (!this.currentManager) {
      this.router.navigate(['/manager-login']);
      return;
    }
    // S'abonner aux changements de manager
    this.managerAuthService.currentManager.subscribe(manager => {
      this.currentManager = manager;
      if (!manager) {
        this.router.navigate(['/manager-login']);
      }
    });
    // Charger les projets depuis la base de données
    this.loadProjectsFromDatabase();
    // Charger les tâches depuis la base de données
    this.loadTasksFromDatabase();
    // Charger les utilisateurs depuis la base de données
    this.loadUsersFromDatabase();
    // Charger les réunions depuis la base de données
    this.loadMeetingsFromDatabase();
    // Charger les documents
    this.loadDocuments();
    // Les données seront chargées depuis la base de données via les méthodes appelées ci-dessus
  }
  loadProjectsFromDatabase() {
    console.log('Début du chargement des projets depuis la base...');
    console.log('Manager connecté:', this.currentManager);
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les projets');
      return;
    }
    this.managerAuthService.getManagerProjects().subscribe({
      next: response => {
        console.log('Réponse complète du backend:', response);
        const projects = response.data || response; // Gérer les deux formats possibles
        console.log('Projets chargés depuis la base:', projects);
        console.log('Nombre de projets:', projects.length);
        // Transformer les projets pour l'affichage
        this.recentProjects = projects.map(project => ({
          id: project.id,
          name: project.name,
          description: project.description || '',
          progress: project.progress,
          team: this.getTeamSize(project.team),
          deadline: project.deadline,
          status: project.status,
          startDate: project.startDate,
          endDate: project.endDate,
          budget: project.budget,
          priority: project.priority
        }));
        // Mettre à jour les statistiques
        this.globalStats.activeProjects = this.recentProjects.length;
        console.log('Projets transformés pour affichage:', this.recentProjects);
        console.log('Statistiques mises à jour:', this.globalStats.activeProjects);
      },
      error: error => {
        console.error('Erreur lors du chargement des projets:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        console.error('Error body:', error.error);
        // En cas d'erreur, garder les données locales
        console.log('Fallback: utilisation des données locales');
        console.log('Projets locaux actuels:', this.recentProjects.length);
      }
    });
  }
  loadTasksFromDatabase() {
    console.log('Début du chargement des tâches depuis la base...');
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les tâches');
      return;
    }
    // Initialiser le tableau des tâches
    this.tasks = [];
    // Charger les tâches par statut pour le Kanban
    this.loadTasksByStatus('todo');
    this.loadTasksByStatus('in_progress');
    this.loadTasksByStatus('done');
    // Appeler calculateStats après un délai pour laisser le temps aux chargements asynchrones
    setTimeout(() => {
      console.log('Recalcul des statistiques après chargement des tâches...');
      this.calculateStats();
    }, 1000);
  }
  loadUsersFromDatabase() {
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les utilisateurs');
      return;
    }
    this.managerAuthService.getAllUsers().subscribe({
      next: response => {
        const users = response.data || response;
        // Transformer les utilisateurs pour l'affichage
        this.allUsers = users.map(user => ({
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          role: user.role,
          telephone: user.telephone,
          avatarColor: this.getAvatarColor(user.id),
          status: user.status || 'active',
          date_creation: user.date_creation || user.created_at,
          last_login: user.last_login,
          name: `${user.prenom} ${user.nom}`,
          initials: `${user.prenom[0]}${user.nom[0]}`,
          phone: user.telephone,
          createdAt: user.date_creation || user.created_at,
          active: (user.status || 'active') === 'active',
          completedTasks: Math.floor(Math.random() * 10),
          ongoingTasks: Math.floor(Math.random() * 5)
        }));
        // Mettre à jour les compteurs
        this.managersCount = this.allUsers.filter(u => u.role === 'manager').length;
        this.employeesCount = this.allUsers.filter(u => u.role === 'employee').length;
        this.adminsCount = this.allUsers.filter(u => u.role === 'admin').length;
        console.log('Utilisateurs transformés pour affichage:', this.allUsers);
      },
      error: error => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
        // En cas d'erreur, utiliser les données locales
        console.log('Fallback: utilisation des données locales');
      }
    });
  }
  getOnlyEmployees() {
    return this.allUsers.filter(user => user.role === 'employee');
  }
  loadMeetingsFromDatabase() {
    console.log('Début du chargement des réunions depuis la base...');
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les réunions');
      return;
    }
    this.managerAuthService.getMeetings().subscribe({
      next: response => {
        const meetings = response.data || response;
        console.log('Réunions chargées depuis la base:', meetings);
        // Transformer les réunions pour l'affichage
        this.meetings = meetings.map(meeting => ({
          id: meeting.id,
          title: meeting.title,
          date: meeting.date_time,
          duration: meeting.duration,
          location: meeting.location,
          participants: meeting.participants,
          type: meeting.type,
          agenda: meeting.agenda || [],
          status: meeting.status,
          notes: meeting.notes || '',
          color: meeting.type === 'team' ? '#10B981' : meeting.type === 'client' ? '#3B82F6' : meeting.type === 'technical' ? '#F59E0B' : '#8B5CF6'
        }));
        // Mettre à jour les réunions à venir
        this.upcomingMeetings = this.meetings.filter(m => m.status === 'upcoming' || m.status === 'scheduled');
        console.log('Réunions transformées pour affichage:', this.meetings);
        console.log('Réunions à venir:', this.upcomingMeetings);
        // Synchroniser le calendrier après le chargement
        this.syncCalendarWithMeetings();
        console.log('Calendrier synchronisé après chargement des réunions');
      },
      error: error => {
        console.error('Erreur lors du chargement des réunions:', error);
        console.log('Fallback: utilisation des données locales');
        // Conserver les données mockées en cas d'erreur
      }
    });
  }
  loadAnalytics(projectId) {
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les analytics');
      return;
    }
    if (projectId) {
      // Load project-specific analytics
      this.analyticsService.getProjectAnalytics(projectId).subscribe({
        next: response => {
          this.analyticsData = response.data;
          console.log('Analytics du projet chargées:', this.analyticsData);
        },
        error: error => {
          console.error('Erreur lors du chargement des analytics du projet:', error);
        }
      });
    } else {
      // Load manager-level analytics
      this.analyticsService.getManagerAnalytics(this.currentManager.id).subscribe({
        next: response => {
          this.analyticsData = response.data;
          console.log('Analytics globales chargées:', this.analyticsData);
        },
        error: error => {
          console.error('Erreur lors du chargement des analytics globales:', error);
        }
      });
    }
  }
  getGanttProjectName() {
    const id = this.selectedProjectForAnalytics;
    if (id == null) {
      return 'Project';
    }
    const project = this.recentProjects.find(p => p.id === id);
    return project?.name ?? 'Project';
  }
  getProjectStatusLabel(status) {
    const labels = {
      'active': 'Actif',
      'completed': 'Terminé',
      'paused': 'En pause',
      'cancelled': 'Annulé'
    };
    return labels[status] || status;
  }
  loadTasksByStatus(status) {
    this.managerAuthService.getTasksByStatus(status).subscribe({
      next: response => {
        const tasks = response.data || response;
        console.log(`Tâches ${status} chargées:`, tasks);
        if (tasks.length === 0) {
          console.log(`Aucune tâche ${status} trouvée dans la base de données`);
          // Laisser le tableau vide - pas de données mockées
          console.log(`Tableau ${status} laissé vide`);
          return;
        }
        // Transformer les tâches pour l'affichage
        const transformedTasks = tasks.map(task => {
          let assigneeName = 'Non assigné';
          if (task.assignee_id) {
            const user = this.allUsers.find(u => u.id === task.assignee_id);
            if (user) {
              assigneeName = `${user.prenom} ${user.nom}`;
            }
          }
          let parsedTags = [];
          try {
            if (task.tags) {
              parsedTags = typeof task.tags === 'string' ? JSON.parse(task.tags) : task.tags;
            }
          } catch (e) {
            console.error('Erreur parsing tags:', e);
          }
          return {
            id: task.id,
            title: task.title,
            description: task.description,
            priority: task.priority,
            status: task.status,
            assignee: assigneeName,
            assignee_id: task.assignee_id,
            assigneeInitials: assigneeName !== 'Non assigné' ? assigneeName.split(' ').map(n => n[0]).join('') : 'NA',
            avatarColor: this.getAvatarColor(task.id),
            dueDate: task.due_date || new Date().toISOString().split('T')[0],
            progress: task.progress || 0,
            tags: parsedTags,
            submittedAt: task.created_at || new Date().toISOString()
          };
        });
        // Mettre à jour le tableau de tâches principal
        if (!this.tasks) {
          this.tasks = [];
        }
        // Ajouter les nouvelles tâches ou mettre à jour les existantes
        transformedTasks.forEach(newTask => {
          const existingIndex = this.tasks.findIndex(t => t.id === newTask.id);
          if (existingIndex >= 0) {
            this.tasks[existingIndex] = newTask;
          } else {
            this.tasks.push(newTask);
          }
        });
        // Mettre à jour les tableaux spécifiques
        switch (status) {
          case 'todo':
            this.todoTasks = transformedTasks;
            break;
          case 'in_progress':
            this.inProgressTasks = transformedTasks;
            break;
          case 'done':
            this.doneTasks = transformedTasks;
            break;
        }
        console.log(`Tâches ${status} transformées:`, transformedTasks);
        console.log('Total des tâches après chargement:', this.tasks.length);
      },
      error: error => {
        console.error(`Erreur lors du chargement des tâches ${status}:`, error);
        // En cas d'erreur, laisser le tableau vide pour ne pas utiliser de données mockées
        console.log(`Aucune tâche ${status} chargée - tableau laissé vide`);
      }
    });
  }
  // La méthode loadMockTasksForStatus a été supprimée pour n'utiliser que des données réelles
  getAvatarColor(userId) {
    const colors = ['purple', 'teal', 'amber', 'rose', 'blue', 'green'];
    return colors[userId % colors.length];
  }
  constructor(managerAuthService, documentsService, router, analyticsService) {
    this.managerAuthService = managerAuthService;
    this.documentsService = documentsService;
    this.router = router;
    this.analyticsService = analyticsService;
    this.activeSection = 'dashboard';
    this.isScrolled = false;
    this.showCreateProjectModal = false;
    this.showViewProjectModal = false;
    this.showEditProjectModal = false;
    this.showCreateUserModal = false;
    this.showEditUserModal = false;
    this.selectedProject = null;
    this.projectToEdit = {
      name: '',
      description: '',
      team: '',
      priority: 'medium',
      startDate: '',
      endDate: '',
      budget: 0
    };
    // Propriétés pour les réunions
    this.showCreateMeetingModal = false;
    this.showViewMeetingModal = false;
    this.showEditMeetingModal = false;
    this.showDayMeetingsModal = false;
    this.selectedMeeting = null;
    this.selectedDay = null;
    this.selectedDayMeetings = [];
    this.meetingToEdit = {
      title: '',
      date: '',
      duration: '1h',
      location: 'Salle A',
      type: 'team',
      agenda: [],
      participants: [],
      selectedEmployees: [],
      notes: ''
    };
    this.newMeeting = {
      title: '',
      date: '',
      duration: '1h',
      location: 'Salle A',
      type: 'team',
      agenda: [],
      participants: [],
      selectedEmployees: [],
      notes: ''
    };
    // Propriétés pour les documents
    this.showAddDocumentModal = false;
    this.selectedFile = null;
    this.newDocData = {
      title: '',
      description: '',
      employeeId: null
    };
    this.searchTerm = '';
    // Propriétés pour la navigation du calendrier
    this.currentCalendarDate = new Date();
    this.calendarMonth = '';
    this.calendarYear = 0;
    this.currentManager = null;
    this.loading = false;
    // Formulaire de création de projet
    this.newProject = {
      name: '',
      description: '',
      team: '',
      priority: 'medium',
      startDate: '',
      endDate: '',
      budget: 0
    };
    // Données pour le dashboard - initialisées dynamiquement
    this.globalStats = {
      totalEmployees: 0,
      activeProjects: 0,
      completedTasks: 0,
      pendingApprovals: 0
    };
    this.recentProjects = [];
    // Les tâches seront chargées depuis la base de données
    this.baseTasks = [];
    // Les tableaux de tâches seront initialisés dynamiquement
    this.tasks = [];
    this.todoTasks = [];
    this.inProgressTasks = [];
    this.doneTasks = [];
    this.pendingTasks = [];
    // Les utilisateurs seront chargés depuis la base de données
    this.users = [];
    this.allUsers = [];
    this.managersCount = 0;
    this.employeesCount = 0;
    this.adminsCount = 0;
    // Les réunions seront chargées depuis la base de données
    this.meetings = [];
    this.upcomingMeetings = [];
    // Les documents seront chargés depuis la base de données
    this.documents = [];
    // Analytics data
    this.analyticsData = null;
    this.selectedProjectForAnalytics = null;
    this.timesheets = [{
      id: 1,
      user: 'Jean Dupont',
      date: '2024-03-23',
      entryTime: '09:00',
      exitTime: '18:00',
      totalHours: 8,
      tasks: [{
        task: 'Développement dashboard',
        duration: 4
      }, {
        task: 'Réunion équipe',
        duration: 1
      }, {
        task: 'Review code',
        duration: 1
      }, {
        task: 'Documentation',
        duration: 2
      }],
      status: 'validated',
      project: 'Dashboard Manager'
    }, {
      id: 2,
      user: 'Marie Martin',
      date: '2024-03-23',
      entryTime: '08:30',
      exitTime: '17:30',
      totalHours: 9,
      tasks: [{
        task: 'Formation Angular',
        duration: 3
      }, {
        task: 'API REST',
        duration: 3
      }, {
        task: 'Tests unitaires',
        duration: 2
      }, {
        task: 'Déploiement',
        duration: 1
      }],
      status: 'validated',
      project: 'Formation Angular Avancé'
    }, {
      id: 3,
      user: 'Pierre Bernard',
      date: '2024-03-23',
      entryTime: '09:00',
      exitTime: '19:00',
      totalHours: 10,
      tasks: [{
        task: 'Migration Cloud',
        duration: 6
      }, {
        task: 'Tests',
        duration: 2
      }, {
        task: 'Documentation',
        duration: 2
      }],
      status: 'validated',
      project: 'Migration Cloud Infrastructure'
    }];
    this.navItems = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'bi-speedometer2',
      group: 'principal',
      badge: null
    }, {
      id: 'projets',
      label: 'Projets',
      icon: 'bi-kanban',
      group: 'principal',
      badge: null
    }, {
      id: 'taches',
      label: 'Tâches',
      icon: 'bi-check2-square',
      group: 'principal',
      badge: '12'
    }, {
      id: 'gantt',
      label: 'Gantt',
      icon: 'bi-calendar3-range',
      group: 'principal',
      badge: null
    }, {
      id: 'utilisateurs',
      label: 'Utilisateurs',
      icon: 'bi-people',
      group: 'equipe',
      badge: null
    }, {
      id: 'reunions',
      label: 'Réunions',
      icon: 'bi-camera-video',
      group: 'equipe',
      badge: '3'
    }, {
      id: 'recommandations',
      label: 'Recommandations IA',
      icon: 'bi-cpu',
      group: 'equipe',
      badge: null
    }, {
      id: 'simulateur',
      label: 'Simulateur Projets',
      icon: 'bi-diagram-3',
      group: 'equipe',
      badge: null
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: 'bi-graph-up',
      group: 'principal',
      badge: null
    }, {
      id: 'documents',
      label: 'Documents',
      icon: 'bi-folder2-open',
      group: 'ressources',
      badge: null
    }];
    this.topbarTitles = {
      dashboard: {
        title: 'Dashboard',
        sub: 'Vue d\'ensemble'
      },
      projets: {
        title: 'Projets',
        sub: 'Gestion des projets'
      },
      taches: {
        title: 'Tâches',
        sub: 'Kanban — To Do / In Progress / Done'
      },
      gantt: {
        title: 'Gantt',
        sub: 'Planification des projets'
      },
      analytics: {
        title: 'Analytics',
        sub: 'KPIs et statistiques'
      },
      utilisateurs: {
        title: 'Utilisateurs',
        sub: 'Gestion des rôles & permissions'
      },
      reunions: {
        title: 'Réunions',
        sub: 'Planification & notes'
      },
      recommandations: {
        title: 'Recommandations IA',
        sub: 'IA d\'affectation de tâches'
      },
      simulateur: {
        title: 'Simulateur Projets',
        sub: 'Simulation de projets avec IA'
      },
      documents: {
        title: 'Documents',
        sub: 'Gestion des fichiers'
      }
    };
    // Méthodes pour le drag and drop
    this.draggedTask = null;
    this.draggedOverColumn = '';
    // Formulaire d'édition de tâche
    this.taskToEdit = {};
    this.showEditTaskModal = false;
    // Formulaire de création de tâche
    this.newTask = {
      title: '',
      description: '',
      priority: 'medium',
      assignee_id: null,
      project_id: null,
      due_date: '',
      estimated_hours: 0,
      tags: []
    };
    // Formulaire de création d'utilisateur
    this.newUser = {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      role: '',
      telephone: ''
    };
    // Formulaire d'édition d'utilisateur
    this.userToEdit = {};
    this.showCreateTaskModal = false;
    // Propriétés pour les statistiques
    this.totalHours = 0;
    this.avgHoursPerDay = 0;
    this.workedDays = 0;
    this.weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    this.calendarDays = [];
    // Propriétés pour la performance d'équipe
    this.teamPerformance = [];
    // Gestion de la sélection des tâches
    this.selectedTaskIds = [];
  }
  get currentTitle() {
    return this.topbarTitles[this.activeSection];
  }
  get principalItems() {
    return this.navItems.filter(n => n.group === 'principal');
  }
  get equipeItems() {
    return this.navItems.filter(n => n.group === 'equipe');
  }
  get ressourcesItems() {
    return this.navItems.filter(n => n.group === 'ressources');
  }
  navigate(id) {
    this.activeSection = id;
    // Load analytics when navigating to analytics section
    if (id === 'analytics') {
      this.loadAnalytics();
    }
  }
  // Helper methods for template validation
  isCreateProjectDisabled() {
    return this.loading || !this.newProject.name || !this.newProject.team;
  }
  isAddDocumentDisabled() {
    return this.loading || !this.newDocData.title || !this.selectedFile || !this.newDocData.employeeId;
  }
  // Helper methods for analytics data
  getGlobalTotalProjects() {
    return this.analyticsData?.globalStats?.totalProjects ?? 0;
  }
  getGlobalCompletedTasks() {
    return this.analyticsData?.globalStats?.completedTasks ?? 0;
  }
  getGlobalDelayedTasks() {
    return this.analyticsData?.globalStats?.delayedTasks ?? 0;
  }
  getGlobalActualHours() {
    return this.analyticsData?.globalStats?.totalActualHours ?? 0;
  }
  getProjectTotalTasks() {
    return this.analyticsData?.projectStats?.total_tasks ?? 0;
  }
  getProjectCompletionPercentage() {
    return this.analyticsData?.kpis?.completionPercentage ?? 0;
  }
  getProjectEstimatedHours() {
    return this.analyticsData?.projectStats?.total_estimated_hours ?? 0;
  }
  getWorkloadDistributionLength() {
    return this.analyticsData?.workloadDistribution?.length ?? 0;
  }
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }
  // Helper method for event propagation
  stopPropagation(event) {
    event.stopPropagation();
  }
  goToGantt() {
    // Naviguer vers la page Gantt
    window.location.href = '/gantt';
  }
  getAverageProgress() {
    if (this.recentProjects.length === 0) return 0;
    const totalProgress = this.recentProjects.reduce((sum, project) => sum + (project.progress || 0), 0);
    return Math.round(totalProgress / this.recentProjects.length);
  }
  // Méthodes pour le dashboard
  getStatusColor(status) {
    const colors = {
      'active': '#10B981',
      'completed': '#3B82F6',
      'pending': '#F59E0B'
    };
    return colors[status] || '#6B7280';
  }
  getPriorityColor(priority) {
    const colors = {
      'low': '#10B981',
      'medium': '#F59E0B',
      'high': '#EF4444'
    };
    return colors[priority] || '#6B7280';
  }
  getTeamSize(teamName) {
    switch (teamName) {
      case 'Équipe A':
        return 8;
      case 'Équipe B':
        return 12;
      case 'Équipe C':
        return 6;
      default:
        return 5;
    }
  }
  getStatusLabel(status) {
    const labels = {
      'active': 'Actif',
      'completed': 'Terminé',
      'paused': 'En pause',
      'cancelled': 'Annulé'
    };
    return labels[status] || status;
  }
  getPriorityLabel(priority) {
    const labels = {
      'low': 'Basse',
      'medium': 'Moyenne',
      'high': 'Haute'
    };
    return labels[priority] || priority;
  }
  getRoleIcon(role) {
    const icons = {
      'manager': 'bi-person-badge',
      'admin': 'bi-shield-check',
      'employee': 'bi-person'
    };
    return icons[role] || 'bi-person';
  }
  getDocumentIcon(type) {
    const icons = {
      'pdf': 'bi-file-pdf',
      'docx': 'bi-file-word',
      'xlsx': 'bi-file-excel',
      'pptx': 'bi-file-ppt',
      'markdown': 'bi-file-code',
      'txt': 'bi-file-text'
    };
    return icons[type] || 'bi-file';
  }
  getEfficiencyColor(efficiency) {
    if (efficiency >= 80) return '#10B981';
    if (efficiency >= 60) return '#F59E0B';
    return '#EF4444';
  }
  approveTask(taskId) {
    console.log('Approuver tâche:', taskId);
    this.managerAuthService.approveTask(taskId).subscribe({
      next: response => {
        console.log('Tâche approuvée:', response);
        alert('Tâche approuvée avec succès');
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: error => {
        console.error('Erreur lors de l\'approbation de la tâche:', error);
        alert('Erreur lors de l\'approbation de la tâche');
      }
    });
  }
  rejectTask(taskId) {
    console.log('Rejeter tâche:', taskId);
    this.managerAuthService.rejectTask(taskId).subscribe({
      next: response => {
        console.log('Tâche rejetée:', response);
        alert('Tâche rejetée avec succès');
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: error => {
        console.error('Erreur lors du rejet de la tâche:', error);
        alert('Erreur lors du rejet de la tâche');
      }
    });
  }
  onDragStart(task, event) {
    this.draggedTask = task;
    event.dataTransfer.effectAllowed = 'move';
    console.log('Drag started for task:', task.title);
  }
  onDragEnd(event) {
    this.draggedTask = null;
    this.draggedOverColumn = '';
    console.log('Drag ended');
  }
  onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }
  onDragEnter(event) {
    event.preventDefault();
  }
  onDragLeave(event) {
    // Gérer le visuel si nécessaire
  }
  onDrop(event, targetStatus) {
    event.preventDefault();
    if (!this.draggedTask) {
      return;
    }
    console.log('Dropping task:', this.draggedTask.title, 'to column:', targetStatus);
    // Si on déplace vers la même colonne, ne rien faire
    if (this.draggedTask.status === targetStatus) {
      return;
    }
    // Mettre à jour le statut de la tâche
    this.updateTaskStatus(this.draggedTask.id, targetStatus);
  }
  editTask(task) {
    console.log('Modification de la tâche:', task);
    this.taskToEdit = {
      ...task
    };
    this.showEditTaskModal = true;
  }
  closeEditTaskModal() {
    this.showEditTaskModal = false;
    this.taskToEdit = {};
  }
  submitTaskEdit() {
    if (!this.taskToEdit.title) {
      alert('Le titre de la tâche est obligatoire');
      return;
    }
    // Convertir la date au format YYYY-MM-DD pour MySQL
    let formattedDueDate = this.taskToEdit.due_date;
    if (formattedDueDate && formattedDueDate.includes('/')) {
      const dateParts = formattedDueDate.split('/');
      if (dateParts.length === 3) {
        formattedDueDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      }
    }
    const taskData = {
      title: this.taskToEdit.title,
      description: this.taskToEdit.description || null,
      priority: this.taskToEdit.priority || 'medium',
      assignee_id: this.taskToEdit.assignee_id || null,
      project_id: this.taskToEdit.project_id || null,
      due_date: formattedDueDate || null,
      estimated_hours: this.taskToEdit.estimated_hours || null,
      tags: this.taskToEdit.tags && this.taskToEdit.tags.length > 0 ? JSON.stringify(this.taskToEdit.tags) : null
    };
    console.log('Mise à jour de la tâche:', taskData);
    this.managerAuthService.updateTask(this.taskToEdit.id, taskData).subscribe({
      next: response => {
        console.log('Tâche mise à jour:', response);
        alert('Tâche mise à jour avec succès');
        this.closeEditTaskModal();
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: error => {
        console.error('Erreur lors de la mise à jour de la tâche:', error);
        alert('Erreur lors de la mise à jour de la tâche');
      }
    });
  }
  // Méthodes pour la gestion des tâches
  createTask(taskData) {
    console.log('Création de la tâche:', taskData);
    this.managerAuthService.createTask(taskData).subscribe({
      next: response => {
        console.log('Tâche créée:', response);
        alert('Tâche créée avec succès');
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: error => {
        console.error('Erreur lors de la création de la tâche:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides. Vérifiez les champs obligatoires.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à créer cette tâche.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la création de la tâche: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }
  updateTaskStatus(taskId, newStatus) {
    console.log('Mise à jour du statut de la tâche:', taskId, newStatus);
    console.log('Tâche complète:', this.draggedTask);
    // Vérifier si la tâche a les propriétés nécessaires
    if (!this.draggedTask || !this.draggedTask.id) {
      console.error('Tâche invalide ou ID manquant:', this.draggedTask);
      alert('Erreur: Tâche invalide');
      return;
    }
    this.managerAuthService.updateTaskStatus(this.draggedTask.id, newStatus).subscribe({
      next: response => {
        console.log('Statut de la tâche mis à jour:', response);
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: error => {
        console.error('Erreur lors de la mise à jour du statut:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides pour la mise à jour du statut.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à modifier cette tâche.');
        } else if (error.status === 404) {
          alert('Erreur: Tâche non trouvée.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la mise à jour du statut: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }
  deleteTask(taskId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      this.managerAuthService.deleteTask(taskId).subscribe({
        next: () => {
          this.loadTasksFromDatabase();
        },
        error: error => {
          console.error('Erreur lors de la suppression de la tâche:', error);
          alert('Erreur lors de la suppression de la tâche');
        }
      });
    }
  }
  // --- GESTION DES DOCUMENTS ---
  loadDocuments() {
    this.loading = true;
    this.documentsService.getAllDocuments().subscribe({
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
  openAddDocumentModal() {
    this.showAddDocumentModal = true;
    this.newDocData = {
      title: '',
      description: '',
      employeeId: null
    };
    this.selectedFile = null;
    // S'assurer que les employés sont chargés
    if (this.allUsers.length === 0) {
      this.loadUsersFromDatabase();
      // Vérifier après un court délai si les employés sont disponibles
      setTimeout(() => {
        if (this.allUsers.length === 0) {
          alert('Erreur: Impossible de charger la liste des employés. Veuillez réessayer.');
          this.closeAddDocumentModal();
        }
      }, 2000);
    }
  }
  closeAddDocumentModal() {
    this.showAddDocumentModal = false;
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  submitDocument() {
    if (!this.newDocData.title || !this.selectedFile || !this.newDocData.employeeId) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('title', this.newDocData.title);
    formData.append('description', this.newDocData.description);
    formData.append('employeeId', this.newDocData.employeeId.toString());
    this.loading = true;
    this.documentsService.uploadDocument(formData).subscribe({
      next: response => {
        if (response.success) {
          alert('Document ajouté avec succès.');
          this.closeAddDocumentModal();
          this.loadDocuments();
        }
        this.loading = false;
      },
      error: error => {
        console.error('Erreur lors de l\'ajout du document:', error);
        alert(error.error?.message || 'Erreur lors de l\'ajout du document.');
        this.loading = false;
      }
    });
  }
  deleteDocument(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
      this.documentsService.deleteDocument(id).subscribe({
        next: response => {
          if (response.success) {
            this.loadDocuments();
          }
        },
        error: error => {
          console.error('Erreur lors de la suppression du document:', error);
        }
      });
    }
  }
  getFilteredDocuments() {
    if (!this.searchTerm) return this.documents;
    const term = this.searchTerm.toLowerCase();
    return this.documents.filter(doc => doc.title.toLowerCase().includes(term) || doc.employee_name?.toLowerCase().includes(term) || doc.file_name.toLowerCase().includes(term));
  }
  getFileIcon(type) {
    if (type.includes('pdf')) return 'bi-file-earmark-pdf text-danger';
    if (type.includes('word') || type.includes('doc')) return 'bi-file-earmark-word text-primary';
    if (type.includes('image')) return 'bi-file-earmark-image text-success';
    return 'bi-file-earmark-text';
  }
  openCreateTaskModal() {
    this.showCreateTaskModal = true;
  }
  closeCreateTaskModal() {
    this.showCreateTaskModal = false;
    this.resetTaskForm();
  }
  // Méthodes pour le modal de création d'utilisateur
  openCreateUserModal() {
    this.showCreateUserModal = true;
  }
  closeCreateUserModal() {
    this.showCreateUserModal = false;
    this.resetUserForm();
  }
  resetUserForm() {
    this.newUser = {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      role: '',
      telephone: ''
    };
  }
  submitUser() {
    if (!this.newUser.nom || !this.newUser.prenom || !this.newUser.email || !this.newUser.password || !this.newUser.role) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    console.log('Création de l\'utilisateur:', this.newUser);
    this.managerAuthService.createUser(this.newUser).subscribe({
      next: response => {
        console.log('Utilisateur créé:', response);
        alert('Utilisateur créé avec succès');
        this.closeCreateUserModal();
        // Recharger la liste des utilisateurs
        this.loadUsersFromDatabase();
      },
      error: error => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides. Vérifiez les champs obligatoires.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à créer des utilisateurs.');
        } else if (error.status === 409) {
          alert('Erreur: Cet email est déjà utilisé.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la création de l\'utilisateur: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }
  // Méthodes pour l'édition d'utilisateur
  editUser(user) {
    console.log('Modification de l\'utilisateur:', user);
    this.userToEdit = {
      ...user
    };
    this.showEditUserModal = true;
  }
  closeEditUserModal() {
    this.showEditUserModal = false;
    this.userToEdit = {};
  }
  submitUserEdit() {
    if (!this.userToEdit.nom || !this.userToEdit.prenom || !this.userToEdit.email || !this.userToEdit.role) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    console.log('Mise à jour de l\'utilisateur:', this.userToEdit);
    this.managerAuthService.updateUser(this.userToEdit.id, this.userToEdit).subscribe({
      next: response => {
        console.log('Utilisateur mis à jour:', response);
        alert('Utilisateur mis à jour avec succès');
        this.closeEditUserModal();
        // Recharger la liste des utilisateurs
        this.loadUsersFromDatabase();
      },
      error: error => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides. Vérifiez les champs obligatoires.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à modifier cet utilisateur.');
        } else if (error.status === 404) {
          alert('Erreur: Utilisateur non trouvé.');
        } else if (error.status === 409) {
          alert('Erreur: Cet email est déjà utilisé.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la mise à jour de l\'utilisateur: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }
  // Méthode pour la suppression d'utilisateur
  deleteUser(userId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.')) {
      console.log('Suppression de l\'utilisateur:', userId);
      this.managerAuthService.deleteUser(userId).subscribe({
        next: response => {
          console.log('Utilisateur supprimé:', response);
          alert('Utilisateur supprimé avec succès');
          // Recharger la liste des utilisateurs
          this.loadUsersFromDatabase();
        },
        error: error => {
          console.error('Erreur lors de la suppression de l\'utilisateur:', error);
          console.error('Status:', error.status);
          console.error('Message:', error.message);
          // Gérer les erreurs spécifiques
          if (error.status === 401) {
            alert('Erreur: Vous n\'êtes pas autorisé à supprimer cet utilisateur.');
          } else if (error.status === 404) {
            alert('Erreur: Utilisateur non trouvé.');
          } else if (error.status === 500) {
            alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
          } else {
            alert('Erreur lors de la suppression de l\'utilisateur: ' + (error.message || 'Erreur inconnue'));
          }
        }
      });
    }
  }
  resetTaskForm() {
    this.newTask = {
      title: '',
      description: '',
      priority: 'medium',
      assignee_id: null,
      project_id: null,
      due_date: '',
      estimated_hours: 0,
      tags: []
    };
  }
  submitTask() {
    if (!this.newTask.title) {
      alert('Le titre de la tâche est obligatoire');
      return;
    }
    const taskData = {
      ...this.newTask,
      creator_id: this.currentManager?.id,
      assignee_id: this.newTask.assignee_id || null,
      project_id: this.newTask.project_id || null,
      due_date: this.newTask.due_date || null,
      estimated_hours: this.newTask.estimated_hours || null,
      tags: this.newTask.tags.length > 0 ? JSON.stringify(this.newTask.tags) : null
    };
    console.log('Données de la tâche à créer:', taskData);
    this.createTask(taskData);
    this.closeCreateTaskModal();
  }
  // Méthodes pour calculer les statistiques
  calculateStats() {
    console.log('=== CALCUL DES STATISTIQUES RÉELLES ===');
    // Statistiques des utilisateurs
    this.globalStats.totalEmployees = this.allUsers.length;
    console.log('Total employés:', this.globalStats.totalEmployees);
    // Statistiques des projets
    this.globalStats.activeProjects = this.recentProjects.filter(p => p.status === 'active').length;
    console.log('Projets actifs:', this.globalStats.activeProjects);
    // Statistiques des tâches
    const completedTasks = this.tasks.filter(t => t.status === 'done').length;
    const totalTasks = this.tasks.length;
    this.globalStats.completedTasks = completedTasks;
    console.log('Tâches complétées:', completedTasks, '/', totalTasks);
    // Définir les tâches en attente (todo et in_progress)
    this.pendingTasks = this.tasks.filter(t => t.status === 'todo' || t.status === 'in_progress');
    this.todoTasks = this.tasks.filter(t => t.status === 'todo');
    this.inProgressTasks = this.tasks.filter(t => t.status === 'in_progress');
    // Conserver les doneTasks existants (structure différente)
    // this.doneTasks reste inchangé
    console.log('Tâches en attente:', this.pendingTasks.length);
    console.log('Tâches à faire:', this.todoTasks.length);
    console.log('Tâches en cours:', this.inProgressTasks.length);
    console.log('Tâches terminées (doneTasks):', this.doneTasks.length);
    // Statistiques des réunions à venir
    const upcomingMeetingsCount = this.meetings.filter(m => m.status === 'upcoming' || m.status === 'scheduled').length;
    this.globalStats.pendingApprovals = upcomingMeetingsCount;
    console.log('Réunions à venir:', upcomingMeetingsCount);
    // Statistiques supplémentaires
    this.managersCount = this.allUsers.filter(u => u.role === 'manager').length;
    this.employeesCount = this.allUsers.filter(u => u.role === 'employee').length;
    this.adminsCount = this.allUsers.filter(u => u.role === 'admin').length;
    // Calculer la performance de l'équipe avec des données réelles
    this.teamPerformance = this.allUsers.map(user => {
      const userTasks = this.tasks.filter(task => task.assignee === `${user.prenom} ${user.nom}`);
      const completedTasks = userTasks.filter(task => task.status === 'done').length;
      const ongoingTasks = userTasks.filter(task => task.status === 'in_progress').length;
      const totalTasks = userTasks.length;
      // Calculer l'efficacité basée sur les tâches complétées
      const efficiency = totalTasks > 0 ? Math.round(completedTasks / totalTasks * 100) : 0;
      return {
        id: user.id,
        name: `${user.prenom} ${user.nom}`,
        completedTasks: completedTasks,
        ongoingTasks: ongoingTasks,
        efficiency: efficiency,
        avatarColor: user.avatarColor
      };
    });
    console.log('Répartition par rôle:', {
      managers: this.managersCount,
      employees: this.employeesCount,
      admins: this.adminsCount
    });
    console.log('Performance de l\'équipe:', this.teamPerformance);
    // Synchroniser le calendrier avec les réunions réelles
    this.syncCalendarWithMeetings();
    console.log('Statistiques finales:', this.globalStats);
    console.log('=== FIN CALCUL STATISTIQUES ===');
  }
  // Synchroniser le calendrier avec les réunions
  syncCalendarWithMeetings() {
    console.log('=== SYNCHRONISATION CALENDRIER ===');
    console.log('Réunions disponibles:', this.meetings);
    const currentYear = this.currentCalendarDate.getFullYear();
    const currentMonth = this.currentCalendarDate.getMonth();
    console.log('Mois/année affichés:', currentMonth, currentYear);
    // Mettre à jour le titre du calendrier
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    this.calendarMonth = monthNames[currentMonth];
    this.calendarYear = currentYear;
    // Obtenir le nombre de jours dans le mois courant
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    console.log('Nombre de jours dans le mois:', daysInMonth);
    // Initialiser le calendrier avec les jours du mois
    this.calendarDays = Array.from({
      length: daysInMonth
    }, (_, i) => {
      const dayNumber = i + 1;
      const dayDate = new Date(currentYear, currentMonth, dayNumber);
      return {
        number: dayNumber,
        isToday: this.isToday(dayDate),
        hasMeeting: false,
        meetings: []
      };
    });
    console.log('Jours du calendrier initialisés:', this.calendarDays.length);
    // Ajouter les réunions au calendrier
    this.meetings.forEach(meeting => {
      console.log('Traitement de la réunion:', meeting.title, meeting.date);
      const meetingDate = new Date(meeting.date);
      console.log('Date de la réunion:', meetingDate, 'Mois:', meetingDate.getMonth(), 'Année:', meetingDate.getFullYear());
      // Vérifier si la réunion est dans le mois affiché
      if (meetingDate.getMonth() === currentMonth && meetingDate.getFullYear() === currentYear) {
        const dayNumber = meetingDate.getDate();
        const calendarDay = this.calendarDays.find(day => day.number === dayNumber);
        console.log('Jour trouvé pour le', dayNumber, ':', calendarDay ? 'OUI' : 'NON');
        if (calendarDay) {
          calendarDay.hasMeeting = true;
          calendarDay.meetings.push({
            color: meeting.color || this.getMeetingTypeColor(meeting.type),
            title: meeting.title,
            time: meetingDate.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit'
            })
          });
          console.log('Réunion ajoutée au calendrier:', meeting.title, 'le jour', dayNumber);
        }
      } else {
        console.log('Réunion hors du mois affiché');
      }
    });
    // Trier les réunions par heure pour chaque jour
    this.calendarDays.forEach(day => {
      day.meetings.sort((a, b) => {
        const timeA = parseInt(a.time.replace(':', ''));
        const timeB = parseInt(b.time.replace(':', ''));
        return timeA - timeB;
      });
    });
    console.log('Jours avec réunions:', this.calendarDays.filter(day => day.hasMeeting).length);
    console.log('=== FIN SYNCHRONISATION ===');
  }
  // Vérifier si une date est aujourd'hui
  isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }
  // Navigation dans le calendrier
  previousMonth() {
    this.currentCalendarDate = new Date(this.currentCalendarDate.getFullYear(), this.currentCalendarDate.getMonth() - 1, 1);
    this.syncCalendarWithMeetings();
  }
  nextMonth() {
    this.currentCalendarDate = new Date(this.currentCalendarDate.getFullYear(), this.currentCalendarDate.getMonth() + 1, 1);
    this.syncCalendarWithMeetings();
  }
  // Revenir au mois actuel
  goToCurrentMonth() {
    this.currentCalendarDate = new Date();
    this.syncCalendarWithMeetings();
  }
  // Obtenir le texte du tooltip pour un jour avec réunions
  getDayMeetingsTooltip(day) {
    if (!day.meetings || day.meetings.length === 0) {
      return '';
    }
    const meetingList = day.meetings.map(meeting => `• ${meeting.time} - ${meeting.title}`).join('\n');
    return `${day.meetings.length} réunion(s) ce jour:\n${meetingList}`;
  }
  // Afficher les réunions du jour
  showDayMeetingsModalFunc(day) {
    this.selectedDay = day;
    this.selectedDayMeetings = day.meetings.map(meeting => {
      // Trouver la réunion complète correspondante
      const fullMeeting = this.meetings.find(m => m.title === meeting.title && new Date(m.date).getDate() === day.number);
      return fullMeeting || meeting;
    });
    this.showDayMeetingsModal = true;
  }
  // Fermer le modal des réunions du jour
  closeDayMeetingsModal() {
    this.showDayMeetingsModal = false;
    this.selectedDay = null;
    this.selectedDayMeetings = [];
  }
  // Ouvrir le modal de création pour un jour spécifique
  openCreateMeetingModalForDay() {
    if (this.selectedDay) {
      // Pré-remplir la date avec le jour sélectionné
      const dayDate = new Date(this.currentCalendarDate.getFullYear(), this.currentCalendarDate.getMonth(), this.selectedDay.number, 9,
      // 9h par défaut
      0);
      this.newMeeting.date = dayDate.toISOString().slice(0, 16); // Format YYYY-MM-DDTHH:MM
    }
    this.closeDayMeetingsModal();
    this.openCreateMeetingModal();
  }
  // Voir une réunion depuis le modal du jour
  viewMeetingFromDay(meeting) {
    this.closeDayMeetingsModal();
    this.viewMeeting(meeting);
  }
  // Modifier une réunion depuis le modal du jour
  editMeetingFromDay(meeting) {
    this.closeDayMeetingsModal();
    this.editMeeting(meeting);
  }
  toggleTaskSelection(taskId) {
    const index = this.selectedTaskIds.indexOf(taskId);
    if (index > -1) {
      this.selectedTaskIds.splice(index, 1);
    } else {
      this.selectedTaskIds.push(taskId);
    }
    console.log('Tâches sélectionnées:', this.selectedTaskIds);
  }
  // Voir les détails d'une tâche
  viewTaskDetails(task) {
    console.log('Voir les détails de la tâche:', task);
    // TODO: Ouvrir un modal avec les détails de la tâche
    alert(`Détails de la tâche: ${task.title}\nDescription: ${task.description}\nPriorité: ${task.priority}\nAssigné à: ${task.assignee}`);
  }
  // Approuver plusieurs tâches sélectionnées
  approveSelectedTasks() {
    if (this.selectedTaskIds.length === 0) {
      alert('Veuillez sélectionner au moins une tâche');
      return;
    }
    if (confirm(`Approuver ${this.selectedTaskIds.length} tâche(s) sélectionnée(s)?`)) {
      this.selectedTaskIds.forEach(taskId => {
        this.approveTask(taskId);
      });
      this.selectedTaskIds = [];
    }
  }
  // Rejeter plusieurs tâches sélectionnées
  rejectSelectedTasks() {
    if (this.selectedTaskIds.length === 0) {
      alert('Veuillez sélectionner au moins une tâche');
      return;
    }
    if (confirm(`Rejeter ${this.selectedTaskIds.length} tâche(s) sélectionnée(s)?`)) {
      this.selectedTaskIds.forEach(taskId => {
        this.rejectTask(taskId);
      });
      this.selectedTaskIds = [];
    }
  }
  // Méthodes pour la création de projet
  openCreateProjectModal() {
    this.showCreateProjectModal = true;
  }
  closeCreateProjectModal() {
    this.showCreateProjectModal = false;
    this.resetProjectForm();
  }
  resetProjectForm() {
    this.newProject = {
      name: '',
      description: '',
      team: '',
      priority: 'medium',
      startDate: '',
      endDate: '',
      budget: 0
    };
  }
  testClick() {
    alert('Test click fonctionne !');
  }
  createProject() {
    alert('Bouton cliqué !');
    console.log('createProject appelé');
    console.log('newProject:', this.newProject);
    console.log('loading:', this.loading);
    if (!this.newProject.name || !this.newProject.team) {
      alert('Champs obligatoires manquants: name=' + this.newProject.name + ', team=' + this.newProject.team);
      return;
    }
    alert('Validation OK, tentative de création...');
    this.loading = true;
    // Appeler le backend pour créer le projet
    this.managerAuthService.createProject({
      name: this.newProject.name,
      description: this.newProject.description,
      team: this.newProject.team,
      priority: this.newProject.priority,
      startDate: this.newProject.startDate,
      endDate: this.newProject.endDate,
      budget: this.newProject.budget
    }).subscribe({
      next: createdProject => {
        console.log('Projet créé dans la base:', createdProject);
        // Ajouter le projet à la liste locale (pour l'affichage immédiat)
        const displayProject = {
          id: createdProject.data.id ? createdProject.data.id : this.recentProjects.length + 1,
          name: createdProject.data.name,
          description: createdProject.data.description || '',
          progress: createdProject.data.progress || 0,
          team: this.getTeamSize(createdProject.data.team),
          priority: createdProject.data.priority,
          startDate: createdProject.data.startDate || null,
          endDate: createdProject.data.endDate || null,
          budget: createdProject.data.budget,
          deadline: createdProject.data.deadline || null,
          status: createdProject.data.status
        };
        this.recentProjects.unshift(displayProject);
        // Mettre à jour les statistiques
        this.globalStats.activeProjects++;
        // Fermer le modal et réinitialiser le formulaire
        this.closeCreateProjectModal();
        this.loading = false;
        alert('Projet créé avec succès dans la base de données !');
      },
      error: error => {
        console.error('Erreur lors de la création du projet:', error);
        this.loading = false;
        // En cas d'erreur backend, fallback sur la création locale
        console.log('Fallback: création locale du projet');
        this.createProjectLocally();
      }
    });
  }
  // Méthode de fallback pour création locale
  createProjectLocally() {
    const newProject = {
      id: this.recentProjects.length + 1,
      name: this.newProject.name,
      description: this.newProject.description,
      progress: 0,
      team: this.getTeamSize(this.newProject.team),
      priority: this.newProject.priority,
      startDate: this.newProject.startDate,
      endDate: this.newProject.endDate,
      budget: this.newProject.budget,
      deadline: this.newProject.endDate || 'À définir',
      status: 'active'
    };
    this.recentProjects.unshift(newProject);
    this.globalStats.activeProjects++;
    this.closeCreateProjectModal();
    console.log('Projet créé localement:', newProject);
  }
  // Déconnexion
  logout() {
    this.managerAuthService.logout();
    this.router.navigate(['/manager-login']);
  }
  // Actions sur les projets
  viewProject(project) {
    console.log('Voir le projet:', project);
    this.selectedProject = project;
    this.showViewProjectModal = true;
  }
  editProject(project) {
    console.log('Modifier le projet:', project);
    this.selectedProject = project;
    this.projectToEdit = {
      name: project.name,
      description: project.description,
      team: project.team,
      priority: project.priority,
      startDate: project.startDate,
      endDate: project.endDate,
      budget: project.budget
    };
    this.showEditProjectModal = true;
  }
  updateProject() {
    console.log('Mise à jour du projet:', this.projectToEdit);
    if (!this.projectToEdit.name || !this.projectToEdit.team) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }
    this.loading = true;
    // Convertir undefined en null pour MySQL
    const projectData = {
      name: this.projectToEdit.name,
      description: this.projectToEdit.description || null,
      team: this.projectToEdit.team,
      priority: this.projectToEdit.priority || 'medium',
      startDate: this.projectToEdit.startDate || null,
      endDate: this.projectToEdit.endDate || null,
      budget: this.projectToEdit.budget || null,
      deadline: this.projectToEdit.endDate || null,
      status: 'active',
      progress: 0
    };
    // Appeler le backend pour mettre à jour le projet
    this.managerAuthService.updateProject(this.selectedProject.id, projectData).subscribe({
      next: updatedProject => {
        console.log('Projet mis à jour dans la base:', updatedProject);
        // Mettre à jour le projet dans la liste locale
        const index = this.recentProjects.findIndex(p => p.id === this.selectedProject.id);
        if (index !== -1) {
          this.recentProjects[index] = {
            id: updatedProject.id,
            name: updatedProject.name,
            description: updatedProject.description || '',
            progress: updatedProject.progress,
            team: this.getTeamSize(updatedProject.team),
            deadline: updatedProject.deadline,
            status: updatedProject.status,
            startDate: updatedProject.startDate,
            endDate: updatedProject.endDate,
            budget: updatedProject.budget,
            priority: updatedProject.priority
          };
        }
        this.loading = false;
        this.closeEditProjectModal();
        alert('Projet mis à jour avec succès !');
      },
      error: error => {
        console.error('Erreur lors de la mise à jour du projet:', error);
        this.loading = false;
        alert('Erreur lors de la mise à jour du projet');
      }
    });
  }
  deleteProject(project) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le projet "${project.name}" ?`)) {
      console.log('Supprimer le projet:', project);
      // TODO: Implémenter la suppression
      alert(`Suppression du projet: ${project.name}\n\nFonctionnalité à implémenter`);
    }
  }
  // Méthodes pour les modaux
  closeViewProjectModal() {
    this.showViewProjectModal = false;
    this.selectedProject = null;
  }
  closeEditProjectModal() {
    this.showEditProjectModal = false;
    this.selectedProject = null;
    this.projectToEdit = {
      name: '',
      description: '',
      team: '',
      priority: 'medium',
      startDate: '',
      endDate: '',
      budget: 0
    };
  }
  // Méthodes pour la gestion des réunions
  openCreateMeetingModal() {
    this.showCreateMeetingModal = true;
  }
  closeCreateMeetingModal() {
    this.showCreateMeetingModal = false;
    this.resetMeetingForm();
  }
  openViewMeetingModal() {
    this.showViewMeetingModal = true;
  }
  closeViewMeetingModal() {
    this.showViewMeetingModal = false;
    this.selectedMeeting = null;
  }
  openEditMeetingModal() {
    this.showEditMeetingModal = true;
  }
  closeEditMeetingModal() {
    this.showEditMeetingModal = false;
    this.resetMeetingForm();
  }
  createMeeting() {
    if (!this.newMeeting.title || !this.newMeeting.date) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }
    this.loading = true;
    const meetingData = {
      title: this.newMeeting.title,
      description: this.newMeeting.title,
      date_time: new Date(this.newMeeting.date).toISOString(),
      duration: this.newMeeting.duration,
      location: this.newMeeting.location,
      type: this.newMeeting.type,
      status: 'upcoming',
      participants: this.newMeeting.participants || 1,
      agenda: this.newMeeting.agenda || [],
      notes: this.newMeeting.notes || '',
      selectedEmployees: this.newMeeting.selectedEmployees || []
    };
    // Créer la réunion via l'API
    this.managerAuthService.createMeeting(meetingData).subscribe({
      next: response => {
        console.log('Réunion créée avec succès:', response);
        // Ajouter la réunion à la liste locale
        const newMeeting = {
          id: response.data?.id || response.id,
          ...meetingData,
          date: meetingData.date_time,
          color: meetingData.type === 'team' ? '#10B981' : meetingData.type === 'client' ? '#3B82F6' : meetingData.type === 'technical' ? '#F59E0B' : '#8B5CF6',
          status: 'upcoming'
        };
        this.meetings.push(newMeeting);
        this.upcomingMeetings = this.meetings.filter(m => m.status === 'upcoming' || m.status === 'scheduled');
        this.loading = false;
        this.closeCreateMeetingModal();
        alert('Réunion créée avec succès !');
      },
      error: error => {
        console.error('Erreur lors de la création de la réunion:', error);
        this.loading = false;
        alert('Erreur lors de la création de la réunion');
      }
    });
  }
  viewMeeting(meeting) {
    this.selectedMeeting = meeting;
    this.openViewMeetingModal();
  }
  editMeeting(meeting) {
    this.meetingToEdit = {
      ...meeting
    };
    this.openEditMeetingModal();
  }
  updateMeeting() {
    if (!this.meetingToEdit.title || !this.meetingToEdit.date) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }
    this.loading = true;
    const meetingData = {
      title: this.meetingToEdit.title,
      description: this.meetingToEdit.title,
      date_time: new Date(this.meetingToEdit.date).toISOString(),
      duration: this.meetingToEdit.duration,
      location: this.meetingToEdit.location,
      type: this.meetingToEdit.type,
      participants: this.meetingToEdit.participants || 1,
      agenda: this.meetingToEdit.agenda || [],
      notes: this.meetingToEdit.notes || ''
    };
    // Mettre à jour la réunion via l'API
    this.managerAuthService.updateMeeting(this.meetingToEdit.id, meetingData).subscribe({
      next: response => {
        console.log('Réunion mise à jour avec succès:', response);
        // Mettre à jour la réunion dans la liste locale
        const index = this.meetings.findIndex(m => m.id === this.meetingToEdit.id);
        if (index !== -1) {
          this.meetings[index] = {
            ...this.meetings[index],
            ...meetingData,
            date: meetingData.date_time,
            color: meetingData.type === 'team' ? '#10B981' : meetingData.type === 'client' ? '#3B82F6' : meetingData.type === 'technical' ? '#F59E0B' : '#8B5CF6'
          };
        }
        // Mettre à jour les réunions à venir
        this.upcomingMeetings = this.meetings.filter(m => m.status === 'upcoming' || m.status === 'scheduled');
        this.loading = false;
        this.closeEditMeetingModal();
        alert('Réunion mise à jour avec succès !');
      },
      error: error => {
        console.error('Erreur lors de la mise à jour de la réunion:', error);
        this.loading = false;
        alert('Erreur lors de la mise à jour de la réunion');
      }
    });
  }
  deleteMeeting(meetingId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réunion ?')) {
      // Supprimer la réunion via l'API
      this.managerAuthService.deleteMeeting(meetingId).subscribe({
        next: response => {
          console.log('Réunion supprimée avec succès:', response);
          // Supprimer la réunion de la liste locale
          this.meetings = this.meetings.filter(m => m.id !== meetingId);
          this.upcomingMeetings = this.meetings.filter(m => m.status === 'upcoming' || m.status === 'scheduled');
          alert('Réunion supprimée avec succès !');
        },
        error: error => {
          console.error('Erreur lors de la suppression de la réunion:', error);
          alert('Erreur lors de la suppression de la réunion');
        }
      });
    }
  }
  getMeetingParticipants(meeting) {
    // Générer des participants fictifs pour l'affichage
    const colors = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
    return Array.from({
      length: meeting.participants || 3
    }, (_, i) => ({
      name: `Participant ${i + 1}`,
      initials: `P${i + 1}`,
      color: colors[i % colors.length]
    }));
  }
  resetMeetingForm() {
    this.newMeeting = {
      title: '',
      date: '',
      duration: '1h',
      location: 'Salle A',
      type: 'team',
      agenda: [],
      participants: [],
      selectedEmployees: [],
      notes: ''
    };
  }
  getMeetingTypeLabel(type) {
    const labels = {
      'team': 'Équipe',
      'client': 'Client',
      'technical': 'Technique',
      'review': 'Revue'
    };
    return labels[type] || type;
  }
  getMeetingTypeColor(type) {
    const colors = {
      'team': '#10B981',
      'client': '#3B82F6',
      'technical': '#F59E0B',
      'review': '#8B5CF6'
    };
    return colors[type] || '#6B7280';
  }
  // Méthode pour mettre à jour la sélection des employés
  updateSelectedEmployees(employeeId, event) {
    const isChecked = event.target?.checked || false;
    if (!this.newMeeting.selectedEmployees) {
      this.newMeeting.selectedEmployees = [];
    }
    if (isChecked) {
      // Ajouter l'employé s'il n'est pas déjà sélectionné
      if (!this.newMeeting.selectedEmployees.includes(employeeId)) {
        this.newMeeting.selectedEmployees.push(employeeId);
      }
    } else {
      // Retirer l'employé
      const index = this.newMeeting.selectedEmployees.indexOf(employeeId);
      if (index > -1) {
        this.newMeeting.selectedEmployees.splice(index, 1);
      }
    }
    console.log('Employés sélectionnés après modification:', this.newMeeting.selectedEmployees);
  }
  static {
    this.ɵfac = function ManagerDashboardComponent_Factory(t) {
      return new (t || ManagerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__.ManagerAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_documents_service__WEBPACK_IMPORTED_MODULE_1__.DocumentsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ManagerDashboardComponent,
      selectors: [["app-dashboard"]],
      hostBindings: function ManagerDashboardComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function ManagerDashboardComponent_scroll_HostBindingHandler() {
            return ctx.onScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
        }
      },
      decls: 66,
      vars: 31,
      consts: [[1, "erp-shell"], [1, "sidebar"], [1, "sidebar-logo"], [1, "logo-hex"], [1, "logo-name"], [1, "logo-badge"], [1, "sidebar-nav"], [1, "nav-group-label"], ["class", "nav-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-bottom"], [1, "user-card"], [1, "avatar", "grad-purple"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["title", "D\u00E9connexion", 1, "tb-btn", "logout-btn", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "main-area"], [1, "topbar"], [1, "tb-title"], [1, "tb-sub"], [1, "tb-right"], ["placeholder", "Rechercher...", 1, "tb-search"], [1, "tb-btn", "notif-btn"], [1, "bi", "bi-bell"], [1, "notif-dot"], [1, "tb-btn"], [1, "bi", "bi-gear"], [1, "content-area"], ["class", "section fade-in", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "nav-item", 3, "click"], ["class", "nav-badge", 4, "ngIf"], [1, "nav-badge"], [1, "section", "fade-in"], [1, "stats-section"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "blue"], [1, "bi", "bi-people"], [1, "stat-content"], [1, "stat-number"], [1, "stat-label"], [1, "stat-icon", "green"], [1, "bi", "bi-kanban"], [1, "stat-icon", "purple"], [1, "bi", "bi-check2-square"], [1, "stat-icon", "orange"], [1, "bi", "bi-calendar-event"], [1, "content-grid"], [1, "card", "projects-card"], [1, "card-header"], [1, "card-title"], [1, "view-all-btn"], [1, "projects-list"], ["class", "project-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "tasks-card"], [1, "pending-count"], [1, "tasks-list"], ["class", "no-tasks", 4, "ngIf"], ["class", "task-item", 4, "ngFor", "ngForOf"], [1, "team-section"], [1, "card", "performance-card"], [1, "period-selector"], [1, "performance-grid"], ["class", "team-member", 4, "ngFor", "ngForOf"], [1, "project-item", 3, "click"], [1, "project-info"], [1, "project-name"], [1, "project-meta"], [1, "team-size"], [1, "deadline"], [1, "bi", "bi-calendar"], [1, "project-progress"], [1, "progress-bar"], [1, "progress-fill", 3, "ngStyle"], [1, "progress-text"], [1, "no-tasks"], [1, "bi", "bi-check-circle"], [1, "task-item"], [1, "task-checkbox"], ["type", "checkbox", 3, "change", "id"], [3, "for"], [1, "task-info"], [1, "task-title"], [1, "task-description"], [1, "task-meta"], [1, "assignee"], [1, "bi", "bi-person"], [1, "due-date"], [1, "submit-time"], [1, "bi", "bi-clock"], [1, "task-priority"], [1, "priority-badge", 3, "ngStyle"], [1, "task-actions"], ["title", "Voir les d\u00E9tails", 1, "btn-action", "btn-view", 3, "click"], [1, "bi", "bi-eye"], ["title", "Approuver", 1, "btn-action", "btn-approve", 3, "click"], [1, "bi", "bi-check"], ["title", "Rejeter", 1, "btn-action", "btn-reject", 3, "click"], [1, "bi", "bi-x"], [1, "team-member"], [1, "member-avatar"], [3, "src", "alt"], [1, "member-info"], [1, "member-name"], [1, "member-stats"], [1, "stat-item"], [1, "bi", "bi-arrow-repeat"], [1, "member-efficiency"], [1, "efficiency-circle"], ["width", "60", "height", "60"], ["cx", "30", "cy", "30", "r", "25", "fill", "none", "stroke", "#E5E7EB", "stroke-width", "5"], ["cx", "30", "cy", "30", "r", "25", "fill", "none", "stroke-width", "5", "stroke-dashoffset", "39.25", "transform", "rotate(-90 30 30)"], [1, "efficiency-text"], [1, "projects-header"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "btn-secondary", 2, "margin-left", "10px", 3, "click"], [1, "filter-controls"], [1, "filter-select"], [1, "projects-grid"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "project-card"], [1, "project-header"], [1, "project-title"], [1, "project-status"], [1, "project-body"], [1, "progress-info"], [1, "progress-label"], [1, "progress-value"], [1, "meta-item"], [1, "project-actions"], [1, "btn-action", 3, "click"], [1, "bi", "bi-pencil"], [1, "kanban-header"], [1, "view-controls"], ["title", "Vue Kanban", 1, "view-btn", "active"], ["title", "Vue Liste", 1, "view-btn"], [1, "bi", "bi-list-ul"], [1, "kanban-board"], [1, "kanban-column"], [1, "column-header"], [1, "column-title"], [1, "column-count"], [1, "column-tasks", 3, "dragover", "drop", "dragenter", "dragleave"], ["class", "task-card", "draggable", "true", 3, "dragstart", "dragend", 4, "ngFor", "ngForOf"], ["class", "task-card completed", "draggable", "true", 3, "dragstart", "dragend", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "task-card", 3, "dragstart", "dragend"], [1, "task-assignee"], [1, "task-due"], [1, "task-tags"], ["class", "task-tag", 4, "ngFor", "ngForOf"], ["title", "Modifier", 1, "btn-edit", 3, "click"], ["title", "Supprimer", 1, "btn-delete", 3, "click"], [1, "bi", "bi-trash"], [1, "task-tag"], [1, "task-progress"], [1, "progress-fill"], ["draggable", "true", 1, "task-card", "completed", 3, "dragstart", "dragend"], [1, "task-completed"], [1, "gantt-section-header"], [1, "section-title"], [1, "gantt-controls"], [1, "project-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "no-selection-message", 4, "ngIf"], [3, "projectId", "projectName"], [1, "no-selection-message"], [1, "bi", "bi-calendar3-range"], [1, "analytics-header"], [1, "analytics-controls"], ["class", "analytics-content", 4, "ngIf"], ["class", "no-data-message", 4, "ngIf"], [1, "analytics-content"], ["class", "analytics-overview", 4, "ngIf"], ["class", "analytics-section", 4, "ngIf"], [1, "analytics-overview"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "blue"], [1, "bi", "bi-diagram-3"], [1, "kpi-content"], [1, "kpi-number"], [1, "kpi-label"], [1, "kpi-icon", "green"], [1, "bi", "bi-check2-circle"], [1, "kpi-icon", "orange"], [1, "bi", "bi-exclamation-triangle"], [1, "kpi-icon", "purple"], [1, "bi", "bi-list-task"], [1, "bi", "bi-clock-history"], [1, "analytics-section"], [1, "subsection-title"], [1, "workload-grid"], ["class", "workload-card", 4, "ngFor", "ngForOf"], [1, "workload-card"], [1, "employee-avatar"], [1, "employee-info"], [1, "attention-list"], ["class", "attention-item", 4, "ngFor", "ngForOf"], [1, "attention-item"], [1, "attention-icon"], [1, "bi", "bi-exclamation-circle"], [1, "attention-info"], [1, "attention-reason"], [1, "no-data-message"], [1, "bi", "bi-graph-up"], [1, "users-header"], [1, "bi", "bi-person-plus"], ["type", "text", "placeholder", "Rechercher un utilisateur...", 1, "search-input"], [1, "users-stats"], [1, "stat-card-small"], [1, "stat-icon-small", "grad-purple"], [1, "stat-info"], [1, "stat-icon-small", "grad-amber"], [1, "bi", "bi-briefcase"], [1, "stat-icon-small", "grad-teal"], [1, "stat-icon-small", "grad-rose"], [1, "bi", "bi-shield-check"], [1, "users-table-container"], [1, "users-table"], [4, "ngFor", "ngForOf"], [1, "user-cell"], [1, "user-id"], [1, "role-badge"], [1, "bi", 3, "ngClass"], [1, "email-link", 3, "href"], [1, "status-badge"], [1, "action-buttons"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Permissions", 1, "btn-icon"], [1, "bi", "bi-shield-lock"], ["title", "Supprimer", 1, "btn-icon", "danger", 3, "click"], [1, "bi", "bi-person-x"], [1, "meetings-header"], ["title", "Vue Calendrier", 1, "view-btn", "active"], [1, "bi", "bi-calendar3"], [1, "meetings-calendar"], [1, "calendar-header"], [1, "calendar-nav", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "calendar-title"], [1, "bi", "bi-chevron-right"], ["title", "Aujourd'hui", 1, "calendar-today", 3, "click"], [1, "bi", "bi-calendar-check"], [1, "calendar-grid"], ["class", "calendar-day-header", 4, "ngFor", "ngForOf"], ["class", "calendar-day", 3, "today", "has-meeting", "clickable", "title", "click", 4, "ngFor", "ngForOf"], [1, "upcoming-meetings"], [1, "meetings-list"], ["class", "meeting-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "calendar-day-header"], [1, "calendar-day", 3, "click", "title"], [1, "day-number"], ["class", "meeting-indicators", 4, "ngIf"], ["class", "meeting-count", 4, "ngIf"], [1, "meeting-indicators"], ["class", "meeting-indicator", 3, "ngStyle", "title", 4, "ngFor", "ngForOf"], ["class", "more-indicators", 3, "title", 4, "ngIf"], [1, "meeting-indicator", 3, "ngStyle", "title"], [1, "more-indicators", 3, "title"], [1, "meeting-count"], [1, "meeting-card"], [1, "meeting-time"], [1, "time"], [1, "duration"], [1, "meeting-info"], [1, "meeting-title"], [1, "meeting-meta"], [1, "meeting-location"], [1, "meeting-date"], [1, "meeting-participants"], [1, "participant-avatars"], ["class", "avatar", 3, "ngStyle", "title", 4, "ngFor", "ngForOf"], ["class", "more-count", 4, "ngIf"], [1, "participant-count"], [1, "meeting-actions"], ["title", "Voir les d\u00E9tails", 1, "btn-icon", 3, "click"], [1, "avatar", 3, "ngStyle", "title"], [1, "more-count"], [1, "documents-header"], [1, "bi", "bi-cloud-upload"], ["type", "text", "placeholder", "Rechercher par titre ou employ\u00E9...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "documents-table-container"], [1, "data-table"], [1, "text-right"], [1, "doc-title-cell"], [1, "doc-title"], [1, "employee-badge"], [1, "file-type"], [1, "table-actions"], ["title", "Visualiser", 1, "btn-icon", 3, "click"], ["colspan", "6", 1, "empty-table"], [1, "empty-state"], [1, "bi", "bi-folder-x"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body"], [1, "form-group"], ["for", "projectName"], ["type", "text", "id", "projectName", "name", "projectName", "required", "", "placeholder", "Entrez le nom du projet", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "projectDescription"], ["id", "projectDescription", "name", "projectDescription", "rows", "4", "placeholder", "D\u00E9crivez le projet...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "projectTeam"], ["id", "projectTeam", "name", "projectTeam", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "projectPriority"], ["id", "projectPriority", "name", "projectPriority", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "low"], ["value", "medium"], ["value", "high"], ["for", "projectStartDate"], ["type", "date", "id", "projectStartDate", "name", "projectStartDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "projectEndDate"], ["type", "date", "id", "projectEndDate", "name", "projectEndDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "projectBudget"], ["type", "number", "id", "projectBudget", "name", "projectBudget", "placeholder", "0", "min", "0", "step", "1000", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], ["class", "loading-spinner", 4, "ngIf"], [3, "value"], [1, "loading-spinner"], [1, "project-details"], [1, "detail-header"], [1, "project-status", 3, "ngClass"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-row"], [1, "progress-detail"], [1, "priority-badge", 3, "ngClass"], [1, "detail-actions"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "modal-body", 3, "ngSubmit"], ["for", "editProjectName"], ["type", "text", "id", "editProjectName", "name", "editProjectName", "required", "", "placeholder", "Entrez le nom du projet", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editProjectDescription"], ["id", "editProjectDescription", "name", "editProjectDescription", "rows", "4", "placeholder", "D\u00E9crivez le projet...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "editProjectTeam"], ["id", "editProjectTeam", "name", "editProjectTeam", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "\u00C9quipe A"], ["value", "\u00C9quipe B"], ["value", "\u00C9quipe C"], ["for", "editProjectPriority"], ["id", "editProjectPriority", "name", "editProjectPriority", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "editProjectStartDate"], ["type", "date", "id", "editProjectStartDate", "name", "editProjectStartDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editProjectEndDate"], ["type", "date", "id", "editProjectEndDate", "name", "editProjectEndDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editProjectBudget"], ["type", "number", "id", "editProjectBudget", "name", "editProjectBudget", "placeholder", "0", "min", "0", "step", "1000", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["for", "userLastName"], ["type", "text", "id", "userLastName", "name", "userLastName", "required", "", "placeholder", "Entrez le nom de l'utilisateur", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userFirstName"], ["type", "text", "id", "userFirstName", "name", "userFirstName", "required", "", "placeholder", "Entrez le pr\u00E9nom de l'utilisateur", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userEmail"], ["type", "email", "id", "userEmail", "name", "userEmail", "required", "", "placeholder", "exemple@sit.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userPassword"], ["type", "password", "id", "userPassword", "name", "userPassword", "required", "", "placeholder", "Entrez un mot de passe s\u00E9curis\u00E9", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userRole"], ["id", "userRole", "name", "userRole", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "admin"], ["value", "manager"], ["value", "employee"], ["for", "userPhone"], ["type", "tel", "id", "userPhone", "name", "userPhone", "placeholder", "06 12 34 56 78", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editUserLastName"], ["type", "text", "id", "editUserLastName", "name", "editUserLastName", "required", "", "placeholder", "Entrez le nom de l'utilisateur", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editUserFirstName"], ["type", "text", "id", "editUserFirstName", "name", "editUserFirstName", "required", "", "placeholder", "Entrez le pr\u00E9nom de l'utilisateur", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editUserEmail"], ["type", "email", "id", "editUserEmail", "name", "editUserEmail", "required", "", "placeholder", "exemple@sit.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editUserRole"], ["id", "editUserRole", "name", "editUserRole", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "editUserPhone"], ["type", "tel", "id", "editUserPhone", "name", "editUserPhone", "placeholder", "06 12 34 56 78", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "taskTitle"], ["type", "text", "id", "taskTitle", "name", "taskTitle", "required", "", "placeholder", "Entrez le titre de la t\u00E2che", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "taskDescription"], ["id", "taskDescription", "name", "taskDescription", "rows", "4", "placeholder", "D\u00E9crivez la t\u00E2che...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "taskPriority"], ["id", "taskPriority", "name", "taskPriority", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "taskAssignee"], ["id", "taskAssignee", "name", "taskAssignee", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "taskProject"], ["id", "taskProject", "name", "taskProject", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "taskDueDate"], ["type", "date", "id", "taskDueDate", "name", "taskDueDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "taskEstimatedHours"], ["type", "number", "id", "taskEstimatedHours", "name", "taskEstimatedHours", "placeholder", "0", "min", "0", "step", "0.5", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editTaskTitle"], ["type", "text", "id", "editTaskTitle", "name", "editTaskTitle", "required", "", "placeholder", "Entrez le titre de la t\u00E2che", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editTaskDescription"], ["id", "editTaskDescription", "name", "editTaskDescription", "rows", "4", "placeholder", "D\u00E9crivez la t\u00E2che...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "editTaskPriority"], ["id", "editTaskPriority", "name", "editTaskPriority", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "editTaskAssignee"], ["id", "editTaskAssignee", "name", "editTaskAssignee", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "editTaskProject"], ["id", "editTaskProject", "name", "editTaskProject", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "editTaskDueDate"], ["type", "date", "id", "editTaskDueDate", "name", "editTaskDueDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editTaskEstimatedHours"], ["type", "number", "id", "editTaskEstimatedHours", "name", "editTaskEstimatedHours", "placeholder", "0", "min", "0", "step", "0.5", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "modal-content", "day-meetings-modal", 3, "click"], ["class", "day-meetings-list", 4, "ngIf"], ["class", "no-meetings", 4, "ngIf"], [1, "modal-footer"], [1, "day-meetings-list"], ["class", "day-meeting-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "day-meeting-item"], [1, "meeting-time-badge"], [1, "meeting-details"], [1, "meeting-duration"], [1, "no-meetings"], [1, "bi", "bi-calendar-x"], ["for", "meetingTitle"], ["type", "text", "id", "meetingTitle", "name", "meetingTitle", "required", "", "placeholder", "Entrez le titre de la r\u00E9union", 3, "ngModelChange", "ngModel"], ["for", "meetingDate"], ["type", "datetime-local", "id", "meetingDate", "name", "meetingDate", "required", "", 3, "ngModelChange", "ngModel"], ["for", "meetingDuration"], ["id", "meetingDuration", "name", "meetingDuration", 3, "ngModelChange", "ngModel"], ["value", "30min"], ["value", "1h"], ["value", "1h30"], ["value", "2h"], ["value", "3h"], ["for", "meetingLocation"], ["type", "text", "id", "meetingLocation", "name", "meetingLocation", "placeholder", "Salle A, Visioconf\u00E9rence, etc.", 3, "ngModelChange", "ngModel"], ["for", "meetingType"], ["id", "meetingType", "name", "meetingType", 3, "ngModelChange", "ngModel"], ["value", "team"], ["value", "client"], ["value", "technical"], ["value", "review"], ["for", "meetingEmployees"], [1, "employees-selector"], ["class", "employee-checkbox", 4, "ngFor", "ngForOf"], [1, "selected-count"], ["for", "meetingNotes"], ["id", "meetingNotes", "name", "meetingNotes", "rows", "3", "placeholder", "Notes suppl\u00E9mentaires...", 3, "ngModelChange", "ngModel"], [1, "employee-checkbox"], ["type", "checkbox", 3, "id", "name", "value", "checked", "change", 4, "ngIf"], ["class", "employee-label", 3, "for", 4, "ngIf"], ["type", "checkbox", 3, "change", "id", "name", "value", "checked"], [1, "employee-label", 3, "for"], [1, "employee-avatar", 3, "ngStyle"], [1, "employee-name"], [1, "employee-email"], ["class", "modal-body", 4, "ngIf"], [1, "meeting-type-badge", 3, "ngStyle"], ["class", "detail-row", 4, "ngIf"], [1, "detail-item", "full-width"], ["for", "editMeetingTitle"], ["type", "text", "id", "editMeetingTitle", "name", "editMeetingTitle", "required", "", "placeholder", "Entrez le titre de la r\u00E9union", 3, "ngModelChange", "ngModel"], ["for", "editMeetingDate"], ["type", "datetime-local", "id", "editMeetingDate", "name", "editMeetingDate", "required", "", 3, "ngModelChange", "ngModel"], ["for", "editMeetingDuration"], ["id", "editMeetingDuration", "name", "editMeetingDuration", 3, "ngModelChange", "ngModel"], ["for", "editMeetingLocation"], ["type", "text", "id", "editMeetingLocation", "name", "editMeetingLocation", "placeholder", "Salle A, Visioconf\u00E9rence, etc.", 3, "ngModelChange", "ngModel"], ["for", "editMeetingType"], ["id", "editMeetingType", "name", "editMeetingType", 3, "ngModelChange", "ngModel"], ["for", "editMeetingParticipants"], ["type", "number", "id", "editMeetingParticipants", "name", "editMeetingParticipants", "min", "1", "placeholder", "Nombre de participants", 3, "ngModelChange", "ngModel"], ["for", "editMeetingNotes"], ["id", "editMeetingNotes", "name", "editMeetingNotes", "rows", "3", "placeholder", "Notes suppl\u00E9mentaires...", 3, "ngModelChange", "ngModel"], ["for", "docTitle"], ["type", "text", "id", "docTitle", "name", "docTitle", "required", "", "placeholder", "Ex: Contrat de travail, Guide technique...", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "docDescription"], ["id", "docDescription", "name", "docDescription", "rows", "3", "placeholder", "Br\u00E8ve description du contenu...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "docEmployee"], ["id", "docEmployee", "name", "docEmployee", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "docFile"], [1, "file-upload-area"], ["type", "file", "id", "docFile", "accept", ".pdf,.doc,.docx,.png,.jpg,.jpeg", 1, "file-input", 3, "change"], ["class", "file-upload-info", 4, "ngIf"], ["class", "file-upload-placeholder", 4, "ngIf"], [1, "file-upload-info"], [1, "bi", "bi-file-earmark-check"], [1, "file-upload-placeholder"], [1, "bi", "bi-cloud-arrow-up"]],
      template: function ManagerDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2195");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "SIT");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "v2.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nav", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Principal");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ManagerDashboardComponent_div_12_Template, 5, 7, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u00C9quipe");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ManagerDashboardComponent_div_15_Template, 5, 7, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Ressources");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ManagerDashboardComponent_div_18_Template, 4, 6, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "KM");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12)(24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerDashboardComponent_Template_button_click_28_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 17)(31, "header", 18)(32, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "i", 24)(40, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ManagerDashboardComponent_div_44_Template, 67, 9, "div", 29)(45, ManagerDashboardComponent_div_45_Template, 27, 1, "div", 29)(46, ManagerDashboardComponent_div_46_Template, 36, 6, "div", 29)(47, ManagerDashboardComponent_div_47_Template, 11, 5, "div", 29)(48, ManagerDashboardComponent_div_48_Template, 11, 5, "div", 29)(49, ManagerDashboardComponent_div_49_Template, 70, 5, "div", 29)(50, ManagerDashboardComponent_div_50_Template, 29, 5, "div", 29)(51, ManagerDashboardComponent_div_51_Template, 2, 0, "div", 29)(52, ManagerDashboardComponent_div_52_Template, 2, 0, "div", 29)(53, ManagerDashboardComponent_div_53_Template, 27, 3, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ManagerDashboardComponent_div_54_Template, 53, 11, "div", 30)(55, ManagerDashboardComponent_div_55_Template, 70, 23, "div", 30)(56, ManagerDashboardComponent_div_56_Template, 58, 10, "div", 30)(57, ManagerDashboardComponent_div_57_Template, 48, 9, "div", 30)(58, ManagerDashboardComponent_div_58_Template, 44, 8, "div", 30)(59, ManagerDashboardComponent_div_59_Template, 56, 12, "div", 30)(60, ManagerDashboardComponent_div_60_Template, 66, 10, "div", 30)(61, ManagerDashboardComponent_div_61_Template, 16, 5, "div", 30)(62, ManagerDashboardComponent_div_62_Template, 65, 11, "div", 30)(63, ManagerDashboardComponent_div_63_Template, 14, 1, "div", 30)(64, ManagerDashboardComponent_div_64_Template, 62, 10, "div", 30)(65, ManagerDashboardComponent_div_65_Template, 36, 10, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.principalItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.equipeItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ressourcesItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.currentManager == null ? null : ctx.currentManager.prenom, " ", ctx.currentManager == null ? null : ctx.currentManager.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("scrolled", ctx.isScrolled);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentTitle.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentTitle.sub);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "projets");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "taches");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "gantt");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "reunions");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "recommandations");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "simulateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeSection === "documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCreateProjectModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showViewProjectModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showEditProjectModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCreateUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showEditUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCreateTaskModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showEditTaskModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showDayMeetingsModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCreateMeetingModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showViewMeetingModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showEditMeetingModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAddDocumentModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _enhanced_gantt_component__WEBPACK_IMPORTED_MODULE_3__.EnhancedGanttComponent, _task_recommendation_component__WEBPACK_IMPORTED_MODULE_4__.TaskRecommendationComponent, _project_simulator_component__WEBPACK_IMPORTED_MODULE_5__.ProjectSimulatorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&family=Syne[_ngcontent-%COMP%]:wght@600;700[_ngcontent-%COMP%];800&display=swap)[_ngcontent-%COMP%];\n\n.projects-header[_ngcontent-%COMP%], .kanban-header[_ngcontent-%COMP%], .users-header[_ngcontent-%COMP%], .meetings-header[_ngcontent-%COMP%], .documents-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  margin-bottom: 24px;\n}\n.header-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\n.filter-controls[_ngcontent-%COMP%] { display: flex; gap: 10px; }\n.filter-select[_ngcontent-%COMP%], .search-input[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px; padding: 8px 14px; color: #cbd5e1;\n  font-size: 13px; font-family: 'Inter',sans-serif; outline: none;\n}\n.filter-select[_ngcontent-%COMP%]:focus, .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15);\n}\n.filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; }\n.search-input[_ngcontent-%COMP%]::placeholder { color: #475569; }\n\n\n\n.projects-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; padding: 22px; transition: all 0.3s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99,102,241,0.3); transform: translateY(-3px);\n  box-shadow: 0 10px 28px rgba(0,0,0,0.3);\n}\n.project-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 18px; }\n.project-title[_ngcontent-%COMP%] { font-size: 15px; font-weight: 700; color: #f8fafc; margin: 0; }\n.project-status[_ngcontent-%COMP%] {\n  padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600; flex-shrink: 0;\n}\n.status-active[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }\n.status-on_hold[_ngcontent-%COMP%], .status-paused[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }\n.status-completed[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }\n.project-body[_ngcontent-%COMP%] {}\n.progress-info[_ngcontent-%COMP%] { display: flex; justify-content: space-between; font-size: 12px; color: #64748b; margin-bottom: 8px; }\n.progress-label[_ngcontent-%COMP%] { color: #64748b; }\n.progress-value[_ngcontent-%COMP%] { color: #94a3b8; font-weight: 600; }\n.project-meta[_ngcontent-%COMP%] { display: flex; gap: 16px; margin-top: 14px; }\n.meta-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #64748b; }\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #475569; }\n.project-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; margin-top: 16px; }\n.project-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  flex: 1; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8; font-size: 12px; font-weight: 500;\n  cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;\n  transition: all 0.2s;\n}\n.project-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n\n\n\n.view-controls[_ngcontent-%COMP%] { display: flex; gap: 4px; }\n.view-btn[_ngcontent-%COMP%] {\n  width: 34px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.04); color: #64748b; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; font-size: 15px; transition: all 0.2s;\n}\n.view-btn.active[_ngcontent-%COMP%], .view-btn[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.15); color: #a5b4fc; border-color: rgba(99,102,241,0.2); }\n.kanban-board[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\n@media (max-width: 1100px) { .kanban-board[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n.kanban-column[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);\n  border-radius: 14px; min-height: 300px; display: flex; flex-direction: column;\n}\n.column-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.06);\n}\n.column-title[_ngcontent-%COMP%] { font-size: 13px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.06em; }\n.column-count[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.08); color: #64748b;\n  padding: 2px 8px; border-radius: 100px; font-size: 11px; font-weight: 600;\n}\n.column-tasks[_ngcontent-%COMP%] { flex: 1; padding: 12px; display: flex; flex-direction: column; gap: 10px; min-height: 100px; }\n.column-tasks.drag-over[_ngcontent-%COMP%] { background: rgba(99,102,241,0.06); border-radius: 10px; }\n.task-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 12px; padding: 14px; cursor: grab; transition: all 0.2s;\n}\n.task-card[_ngcontent-%COMP%]:hover { border-color: rgba(99,102,241,0.25); box-shadow: 0 4px 16px rgba(0,0,0,0.25); }\n.task-card.completed[_ngcontent-%COMP%] { opacity: 0.55; }\n.task-card[_ngcontent-%COMP%]:active { cursor: grabbing; }\n.task-priority[_ngcontent-%COMP%] {\n  height: 3px; border-radius: 2px; margin-bottom: 10px;\n}\n.priority-high[_ngcontent-%COMP%] { background: linear-gradient(90deg, #ef4444, #f97316); }\n.priority-medium[_ngcontent-%COMP%] { background: linear-gradient(90deg, #f59e0b, #eab308); }\n.priority-low[_ngcontent-%COMP%] { background: linear-gradient(90deg, #10b981, #06b6d4); }\n.task-card[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #f8fafc; margin: 0 0 6px 0; line-height: 1.4; }\n.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin: 0 0 10px 0; line-height: 1.5; }\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }\n.task-assignee[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #94a3b8; }\n.task-due[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #64748b; }\n.task-tags[_ngcontent-%COMP%] { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 10px; }\n.task-tag[_ngcontent-%COMP%] {\n  padding: 2px 8px; background: rgba(255,255,255,0.06); border-radius: 4px;\n  font-size: 10px; color: #64748b; font-weight: 500;\n}\n.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n.btn-edit[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%] {\n  width: 28px; height: 28px; border-radius: 7px; border: 1px solid rgba(255,255,255,0.08);\n  background: rgba(255,255,255,0.04); cursor: pointer;\n  display: flex; align-items: center; justify-content: center; font-size: 12px; transition: all 0.2s;\n}\n.btn-edit[_ngcontent-%COMP%] { color: #94a3b8; }\n.btn-edit[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.15); color: #a5b4fc; }\n.btn-delete[_ngcontent-%COMP%] { color: #94a3b8; }\n.btn-delete[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.15); color: #f87171; }\n.task-card[_ngcontent-%COMP%]   .task-progress[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }\n.task-card[_ngcontent-%COMP%]   .task-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] { flex: 1; }\n.task-completed[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #34d399; }\n\n\n\n.users-stats[_ngcontent-%COMP%] { display: flex; gap: 14px; margin-bottom: 24px; flex-wrap: wrap; }\n.stat-card-small[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 12px; padding: 14px 18px; flex: 1; min-width: 150px; transition: all 0.2s;\n}\n.stat-card-small[_ngcontent-%COMP%]:hover { border-color: rgba(99,102,241,0.2); }\n.stat-icon-small[_ngcontent-%COMP%] {\n  width: 38px; height: 38px; border-radius: 10px;\n  display: flex; align-items: center; justify-content: center; font-size: 16px; color: white; flex-shrink: 0;\n}\n.stat-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: 20px; font-weight: 700; color: #f8fafc; margin: 0 0 2px 0; }\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin: 0; }\n.users-table-container[_ngcontent-%COMP%] { overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.06); }\n.users-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left; padding: 13px 18px; font-size: 11px; font-weight: 600;\n  color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;\n  border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02);\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 14px 18px; font-size: 14px; color: #cbd5e1; border-bottom: 1px solid rgba(255,255,255,0.04); }\n.users-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\n.users-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); }\n.user-cell[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.user-cell[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; }\n.user-cell[_ngcontent-%COMP%]   .user-id[_ngcontent-%COMP%] { font-size: 11px; color: #475569; }\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center; gap: 5px;\n  padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600; text-transform: capitalize;\n}\n.role-manager[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }\n.role-employee[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: #38bdf8; border: 1px solid rgba(14,165,233,0.2); }\n.role-admin[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }\n.status-badge[_ngcontent-%COMP%] { padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600; }\n.status-active[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: #34d399; }\n.status-inactive[_ngcontent-%COMP%] { background: rgba(239,68,68,0.15); color: #f87171; }\n.email-link[_ngcontent-%COMP%] { color: #6366f1; text-decoration: none; font-size: 13px; }\n.email-link[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n.action-buttons[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);\n  background: rgba(255,255,255,0.04); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; font-size: 13px; transition: all 0.2s;\n}\n.btn-icon[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n.btn-icon.danger[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.15); color: #f87171; border-color: rgba(239,68,68,0.2); }\n\n\n\n.meetings-calendar[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 24px; }\n.calendar-header[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }\n.calendar-title[_ngcontent-%COMP%] { font-family: 'Syne',sans-serif; font-size: 16px; font-weight: 700; color: #f8fafc; flex: 1; text-align: center; }\n.calendar-nav[_ngcontent-%COMP%], .calendar-today[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; font-size: 14px; transition: all 0.2s;\n}\n.calendar-nav[_ngcontent-%COMP%]:hover, .calendar-today[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.15); color: #a5b4fc; }\n.calendar-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }\n.calendar-day-header[_ngcontent-%COMP%] { text-align: center; padding: 6px; font-size: 10px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.06em; }\n.calendar-day[_ngcontent-%COMP%] {\n  min-height: 68px; padding: 6px; border-radius: 8px;\n  border: 1px solid transparent; transition: all 0.2s; position: relative;\n}\n.calendar-day.today[_ngcontent-%COMP%] { border-color: rgba(99,102,241,0.4); background: rgba(99,102,241,0.08); }\n.calendar-day.has-meeting[_ngcontent-%COMP%] { cursor: pointer; }\n.calendar-day.has-meeting[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.05); }\n.day-number[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; color: #64748b; }\n.calendar-day.today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] { color: #a5b4fc; }\n.meeting-indicators[_ngcontent-%COMP%] { display: flex; gap: 3px; flex-wrap: wrap; margin-top: 4px; }\n.meeting-indicator[_ngcontent-%COMP%] { width: 8px; height: 8px; border-radius: 50%; }\n.more-indicators[_ngcontent-%COMP%] { font-size: 10px; color: #64748b; }\n.meeting-count[_ngcontent-%COMP%] { position: absolute; top: 4px; right: 6px; font-size: 10px; font-weight: 700; color: #6366f1; }\n.upcoming-meetings[_ngcontent-%COMP%] { margin-top: 8px; }\n.upcoming-meetings[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] { font-family: 'Syne',sans-serif; font-size: 16px; font-weight: 700; color: #f8fafc; margin-bottom: 14px; }\n.meetings-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n.meeting-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 16px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;\n  border-left: 3px solid #6366f1;\n}\n.meeting-card.meeting-team[_ngcontent-%COMP%] { border-left-color: #6366f1; }\n.meeting-card.meeting-client[_ngcontent-%COMP%] { border-left-color: #0ea5e9; }\n.meeting-card.meeting-one_on_one[_ngcontent-%COMP%] { border-left-color: #a855f7; }\n.meeting-card[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.07); }\n.meeting-time[_ngcontent-%COMP%] { text-align: center; flex-shrink: 0; min-width: 56px; }\n.meeting-time[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] { display: block; font-size: 16px; font-weight: 700; color: #f8fafc; }\n.meeting-time[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] { display: block; font-size: 11px; color: #64748b; margin-top: 2px; }\n.meeting-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.meeting-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 6px 0; }\n.meeting-meta[_ngcontent-%COMP%] { display: flex; gap: 14px; font-size: 12px; color: #64748b; flex-wrap: wrap; }\n.meeting-location[_ngcontent-%COMP%], .meeting-date[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 5px; }\n.meeting-participants[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; margin-top: 8px; }\n.participant-avatars[_ngcontent-%COMP%] { display: flex; }\n.participant-avatars[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] { margin-left: -6px; width: 26px; height: 26px; font-size: 10px; border: 2px solid #0f172a; }\n.participant-avatars[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:first-child { margin-left: 0; }\n.more-count[_ngcontent-%COMP%] { font-size: 11px; color: #64748b; }\n.participant-count[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; }\n.meeting-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; flex-shrink: 0; }\n\n\n\n.documents-table-container[_ngcontent-%COMP%] { overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.06); }\n.data-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left; padding: 13px 18px; font-size: 11px; font-weight: 600;\n  color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;\n  border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 14px 18px; font-size: 13px; color: #cbd5e1; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); }\n.text-right[_ngcontent-%COMP%] { text-align: right !important; }\n.doc-title-cell[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.doc-title-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 18px; color: #6366f1; }\n.doc-title[_ngcontent-%COMP%] { font-weight: 600; color: #f8fafc; }\n.employee-badge[_ngcontent-%COMP%] {\n  display: inline-block; padding: 3px 10px; background: rgba(14,165,233,0.1);\n  color: #38bdf8; border: 1px solid rgba(14,165,233,0.2); border-radius: 100px; font-size: 11px; font-weight: 600;\n}\n.file-type[_ngcontent-%COMP%] {\n  display: inline-block; padding: 3px 8px; background: rgba(255,255,255,0.06);\n  color: #94a3b8; border-radius: 6px; font-size: 11px; font-weight: 700;\n}\n.table-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; justify-content: flex-end; }\n.empty-table[_ngcontent-%COMP%] { text-align: center; padding: 40px; }\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n  background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 1000; padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #1e293b; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px;\n  padding: 32px; width: 580px; max-width: 95vw; max-height: 90vh; overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4,0,0.2,1);\n  box-shadow: 0 24px 48px rgba(0,0,0,0.5);\n}\n.modal-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.06); }\n.modal-title[_ngcontent-%COMP%] { font-family: 'Syne',sans-serif; font-size: 20px; font-weight: 700; color: #f8fafc; }\n.modal-close[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.15); color: #f87171; }\n.modal-body[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; }\n.form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 500; color: #94a3b8; }\n.form-input[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px; padding: 12px 16px; color: #f8fafc;\n  font-size: 14px; font-family: 'Inter',sans-serif; outline: none; transition: all 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus, .form-textarea[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1; background: rgba(99,102,241,0.08); box-shadow: 0 0 0 3px rgba(99,102,241,0.15);\n}\n.form-input[_ngcontent-%COMP%]::placeholder, .form-textarea[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; }\n.form-textarea[_ngcontent-%COMP%] { resize: vertical; min-height: 100px; }\n.form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\n.form-actions[_ngcontent-%COMP%] {\n  display: flex; justify-content: flex-end; gap: 12px;\n  margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06);\n}\n.btn-large[_ngcontent-%COMP%] { padding: 13px 28px; font-size: 15px; }\n\n\n\n.project-details[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 24px; }\n.detail-header[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; justify-content: space-between;\n  gap: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06);\n}\n.detail-header[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  font-size: 18px; font-weight: 700; color: #f8fafc; margin: 0;\n  line-height: 1.3;\n}\n.detail-grid[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; }\n.detail-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }\n.detail-item[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px; color: #cbd5e1; margin: 0; line-height: 1.5;\n}\n.progress-detail[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n}\n.progress-detail[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  flex: 1; height: 8px; background: rgba(255,255,255,0.1);\n  border-radius: 4px; overflow: hidden;\n}\n.progress-detail[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%; background: linear-gradient(90deg, #6366f1, #8b5cf6);\n  transition: width 0.3s ease;\n}\n.progress-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px; font-weight: 600; color: #94a3b8;\n  min-width: 40px;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex; justify-content: flex-end; gap: 12px;\n  margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06);\n}\n.priority-badge[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center; padding: 4px 12px;\n  border-radius: 100px; font-size: 11px; font-weight: 600; text-transform: capitalize;\n  color: white;\n}\n.priority-high[_ngcontent-%COMP%] { background: linear-gradient(135deg, #ef4444, #f97316); }\n.priority-medium[_ngcontent-%COMP%] { background: linear-gradient(135deg, #f59e0b, #eab308); }\n.priority-low[_ngcontent-%COMP%] { background: linear-gradient(135deg, #10b981, #06b6d4); }\n.status-active[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }\n.status-on_hold[_ngcontent-%COMP%], .status-paused[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }\n.status-completed[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }\n\n\n\n.gantt-link-container[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; min-height: 400px; }\n.gantt-preview[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px; padding: 40px; max-width: 700px; width: 100%; text-align: center;\n}\n.preview-header[_ngcontent-%COMP%] { margin-bottom: 32px; }\n.preview-description[_ngcontent-%COMP%] { color: #64748b; font-size: 15px; margin-top: 8px; }\n.preview-stats[_ngcontent-%COMP%] { display: flex; justify-content: center; gap: 40px; margin-bottom: 32px; }\n.preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] { text-align: center; }\n.preview-stats[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] { font-size: 32px; font-weight: 800; color: #a5b4fc; font-family: 'Syne',sans-serif; }\n.preview-stats[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin-top: 4px; }\n.mini-gantt-preview[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); border-radius: 12px; padding: 16px; margin-bottom: 28px; display: flex; flex-direction: column; gap: 10px; }\n.mini-project[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; }\n.mini-project-name[_ngcontent-%COMP%] { font-size: 13px; color: #94a3b8; width: 160px; text-align: left; flex-shrink: 0; }\n.mini-progress[_ngcontent-%COMP%] { flex: 1; height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden; }\n.mini-bar[_ngcontent-%COMP%] { height: 100%; border-radius: 4px; transition: width 0.8s ease; }\n.preview-actions[_ngcontent-%COMP%] { display: flex; justify-content: center; gap: 12px; }\n@keyframes _ngcontent-%COMP%_slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }\n\n\n\n.employees-selector[_ngcontent-%COMP%] {\n  max-height: 240px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 12px; background: rgba(255,255,255,0.02); padding: 8px;\n}\n.employees-selector[_ngcontent-%COMP%]::-webkit-scrollbar { width: 6px; }\n.employees-selector[_ngcontent-%COMP%]::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 3px; }\n.employees-selector[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }\n.employees-selector[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.3); }\n\n.employee-checkbox[_ngcontent-%COMP%] {\n  display: flex; align-items: center; padding: 0; margin-bottom: 4px;\n  border-radius: 8px; transition: all 0.2s ease;\n}\n.employee-checkbox[_ngcontent-%COMP%]:last-child { margin-bottom: 0; }\n.employee-checkbox[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.05);\n}\n.employee-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  position: absolute; opacity: 0; cursor: pointer;\n}\n.employee-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + .employee-label[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.1); border-color: rgba(99,102,241,0.3);\n}\n.employee-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + .employee-label[_ngcontent-%COMP%]   .employee-avatar[_ngcontent-%COMP%] {\n  border: 2px solid #6366f1; box-shadow: 0 0 0 4px rgba(99,102,241,0.15);\n}\n\n.employee-label[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  width: 100%; padding: 10px 12px; border-radius: 8px;\n  cursor: pointer; transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.employee-label[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.04);\n}\n\n.employee-avatar[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 50%;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; font-weight: 600; color: white;\n  flex-shrink: 0; transition: all 0.2s ease;\n  border: 2px solid transparent;\n}\n\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1; min-width: 0;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-size: 14px; font-weight: 600; color: #f8fafc;\n  line-height: 1.3; margin-bottom: 2px;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.employee-email[_ngcontent-%COMP%] {\n  font-size: 12px; color: #64748b;\n  line-height: 1.2;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n\n.selected-count[_ngcontent-%COMP%] {\n  margin-top: 12px; padding: 8px 12px;\n  background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);\n  border-radius: 8px; font-size: 12px; font-weight: 500;\n  color: #a5b4fc; text-align: center;\n}\n\n\n\n.meeting-type-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px; border-radius: 100px;\n  font-size: 11px; font-weight: 600; text-transform: capitalize;\n  color: white;\n}\n.meeting-type-badge.team[_ngcontent-%COMP%] { background: linear-gradient(135deg, #6366f1, #8b5cf6); }\n.meeting-type-badge.client[_ngcontent-%COMP%] { background: linear-gradient(135deg, #0ea5e9, #06b6d4); }\n.meeting-type-badge.technical[_ngcontent-%COMP%] { background: linear-gradient(135deg, #f59e0b, #d97706); }\n.meeting-type-badge.review[_ngcontent-%COMP%] { background: linear-gradient(135deg, #10b981, #059669); }\n\n\n\n\n.user-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n\n\n\n.projects-list[_ngcontent-%COMP%] { padding: 0; }\n.project-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 16px;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n  cursor: pointer; transition: background 0.2s;\n}\n.project-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.project-item[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n.project-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.project-name[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 6px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.project-meta[_ngcontent-%COMP%] { display: flex; gap: 14px; font-size: 12px; color: #64748b; }\n.team-size[_ngcontent-%COMP%], .deadline[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; }\n.project-progress[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; width: 140px; flex-shrink: 0; }\n.project-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] { flex: 1; }\n.progress-text[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; width: 36px; text-align: right; flex-shrink: 0; }\n\n\n\n.tasks-list[_ngcontent-%COMP%] { padding: 0; }\n.task-checkbox[_ngcontent-%COMP%] { flex-shrink: 0; }\n.task-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] { width: 16px; height: 16px; accent-color: #6366f1; cursor: pointer; }\n.task-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.task-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 4px 0; }\n.task-description[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; margin: 0 0 6px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.task-meta[_ngcontent-%COMP%] { display: flex; gap: 12px; font-size: 11px; color: #64748b; flex-wrap: wrap; }\n.assignee[_ngcontent-%COMP%], .due-date[_ngcontent-%COMP%], .submit-time[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; }\n\n.task-priority[_ngcontent-%COMP%] { flex-shrink: 0; }\n.priority-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px; border-radius: 100px;\n  font-size: 11px; font-weight: 600; text-transform: capitalize; color: white;\n}\n\n.task-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; flex-shrink: 0; }\n.btn-action[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border-radius: 8px; border: none;\n  display: flex; align-items: center; justify-content: center;\n  cursor: pointer; font-size: 13px; transition: all 0.2s;\n}\n.btn-view[_ngcontent-%COMP%]   { background: rgba(14,165,233,0.1);  color: #38bdf8; }\n.btn-approve[_ngcontent-%COMP%] { background: rgba(16,185,129,0.1); color: #34d399; }\n.btn-reject[_ngcontent-%COMP%]  { background: rgba(239,68,68,0.1);  color: #f87171; }\n.btn-view[_ngcontent-%COMP%]:hover   { background: rgba(14,165,233,0.2); }\n.btn-approve[_ngcontent-%COMP%]:hover { background: rgba(16,185,129,0.2); }\n.btn-reject[_ngcontent-%COMP%]:hover  { background: rgba(239,68,68,0.2); }\n\n.pending-count[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.15); color: #a5b4fc;\n  border: 1px solid rgba(99,102,241,0.2);\n  padding: 2px 10px; border-radius: 100px; font-size: 12px; font-weight: 600;\n}\n\n.no-tasks[_ngcontent-%COMP%] { text-align: center; padding: 40px 20px; color: #64748b; }\n.no-tasks[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 36px; display: block; margin-bottom: 12px; color: #34d399; opacity: 0.7; }\n.no-tasks[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 16px; color: #94a3b8; margin-bottom: 6px; }\n.no-tasks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 13px; }\n\n\n\n.team-section[_ngcontent-%COMP%] { margin-top: 20px; }\n.performance-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] { gap: 12px; }\n.period-selector[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px; padding: 6px 12px; color: #94a3b8;\n  font-size: 13px; outline: none; cursor: pointer;\n}\n.performance-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; padding: 20px;\n}\n.team-member[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 14px;\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);\n  border-radius: 12px; padding: 16px; transition: all 0.2s;\n}\n.team-member[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.07); border-color: rgba(99,102,241,0.2); }\n.member-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }\n.member-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.member-name[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 6px 0; }\n.member-stats[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 3px; }\n.stat-item[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; display: flex; align-items: center; gap: 5px; }\n.member-efficiency[_ngcontent-%COMP%] { flex-shrink: 0; position: relative; }\n.efficiency-circle[_ngcontent-%COMP%] { position: relative; display: flex; align-items: center; justify-content: center; }\n.efficiency-text[_ngcontent-%COMP%] {\n  position: absolute; font-size: 11px; font-weight: 700; color: #f8fafc;\n}\n\n[_nghost-%COMP%] { display: block; height: 100vh; overflow: hidden; }\n*[_ngcontent-%COMP%] { box-sizing: border-box; margin: 0; padding: 0; }\n\n\n\n.erp-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: #0f172a;\n  color: #f8fafc;\n  font-family: 'Inter', sans-serif;\n}\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  flex-shrink: 0;\n  background: rgba(15,23,42,0.95);\n  border-right: 1px solid rgba(255,255,255,0.08);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  backdrop-filter: blur(12px);\n}\n\n.sidebar-logo[_ngcontent-%COMP%] {\n  padding: 24px 20px 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  flex-shrink: 0;\n}\n\n.logo-hex[_ngcontent-%COMP%] {\n  width: 34px; height: 34px;\n  background: linear-gradient(135deg, #6366f1, #0ea5e9);\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  color: #fff; font-size: 16px; flex-shrink: 0;\n  box-shadow: 0 0 16px rgba(99,102,241,0.4);\n}\n\n.logo-name[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-weight: 800; font-size: 18px;\n  letter-spacing: -0.03em; color: #f8fafc;\n}\n\n.logo-badge[_ngcontent-%COMP%] {\n  font-size: 9px; color: #6366f1;\n  background: rgba(99,102,241,0.15);\n  border: 1px solid rgba(99,102,241,0.3);\n  padding: 2px 7px; border-radius: 20px; margin-left: 2px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] { padding: 16px 10px; flex: 1; }\n\n.nav-group-label[_ngcontent-%COMP%] {\n  font-size: 10px; letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #475569;\n  padding: 16px 10px 8px; font-weight: 600;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 12px; border-radius: 10px;\n  margin-bottom: 2px; cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4,0,0.2,1);\n  color: #94a3b8;\n  font-size: 14px; font-weight: 500;\n  border: 1px solid transparent;\n  position: relative;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.05);\n  color: #f8fafc;\n}\n\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.15);\n  color: #a5b4fc;\n  border-color: rgba(99,102,241,0.2);\n}\n\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute; left: 0; top: 50%;\n  transform: translateY(-50%);\n  width: 3px; height: 60%;\n  background: linear-gradient(180deg, #6366f1, #0ea5e9);\n  border-radius: 0 4px 4px 0;\n}\n\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 15px; width: 18px; text-align: center; }\n\n.nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: rgba(239,68,68,0.2);\n  color: #f87171;\n  font-size: 10px; padding: 2px 7px;\n  border-radius: 100px; font-weight: 600;\n}\n\n.sidebar-bottom[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 12px 10px;\n  border-top: 1px solid rgba(255,255,255,0.06);\n  flex-shrink: 0;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 12px; border-radius: 10px; cursor: pointer;\n  transition: background 0.2s;\n}\n.user-card[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.05); }\n.user-name[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #f8fafc; }\n.user-role[_ngcontent-%COMP%] { font-size: 11px; color: #64748b; }\n\n.avatar[_ngcontent-%COMP%] {\n  width: 34px; height: 34px; border-radius: 50%;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; font-weight: 600; flex-shrink: 0; color: #fff;\n}\n.grad-purple[_ngcontent-%COMP%] { background: linear-gradient(135deg,#6366f1,#a855f7); }\n.grad-teal[_ngcontent-%COMP%]   { background: linear-gradient(135deg,#0ea5e9,#2dd4bf); }\n.grad-amber[_ngcontent-%COMP%]  { background: linear-gradient(135deg,#f59e0b,#ef4444); }\n.grad-rose[_ngcontent-%COMP%]   { background: linear-gradient(135deg,#f43f5e,#f59e0b); }\n.grad-blue[_ngcontent-%COMP%]   { background: linear-gradient(135deg,#0ea5e9,#6366f1); }\n\n.tb-btn[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 8px;\n  border: 1px solid rgba(255,255,255,0.1);\n  background: rgba(255,255,255,0.05);\n  color: #94a3b8;\n  cursor: pointer; display: flex;\n  align-items: center; justify-content: center;\n  transition: all 0.2s; font-size: 15px;\n  position: relative;\n}\n.tb-btn[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.1); color: #f8fafc; }\n\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239,68,68,0.15) !important;\n  color: #f87171 !important;\n  border-color: rgba(239,68,68,0.2) !important;\n}\n\n\n\n.main-area[_ngcontent-%COMP%] {\n  flex: 1; display: flex;\n  flex-direction: column; overflow: hidden;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  height: 60px; flex-shrink: 0;\n  background: rgba(15,23,42,0.8);\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  display: flex; align-items: center;\n  padding: 0 28px; gap: 12px;\n  backdrop-filter: blur(12px);\n}\n\n.tb-title[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-weight: 700; font-size: 18px;\n  letter-spacing: -0.02em; color: #f8fafc;\n}\n.tb-sub[_ngcontent-%COMP%] { font-size: 13px; color: #64748b; margin-left: 4px; }\n.tb-right[_ngcontent-%COMP%] { margin-left: auto; display: flex; align-items: center; gap: 10px; }\n\n.tb-search[_ngcontent-%COMP%] {\n  height: 36px;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px; padding: 0 14px;\n  color: #f8fafc;\n  font-family: 'Inter', sans-serif;\n  font-size: 14px; width: 200px; outline: none;\n  transition: all 0.3s;\n}\n.tb-search[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  background: rgba(99,102,241,0.08);\n  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);\n  width: 240px;\n}\n.tb-search[_ngcontent-%COMP%]::placeholder { color: #475569; }\n\n.notif-btn[_ngcontent-%COMP%]   .notif-dot[_ngcontent-%COMP%] {\n  position: absolute; top: 7px; right: 7px;\n  width: 6px; height: 6px;\n  background: #ef4444; border-radius: 50%;\n  border: 1px solid #0f172a;\n}\n\n\n\n.content-area[_ngcontent-%COMP%] {\n  flex: 1; overflow-y: auto; padding: 28px;\n  background: #0f172a;\n}\n\n.section[_ngcontent-%COMP%] { display: block; }\n.fade-in[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_fadeUp 0.4s cubic-bezier(0.4,0,0.2,1) both; }\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(16px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n.stats-section[_ngcontent-%COMP%] { margin-bottom: 28px; }\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px;\n  padding: 22px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);\n  backdrop-filter: blur(8px);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.07);\n  border-color: rgba(99,102,241,0.3);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.3);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px; height: 48px;\n  border-radius: 12px;\n  display: flex; align-items: center;\n  justify-content: center;\n  font-size: 20px; color: white; flex-shrink: 0;\n}\n.stat-icon.blue[_ngcontent-%COMP%]   { background: linear-gradient(135deg,#3b82f6,#1d4ed8); box-shadow: 0 4px 12px rgba(59,130,246,0.3); }\n.stat-icon.green[_ngcontent-%COMP%]  { background: linear-gradient(135deg,#10b981,#059669); box-shadow: 0 4px 12px rgba(16,185,129,0.3); }\n.stat-icon.purple[_ngcontent-%COMP%] { background: linear-gradient(135deg,#8b5cf6,#6366f1); box-shadow: 0 4px 12px rgba(139,92,246,0.3); }\n.stat-icon.orange[_ngcontent-%COMP%] { background: linear-gradient(135deg,#f59e0b,#d97706); box-shadow: 0 4px 12px rgba(245,158,11,0.3); }\n\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px; font-weight: 700;\n  color: #f8fafc; margin: 0 0 4px 0;\n  font-family: 'Syne', sans-serif;\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px; color: #64748b; margin: 0;\n  text-transform: uppercase; letter-spacing: 0.06em; font-weight: 500;\n}\n.stat-number[_ngcontent-%COMP%] { font-size: 22px; }\n.stat-label[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; }\n\n\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n@media (max-width: 1200px) { .content-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n.card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px;\n  overflow: hidden;\n  backdrop-filter: blur(8px);\n  transition: border-color 0.3s;\n}\n.card[_ngcontent-%COMP%]:hover { border-color: rgba(99,102,241,0.2); }\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  display: flex; align-items: center;\n  justify-content: space-between;\n}\n.card-title[_ngcontent-%COMP%] { font-size: 16px; font-weight: 600; color: #f8fafc; margin: 0; }\n\n.view-all-btn[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.1);\n  border: 1px solid rgba(99,102,241,0.2);\n  color: #a5b4fc;\n  padding: 6px 14px; border-radius: 8px;\n  font-size: 13px; font-weight: 500; cursor: pointer;\n  transition: all 0.2s;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99,102,241,0.2);\n  border-color: rgba(99,102,241,0.4);\n}\n\n\n\n.table-container[_ngcontent-%COMP%] { overflow-x: auto; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\nth[_ngcontent-%COMP%] {\n  text-align: left; padding: 12px 20px;\n  font-size: 11px; font-weight: 600; color: #64748b;\n  text-transform: uppercase; letter-spacing: 0.08em;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  background: rgba(255,255,255,0.02);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 14px 20px; font-size: 14px; color: #cbd5e1;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n  transition: background 0.2s;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); }\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\n\n\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center;\n  padding: 3px 10px; border-radius: 100px;\n  font-size: 11px; font-weight: 600;\n}\n.badge-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }\n.badge-warning[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }\n.badge-danger[_ngcontent-%COMP%]  { background: rgba(239,68,68,0.15);  color: #f87171; border: 1px solid rgba(239,68,68,0.2); }\n.badge-info[_ngcontent-%COMP%]    { background: rgba(14,165,233,0.15); color: #38bdf8; border: 1px solid rgba(14,165,233,0.2); }\n.badge-purple[_ngcontent-%COMP%]  { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }\n\n\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n  color: white; border: none;\n  padding: 10px 20px; border-radius: 10px;\n  font-size: 14px; font-weight: 600; cursor: pointer;\n  transition: all 0.3s;\n  display: inline-flex; align-items: center; gap: 8px;\n  box-shadow: 0 4px 12px rgba(99,102,241,0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(99,102,241,0.4);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.06);\n  color: #cbd5e1; border: 1px solid rgba(255,255,255,0.1);\n  padding: 10px 20px; border-radius: 10px;\n  font-size: 14px; font-weight: 500; cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex; align-items: center; gap: 8px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.1);\n  color: #f8fafc;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  background: rgba(239,68,68,0.15);\n  color: #f87171; border: 1px solid rgba(239,68,68,0.2);\n  padding: 8px 14px; border-radius: 8px;\n  font-size: 13px; font-weight: 500; cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-danger[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.25); }\n\n\n\n.form-group[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block; font-size: 13px; font-weight: 500;\n  color: #94a3b8; margin-bottom: 8px;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px;\n  padding: 10px 14px;\n  color: #f8fafc;\n  font-size: 14px; font-family: 'Inter', sans-serif;\n  outline: none;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  background: rgba(99,102,241,0.08);\n  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);\n}\n.form-control[_ngcontent-%COMP%]::placeholder, .form-textarea[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1e293b; color: #f8fafc; }\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.7);\n  backdrop-filter: blur(8px);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; } to { opacity: 1; } }\n\n.modal-container[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 20px;\n  padding: 32px;\n  width: 560px; max-width: 95vw;\n  max-height: 90vh; overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4,0,0.2,1);\n  box-shadow: 0 24px 48px rgba(0,0,0,0.5);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { opacity: 0; transform: translateY(24px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 20px; font-weight: 700; color: #f8fafc;\n}\n.modal-close[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 8px;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  color: #94a3b8; cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 18px; transition: all 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.15); color: #f87171; }\n\n\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px; background: rgba(255,255,255,0.08);\n  border-radius: 3px; overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #6366f1, #0ea5e9);\n  border-radius: 3px;\n  transition: width 0.6s cubic-bezier(0.4,0,0.2,1);\n}\n\n\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  margin-bottom: 24px;\n}\n.section-title-text[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 22px; font-weight: 700; color: #f8fafc;\n}\n.section-subtitle[_ngcontent-%COMP%] { font-size: 14px; color: #64748b; margin-top: 2px; }\n\n\n\n.project-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 22px;\n  transition: all 0.3s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99,102,241,0.25);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.25);\n}\n\n\n\n.task-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 14px;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(255,255,255,0.04);\n  transition: background 0.2s;\n}\n.task-item[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.03); }\n.task-item[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar { width: 5px; height: 5px; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-track { background: transparent; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }\n\n\n\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px; border-radius: 10px;\n  display: flex; align-items: center; gap: 10px;\n  margin-bottom: 16px; font-size: 14px;\n}\n.alert-danger[_ngcontent-%COMP%] { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #f87171; }\n.alert-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); color: #34d399; }\n.alert-info[_ngcontent-%COMP%] { background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.2); color: #38bdf8; }\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center; padding: 60px 20px; color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 48px; margin-bottom: 16px; opacity: 0.4; }\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; color: #94a3b8; margin-bottom: 8px; }\n\n\n\n.file-upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed rgba(99,102,241,0.3);\n  border-radius: 12px; padding: 32px;\n  text-align: center; cursor: pointer;\n  transition: all 0.3s; color: #64748b;\n}\n.file-upload-area[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: rgba(99,102,241,0.05);\n  color: #a5b4fc;\n}\n\n\n\n.calendar-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  padding: 8px; border-radius: 8px; min-height: 72px;\n  border: 1px solid rgba(255,255,255,0.05);\n  transition: all 0.2s; cursor: pointer;\n}\n.calendar-day[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.04); }\n.calendar-day.today[_ngcontent-%COMP%] {\n  border-color: rgba(99,102,241,0.4);\n  background: rgba(99,102,241,0.08);\n}\n\n\n\n.tag[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center;\n  padding: 2px 8px; border-radius: 6px;\n  font-size: 11px; font-weight: 500;\n  background: rgba(255,255,255,0.06);\n  color: #94a3b8; margin-right: 4px;\n}\n\n\n\n.divider[_ngcontent-%COMP%] { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 16px 0; }\n\n\n\n@media (max-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] { width: 200px; }\n  .content-area[_ngcontent-%COMP%] { padding: 20px; }\n}\n\n\n\n.analytics-header[_ngcontent-%COMP%], .gantt-section-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  margin-bottom: 24px;\n}\n\n.analytics-controls[_ngcontent-%COMP%], .gantt-controls[_ngcontent-%COMP%] {\n  display: flex; gap: 12px;\n}\n\n.project-select[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px; padding: 8px 14px; color: #cbd5e1;\n  font-size: 13px; font-family: 'Inter', sans-serif; outline: none;\n  min-width: 200px;\n}\n\n.project-select[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15);\n}\n\n.project-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n\n.analytics-content[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 24px;\n}\n\n.analytics-overview[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px;\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px; padding: 20px; display: flex; align-items: center; gap: 16px;\n  transition: all 0.3s;\n}\n\n.kpi-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99,102,241,0.3); transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.2);\n}\n\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 48px; height: 48px; border-radius: 12px; display: flex;\n  align-items: center; justify-content: center; font-size: 20px;\n}\n\n.kpi-icon.blue[_ngcontent-%COMP%] { background: rgba(59,130,246,0.15); color: #3b82f6; }\n.kpi-icon.green[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: #10b981; }\n.kpi-icon.orange[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: #f59e0b; }\n.kpi-icon.purple[_ngcontent-%COMP%] { background: rgba(139,92,246,0.15); color: #8b5cf6; }\n\n.kpi-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px; font-weight: 700; color: #f8fafc; margin: 0 0 4px 0;\n}\n\n.kpi-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px; color: #64748b; margin: 0;\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.02); border-radius: 16px;\n  padding: 24px; border: 1px solid rgba(255,255,255,0.05);\n}\n\n.subsection-title[_ngcontent-%COMP%] {\n  font-size: 16px; font-weight: 600; color: #f8fafc; margin: 0 0 16px 0;\n}\n\n.workload-grid[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;\n}\n\n.workload-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px;\n}\n\n.workload-card[_ngcontent-%COMP%]   .employee-avatar[_ngcontent-%COMP%] {\n  width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white; display: flex; align-items: center; justify-content: center;\n  font-weight: 600; font-size: 14px; flex-shrink: 0;\n}\n\n.workload-card[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.workload-card[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 4px 0;\n}\n\n.workload-card[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px; color: #64748b; margin: 0 0 8px 0;\n}\n\n.workload-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;\n  overflow: hidden;\n}\n\n.workload-card[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\n  border-radius: 3px; transition: width 0.3s;\n}\n\n.attention-list[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 12px;\n}\n\n.attention-item[_ngcontent-%COMP%] {\n  background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.2);\n  border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px;\n}\n\n.attention-icon[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 50%; background: rgba(245,158,11,0.15);\n  color: #f59e0b; display: flex; align-items: center; justify-content: center;\n  font-size: 16px; flex-shrink: 0;\n}\n\n.attention-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.attention-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px; font-weight: 600; color: #f8fafc; margin: 0 0 4px 0;\n}\n\n.attention-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px; color: #64748b; margin: 0 0 4px 0;\n}\n\n.attention-reason[_ngcontent-%COMP%] {\n  font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 4px;\n  background: rgba(245,158,11,0.15); color: #f59e0b;\n}\n\n.no-selection-message[_ngcontent-%COMP%], .no-data-message[_ngcontent-%COMP%] {\n  text-align: center; padding: 60px 20px; color: #64748b;\n}\n\n.no-selection-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .no-data-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px; margin-bottom: 16px; opacity: 0.4; display: block;\n}\n\n.no-selection-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .no-data-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px; margin: 0;\n}\n\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] { display: none; }\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL21hbmFnZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYSxFQUFFLG1CQUFtQixFQUFFLDhCQUE4QjtFQUNsRSxtQkFBbUI7QUFDckI7QUFDQSxrQkFBa0IsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7QUFDbEYsbUJBQW1CLGFBQWEsRUFBRSxTQUFTLEVBQUU7QUFDN0M7RUFDRSxrQ0FBa0MsRUFBRSx1Q0FBdUM7RUFDM0Usa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsY0FBYztFQUNyRCxlQUFlLEVBQUUsK0JBQStCLEVBQUUsYUFBYTtBQUNqRTtBQUNBO0VBQ0UscUJBQXFCLEVBQUUsMkNBQTJDO0FBQ3BFO0FBQ0Esd0JBQXdCLG1CQUFtQixFQUFFO0FBQzdDLDZCQUE2QixjQUFjLEVBQUU7O0FBRTdDLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWEsRUFBRSw0REFBNEQsRUFBRSxTQUFTO0FBQ3hGO0FBQ0E7RUFDRSxrQ0FBa0MsRUFBRSx3Q0FBd0M7RUFDNUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLG9CQUFvQjtBQUMxRDtBQUNBO0VBQ0Usa0NBQWtDLEVBQUUsMkJBQTJCO0VBQy9ELHVDQUF1QztBQUN6QztBQUNBLGtCQUFrQixhQUFhLEVBQUUsdUJBQXVCLEVBQUUsOEJBQThCLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFO0FBQzFILGlCQUFpQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRTtBQUMvRTtFQUNFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO0FBQzVGO0FBQ0EsaUJBQWlCLGlDQUFpQyxFQUFFLGNBQWMsRUFBRSxzQ0FBc0MsRUFBRTtBQUM1RyxrQ0FBa0MsaUNBQWlDLEVB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QUFjLEVBQUUsaUJBQWlCO0FBQ3RFOztBQUVBO0VBQ0UsZUFBZSxFQUFFLGNBQWMsRUFBRSxpQkFBaUI7QUFDcEQ7O0FBRUE7RUFDRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQ3ZFLGlDQUFpQyxFQUFFLGNBQWM7QUFDbkQ7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxjQUFjO0FBQ3hEOztBQUVBO0VBQ0UsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxjQUFjO0FBQ3BFOztBQUVBO0VBQ0UsZUFBZSxFQUFFLFNBQVM7QUFDNUI7O0FBRUE7RUFDRSxXQUFXLGFBQWEsRUFBRTtFQUMxQixjQUFjLDhCQUE4QixFQUFFO0FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1TeW5lOndnaHRANjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8qIMOiwpXCkMOiwpXCkCBTRUNUSU9OIEhFQURFUlMgw6LClcKQw6LClcKQICovXG4ucHJvamVjdHMtaGVhZGVyLCAua2FuYmFuLWhlYWRlciwgLnVzZXJzLWhlYWRlciwgLm1lZXRpbmdzLWhlYWRlciwgLmRvY3VtZW50cy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uaGVhZGVyLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgfVxuLmZpbHRlci1jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgfVxuLmZpbHRlci1zZWxlY3QsIC5zZWFyY2gtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogOHB4IDE0cHg7IGNvbG9yOiAjY2JkNWUxO1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7IG91dGxpbmU6IG5vbmU7XG59XG4uZmlsdGVyLXNlbGVjdDpmb2N1cywgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzYzNjZmMTsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoOTksMTAyLDI0MSwwLjE1KTtcbn1cbi5maWx0ZXItc2VsZWN0IG9wdGlvbiB7IGJhY2tncm91bmQ6ICMxZTI5M2I7IH1cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICM0NzU1Njk7IH1cblxuLyogw6LClcKQw6LClcKQIFBST0pFQ1RTIEdSSUQgw6LClcKQw6LClcKQICovXG4ucHJvamVjdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgZ2FwOiAxOHB4O1xufVxuLnByb2plY3QtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDIycHg7IHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMyk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuLnByb2plY3QtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAxOHB4OyB9XG4ucHJvamVjdC10aXRsZSB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMDsgfVxuLnByb2plY3Qtc3RhdHVzIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDEwMHB4OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGZsZXgtc2hyaW5rOiAwO1xufVxuLnN0YXR1cy1hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xNSk7IGNvbG9yOiAjMzRkMzk5OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTsgfVxuLnN0YXR1cy1vbl9ob2xkLCAuc3RhdHVzLXBhdXNlZCB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjE1KTsgY29sb3I6ICNmYmJmMjQ7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LDE1OCwxMSwwLjIpOyB9XG4uc3RhdHVzLWNvbXBsZXRlZCB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6ICNhNWI0ZmM7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjIpOyB9XG4ucHJvamVjdC1ib2R5IHt9XG4ucHJvZ3Jlc3MtaW5mbyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4ucHJvZ3Jlc3MtbGFiZWwgeyBjb2xvcjogIzY0NzQ4YjsgfVxuLnByb2dyZXNzLXZhbHVlIHsgY29sb3I6ICM5NGEzYjg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5wcm9qZWN0LW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDE2cHg7IG1hcmdpbi10b3A6IDE0cHg7IH1cbi5tZXRhLWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuLm1ldGEtaXRlbSBpIHsgY29sb3I6ICM0NzU1Njk7IH1cbi5wcm9qZWN0LWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgbWFyZ2luLXRvcDogMTZweDsgfVxuLnByb2plY3QtYWN0aW9ucyAuYnRuLWFjdGlvbiB7XG4gIGZsZXg6IDE7IHBhZGRpbmc6IDhweDsgYm9yZGVyLXJhZGl1czogOHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7IGNvbG9yOiAjOTRhM2I4OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5wcm9qZWN0LWFjdGlvbnMgLmJ0bi1hY3Rpb246aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IGNvbG9yOiAjZjhmYWZjOyB9XG5cbi8qIMOiwpXCkMOiwpXCkCBLQU5CQU4gQk9BUkQgw6LClcKQw6LClcKQICovXG4udmlldy1jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNHB4OyB9XG4udmlldy1idG4ge1xuICB3aWR0aDogMzRweDsgaGVpZ2h0OiAzNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgY29sb3I6ICM2NDc0OGI7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMTVweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4udmlldy1idG4uYWN0aXZlLCAudmlldy1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiAjYTViNGZjOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjIpOyB9XG4ua2FuYmFuLWJvYXJkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgZ2FwOiAxNnB4OyB9XG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7IC5rYW5iYW4tYm9hcmQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSB9XG4ua2FuYmFuLWNvbHVtbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7IG1pbi1oZWlnaHQ6IDMwMHB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbHVtbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE0cHggMTZweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG59XG4uY29sdW1uLXRpdGxlIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzk0YTNiODsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTsgfVxuLmNvbHVtbi1jb3VudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7IGNvbG9yOiAjNjQ3NDhiO1xuICBwYWRkaW5nOiAycHggOHB4OyBib3JkZXItcmFkaXVzOiAxMDBweDsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbHVtbi10YXNrcyB7IGZsZXg6IDE7IHBhZGRpbmc6IDEycHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgbWluLWhlaWdodDogMTAwcHg7IH1cbi5jb2x1bW4tdGFza3MuZHJhZy1vdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDYpOyBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG4udGFzay1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDsgcGFkZGluZzogMTRweDsgY3Vyc29yOiBncmFiOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi50YXNrLWNhcmQ6aG92ZXIgeyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjI1KTsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMjUpOyB9XG4udGFzay1jYXJkLmNvbXBsZXRlZCB7IG9wYWNpdHk6IDAuNTU7IH1cbi50YXNrLWNhcmQ6YWN0aXZlIHsgY3Vyc29yOiBncmFiYmluZzsgfVxuLnRhc2stcHJpb3JpdHkge1xuICBoZWlnaHQ6IDNweDsgYm9yZGVyLXJhZGl1czogMnB4OyBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByaW9yaXR5LWhpZ2ggeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlZjQ0NDQsICNmOTczMTYpOyB9XG4ucHJpb3JpdHktbWVkaXVtIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjU5ZTBiLCAjZWFiMzA4KTsgfVxuLnByaW9yaXR5LWxvdyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzEwYjk4MSwgIzA2YjZkNCk7IH1cbi50YXNrLWNhcmQgLnRhc2stdGl0bGUgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDAgMCA2cHggMDsgbGluZS1oZWlnaHQ6IDEuNDsgfVxuLnRhc2stY2FyZCAudGFzay1kZXNjcmlwdGlvbiB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMCAwIDEwcHggMDsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuLnRhc2stY2FyZCAudGFzay1tZXRhIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4udGFzay1hc3NpZ25lZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOTRhM2I4OyB9XG4udGFzay1kdWUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuLnRhc2stdGFncyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNXB4OyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbi50YXNrLXRhZyB7XG4gIHBhZGRpbmc6IDJweCA4cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogIzY0NzQ4YjsgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50YXNrLWNhcmQgLnRhc2stYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNnB4OyB9XG4uYnRuLWVkaXQsIC5idG4tZGVsZXRlIHtcbiAgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgYm9yZGVyLXJhZGl1czogN3B4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpOyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDEycHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmJ0bi1lZGl0IHsgY29sb3I6ICM5NGEzYjg7IH1cbi5idG4tZWRpdDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6ICNhNWI0ZmM7IH1cbi5idG4tZGVsZXRlIHsgY29sb3I6ICM5NGEzYjg7IH1cbi5idG4tZGVsZXRlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xNSk7IGNvbG9yOiAjZjg3MTcxOyB9XG4udGFzay1jYXJkIC50YXNrLXByb2dyZXNzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbi50YXNrLWNhcmQgLnRhc2stcHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7IGZsZXg6IDE7IH1cbi50YXNrLWNvbXBsZXRlZCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNXB4OyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjMzRkMzk5OyB9XG5cbi8qIMOiwpXCkMOiwpXCkCBVU0VSUyBTRUNUSU9OIMOiwpXCkMOiwpXCkCAqL1xuLnVzZXJzLXN0YXRzIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxNHB4OyBtYXJnaW4tYm90dG9tOiAyNHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cbi5zdGF0LWNhcmQtc21hbGwge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDE0cHggMThweDsgZmxleDogMTsgbWluLXdpZHRoOiAxNTBweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uc3RhdC1jYXJkLXNtYWxsOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4yKTsgfVxuLnN0YXQtaWNvbi1zbWFsbCB7XG4gIHdpZHRoOiAzOHB4OyBoZWlnaHQ6IDM4cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgZmxleC1zaHJpbms6IDA7XG59XG4uc3RhdC1pbmZvIGg0IHsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgMnB4IDA7IH1cbi5zdGF0LWluZm8gcCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMDsgfVxuLnVzZXJzLXRhYmxlLWNvbnRhaW5lciB7IG92ZXJmbG93LXg6IGF1dG87IGJvcmRlci1yYWRpdXM6IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IH1cbi51c2Vycy10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG4udXNlcnMtdGFibGUgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyBwYWRkaW5nOiAxM3B4IDE4cHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2NDc0OGI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDIpO1xufVxuLnVzZXJzLXRhYmxlIHRkIHsgcGFkZGluZzogMTRweCAxOHB4OyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjY2JkNWUxOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgfVxuLnVzZXJzLXRhYmxlIHRyOmxhc3QtY2hpbGQgdGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4udXNlcnMtdGFibGUgdHI6aG92ZXIgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG4udXNlci1jZWxsIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyB9XG4udXNlci1jZWxsIC51c2VyLWluZm8geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4udXNlci1jZWxsIC51c2VyLW5hbWUgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyB9XG4udXNlci1jZWxsIC51c2VyLWlkIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzQ3NTU2OTsgfVxuLnJvbGUtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMDBweDsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5yb2xlLW1hbmFnZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiAjYTViNGZjOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTsgfVxuLnJvbGUtZW1wbG95ZWUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xNSk7IGNvbG9yOiAjMzhiZGY4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0LDE2NSwyMzMsMC4yKTsgfVxuLnJvbGUtYWRtaW4geyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiAjZmJiZjI0OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNTgsMTEsMC4yKTsgfVxuLnN0YXR1cy1iYWRnZSB7IHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMDBweDsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyB9XG4uc3RhdHVzLWFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjE1KTsgY29sb3I6ICMzNGQzOTk7IH1cbi5zdGF0dXMtaW5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjE1KTsgY29sb3I6ICNmODcxNzE7IH1cbi5lbWFpbC1saW5rIHsgY29sb3I6ICM2MzY2ZjE7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZm9udC1zaXplOiAxM3B4OyB9XG4uZW1haWwtbGluazpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4uYWN0aW9uLWJ1dHRvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgfVxuLmJ0bi1pY29uIHtcbiAgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgYm9yZGVyLXJhZGl1czogOHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpOyBjb2xvcjogIzk0YTNiODsgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxM3B4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5idG4taWNvbjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgY29sb3I6ICNmOGZhZmM7IH1cbi5idG4taWNvbi5kYW5nZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjE1KTsgY29sb3I6ICNmODcxNzE7IGJvcmRlci1jb2xvcjogcmdiYSgyMzksNjgsNjgsMC4yKTsgfVxuXG4vKiDDosKVwpDDosKVwpAgTUVFVElOR1MgU0VDVElPTiDDosKVwpDDosKVwpAgKi9cbi5tZWV0aW5ncy1jYWxlbmRhciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDIwcHg7IG1hcmdpbi1ib3R0b206IDI0cHg7IH1cbi5jYWxlbmRhci1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbi5jYWxlbmRhci10aXRsZSB7IGZvbnQtZmFtaWx5OiAnU3luZScsc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYzsgZmxleDogMTsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4uY2FsZW5kYXItbmF2LCAuY2FsZW5kYXItdG9kYXkge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgY29sb3I6ICM5NGEzYjg7IGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMTRweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uY2FsZW5kYXItbmF2OmhvdmVyLCAuY2FsZW5kYXItdG9kYXk6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiAjYTViNGZjOyB9XG4uY2FsZW5kYXItZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7IGdhcDogM3B4OyB9XG4uY2FsZW5kYXItZGF5LWhlYWRlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNnB4OyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjNDc1NTY5OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNmVtOyB9XG4uY2FsZW5kYXItZGF5IHtcbiAgbWluLWhlaWdodDogNjhweDsgcGFkZGluZzogNnB4OyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhbGVuZGFyLWRheS50b2RheSB7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuNCk7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA4KTsgfVxuLmNhbGVuZGFyLWRheS5oYXMtbWVldGluZyB7IGN1cnNvcjogcG9pbnRlcjsgfVxuLmNhbGVuZGFyLWRheS5oYXMtbWVldGluZzpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7IH1cbi5kYXktbnVtYmVyIHsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjsgfVxuLmNhbGVuZGFyLWRheS50b2RheSAuZGF5LW51bWJlciB7IGNvbG9yOiAjYTViNGZjOyB9XG4ubWVldGluZy1pbmRpY2F0b3JzIHsgZGlzcGxheTogZmxleDsgZ2FwOiAzcHg7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogNHB4OyB9XG4ubWVldGluZy1pbmRpY2F0b3IgeyB3aWR0aDogOHB4OyBoZWlnaHQ6IDhweDsgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4ubW9yZS1pbmRpY2F0b3JzIHsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuLm1lZXRpbmctY291bnQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNHB4OyByaWdodDogNnB4OyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjNjM2NmYxOyB9XG4udXBjb21pbmctbWVldGluZ3MgeyBtYXJnaW4tdG9wOiA4cHg7IH1cbi51cGNvbWluZy1tZWV0aW5ncyAuc2VjdGlvbi10aXRsZSB7IGZvbnQtZmFtaWx5OiAnU3luZScsc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuLm1lZXRpbmdzLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEwcHg7IH1cbi5tZWV0aW5nLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4OyBwYWRkaW5nOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM2MzY2ZjE7XG59XG4ubWVldGluZy1jYXJkLm1lZXRpbmctdGVhbSB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjNjM2NmYxOyB9XG4ubWVldGluZy1jYXJkLm1lZXRpbmctY2xpZW50IHsgYm9yZGVyLWxlZnQtY29sb3I6ICMwZWE1ZTk7IH1cbi5tZWV0aW5nLWNhcmQubWVldGluZy1vbmVfb25fb25lIHsgYm9yZGVyLWxlZnQtY29sb3I6ICNhODU1Zjc7IH1cbi5tZWV0aW5nLWNhcmQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyB9XG4ubWVldGluZy10aW1lIHsgdGV4dC1hbGlnbjogY2VudGVyOyBmbGV4LXNocmluazogMDsgbWluLXdpZHRoOiA1NnB4OyB9XG4ubWVldGluZy10aW1lIC50aW1lIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IH1cbi5tZWV0aW5nLXRpbWUgLmR1cmF0aW9uIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi10b3A6IDJweDsgfVxuLm1lZXRpbmctaW5mbyB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLm1lZXRpbmctdGl0bGUgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDAgMCA2cHggMDsgfVxuLm1lZXRpbmctbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTRweDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgZmxleC13cmFwOiB3cmFwOyB9XG4ubWVldGluZy1sb2NhdGlvbiwgLm1lZXRpbmctZGF0ZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNXB4OyB9XG4ubWVldGluZy1wYXJ0aWNpcGFudHMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IG1hcmdpbi10b3A6IDhweDsgfVxuLnBhcnRpY2lwYW50LWF2YXRhcnMgeyBkaXNwbGF5OiBmbGV4OyB9XG4ucGFydGljaXBhbnQtYXZhdGFycyAuYXZhdGFyIHsgbWFyZ2luLWxlZnQ6IC02cHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGZvbnQtc2l6ZTogMTBweDsgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTsgfVxuLnBhcnRpY2lwYW50LWF2YXRhcnMgLmF2YXRhcjpmaXJzdC1jaGlsZCB7IG1hcmdpbi1sZWZ0OiAwOyB9XG4ubW9yZS1jb3VudCB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IH1cbi5wYXJ0aWNpcGFudC1jb3VudCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IH1cbi5tZWV0aW5nLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgZmxleC1zaHJpbms6IDA7IH1cblxuLyogw6LClcKQw6LClcKQIERPQ1VNRU5UUyBTRUNUSU9OIMOiwpXCkMOiwpXCkCAqL1xuLmRvY3VtZW50cy10YWJsZS1jb250YWluZXIgeyBvdmVyZmxvdy14OiBhdXRvOyBib3JkZXItcmFkaXVzOiAxNHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpOyB9XG4uZGF0YS10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG4uZGF0YS10YWJsZSB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEzcHggMThweDsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzY0NzQ4YjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XG59XG4uZGF0YS10YWJsZSB0ZCB7IHBhZGRpbmc6IDE0cHggMThweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogI2NiZDVlMTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbi5kYXRhLXRhYmxlIHRyOmxhc3QtY2hpbGQgdGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4uZGF0YS10YWJsZSB0cjpob3ZlciB0ZCB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7IH1cbi50ZXh0LXJpZ2h0IHsgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgfVxuLmRvYy10aXRsZS1jZWxsIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyB9XG4uZG9jLXRpdGxlLWNlbGwgaSB7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM2MzY2ZjE7IH1cbi5kb2MtdGl0bGUgeyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgfVxuLmVtcGxveWVlLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAzcHggMTBweDsgYmFja2dyb3VuZDogcmdiYSgxNCwxNjUsMjMzLDAuMSk7XG4gIGNvbG9yOiAjMzhiZGY4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0LDE2NSwyMzMsMC4yKTsgYm9yZGVyLXJhZGl1czogMTAwcHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5maWxlLXR5cGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDNweCA4cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGNvbG9yOiAjOTRhM2I4OyBib3JkZXItcmFkaXVzOiA2cHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50YWJsZS1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA2cHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbi5lbXB0eS10YWJsZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNDBweDsgfVxuXG4vKiDDosKVwpDDosKVwpAgTU9EQUxTIMOiwpXCkMOiwpXCkCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7IHBhZGRpbmc6IDIwcHg7XG59XG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxZTI5M2I7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzJweDsgd2lkdGg6IDU4MHB4OyBtYXgtd2lkdGg6IDk1dnc7IG1heC1oZWlnaHQ6IDkwdmg7IG92ZXJmbG93LXk6IGF1dG87XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjNzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA0OHB4IHJnYmEoMCwwLDAsMC41KTtcbn1cbi5tb2RhbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDMycHg7IHBhZGRpbmctYm90dG9tOiAyMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTsgfVxuLm1vZGFsLXRpdGxlIHsgZm9udC1mYW1pbHk6ICdTeW5lJyxzYW5zLXNlcmlmOyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZjhmYWZjOyB9XG4ubW9kYWwtY2xvc2Uge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IGNvbG9yOiAjOTRhM2I4OyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDE2cHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLm1vZGFsLWNsb3NlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xNSk7IGNvbG9yOiAjZjg3MTcxOyB9XG4ubW9kYWwtYm9keSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjBweDsgfVxuLmZvcm0tZ3JvdXAgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDhweDsgfVxuLmZvcm0tZ3JvdXAgbGFiZWwgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiAjOTRhM2I4OyB9XG4uZm9ybS1pbnB1dCwgLmZvcm0tdGV4dGFyZWEsIC5mb3JtLXNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogMTJweCAxNnB4OyBjb2xvcjogI2Y4ZmFmYztcbiAgZm9udC1zaXplOiAxNHB4OyBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmOyBvdXRsaW5lOiBub25lOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5mb3JtLWlucHV0OmZvY3VzLCAuZm9ybS10ZXh0YXJlYTpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxOyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wOCk7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7XG59XG4uZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIsIC5mb3JtLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNDc1NTY5OyB9XG4uZm9ybS1zZWxlY3Qgb3B0aW9uIHsgYmFja2dyb3VuZDogIzFlMjkzYjsgfVxuLmZvcm0tdGV4dGFyZWEgeyByZXNpemU6IHZlcnRpY2FsOyBtaW4taGVpZ2h0OiAxMDBweDsgfVxuLmZvcm0tcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDE2cHg7IH1cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7IHBhZGRpbmctdG9wOiAyNHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbn1cbi5idG4tbGFyZ2UgeyBwYWRkaW5nOiAxM3B4IDI4cHg7IGZvbnQtc2l6ZTogMTVweDsgfVxuXG4vKiBQcm9qZWN0IERldGFpbHMgTW9kYWwgU3BlY2lmaWMgKi9cbi5wcm9qZWN0LWRldGFpbHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDI0cHg7IH1cbi5kZXRhaWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4OyBwYWRkaW5nLWJvdHRvbTogMTZweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG59XG4uZGV0YWlsLWhlYWRlciAucHJvamVjdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5kZXRhaWwtZ3JpZCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjBweDsgfVxuLmRldGFpbC1yb3cgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMjBweDsgfVxuLmRldGFpbC1pdGVtIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA4cHg7IH1cbi5kZXRhaWwtaXRlbSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM2NDc0OGI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG4uZGV0YWlsLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICNjYmQ1ZTE7IG1hcmdpbjogMDsgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5wcm9ncmVzcy1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XG59XG4ucHJvZ3Jlc3MtZGV0YWlsIC5wcm9ncmVzcy1iYXIge1xuICBmbGV4OiAxOyBoZWlnaHQ6IDhweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtZGV0YWlsIC5wcm9ncmVzcy1maWxsIHtcbiAgaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2MzY2ZjEsICM4YjVjZjYpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG59XG4ucHJvZ3Jlc3MtZGV0YWlsIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjOTRhM2I4O1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG4uZGV0YWlsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7IHBhZGRpbmctdG9wOiAyMHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbn1cbi5wcmlvcml0eS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcmlvcml0eS1oaWdoIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmNDQ0NCwgI2Y5NzMxNik7IH1cbi5wcmlvcml0eS1tZWRpdW0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU5ZTBiLCAjZWFiMzA4KTsgfVxuLnByaW9yaXR5LWxvdyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNmI2ZDQpOyB9XG4uc3RhdHVzLWFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjE1KTsgY29sb3I6ICMzNGQzOTk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjIpOyB9XG4uc3RhdHVzLW9uX2hvbGQsIC5zdGF0dXMtcGF1c2VkIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogI2ZiYmYyNDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLDAuMik7IH1cbi5zdGF0dXMtY29tcGxldGVkIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyBjb2xvcjogI2E1YjRmYzsgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMik7IH1cblxuLyogw6LClcKQw6LClcKQIEdBTlRUIFBSRVZJRVcgw6LClcKQw6LClcKQICovXG4uZ2FudHQtbGluay1jb250YWluZXIgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWluLWhlaWdodDogNDAwcHg7IH1cbi5nYW50dC1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogNDBweDsgbWF4LXdpZHRoOiA3MDBweDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcmV2aWV3LWhlYWRlciB7IG1hcmdpbi1ib3R0b206IDMycHg7IH1cbi5wcmV2aWV3LWRlc2NyaXB0aW9uIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTVweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4ucHJldmlldy1zdGF0cyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDQwcHg7IG1hcmdpbi1ib3R0b206IDMycHg7IH1cbi5wcmV2aWV3LXN0YXRzIC5zdGF0LWl0ZW0geyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi5wcmV2aWV3LXN0YXRzIC5zdGF0LW51bWJlciB7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICNhNWI0ZmM7IGZvbnQtZmFtaWx5OiAnU3luZScsc2Fucy1zZXJpZjsgfVxuLnByZXZpZXctc3RhdHMgLnN0YXQtbGFiZWwgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tdG9wOiA0cHg7IH1cbi5taW5pLWdhbnR0LXByZXZpZXcgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxNnB4OyBtYXJnaW4tYm90dG9tOiAyOHB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEwcHg7IH1cbi5taW5pLXByb2plY3QgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IH1cbi5taW5pLXByb2plY3QtbmFtZSB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM5NGEzYjg7IHdpZHRoOiAxNjBweDsgdGV4dC1hbGlnbjogbGVmdDsgZmxleC1zaHJpbms6IDA7IH1cbi5taW5pLXByb2dyZXNzIHsgZmxleDogMTsgaGVpZ2h0OiA4cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuLm1pbmktYmFyIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiA0cHg7IHRyYW5zaXRpb246IHdpZHRoIDAuOHMgZWFzZTsgfVxuLnByZXZpZXctYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDEycHg7IH1cbkBrZXlmcmFtZXMgc2xpZGVVcCB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjRweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG4vKiDDosKVwpDDosKVwpAgRU1QTE9ZRUVTIFNFTEVDVE9SIMOiwpXCkMOiwpXCkCAqL1xuLmVtcGxveWVlcy1zZWxlY3RvciB7XG4gIG1heC1oZWlnaHQ6IDI0MHB4OyBvdmVyZmxvdy15OiBhdXRvOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7IHBhZGRpbmc6IDhweDtcbn1cbi5lbXBsb3llZXMtc2VsZWN0b3I6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDZweDsgfVxuLmVtcGxveWVlcy1zZWxlY3Rvcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cbi5lbXBsb3llZXMtc2VsZWN0b3I6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cbi5lbXBsb3llZXMtc2VsZWN0b3I6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMpOyB9XG5cbi5lbXBsb3llZS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmc6IDA7IG1hcmdpbi1ib3R0b206IDRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmVtcGxveWVlLWNoZWNrYm94Omxhc3QtY2hpbGQgeyBtYXJnaW4tYm90dG9tOiAwOyB9XG4uZW1wbG95ZWUtY2hlY2tib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xufVxuLmVtcGxveWVlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgb3BhY2l0eTogMDsgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVtcGxveWVlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmVtcGxveWVlLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMSk7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMyk7XG59XG4uZW1wbG95ZWUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuZW1wbG95ZWUtbGFiZWwgLmVtcGxveWVlLWF2YXRhciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MzY2ZjE7IGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7XG59XG5cbi5lbXBsb3llZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcbiAgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmVtcGxveWVlLWxhYmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbn1cblxuLmVtcGxveWVlLWF2YXRhciB7XG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHdoaXRlO1xuICBmbGV4LXNocmluazogMDsgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5lbXBsb3llZS1pbmZvIHtcbiAgZmxleDogMTsgbWluLXdpZHRoOiAwO1xufVxuLmVtcGxveWVlLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjO1xuICBsaW5lLWhlaWdodDogMS4zOyBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmVtcGxveWVlLWVtYWlsIHtcbiAgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zZWxlY3RlZC1jb3VudCB7XG4gIG1hcmdpbi10b3A6IDEycHg7IHBhZGRpbmc6IDhweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2E1YjRmYzsgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBNZWV0aW5nIFR5cGUgQmFkZ2VzICovXG4ubWVldGluZy10eXBlLWJhZGdlIHtcbiAgcGFkZGluZzogNHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVldGluZy10eXBlLWJhZGdlLnRlYW0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTsgfVxuLm1lZXRpbmctdHlwZS1iYWRnZS5jbGllbnQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGVhNWU5LCAjMDZiNmQ0KTsgfVxuLm1lZXRpbmctdHlwZS1iYWRnZS50ZWNobmljYWwgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU5ZTBiLCAjZDk3NzA2KTsgfVxuLm1lZXRpbmctdHlwZS1iYWRnZS5yZXZpZXcgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTsgfVxuXG4vKiDDosKUwoDDosKUwoAgTUlTU0lORyBVVElMSVRZIENMQVNTRVMgw6LClMKAw6LClMKAICovXG5cbi51c2VyLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cblxuLyogUHJvamVjdCBpdGVtcyBpbnNpZGUgY2FyZHMgKi9cbi5wcm9qZWN0cy1saXN0IHsgcGFkZGluZzogMDsgfVxuLnByb2plY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTZweDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG59XG4ucHJvamVjdC1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgfVxuLnByb2plY3QtaXRlbTpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuLnByb2plY3QtaW5mbyB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLnByb2plY3QtbmFtZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMCAwIDZweCAwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuLnByb2plY3QtbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTRweDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuLnRlYW0tc2l6ZSwgLmRlYWRsaW5lIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cbi5wcm9qZWN0LXByb2dyZXNzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyB3aWR0aDogMTQwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4ucHJvamVjdC1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHsgZmxleDogMTsgfVxuLnByb2dyZXNzLXRleHQgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB3aWR0aDogMzZweDsgdGV4dC1hbGlnbjogcmlnaHQ7IGZsZXgtc2hyaW5rOiAwOyB9XG5cbi8qIFRhc2sgaXRlbXMgKi9cbi50YXNrcy1saXN0IHsgcGFkZGluZzogMDsgfVxuLnRhc2stY2hlY2tib3ggeyBmbGV4LXNocmluazogMDsgfVxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0geyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBhY2NlbnQtY29sb3I6ICM2MzY2ZjE7IGN1cnNvcjogcG9pbnRlcjsgfVxuLnRhc2staW5mbyB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLnRhc2stdGl0bGUgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDAgMCA0cHggMDsgfVxuLnRhc2stZGVzY3JpcHRpb24geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW46IDAgMCA2cHggMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbi50YXNrLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IGZsZXgtd3JhcDogd3JhcDsgfVxuLmFzc2lnbmVlLCAuZHVlLWRhdGUsIC5zdWJtaXQtdGltZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyB9XG5cbi50YXNrLXByaW9yaXR5IHsgZmxleC1zaHJpbms6IDA7IH1cbi5wcmlvcml0eS1iYWRnZSB7XG4gIHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgY29sb3I6IHdoaXRlO1xufVxuXG4udGFzay1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA2cHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uYnRuLWFjdGlvbiB7XG4gIHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEzcHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmJ0bi12aWV3ICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xKTsgIGNvbG9yOiAjMzhiZGY4OyB9XG4uYnRuLWFwcHJvdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xKTsgY29sb3I6ICMzNGQzOTk7IH1cbi5idG4tcmVqZWN0ICB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMSk7ICBjb2xvcjogI2Y4NzE3MTsgfVxuLmJ0bi12aWV3OmhvdmVyICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4yKTsgfVxuLmJ0bi1hcHByb3ZlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMik7IH1cbi5idG4tcmVqZWN0OmhvdmVyICB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMik7IH1cblxuLnBlbmRpbmctY291bnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiAjYTViNGZjO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTtcbiAgcGFkZGluZzogMnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDEwMHB4OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uby10YXNrcyB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNDBweCAyMHB4OyBjb2xvcjogIzY0NzQ4YjsgfVxuLm5vLXRhc2tzIGkgeyBmb250LXNpemU6IDM2cHg7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAxMnB4OyBjb2xvcjogIzM0ZDM5OTsgb3BhY2l0eTogMC43OyB9XG4ubm8tdGFza3MgaDMgeyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiAjOTRhM2I4OyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbi5uby10YXNrcyBwIHsgZm9udC1zaXplOiAxM3B4OyB9XG5cbi8qIFRlYW0gUGVyZm9ybWFuY2Ugc2VjdGlvbiAqL1xuLnRlYW0tc2VjdGlvbiB7IG1hcmdpbi10b3A6IDIwcHg7IH1cbi5wZXJmb3JtYW5jZS1jYXJkIC5jYXJkLWhlYWRlciB7IGdhcDogMTJweDsgfVxuLnBlcmlvZC1zZWxlY3RvciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiA2cHggMTJweDsgY29sb3I6ICM5NGEzYjg7XG4gIGZvbnQtc2l6ZTogMTNweDsgb3V0bGluZTogbm9uZTsgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBlcmZvcm1hbmNlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7IGdhcDogMTZweDsgcGFkZGluZzogMjBweDtcbn1cbi50ZWFtLW1lbWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDsgcGFkZGluZzogMTZweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4udGVhbS1tZW1iZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjIpOyB9XG4ubWVtYmVyLWF2YXRhciBpbWcgeyB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG9iamVjdC1maXQ6IGNvdmVyOyB9XG4ubWVtYmVyLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5tZW1iZXItbmFtZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMCAwIDZweCAwOyB9XG4ubWVtYmVyLXN0YXRzIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAzcHg7IH1cbi5zdGF0LWl0ZW0geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDsgfVxuLm1lbWJlci1lZmZpY2llbmN5IHsgZmxleC1zaHJpbms6IDA7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmVmZmljaWVuY3ktY2lyY2xlIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuLmVmZmljaWVuY3ktdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2Y4ZmFmYztcbn1cblxuOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAxMDB2aDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuXG4vKiDDosKUwoDDosKUwoAgU0hFTEwgw6LClMKAw6LClMKAICovXG4uZXJwLXNoZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU0lERUJBUiDDosKUwoDDosKUwoAgKi9cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwyMyw0MiwwLjk1KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xufVxuXG4uc2lkZWJhci1sb2dvIHtcbiAgcGFkZGluZzogMjRweCAyMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubG9nby1oZXgge1xuICB3aWR0aDogMzRweDsgaGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjMGVhNWU5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE2cHg7IGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDk5LDEwMiwyNDEsMC40KTtcbn1cblxuLmxvZ28tbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7IGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07IGNvbG9yOiAjZjhmYWZjO1xufVxuXG4ubG9nby1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogOXB4OyBjb2xvcjogIzYzNjZmMTtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4zKTtcbiAgcGFkZGluZzogMnB4IDdweDsgYm9yZGVyLXJhZGl1czogMjBweDsgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLnNpZGViYXItbmF2IHsgcGFkZGluZzogMTZweCAxMHB4OyBmbGV4OiAxOyB9XG5cbi5uYXYtZ3JvdXAtbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7IGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIHBhZGRpbmc6IDE2cHggMTBweCA4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMnB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgY29sb3I6ICNmOGZhZmM7XG59XG5cbi5uYXYtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7XG4gIGNvbG9yOiAjYTViNGZjO1xuICBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjIpO1xufVxuXG4ubmF2LWl0ZW0uYWN0aXZlOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogM3B4OyBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzYzNjZmMSwgIzBlYTVlOSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xufVxuXG4ubmF2LWl0ZW0gaSB7IGZvbnQtc2l6ZTogMTVweDsgd2lkdGg6IDE4cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ubmF2LWJhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMik7XG4gIGNvbG9yOiAjZjg3MTcxO1xuICBmb250LXNpemU6IDEwcHg7IHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4OyBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2lkZWJhci1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnVzZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cbi51c2VyLWNhcmQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyB9XG4udXNlci1uYW1lIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgfVxuLnVzZXItcm9sZSB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IH1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAzNHB4OyBoZWlnaHQ6IDM0cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgZmxleC1zaHJpbms6IDA7IGNvbG9yOiAjZmZmO1xufVxuLmdyYWQtcHVycGxlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjNjM2NmYxLCNhODU1ZjcpOyB9XG4uZ3JhZC10ZWFsICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMwZWE1ZTksIzJkZDRiZik7IH1cbi5ncmFkLWFtYmVyICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsI2Y1OWUwYiwjZWY0NDQ0KTsgfVxuLmdyYWQtcm9zZSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjZjQzZjVlLCNmNTllMGIpOyB9XG4uZ3JhZC1ibHVlICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMwZWE1ZTksIzYzNjZmMSk7IH1cblxuLnRiLWJ0biB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICBjb2xvcjogIzk0YTNiODtcbiAgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IGZvbnQtc2l6ZTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRiLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgY29sb3I6ICNmOGZhZmM7IH1cblxuLmxvZ291dC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjE1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y4NzE3MSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjM5LDY4LDY4LDAuMikgIWltcG9ydGFudDtcbn1cblxuLyogw6LClMKAw6LClMKAIE1BSU4gQVJFQSDDosKUwoDDosKUwoAgKi9cbi5tYWluLWFyZWEge1xuICBmbGV4OiAxOyBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9wYmFyIHtcbiAgaGVpZ2h0OiA2MHB4OyBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwyMyw0MiwwLjgpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyOHB4OyBnYXA6IDEycHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbn1cblxuLnRiLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTsgY29sb3I6ICNmOGZhZmM7XG59XG4udGItc3ViIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWxlZnQ6IDRweDsgfVxuLnRiLXJpZ2h0IHsgbWFyZ2luLWxlZnQ6IGF1dG87IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgfVxuXG4udGItc2VhcmNoIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMCAxNHB4O1xuICBjb2xvcjogI2Y4ZmFmYztcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDsgd2lkdGg6IDIwMHB4OyBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi50Yi1zZWFyY2g6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM2MzY2ZjE7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoOTksMTAyLDI0MSwwLjE1KTtcbiAgd2lkdGg6IDI0MHB4O1xufVxuLnRiLXNlYXJjaDo6cGxhY2Vob2xkZXIgeyBjb2xvcjogIzQ3NTU2OTsgfVxuXG4ubm90aWYtYnRuIC5ub3RpZi1kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogN3B4OyByaWdodDogN3B4O1xuICB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2VmNDQ0NDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGYxNzJhO1xufVxuXG4vKiDDosKUwoDDosKUwoAgQ09OVEVOVCDDosKUwoDDosKUwoAgKi9cbi5jb250ZW50LWFyZWEge1xuICBmbGV4OiAxOyBvdmVyZmxvdy15OiBhdXRvOyBwYWRkaW5nOiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xufVxuXG4uc2VjdGlvbiB7IGRpc3BsYXk6IGJsb2NrOyB9XG4uZmFkZS1pbiB7IGFuaW1hdGlvbjogZmFkZVVwIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKSBib3RoOyB9XG5Aa2V5ZnJhbWVzIGZhZGVVcCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4vKiDDosKUwoDDosKUwoAgU1RBVFMgR1JJRCDDosKUwoDDosKUwoAgKi9cbi5zdGF0cy1zZWN0aW9uIHsgbWFyZ2luLWJvdHRvbTogMjhweDsgfVxuLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3RhdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cbi5zdGF0LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjMpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4uc3RhdC1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDsgY29sb3I6IHdoaXRlOyBmbGV4LXNocmluazogMDtcbn1cbi5zdGF0LWljb24uYmx1ZSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjM2I4MmY2LCMxZDRlZDgpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTksMTMwLDI0NiwwLjMpOyB9XG4uc3RhdC1pY29uLmdyZWVuICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzEwYjk4MSwjMDU5NjY5KTsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE2LDE4NSwxMjksMC4zKTsgfVxuLnN0YXQtaWNvbi5wdXJwbGUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM4YjVjZjYsIzYzNjZmMSk7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMzksOTIsMjQ2LDAuMyk7IH1cbi5zdGF0LWljb24ub3JhbmdlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjZjU5ZTBiLCNkOTc3MDYpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjQ1LDE1OCwxMSwwLjMpOyB9XG5cbi5zdGF0LWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDAgMCA0cHggMDtcbiAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbn1cbi5zdGF0LWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTsgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zdGF0LW51bWJlciB7IGZvbnQtc2l6ZTogMjJweDsgfVxuLnN0YXQtbGFiZWwgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBDQVJEUyDDosKUwoDDosKUwoAgKi9cbi5jb250ZW50LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgLmNvbnRlbnQtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XG59XG4uY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMik7IH1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmQtdGl0bGUgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDA7IH1cblxuLnZpZXctYWxsLWJ0biB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTtcbiAgY29sb3I6ICNhNWI0ZmM7XG4gIHBhZGRpbmc6IDZweCAxNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi52aWV3LWFsbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4yKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC40KTtcbn1cblxuLyogw6LClMKAw6LClMKAIFRBQkxFUyDDosKUwoDDosKUwoAgKi9cbi50YWJsZS1jb250YWluZXIgeyBvdmVyZmxvdy14OiBhdXRvOyB9XG50YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XG59XG50ZCB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogI2NiZDVlMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cbnRyOmhvdmVyIHRkIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgfVxudHI6bGFzdC1jaGlsZCB0ZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLyogw6LClMKAw6LClMKAIEJBREdFUyDDosKUwoDDosKUwoAgKi9cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5iYWRnZS1zdWNjZXNzIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTUpOyBjb2xvcjogIzM0ZDM5OTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMik7IH1cbi5iYWRnZS13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogI2ZiYmYyNDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLDAuMik7IH1cbi5iYWRnZS1kYW5nZXIgIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xNSk7ICBjb2xvcjogI2Y4NzE3MTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4yKTsgfVxuLmJhZGdlLWluZm8gICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xNSk7IGNvbG9yOiAjMzhiZGY4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0LDE2NSwyMzMsMC4yKTsgfVxuLmJhZGdlLXB1cnBsZSAgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiAjYTViNGZjOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yKTsgfVxuXG4vKiDDosKUwoDDosKUwoAgQlVUVE9OUyDDosKUwoDDosKUwoAgKi9cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM0ZjQ2ZTUpO1xuICBjb2xvcjogd2hpdGU7IGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDk5LDEwMiwyNDEsMC4zKTtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDk5LDEwMiwyNDEsMC40KTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBjb2xvcjogI2NiZDVlMTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGNvbG9yOiAjZjhmYWZjO1xufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMTUpO1xuICBjb2xvcjogI2Y4NzE3MTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4yKTtcbiAgcGFkZGluZzogOHB4IDE0cHg7IGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmJ0bi1kYW5nZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjI1KTsgfVxuXG4vKiDDosKUwoDDosKUwoAgRk9STVMgw6LClMKAw6LClMKAICovXG4uZm9ybS1ncm91cCB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM5NGEzYjg7IG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmZvcm0tY29udHJvbCwgLmZvcm0tc2VsZWN0LCAuZm9ybS10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzYzNjZmMTtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDgpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xufVxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIsIC5mb3JtLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNDc1NTY5OyB9XG4uZm9ybS1zZWxlY3Qgb3B0aW9uIHsgYmFja2dyb3VuZDogIzFlMjkzYjsgY29sb3I6ICNmOGZhZmM7IH1cblxuLyogw6LClMKAw6LClMKAIE1PREFMIMOiwpTCgMOiwpTCgCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlO1xufVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDE7IH0gfVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzFlMjkzYjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzMnB4O1xuICB3aWR0aDogNTYwcHg7IG1heC13aWR0aDogOTV2dztcbiAgbWF4LWhlaWdodDogOTB2aDsgb3ZlcmZsb3cteTogYXV0bztcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDQ4cHggcmdiYSgwLDAsMCwwLjUpO1xufVxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG4ubW9kYWwtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZjhmYWZjO1xufVxuLm1vZGFsLWNsb3NlIHtcbiAgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDsgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGNvbG9yOiAjOTRhM2I4OyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLm1vZGFsLWNsb3NlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xNSk7IGNvbG9yOiAjZjg3MTcxOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBQUk9HUkVTUyBCQVJTIMOiwpTCgMOiwpTCgCAqL1xuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogNnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7IG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjM2NmYxLCAjMGVhNWU5KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBTRUNUSU9OIEhFQURFUlMgw6LClMKAw6LClMKAICovXG4uc2VjdGlvbi1oZWFkIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnNlY3Rpb24tdGl0bGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmOGZhZmM7XG59XG4uc2VjdGlvbi1zdWJ0aXRsZSB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi10b3A6IDJweDsgfVxuXG4vKiDDosKUwoDDosKUwoAgUFJPSkVDVCBDQVJEUyDDosKUwoDDosKUwoAgKi9cbi5wcm9qZWN0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4OyBwYWRkaW5nOiAyMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjI1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4yNSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBUQVNLIElURU1TIMOiwpTCgMOiwpTCgCAqL1xuLnRhc2staXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTRweDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xufVxuLnRhc2staXRlbTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7IH1cbi50YXNrLWl0ZW06bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLyogw6LClMKAw6LClMKAIFNDUk9MTEJBUiDDosKUwoDDosKUwoAgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogNXB4OyBoZWlnaHQ6IDVweDsgfVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7IH1cblxuLyogw6LClMKAw6LClMKAIEFMRVJUIMOiwpTCgMOiwpTCgCAqL1xuLmFsZXJ0IHtcbiAgcGFkZGluZzogMTJweCAxNnB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hbGVydC1kYW5nZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjEpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjIpOyBjb2xvcjogI2Y4NzE3MTsgfVxuLmFsZXJ0LXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMik7IGNvbG9yOiAjMzRkMzk5OyB9XG4uYWxlcnQtaW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjEpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0LDE2NSwyMzMsMC4yKTsgY29sb3I6ICMzOGJkZjg7IH1cblxuLyogw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgCAqL1xuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA2MHB4IDIwcHg7IGNvbG9yOiAjNjQ3NDhiO1xufVxuLmVtcHR5LXN0YXRlIGkgeyBmb250LXNpemU6IDQ4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IG9wYWNpdHk6IDAuNDsgfVxuLmVtcHR5LXN0YXRlIGgzIHsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogIzk0YTNiODsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBGSUxFIFVQTE9BRCDDosKUwoDDosKUwoAgKi9cbi5maWxlLXVwbG9hZC1hcmVhIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoOTksMTAyLDI0MSwwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IGNvbG9yOiAjNjQ3NDhiO1xufVxuLmZpbGUtdXBsb2FkLWFyZWE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM2MzY2ZjE7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA1KTtcbiAgY29sb3I6ICNhNWI0ZmM7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBDQUxFTkRBUiDDosKUwoDDosKUwoAgKi9cbi5jYWxlbmRhci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTsgZ2FwOiA0cHg7XG59XG4uY2FsZW5kYXItZGF5IHtcbiAgcGFkZGluZzogOHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IG1pbi1oZWlnaHQ6IDcycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FsZW5kYXItZGF5OmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgfVxuLmNhbGVuZGFyLWRheS50b2RheSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuNCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA4KTtcbn1cblxuLyogw6LClMKAw6LClMKAIFRBR1Mgw6LClMKAw6LClMKAICovXG4udGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBjb2xvcjogIzk0YTNiODsgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBESVZJREVSIMOiwpTCgMOiwpTCgCAqL1xuLmRpdmlkZXIgeyBib3JkZXI6IG5vbmU7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpOyBtYXJnaW46IDE2cHggMDsgfVxuXG4vKiDDosKUwoDDosKUwoAgUkVTUE9OU0lWRSDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNpZGViYXIgeyB3aWR0aDogMjAwcHg7IH1cbiAgLmNvbnRlbnQtYXJlYSB7IHBhZGRpbmc6IDIwcHg7IH1cbn1cblxuLyogw6LClMKAw6LClMKAIEFOQUxZVElDUyBTRUNUSU9OIMOiwpTCgMOiwpTCgCAqL1xuLmFuYWx5dGljcy1oZWFkZXIsIC5nYW50dC1zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmFuYWx5dGljcy1jb250cm9scywgLmdhbnR0LWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4O1xufVxuXG4ucHJvamVjdC1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogOHB4IDE0cHg7IGNvbG9yOiAjY2JkNWUxO1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyBvdXRsaW5lOiBub25lO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ucHJvamVjdC1zZWxlY3Q6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM2MzY2ZjE7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7XG59XG5cbi5wcm9qZWN0LXNlbGVjdCBvcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xufVxuXG4uYW5hbHl0aWNzLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDI0cHg7XG59XG5cbi5hbmFseXRpY3Mtb3ZlcnZpZXcge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ua3BpLWdyaWQge1xuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTsgZ2FwOiAxOHB4O1xufVxuXG4ua3BpLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4OyBwYWRkaW5nOiAyMHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ua3BpLWNhcmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjMpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4ua3BpLWljb24ge1xuICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ua3BpLWljb24uYmx1ZSB7IGJhY2tncm91bmQ6IHJnYmEoNTksMTMwLDI0NiwwLjE1KTsgY29sb3I6ICMzYjgyZjY7IH1cbi5rcGktaWNvbi5ncmVlbiB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjE1KTsgY29sb3I6ICMxMGI5ODE7IH1cbi5rcGktaWNvbi5vcmFuZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiAjZjU5ZTBiOyB9XG4ua3BpLWljb24ucHVycGxlIHsgYmFja2dyb3VuZDogcmdiYSgxMzksOTIsMjQ2LDAuMTUpOyBjb2xvcjogIzhiNWNmNjsgfVxuXG4ua3BpLWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDAgMCA0cHggMDtcbn1cblxuLmtwaS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW46IDA7XG59XG5cbi5hbmFseXRpY3Mtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7IGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDI0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG59XG5cbi5zdWJzZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgbWFyZ2luOiAwIDAgMTZweCAwO1xufVxuXG4ud29ya2xvYWQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTsgZ2FwOiAxNnB4O1xufVxuXG4ud29ya2xvYWQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDE2cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcbn1cblxuLndvcmtsb2FkLWNhcmQgLmVtcGxveWVlLWF2YXRhciB7XG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgY29sb3I6IHdoaXRlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxNHB4OyBmbGV4LXNocmluazogMDtcbn1cblxuLndvcmtsb2FkLWNhcmQgLmVtcGxveWVlLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4ud29ya2xvYWQtY2FyZCAuZW1wbG95ZWUtaW5mbyBoNCB7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMCAwIDRweCAwO1xufVxuXG4ud29ya2xvYWQtY2FyZCAuZW1wbG95ZWUtaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG5cbi53b3JrbG9hZC1jYXJkIC5wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53b3JrbG9hZC1jYXJkIC5wcm9ncmVzcy1maWxsIHtcbiAgaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cblxuLmF0dGVudGlvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4O1xufVxuXG4uYXR0ZW50aW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4wOCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LDE1OCwxMSwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XG59XG5cbi5hdHRlbnRpb24taWNvbiB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpO1xuICBjb2xvcjogI2Y1OWUwYjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDsgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hdHRlbnRpb24taW5mbyB7XG4gIGZsZXg6IDE7XG59XG5cbi5hdHRlbnRpb24taW5mbyBoNCB7XG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNmOGZhZmM7IG1hcmdpbjogMCAwIDRweCAwO1xufVxuXG4uYXR0ZW50aW9uLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMCAwIDRweCAwO1xufVxuXG4uYXR0ZW50aW9uLXJlYXNvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiAjZjU5ZTBiO1xufVxuXG4ubm8tc2VsZWN0aW9uLW1lc3NhZ2UsIC5uby1kYXRhLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDYwcHggMjBweDsgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5uby1zZWxlY3Rpb24tbWVzc2FnZSBpLCAubm8tZGF0YS1tZXNzYWdlIGkge1xuICBmb250LXNpemU6IDQ4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IG9wYWNpdHk6IDAuNDsgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uby1zZWxlY3Rpb24tbWVzc2FnZSBwLCAubm8tZGF0YS1tZXNzYWdlIHAge1xuICBmb250LXNpemU6IDE0cHg7IG1hcmdpbjogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuICAuc3RhdHMtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", "\n\n\n\n\n.meeting-indicators[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n  justify-content: center;\n}\n\n.meeting-indicator[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s ease;\n}\n\n.meeting-indicator[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n\n.more-indicators[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  background: #f0f0f0;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n\n\n.meeting-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  background: #ff6b6b;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: bold;\n  border: 2px solid white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.calendar-day.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.calendar-day.clickable[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.calendar-day.clickable.has-meeting[_ngcontent-%COMP%]:hover {\n  background-color: #e3f2fd;\n  border-color: #2196f3;\n}\n\n\n\n.day-meetings-modal[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n\n.day-meetings-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n\n.day-meeting-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  border-left: 4px solid;\n  background: #f8f9fa;\n  transition: all 0.2s ease;\n}\n\n.day-meeting-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.day-meeting-item.meeting-team[_ngcontent-%COMP%] {\n  border-left-color: #10B981;\n  background: linear-gradient(to right, #f0fdf4, #f8f9fa);\n}\n\n.day-meeting-item.meeting-client[_ngcontent-%COMP%] {\n  border-left-color: #3B82F6;\n  background: linear-gradient(to right, #eff6ff, #f8f9fa);\n}\n\n.day-meeting-item.meeting-technical[_ngcontent-%COMP%] {\n  border-left-color: #F59E0B;\n  background: linear-gradient(to right, #fffbeb, #f8f9fa);\n}\n\n.day-meeting-item.meeting-review[_ngcontent-%COMP%] {\n  border-left-color: #8B5CF6;\n  background: linear-gradient(to right, #f3e8ff, #f8f9fa);\n}\n\n.meeting-time-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: white;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #666;\n  border: 1px solid #e0e0e0;\n  min-width: 60px;\n  justify-content: center;\n}\n\n.meeting-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 12px;\n}\n\n.meeting-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n  color: #333;\n}\n\n.meeting-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #666;\n}\n\n.meeting-location[_ngcontent-%COMP%], .meeting-duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.meeting-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.no-meetings[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #666;\n}\n\n.no-meetings[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ddd;\n  margin-bottom: 16px;\n}\n\n.no-meetings[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n}\n\n.no-meetings[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n\n\n\n.calendar-day[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 60px;\n  padding: 4px;\n}\n\n.calendar-day.today[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff3cd, #fff8e1);\n  border: 2px solid #ffc107;\n  font-weight: bold;\n}\n\n.calendar-day.has-meeting[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa, #ffffff);\n  border: 1px solid #e9ecef;\n}\n\n.day-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #333;\n}\n\n\n\n.day-meetings-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL2NhbGVuZGFyLWltcHJvdmVtZW50cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEOztBQUVsRCxxQ0FBcUM7QUFDckM7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLHdDQUF3QztFQUN4QywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7QUFDMUM7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQW3Dg8KpbGlvcmF0aW9ucyBwb3VyIGxlIGNhbGVuZHJpZXIgZGVzIHLDg8KpdW5pb25zICovXG5cbi8qIFBvaW50cyBkZSByw4PCqXVuaW9ucyBwbHVzIHZpc2libGVzICovXG4ubWVldGluZy1pbmRpY2F0b3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDNweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lZXRpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuXG4ubWVldGluZy1pbmRpY2F0b3I6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5tb3JlLWluZGljYXRvcnMge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogQ29tcHRldXIgZGUgcsODwql1bmlvbnMgKi9cbi5tZWV0aW5nLWNvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmNmI2YjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogSm91cnMgY2xpcXVhYmxlcyAqL1xuLmNhbGVuZGFyLWRheS5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5jYWxlbmRhci1kYXkuY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FsZW5kYXItZGF5LmNsaWNrYWJsZS5oYXMtbWVldGluZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMztcbn1cblxuLyogTW9kYWwgZGVzIHLDg8KpdW5pb25zIGR1IGpvdXIgKi9cbi5kYXktbWVldGluZ3MtbW9kYWwge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZGF5LW1lZXRpbmdzLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRheS1tZWV0aW5nLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmRheS1tZWV0aW5nLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmRheS1tZWV0aW5nLWl0ZW0ubWVldGluZy10ZWFtIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMEI5ODE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwZmRmNCwgI2Y4ZjlmYSk7XG59XG5cbi5kYXktbWVldGluZy1pdGVtLm1lZXRpbmctY2xpZW50IHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMzQjgyRjY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VmZjZmZiwgI2Y4ZjlmYSk7XG59XG5cbi5kYXktbWVldGluZy1pdGVtLm1lZXRpbmctdGVjaG5pY2FsIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNTlFMEI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmJlYiwgI2Y4ZjlmYSk7XG59XG5cbi5kYXktbWVldGluZy1pdGVtLm1lZXRpbmctcmV2aWV3IHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM4QjVDRjY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YzZThmZiwgI2Y4ZjlmYSk7XG59XG5cbi5tZWV0aW5nLXRpbWUtYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2NjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1pbi13aWR0aDogNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZWV0aW5nLWluZm8ge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLm1lZXRpbmctdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDRweCAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLm1lZXRpbmctZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm1lZXRpbmctbG9jYXRpb24sXG4ubWVldGluZy1kdXJhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xufVxuXG4ubWVldGluZy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG59XG5cbi5uby1tZWV0aW5ncyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm5vLW1lZXRpbmdzIGkge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubm8tbWVldGluZ3MgaDMge1xuICBtYXJnaW46IDAgMCA4cHggMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5uby1tZWV0aW5ncyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEFtw4PCqWxpb3JhdGlvbiBkZXMgam91cnMgZHUgY2FsZW5kcmllciAqL1xuLmNhbGVuZGFyLWRheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uY2FsZW5kYXItZGF5LnRvZGF5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjNjZCwgI2ZmZjhlMSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmMxMDc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FsZW5kYXItZGF5Lmhhcy1tZWV0aW5nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgI2ZmZmZmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG59XG5cbi5kYXktbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLyogQW5pbWF0aW9uIGQnYXBwYXJpdGlvbiAqL1xuLmRheS1tZWV0aW5ncy1tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjNzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */", "\n\n\n\n\n.content-grid[_ngcontent-%COMP%] {\n  margin-bottom: 16px !important; \n\n}\n\n.content-grid[_ngcontent-%COMP%]   .tasks-card[_ngcontent-%COMP%] {\n  margin: 0; \n\n}\n\n\n\n.tasks-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin: 0; \n\n}\n\n\n\n.tasks-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 16px 20px 12px 20px; \n\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n}\n\n.tasks-list[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow-y: auto;\n  padding: 0; \n\n}\n\n\n\n.no-tasks[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #666;\n}\n\n.no-tasks[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #10B981;\n  margin-bottom: 16px;\n  display: block;\n}\n\n.no-tasks[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 18px;\n}\n\n.no-tasks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n}\n\n\n\n.task-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.2s ease;\n  gap: 12px;\n}\n\n.task-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(4px);\n}\n\n.task-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n\n\n.task-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.task-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.task-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #ddd;\n  border-radius: 4px;\n  display: block;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n\n.task-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #10B981;\n  border-color: #10B981;\n}\n\n.task-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  content: '\u2713';\n  position: absolute;\n  top: -2px;\n  left: 2px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.task-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  border-color: #10B981;\n  background-color: #f0fdf4;\n}\n\n\n\n.task-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  line-height: 1.4;\n}\n\n.task-description[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 12px;\n  color: #666;\n}\n\n.task-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.task-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n}\n\n\n\n.task-priority[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.priority-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n  white-space: nowrap;\n}\n\n.priority-high[_ngcontent-%COMP%] {\n  background-color: #EF4444 !important;\n}\n\n.priority-medium[_ngcontent-%COMP%] {\n  background-color: #F59E0B !important;\n}\n\n.priority-low[_ngcontent-%COMP%] {\n  background-color: #10B981 !important;\n}\n\n\n\n.task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n\n.btn-view[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n}\n\n.btn-view[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n\n.btn-approve[_ngcontent-%COMP%] {\n  background-color: #10B981;\n  color: white;\n}\n\n.btn-approve[_ngcontent-%COMP%]:hover {\n  background-color: #059669;\n  transform: scale(1.1);\n}\n\n.btn-reject[_ngcontent-%COMP%] {\n  background-color: #EF4444;\n  color: white;\n}\n\n.btn-reject[_ngcontent-%COMP%]:hover {\n  background-color: #DC2626;\n  transform: scale(1.1);\n}\n\n\n\n.pending-count[_ngcontent-%COMP%] {\n  background-color: #3B82F6;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n\n\n@media (max-width: 768px) {\n  .task-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  \n  .task-checkbox[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  \n  .task-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  \n  .task-actions[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n\n\n\n.task-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n\n\n.tasks-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.tasks-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n\n.tasks-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n\n.tasks-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL3Rhc2tzLWltcHJvdmVtZW50cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOztBQUU3QyxtRUFBbUU7QUFDbkU7RUFDRSw4QkFBOEIsRUFBRSx3Q0FBd0M7QUFDMUU7O0FBRUE7RUFDRSxTQUFTLEVBQUUsdURBQXVEO0FBQ3BFOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixTQUFTLEVBQUUsMEJBQTBCO0FBQ3ZDOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLDRCQUE0QixFQUFFLHVCQUF1QjtFQUNyRCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUUsMENBQTBDO0FBQ3hEOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFtw4PCqWxpb3JhdGlvbnMgcG91ciBsZXMgdMODwqJjaGVzIGVuIGF0dGVudGUgKi9cblxuLyogQ29ycmVjdGlvbiBkdSBwYWRkaW5nIGV4Y2Vzc2lmIGF1dG91ciBkZSBsYSBzZWN0aW9uIGRlcyB0w4PComNoZXMgKi9cbi5jb250ZW50LWdyaWQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7IC8qIFLDg8KpZHVpcmUgbGUgbWFyZ2luLWJvdHRvbSBwYXIgZMODwqlmYXV0ICovXG59XG5cbi5jb250ZW50LWdyaWQgLnRhc2tzLWNhcmQge1xuICBtYXJnaW46IDA7IC8qIFMnYXNzdXJlciBxdSdpbCBuJ3kgYSBwYXMgZGUgbWFyZ2luIHN1cHBsw4PCqW1lbnRhaXJlICovXG59XG5cbi8qIENvbnRlbmV1ciBkZXMgdMODwqJjaGVzICovXG4udGFza3MtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7IC8qIFBhcyBkZSBtYXJnaW4gZXh0ZXJuZSAqL1xufVxuXG4vKiBIZWFkZXIgZGUgbGEgY2FydGUgKi9cbi50YXNrcy1jYXJkIC5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweCAxMnB4IDIwcHg7IC8qIFBhZGRpbmcgcGx1cyBzZXJyw4PCqSAqL1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRhc2tzLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMDsgLyogUGFzIGRlIHBhZGRpbmcgaW50ZXJuZSBzdXBwbMODwqltZW50YWlyZSAqL1xufVxuXG4vKiBNZXNzYWdlIGF1Y3VuZSB0w4PComNoZSAqL1xuLm5vLXRhc2tzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubm8tdGFza3MgaSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICMxMEI5ODE7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8tdGFza3MgaDMge1xuICBtYXJnaW46IDAgMCA4cHggMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm5vLXRhc2tzIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi8qIEl0ZW0gZGUgdMODwqJjaGUgKi9cbi50YXNrLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4udGFzay1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG59XG5cbi50YXNrLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi8qIENoZWNrYm94ICovXG4udGFzay1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1jaGVja2JveCBsYWJlbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwQjk4MTtcbiAgYm9yZGVyLWNvbG9yOiAjMTBCOTgxO1xufVxuXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6ICfDosKcwpMnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrLWNoZWNrYm94IGxhYmVsOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTBCOTgxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZGY0O1xufVxuXG4vKiBJbmZvcm1hdGlvbnMgZGUgbGEgdMODwqJjaGUgKi9cbi50YXNrLWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YXNrLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRhc2stbWV0YSBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi50YXNrLW1ldGEgaSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4vKiBQcmlvcml0w4PCqSAqL1xuLnRhc2stcHJpb3JpdHkge1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnByaW9yaXR5LWJhZGdlIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wcmlvcml0eS1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGNDQ0NCAhaW1wb3J0YW50O1xufVxuXG4ucHJpb3JpdHktbWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1OUUwQiAhaW1wb3J0YW50O1xufVxuXG4ucHJpb3JpdHktbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwQjk4MSAhaW1wb3J0YW50O1xufVxuXG4vKiBBY3Rpb25zICovXG4udGFzay1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnRuLWFjdGlvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4tdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gIGNvbG9yOiAjNmI3MjgwO1xufVxuXG4uYnRuLXZpZXc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xuICBjb2xvcjogIzM3NDE1MTtcbn1cblxuLmJ0bi1hcHByb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwQjk4MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWFwcHJvdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5idG4tcmVqZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGNDQ0NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLXJlamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQzI2MjY7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLyogQ29tcHRldXIgZGUgdMODwqJjaGVzICovXG4ucGVuZGluZy1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQjgyRjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50YXNrLWl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiA4cHg7XG4gIH1cbiAgXG4gIC50YXNrLWNoZWNrYm94IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAudGFzay1tZXRhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICB9XG4gIFxuICAudGFzay1hY3Rpb25zIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxufVxuXG4vKiBBbmltYXRpb24gZCdhcHBhcml0aW9uICovXG4udGFzay1pdGVtIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuLyogU2Nyb2xsYmFyIHBlcnNvbm5hbGlzw4PCqWUgKi9cbi50YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi50YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRhc2tzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2MxYzFjMTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udGFza3MtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYThhOGE4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", "\n\n.gantt-link-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.gantt-preview[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.gantt-preview[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n\n.preview-header[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: linear-gradient(135deg, #7C74FF 0%, #A78BFA 100%);\n  color: white;\n  text-align: center;\n}\n\n.preview-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 28px;\n  font-weight: 700;\n}\n\n.preview-description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  opacity: 0.9;\n  max-width: 400px;\n  margin: 0 auto;\n}\n\n.preview-content[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n\n.preview-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: #f8fafc;\n  border-radius: 12px;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 8px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n}\n\n.mini-gantt-preview[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid #e5e7eb;\n}\n\n.mini-project[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.mini-project[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.mini-project-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 8px;\n}\n\n.mini-progress[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.mini-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n\n.preview-actions[_ngcontent-%COMP%] {\n  padding: 24px 32px 32px;\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n}\n\n.btn-large[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n}\n\n.btn-primary.btn-large[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #7C74FF 0%, #A78BFA 100%);\n  border: none;\n  color: white;\n  box-shadow: 0 4px 14px rgba(124, 116, 255, 0.3);\n}\n\n.btn-primary.btn-large[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(124, 116, 255, 0.4);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  color: #374151;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  transform: translateY(-2px);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL2dhbnR0LXByZXZpZXcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgR0FOVFQgUFJFVklFVyBTVFlMRVMgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4uZ2FudHQtbGluay1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZ2FudHQtcHJldmlldyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG59XG5cbi5nYW50dC1wcmV2aWV3OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5wcmV2aWV3LWhlYWRlciB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3Qzc0RkYgMCUsICNBNzhCRkEgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJldmlldy1oZWFkZXIgaDIge1xuICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByZXZpZXctZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3BhY2l0eTogMC45O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByZXZpZXctY29udGVudCB7XG4gIHBhZGRpbmc6IDMycHg7XG59XG5cbi5wcmV2aWV3LXN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5zdGF0LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWluaS1nYW50dC1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbn1cblxuLm1pbmktcHJvamVjdCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5taW5pLXByb2plY3Q6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5taW5pLXByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm1pbmktcHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWluaS1iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xufVxuXG4ucHJldmlldy1hY3Rpb25zIHtcbiAgcGFkZGluZzogMjRweCAzMnB4IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tbGFyZ2Uge1xuICBwYWRkaW5nOiAxNHB4IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5idG4tcHJpbWFyeS5idG4tbGFyZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN0M3NEZGIDAlLCAjQTc4QkZBIDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDEyNCwgMTE2LCAyNTUsIDAuMyk7XG59XG5cbi5idG4tcHJpbWFyeS5idG4tbGFyZ2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMjQsIDExNiwgMjU1LCAwLjQpO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIHBhZGRpbmc6IDE0cHggMjRweDtcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1517:
/*!**************************************************************!*\
  !*** ./src/app/components/manager/manager-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagerRoutingModule: () => (/* binding */ ManagerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _manager_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-dashboard.component */ 5056);
/* harmony import */ var _guards_manager_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/manager-auth.guard */ 8190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: '',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_manager_manager-auth_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manager-auth.component */ 3346)).then(c => c.ManagerAuthComponent)
}, {
  path: 'login',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_manager_manager-auth_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manager-auth.component */ 3346)).then(c => c.ManagerAuthComponent)
}, {
  path: 'dashboard',
  component: _manager_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.ManagerDashboardComponent,
  canActivate: [_guards_manager_auth_guard__WEBPACK_IMPORTED_MODULE_1__.ManagerAuthGuard]
}, {
  path: 'auth',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_manager_manager-auth_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manager-auth.component */ 3346)).then(c => c.ManagerAuthComponent)
}];
class ManagerRoutingModule {
  static {
    this.ɵfac = function ManagerRoutingModule_Factory(t) {
      return new (t || ManagerRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ManagerRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManagerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 1556:
/*!******************************************************!*\
  !*** ./src/app/components/manager/manager.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagerModule: () => (/* binding */ ManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _manager_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-dashboard.component */ 5056);
/* harmony import */ var _task_recommendation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-recommendation.component */ 2417);
/* harmony import */ var _project_simulator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-simulator.component */ 2580);
/* harmony import */ var _enhanced_gantt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enhanced-gantt.component */ 5775);
/* harmony import */ var _task_time_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-time-tracker.component */ 5934);
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manager-routing.module */ 1517);
/* harmony import */ var _services_ia_recommendation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ia-recommendation.service */ 8028);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/skills.service */ 8772);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/analytics.service */ 2210);
/* harmony import */ var _services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/task-enhanced.service */ 6784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);













class ManagerModule {
  static {
    this.ɵfac = function ManagerModule_Factory(t) {
      return new (t || ManagerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: ManagerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      providers: [_services_ia_recommendation_service__WEBPACK_IMPORTED_MODULE_6__.IARecommendationService, _services_skills_service__WEBPACK_IMPORTED_MODULE_7__.SkillsService, _services_analytics_service__WEBPACK_IMPORTED_MODULE_8__.AnalyticsService, _services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_9__.TaskEnhancedService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _manager_routing_module__WEBPACK_IMPORTED_MODULE_5__.ManagerRoutingModule, _enhanced_gantt_component__WEBPACK_IMPORTED_MODULE_3__.EnhancedGanttComponent, _task_time_tracker_component__WEBPACK_IMPORTED_MODULE_4__.TaskTimeTrackerComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ManagerModule, {
    declarations: [_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.ManagerDashboardComponent, _task_recommendation_component__WEBPACK_IMPORTED_MODULE_1__.TaskRecommendationComponent, _project_simulator_component__WEBPACK_IMPORTED_MODULE_2__.ProjectSimulatorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _manager_routing_module__WEBPACK_IMPORTED_MODULE_5__.ManagerRoutingModule, _enhanced_gantt_component__WEBPACK_IMPORTED_MODULE_3__.EnhancedGanttComponent, _task_time_tracker_component__WEBPACK_IMPORTED_MODULE_4__.TaskTimeTrackerComponent]
  });
})();

/***/ }),

/***/ 2580:
/*!*******************************************************************!*\
  !*** ./src/app/components/manager/project-simulator.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectSimulatorComponent: () => (/* binding */ ProjectSimulatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_ia_recommendation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ia-recommendation.service */ 8028);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function ProjectSimulatorComponent_div_33_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_div_33_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeObjective(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectSimulatorComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectSimulatorComponent_div_33_button_3_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.objectivesArray.length > 1);
  }
}
function ProjectSimulatorComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ajoutez au moins un objectif pour le projet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectSimulatorComponent_div_39_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 48);
  }
}
function ProjectSimulatorComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_div_39_Template_div_click_0_listener() {
      const employee_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleEmployeeSelection(employee_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 43)(4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProjectSimulatorComponent_div_39_i_9_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const employee_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r2.isEmployeeSelected(employee_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEmployeeSelected(employee_r5.id));
  }
}
function ProjectSimulatorComponent_div_48_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_div_48_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const taskIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeTask(taskIndex_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectSimulatorComponent_div_48_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Aucune comp\u00E9tence requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProjectSimulatorComponent_div_48_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_div_48_div_24_Template_button_click_8_listener() {
      const reqIndex_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9).index;
      const taskIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeTaskRequirement(taskIndex_r8, reqIndex_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const requirement_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid-requirement", !requirement_r11.value.skillName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](requirement_r11.value.skillName || "Non sp\u00E9cifi\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Niveau: ", requirement_r11.value.requiredLevel, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Importance: ", requirement_r11.value.importance, "");
  }
}
function ProjectSimulatorComponent_div_48_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74)(1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_div_48_div_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const taskIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.clearEmptyRequirements(taskIndex_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Supprimer les comp\u00E9tences vides ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProjectSimulatorComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 53)(5, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Faible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00C9lev\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProjectSimulatorComponent_div_48_button_13_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 61)(17, "div", 62)(18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Comp\u00E9tences requises");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_div_48_Template_button_click_20_listener() {
      const taskIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.addTaskRequirement(taskIndex_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProjectSimulatorComponent_div_48_div_23_Template, 3, 0, "div", 66)(24, ProjectSimulatorComponent_div_48_div_24_Template, 10, 5, "div", 67)(25, ProjectSimulatorComponent_div_48_div_25_Template, 4, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const taskIndex_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", taskIndex_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.tasksArray.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getTaskRequirements(taskIndex_r8).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.getTaskRequirements(taskIndex_r8).controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getTaskRequirements(taskIndex_r8).length > 0);
  }
}
function ProjectSimulatorComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ajoutez au moins une t\u00E2che pour le projet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectSimulatorComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77)(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "L'IA analyse et g\u00E9n\u00E8re le planning optimal...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function ProjectSimulatorComponent_div_58_div_22_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r13.name, " ");
  }
}
function ProjectSimulatorComponent_div_58_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 96)(1, "div", 97)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectSimulatorComponent_div_58_div_22_div_7_span_7_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const employee_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r14.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.getEmployeeTopSkills(employee_r14.id, 3));
  }
}
function ProjectSimulatorComponent_div_58_div_22_div_11_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", skill_r15.name, " (Niv.", skill_r15.level, ") ");
  }
}
function ProjectSimulatorComponent_div_58_div_22_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 104)(7, "div", 51)(8, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 107)(13, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\uD83D\uDEE0\uFE0F Comp\u00E9tences utilis\u00E9es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProjectSimulatorComponent_div_58_div_22_div_11_span_16_Template, 2, 2, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const assignment_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getTaskTitle(assignment_r16.taskId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDC64 ", assignment_r16.employeeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u23F1\uFE0F ", ctx_r2.getTaskDuration(assignment_r16.taskId), "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83C\uDFAF ", ctx_r2.getTaskPriority(assignment_r16.taskId), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.getEmployeeSkills(assignment_r16.employeeId));
  }
}
function ProjectSimulatorComponent_div_58_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCCB D\u00E9tails des Affectations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 91)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\uD83D\uDC65 \u00C9quipe S\u00E9lectionn\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectSimulatorComponent_div_58_div_22_div_7_Template, 8, 3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 94)(9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\uD83D\uDCDD Affectations des T\u00E2ches");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectSimulatorComponent_div_58_div_22_div_11_Template, 17, 5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.getSelectedEmployees());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.taskAssignments);
  }
}
function ProjectSimulatorComponent_div_58_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 112)(1, "div", 113)(2, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 116)(7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatDate(item_r17.startDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatDate(item_r17.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r17.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Dur\u00E9e: ", item_r17.duration, " jours");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r2.getPriorityColor(item_r17.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r17.priority, " ");
  }
}
function ProjectSimulatorComponent_div_58_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const recommendation_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recommendation_r18);
  }
}
function ProjectSimulatorComponent_div_58_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 118)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCA1 Recommandations IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectSimulatorComponent_div_58_div_28_div_4_Template, 4, 1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.recommendations);
  }
}
function ProjectSimulatorComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79)(1, "div", 80)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "R\u00E9sultats de la Simulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 83)(8, "div", 84)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\uD83D\uDCC5 Planning G\u00E9n\u00E9r\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date de fin estim\u00E9e: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 84)(16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\uD83D\uDC65 Affectations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p")(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " t\u00E2ches assign\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProjectSimulatorComponent_div_58_div_22_Template, 12, 2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 86)(24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Timeline du Projet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProjectSimulatorComponent_div_58_div_27_Template, 13, 7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProjectSimulatorComponent_div_58_div_28_Template, 5, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r2.getRiskLevelColor(ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.riskLevel));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Risque: ", ctx_r2.getRiskLevelLabel(ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.riskLevel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatDate(ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.estimatedCompletion));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.taskAssignments == null ? null : ctx_r2.simulationResult.taskAssignments.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.taskAssignments == null ? null : ctx_r2.simulationResult.taskAssignments.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.timeline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.recommendations) && (ctx_r2.simulationResult == null ? null : ctx_r2.simulationResult.recommendations == null ? null : ctx_r2.simulationResult.recommendations.length) > 0);
  }
}
class ProjectSimulatorComponent {
  constructor(fb, iaService) {
    this.fb = fb;
    this.iaService = iaService;
    this.simulationResult = null;
    this.loading = false;
    this.showResults = false;
    this.availableEmployees = [];
    // Options pour les compétences (chargées depuis le backend)
    this.availableSkills = [];
    // Profils des employés
    this.employeeProfiles = [];
    this.initializeForm();
  }
  ngOnInit() {
    this.loadEmployeeData();
    // Ajouter seulement un objectif par défaut après le chargement des données
    setTimeout(() => {
      this.addObjective();
      // Ne pas ajouter de tâche par défaut pour éviter les requirements vides
    }, 500);
  }
  // Charger les données des employés depuis le backend
  loadEmployeeData() {
    this.iaService.getEmployeeSkillsProfiles().subscribe({
      next: profiles => {
        this.employeeProfiles = profiles;
        console.log('Profils employés chargés pour simulateur:', profiles);
        console.log('🔍 Vérification employeeName dans les profils:');
        profiles.slice(0, 3).forEach((profile, index) => {
          console.log(`  - Employé ${index}: ID=${profile.employeeId}, Name=${profile.employeeName}`);
        });
        // Extraire les employés disponibles
        this.availableEmployees = profiles.map(profile => ({
          id: profile.employeeId,
          name: profile.employeeName || `Employé ${profile.employeeId}`,
          role: profile.specialities?.[0]?.name || 'Développeur'
        }));
        console.log('🔍 AvailableEmployees après mapping:');
        this.availableEmployees.slice(0, 3).forEach((emp, index) => {
          console.log(`  - ${index}: ID=${emp.id}, Name=${emp.name}`);
        });
        // Extraire toutes les compétences uniques
        const allSkills = new Set();
        profiles.forEach(profile => {
          profile.skills.forEach(skill => {
            allSkills.add(skill.name);
          });
        });
        this.availableSkills = Array.from(allSkills).sort();
        console.log('Employés disponibles:', this.availableEmployees);
        console.log('Compétences disponibles:', this.availableSkills);
      },
      error: error => {
        console.error('Erreur lors du chargement des données employés:', error);
        // En cas d'erreur, utiliser les données par défaut
        this.availableEmployees = [{
          id: 1,
          name: 'Jean Dupont',
          role: 'Développeur Senior'
        }, {
          id: 2,
          name: 'Marie Martin',
          role: 'Développeur Frontend'
        }, {
          id: 3,
          name: 'Pierre Durand',
          role: 'Développeur Backend'
        }];
        this.availableSkills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Docker', 'MySQL'];
      }
    });
  }
  initializeForm() {
    this.projectForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      duration: [30, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(365)]],
      objectives: this.fb.array([]),
      availableEmployees: [[]],
      tasks: this.fb.array([])
    });
  }
  get objectivesArray() {
    return this.projectForm.get('objectives');
  }
  get tasksArray() {
    return this.projectForm.get('tasks');
  }
  addObjective() {
    const objectiveGroup = this.fb.group({
      description: ['Objectif du projet', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.objectivesArray.push(objectiveGroup);
  }
  removeObjective(index) {
    this.objectivesArray.removeAt(index);
  }
  addTask() {
    const taskGroup = this.fb.group({
      title: ['Nouvelle tâche', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['Description de la tâche', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      estimatedHours: [8, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      priority: ['medium', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      requirements: this.fb.array([])
    });
    this.tasksArray.push(taskGroup);
  }
  removeTask(index) {
    this.tasksArray.removeAt(index);
  }
  getTaskRequirements(taskIndex) {
    return this.tasksArray.at(taskIndex).get('requirements');
  }
  // Obtenir le contrôle direct pour éviter les problèmes de formArrayName imbriqués
  getTaskRequirementControl(taskIndex, reqIndex, controlName) {
    return this.tasksArray.at(taskIndex).get(['requirements', reqIndex, controlName]);
  }
  addTaskRequirement(taskIndex) {
    const requirementGroup = this.fb.group({
      skillName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      requiredLevel: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(5)]],
      importance: ['medium', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.getTaskRequirements(taskIndex).push(requirementGroup);
  }
  removeTaskRequirement(taskIndex, requirementIndex) {
    this.getTaskRequirements(taskIndex).removeAt(requirementIndex);
  }
  // Supprimer les requirements vides (sans skillName)
  clearEmptyRequirements(taskIndex) {
    const requirements = this.getTaskRequirements(taskIndex);
    console.log(`🧹 Nettoyage des requirements pour la tâche ${taskIndex}. Avant: ${requirements.length} requirements`);
    // Trouver les indices des requirements vides à supprimer
    const indicesToRemove = [];
    requirements.controls.forEach((req, index) => {
      if (!req.value.skillName || req.value.skillName.trim() === '') {
        indicesToRemove.push(index);
      }
    });
    // Supprimer en partant de la fin pour éviter les problèmes d'indices
    indicesToRemove.reverse().forEach(index => {
      requirements.removeAt(index);
      console.log(`  - Supprimé requirement ${index} (skillName vide)`);
    });
    console.log(`✅ Requirements nettoyés pour la tâche ${taskIndex}. ${requirements.length} requirements restants.`);
  }
  simulateProject() {
    console.log('🔍 Validation du formulaire de simulation...');
    console.log('Formulaire valide:', this.projectForm.valid);
    console.log('Valeurs du formulaire:', this.projectForm.value);
    console.log('Nombre de tâches:', this.tasksArray.length);
    console.log('Nombre d\'objectifs:', this.objectivesArray.length);
    console.log('Employés sélectionnés:', this.projectForm.value.availableEmployees);
    // Vérifier chaque champ individuellement
    console.log('🔍 Validation des champs individuels:');
    console.log('  - name:', this.projectForm.get('name')?.valid, 'valeur:', this.projectForm.get('name')?.value);
    console.log('  - description:', this.projectForm.get('description')?.valid, 'valeur:', this.projectForm.get('description')?.value);
    console.log('  - duration:', this.projectForm.get('duration')?.valid, 'valeur:', this.projectForm.get('duration')?.value);
    console.log('  - availableEmployees:', this.projectForm.get('availableEmployees')?.valid, 'valeur:', this.projectForm.get('availableEmployees')?.value);
    console.log('  - objectives:', this.objectivesArray.valid, 'nombre:', this.objectivesArray.length);
    console.log('  - tasks:', this.tasksArray.valid, 'nombre:', this.tasksArray.length);
    // Vérifier chaque tâche individuellement
    console.log('🔍 Validation des tâches individuelles:');
    this.tasksArray.controls.forEach((task, index) => {
      console.log(`  - Tâche ${index}:`, task.valid, 'valeurs:', task.value);
      console.log(`    - title:`, task.get('title')?.valid, 'valeur:', task.get('title')?.value);
      console.log(`    - description:`, task.get('description')?.valid, 'valeur:', task.get('description')?.value);
      console.log(`    - estimatedHours:`, task.get('estimatedHours')?.valid, 'valeur:', task.get('estimatedHours')?.value);
      console.log(`    - priority:`, task.get('priority')?.valid, 'valeur:', task.get('priority')?.value);
      console.log(`    - requirements:`, task.get('requirements')?.valid, 'nombre:', task.get('requirements')?.length);
      // Vérifier chaque requirement individuellement
      const requirementsArray = task.get('requirements');
      if (requirementsArray && requirementsArray.length > 0) {
        requirementsArray.controls.forEach((req, reqIndex) => {
          console.log(`      - Requirement ${reqIndex}:`, req.valid, 'valeurs:', req.value);
          console.log(`        - skillName:`, req.get('skillName')?.valid, 'valeur:', req.get('skillName')?.value);
          console.log(`        - requiredLevel:`, req.get('requiredLevel')?.valid, 'valeur:', req.get('requiredLevel')?.value);
          console.log(`        - importance:`, req.get('importance')?.valid, 'valeur:', req.get('importance')?.value);
        });
      }
    });
    // Vérifier les erreurs de chaque champ
    console.log('🔍 Erreurs des champs:');
    console.log('  - name errors:', this.projectForm.get('name')?.errors);
    console.log('  - description errors:', this.projectForm.get('description')?.errors);
    console.log('  - duration errors:', this.projectForm.get('duration')?.errors);
    console.log('  - availableEmployees errors:', this.projectForm.get('availableEmployees')?.errors);
    if (this.projectForm.invalid) {
      console.log('❌ Formulaire invalide - erreurs:', this.projectForm.errors);
      const missingFields = [];
      if (!this.projectForm.get('name')?.valid) missingFields.push('Nom du projet');
      if (!this.projectForm.get('description')?.valid) missingFields.push('Description');
      if (!this.projectForm.get('duration')?.valid) missingFields.push('Durée');
      if (!this.projectForm.get('availableEmployees')?.valid) missingFields.push('Équipe');
      alert(`Veuillez remplir les champs obligatoires: ${missingFields.join(', ')}`);
      return;
    }
    if (this.tasksArray.length === 0) {
      console.log('❌ Aucune tâche ajoutée');
      alert('Veuillez ajouter au moins une tâche au projet');
      return;
    }
    // Vérifier que toutes les tâches ont des requirements valides
    let hasInvalidRequirements = false;
    this.tasksArray.controls.forEach((task, index) => {
      const requirements = task.get('requirements');
      if (requirements.length > 0) {
        requirements.controls.forEach(req => {
          if (!req.valid) {
            hasInvalidRequirements = true;
            console.log(`❌ Requirement invalide dans la tâche ${index}:`, req.value);
          }
        });
      }
    });
    if (hasInvalidRequirements) {
      alert('Veuillez compléter toutes les compétences requises pour chaque tâche (supprimez les compétences vides ou complétez-les)');
      return;
    }
    if (this.objectivesArray.length === 0) {
      console.log('❌ Aucun objectif ajouté');
      alert('Veuillez ajouter au moins un objectif au projet');
      return;
    }
    console.log('✅ Validation réussie - lancement de la simulation');
    this.loading = true;
    const projectData = {
      id: Date.now(),
      name: this.projectForm.value.name,
      description: this.projectForm.value.description,
      duration: this.projectForm.value.duration,
      objectives: this.projectForm.value.objectives.map(obj => obj.description),
      availableEmployees: this.projectForm.value.availableEmployees,
      tasks: this.formatTasks(this.projectForm.value.tasks),
      generatedPlan: null
    };
    this.iaService.simulateProject(projectData).subscribe({
      next: simulation => {
        console.log('✅ Simulation terminée avec succès!');
        console.log('📊 Données brutes reçues:', simulation);
        console.log('📊 Type de simulation:', typeof simulation);
        console.log('📊 Clés de simulation:', Object.keys(simulation));
        // Les données sont directement dans simulation, pas dans simulation.data
        const results = simulation;
        console.log('📊 Données de simulation:', results);
        console.log('📊 Résumé des résultats:');
        console.log(`  - ${results?.taskAssignments?.length || 0} tâches assignées`);
        console.log(`  - Risque: ${results?.riskLevel}`);
        console.log(`  - Date de fin: ${results?.estimatedCompletion}`);
        console.log(`  - Recommandations:`, results?.recommendations);
        if (results?.debugInfo) {
          console.log('🔍 Debug info:');
          console.log(`  - Total tâches: ${results.debugInfo.totalTasks}`);
          console.log(`  - Total employés: ${results.debugInfo.totalEmployees}`);
          console.log(`  - Total assignations: ${results.debugInfo.totalAssignations}`);
        }
        this.simulationResult = results;
        this.showResults = true;
        this.loading = false;
      },
      error: error => {
        console.error('Erreur lors de la simulation:', error);
        this.loading = false;
        alert('Erreur lors de la simulation du projet');
      }
    });
  }
  formatTasks(tasks) {
    return tasks.map((task, index) => ({
      id: index + 1,
      title: task.title,
      description: task.description,
      requirements: task.requirements || [],
      estimatedHours: task.estimatedHours,
      priority: task.priority,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 jours par défaut
    }));
  }
  resetForm() {
    this.projectForm.reset({
      name: '',
      description: '',
      duration: 30,
      availableEmployees: []
    });
    while (this.objectivesArray.length > 0) {
      this.objectivesArray.removeAt(0);
    }
    while (this.tasksArray.length > 0) {
      this.tasksArray.removeAt(0);
    }
    this.showResults = false;
    this.simulationResult = null;
  }
  // Méthodes utilitaires
  getPriorityColor(priority) {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  }
  getImportanceColor(importance) {
    switch (importance) {
      case 'critical':
        return '#dc2626';
      case 'high':
        return '#ea580c';
      case 'medium':
        return '#d97706';
      case 'low':
        return '#65a30d';
      default:
        return '#6b7280';
    }
  }
  getImportanceLabel(importance) {
    switch (importance) {
      case 'critical':
        return 'Critique';
      case 'high':
        return 'Élevée';
      case 'medium':
        return 'Moyenne';
      case 'low':
        return 'Faible';
      default:
        return importance;
    }
  }
  getLevelLabel(level) {
    const labels = ['', 'Débutant', 'Intermédiaire', 'Compétent', 'Avancé', 'Expert'];
    return labels[level] || '';
  }
  getRiskLevelColor(riskLevel) {
    switch (riskLevel) {
      case 'low':
        return '#10b981';
      case 'medium':
        return '#f59e0b';
      case 'high':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  }
  getRiskLevelLabel(riskLevel) {
    switch (riskLevel) {
      case 'low':
        return 'Faible';
      case 'medium':
        return 'Moyen';
      case 'high':
        return 'Élevé';
      default:
        return riskLevel;
    }
  }
  // Formater les dates
  formatDate(date) {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  // Calculer la durée totale
  getTotalEstimatedHours() {
    return this.tasksArray.controls.reduce((total, task) => {
      return total + (task.value.estimatedHours || 0);
    }, 0);
  }
  // Obtenir le nom d'un employé
  getEmployeeName(employeeId) {
    const employee = this.availableEmployees.find(emp => emp.id === employeeId);
    return employee ? employee.name : `Employé ${employeeId}`;
  }
  // Obtenir les détails d'un employé pour l'affichage
  getEmployeeDetails(employeeId) {
    const employee = this.employeeProfiles.find(profile => profile.employeeId === employeeId);
    if (employee) {
      return {
        id: employee.employeeId,
        name: `Employé ${employee.employeeId}`,
        skills: employee.skills.slice(0, 3),
        overallScore: employee.overallScore
      };
    }
    return {
      id: employeeId,
      name: `Employé ${employeeId}`,
      skills: [],
      overallScore: 0
    };
  }
  // Vérifier si un employé est sélectionné
  isEmployeeSelected(employeeId) {
    const selectedEmployees = this.projectForm.value.availableEmployees || [];
    return selectedEmployees.includes(employeeId);
  }
  // Obtenir le titre d'une tâche depuis son ID
  getTaskTitle(taskId) {
    const tasks = this.projectForm.value.tasks || [];
    const task = tasks.find(t => t.id === taskId);
    return task?.title || `Tâche ${taskId}`;
  }
  // Obtenir les compétences d'un employé
  getEmployeeSkills(employeeId) {
    const employee = this.employeeProfiles.find(profile => profile.employeeId === employeeId);
    if (employee && employee.skills) {
      // Retourner les 5 meilleures compétences
      return employee.skills.sort((a, b) => b.level - a.level).slice(0, 5);
    }
    return [];
  }
  // Obtenir les employés sélectionnés
  getSelectedEmployees() {
    const selectedIds = this.projectForm.value.availableEmployees || [];
    return this.availableEmployees.filter(emp => selectedIds.includes(emp.id));
  }
  // Obtenir les top compétences d'un employé
  getEmployeeTopSkills(employeeId, count) {
    const employee = this.employeeProfiles.find(profile => profile.employeeId === employeeId);
    if (employee && employee.skills) {
      return employee.skills.sort((a, b) => b.level - a.level).slice(0, count);
    }
    return [];
  }
  // Obtenir la durée d'une tâche
  getTaskDuration(taskId) {
    const tasks = this.projectForm.value.tasks || [];
    const task = tasks.find(t => t.id === taskId);
    return task?.estimatedHours || 8;
  }
  // Obtenir la priorité d'une tâche
  getTaskPriority(taskId) {
    const tasks = this.projectForm.value.tasks || [];
    const task = tasks.find(t => t.id === taskId);
    return task?.priority || 'medium';
  }
  toggleEmployeeSelection(employeeId) {
    const currentSelection = this.projectForm.value.availableEmployees || [];
    const index = currentSelection.indexOf(employeeId);
    if (index > -1) {
      currentSelection.splice(index, 1);
    } else {
      currentSelection.push(employeeId);
    }
    this.projectForm.patchValue({
      availableEmployees: currentSelection
    });
  }
  static {
    this.ɵfac = function ProjectSimulatorComponent_Factory(t) {
      return new (t || ProjectSimulatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ia_recommendation_service__WEBPACK_IMPORTED_MODULE_0__.IARecommendationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectSimulatorComponent,
      selectors: [["app-project-simulator"]],
      decls: 59,
      vars: 10,
      consts: [[1, "project-simulator-container"], [1, "simulator-header"], [1, "page-title"], [1, "bi", "bi-cpu"], [1, "page-description"], [1, "project-form-container"], [1, "project-form", 3, "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Ex: Refonte site e-commerce"], ["type", "number", "formControlName", "duration", "min", "1", "max", "365"], [1, "form-group", "full-width"], ["formControlName", "description", "rows", "3", "placeholder", "D\u00E9crivez le projet en d\u00E9tail..."], [1, "section-header"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], ["formArrayName", "objectives", 1, "objectives-container"], ["class", "objective-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "no-objectives", 4, "ngIf"], [1, "employees-grid"], ["class", "employee-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["formArrayName", "tasks", 1, "tasks-container"], ["class", "task-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "no-tasks", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-clockwise"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-play-circle"], ["class", "loading-container", 4, "ngIf"], ["class", "simulation-results", 4, "ngIf"], [1, "objective-item", 3, "formGroupName"], [1, "objective-content"], ["type", "text", "formControlName", "description", "placeholder", "Ex: Lancer le site en production"], ["type", "button", "class", "btn-remove", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-remove", 3, "click"], [1, "bi", "bi-trash"], [1, "no-objectives"], [1, "bi", "bi-info-circle"], [1, "employee-card", 3, "click"], [1, "employee-avatar"], [1, "bi", "bi-person-circle"], [1, "employee-info"], [1, "employee-name"], [1, "employee-role"], [1, "employee-checkbox"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "bi", "bi-check-circle"], [1, "task-item", 3, "formGroupName"], [1, "task-header"], [1, "task-info"], ["type", "text", "formControlName", "title", "placeholder", "Titre de la t\u00E2che", 1, "task-title"], ["formControlName", "priority", 1, "task-priority"], ["value", "low"], ["value", "medium"], ["value", "high"], [1, "task-actions"], ["type", "number", "formControlName", "estimatedHours", "min", "1", "max", "200", "placeholder", "Heures", 1, "task-hours"], [1, "task-description"], ["formControlName", "description", "rows", "2", "placeholder", "Description de la t\u00E2che..."], [1, "task-requirements"], [1, "requirements-header"], ["type", "button", 1, "btn-small", 3, "click"], [1, "bi", "bi-plus"], [1, "requirements-list"], ["class", "requirement-info", 4, "ngIf"], ["class", "requirement-item", 4, "ngFor", "ngForOf"], ["class", "requirement-actions", 4, "ngIf"], [1, "requirement-info"], [1, "requirement-item"], [1, "requirement-summary"], ["type", "button", 1, "btn-remove-small", 3, "click"], [1, "bi", "bi-x"], [1, "requirement-actions"], ["type", "button", 1, "btn-small", "btn-warning", 3, "click"], [1, "no-tasks"], [1, "loading-container"], [1, "loading-spinner"], [1, "simulation-results"], [1, "results-header"], [1, "risk-indicator"], [1, "bi", "bi-shield-exclamation"], [1, "results-summary"], [1, "summary-card"], ["class", "assignments-details", 4, "ngIf"], [1, "timeline-section"], [1, "timeline-container"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["class", "recommendations-section", 4, "ngIf"], [1, "assignments-details"], [1, "team-summary"], [1, "team-members"], ["class", "team-member", 4, "ngFor", "ngForOf"], [1, "assignments-list"], ["class", "assignment-item", 4, "ngFor", "ngForOf"], [1, "team-member"], [1, "member-info"], [1, "member-role"], [1, "member-skills"], ["class", "skill-small", 4, "ngFor", "ngForOf"], [1, "skill-small"], [1, "assignment-item"], [1, "assignment-header"], [1, "task-details"], [1, "task-duration"], [1, "task-priority"], [1, "employee-skills"], [1, "skills-label"], [1, "skills-list"], ["class", "skill-badge", 4, "ngFor", "ngForOf"], [1, "skill-badge"], [1, "timeline-item"], [1, "timeline-date"], [1, "date-start"], [1, "date-end"], [1, "timeline-content"], [1, "priority-badge"], [1, "recommendations-section"], [1, "recommendations-list"], ["class", "recommendation-item", 4, "ngFor", "ngForOf"], [1, "recommendation-item"], [1, "bi", "bi-lightbulb"]],
      template: function ProjectSimulatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Simulateur de Gestion de Projet IA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Configurez votre projet et l'IA g\u00E9n\u00E9rera automatiquement un planning optimal avec r\u00E9partition des t\u00E2ches ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Informations du Projet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nom du projet *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Dur\u00E9e (jours) *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7)(26, "div", 14)(27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Objectifs du Projet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_Template_button_click_29_listener() {
            return ctx.addObjective();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Ajouter un objectif ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProjectSimulatorComponent_div_33_Template, 4, 2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ProjectSimulatorComponent_div_34_Template, 3, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7)(36, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00C9quipe Disponible");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProjectSimulatorComponent_div_39_Template, 10, 5, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7)(41, "div", 14)(42, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "T\u00E2ches du Projet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_Template_button_click_44_listener() {
            return ctx.addTask();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Ajouter une t\u00E2che ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ProjectSimulatorComponent_div_48_Template, 26, 5, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ProjectSimulatorComponent_div_49_Template, 3, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 25)(51, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_Template_button_click_51_listener() {
            return ctx.resetForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " R\u00E9initialiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectSimulatorComponent_Template_button_click_54_listener() {
            return ctx.simulateProject();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ProjectSimulatorComponent_div_57_Template, 5, 0, "div", 30)(58, ProjectSimulatorComponent_div_58_Template, 29, 8, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.projectForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.objectivesArray.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.objectivesArray.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableEmployees);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tasksArray.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tasksArray.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.tasksArray.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Simulation en cours..." : "Lancer la simulation IA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showResults && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName],
      styles: [".project-simulator-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.simulator-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n\n.page-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n\n\n\n.project-form-container[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 32px;\n}\n\n.project-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s ease;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n\n\n.objectives-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.objective-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n}\n\n.objective-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.objective-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n\n.objective-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #f9fafb;\n}\n\n.no-objectives[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: #6b7280;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.no-objectives[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.employees-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n\n.employee-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.employee-card[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);\n}\n\n.employee-card.selected[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n\n.employee-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6b7280;\n  font-size: 18px;\n}\n\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.employee-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  font-size: 14px;\n}\n\n.employee-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n\n.employee-checkbox[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-size: 18px;\n}\n\n\n\n.tasks-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.task-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.task-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  gap: 16px;\n}\n\n.task-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n\n.task-title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #f9fafb;\n}\n\n.task-priority[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n  border: none;\n}\n\n.task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.task-hours[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 6px 8px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.task-description[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.task-description[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e5e7eb;\n  border-radius: 4px;\n  padding: 8px;\n  font-size: 13px;\n  resize: vertical;\n  min-height: 60px;\n}\n\n.task-requirements[_ngcontent-%COMP%] {\n  border-top: 1px solid #f3f4f6;\n  padding-top: 12px;\n}\n\n.requirements-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.requirements-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n\n.requirements-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.requirement-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n}\n\n.skill-select[_ngcontent-%COMP%], .importance-select[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 11px;\n}\n\n.level-range[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.btn-remove-small[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 2px 4px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 10px;\n}\n\n.no-tasks[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: #6b7280;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.no-tasks[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 24px;\n  border-top: 2px solid #e5e7eb;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 12px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n  border: none;\n  padding: 12px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n\n.btn-small[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  cursor: pointer;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n\n\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: #6b7280;\n}\n\n.loading-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n\n\n\n.simulation-results[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n\n.results-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.results-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n\n.risk-indicator[_ngcontent-%COMP%] {\n  color: white;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.results-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  text-align: center;\n}\n\n.summary-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 14px;\n}\n\n\n\n.timeline-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.timeline-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 16px 0;\n}\n\n.timeline-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n\n.timeline-date[_ngcontent-%COMP%] {\n  min-width: 120px;\n  text-align: center;\n}\n\n.date-start[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n\n.date-end[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.timeline-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 4px 0;\n}\n\n.timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #6b7280;\n  font-size: 14px;\n}\n\n.priority-badge[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n\n\n.recommendations-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 16px 0;\n}\n\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.recommendation-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  background: #fef3c7;\n  border: 1px solid #f59e0b;\n  border-radius: 6px;\n}\n\n.recommendation-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 16px;\n  margin-top: 2px;\n}\n\n.recommendation-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #92400e;\n  font-size: 14px;\n  line-height: 1.4;\n}\n\n\n\n@media (max-width: 768px) {\n  .project-simulator-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  \n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .employees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .task-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  \n  .task-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .results-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n  \n  .results-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .timeline-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  \n  .timeline-date[_ngcontent-%COMP%] {\n    min-width: auto;\n    text-align: left;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL3Byb2plY3Qtc2ltdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLGVBQWU7QUFDZjtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0Usa0JB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LE9BQU87RUFDUCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtc2ltdWxhdG9yLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyogRW4tdMODwqp0ZSAqL1xuLnNpbXVsYXRvci1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucGFnZS10aXRsZSBpIHtcbiAgY29sb3I6ICMzYjgyZjY7XG59XG5cbi5wYWdlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi8qIEZvcm11bGFpcmUgKi9cbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLmZvcm0tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmZvcm0tc2VjdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cblxuLmZvcm0tZ3JvdXAuZnVsbC13aWR0aCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM3NDE1MTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsXG4uZm9ybS1ncm91cCBzZWxlY3QsXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLFxuLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzLFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICMzYjgyZjY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKTtcbn1cblxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG4vKiBPYmplY3RpZnMgKi9cbi5vYmplY3RpdmVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLm9iamVjdGl2ZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLm9iamVjdGl2ZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ub2JqZWN0aXZlLWNvbnRlbnQgaW5wdXQge1xuICBmbGV4OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm9iamVjdGl2ZS1jb250ZW50IGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbn1cblxuLm5vLW9iamVjdGl2ZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLm5vLW9iamVjdGl2ZXMgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLyogRW1wbG95w4PCqXMgKi9cbi5lbXBsb3llZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZW1wbG95ZWUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZW1wbG95ZWUtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzNiODJmNjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xufVxuXG4uZW1wbG95ZWUtY2FyZC5zZWxlY3RlZCB7XG4gIGJvcmRlci1jb2xvcjogIzNiODJmNjtcbiAgYmFja2dyb3VuZDogI2VmZjZmZjtcbn1cblxuLmVtcGxveWVlLWF2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5lbXBsb3llZS1pbmZvIHtcbiAgZmxleDogMTtcbn1cblxuLmVtcGxveWVlLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW1wbG95ZWUtcm9sZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi5lbXBsb3llZS1jaGVja2JveCB7XG4gIGNvbG9yOiAjM2I4MmY2O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIFTDg8KiY2hlcyAqL1xuLnRhc2tzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnRhc2staXRlbSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi50YXNrLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4udGFzay1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4OiAxO1xufVxuXG4udGFzay10aXRsZSB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRhc2stdGl0bGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xufVxuXG4udGFzay1wcmlvcml0eSB7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRhc2stYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4udGFzay1ob3VycyB7XG4gIHdpZHRoOiA4MHB4O1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udGFzay1kZXNjcmlwdGlvbiB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG4udGFzay1yZXF1aXJlbWVudHMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjRmNjtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5yZXF1aXJlbWVudHMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5yZXF1aXJlbWVudHMtaGVhZGVyIGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM3NDE1MTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucmVxdWlyZW1lbnRzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4ucmVxdWlyZW1lbnQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5za2lsbC1zZWxlY3QsXG4uaW1wb3J0YW5jZS1zZWxlY3Qge1xuICBwYWRkaW5nOiA0cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmxldmVsLXJhbmdlIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5idG4tcmVtb3ZlLXNtYWxsIHtcbiAgYmFja2dyb3VuZDogI2VmNDQ0NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5uby10YXNrcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ubm8tdGFza3MgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLyogQWN0aW9ucyAqL1xuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTVlN2ViO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjM2I4MmY2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XG59XG5cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjNmI3MjgwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRiNTU2Mztcbn1cblxuLmJ0bi1zbWFsbCB7XG4gIGJhY2tncm91bmQ6ICMzYjgyZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXJlbW92ZSB7XG4gIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1yZW1vdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xufVxuXG4vKiBMb2FkaW5nICovXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGNvbG9yOiAjNmI3MjgwO1xufVxuXG4ubG9hZGluZy1zcGlubmVyIGkge1xuICBmb250LXNpemU6IDMycHg7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC41OyB9XG59XG5cbi8qIFLDg8Kpc3VsdGF0cyAqL1xuLnNpbXVsYXRpb24tcmVzdWx0cyB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5yZXN1bHRzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnJlc3VsdHMtaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luOiAwO1xufVxuXG4ucmlzay1pbmRpY2F0b3Ige1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4ucmVzdWx0cy1zdW1tYXJ5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VtbWFyeS1jYXJkIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG5cbi5zdW1tYXJ5LWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogVGltZWxpbmUgKi9cbi50aW1lbGluZS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnRpbWVsaW5lLXNlY3Rpb24gaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBtYXJnaW46IDAgMCAxNnB4IDA7XG59XG5cbi50aW1lbGluZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi50aW1lbGluZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRpbWVsaW5lLWRhdGUge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kYXRlLXN0YXJ0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uZGF0ZS1lbmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xufVxuXG4udGltZWxpbmUtY29udGVudCB7XG4gIGZsZXg6IDE7XG59XG5cbi50aW1lbGluZS1jb250ZW50IGg1IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luOiAwIDAgNHB4IDA7XG59XG5cbi50aW1lbGluZS1jb250ZW50IHAge1xuICBtYXJnaW46IDAgMCA4cHggMDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByaW9yaXR5LWJhZGdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLyogUmVjb21tYW5kYXRpb25zICovXG4ucmVjb21tZW5kYXRpb25zLXNlY3Rpb24gaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBtYXJnaW46IDAgMCAxNnB4IDA7XG59XG5cbi5yZWNvbW1lbmRhdGlvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLnJlY29tbWVuZGF0aW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjU5ZTBiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5yZWNvbW1lbmRhdGlvbi1pdGVtIGkge1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5yZWNvbW1lbmRhdGlvbi1pdGVtIHNwYW4ge1xuICBmbGV4OiAxO1xuICBjb2xvcjogIzkyNDAwZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2plY3Qtc2ltdWxhdG9yLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLmZvcm0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5lbXBsb3llZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC50YXNrLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgXG4gIC50YXNrLWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAucmVzdWx0cy1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAucmVzdWx0cy1zdW1tYXJ5IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICBcbiAgLnRpbWVsaW5lLWl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cbiAgXG4gIC50aW1lbGluZS1kYXRlIHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", ".invalid-requirement[_ngcontent-%COMP%] {\n                background-color: #fee2e2 !important;\n                border: 1px solid #ef4444 !important;\n              }\n              .btn-warning[_ngcontent-%COMP%] {\n                background-color: #f59e0b !important;\n                color: white !important;\n                border: none !important;\n                padding: 4px 8px !important;\n                border-radius: 4px !important;\n                font-size: 12px !important;\n                margin-top: 8px !important;\n              }\n              \n              .assignments-details[_ngcontent-%COMP%] {\n                margin: 20px 0;\n              }\n              \n              .assignment-item[_ngcontent-%COMP%] {\n                background: #f8fafc;\n                border: 1px solid #e2e8f0;\n                border-radius: 8px;\n                padding: 16px;\n                margin-bottom: 12px;\n              }\n              \n              .assignment-header[_ngcontent-%COMP%] {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 12px;\n              }\n              \n              .assignment-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n                margin: 0;\n                color: #1f2937;\n              }\n              \n              .employee-name[_ngcontent-%COMP%] {\n                background: #3b82f6;\n                color: white;\n                padding: 4px 12px;\n                border-radius: 16px;\n                font-size: 14px;\n                font-weight: 500;\n              }\n              \n              .employee-skills[_ngcontent-%COMP%] {\n                margin-top: 8px;\n              }\n              \n              .skills-label[_ngcontent-%COMP%] {\n                display: block;\n                font-weight: 600;\n                color: #374151;\n                margin-bottom: 8px;\n              }\n              \n              .skills-list[_ngcontent-%COMP%] {\n                display: flex;\n                flex-wrap: wrap;\n                gap: 6px;\n              }\n              \n              .skill-badge[_ngcontent-%COMP%] {\n                background: #10b981;\n                color: white;\n                padding: 4px 8px;\n                border-radius: 12px;\n                font-size: 12px;\n                font-weight: 500;\n              }\n              \n              .team-summary[_ngcontent-%COMP%] {\n                background: #f0f9ff;\n                border: 1px solid #0ea5e9;\n                border-radius: 8px;\n                padding: 16px;\n                margin-bottom: 20px;\n              }\n              \n              .team-summary[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n                margin: 0 0 12px 0;\n                color: #0c4a6e;\n              }\n              \n              .team-members[_ngcontent-%COMP%] {\n                display: grid;\n                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n                gap: 12px;\n              }\n              \n              .team-member[_ngcontent-%COMP%] {\n                background: white;\n                border: 1px solid #e2e8f0;\n                border-radius: 6px;\n                padding: 12px;\n              }\n              \n              .member-info[_ngcontent-%COMP%] {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 8px;\n              }\n              \n              .member-role[_ngcontent-%COMP%] {\n                background: #6366f1;\n                color: white;\n                padding: 2px 8px;\n                border-radius: 12px;\n                font-size: 11px;\n              }\n              \n              .member-skills[_ngcontent-%COMP%] {\n                display: flex;\n                flex-wrap: wrap;\n                gap: 4px;\n              }\n              \n              .skill-small[_ngcontent-%COMP%] {\n                background: #f3f4f6;\n                color: #374151;\n                padding: 2px 6px;\n                border-radius: 8px;\n                font-size: 11px;\n              }\n              \n              .assignments-list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n                margin: 20px 0 12px 0;\n                color: #1f2937;\n              }\n              \n              .assignment-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n                margin: 0;\n                color: #1f2937;\n                font-size: 16px;\n              }\n              \n              .task-details[_ngcontent-%COMP%] {\n                margin-top: 12px;\n              }\n              \n              .task-info[_ngcontent-%COMP%] {\n                display: flex;\n                gap: 12px;\n                margin-bottom: 8px;\n              }\n              \n              .task-duration[_ngcontent-%COMP%], .task-priority[_ngcontent-%COMP%] {\n                background: #fef3c7;\n                color: #92400e;\n                padding: 4px 8px;\n                border-radius: 12px;\n                font-size: 12px;\n                font-weight: 500;\n              }"]
    });
  }
}

/***/ }),

/***/ 2417:
/*!*********************************************************************!*\
  !*** ./src/app/components/manager/task-recommendation.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskRecommendationComponent: () => (/* binding */ TaskRecommendationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_ia_recommendation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ia-recommendation.service */ 8028);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function TaskRecommendationComponent_div_47_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", skill_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r1, " ");
  }
}
function TaskRecommendationComponent_div_47_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskRecommendationComponent_div_47_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.removeRequirement(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskRecommendationComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "div", 9)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Comp\u00E9tence *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 35)(7, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "S\u00E9lectionner une comp\u00E9tence");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TaskRecommendationComponent_div_47_option_9_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Niveau requis (1-5) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Importance *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 40)(20, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Faible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00C9lev\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Critique");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TaskRecommendationComponent_div_47_button_28_Template, 2, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const requirement_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.availableSkills);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getLevelLabel(requirement_r5.value.requiredLevel));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.requirementsArray.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r3.getImportanceColor(requirement_r5.value.importance));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getImportanceLabel(requirement_r5.value.importance), " ");
  }
}
function TaskRecommendationComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ajoutez au moins une comp\u00E9tence requise pour obtenir des recommandations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskRecommendationComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "L'IA analyse les profils des employ\u00E9s...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function TaskRecommendationComponent_div_57_div_7_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r7, " ");
  }
}
function TaskRecommendationComponent_div_57_div_7_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r8, " ");
  }
}
function TaskRecommendationComponent_div_57_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Comp\u00E9tences manquantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TaskRecommendationComponent_div_57_div_7_div_18_span_4_Template, 3, 1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const employee_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", employee_r9.missingSkills);
  }
}
function TaskRecommendationComponent_div_57_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 62)(6, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Compatibilit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 66)(13, "div", 67)(14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Comp\u00E9tences correspondantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TaskRecommendationComponent_div_57_div_7_span_17_Template, 3, 1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TaskRecommendationComponent_div_57_div_7_div_18_Template, 5, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 71)(20, "div", 72)(21, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Disponibilit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 72)(28, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Charge de travail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 79)(35, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskRecommendationComponent_div_57_div_7_Template_button_click_35_listener() {
      const employee_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.getEmployeeDetails(employee_r9.employeeId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Voir le profil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskRecommendationComponent_div_57_div_7_Template_button_click_38_listener() {
      const employee_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.assignTask(employee_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Assigner la t\u00E2che ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const employee_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("recommended", employee_r9.recommendation === "highly_recommended")("consider", employee_r9.recommendation === "consider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r9.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", employee_r9.matchScore, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r3.getRecommendationColor(employee_r9.recommendation));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getRecommendationLabel(employee_r9.recommendation), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", employee_r9.matchingSkills);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", employee_r9.missingSkills.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", employee_r9.availability, "%")("background-color", ctx_r3.getAvailabilityColor(employee_r9.availability));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", employee_r9.availability, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", employee_r9.workload, "%")("background-color", ctx_r3.getWorkloadColor(employee_r9.workload));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", employee_r9.workload, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", employee_r9.recommendation === "not_recommended");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", employee_r9.recommendation === "not_recommended");
  }
}
function TaskRecommendationComponent_div_57_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aucune recommandation trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Essayez de modifier les comp\u00E9tences requises ou de r\u00E9duire les exigences.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function TaskRecommendationComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recommandations d'Employ\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TaskRecommendationComponent_div_57_div_7_Template, 41, 24, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TaskRecommendationComponent_div_57_div_8_Template, 6, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.recommendations.length, " employ\u00E9(s) trouv\u00E9(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.recommendations);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.recommendations.length === 0);
  }
}
class TaskRecommendationComponent {
  constructor(fb, iaService) {
    this.fb = fb;
    this.iaService = iaService;
    this.recommendations = [];
    this.loading = false;
    this.showResults = false;
    this.employeeProfiles = [];
    // Options pour les compétences (chargées depuis le backend)
    this.availableSkills = [];
    this.initializeForm();
  }
  ngOnInit() {
    this.loadEmployeeProfiles();
  }
  initializeForm() {
    this.taskForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      estimatedHours: [8, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      priority: ['medium', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      deadline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      requirements: this.fb.array([])
    });
    // Ajouter une compétence par défaut pour faciliter les tests
    setTimeout(() => {
      this.addRequirement();
    }, 100);
  }
  get requirementsArray() {
    return this.taskForm.get('requirements');
  }
  loadEmployeeProfiles() {
    this.iaService.getEmployeeSkillsProfiles().subscribe({
      next: profiles => {
        this.employeeProfiles = profiles;
        console.log('Profils employés chargés:', profiles);
        // Extraire toutes les compétences uniques
        const allSkills = new Set();
        profiles.forEach(profile => {
          profile.skills.forEach(skill => {
            allSkills.add(skill.name);
          });
        });
        this.availableSkills = Array.from(allSkills).sort();
        console.log('Compétences disponibles:', this.availableSkills);
      },
      error: error => {
        console.error('Erreur lors du chargement des profils:', error);
        // En cas d'erreur, utiliser la liste par défaut
        this.availableSkills = ['JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Angular', 'Vue.js', 'Node.js', 'Docker', 'Kubernetes', 'MySQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Git'];
      }
    });
  }
  addRequirement() {
    const requirementGroup = this.fb.group({
      skillName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      requiredLevel: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(5)]],
      importance: ['medium', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.requirementsArray.push(requirementGroup);
  }
  removeRequirement(index) {
    this.requirementsArray.removeAt(index);
  }
  getRecommendations() {
    console.log('Validation du formulaire...');
    console.log('Formulaire valide:', this.taskForm.valid);
    console.log('Nombre de compétences:', this.requirementsArray.length);
    console.log('Compétences:', this.requirementsArray.value);
    if (this.taskForm.invalid) {
      console.log('Formulaire invalide - détails:', this.taskForm.errors);
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    if (this.requirementsArray.length === 0) {
      console.log('Aucune compétence ajoutée');
      alert('Veuillez ajouter au moins une compétence requise');
      return;
    }
    // Vérifier si chaque compétence est valide
    const invalidRequirements = this.requirementsArray.controls.filter(control => control.invalid);
    if (invalidRequirements.length > 0) {
      console.log('Compétences invalides:', invalidRequirements);
      alert('Veuillez compléter toutes les informations des compétences requises');
      return;
    }
    this.loading = true;
    const taskData = {
      id: Date.now(),
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      requirements: this.taskForm.value.requirements,
      estimatedHours: this.taskForm.value.estimatedHours,
      priority: this.taskForm.value.priority,
      deadline: new Date(this.taskForm.value.deadline)
    };
    this.iaService.getTaskRecommendations(taskData).subscribe({
      next: recommendations => {
        this.recommendations = recommendations.sort((a, b) => b.matchScore - a.matchScore);
        this.showResults = true;
        this.loading = false;
        console.log('Recommandations obtenues:', recommendations);
      },
      error: error => {
        console.error('Erreur lors de l\'obtention des recommandations:', error);
        this.loading = false;
        alert('Erreur lors de l\'obtention des recommandations');
      }
    });
  }
  resetForm() {
    this.taskForm.reset({
      title: '',
      description: '',
      estimatedHours: 8,
      priority: 'medium',
      deadline: ''
    });
    while (this.requirementsArray.length > 0) {
      this.requirementsArray.removeAt(0);
    }
    this.showResults = false;
    this.recommendations = [];
  }
  assignTask(employee) {
    const confirmMessage = `Voulez-vous assigner cette tâche à ${employee.employeeName} ?\n\n` + `Score de compatibilité: ${employee.matchScore}%\n` + `Compétences correspondantes: ${employee.matchingSkills.join(', ')}\n` + `Disponibilité: ${employee.availability}%`;
    if (confirm(confirmMessage)) {
      // Logique d'assignation de la tâche
      console.log('Tâche assignée à:', employee);
      alert(`Tâche assignée avec succès à ${employee.employeeName} !`);
      // Ici, vous appelleriez votre service pour créer et assigner la tâche
      // this.taskService.createAndAssignTask(taskData, employee.employeeId).subscribe(...)
    }
  }
  // Méthodes utilitaires
  getRecommendationColor(recommendation) {
    switch (recommendation) {
      case 'highly_recommended':
        return '#10b981';
      case 'recommended':
        return '#3b82f6';
      case 'consider':
        return '#f59e0b';
      case 'not_recommended':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  }
  getRecommendationLabel(recommendation) {
    switch (recommendation) {
      case 'highly_recommended':
        return 'Fortement recommandé';
      case 'recommended':
        return 'Recommandé';
      case 'consider':
        return 'À considérer';
      case 'not_recommended':
        return 'Non recommandé';
      default:
        return recommendation;
    }
  }
  getPriorityColor(priority) {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  }
  getImportanceColor(importance) {
    switch (importance) {
      case 'critical':
        return '#dc2626';
      case 'high':
        return '#ea580c';
      case 'medium':
        return '#d97706';
      case 'low':
        return '#65a30d';
      default:
        return '#6b7280';
    }
  }
  getImportanceLabel(importance) {
    switch (importance) {
      case 'critical':
        return 'Critique';
      case 'high':
        return 'Élevée';
      case 'medium':
        return 'Moyenne';
      case 'low':
        return 'Faible';
      default:
        return importance;
    }
  }
  getLevelLabel(level) {
    const labels = ['', 'Débutant', 'Intermédiaire', 'Compétent', 'Avancé', 'Expert'];
    return labels[level] || '';
  }
  getAvailabilityColor(availability) {
    if (availability >= 80) return '#10b981';
    if (availability >= 60) return '#3b82f6';
    if (availability >= 40) return '#f59e0b';
    return '#ef4444';
  }
  getWorkloadColor(workload) {
    if (workload <= 40) return '#10b981';
    if (workload <= 70) return '#f59e0b';
    return '#ef4444';
  }
  // Obtenir les détails d'un employé
  getEmployeeDetails(employeeId) {
    return this.employeeProfiles.find(profile => profile.employeeId === employeeId);
  }
  // Calculer le nombre de compétences correspondantes
  getMatchingSkillsCount(matchingSkills) {
    return matchingSkills.length;
  }
  // Calculer le nombre de compétences manquantes
  getMissingSkillsCount(missingSkills) {
    return missingSkills.length;
  }
  static {
    this.ɵfac = function TaskRecommendationComponent_Factory(t) {
      return new (t || TaskRecommendationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ia_recommendation_service__WEBPACK_IMPORTED_MODULE_0__.IARecommendationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TaskRecommendationComponent,
      selectors: [["app-task-recommendation"]],
      decls: 58,
      vars: 7,
      consts: [[1, "task-recommendation-container"], [1, "recommendation-header"], [1, "page-title"], [1, "bi", "bi-robot"], [1, "page-description"], [1, "task-form-container"], [1, "task-form", 3, "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], ["type", "text", "formControlName", "title", "placeholder", "Ex: D\u00E9velopper le module d'authentification"], ["type", "number", "formControlName", "estimatedHours", "min", "1", "max", "200"], ["formControlName", "priority"], ["value", "low"], ["value", "medium"], ["value", "high"], ["type", "date", "formControlName", "deadline"], [1, "form-group", "full-width"], ["formControlName", "description", "rows", "3", "placeholder", "D\u00E9crivez la t\u00E2che en d\u00E9tail..."], [1, "section-header"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], ["formArrayName", "requirements", 1, "requirements-container"], ["class", "requirement-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "no-requirements", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-clockwise"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-magic"], ["class", "loading-container", 4, "ngIf"], ["class", "recommendations-results", 4, "ngIf"], [1, "requirement-item", 3, "formGroupName"], [1, "requirement-content"], [1, "requirement-fields"], ["formControlName", "skillName"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "range", "formControlName", "requiredLevel", "min", "1", "max", "5"], [1, "level-display"], ["formControlName", "importance"], ["value", "critical"], ["type", "button", "class", "btn-remove", 3, "click", 4, "ngIf"], [1, "importance-indicator"], [3, "value"], ["type", "button", 1, "btn-remove", 3, "click"], [1, "bi", "bi-trash"], [1, "no-requirements"], [1, "bi", "bi-info-circle"], [1, "loading-container"], [1, "loading-spinner"], [1, "bi", "bi-arrow-repeat"], [1, "recommendations-results"], [1, "results-header"], [1, "results-count"], [1, "recommendations-grid"], ["class", "recommendation-card", 3, "recommended", "consider", 4, "ngFor", "ngForOf"], ["class", "no-recommendations", 4, "ngIf"], [1, "recommendation-card"], [1, "card-header"], [1, "employee-info"], [1, "employee-name"], [1, "match-score"], [1, "score-value"], [1, "score-label"], [1, "recommendation-badge"], [1, "matching-details"], [1, "skills-match"], [1, "skills-list"], ["class", "skill-tag matched", 4, "ngFor", "ngForOf"], ["class", "skills-missing", 4, "ngIf"], [1, "employee-stats"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "availability-bar"], [1, "availability-text"], [1, "workload-bar"], [1, "workload-text"], [1, "card-actions"], [1, "btn-details", 3, "click"], [1, "bi", "bi-person"], [1, "btn-assign", 3, "click", "disabled"], [1, "bi", "bi-person-plus"], [1, "skill-tag", "matched"], [1, "bi", "bi-check-circle"], [1, "skills-missing"], ["class", "skill-tag missing", 4, "ngFor", "ngForOf"], [1, "skill-tag", "missing"], [1, "bi", "bi-x-circle"], [1, "no-recommendations"], [1, "bi", "bi-exclamation-triangle"]],
      template: function TaskRecommendationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Recommandation IA d'Affectation de T\u00E2ches ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Cr\u00E9ez une t\u00E2che et l'IA vous recommandera les employ\u00E9s les plus adapt\u00E9s selon leurs comp\u00E9tences ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Informations de la T\u00E2che");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Titre de la t\u00E2che *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Heures estim\u00E9es *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9)(22, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Priorit\u00E9 *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 12)(25, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Faible");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Moyenne");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00C9lev\u00E9e");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9)(32, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Date limite *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17)(36, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Description *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "textarea", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7)(40, "div", 19)(41, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Comp\u00E9tences Requises");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskRecommendationComponent_Template_button_click_43_listener() {
            return ctx.addRequirement();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Ajouter une comp\u00E9tence ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, TaskRecommendationComponent_div_47_Template, 31, 7, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TaskRecommendationComponent_div_48_Template, 3, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25)(50, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskRecommendationComponent_Template_button_click_50_listener() {
            return ctx.resetForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " R\u00E9initialiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskRecommendationComponent_Template_button_click_53_listener() {
            return ctx.getRecommendations();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, TaskRecommendationComponent_div_56_Template, 5, 0, "div", 30)(57, TaskRecommendationComponent_div_57_Template, 9, 3, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.taskForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.requirementsArray.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requirementsArray.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.requirementsArray.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Analyse en cours..." : "Obtenir les recommandations", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showResults && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName],
      styles: [".task-recommendation-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.recommendation-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n\n.page-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n\n\n\n.task-form-container[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 32px;\n}\n\n.task-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s ease;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.level-display[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3b82f6;\n  font-weight: 500;\n  margin-left: 8px;\n}\n\n\n\n.requirements-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.requirement-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  position: relative;\n}\n\n.requirement-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n\n.requirement-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  flex: 1;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n\n.importance-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.no-requirements[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #6b7280;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.no-requirements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n\n\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: #6b7280;\n}\n\n.loading-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n\n\n.recommendations-results[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n\n.results-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.results-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n\n.results-count[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n}\n\n.recommendations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 20px;\n}\n\n.recommendation-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n\n.recommendation-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n\n.recommendation-card.recommended[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.2);\n}\n\n.recommendation-card.consider[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.2);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.employee-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n\n.match-score[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n\n.score-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #10b981;\n}\n\n.score-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.recommendation-badge[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 11px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n\n\n\n.matching-details[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.matching-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 8px 0;\n}\n\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n\n.skill-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n\n.skill-tag.matched[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.skill-tag.missing[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n\n.skill-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n\n\n.employee-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.availability-bar[_ngcontent-%COMP%], .workload-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 3px;\n  min-width: 40px;\n}\n\n.availability-text[_ngcontent-%COMP%], .workload-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n\n\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.btn-details[_ngcontent-%COMP%], .btn-assign[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n\n.btn-details[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n\n.btn-details[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n\n.btn-assign[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n\n.btn-assign[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: #059669;\n}\n\n.btn-assign.disabled[_ngcontent-%COMP%] {\n  background: #d1d5db;\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n\n\n\n.no-recommendations[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #6b7280;\n}\n\n.no-recommendations[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  color: #f59e0b;\n}\n\n.no-recommendations[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n\n.no-recommendations[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n\n\n\n@media (max-width: 768px) {\n  .task-recommendation-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  \n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .requirement-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .recommendations-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  \n  .employee-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL3Rhc2stcmVjb21tZW5kYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBLFlBQVk7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxr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QjtFQUM1Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLXJlY29tbWVuZGF0aW9uLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyogRW4tdMODwqp0ZSAqL1xuLnJlY29tbWVuZGF0aW9uLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5wYWdlLXRpdGxlIGkge1xuICBjb2xvcjogIzNiODJmNjtcbn1cblxuLnBhZ2UtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogRm9ybXVsYWlyZSAqL1xuLnRhc2stZm9ybS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4udGFzay1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5mb3JtLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXG4uZm9ybS1ncm91cC5mdWxsLXdpZHRoIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzc0MTUxO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCxcbi5mb3JtLWdyb3VwIHNlbGVjdCxcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsXG4uZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMsXG4uZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzNiODJmNjtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xufVxuXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sZXZlbC1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzNiODJmNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLyogQ29tcMODwql0ZW5jZXMgcmVxdWlzZXMgKi9cbi5yZXF1aXJlbWVudHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucmVxdWlyZW1lbnQtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlcXVpcmVtZW50LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDE2cHg7XG59XG5cbi5yZXF1aXJlbWVudC1maWVsZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBmbGV4OiAxO1xufVxuXG4uYnRuLXJlbW92ZSB7XG4gIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1yZW1vdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xufVxuXG4uaW1wb3J0YW5jZS1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4ubm8tcmVxdWlyZW1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5uby1yZXF1aXJlbWVudHMgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLyogQWN0aW9ucyAqL1xuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjM2I4MmY2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XG59XG5cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjNmI3MjgwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRiNTU2Mztcbn1cblxuLyogTG9hZGluZyAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBjb2xvcjogIzZiNzI4MDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIFLDg8Kpc3VsdGF0cyAqL1xuLnJlY29tbWVuZGF0aW9ucy1yZXN1bHRzIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLnJlc3VsdHMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ucmVzdWx0cy1oZWFkZXIgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBtYXJnaW46IDA7XG59XG5cbi5yZXN1bHRzLWNvdW50IHtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlY29tbWVuZGF0aW9ucy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG5cbi5yZWNvbW1lbmRhdGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ucmVjb21tZW5kYXRpb24tY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5yZWNvbW1lbmRhdGlvbi1jYXJkLnJlY29tbWVuZGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XG59XG5cbi5yZWNvbW1lbmRhdGlvbi1jYXJkLmNvbnNpZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjU5ZTBiO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuMik7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5lbXBsb3llZS1pbmZvIHtcbiAgZmxleDogMTtcbn1cblxuLmVtcGxveWVlLW5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBtYXJnaW46IDAgMCA4cHggMDtcbn1cblxuLm1hdGNoLXNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5zY29yZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMGI5ODE7XG59XG5cbi5zY29yZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnJlY29tbWVuZGF0aW9uLWJhZGdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogTWF0Y2hpbmcgZMODwql0YWlscyAqL1xuLm1hdGNoaW5nLWRldGFpbHMge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubWF0Y2hpbmctZGV0YWlscyBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xufVxuXG4uc2tpbGxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc2tpbGwtdGFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNraWxsLXRhZy5tYXRjaGVkIHtcbiAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgY29sb3I6ICMxNjY1MzQ7XG59XG5cbi5za2lsbC10YWcubWlzc2luZyB7XG4gIGJhY2tncm91bmQ6ICNmZWYyZjI7XG4gIGNvbG9yOiAjOTkxYjFiO1xufVxuXG4uc2tpbGwtdGFnIGkge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi8qIFN0YXRpc3RpcXVlcyBlbXBsb3nDg8KpICovXG4uZW1wbG95ZWUtc3RhdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnN0YXQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xufVxuXG4uc3RhdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hdmFpbGFiaWxpdHktYmFyLFxuLndvcmtsb2FkLWJhciB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuLmF2YWlsYWJpbGl0eS10ZXh0LFxuLndvcmtsb2FkLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIEFjdGlvbnMgKi9cbi5jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmJ0bi1kZXRhaWxzLFxuLmJ0bi1hc3NpZ24ge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5idG4tZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gIGNvbG9yOiAjMzc0MTUxO1xufVxuXG4uYnRuLWRldGFpbHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xufVxuXG4uYnRuLWFzc2lnbiB7XG4gIGJhY2tncm91bmQ6ICMxMGI5ODE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1hc3NpZ246aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMDU5NjY5O1xufVxuXG4uYnRuLWFzc2lnbi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XG4gIGNvbG9yOiAjOWNhM2FmO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiBQYXMgZGUgcmVjb21tYW5kYXRpb25zICovXG4ubm8tcmVjb21tZW5kYXRpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0OHB4O1xuICBjb2xvcjogIzZiNzI4MDtcbn1cblxuLm5vLXJlY29tbWVuZGF0aW9ucyBpIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogI2Y1OWUwYjtcbn1cblxuLm5vLXJlY29tbWVuZGF0aW9ucyBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG5cbi5uby1yZWNvbW1lbmRhdGlvbnMgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRhc2stcmVjb21tZW5kYXRpb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAuZm9ybS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICBcbiAgLnJlcXVpcmVtZW50LWZpZWxkcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5yZWNvbW1lbmRhdGlvbnMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgXG4gIC5lbXBsb3llZS1zdGF0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5jYXJkLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5934:
/*!*******************************************************************!*\
  !*** ./src/app/components/manager/task-time-tracker.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskTimeTrackerComponent: () => (/* binding */ TaskTimeTrackerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task-enhanced.service */ 6784);






function TaskTimeTrackerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current Task:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentTask.title);
  }
}
function TaskTimeTrackerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatTime(ctx_r0.elapsedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "status-" + ctx_r0.activeSession.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.activeSession.status, " ");
  }
}
function TaskTimeTrackerComponent_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskTimeTrackerComponent_div_6_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.startSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskTimeTrackerComponent_div_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskTimeTrackerComponent_div_6_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.pauseSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskTimeTrackerComponent_div_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskTimeTrackerComponent_div_6_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.resumeSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Resume ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskTimeTrackerComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskTimeTrackerComponent_div_6_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.completeSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Finish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TaskTimeTrackerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskTimeTrackerComponent_div_6_button_1_Template, 3, 0, "button", 14)(2, TaskTimeTrackerComponent_div_6_button_2_Template, 3, 0, "button", 15)(3, TaskTimeTrackerComponent_div_6_button_3_Template, 3, 0, "button", 16)(4, TaskTimeTrackerComponent_div_6_button_4_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.activeSession);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeSession && ctx_r0.activeSession.status === "running");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeSession && ctx_r0.activeSession.status === "paused");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeSession);
  }
}
function TaskTimeTrackerComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TaskTimeTrackerComponent_div_7_Template_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r0.sessionDescription, $event) || (ctx_r0.sessionDescription = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.sessionDescription);
  }
}
function TaskTimeTrackerComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const session_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatTime(session_r7.duration_seconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatDate(session_r7.start_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "status-" + session_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", session_r7.status, " ");
  }
}
function TaskTimeTrackerComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Recent Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TaskTimeTrackerComponent_div_8_div_4_Template, 8, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sessions);
  }
}
class TaskTimeTrackerComponent {
  constructor(taskEnhancedService) {
    this.taskEnhancedService = taskEnhancedService;
    this.activeSession = null;
    this.sessions = [];
    this.elapsedTime = 0;
    this.sessionDescription = '';
    this.timerInterval = null;
  }
  ngOnInit() {
    if (this.taskId) {
      this.loadSessions();
      this.checkActiveSession();
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
        console.error('Error loading sessions:', error);
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
    this.taskEnhancedService.startTimeSession(this.taskId, this.employeeId, this.sessionDescription).subscribe({
      next: response => {
        this.activeSession = {
          id: response.data.sessionId,
          task_id: this.taskId,
          employee_id: this.employeeId,
          start_time: new Date().toISOString(),
          end_time: null,
          duration_seconds: 0,
          status: 'running',
          description: this.sessionDescription,
          employee_name: ''
        };
        this.startTimer();
        this.sessionDescription = '';
      },
      error: error => {
        console.error('Error starting session:', error);
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
          console.error('Error pausing session:', error);
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
          console.error('Error resuming session:', error);
        }
      });
    }
  }
  completeSession() {
    if (this.activeSession) {
      this.taskEnhancedService.completeTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: response => {
          this.activeSession = null;
          this.stopTimer();
          this.elapsedTime = 0;
          this.loadSessions();
        },
        error: error => {
          console.error('Error completing session:', error);
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
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  static {
    this.ɵfac = function TaskTimeTrackerComponent_Factory(t) {
      return new (t || TaskTimeTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_enhanced_service__WEBPACK_IMPORTED_MODULE_0__.TaskEnhancedService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TaskTimeTrackerComponent,
      selectors: [["app-task-time-tracker"]],
      inputs: {
        taskId: "taskId",
        employeeId: "employeeId",
        currentTask: "currentTask"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 5,
      consts: [[1, "time-tracker-container"], [1, "tracker-header"], ["class", "current-task", 4, "ngIf"], ["class", "timer-display", 4, "ngIf"], ["class", "timer-controls", 4, "ngIf"], ["class", "session-description", 4, "ngIf"], ["class", "sessions-history", 4, "ngIf"], [1, "current-task"], [1, "task-label"], [1, "task-name"], [1, "timer-display"], [1, "timer-value"], [1, "timer-status", 3, "ngClass"], [1, "timer-controls"], ["class", "btn-start", 3, "click", 4, "ngIf"], ["class", "btn-pause", 3, "click", 4, "ngIf"], ["class", "btn-resume", 3, "click", 4, "ngIf"], ["class", "btn-stop", 3, "click", 4, "ngIf"], [1, "btn-start", 3, "click"], [1, "bi", "bi-play-fill"], [1, "btn-pause", 3, "click"], [1, "bi", "bi-pause-fill"], [1, "btn-resume", 3, "click"], [1, "btn-stop", 3, "click"], [1, "bi", "bi-stop-fill"], [1, "session-description"], ["placeholder", "What are you working on?", "rows", "2", 1, "description-input", 3, "ngModelChange", "ngModel"], [1, "sessions-history"], [1, "sessions-list"], ["class", "session-item", 4, "ngFor", "ngForOf"], [1, "session-item"], [1, "session-info"], [1, "session-time"], [1, "session-date"], [1, "session-status", 3, "ngClass"]],
      template: function TaskTimeTrackerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Time Tracker");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TaskTimeTrackerComponent_div_4_Template, 5, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TaskTimeTrackerComponent_div_5_Template, 5, 3, "div", 3)(6, TaskTimeTrackerComponent_div_6_Template, 5, 4, "div", 4)(7, TaskTimeTrackerComponent_div_7_Template, 3, 1, "div", 5)(8, TaskTimeTrackerComponent_div_8_Template, 5, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentTask);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSession);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentTask);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeSession);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sessions.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".time-tracker-container[_ngcontent-%COMP%] {\n      background: white;\n      border-radius: 12px;\n      padding: 20px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n    .tracker-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px;\n      padding-bottom: 12px;\n      border-bottom: 1px solid #e0e0e0;\n    }\n\n    .tracker-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #333;\n    }\n\n    .current-task[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 14px;\n    }\n\n    .task-label[_ngcontent-%COMP%] {\n      color: #666;\n      font-weight: 500;\n    }\n\n    .task-name[_ngcontent-%COMP%] {\n      color: #333;\n      font-weight: 600;\n    }\n\n    .timer-display[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 24px;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      border-radius: 12px;\n      margin-bottom: 20px;\n      color: white;\n    }\n\n    .timer-value[_ngcontent-%COMP%] {\n      font-size: 48px;\n      font-weight: 700;\n      font-family: 'Courier New', monospace;\n      margin-bottom: 8px;\n    }\n\n    .timer-status[_ngcontent-%COMP%] {\n      font-size: 14px;\n      font-weight: 500;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n    }\n\n    .timer-status.status-running[_ngcontent-%COMP%] {\n      color: #4caf50;\n    }\n\n    .timer-status.status-paused[_ngcontent-%COMP%] {\n      color: #ff9800;\n    }\n\n    .timer-controls[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n      margin-bottom: 16px;\n    }\n\n    .timer-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      flex: 1;\n      padding: 12px 24px;\n      border: none;\n      border-radius: 8px;\n      font-size: 14px;\n      font-weight: 600;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      transition: all 0.2s;\n    }\n\n    .btn-start[_ngcontent-%COMP%] {\n      background: #4caf50;\n      color: white;\n    }\n\n    .btn-start[_ngcontent-%COMP%]:hover {\n      background: #45a049;\n    }\n\n    .btn-pause[_ngcontent-%COMP%] {\n      background: #ff9800;\n      color: white;\n    }\n\n    .btn-pause[_ngcontent-%COMP%]:hover {\n      background: #f57c00;\n    }\n\n    .btn-resume[_ngcontent-%COMP%] {\n      background: #2196f3;\n      color: white;\n    }\n\n    .btn-resume[_ngcontent-%COMP%]:hover {\n      background: #1976d2;\n    }\n\n    .btn-stop[_ngcontent-%COMP%] {\n      background: #f44336;\n      color: white;\n    }\n\n    .btn-stop[_ngcontent-%COMP%]:hover {\n      background: #d32f2f;\n    }\n\n    .session-description[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n    }\n\n    .description-input[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 12px;\n      border: 1px solid #e0e0e0;\n      border-radius: 8px;\n      font-size: 14px;\n      resize: vertical;\n      font-family: inherit;\n    }\n\n    .description-input[_ngcontent-%COMP%]:focus {\n      outline: none;\n      border-color: #2196f3;\n      box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);\n    }\n\n    .sessions-history[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 12px 0;\n      font-size: 14px;\n      font-weight: 600;\n      color: #333;\n    }\n\n    .sessions-list[_ngcontent-%COMP%] {\n      max-height: 200px;\n      overflow-y: auto;\n    }\n\n    .session-item[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 12px;\n      background: #f9f9f9;\n      border-radius: 8px;\n      margin-bottom: 8px;\n    }\n\n    .session-info[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n\n    .session-time[_ngcontent-%COMP%] {\n      font-size: 16px;\n      font-weight: 600;\n      color: #333;\n      font-family: 'Courier New', monospace;\n    }\n\n    .session-date[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #666;\n    }\n\n    .session-status[_ngcontent-%COMP%] {\n      padding: 4px 12px;\n      border-radius: 12px;\n      font-size: 11px;\n      font-weight: 600;\n      text-transform: uppercase;\n    }\n\n    .session-status.status-completed[_ngcontent-%COMP%] {\n      background: #e8f5e9;\n      color: #388e3c;\n    }\n\n    .session-status.status-paused[_ngcontent-%COMP%] {\n      background: #fff3e0;\n      color: #f57c00;\n    }\n\n    .session-status.status-running[_ngcontent-%COMP%] {\n      background: #e3f2fd;\n      color: #1976d2;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL3Rhc2stdGltZS10cmFja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixxQ0FBcUM7SUFDdkM7O0lBRUE7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLGdDQUFnQztJQUNsQzs7SUFFQTtNQUNFLFNBQVM7TUFDVCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsV0FBVztNQUNYLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsNkRBQTZEO01BQzdELG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsWUFBWTtJQUNkOztJQUVBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixxQ0FBcUM7TUFDckMsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsU0FBUztNQUNULG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLE9BQU87TUFDUCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixRQUFRO01BQ1Isb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLFlBQVk7SUFDZDs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtJQUNkOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLFlBQVk7SUFDZDs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLFdBQVc7TUFDWCxhQUFhO01BQ2IseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLGFBQWE7TUFDYixxQkFBcUI7TUFDckIsNkNBQTZDO0lBQy9DOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsV0FBVztJQUNiOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsUUFBUTtJQUNWOztJQUVBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gscUNBQXFDO0lBQ3ZDOztJQUVBO01BQ0UsZUFBZTtNQUNmLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGltZS10cmFja2VyLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG5cbiAgICAudHJhY2tlci1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICB9XG5cbiAgICAudHJhY2tlci1oZWFkZXIgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5jdXJyZW50LXRhc2sge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAudGFzay1sYWJlbCB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnRhc2stbmFtZSB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLnRpbWVyLWRpc3BsYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAudGltZXItdmFsdWUge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnRpbWVyLXN0YXR1cyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgLnRpbWVyLXN0YXR1cy5zdGF0dXMtcnVubmluZyB7XG4gICAgICBjb2xvcjogIzRjYWY1MDtcbiAgICB9XG5cbiAgICAudGltZXItc3RhdHVzLnN0YXR1cy1wYXVzZWQge1xuICAgICAgY29sb3I6ICNmZjk4MDA7XG4gICAgfVxuXG4gICAgLnRpbWVyLWNvbnRyb2xzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC50aW1lci1jb250cm9scyBidXR0b24ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB9XG5cbiAgICAuYnRuLXN0YXJ0IHtcbiAgICAgIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmJ0bi1zdGFydDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDVhMDQ5O1xuICAgIH1cblxuICAgIC5idG4tcGF1c2Uge1xuICAgICAgYmFja2dyb3VuZDogI2ZmOTgwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYnRuLXBhdXNlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNTdjMDA7XG4gICAgfVxuXG4gICAgLmJ0bi1yZXN1bWUge1xuICAgICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYnRuLXJlc3VtZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xuICAgIH1cblxuICAgIC5idG4tc3RvcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5idG4tc3RvcDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZDMyZjJmO1xuICAgIH1cblxuICAgIC5zZXNzaW9uLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLWlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLWlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMywgMTUwLCAyNDMsIDAuMSk7XG4gICAgfVxuXG4gICAgLnNlc3Npb25zLWhpc3RvcnkgaDQge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweCAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5zZXNzaW9ucy1saXN0IHtcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuc2Vzc2lvbi1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnNlc3Npb24taW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5zZXNzaW9uLXRpbWUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICB9XG5cbiAgICAuc2Vzc2lvbi1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5zZXNzaW9uLXN0YXR1cyB7XG4gICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAuc2Vzc2lvbi1zdGF0dXMuc3RhdHVzLWNvbXBsZXRlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZThmNWU5O1xuICAgICAgY29sb3I6ICMzODhlM2M7XG4gICAgfVxuXG4gICAgLnNlc3Npb24tc3RhdHVzLnN0YXR1cy1wYXVzZWQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjNlMDtcbiAgICAgIGNvbG9yOiAjZjU3YzAwO1xuICAgIH1cblxuICAgIC5zZXNzaW9uLXN0YXR1cy5zdGF0dXMtcnVubmluZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2210:
/*!***********************************************!*\
  !*** ./src/app/services/analytics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class AnalyticsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  // Obtenir les analytics d'un projet
  getProjectAnalytics(projectId) {
    return this.http.get(`${this.apiUrl}/analytics/project/${projectId}`);
  }
  // Obtenir les analytics globaux pour un manager
  getManagerAnalytics(managerId) {
    return this.http.get(`${this.apiUrl}/analytics/manager/${managerId}`);
  }
  // Obtenir les données pour le graphique Gantt
  getGanttData(projectId) {
    return this.http.get(`${this.apiUrl}/analytics/gantt/${projectId}`);
  }
  static {
    this.ɵfac = function AnalyticsService_Factory(t) {
      return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnalyticsService,
      factory: AnalyticsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8028:
/*!*******************************************************!*\
  !*** ./src/app/services/ia-recommendation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IARecommendationService: () => (/* binding */ IARecommendationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);




class IARecommendationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3001/api/manager';
  }
  // Obtenir les recommandations d'employés pour une tâche
  getTaskRecommendations(task) {
    console.log('🚀 Tentative d\'obtenir les recommandations depuis le backend...');
    console.log('📤 Tâche envoyée:', task);
    console.log('🌐 URL du backend:', `${this.apiUrl}/recommendations/task`);
    return this.http.post(`${this.apiUrl}/recommendations/task`, task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      console.log('✅ Réponse du backend reçue:', response);
      if (response.success) {
        console.log('📊 Données du backend utilisées - Nombre de recommandations:', response.data.length);
        return response.data.map(match => this.formatEmployeeMatch(match));
      }
      console.log('⚠️ Backend a répondu mais sans succès');
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('❌ Erreur du backend détectée:', error);
      console.log('🔄 Utilisation de l\'algorithme local en fallback...');
      console.log('📝 Données mockées utilisées car le backend n\'est pas accessible');
      const localResults = this.calculateTaskMatches(task);
      console.log('📊 Résultats de l\'algorithme local:', localResults);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(localResults);
    }));
  }
  // Obtenir tous les profils de compétences des employés
  getEmployeeSkillsProfiles() {
    return this.http.get(`${this.apiUrl}/employees/skills-profiles`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      if (response.success) {
        return response.data.map(profile => this.formatSkillsProfile(profile));
      }
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error loading skills profiles:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // Simuler un projet avec IA
  simulateProject(project) {
    return this.http.post(`${this.apiUrl}/simulate-project`, project).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      if (response.success) {
        return response.data;
      }
      throw new Error('Project simulation failed');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error simulating project:', error);
      // Fallback vers l'algorithme local
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.localProjectSimulation(project));
    }));
  }
  // Algorithme local de matching compétences-tâches
  calculateTaskMatches(task) {
    console.log('🔧 Démarrage de l\'algorithme local de matching...');
    console.log('📋 Compétences requises pour la tâche:', task.requirements);
    // Pour l'instant, utiliser des données mockées car nous n'avons pas accès aux profils réels
    // En production, cela utilisera les vrais profils d'employés depuis la base de données
    const mockEmployees = [{
      employeeId: 12,
      employeeName: 'Jean Dupont',
      skills: [{
        name: 'JavaScript',
        level: 4
      }, {
        name: 'React',
        level: 4
      }, {
        name: 'Node.js',
        level: 3
      }, {
        name: 'TypeScript',
        level: 2
      }],
      availability: 80,
      workload: 60
    }, {
      employeeId: 13,
      employeeName: 'Marie Martin',
      skills: [{
        name: 'JavaScript',
        level: 3
      }, {
        name: 'React',
        level: 4
      }, {
        name: 'Node.js',
        level: 2
      }, {
        name: 'TypeScript',
        level: 1
      }],
      availability: 90,
      workload: 40
    }, {
      employeeId: 14,
      employeeName: 'Pierre Durand',
      skills: [{
        name: 'JavaScript',
        level: 2
      }, {
        name: 'React',
        level: 2
      }, {
        name: 'Node.js',
        level: 4
      }, {
        name: 'TypeScript',
        level: 1
      }],
      availability: 70,
      workload: 80
    }];
    const results = mockEmployees.map(employee => {
      console.log(`👤 Analyse de l'employé: ${employee.employeeName}`);
      const matchResult = this.calculateEmployeeTaskMatch(employee, task);
      console.log(`📊 Score pour ${employee.employeeName}: ${matchResult.score}%`);
      console.log(`✅ Compétences correspondantes: ${matchResult.matchingSkills.join(', ')}`);
      console.log(`❌ Compétences manquantes: ${matchResult.missingSkills.join(', ')}`);
      return {
        employeeId: employee.employeeId,
        employeeName: employee.employeeName,
        matchScore: matchResult.score,
        matchingSkills: matchResult.matchingSkills,
        missingSkills: matchResult.missingSkills,
        availability: employee.availability,
        workload: employee.workload,
        recommendation: this.getRecommendationFromScore(matchResult.score)
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
    console.log('🏆 Résultats finaux triés par score:', results);
    return results;
  }
  // Calculer le matching entre un employé et une tâche
  calculateEmployeeTaskMatch(employee, task) {
    const matchingSkills = [];
    const missingSkills = [];
    let totalScore = 0;
    let maxScore = 0;
    task.requirements.forEach(requirement => {
      const employeeSkill = employee.skills.find(s => s.name === requirement.skillName);
      const importanceWeight = requirement.importance === 'critical' ? 30 : requirement.importance === 'high' ? 20 : requirement.importance === 'medium' ? 10 : 5;
      maxScore += importanceWeight;
      if (employeeSkill) {
        const skillScore = Math.min(employeeSkill.level, requirement.requiredLevel) / requirement.requiredLevel;
        totalScore += skillScore * importanceWeight;
        matchingSkills.push(requirement.skillName);
      } else {
        missingSkills.push(requirement.skillName);
      }
    });
    const score = maxScore > 0 ? Math.round(totalScore / maxScore * 100) : 0;
    return {
      score,
      matchingSkills,
      missingSkills
    };
  }
  // Déterminer la recommandation basée sur le score
  getRecommendationFromScore(score) {
    if (score >= 80) return 'highly_recommended';
    if (score >= 60) return 'recommended';
    if (score >= 40) return 'consider';
    return 'not_recommended';
  }
  // Algorithme local de simulation de projet
  localProjectSimulation(project) {
    const startDate = new Date();
    const totalDays = project.duration;
    const endDate = new Date(startDate.getTime() + totalDays * 24 * 60 * 60 * 1000);
    // Simulation simple de répartition des tâches
    const taskAssignments = project.tasks.map(task => ({
      taskId: task.id,
      employeeId: this.selectBestEmployee(task, project.availableEmployees)
    }));
    // Calcul du risque basé sur la complexité et la durée
    const riskLevel = this.calculateRiskLevel(project);
    return {
      timeline: this.generateTimeline(project.tasks, totalDays),
      taskAssignments,
      estimatedCompletion: endDate,
      riskLevel,
      recommendations: this.generateRecommendations(project, riskLevel)
    };
  }
  // Sélectionner le meilleur employé pour une tâche
  selectBestEmployee(task, availableEmployees) {
    // Logique simple pour l'instant
    // En production, cela analyserait les compétences réelles
    if (availableEmployees.length > 0) {
      return availableEmployees[0];
    }
    return 1; // Default employee
  }
  // Calculer le niveau de risque d'un projet
  calculateRiskLevel(project) {
    let riskScore = 0;
    // Risque basé sur la durée
    if (project.duration > 60) riskScore += 2;else if (project.duration > 30) riskScore += 1;
    // Risque basé sur le nombre de tâches
    if (project.tasks.length > 20) riskScore += 2;else if (project.tasks.length > 10) riskScore += 1;
    // Risque basé sur la complexité des tâches
    const highComplexityTasks = project.tasks.filter(task => task.requirements.some(req => req.importance === 'critical')).length;
    if (highComplexityTasks > 5) riskScore += 2;else if (highComplexityTasks > 2) riskScore += 1;
    if (riskScore >= 4) return 'high';
    if (riskScore >= 2) return 'medium';
    return 'low';
  }
  // Générer une timeline pour le projet
  generateTimeline(tasks, totalDays) {
    const timeline = [];
    const daysPerTask = Math.floor(totalDays / tasks.length);
    tasks.forEach((task, index) => {
      const startDay = index * daysPerTask;
      const endDay = Math.min((index + 1) * daysPerTask, totalDays);
      timeline.push({
        taskId: task.id,
        taskTitle: task.title,
        startDate: new Date(Date.now() + startDay * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + endDay * 24 * 60 * 60 * 1000),
        duration: endDay - startDay,
        priority: task.priority
      });
    });
    return timeline;
  }
  // Générer des recommandations pour le projet
  generateRecommendations(project, riskLevel) {
    const recommendations = [];
    if (riskLevel === 'high') {
      recommendations.push('Considérez diviser le projet en plusieurs phases plus petites');
      recommendations.push('Prévoyez des points de contrôle réguliers');
      recommendations.push('Allouez des ressources supplémentaires en cas de retard');
    } else if (riskLevel === 'medium') {
      recommendations.push('Surveillez attentivement le progrès hebdomadaire');
      recommendations.push('Préparez un plan de contingence');
    } else {
      recommendations.push('Le projet semble réalisable dans les délais prévus');
    }
    // Recommandations basées sur les tâches
    const criticalTasks = project.tasks.filter(task => task.requirements.some(req => req.importance === 'critical'));
    if (criticalTasks.length > 0) {
      recommendations.push(`Accordez une attention particulière aux ${criticalTasks.length} tâches critiques`);
    }
    return recommendations;
  }
  // Formatter un profil de compétences
  formatSkillsProfile(data) {
    return {
      employeeId: data.employeeId,
      employeeName: data.employeeName,
      skills: data.skills || [],
      technologies: data.technologies || [],
      specialities: data.specialities || [],
      overallScore: data.overallScore || 0,
      lastUpdated: new Date(data.lastUpdated),
      strengths: data.strengths || [],
      improvementAreas: data.improvementAreas || []
    };
  }
  // Formatter un match d'employé
  formatEmployeeMatch(data) {
    return {
      employeeId: data.employeeId,
      employeeName: data.employeeName,
      matchScore: data.matchScore || 0,
      matchingSkills: data.matchingSkills || [],
      missingSkills: data.missingSkills || [],
      availability: data.availability || 0,
      workload: data.workload || 0,
      recommendation: data.recommendation || 'consider'
    };
  }
  // Calculer le score de compatibilité entre un employé et une tâche
  calculateCompatibilityScore(employeeProfile, task) {
    let totalScore = 0;
    let maxScore = 0;
    task.requirements.forEach(requirement => {
      maxScore += requirement.importance === 'critical' ? 30 : requirement.importance === 'high' ? 20 : requirement.importance === 'medium' ? 10 : 5;
      const employeeSkill = employeeProfile.skills.find(s => s.name === requirement.skillName);
      if (employeeSkill) {
        const skillScore = Math.min(employeeSkill.level, requirement.requiredLevel) / requirement.requiredLevel;
        totalScore += skillScore * (requirement.importance === 'critical' ? 30 : requirement.importance === 'high' ? 20 : requirement.importance === 'medium' ? 10 : 5);
      }
    });
    return maxScore > 0 ? Math.round(totalScore / maxScore * 100) : 0;
  }
  // Analyser la charge de travail d'un employé
  analyzeWorkload(employeeId, currentTasks) {
    const totalHours = currentTasks.reduce((sum, task) => sum + (task.estimatedHours || 0), 0);
    const weeklyCapacity = 40; // 40 heures par semaine
    const workload = Math.min(totalHours / weeklyCapacity * 100, 100);
    const availability = Math.max(100 - workload, 0);
    return {
      availability,
      workload
    };
  }
  // Générer des suggestions d'amélioration pour un employé
  generateImprovementSuggestions(employeeProfile) {
    const suggestions = [];
    // Analyser les compétences faibles
    const weakSkills = employeeProfile.skills.filter(s => s.level <= 2);
    if (weakSkills.length > 0) {
      suggestions.push(`Considérez une formation pour améliorer: ${weakSkills.map(s => s.name).join(', ')}`);
    }
    // Analyser les technologies de base
    const basicTechnologies = employeeProfile.technologies.filter(t => t.proficiency === 'basic');
    if (basicTechnologies.length > 0) {
      suggestions.push(`Progresser sur les technologies: ${basicTechnologies.map(t => t.name).join(', ')}`);
    }
    // Suggestions basées sur les tendances du marché
    const hasModernSkills = employeeProfile.skills.some(s => ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Docker'].includes(s.name));
    if (!hasModernSkills) {
      suggestions.push('Considérez l\'apprentissage de technologies modernes (React, Angular, Node.js, etc.)');
    }
    return suggestions;
  }
  static {
    this.ɵfac = function IARecommendationService_Factory(t) {
      return new (t || IARecommendationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: IARecommendationService,
      factory: IARecommendationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6784:
/*!***************************************************!*\
  !*** ./src/app/services/task-enhanced.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskEnhancedService: () => (/* binding */ TaskEnhancedService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class TaskEnhancedService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  // ==================== MULTI-EMPLOYEE ASSIGNMENT ====================
  // Ajouter un employé à une tâche
  addEmployeeToTask(taskId, employeeId, status = 'pending') {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/assignments`, {
      employee_id: employeeId,
      status
    });
  }
  // Retirer un employé d'une tâche
  removeEmployeeFromTask(taskId, employeeId) {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}/assignments/${employeeId}`);
  }
  // Mettre à jour le statut d'assignation d'un employé
  updateAssignmentStatus(taskId, employeeId, status) {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/assignments/${employeeId}/status`, {
      status
    });
  }
  // ==================== TASK DEPENDENCIES ====================
  // Obtenir les dépendances d'une tâche
  getTaskDependencies(taskId) {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/dependencies`);
  }
  // Ajouter une dépendance entre tâches
  addTaskDependency(taskId, dependsOnTaskId, dependencyType = 'finish_to_start', lagDays = 0) {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/dependencies`, {
      depends_on_task_id: dependsOnTaskId,
      dependency_type: dependencyType,
      lag_days: lagDays
    });
  }
  // Supprimer une dépendance
  removeTaskDependency(taskId, dependsOnTaskId) {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}/dependencies/${dependsOnTaskId}`);
  }
  // ==================== TASK TIME TRACKING ====================
  // Démarrer une session de temps
  startTimeSession(taskId, employeeId, description) {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/time-sessions`, {
      employee_id: employeeId,
      description
    });
  }
  // Mettre en pause une session
  pauseTimeSession(taskId, sessionId) {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/time-sessions/${sessionId}/pause`, {});
  }
  // Reprendre une session
  resumeTimeSession(taskId, sessionId) {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/time-sessions/${sessionId}/resume`, {});
  }
  // Terminer une session
  completeTimeSession(taskId, sessionId) {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/time-sessions/${sessionId}/complete`, {});
  }
  // Obtenir les sessions de temps d'une tâche
  getTaskTimeSessions(taskId) {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/time-sessions`);
  }
  // ==================== TASK EDIT HISTORY ====================
  // Obtenir l'historique d'édition d'une tâche
  getTaskEditHistory(taskId) {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/edit-history`);
  }
  static {
    this.ɵfac = function TaskEnhancedService_Factory(t) {
      return new (t || TaskEnhancedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TaskEnhancedService,
      factory: TaskEnhancedService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_manager_manager_module_ts.js.map
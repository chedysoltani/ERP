"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards_manager_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/manager-auth.guard */ 8190);
/* harmony import */ var _components_manager_gantt_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/manager/gantt-page.component */ 6656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: '',
  redirectTo: '/landing',
  pathMatch: 'full'
}, {
  path: 'landing',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/landing/landing.module */ 8396)).then(m => m.LandingModule)
}, {
  path: 'users',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/users/users.module */ 2288)).then(m => m.UsersModule)
}, {
  path: 'manager-login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_attendance_service_ts-src_app_services_documents_service_ts-src_app_-ea6a39"), __webpack_require__.e("src_app_components_manager_manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/manager/manager.module */ 1556)).then(m => m.ManagerModule)
}, {
  path: 'manager',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_attendance_service_ts-src_app_services_documents_service_ts-src_app_-ea6a39"), __webpack_require__.e("src_app_components_manager_manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/manager/manager.module */ 1556)).then(m => m.ManagerModule)
}, {
  path: 'gantt',
  component: _components_manager_gantt_page_component__WEBPACK_IMPORTED_MODULE_1__.GanttPageComponent,
  canActivate: [_guards_manager_auth_guard__WEBPACK_IMPORTED_MODULE_0__.ManagerAuthGuard]
}, {
  path: 'employee-login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_employee_employee-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/employee/employee-login.module */ 7366)).then(m => m.EmployeeLoginModule)
}, {
  path: 'employee',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_attendance_service_ts-src_app_services_documents_service_ts-src_app_-ea6a39"), __webpack_require__.e("src_app_components_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/employee/employee.module */ 1098)).then(m => m.EmployeeModule)
}, {
  path: 'admin-login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/admin.module */ 6836)).then(m => m.AdminModule)
}, {
  path: 'admin',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/admin.module */ 6836)).then(m => m.AdminModule)
}, {
  path: '**',
  redirectTo: '/landing'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_shared_toast_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared/toast-container.component */ 3925);



class AppComponent {
  constructor() {
    this.title = 'SIT ERP System';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet")(1, "app-toast-container");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_shared_toast_container_component__WEBPACK_IMPORTED_MODULE_0__.ToastContainerComponent],
      styles: ["\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n\n\n\n.router-outlet[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZ2xvYmF1eCBwb3VyIGwnYXBwbGljYXRpb24gKi9cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEFuaW1hdGlvbnMgZGUgdHJhbnNpdGlvbiAqL1xuLnJvdXRlci1vdXRsZXQge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_manager_gantt_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/manager/gantt-page.component */ 6656);
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ 9833);
/* harmony import */ var _components_shared_toast_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/toast-container.component */ 3925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);









class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpErrorInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _components_shared_toast_container_component__WEBPACK_IMPORTED_MODULE_4__.ToastContainerComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_manager_gantt_page_component__WEBPACK_IMPORTED_MODULE_2__.GanttPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _components_shared_toast_container_component__WEBPACK_IMPORTED_MODULE_4__.ToastContainerComponent]
  });
})();

/***/ }),

/***/ 6656:
/*!************************************************************!*\
  !*** ./src/app/components/manager/gantt-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GanttPageComponent: () => (/* binding */ GanttPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/manager-auth.service */ 6250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function GanttPageComponent_div_43_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", day_r1, " ");
  }
}
function GanttPageComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GanttPageComponent_div_43_div_4_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const month_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](month_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", month_r2.days);
  }
}
function GanttPageComponent_div_45_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r3.getTaskStyle(task_r3))("title", task_r3.name + " - " + task_r3.assignee + " (" + task_r3.progress + "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r3.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", task_r3.progress, "%");
  }
}
function GanttPageComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 37)(5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 41)(10, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 44)(16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, GanttPageComponent_div_45_div_19_Template, 8, 5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", project_r5.progress, "%")("background", project_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", project_r5.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r5.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r5.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", project_r5.color)("opacity", 0.3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r3.getProjectStyle(project_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.getProjectTasks(project_r5.id));
  }
}
class GanttPageComponent {
  constructor(router, managerAuthService) {
    this.router = router;
    this.managerAuthService = managerAuthService;
    this.projects = [];
    this.tasks = [];
    this.currentView = 'month';
  }
  ngOnInit() {
    this.loadRealData();
  }
  loadRealData() {
    // Charger les vrais projets depuis la base de données
    this.managerAuthService.getManagerProjects().subscribe({
      next: response => {
        const projects = response.data || response;
        console.log('Projets chargés pour Gantt:', projects);
        // Transformer les projets pour le Gantt
        this.projects = projects.map(project => ({
          id: project.id,
          name: project.name,
          startDate: project.startDate || this.getDefaultStartDate(),
          endDate: project.endDate || this.getDefaultEndDate(),
          progress: project.progress || 0,
          status: project.status || 'active',
          color: this.getProjectColor(project.priority || 'medium')
        }));
        // Charger les tâches associées
        this.loadProjectTasks();
      },
      error: error => {
        console.error('Erreur lors du chargement des projets:', error);
        // Utiliser les données de démonstration en cas d'erreur
        this.generateFallbackData();
      }
    });
  }
  loadProjectTasks() {
    // Charger les tâches pour chaque projet en utilisant les routes existantes
    this.tasks = [];
    // Charger les tâches par statut pour avoir toutes les tâches
    const statuses = ['todo', 'in_progress', 'done'];
    statuses.forEach(status => {
      this.managerAuthService.getTasksByStatus(status).subscribe({
        next: response => {
          const tasks = response.data || response;
          console.log(`Tâches ${status} chargées:`, tasks);
          // Transformer les tâches pour le Gantt
          const ganttTasks = tasks.map(task => {
            const project = this.projects.find(p => p.id === task.project_id);
            if (!project) {
              console.error(`Projet non trouvé pour la tâche ${task.title}`);
              return null;
            }
            const startDate = task.due_date || this.getDefaultStartDate();
            const endDate = this.calculateEndDate(startDate, task.estimated_hours || 8);
            console.log(`Tâche: ${task.title}`, {
              startDate,
              endDate,
              projectId: project.id,
              projectStartDate: project.startDate,
              projectEndDate: project.endDate,
              originalProgress: task.progress,
              status: task.status,
              calculatedProgress: task.status === 'done' ? 100 : task.progress || 0,
              allFields: task,
              prototypeKeys: Object.getOwnPropertyNames(Object.getPrototypeOf(task)),
              allKeys: Object.keys(task)
            });
            return {
              id: `${project.id}-${task.id}`,
              projectId: project.id,
              name: task.title,
              startDate: startDate,
              endDate: endDate,
              progress: task.status === 'done' ? 100 : task.progress || 0,
              status: task.status || 'todo',
              assignee: this.getAssigneeName(task)
            };
          }).filter(Boolean);
          this.tasks.push(...ganttTasks);
        },
        error: error => {
          console.error(`Erreur lors du chargement des tâches ${status}:`, error);
        }
      });
    });
  }
  generateFallbackData() {
    // Données de démonstration si la base de données n'est pas accessible
    this.projects = [{
      id: 1,
      name: 'Développement ERP',
      startDate: '2026-05-01',
      endDate: '2026-06-30',
      progress: 65,
      status: 'active',
      color: '#7C74FF'
    }, {
      id: 2,
      name: 'Site E-commerce',
      startDate: '2026-05-15',
      endDate: '2026-07-15',
      progress: 40,
      status: 'active',
      color: '#10B981'
    }, {
      id: 3,
      name: 'Application Mobile',
      startDate: '2026-06-01',
      endDate: '2026-08-30',
      progress: 20,
      status: 'active',
      color: '#F59E0B'
    }, {
      id: 4,
      name: 'Migration Cloud',
      startDate: '2026-04-15',
      endDate: '2026-05-30',
      progress: 85,
      status: 'active',
      color: '#EF4444'
    }];
    this.tasks = [{
      id: '1-1',
      projectId: 1,
      name: 'Analyse des besoins',
      startDate: '2026-05-01',
      endDate: '2026-05-15',
      progress: 100,
      status: 'done',
      assignee: 'Jean Dupont'
    }, {
      id: '1-2',
      projectId: 1,
      name: 'Développement Backend',
      startDate: '2026-05-10',
      endDate: '2026-06-10',
      progress: 70,
      status: 'progress',
      assignee: 'Marie Martin'
    }, {
      id: '1-3',
      projectId: 1,
      name: 'Tests & Validation',
      startDate: '2026-06-05',
      endDate: '2026-06-30',
      progress: 30,
      status: 'todo',
      assignee: 'Pierre Bernard'
    }, {
      id: '2-1',
      projectId: 2,
      name: 'Maquettage',
      startDate: '2026-05-15',
      endDate: '2026-05-30',
      progress: 100,
      status: 'done',
      assignee: 'Sophie Lemaire'
    }, {
      id: '2-2',
      projectId: 2,
      name: 'Développement Frontend',
      startDate: '2026-05-25',
      endDate: '2026-07-01',
      progress: 45,
      status: 'progress',
      assignee: 'Thomas Robert'
    }, {
      id: '3-1',
      projectId: 3,
      name: 'Cahier des charges',
      startDate: '2026-06-01',
      endDate: '2026-06-15',
      progress: 80,
      status: 'progress',
      assignee: 'Claire Durand'
    }, {
      id: '3-2',
      projectId: 3,
      name: 'Développement iOS',
      startDate: '2026-06-10',
      endDate: '2026-08-15',
      progress: 10,
      status: 'todo',
      assignee: 'Nicolas Petit'
    }, {
      id: '4-1',
      projectId: 4,
      name: 'Audit Infrastructure',
      startDate: '2026-04-15',
      endDate: '2026-05-01',
      progress: 100,
      status: 'done',
      assignee: 'Lucas Moreau'
    }, {
      id: '4-2',
      projectId: 4,
      name: 'Migration Données',
      startDate: '2026-05-01',
      endDate: '2026-05-30',
      progress: 75,
      status: 'progress',
      assignee: 'Emma Lefebvre'
    }];
  }
  getProjectTasks(projectId) {
    return this.tasks.filter(task => task.projectId === projectId);
  }
  getProjectStyle(project) {
    const allProjects = this.projects;
    if (allProjects.length === 0) return {};
    const earliestStart = new Date(Math.min(...allProjects.map(p => new Date(p.startDate).getTime())));
    const latestEnd = new Date(Math.max(...allProjects.map(p => new Date(p.endDate).getTime())));
    const totalDuration = latestEnd.getTime() - earliestStart.getTime();
    const projectStart = new Date(project.startDate).getTime() - earliestStart.getTime();
    const projectDuration = new Date(project.endDate).getTime() - new Date(project.startDate).getTime();
    return {
      position: 'absolute',
      left: `${projectStart / totalDuration * 100}%`,
      width: `${projectDuration / totalDuration * 100}%`,
      height: '16px',
      'z-index': 1
    };
  }
  getTaskStyle(task) {
    const project = this.projects.find(p => p.id === task.projectId);
    if (!project) {
      console.error(`Projet non trouvé pour la tâche ${task.name}`);
      return {
        display: 'none'
      };
    }
    const projectStart = new Date(project.startDate).getTime();
    const projectEnd = new Date(project.endDate).getTime();
    const taskStart = new Date(task.startDate).getTime();
    const taskEnd = new Date(task.endDate).getTime();
    // Vérifier si les dates sont valides
    if (isNaN(projectStart) || isNaN(projectEnd) || isNaN(taskStart) || isNaN(taskEnd)) {
      console.error(`Dates invalides pour la tâche ${task.name}`, {
        projectStart,
        projectEnd,
        taskStart,
        taskEnd
      });
      return {
        display: 'none'
      };
    }
    const projectDuration = projectEnd - projectStart;
    const taskStartOffset = taskStart - projectStart;
    const taskDuration = taskEnd - taskStart;
    // Si la tâche est complètement en dehors du projet, ne pas l'afficher
    if (taskEnd < projectStart || taskStart > projectEnd) {
      console.warn(`Tâche ${task.name} en dehors des limites du projet`);
      return {
        display: 'none'
      };
    }
    let left = taskStartOffset / projectDuration * 100;
    let width = taskDuration / projectDuration * 100;
    // Ajuster les valeurs si elles sont hors limites
    if (left < 0) {
      width += left;
      left = 0;
    }
    if (left + width > 100) {
      width = 100 - left;
    }
    let backgroundColor = '#6b7280'; // todo (gris)
    if (task.status === 'done') backgroundColor = '#10b981'; // vert
    else if (task.status === 'progress') backgroundColor = '#f59e0b'; // orange
    else if (task.status === 'blocked') backgroundColor = '#ef4444'; // rouge
    // Positionnement vertical plus structuré pour éviter les chevauchements
    const projectTasks = this.getTaskPosition(task.projectId, task.id);
    const top = 45 + projectTasks * 35; // Commence à 45px, espacement de 35px entre tâches
    return {
      position: 'absolute',
      left: `${Math.max(0, left)}%`,
      width: `${Math.max(1, width)}%`,
      'background-color': backgroundColor,
      top: `${top}px`,
      'z-index': 2,
      'min-width': '60px'
    };
  }
  // Nouvelle méthode pour calculer la position verticale des tâches
  getTaskPosition(projectId, taskId) {
    const projectTasks = this.tasks.filter(t => t.projectId === projectId);
    const taskIndex = projectTasks.findIndex(t => t.id === taskId);
    return taskIndex;
  }
  // Méthode pour trouver le nom de l'employé assigné
  getAssigneeName(task) {
    const possibleFields = ['employee_name', 'assignee_name', 'assigned_to', 'employee', 'assignee', 'user_name', 'name', 'firstName', 'lastName', 'fullname', 'full_name', 'employeeId', 'userId'];
    // Chercher dans les champs directs
    for (const field of possibleFields) {
      if (task[field] && typeof task[field] === 'string') {
        return task[field];
      }
    }
    // Chercher dans les champs imbriqués
    if (task.employee && task.employee.name) return task.employee.name;
    if (task.assignee && task.assignee.name) return task.assignee.name;
    if (task.user && task.user.name) return task.user.name;
    // Si on a un assignee_id, chercher le nom correspondant
    if (task.assignee_id) {
      console.log(`Recherche de l'employé avec ID: ${task.assignee_id}`);
      // Pour l'instant, afficher l'ID en attendant d'implémenter la recherche
      return `Employé #${task.assignee_id}`;
    }
    // Chercher dans le prototype
    const proto = Object.getPrototypeOf(task);
    for (const field of possibleFields) {
      if (proto[field] && typeof proto[field] === 'string') {
        return proto[field];
      }
    }
    return 'Non assigné';
  }
  getTimelineMonths() {
    const months = [];
    const currentDate = new Date();
    for (let i = 0; i < 4; i++) {
      const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
      const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
      months.push({
        name: monthDate.toLocaleDateString('fr-FR', {
          month: 'long',
          year: 'numeric'
        }),
        days: Array.from({
          length: Math.min(daysInMonth, 30)
        }, (_, i) => i + 1)
      });
    }
    return months;
  }
  changeView(view) {
    this.currentView = view;
    console.log('Vue changée vers:', view);
  }
  goBack() {
    this.router.navigate(['/manager/dashboard']);
  }
  // Méthodes utilitaires
  getDefaultStartDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  getDefaultEndDate() {
    const today = new Date();
    const endDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // +30 jours
    return endDate.toISOString().split('T')[0];
  }
  getProjectColor(priority) {
    const colors = {
      'high': '#EF4444',
      'medium': '#F59E0B',
      'low': '#10B981'
    };
    return colors[priority] || '#6B7280';
  }
  calculateEndDate(startDate, estimatedHours) {
    if (!startDate) return this.getDefaultEndDate();
    const start = new Date(startDate);
    const daysToAdd = Math.ceil(estimatedHours / 8); // 8 heures par jour
    const end = new Date(start.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    return end.toISOString().split('T')[0];
  }
  static {
    this.ɵfac = function GanttPageComponent_Factory(t) {
      return new (t || GanttPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__.ManagerAuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GanttPageComponent,
      selectors: [["app-gantt-page"]],
      decls: 63,
      vars: 2,
      consts: [[1, "gantt-page"], [1, "page-header"], [1, "back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "header-actions"], [1, "btn-primary"], [1, "bi", "bi-plus-circle"], [1, "btn-secondary"], [1, "bi", "bi-download"], [1, "gantt-controls"], [1, "view-modes"], [1, "view-btn", "active", 3, "click"], [1, "view-btn", 3, "click"], [1, "filters"], [1, "filter-select"], [1, "gantt-container"], [1, "gantt-header"], [1, "project-column"], [1, "timeline-header"], [1, "timeline-dates"], ["class", "month-header", 4, "ngFor", "ngForOf"], [1, "gantt-body"], ["class", "project-row", 4, "ngFor", "ngForOf"], [1, "gantt-legend"], [1, "legend-item"], [1, "legend-color", "done"], [1, "legend-color", "progress"], [1, "legend-color", "todo"], [1, "legend-color", "blocked"], [1, "month-header"], [1, "month-name"], [1, "month-days"], ["class", "day-header", 4, "ngFor", "ngForOf"], [1, "day-header"], [1, "project-row"], [1, "project-info"], [1, "project-name"], [1, "project-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "project-dates"], [1, "date"], [1, "bi", "bi-arrow-right"], [1, "project-timeline"], [1, "timeline-bar"], [1, "project-duration", 3, "ngStyle"], [1, "tasks-layer"], ["class", "task-bar", 3, "ngStyle", "title", 4, "ngFor", "ngForOf"], [1, "task-bar", 3, "ngStyle", "title"], [1, "task-info"], [1, "task-name"], [1, "task-assignee"], [1, "task-progress"]],
      template: function GanttPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GanttPageComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Retour au Dashboard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Diagramme de Gantt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Nouveau Projet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Exporter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GanttPageComponent_Template_button_click_16_listener() {
            return ctx.changeView("month");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Mois");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GanttPageComponent_Template_button_click_18_listener() {
            return ctx.changeView("week");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Semaine");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GanttPageComponent_Template_button_click_20_listener() {
            return ctx.changeView("day");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Jour");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13)(23, "select", 14)(24, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Tous les projets");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Termin\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 14)(31, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Toutes les t\u00E2ches");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "En cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Termin\u00E9es");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 15)(38, "div", 16)(39, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Projets");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 18)(42, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, GanttPageComponent_div_43_Template, 5, 2, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, GanttPageComponent_div_45_Template, 20, 14, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23)(47, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Termin\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "En cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u00C0 faire");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Bloqu\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getTimelineMonths());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]],
      styles: [".gantt-page[_ngcontent-%COMP%] {\n      padding: 20px;\n      background: #f8fafc;\n      min-height: 100vh;\n    }\n\n    .page-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-bottom: 30px;\n      background: white;\n      padding: 20px;\n      border-radius: 12px;\n      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    }\n\n    .back-btn[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 10px 16px;\n      background: #f3f4f6;\n      border: none;\n      border-radius: 8px;\n      color: #374151;\n      cursor: pointer;\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n\n    .back-btn[_ngcontent-%COMP%]:hover {\n      background: #e5e7eb;\n    }\n\n    .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin: 0;\n      color: #1f2937;\n      font-size: 24px;\n      font-weight: 700;\n    }\n\n    .header-actions[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n    }\n\n    .btn-primary[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 10px 16px;\n      background: #7C74FF;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      cursor: pointer;\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n\n    .btn-primary[_ngcontent-%COMP%]:hover {\n      background: #6b63e6;\n    }\n\n    .btn-secondary[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 10px 16px;\n      background: #f3f4f6;\n      color: #374151;\n      border: 1px solid #d1d5db;\n      border-radius: 8px;\n      cursor: pointer;\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n\n    .btn-secondary[_ngcontent-%COMP%]:hover {\n      background: #e5e7eb;\n    }\n\n    .gantt-controls[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px;\n      background: white;\n      padding: 16px 20px;\n      border-radius: 12px;\n      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    }\n\n    .view-modes[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 8px;\n      background: #f1f5f9;\n      padding: 4px;\n      border-radius: 8px;\n    }\n\n    .view-btn[_ngcontent-%COMP%] {\n      padding: 8px 16px;\n      border: none;\n      background: transparent;\n      color: #64748b;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 14px;\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n\n    .view-btn[_ngcontent-%COMP%]:hover {\n      background: #e2e8f0;\n      color: #475569;\n    }\n\n    .view-btn.active[_ngcontent-%COMP%] {\n      background: #7C74FF;\n      color: white;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n    }\n\n    .filter-select[_ngcontent-%COMP%] {\n      padding: 8px 12px;\n      border: 1px solid #d1d5db;\n      border-radius: 6px;\n      background: white;\n      color: #374151;\n      font-size: 14px;\n    }\n\n    .gantt-container[_ngcontent-%COMP%] {\n      background: white;\n      border-radius: 12px;\n      overflow: hidden;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n    .gantt-header[_ngcontent-%COMP%] {\n      display: flex;\n      background: #f8fafc;\n      border-bottom: 2px solid #e2e8f0;\n      position: sticky;\n      top: 0;\n      z-index: 10;\n    }\n\n    .project-column[_ngcontent-%COMP%] {\n      width: 300px;\n      padding: 16px 20px;\n      font-weight: 600;\n      color: #374151;\n      background: #f8fafc;\n      border-right: 2px solid #e2e8f0;\n    }\n\n    .timeline-header[_ngcontent-%COMP%] {\n      flex: 1;\n      overflow-x: auto;\n    }\n\n    .timeline-dates[_ngcontent-%COMP%] {\n      display: flex;\n      min-width: 100%;\n      padding: 16px;\n    }\n\n    .month-header[_ngcontent-%COMP%] {\n      min-width: 200px;\n      text-align: center;\n    }\n\n    .month-name[_ngcontent-%COMP%] {\n      font-weight: 600;\n      color: #374151;\n      margin-bottom: 8px;\n      font-size: 14px;\n    }\n\n    .month-days[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 2px;\n    }\n\n    .day-header[_ngcontent-%COMP%] {\n      min-width: 24px;\n      text-align: center;\n      font-size: 11px;\n      color: #6b7280;\n      padding: 2px;\n    }\n\n    .gantt-body[_ngcontent-%COMP%] {\n      max-height: 600px;\n      overflow-y: auto;\n    }\n\n    .project-row[_ngcontent-%COMP%] {\n      display: flex;\n      border-bottom: 1px solid #e5e7eb;\n      min-height: 120px;\n      transition: background 0.2s ease;\n    }\n\n    .project-row[_ngcontent-%COMP%]:hover {\n      background: #f9fafb;\n    }\n\n    .project-info[_ngcontent-%COMP%] {\n      width: 300px;\n      padding: 16px 20px;\n      border-right: 1px solid #e5e7eb;\n      background: #fafbfc;\n    }\n\n    .project-name[_ngcontent-%COMP%] {\n      font-weight: 600;\n      color: #1f2937;\n      margin-bottom: 8px;\n      font-size: 15px;\n    }\n\n    .project-progress[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      margin-bottom: 8px;\n    }\n\n    .progress-bar[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 6px;\n      background: #e5e7eb;\n      border-radius: 3px;\n      overflow: hidden;\n    }\n\n    .progress-fill[_ngcontent-%COMP%] {\n      height: 100%;\n      transition: width 0.3s ease;\n    }\n\n    .progress-text[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #6b7280;\n      font-weight: 500;\n      min-width: 35px;\n    }\n\n    .project-dates[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 12px;\n      color: #6b7280;\n    }\n\n.date[_ngcontent-%COMP%] {\n      font-weight: 500;\n    }\n\n    .project-timeline[_ngcontent-%COMP%] {\n      flex: 1;\n      position: relative;\n      min-height: 120px;\n      background: linear-gradient(to right, #fafbfc 1px, transparent 1px);\n      background-size: 20px 100%;\n    }\n\n    .timeline-bar[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: flex;\n      align-items: center;\n      padding: 0 20px;\n    }\n\n    .project-duration[_ngcontent-%COMP%] {\n      height: 16px;\n      border-radius: 4px;\n      min-width: 40px;\n    }\n\n    .tasks-layer[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 40px;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      padding: 8px 20px;\n    }\n\n    .task-bar[_ngcontent-%COMP%] {\n      position: absolute;\n      height: 28px;\n      border-radius: 6px;\n      padding: 4px 8px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      color: white;\n      font-size: 11px;\n      cursor: pointer;\n      transition: all 0.2s ease;\n      min-width: 60px;\n      z-index: 2;\n    }\n\n    .task-bar[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n      z-index: 3;\n    }\n\n    .task-info[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      flex: 1;\n      min-width: 0;\n    }\n\n    .task-name[_ngcontent-%COMP%] {\n      font-weight: 500;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .task-assignee[_ngcontent-%COMP%] {\n      font-size: 10px;\n      opacity: 0.9;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .task-progress[_ngcontent-%COMP%] {\n      font-size: 10px;\n      opacity: 0.9;\n      margin-left: 4px;\n    }\n\n    .gantt-legend[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 24px;\n      padding: 20px;\n      background: white;\n      border-radius: 12px;\n      margin-top: 20px;\n      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    }\n\n    .legend-item[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 14px;\n      color: #374151;\n      font-weight: 500;\n    }\n\n    .legend-color[_ngcontent-%COMP%] {\n      width: 16px;\n      height: 16px;\n      border-radius: 4px;\n    }\n\n    .legend-color.done[_ngcontent-%COMP%] { background: #10b981; }\n    .legend-color.progress[_ngcontent-%COMP%] { background: #f59e0b; }\n    .legend-color.todo[_ngcontent-%COMP%] { background: #6b7280; }\n    .legend-color.blocked[_ngcontent-%COMP%] { background: #ef4444; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyL2dhbnR0LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHFDQUFxQztJQUN2Qzs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxTQUFTO01BQ1QsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsU0FBUztJQUNYOztJQUVBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO01BQ1Isa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIscUNBQXFDO0lBQ3ZDOztJQUVBO01BQ0UsYUFBYTtNQUNiLFFBQVE7TUFDUixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtJQUNkOztJQUVBO01BQ0UsYUFBYTtNQUNiLFNBQVM7SUFDWDs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHFDQUFxQztJQUN2Qzs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZ0NBQWdDO01BQ2hDLGdCQUFnQjtNQUNoQixNQUFNO01BQ04sV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLG1CQUFtQjtNQUNuQiwrQkFBK0I7SUFDakM7O0lBRUE7TUFDRSxPQUFPO01BQ1AsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLGVBQWU7TUFDZixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixRQUFRO0lBQ1Y7O0lBRUE7TUFDRSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixjQUFjO01BQ2QsWUFBWTtJQUNkOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixnQ0FBZ0M7TUFDaEMsaUJBQWlCO01BQ2pCLGdDQUFnQztJQUNsQzs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsK0JBQStCO01BQy9CLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxPQUFPO01BQ1AsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsWUFBWTtNQUNaLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixlQUFlO01BQ2YsY0FBYztJQUNoQjs7QUFFSjtNQUNNLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLE9BQU87TUFDUCxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLG1FQUFtRTtNQUNuRSwwQkFBMEI7SUFDNUI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxRQUFRO01BQ1IsU0FBUztNQUNULGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsT0FBTztNQUNQLFFBQVE7TUFDUixTQUFTO01BQ1QsaUJBQWlCO0lBQ25COztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLFlBQVk7TUFDWixlQUFlO01BQ2YsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsVUFBVTtJQUNaOztJQUVBO01BQ0UsMkJBQTJCO01BQzNCLHFDQUFxQztNQUNyQyxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLE9BQU87TUFDUCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUI7SUFDekI7O0lBRUE7TUFDRSxlQUFlO01BQ2YsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCO0lBQ3pCOztJQUVBO01BQ0UsZUFBZTtNQUNmLFlBQVk7TUFDWixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsU0FBUztNQUNULGFBQWE7TUFDYixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixxQ0FBcUM7SUFDdkM7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixlQUFlO01BQ2YsY0FBYztNQUNkLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO0lBQ3BCOztJQUVBLHFCQUFxQixtQkFBbUIsRUFBRTtJQUMxQyx5QkFBeUIsbUJBQW1CLEVBQUU7SUFDOUMscUJBQXFCLG1CQUFtQixFQUFFO0lBQzFDLHdCQUF3QixtQkFBbUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5nYW50dC1wYWdlIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgfVxuXG4gICAgLnBhZ2UtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cblxuICAgIC5iYWNrLWJ0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLmJhY2stYnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlNWU3ZWI7XG4gICAgfVxuXG4gICAgLnBhZ2UtaGVhZGVyIGgxIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICM3Qzc0RkY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzZiNjNlNjtcbiAgICB9XG5cbiAgICAuYnRuLXNlY29uZGFyeSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIH1cblxuICAgIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlNWU3ZWI7XG4gICAgfVxuXG4gICAgLmdhbnR0LWNvbnRyb2xzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgfVxuXG4gICAgLnZpZXctbW9kZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG5cbiAgICAudmlldy1idG4ge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLnZpZXctYnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICB9XG5cbiAgICAudmlldy1idG4uYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICM3Qzc0RkY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmZpbHRlcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAuZmlsdGVyLXNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5nYW50dC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgfVxuXG4gICAgLmdhbnR0LWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuICAgIC5wcm9qZWN0LWNvbHVtbiB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2UyZThmMDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtaGVhZGVyIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIC50aW1lbGluZS1kYXRlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICAubW9udGgtaGVhZGVyIHtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm1vbnRoLW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5tb250aC1kYXlzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDJweDtcbiAgICB9XG5cbiAgICAuZGF5LWhlYWRlciB7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICB9XG5cbiAgICAuZ2FudHQtYm9keSB7XG4gICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgLnByb2plY3Qtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLnByb2plY3Qtcm93OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gICAgfVxuXG4gICAgLnByb2plY3QtaW5mbyB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgICAgYmFja2dyb3VuZDogI2ZhZmJmYztcbiAgICB9XG5cbiAgICAucHJvamVjdC1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1wcm9ncmVzcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNlNWU3ZWI7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1maWxsIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtaW4td2lkdGg6IDM1cHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZGF0ZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIH1cblxuLmRhdGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAucHJvamVjdC10aW1lbGluZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYWZiZmMgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDEwMCU7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWJhciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1kdXJhdGlvbiB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgfVxuXG4gICAgLnRhc2tzLWxheWVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNDBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIH1cblxuICAgIC50YXNrLWJhciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAudGFzay1iYXI6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuXG4gICAgLnRhc2staW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgfVxuXG4gICAgLnRhc2stbmFtZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAudGFzay1hc3NpZ25lZSB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC50YXNrLXByb2dyZXNzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgLmdhbnR0LWxlZ2VuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAyNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cblxuICAgIC5sZWdlbmQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5sZWdlbmQtY29sb3Ige1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLmxlZ2VuZC1jb2xvci5kb25lIHsgYmFja2dyb3VuZDogIzEwYjk4MTsgfVxuICAgIC5sZWdlbmQtY29sb3IucHJvZ3Jlc3MgeyBiYWNrZ3JvdW5kOiAjZjU5ZTBiOyB9XG4gICAgLmxlZ2VuZC1jb2xvci50b2RvIHsgYmFja2dyb3VuZDogIzZiNzI4MDsgfVxuICAgIC5sZWdlbmQtY29sb3IuYmxvY2tlZCB7IGJhY2tncm91bmQ6ICNlZjQ0NDQ7IH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3925:
/*!****************************************************************!*\
  !*** ./src/app/components/shared/toast-container.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastContainerComponent: () => (/* binding */ ToastContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toast.service */ 8397);




function ToastContainerComponent_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
  }
}
function ToastContainerComponent_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
  }
}
function ToastContainerComponent_div_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 14);
  }
}
function ToastContainerComponent_div_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
  }
}
function ToastContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastContainerComponent_div_1_i_3_Template, 1, 0, "i", 5)(4, ToastContainerComponent_div_1_i_4_Template, 1, 0, "i", 6)(5, ToastContainerComponent_div_1_i_5_Template, 1, 0, "i", 7)(6, ToastContainerComponent_div_1_i_6_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastContainerComponent_div_1_Template_button_click_9_listener() {
      const toast_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.dismiss(toast_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("toast-erp toast-erp--", toast_r2.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", toast_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r2.message);
  }
}
class ToastContainerComponent {
  constructor(toastService) {
    this.toastService = toastService;
  }
  ngOnInit() {
    this.toasts$ = this.toastService.toasts$;
  }
  dismiss(id) {
    this.toastService.dismiss(id);
  }
  static {
    this.ɵfac = function ToastContainerComponent_Factory(t) {
      return new (t || ToastContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToastContainerComponent,
      selectors: [["app-toast-container"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [["aria-live", "polite", 1, "toast-container-erp"], ["role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["role", "alert"], [1, "toast-erp__icon"], [3, "ngSwitch"], ["class", "bi bi-check-circle-fill", 4, "ngSwitchCase"], ["class", "bi bi-x-circle-fill", 4, "ngSwitchCase"], ["class", "bi bi-exclamation-triangle-fill", 4, "ngSwitchCase"], ["class", "bi bi-info-circle-fill", 4, "ngSwitchDefault"], [1, "toast-erp__message"], ["aria-label", "Fermer", 1, "toast-erp__close", 3, "click"], [1, "bi", "bi-x"], [1, "bi", "bi-check-circle-fill"], [1, "bi", "bi-x-circle-fill"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "bi", "bi-info-circle-fill"]],
      template: function ToastContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastContainerComponent_div_1_Template, 11, 8, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.toasts$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: [".toast-container-erp[_ngcontent-%COMP%] {\n      position: fixed;\n      bottom: 24px;\n      right: 24px;\n      z-index: 9999;\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      max-width: 400px;\n    }\n    .toast-erp[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: flex-start;\n      gap: 10px;\n      padding: 14px 16px;\n      border-radius: 10px;\n      background: #1e1e2e;\n      border: 1px solid rgba(255,255,255,0.08);\n      color: #e2e8f0;\n      box-shadow: 0 8px 24px rgba(0,0,0,0.35);\n      animation: _ngcontent-%COMP%_toastIn 200ms ease forwards;\n      font-size: 0.875rem;\n      font-weight: 500;\n    }\n    @keyframes _ngcontent-%COMP%_toastIn {\n      from { opacity: 0; transform: translateY(12px); }\n      to   { opacity: 1; transform: translateY(0); }\n    }\n    .toast-erp--success[_ngcontent-%COMP%] { border-left: 3px solid #22c55e; }\n    .toast-erp--error[_ngcontent-%COMP%]   { border-left: 3px solid #ef4444; }\n    .toast-erp--warning[_ngcontent-%COMP%] { border-left: 3px solid #f59e0b; }\n    .toast-erp--info[_ngcontent-%COMP%]    { border-left: 3px solid #3b82f6; }\n    .toast-erp__icon[_ngcontent-%COMP%] { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }\n    .toast-erp--success[_ngcontent-%COMP%]   .toast-erp__icon[_ngcontent-%COMP%] { color: #22c55e; }\n    .toast-erp--error[_ngcontent-%COMP%]   .toast-erp__icon[_ngcontent-%COMP%] { color: #ef4444; }\n    .toast-erp--warning[_ngcontent-%COMP%]   .toast-erp__icon[_ngcontent-%COMP%] { color: #f59e0b; }\n    .toast-erp--info[_ngcontent-%COMP%]   .toast-erp__icon[_ngcontent-%COMP%] { color: #3b82f6; }\n    .toast-erp__message[_ngcontent-%COMP%] { flex: 1; line-height: 1.4; }\n    .toast-erp__close[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: rgba(255,255,255,0.4);\n      cursor: pointer;\n      padding: 0;\n      font-size: 1rem;\n      flex-shrink: 0;\n      transition: color 150ms;\n    }\n    .toast-erp__close[_ngcontent-%COMP%]:hover { color: rgba(255,255,255,0.8); }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxlQUFlO01BQ2YsWUFBWTtNQUNaLFdBQVc7TUFDWCxhQUFhO01BQ2IsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixTQUFTO01BQ1QsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQix3Q0FBd0M7TUFDeEMsY0FBYztNQUNkLHVDQUF1QztNQUN2QyxzQ0FBc0M7TUFDdEMsbUJBQW1CO01BQ25CLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsT0FBTyxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7TUFDaEQsT0FBTyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7SUFDL0M7SUFDQSxzQkFBc0IsOEJBQThCLEVBQUU7SUFDdEQsc0JBQXNCLDhCQUE4QixFQUFFO0lBQ3RELHNCQUFzQiw4QkFBOEIsRUFBRTtJQUN0RCxzQkFBc0IsOEJBQThCLEVBQUU7SUFDdEQsbUJBQW1CLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFO0lBQ3JFLHVDQUF1QyxjQUFjLEVBQUU7SUFDdkQsdUNBQXVDLGNBQWMsRUFBRTtJQUN2RCx1Q0FBdUMsY0FBYyxFQUFFO0lBQ3ZELHVDQUF1QyxjQUFjLEVBQUU7SUFDdkQsc0JBQXNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRTtJQUNqRDtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osNEJBQTRCO01BQzVCLGVBQWU7TUFDZixVQUFVO01BQ1YsZUFBZTtNQUNmLGNBQWM7TUFDZCx1QkFBdUI7SUFDekI7SUFDQSwwQkFBMEIsNEJBQTRCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudG9hc3QtY29udGFpbmVyLWVycCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDI0cHg7XG4gICAgICByaWdodDogMjRweDtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxuICAgIC50b2FzdC1lcnAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxZTFlMmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgICAgY29sb3I6ICNlMmU4ZjA7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4zNSk7XG4gICAgICBhbmltYXRpb246IHRvYXN0SW4gMjAwbXMgZWFzZSBmb3J3YXJkcztcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHRvYXN0SW4ge1xuICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTsgfVxuICAgICAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIH1cbiAgICAudG9hc3QtZXJwLS1zdWNjZXNzIHsgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMjJjNTVlOyB9XG4gICAgLnRvYXN0LWVycC0tZXJyb3IgICB7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2VmNDQ0NDsgfVxuICAgIC50b2FzdC1lcnAtLXdhcm5pbmcgeyBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmNTllMGI7IH1cbiAgICAudG9hc3QtZXJwLS1pbmZvICAgIHsgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjM2I4MmY2OyB9XG4gICAgLnRvYXN0LWVycF9faWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgZmxleC1zaHJpbms6IDA7IG1hcmdpbi10b3A6IDFweDsgfVxuICAgIC50b2FzdC1lcnAtLXN1Y2Nlc3MgLnRvYXN0LWVycF9faWNvbiB7IGNvbG9yOiAjMjJjNTVlOyB9XG4gICAgLnRvYXN0LWVycC0tZXJyb3IgICAudG9hc3QtZXJwX19pY29uIHsgY29sb3I6ICNlZjQ0NDQ7IH1cbiAgICAudG9hc3QtZXJwLS13YXJuaW5nIC50b2FzdC1lcnBfX2ljb24geyBjb2xvcjogI2Y1OWUwYjsgfVxuICAgIC50b2FzdC1lcnAtLWluZm8gICAgLnRvYXN0LWVycF9faWNvbiB7IGNvbG9yOiAjM2I4MmY2OyB9XG4gICAgLnRvYXN0LWVycF9fbWVzc2FnZSB7IGZsZXg6IDE7IGxpbmUtaGVpZ2h0OiAxLjQ7IH1cbiAgICAudG9hc3QtZXJwX19jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDE1MG1zO1xuICAgIH1cbiAgICAudG9hc3QtZXJwX19jbG9zZTpob3ZlciB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7IH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8190:
/*!**********************************************!*\
  !*** ./src/app/guards/manager-auth.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagerAuthGuard: () => (/* binding */ ManagerAuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/manager-auth.service */ 6250);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);





class ManagerAuthGuard {
  constructor(managerAuthService, router) {
    this.managerAuthService = managerAuthService;
    this.router = router;
  }
  canActivate() {
    console.log('Guard canActivate - Is logged in:', this.managerAuthService.isLoggedIn);
    console.log('Guard canActivate - Current manager:', this.managerAuthService.currentManagerValue);
    // Attendre un peu pour laisser le temps au service de se mettre à jour
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
      console.log('Guard après délai - Is logged in:', this.managerAuthService.isLoggedIn);
      if (this.managerAuthService.isLoggedIn) {
        console.log('Guard: accès autorisé');
        return true;
      } else {
        // Rediriger vers la page de login manager
        console.log('Guard: accès refusé, redirection vers login');
        this.router.navigate(['/manager-login']);
        return false;
      }
    }));
  }
  static {
    this.ɵfac = function ManagerAuthGuard_Factory(t) {
      return new (t || ManagerAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_manager_auth_service__WEBPACK_IMPORTED_MODULE_0__.ManagerAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ManagerAuthGuard,
      factory: ManagerAuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9833:
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpErrorInterceptor: () => (/* binding */ HttpErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/toast.service */ 8397);





class HttpErrorInterceptor {
  constructor(router, toast) {
    this.router = router;
    this.toast = toast;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err.status === 401) {
        // 401 on login = wrong credentials — let the component handle it, don't redirect
        if (req.url.includes('/users/login')) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
        }
        // Determine which session expired and redirect accordingly
        const hadAdminSession = !!localStorage.getItem('adminToken');
        const hadEmployeeSession = !!localStorage.getItem('employeeToken');
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        localStorage.removeItem('managerToken');
        localStorage.removeItem('currentManager');
        localStorage.removeItem('employeeToken');
        localStorage.removeItem('currentEmployee');
        this.toast.error('Session expirée. Veuillez vous reconnecter.');
        if (hadAdminSession) {
          this.router.navigate(['/admin/login']);
        } else {
          this.router.navigate([hadEmployeeSession ? '/employee-login' : '/manager-login']);
        }
      } else if (err.status === 403) {
        this.toast.error("Accès refusé. Vous n'avez pas les permissions nécessaires.");
      } else if (err.status === 429) {
        this.toast.warning('Trop de requêtes. Veuillez patienter avant de réessayer.');
      } else if (err.status >= 500) {
        this.toast.error("Erreur serveur. Veuillez réessayer ou contacter l'administrateur.");
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
    }));
  }
  static {
    this.ɵfac = function HttpErrorInterceptor_Factory(t) {
      return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: HttpErrorInterceptor,
      factory: HttpErrorInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 6250:
/*!**************************************************!*\
  !*** ./src/app/services/manager-auth.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagerAuthService: () => (/* binding */ ManagerAuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);





class ManagerAuthService {
  constructor(http) {
    this.http = http;
    this.currentManagerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentManager') || 'null'));
    this.currentManager = this.currentManagerSubject.asObservable();
  }
  get currentManagerValue() {
    return this.currentManagerSubject.value;
  }
  get isLoggedIn() {
    return !!this.currentManagerValue;
  }
  login(email, password) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/login`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response.success && response.data) {
        const manager = {
          ...response.data,
          token: response.token
        };
        if (manager.role !== 'manager' && manager.role !== 'admin') {
          throw new Error('Accès réservé aux managers.');
        }
        // Clear any stale employee session before setting manager session
        localStorage.removeItem('employeeToken');
        localStorage.removeItem('currentEmployee');
        localStorage.setItem('currentManager', JSON.stringify(manager));
        localStorage.setItem('managerToken', response.token);
        this.currentManagerSubject.next(manager);
        return manager;
      } else {
        throw new Error(response.message || 'Erreur d\'authentification');
      }
    }));
  }
  logout() {
    localStorage.removeItem('currentManager');
    localStorage.removeItem('managerToken');
    this.currentManagerSubject.next(null);
  }
  register(managerData) {
    const dataWithRole = {
      ...managerData,
      role: 'manager'
    };
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/register`, dataWithRole);
  }
  refreshToken() {
    const currentManager = this.currentManagerValue;
    if (!currentManager || !currentManager.token) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    }
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/refresh-token`, {
      token: currentManager.token
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      if (response.token) {
        const updatedManager = {
          ...currentManager,
          token: response.token
        };
        localStorage.setItem('currentManager', JSON.stringify(updatedManager));
        this.currentManagerSubject.next(updatedManager);
      }
    }));
  }
  // Créer un projet dans la base de données
  createProject(projectData) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      console.error('Aucun manager connecté');
      throw new Error('Aucun manager connecté');
    }
    console.log('Tentative de création de projet avec les données:', projectData);
    console.log('Manager connecté:', currentManager);
    const projectWithManager = {
      ...projectData,
      manager_id: currentManager.id,
      progress: 0,
      status: 'active',
      deadline: projectData.endDate || 'À définir'
    };
    console.log('Données envoyées au backend:', projectWithManager);
    // Appel au backend pour créer le projet
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/projects`, projectWithManager, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      console.log('Réponse du backend:', response);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur HTTP:', error);
      console.error('Status:', error.status);
      console.error('Error body:', error.error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
    }));
  }
  // Obtenir les projets du manager connecté
  getManagerProjects() {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/projects/manager/${currentManager.id}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  updateProject(projectId, projectData) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/projects/${projectId}`, projectData, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  deleteProject(projectId) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/projects/${projectId}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  // Méthodes pour la gestion des utilisateurs
  getAllUsers() {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  createUser(userData) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`, userData, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  updateUser(userId, userData) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/${userId}`, userData, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  deleteUser(userId) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  // Méthodes pour la gestion des tâches
  createTask(taskData) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks`, taskData, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  updateTask(taskId, taskData) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks/${taskId}`, taskData, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  updateTaskStatus(taskId, status) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks/${taskId}/status`, {
      status
    }, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  approveTask(taskId) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks/${taskId}/approve`, {}, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  rejectTask(taskId) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks/${taskId}/reject`, {
      reason: ''
    }, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  deleteTask(taskId) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks/${taskId}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  getTasksByStatus(status) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks/status/${status}?managerId=${currentManager.id}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  // Méthodes pour la gestion du timesheet
  getTimesheetEntries() {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/timesheet/manager/${currentManager.id}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  getTimesheetStats() {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/timesheet/stats/manager/${currentManager.id}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  getTimesheetByPeriod(period, startDate, endDate) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    let params = new URLSearchParams();
    if (period) params.append('period', period);
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/timesheet/period/manager/${currentManager.id}?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  // Méthodes pour la gestion des réunions
  createMeeting(meeting) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    const meetingData = {
      ...meeting,
      creator_id: currentManager.id
    };
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/meetings`, meetingData, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  getMeetings() {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/meetings/manager/${currentManager.id}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  updateMeeting(meetingId, meeting) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/meetings/${meetingId}`, meeting, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  deleteMeeting(meetingId) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/meetings/${meetingId}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  // Récupérer les réunions assignées à un employé
  getEmployeeMeetings(employeeId) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/meetings/employee/${employeeId}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  // Mettre à jour le statut de participation d'un employé à une réunion
  updateMeetingAttendance(meetingId, employeeId, status, notes) {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/meetings/${meetingId}/employee/${employeeId}/status`, {
      status,
      notes
    }, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  getUpcomingMeetings() {
    const currentManager = this.currentManagerValue;
    if (!currentManager) {
      throw new Error('Aucun manager connecté');
    }
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/meetings/upcoming/manager/${currentManager.id}`, {
      headers: {
        'Authorization': `Bearer ${currentManager.token}`
      }
    });
  }
  static {
    this.ɵfac = function ManagerAuthService_Factory(t) {
      return new (t || ManagerAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ManagerAuthService,
      factory: ManagerAuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8397:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ToastService {
  constructor() {
    this._toasts$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.toasts$ = this._toasts$.asObservable();
    this.nextId = 1;
  }
  show(message, type = 'info', duration = 4000) {
    const toast = {
      id: this.nextId++,
      type,
      message,
      duration
    };
    this._toasts$.next([...this._toasts$.getValue(), toast]);
    setTimeout(() => this.dismiss(toast.id), duration);
  }
  success(message) {
    this.show(message, 'success');
  }
  error(message) {
    this.show(message, 'error', 6000);
  }
  warning(message) {
    this.show(message, 'warning');
  }
  info(message) {
    this.show(message, 'info');
  }
  dismiss(id) {
    this._toasts$.next(this._toasts$.getValue().filter(t => t.id !== id));
  }
  static {
    this.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:3001/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
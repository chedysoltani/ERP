"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_landing_landing_module_ts"],{

/***/ 5125:
/*!**************************************************************!*\
  !*** ./src/app/components/landing/landing-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingRoutingModule: () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 2505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
}];
class LandingRoutingModule {
  static {
    this.ɵfac = function LandingRoutingModule_Factory(t) {
      return new (t || LandingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LandingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2505:
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function LandingComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition-delay", i_r2 * 0.1 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", feature_r1.accent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("bi ", feature_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.description);
  }
}
function LandingComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition-delay", i_r4 * 0.05 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("bi ", module_r3.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r3.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r3.description);
  }
}
function LandingComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r5.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r5.suffix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r5.label);
  }
}
class LandingComponent {
  constructor() {
    this.isScrolled = false;
    this.company = {
      name: 'SIT',
      tagline: 'Pilotez votre entreprise. En un seul endroit.',
      description: 'La plateforme ERP conçue pour les équipes modernes — gestion de projets, tâches, temps, réunions et documents, unifiés dans une interface fluide et intelligente.'
    };
    this.features = [{
      title: 'Centralisation totale',
      description: 'Tous vos projets, équipes et données en un seul tableau de bord unifié et accessible à tout moment.',
      icon: 'bi-layers-fill',
      accent: '#7C74FF'
    }, {
      title: 'Collaboration en temps réel',
      description: 'Assignation de tâches, suivi d\'avancement et commentaires partagés entre les membres de l\'équipe.',
      icon: 'bi-people-fill',
      accent: '#00CFAA'
    }, {
      title: 'Sécurité & Contrôle d\'accès',
      description: 'Gestion granulaire des permissions par rôle : Admin, Manager et Employé avec authentification sécurisée.',
      icon: 'bi-shield-lock-fill',
      accent: '#FB7185'
    }, {
      title: 'Analytics & Rapports',
      description: 'Timesheets, statistiques de projets et dashboards pour des décisions éclairées et un suivi précis.',
      icon: 'bi-bar-chart-line-fill',
      accent: '#F59E0B'
    }];
    this.modules = [{
      name: 'Utilisateurs & Rôles',
      description: 'Authentification sécurisée, gestion des rôles Admin, Manager, Employé et permissions granulaires.',
      icon: 'bi-person-badge-fill',
      tag: 'Sécurité'
    }, {
      name: 'Gestion des Projets',
      description: 'Création, suivi d\'état et attribution des membres à chaque projet de l\'entreprise.',
      icon: 'bi-kanban-fill',
      tag: 'Core'
    }, {
      name: 'Gestion des Tâches',
      description: 'Kanban avec priorités, statuts To Do / In Progress / Done et dates limites.',
      icon: 'bi-check2-square',
      tag: 'Productivité'
    }, {
      name: 'Diagramme de Gantt',
      description: 'Planification visuelle de vos projets avec gestion des dépendances entre tâches.',
      icon: 'bi-calendar3-range',
      tag: 'Planification'
    }, {
      name: 'Timesheet',
      description: 'Enregistrement des heures de travail et rapports détaillés par utilisateur ou par projet.',
      icon: 'bi-clock-history',
      tag: 'RH'
    }, {
      name: 'Réunions',
      description: 'Planification, gestion des participants, agenda et prise de notes centralisés.',
      icon: 'bi-camera-video-fill',
      tag: 'Collaboration'
    }, {
      name: 'Documents',
      description: 'Upload, partage et organisation des fichiers par projet avec accès sécurisé.',
      icon: 'bi-folder2-open',
      tag: 'Stockage'
    }, {
      name: 'Dashboard',
      description: 'Statistiques globales, tâches en cours, terminées et activité des équipes en temps réel.',
      icon: 'bi-speedometer2',
      tag: 'Analytics'
    }];
    this.stats = [{
      number: '8',
      label: 'Modules intégrés',
      suffix: ''
    }, {
      number: '100',
      label: 'Uptime garanti',
      suffix: '%'
    }, {
      number: '3',
      label: 'Rôles & permissions',
      suffix: ''
    }, {
      number: '24',
      label: 'Accès continu',
      suffix: '/7'
    }];
  }
  ngOnInit() {
    this.initScrollReveal();
  }
  onWindowScroll() {
    this.isScrolled = window.scrollY > 60;
  }
  initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  getTagColor(tag) {
    const map = {
      'Sécurité': '#FB7185',
      'Core': '#7C74FF',
      'Productivité': '#00CFAA',
      'Planification': '#F59E0B',
      'RH': '#F97316',
      'Collaboration': '#38BDF8',
      'Stockage': '#86EFAC',
      'Analytics': '#C084FC'
    };
    return map[tag] || '#7C74FF';
  }
  static {
    this.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      hostBindings: function LandingComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function LandingComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 100,
      vars: 6,
      consts: [[1, "navbar"], [1, "nav-container", "glass-card"], [1, "nav-brand", 3, "click"], [1, "logo-orb"], [1, "brand-name"], [1, "nav-links"], [3, "click"], [1, "nav-actions"], ["href", "/employee-login", 1, "btn-premium", "btn-secondary"], ["href", "/manager", 1, "btn-premium", "btn-primary"], ["id", "home", 1, "hero"], [1, "hero-glow", "hero-glow-1"], [1, "hero-glow", "hero-glow-2"], [1, "hero-container", "fade-in"], [1, "hero-badge", "reveal"], [1, "badge-pulse"], [1, "hero-title", "reveal"], [1, "gradient-text"], [1, "hero-subtitle", "reveal"], [1, "hero-actions", "reveal"], [1, "btn-premium", "btn-primary", 3, "click"], [1, "bi", "bi-arrow-down"], [1, "bi", "bi-arrow-right"], [1, "floating-cards"], [1, "float-card", "glass-card", "float", 2, "--delay", "0s"], [1, "bi", "bi-kanban"], [1, "float-card", "glass-card", "float", 2, "--delay", "1.5s"], [1, "bi", "bi-graph-up-arrow"], ["id", "features", 1, "features-section"], [1, "section-container"], [1, "section-header", "reveal"], [1, "section-title"], [1, "section-subtitle"], [1, "features-grid"], ["class", "feature-card glass-card reveal", 3, "transition-delay", 4, "ngFor", "ngForOf"], ["id", "modules", 1, "modules-section"], [1, "modules-grid"], ["class", "module-card glass-card reveal", 3, "transition-delay", 4, "ngFor", "ngForOf"], ["id", "stats", 1, "stats-section"], [1, "stats-container", "reveal"], ["class", "stat-item", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "footer-container"], [1, "footer-main"], [1, "footer-brand"], [1, "footer-nav"], ["href", "/manager"], ["href", "/employee-login"], [1, "footer-bottom"], [1, "footer-socials"], [1, "bi", "bi-linkedin"], [1, "bi", "bi-twitter-x"], [1, "feature-card", "glass-card", "reveal"], [1, "feature-icon"], [1, "feature-title"], [1, "feature-desc"], [1, "module-card", "glass-card", "reveal"], [1, "module-header"], [1, "module-tag"], [1, "module-name"], [1, "module-desc"], [1, "module-hover-icon"], [1, "bi", "bi-arrow-up-right"], [1, "stat-item"], [1, "stat-value"], [1, "stat-number"], [1, "stat-suffix"], [1, "stat-label"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_2_listener() {
            return ctx.scrollToSection("home");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SIT ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5)(7, "li")(8, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_8_listener() {
            return ctx.scrollToSection("features");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fonctionnalit\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_11_listener() {
            return ctx.scrollToSection("modules");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Modules");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_14_listener() {
            return ctx.scrollToSection("stats");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Performance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7)(17, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Acc\u00E8s Employ\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Portail Manager ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 11)(23, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13)(25, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Innovation Op\u00E9rationnelle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " L'ERP nouvelle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "g\u00E9n\u00E9ration.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19)(36, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_36_listener() {
            return ctx.scrollToSection("modules");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Explorer la suite ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Espace Employ\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23)(43, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Gestion Kanban");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Analytics AI");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 28)(52, "div", 29)(53, "div", 30)(54, "h2", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pourquoi choisir ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "SIT ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Une architecture robuste pour des performances in\u00E9gal\u00E9es.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, LandingComponent_div_62_Template, 7, 9, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 35)(64, "div", 29)(65, "div", 30)(66, "h2", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Modules ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Int\u00E9gr\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Huit outils puissants travaillant en parfaite synergie.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, LandingComponent_div_73_Template, 11, 8, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 38)(75, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, LandingComponent_div_76_Template, 8, 3, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "footer", 41)(78, "div", 42)(79, "div", 43)(80, "div", 44)(81, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "SIT ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "L'excellence op\u00E9rationnelle au service de votre ambition.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 45)(86, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_86_listener() {
            return ctx.scrollToSection("features");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_88_listener() {
            return ctx.scrollToSection("modules");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Modules");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 48)(95, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u00A9 2024 SIT ERP \u2014 Tous droits r\u00E9serv\u00E9s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 50)(99, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolled", ctx.isScrolled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.company.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modules);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: ["\n\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  padding: 20px 0;\n  transition: var(--transition-base);\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 12px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  width: 90%;\n}\n\n.navbar.scrolled[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.nav-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.logo-orb[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: linear-gradient(135deg, var(--primary), var(--secondary));\n  border-radius: 50%;\n  box-shadow: 0 0 15px var(--primary-glow);\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-weight: 800;\n  font-size: 1.5rem;\n  color: var(--text-main);\n  letter-spacing: -1px;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  gap: 32px;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-main);\n  font-weight: 500;\n  cursor: pointer;\n  transition: var(--transition-fast);\n  text-decoration: none;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n\n\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 120px 20px 60px;\n  background: var(--bg-darker);\n  overflow: hidden;\n  color: white;\n}\n\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  filter: blur(120px);\n  border-radius: 50%;\n  z-index: 0;\n  opacity: 0.4;\n}\n\n.hero-glow-1[_ngcontent-%COMP%] {\n  background: var(--primary);\n  top: -100px;\n  right: -100px;\n}\n\n.hero-glow-2[_ngcontent-%COMP%] {\n  background: var(--secondary);\n  bottom: -100px;\n  left: -100px;\n}\n\n.hero-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  max-width: 800px;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 100px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin-bottom: 24px;\n  backdrop-filter: blur(4px);\n}\n\n.badge-pulse[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--success);\n  border-radius: 50%;\n  animation: pulse-glow 2s infinite;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  letter-spacing: -2px;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #94a3b8;\n  margin-bottom: 40px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 60px;\n}\n\n.floating-cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n}\n\n.float-card[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 600;\n  color: white;\n  border-radius: var(--radius-md);\n}\n\n.float-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--secondary);\n}\n\n\n\n\n.features-section[_ngcontent-%COMP%] {\n  padding: 120px 20px;\n  background: var(--bg-light);\n}\n\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 80px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n}\n\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 32px;\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  padding: 40px;\n  transition: var(--transition-base);\n  border-radius: var(--radius-lg);\n}\n\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  border-color: var(--primary);\n  background: white;\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  font-size: 1.5rem;\n  color: white;\n}\n\n\n\n\n.modules-section[_ngcontent-%COMP%] {\n  padding: 120px 20px;\n  background: var(--bg-light);\n}\n\n.modules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n}\n\n.module-card[_ngcontent-%COMP%] {\n  padding: 32px;\n  position: relative;\n  overflow: hidden;\n  transition: var(--transition-base);\n}\n\n.module-card[_ngcontent-%COMP%]:hover {\n  background: white;\n  transform: scale(1.02);\n}\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.module-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary);\n}\n\n.module-tag[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--bg-light);\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.module-name[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.module-hover-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  opacity: 0;\n  transform: translate(10px, 10px);\n  transition: var(--transition-base);\n  color: var(--primary);\n}\n\n.module-card[_ngcontent-%COMP%]:hover   .module-hover-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translate(0, 0);\n}\n\n\n\n\n.stats-section[_ngcontent-%COMP%] {\n  padding: 100px 20px;\n  background: var(--bg-dark);\n  color: white;\n}\n\n.stats-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 40px;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 800;\n  font-family: 'Syne', sans-serif;\n}\n\n.stat-suffix[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n\n\n\n.footer[_ngcontent-%COMP%] {\n  padding: 80px 20px 40px;\n  background: white;\n  border-top: 1px solid var(--bg-light);\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.footer-main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 60px;\n}\n\n.footer-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 12px;\n  display: block;\n}\n\n.footer-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n}\n\n.footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: none;\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--transition-fast);\n}\n\n.footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 40px;\n  border-top: 1px solid var(--bg-light);\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.footer-socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  font-size: 1.2rem;\n}\n\n\n\n\n@media (max-width: 1024px) {\n  .hero-title[_ngcontent-%COMP%] { font-size: 4rem; }\n}\n\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%] { display: none; }\n  .hero-title[_ngcontent-%COMP%] { font-size: 3rem; }\n  .hero-actions[_ngcontent-%COMP%] { flex-direction: column; }\n  .floating-cards[_ngcontent-%COMP%] { flex-direction: column; align-items: center; }\n  .footer-main[_ngcontent-%COMP%] { flex-direction: column; gap: 40px; }\n  .footer-nav[_ngcontent-%COMP%] { flex-wrap: wrap; }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7O0FBRWhDO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxRUFBcUU7RUFDckUsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNi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RUFDbEQsY0FBYyxlQUFlLEVBQUU7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0gTGFuZGluZyBQYWdlIFN0eWxlcyAtLS0gKi9cblxuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5uYXZiYXIuc2Nyb2xsZWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5uYXYtYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9nby1vcmIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5KSwgdmFyKC0tc2Vjb25kYXJ5KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tcHJpbWFyeS1nbG93KTtcbn1cblxuLmJyYW5kLW5hbWUge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZ2FwOiAzMnB4O1xufVxuXG4ubmF2LWxpbmtzIGEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm5hdi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4vKiAtLS0gSEVSTyBTRUNUSU9OIC0tLSAqL1xuXG4uaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMjBweCAyMHB4IDYwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWRhcmtlcik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlcm8tZ2xvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBmaWx0ZXI6IGJsdXIoMTIwcHgpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmhlcm8tZ2xvdy0xIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHRvcDogLTEwMHB4O1xuICByaWdodDogLTEwMHB4O1xufVxuXG4uaGVyby1nbG93LTIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBib3R0b206IC0xMDBweDtcbiAgbGVmdDogLTEwMHB4O1xufVxuXG4uaGVyby1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmhlcm8tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbn1cblxuLmJhZGdlLXB1bHNlIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogcHVsc2UtZ2xvdyAycyBpbmZpbml0ZTtcbn1cblxuLmhlcm8tdGl0bGUge1xuICBmb250LXNpemU6IDVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xufVxuXG4uaGVyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5oZXJvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uZmxvYXRpbmctY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xufVxuXG4uZmxvYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG59XG5cbi5mbG9hdC1jYXJkIGkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi8qIC0tLSBGRUFUVVJFUyAtLS0gKi9cblxuLmZlYXR1cmVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodCk7XG59XG5cbi5zZWN0aW9uLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnNlY3Rpb24tc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZmVhdHVyZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDMycHg7XG59XG5cbi5mZWF0dXJlLWNhcmQge1xuICBwYWRkaW5nOiA0MHB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xufVxuXG4uZmVhdHVyZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5mZWF0dXJlLWljb24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogLS0tIE1PRFVMRVMgLS0tICovXG5cbi5tb2R1bGVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodCk7XG59XG5cbi5tb2R1bGVzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xufVxuXG4ubW9kdWxlLWNhcmQge1xuICBwYWRkaW5nOiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XG59XG5cbi5tb2R1bGUtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG4ubW9kdWxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1vZHVsZS1oZWFkZXIgaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubW9kdWxlLXRhZyB7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2R1bGUtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5tb2R1bGUtaG92ZXItaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMTBweCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm1vZHVsZS1jYXJkOmhvdmVyIC5tb2R1bGUtaG92ZXItaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xufVxuXG4vKiAtLS0gU1RBVFMgLS0tICovXG5cbi5zdGF0cy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTAwcHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXRzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNDBweDtcbn1cblxuLnN0YXQtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXQtbnVtYmVyIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xufVxuXG4uc3RhdC1zdWZmaXgge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi8qIC0tLSBGT09URVIgLS0tICovXG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiA4MHB4IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iZy1saWdodCk7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9vdGVyLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5mb290ZXItYnJhbmQgLmJyYW5kLW5hbWUge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9vdGVyLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNDBweDtcbn1cblxuLmZvb3Rlci1uYXYgYSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XG59XG5cbi5mb290ZXItbmF2IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5mb290ZXItYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJnLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvb3Rlci1zb2NpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLyogLS0tIFJFU1BPTlNJVkUgLS0tICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlcm8tdGl0bGUgeyBmb250LXNpemU6IDRyZW07IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYtbGlua3MgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5oZXJvLXRpdGxlIHsgZm9udC1zaXplOiAzcmVtOyB9XG4gIC5oZXJvLWFjdGlvbnMgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5mbG9hdGluZy1jYXJkcyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmZvb3Rlci1tYWluIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0MHB4OyB9XG4gIC5mb290ZXItbmF2IHsgZmxleC13cmFwOiB3cmFwOyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8396:
/*!******************************************************!*\
  !*** ./src/app/components/landing/landing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingModule: () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 2505);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-routing.module */ 5125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class LandingModule {
  static {
    this.ɵfac = function LandingModule_Factory(t) {
      return new (t || LandingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LandingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_landing_landing_module_ts.js.map
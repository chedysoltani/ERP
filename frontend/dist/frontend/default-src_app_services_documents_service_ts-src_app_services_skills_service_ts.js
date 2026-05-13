"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["default-src_app_services_documents_service_ts-src_app_services_skills_service_ts"],{

/***/ 7452:
/*!****************************************!*\
  !*** ./src/app/models/skills.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SKILL_CATEGORIES: () => (/* binding */ SKILL_CATEGORIES),
/* harmony export */   TECHNOLOGY_CATEGORIES: () => (/* binding */ TECHNOLOGY_CATEGORIES)
/* harmony export */ });
const SKILL_CATEGORIES = [{
  id: 'technical',
  name: 'Compétences Techniques',
  description: 'Langages de programmation, frameworks, outils',
  skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Angular', 'Node.js', 'Docker']
}, {
  id: 'soft',
  name: 'Compétences Douces',
  description: 'Communication, leadership, gestion de projet',
  skills: ['Communication', 'Leadership', 'Gestion de projet', 'Travail d\'équipe', 'Résolution de problèmes']
}, {
  id: 'language',
  name: 'Langues',
  description: 'Compétences linguistiques',
  skills: ['Français', 'Anglais', 'Espagnol', 'Allemand', 'Italien']
}, {
  id: 'certification',
  name: 'Certifications',
  description: 'Certifications professionnelles',
  skills: ['PMP', 'Scrum Master', 'AWS', 'Azure', 'Google Cloud', 'ISTQB']
}];
const TECHNOLOGY_CATEGORIES = [{
  id: 'frontend',
  name: 'Frontend',
  examples: ['React', 'Angular', 'Vue.js', 'HTML/CSS']
}, {
  id: 'backend',
  name: 'Backend',
  examples: ['Node.js', 'Python', 'Java', 'PHP', '.NET']
}, {
  id: 'database',
  name: 'Base de données',
  examples: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
}, {
  id: 'devops',
  name: 'DevOps',
  examples: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI']
}, {
  id: 'mobile',
  name: 'Mobile',
  examples: ['React Native', 'Flutter', 'Swift', 'Kotlin']
}, {
  id: 'ai',
  name: 'IA/ML',
  examples: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI']
}, {
  id: 'other',
  name: 'Autre',
  examples: ['Autres technologies']
}];

/***/ }),

/***/ 9592:
/*!***********************************************!*\
  !*** ./src/app/services/documents.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsService: () => (/* binding */ DocumentsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



// ---------------------------------------------------------------
// NOTE : JWT/auth temporairement désactivé.
// Aucun header Authorization n'est envoyé.
// ---------------------------------------------------------------
class DocumentsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/documents`;
  }
  // ── Routes Manager ──────────────────────────────────────────
  /**
   * Upload un document (multipart/form-data).
   * Le FormData doit contenir : file, title, description, employeeId, uploadedBy (optionnel).
   */
  uploadDocument(formData) {
    // Pas de Content-Type explicite : HttpClient le gère automatiquement
    // pour multipart/form-data (boundary inclus).
    return this.http.post(this.apiUrl, formData);
  }
  getAllDocuments() {
    return this.http.get(this.apiUrl);
  }
  updateDocument(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  deleteDocument(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // ── Routes Employé ──────────────────────────────────────────
  /** Récupérer les documents assignés à un employé spécifique */
  getDocumentsByEmployee(employeeId) {
    return this.http.get(`${this.apiUrl}/employee/${employeeId}`);
  }
  /** Route legacy — passe employeeId en query param */
  getMyDocuments(employeeId) {
    return this.http.get(`${this.apiUrl}/my`, {
      params: {
        employeeId: employeeId.toString()
      }
    });
  }
  // ── Téléchargement ──────────────────────────────────────────
  /** Ouvre le fichier dans un nouvel onglet */
  downloadDocument(filePath) {
    const base = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.replace('/api', ''); // ex: http://localhost:3001
    const url = `${base}/${filePath}`;
    window.open(url, '_blank');
  }
  static {
    this.ɵfac = function DocumentsService_Factory(t) {
      return new (t || DocumentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DocumentsService,
      factory: DocumentsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8772:
/*!********************************************!*\
  !*** ./src/app/services/skills.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsService: () => (/* binding */ SkillsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _models_skills_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/skills.model */ 7452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);





class SkillsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3001/api/employee';
  }
  // Récupérer le profil de compétences d'un employé
  getEmployeeSkillsProfile(employeeId) {
    return this.http.get(`${this.apiUrl}/${employeeId}/skills`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response.success) {
        return this.formatEmployeeSkillsProfile(response.data);
      }
      throw new Error('Failed to load skills profile');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error loading skills profile:', error);
      // Retourner un profil vide en cas d'erreur
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.createEmptyProfile(employeeId));
    }));
  }
  // Sauvegarder le profil de compétences
  saveEmployeeSkillsProfile(profile) {
    return this.http.post(`${this.apiUrl}/${profile.employeeId}/skills`, profile).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log('Skills profile saved:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error saving skills profile:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Ajouter une compétence
  addSkill(employeeId, skill) {
    return this.http.post(`${this.apiUrl}/${employeeId}/skills`, skill).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error adding skill:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Mettre à jour une compétence
  updateSkill(employeeId, skillId, skill) {
    return this.http.put(`${this.apiUrl}/${employeeId}/skills/${skillId}`, skill).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error updating skill:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Supprimer une compétence
  deleteSkill(employeeId, skillId) {
    return this.http.delete(`${this.apiUrl}/${employeeId}/skills/${skillId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting skill:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Ajouter une technologie
  addTechnology(employeeId, technology) {
    return this.http.post(`${this.apiUrl}/${employeeId}/technologies`, technology).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error adding technology:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Mettre à jour une technologie
  updateTechnology(employeeId, techId, technology) {
    return this.http.put(`${this.apiUrl}/${employeeId}/technologies/${techId}`, technology).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error updating technology:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Supprimer une technologie
  deleteTechnology(employeeId, techId) {
    return this.http.delete(`${this.apiUrl}/${employeeId}/technologies/${techId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting technology:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Ajouter une spécialité
  addSpeciality(employeeId, speciality) {
    return this.http.post(`${this.apiUrl}/${employeeId}/specialities`, speciality).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error adding speciality:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Supprimer une spécialité
  deleteSpeciality(employeeId, specialityId) {
    return this.http.delete(`${this.apiUrl}/${employeeId}/specialities/${specialityId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting speciality:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Obtenir toutes les catégories de compétences
  getSkillCategories() {
    return _models_skills_model__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORIES;
  }
  // Obtenir toutes les catégories de technologies
  getTechnologyCategories() {
    return _models_skills_model__WEBPACK_IMPORTED_MODULE_0__.TECHNOLOGY_CATEGORIES;
  }
  // Analyser et calculer le score global
  calculateOverallScore(profile) {
    let totalScore = 0;
    let maxScore = 0;
    // Score des compétences
    profile.skills.forEach(skill => {
      totalScore += skill.level * 20; // niveau 1-5 → 20-100 points
      maxScore += 100;
    });
    // Score des technologies
    profile.technologies.forEach(tech => {
      const techScore = this.getTechnologyScore(tech.proficiency);
      totalScore += techScore;
      maxScore += 100;
    });
    // Score des spécialités (bonus)
    totalScore += profile.specialities.length * 50;
    maxScore += profile.specialities.length * 50;
    return maxScore > 0 ? Math.round(totalScore / maxScore * 100) : 0;
  }
  // Obtenir le score d'une technologie selon sa maîtrise
  getTechnologyScore(proficiency) {
    switch (proficiency) {
      case 'expert':
        return 100;
      case 'advanced':
        return 80;
      case 'intermediate':
        return 60;
      case 'basic':
        return 40;
      default:
        return 20;
    }
  }
  // Formatter le profil depuis la réponse API
  formatEmployeeSkillsProfile(data) {
    return {
      employeeId: data.employeeId,
      skills: data.skills || [],
      technologies: data.technologies || [],
      specialities: data.specialities || [],
      overallScore: data.overallScore || 0,
      lastUpdated: new Date(data.lastUpdated),
      strengths: data.strengths || [],
      improvementAreas: data.improvementAreas || []
    };
  }
  // Créer un profil vide
  createEmptyProfile(employeeId) {
    return {
      employeeId,
      skills: [],
      technologies: [],
      specialities: [],
      overallScore: 0,
      lastUpdated: new Date(),
      strengths: [],
      improvementAreas: []
    };
  }
  // Analyser les forces et faiblesses
  analyzeProfile(profile) {
    const strengths = [];
    const improvementAreas = [];
    // Analyser les compétences
    const highLevelSkills = profile.skills.filter(s => s.level >= 4);
    const lowLevelSkills = profile.skills.filter(s => s.level <= 2);
    if (highLevelSkills.length > 0) {
      strengths.push(`Expertise en ${highLevelSkills.map(s => s.name).join(', ')}`);
    }
    if (lowLevelSkills.length > 0) {
      improvementAreas.push(`Améliorer ${lowLevelSkills.map(s => s.name).join(', ')}`);
    }
    // Analyser les technologies
    const expertTechnologies = profile.technologies.filter(t => t.proficiency === 'expert');
    const basicTechnologies = profile.technologies.filter(t => t.proficiency === 'basic');
    if (expertTechnologies.length > 0) {
      strengths.push(`Maîtrise experte de ${expertTechnologies.map(t => t.name).join(', ')}`);
    }
    if (basicTechnologies.length > 0) {
      improvementAreas.push(`Progresser sur ${basicTechnologies.map(t => t.name).join(', ')}`);
    }
    // Analyser les catégories
    const categories = [...new Set(profile.skills.map(s => s.category))];
    if (categories.length < 3) {
      improvementAreas.push('Diversifier les compétences dans différentes catégories');
    }
    return {
      strengths,
      improvementAreas
    };
  }
  static {
    this.ɵfac = function SkillsService_Factory(t) {
      return new (t || SkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: SkillsService,
      factory: SkillsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_services_documents_service_ts-src_app_services_skills_service_ts.js.map
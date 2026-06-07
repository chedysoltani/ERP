import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface ProjectKpi {
  planned_hours: number;
  consumed_hours: number;
  remaining_hours: number;
  team_members: number;
  total_tasks: number;
  done_tasks: number;
  in_progress_tasks: number;
  blocked_tasks: number;
  late_tasks: number;
  taux_consommation: number;
  progression_planifiee: number;
  progression_reelle: number;
  alerte_sous_planifie: boolean;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [DatePipe],
  template: `
<div class="project-detail" *ngIf="project && kpi">

  <!-- En-tête projet -->
  <div class="pd-header">
    <div class="pd-title-row">
      <h2 class="pd-title">{{ project.name }}</h2>
      <span class="pd-status-badge" [ngClass]="'color-' + project.status_color">
        {{ project.status_display }}
      </span>
    </div>
    <p class="pd-desc">{{ project.description }}</p>
    <div class="pd-dates">
      <span><i class="bi bi-calendar-check"></i> Début : {{ project.start_date | date:'dd/MM/yyyy' }}</span>
      <span><i class="bi bi-calendar-x"></i> Fin : {{ project.end_date | date:'dd/MM/yyyy' }}</span>
    </div>
  </div>

  <!-- Alerte sous-planification (F-13) -->
  <div class="pd-alert" *ngIf="kpi.alerte_sous_planifie">
    <i class="bi bi-exclamation-triangle-fill"></i>
    Alerte : la consommation réelle ({{ kpi.progression_reelle }}%) dépasse l'avancement planifié ({{ kpi.progression_planifiee }}%).
    Le projet est sous-planifié.
  </div>

  <!-- KPI Cards (F-12) -->
  <div class="pd-kpi-grid">
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon blue"><i class="bi bi-clock"></i></div>
      <div class="pd-kpi-val">{{ kpi.planned_hours }}h</div>
      <div class="pd-kpi-label">Heures planifiées</div>
    </div>
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon green"><i class="bi bi-clock-history"></i></div>
      <div class="pd-kpi-val">{{ kpi.consumed_hours }}h</div>
      <div class="pd-kpi-label">Heures consommées</div>
    </div>
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon orange"><i class="bi bi-hourglass-split"></i></div>
      <div class="pd-kpi-val">{{ kpi.remaining_hours }}h</div>
      <div class="pd-kpi-label">Heures restantes</div>
    </div>
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon purple"><i class="bi bi-people"></i></div>
      <div class="pd-kpi-val">{{ kpi.team_members }}</div>
      <div class="pd-kpi-label">Membres équipe</div>
    </div>
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon teal"><i class="bi bi-list-check"></i></div>
      <div class="pd-kpi-val">{{ kpi.done_tasks }} / {{ kpi.total_tasks }}</div>
      <div class="pd-kpi-label">Tâches terminées</div>
    </div>
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon red"><i class="bi bi-exclamation-circle"></i></div>
      <div class="pd-kpi-val">{{ kpi.blocked_tasks }}</div>
      <div class="pd-kpi-label">Tâches bloquées</div>
    </div>
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon red"><i class="bi bi-alarm"></i></div>
      <div class="pd-kpi-val">{{ kpi.late_tasks }}</div>
      <div class="pd-kpi-label">Tâches en retard</div>
    </div>
    <div class="pd-kpi-card">
      <div class="pd-kpi-icon" [ngClass]="kpi.taux_consommation > 90 ? 'red' : 'green'">
        <i class="bi bi-speedometer2"></i>
      </div>
      <div class="pd-kpi-val">{{ kpi.taux_consommation }}%</div>
      <div class="pd-kpi-label">Taux consommation budget</div>
    </div>
  </div>

  <!-- Barres de progression (F-12, F-13) -->
  <div class="pd-progress-section">
    <div class="pd-progress-row">
      <div class="pd-progress-label">
        Avancement planifié (pondéré par heures)
        <strong>{{ kpi.progression_planifiee }}%</strong>
      </div>
      <div class="pd-progress-bar-outer">
        <div class="pd-progress-bar-inner blue"
             [style.width.%]="kpi.progression_planifiee"></div>
      </div>
      <div class="pd-progress-legend">
        <span class="legend-item"><span class="dot blue"></span>Calculé sur heures réelles travaillées / estimées par tâche · Terminée = 100%</span>
      </div>
    </div>

    <div class="pd-progress-row">
      <div class="pd-progress-label">
        Consommation réelle du budget heures
        <strong>{{ kpi.progression_reelle }}%</strong>
        <span class="pd-alert-inline" *ngIf="kpi.alerte_sous_planifie">⚠ Dépassement</span>
      </div>
      <div class="pd-progress-bar-outer">
        <div class="pd-progress-bar-inner"
             [ngClass]="kpi.alerte_sous_planifie ? 'red' : 'green'"
             [style.width.%]="kpi.progression_reelle"></div>
      </div>
    </div>
  </div>

  <!-- Tâches par statut -->
  <div class="pd-tasks-summary">
    <div class="pd-task-stat todo">
      <span class="ts-count">{{ kpi.total_tasks - kpi.done_tasks - kpi.in_progress_tasks }}</span>
      <span class="ts-label">À faire</span>
    </div>
    <div class="pd-task-stat inprog">
      <span class="ts-count">{{ kpi.in_progress_tasks }}</span>
      <span class="ts-label">En cours</span>
    </div>
    <div class="pd-task-stat done">
      <span class="ts-count">{{ kpi.done_tasks }}</span>
      <span class="ts-label">Terminées</span>
    </div>
    <div class="pd-task-stat blocked">
      <span class="ts-count">{{ kpi.blocked_tasks }}</span>
      <span class="ts-label">Bloquées</span>
    </div>
    <div class="pd-task-stat late">
      <span class="ts-count">{{ kpi.late_tasks }}</span>
      <span class="ts-label">En retard</span>
    </div>
  </div>

  <!-- Config avancée (F-12) -->
  <div class="pd-advanced-section">
    <button class="pd-toggle-btn" (click)="showAdvanced = !showAdvanced">
      <i class="bi" [ngClass]="showAdvanced ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
      Configuration avancée
    </button>
    <div class="pd-advanced-form" *ngIf="showAdvanced">
      <div class="pd-form-row">
        <label>Heures planifiées</label>
        <input type="number" [(ngModel)]="editPlannedHours" min="0" step="0.5" class="pd-input" />
      </div>
      <button class="pd-save-btn" (click)="savePlannedHours()" [disabled]="saving">
        {{ saving ? 'Enregistrement…' : 'Enregistrer' }}
      </button>
    </div>
  </div>

</div>

<div class="pd-loading" *ngIf="loading">
  <i class="bi bi-arrow-repeat spin"></i> Chargement…
</div>
  `,
  styles: [`
    /* ── Base ── */
    .project-detail { padding: 1.5rem; max-width: 1100px; color: #e2e8f0; }

    /* ── Header ── */
    .pd-header { margin-bottom: 1.75rem; }
    .pd-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: .6rem; flex-wrap: wrap; }
    .pd-title { font-size: 1.5rem; font-weight: 700; margin: 0; color: #f1f5f9; }

    .pd-status-badge { padding: .3rem .9rem; border-radius: 20px; font-size: .78rem; font-weight: 700; letter-spacing: .3px; }
    .color-green  { background: rgba(16,185,129,.18); color: #34d399; border: 1px solid rgba(52,211,153,.3); }
    .color-red    { background: rgba(239,68,68,.18);  color: #f87171; border: 1px solid rgba(248,113,113,.3); }
    .color-gray   { background: rgba(148,163,184,.15); color: #94a3b8; border: 1px solid rgba(148,163,184,.25); }
    .color-blue   { background: rgba(59,130,246,.18); color: #60a5fa; border: 1px solid rgba(96,165,250,.3); }
    .color-orange { background: rgba(245,158,11,.18); color: #fbbf24; border: 1px solid rgba(251,191,36,.3); }

    .pd-desc  { color: #94a3b8; margin: 0 0 .6rem; font-size: .9rem; line-height: 1.6; }
    .pd-dates { display: flex; gap: 1.5rem; font-size: .82rem; color: #64748b; flex-wrap: wrap; }
    .pd-dates span { display: flex; align-items: center; gap: .35rem; }

    /* ── Alerte sous-planification ── */
    .pd-alert {
      background: rgba(245,158,11,.12); border: 1px solid rgba(245,158,11,.35);
      border-radius: 10px; padding: .75rem 1rem; color: #fbbf24;
      margin-bottom: 1.25rem; display: flex; align-items: center; gap: .6rem; font-size: .88rem;
    }

    /* ── Grille KPI ── */
    .pd-kpi-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
      gap: .9rem; margin-bottom: 2rem;
    }
    .pd-kpi-card {
      background: #1e293b; border: 1px solid #334155;
      border-radius: 14px; padding: 1.1rem .9rem; text-align: center;
      transition: border-color .2s, transform .2s;
    }
    .pd-kpi-card:hover { border-color: #475569; transform: translateY(-2px); }

    .pd-kpi-icon {
      width: 42px; height: 42px; border-radius: 50%;
      display: inline-flex; align-items: center; justify-content: center;
      font-size: 1.15rem; margin-bottom: .6rem;
    }
    .pd-kpi-icon.blue   { background: rgba(59,130,246,.2);  color: #60a5fa; }
    .pd-kpi-icon.green  { background: rgba(16,185,129,.2);  color: #34d399; }
    .pd-kpi-icon.orange { background: rgba(245,158,11,.2);  color: #fbbf24; }
    .pd-kpi-icon.purple { background: rgba(139,92,246,.2);  color: #a78bfa; }
    .pd-kpi-icon.teal   { background: rgba(20,184,166,.2);  color: #2dd4bf; }
    .pd-kpi-icon.red    { background: rgba(239,68,68,.2);   color: #f87171; }

    .pd-kpi-val   { font-size: 1.5rem; font-weight: 800; color: #f1f5f9; line-height: 1.1; }
    .pd-kpi-label { font-size: .72rem; color: #64748b; margin-top: .3rem; text-transform: uppercase; letter-spacing: .4px; }

    /* ── Barres de progression ── */
    .pd-progress-section { margin-bottom: 2rem; }
    .pd-progress-row { margin-bottom: 1.4rem; }
    .pd-progress-label {
      display: flex; align-items: center; gap: .75rem; font-size: .88rem;
      color: #cbd5e1; margin-bottom: .55rem; flex-wrap: wrap;
    }
    .pd-progress-label strong { color: #f1f5f9; font-size: 1rem; }
    .pd-progress-bar-outer {
      background: #1e293b; border: 1px solid #334155;
      border-radius: 8px; height: 14px; overflow: hidden;
    }
    .pd-progress-bar-inner { height: 100%; border-radius: 8px; transition: width .5s ease; min-width: 2px; }
    .pd-progress-bar-inner.blue  { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
    .pd-progress-bar-inner.green { background: linear-gradient(90deg, #10b981, #34d399); }
    .pd-progress-bar-inner.red   { background: linear-gradient(90deg, #ef4444, #f87171); }
    .pd-progress-legend { font-size: .72rem; color: #475569; margin-top: .3rem; }
    .pd-alert-inline {
      background: rgba(245,158,11,.2); color: #fbbf24;
      padding: .15rem .55rem; border-radius: 5px; font-size: .72rem; font-weight: 700;
    }

    /* ── Résumé tâches ── */
    .pd-tasks-summary { display: flex; gap: .85rem; flex-wrap: wrap; margin-bottom: 2rem; }
    .pd-task-stat {
      flex: 1; min-width: 90px; text-align: center;
      padding: .9rem .5rem; border-radius: 12px; border: 1px solid;
    }
    .pd-task-stat.todo    { background: rgba(148,163,184,.08); border-color: #334155; }
    .pd-task-stat.inprog  { background: rgba(59,130,246,.1);   border-color: rgba(59,130,246,.3); }
    .pd-task-stat.done    { background: rgba(16,185,129,.1);   border-color: rgba(16,185,129,.3); }
    .pd-task-stat.blocked { background: rgba(245,158,11,.1);   border-color: rgba(245,158,11,.3); }
    .pd-task-stat.late    { background: rgba(239,68,68,.1);    border-color: rgba(239,68,68,.3); }

    .ts-count {
      display: block; font-size: 1.6rem; font-weight: 800; color: #f1f5f9; line-height: 1.1;
    }
    .ts-label { font-size: .72rem; color: #64748b; margin-top: .25rem; text-transform: uppercase; letter-spacing: .3px; }

    /* ── Config avancée ── */
    .pd-advanced-section { border-top: 1px solid #1e293b; padding-top: 1.1rem; margin-top: .5rem; }
    .pd-toggle-btn {
      background: none; border: none; cursor: pointer; color: #64748b; font-size: .88rem;
      display: flex; align-items: center; gap: .5rem; padding: 0;
    }
    .pd-toggle-btn:hover { color: #94a3b8; }
    .pd-advanced-form { margin-top: 1rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .pd-form-row { display: flex; align-items: center; gap: .6rem; }
    .pd-form-row label { font-size: .85rem; color: #94a3b8; }
    .pd-input {
      background: #0f172a; border: 1px solid #334155; color: #e2e8f0;
      border-radius: 6px; padding: .4rem .6rem; width: 130px; font-size: .9rem;
    }
    .pd-input:focus { outline: none; border-color: #3b82f6; }
    .pd-save-btn {
      background: #3b82f6; color: #fff; border: none; border-radius: 7px;
      padding: .45rem 1.1rem; cursor: pointer; font-weight: 600; font-size: .88rem;
    }
    .pd-save-btn:hover { background: #2563eb; }
    .pd-save-btn:disabled { opacity: .5; cursor: not-allowed; }

    /* ── Loading / back ── */
    .pd-loading { text-align: center; padding: 2.5rem; color: #475569; font-size: .95rem; }
    .spin { animation: spin 1s linear infinite; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

    .btn-back {
      background: #1e293b; border: 1px solid #334155; border-radius: 8px;
      padding: .45rem 1rem; cursor: pointer; color: #94a3b8;
      display: inline-flex; align-items: center; gap: .45rem;
      margin-bottom: 1.25rem; font-size: .85rem; transition: all .2s;
    }
    .btn-back:hover { background: #334155; color: #e2e8f0; }

    /* ── Tableau projets (F-01, styles injectés dans le parent) ── */
    :host ::ng-deep .projects-list-table { overflow-x: auto; }
    :host ::ng-deep .proj-table { width: 100%; border-collapse: collapse; font-size: .88rem; }
    :host ::ng-deep .proj-table th { padding: .75rem 1rem; text-align: left; font-weight: 600;
      background: rgba(30,41,59,.8); border-bottom: 1px solid #334155; color: #94a3b8;
      text-transform: uppercase; font-size: .72rem; letter-spacing: .4px; }
    :host ::ng-deep .proj-table td { padding: .85rem 1rem; border-bottom: 1px solid #1e293b; vertical-align: middle; color: #e2e8f0; }
    :host ::ng-deep .proj-row:hover td { background: rgba(51,65,85,.4); }
    :host ::ng-deep .proj-desc { font-size: .78rem; color: #64748b; margin-top: 2px; }
    :host ::ng-deep .status-badge { display: inline-block; padding: .25rem .65rem; border-radius: 20px; font-size: .75rem; font-weight: 700; }
    :host ::ng-deep .status-badge-green  { background: rgba(16,185,129,.18); color: #34d399; border: 1px solid rgba(52,211,153,.3); }
    :host ::ng-deep .status-badge-red    { background: rgba(239,68,68,.18);  color: #f87171; border: 1px solid rgba(248,113,113,.3); }
    :host ::ng-deep .status-badge-gray   { background: rgba(148,163,184,.15); color: #94a3b8; border: 1px solid #334155; }
    :host ::ng-deep .status-badge-blue   { background: rgba(59,130,246,.18); color: #60a5fa; border: 1px solid rgba(96,165,250,.3); }
    :host ::ng-deep .status-badge-orange { background: rgba(245,158,11,.18); color: #fbbf24; border: 1px solid rgba(251,191,36,.3); }
    :host ::ng-deep .proj-dates { font-size: .78rem; color: #64748b; line-height: 1.7; }
    :host ::ng-deep .proj-dates i { margin-right: 3px; }
    :host ::ng-deep .proj-hours { text-align: center; }
    :host ::ng-deep .hours-val { font-weight: 700; color: #e2e8f0; }
    :host ::ng-deep .hours-val.consumed { color: #60a5fa; }
    :host ::ng-deep .mini-progress-bar { background: #0f172a; border: 1px solid #334155; border-radius: 4px; height: 6px; margin-top: 5px; overflow: hidden; width: 80px; }
    :host ::ng-deep .mini-progress-fill { height: 100%; border-radius: 4px; }
    :host ::ng-deep .mini-progress-fill.ok     { background: #10b981; }
    :host ::ng-deep .mini-progress-fill.danger { background: #ef4444; }
    :host ::ng-deep .proj-actions-cell { white-space: nowrap; }
    :host ::ng-deep .btn-sm { padding: .3rem .65rem; border: none; border-radius: 6px; cursor: pointer; font-size: .78rem; margin-right: 4px; font-weight: 600; }
    :host ::ng-deep .btn-consult { background: #3b82f6; color: #fff; }
    :host ::ng-deep .btn-consult:hover { background: #2563eb; }
    :host ::ng-deep .btn-edit    { background: #1e293b; color: #fbbf24; border: 1px solid #334155; }
    :host ::ng-deep .btn-edit:hover { background: #334155; }
    :host ::ng-deep .btn-del     { background: #1e293b; color: #f87171; border: 1px solid #334155; }
    :host ::ng-deep .btn-del:hover { background: rgba(239,68,68,.15); }
    :host ::ng-deep .no-projects { text-align: center; padding: 3rem; color: #475569; }
    :host ::ng-deep .no-projects i { font-size: 2.5rem; display: block; margin-bottom: .75rem; }
  `]
})
export class ProjectDetailComponent implements OnInit, OnChanges {
  @Input() projectId!: number;

  project: any = null;
  kpi: ProjectKpi | null = null;
  loading = false;
  showAdvanced = false;
  editPlannedHours = 0;
  saving = false;

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('managerToken') || localStorage.getItem('employeeToken') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void { this.load(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['projectId'] && !changes['projectId'].firstChange) this.load();
  }

  load(): void {
    if (!this.projectId) return;
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/projects/${this.projectId}/kpi`, { headers: this.headers })
      .subscribe({
        next: (resp) => {
          this.project = resp.data.project;
          this.kpi = resp.data.kpi;
          this.editPlannedHours = this.kpi!.planned_hours;
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
  }

  savePlannedHours(): void {
    if (!this.project) return;
    this.saving = true;
    this.http.put<any>(
      `${environment.apiUrl}/projects/${this.projectId}`,
      { ...this.project, planned_hours: this.editPlannedHours, startDate: this.project.start_date, endDate: this.project.end_date },
      { headers: this.headers }
    ).subscribe({
      next: () => { this.saving = false; this.load(); },
      error: () => { this.saving = false; }
    });
  }
}

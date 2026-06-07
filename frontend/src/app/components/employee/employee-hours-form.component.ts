import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface HourEntry {
  task_id: number | null;
  task_title?: string;
  hours: number;
  comment: string;
}

interface AvailableTask {
  id: number;
  title: string;
  status: string;
  project_name: string;
  estimated_hours: number;
}

@Component({
  selector: 'app-employee-hours-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
<div class="hours-form-container">
  <div class="hf-header">
    <h3><i class="bi bi-clock-history"></i> Déclarer mes heures</h3>
    <button class="hf-close" (click)="close.emit()"><i class="bi bi-x-lg"></i></button>
  </div>

  <!-- Date picker -->
  <div class="hf-date-row">
    <label>Date</label>
    <input type="date" [(ngModel)]="selectedDate" class="hf-date-input" [max]="today" />
  </div>

  <!-- Lignes de saisie -->
  <div class="hf-entries">
    <div class="hf-entry" *ngFor="let entry of entries; let i = index">
      <div class="hf-entry-row">
        <select [(ngModel)]="entry.task_id" class="hf-select" (change)="onTaskSelect(entry)">
          <option [value]="null">— Sélectionner une tâche —</option>
          <option *ngFor="let t of availableTasks" [value]="t.id">
            [{{ t.project_name }}] {{ t.title }}
          </option>
        </select>
        <input type="number" [(ngModel)]="entry.hours" class="hf-hours-input"
               min="0.5" step="0.5" placeholder="h" />
        <button class="hf-remove-btn" (click)="removeEntry(i)" title="Supprimer">
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <input type="text" [(ngModel)]="entry.comment" class="hf-comment-input"
             placeholder="Commentaire optionnel…" />
    </div>
  </div>

  <button class="hf-add-btn" (click)="addEntry()">
    <i class="bi bi-plus-circle"></i> Ajouter une tâche
  </button>

  <div class="hf-summary" *ngIf="totalHours > 0">
    Total déclaré : <strong>{{ totalHours }}h</strong>
  </div>

  <div class="hf-error" *ngIf="error">{{ error }}</div>

  <div class="hf-actions">
    <button class="hf-btn-cancel" (click)="close.emit()">Annuler</button>
    <button class="hf-btn-save" (click)="submit()" [disabled]="saving || entries.length === 0">
      {{ saving ? 'Enregistrement…' : 'Enregistrer' }}
    </button>
  </div>
</div>
  `,
  styles: [`
    .hours-form-container { background: #fff; border-radius: 16px; padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,.12); max-width: 560px; }
    .hf-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
    .hf-header h3 { margin: 0; font-size: 1.1rem; font-weight: 700; color: #1f2937;
      display: flex; align-items: center; gap: .5rem; }
    .hf-close { background: none; border: none; cursor: pointer; color: #6b7280; font-size: 1rem; }
    .hf-date-row { display: flex; align-items: center; gap: .75rem; margin-bottom: 1rem; }
    .hf-date-row label { font-size: .85rem; font-weight: 600; color: #374151; width: 40px; }
    .hf-date-input { border: 1px solid #d1d5db; border-radius: 6px; padding: .4rem .6rem; font-size: .9rem; }
    .hf-entries { display: flex; flex-direction: column; gap: .75rem; margin-bottom: .75rem; }
    .hf-entry { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: .75rem; }
    .hf-entry-row { display: flex; gap: .5rem; align-items: center; margin-bottom: .5rem; }
    .hf-select { flex: 1; border: 1px solid #d1d5db; border-radius: 6px; padding: .4rem .6rem; font-size: .85rem; }
    .hf-hours-input { width: 70px; border: 1px solid #d1d5db; border-radius: 6px; padding: .4rem .5rem; font-size: .9rem; }
    .hf-remove-btn { background: none; border: none; cursor: pointer; color: #ef4444; padding: .3rem; }
    .hf-comment-input { width: 100%; border: 1px solid #e5e7eb; border-radius: 6px; padding: .35rem .6rem; font-size: .82rem; box-sizing: border-box; }
    .hf-add-btn { background: none; border: 1px dashed #3b82f6; color: #3b82f6; border-radius: 6px; padding: .4rem .8rem;
      cursor: pointer; font-size: .85rem; display: flex; align-items: center; gap: .4rem; margin-bottom: .75rem; }
    .hf-summary { font-size: .9rem; color: #374151; margin-bottom: .5rem; }
    .hf-error { color: #dc2626; font-size: .82rem; background: #fef2f2; border-radius: 4px; padding: .4rem .6rem; margin-bottom: .5rem; }
    .hf-actions { display: flex; gap: .75rem; justify-content: flex-end; margin-top: .5rem; }
    .hf-btn-cancel { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: .45rem 1rem; cursor: pointer; }
    .hf-btn-save { background: #3b82f6; color: #fff; border: none; border-radius: 6px; padding: .45rem 1.2rem; cursor: pointer; font-weight: 600; }
    .hf-btn-save:disabled { opacity: .6; cursor: not-allowed; }
  `]
})
export class EmployeeHoursFormComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  today = new Date().toISOString().split('T')[0];
  selectedDate = this.today;
  entries: HourEntry[] = [{ task_id: null, hours: 0, comment: '' }];
  availableTasks: AvailableTask[] = [];
  saving = false;
  error = '';

  private get employeeId(): number {
    try { return JSON.parse(localStorage.getItem('currentEmployee') || '{}').id || 0; } catch { return 0; }
  }

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('employeeToken') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void { this.loadTasks(); }

  loadTasks(): void {
    const id = this.employeeId;
    if (!id) return;
    this.http.get<any>(`${environment.apiUrl}/daily-hours/available-tasks/${id}`, { headers: this.headers })
      .subscribe({
        next: (res) => { this.availableTasks = res.data || []; },
        error: () => { this.availableTasks = []; }
      });
  }

  addEntry(): void {
    this.entries.push({ task_id: null, hours: 0, comment: '' });
  }

  removeEntry(i: number): void {
    this.entries.splice(i, 1);
  }

  onTaskSelect(entry: HourEntry): void {
    const t = this.availableTasks.find(t => t.id === Number(entry.task_id));
    entry.task_title = t?.title;
  }

  get totalHours(): number {
    return this.entries.reduce((s, e) => s + (parseFloat(String(e.hours)) || 0), 0);
  }

  submit(): void {
    this.error = '';
    const valid = this.entries.filter(e => e.task_id && e.hours > 0);
    if (valid.length === 0) { this.error = 'Ajoutez au moins une ligne avec une tâche et des heures > 0.'; return; }

    this.saving = true;
    this.http.post<any>(
      `${environment.apiUrl}/daily-hours`,
      {
        employee_id: this.employeeId,
        date: this.selectedDate,
        entries: valid.map(e => ({ task_id: e.task_id, hours: e.hours, comment: e.comment }))
      },
      { headers: this.headers }
    ).subscribe({
      next: () => { this.saving = false; this.saved.emit(); this.close.emit(); },
      error: (err) => { this.saving = false; this.error = err?.error?.message || 'Erreur lors de l\'enregistrement.'; }
    });
  }
}

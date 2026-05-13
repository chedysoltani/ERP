import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ManagerAuthService } from './manager-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private managerAuth: ManagerAuthService
  ) { }

  private authOpts(): { headers: Record<string, string> } {
    const m = this.managerAuth.currentManagerValue;
    const headers: Record<string, string> = {};
    if (m?.token) {
      headers['Authorization'] = `Bearer ${m.token}`;
    }
    return { headers };
  }

  // Obtenir les analytics d'un projet
  getProjectAnalytics(projectId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics/project/${projectId}`, this.authOpts());
  }

  // Obtenir les analytics globaux pour un manager
  getManagerAnalytics(managerId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics/manager/${managerId}`, this.authOpts());
  }

  // Obtenir les données pour le graphique Gantt
  getGanttData(projectId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics/gantt/${projectId}`, this.authOpts());
  }
}

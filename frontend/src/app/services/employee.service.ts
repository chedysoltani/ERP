import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3001/api/employee';

  constructor(private http: HttpClient) {}

  // Récupérer le dashboard complet de l'employé
  getEmployeeDashboard(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/dashboard`);
  }

  // Récupérer les tâches de l'employé
  getEmployeeTasks(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/tasks`);
  }

  // Récupérer les projets de l'employé
  getEmployeeProjects(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/projects`);
  }

  // Récupérer les réunions de l'employé
  getEmployeeMeetings(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/meetings`);
  }

  // Mettre à jour le statut d'une tâche
  updateTaskStatus(employeeId: number, taskId: number, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${employeeId}/tasks/${taskId}/status`, { status });
  }
}

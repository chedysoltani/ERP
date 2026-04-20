import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

export interface Employee {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  telephone: string;
  date_creation: string;
  manager_id: number;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthService {
  private currentEmployeeSubject: BehaviorSubject<Employee | null>;
  public currentEmployee: Observable<Employee | null>;

  constructor(private router: Router) {
    // Ne pas charger automatiquement depuis localStorage pour éviter la redirection
    this.currentEmployeeSubject = new BehaviorSubject<Employee | null>(null);
    this.currentEmployee = this.currentEmployeeSubject.asObservable();
  }

  public get currentEmployeeValue(): Employee | null {
    return this.currentEmployeeSubject.value;
  }

  public get isLoggedIn(): boolean {
    return !!this.currentEmployeeValue;
  }

  login(email: string, password: string): Observable<Employee> {
    // Simulation de login pour tester
    if (email && password) {
      const mockEmployee: Employee = {
        id: 2,
        nom: 'Employé',
        prenom: 'Test',
        email: email,
        role: 'employee',
        telephone: '0123456789',
        date_creation: new Date().toISOString(),
        manager_id: 1,
        token: 'employee-token-' + Date.now()
      };
      
      localStorage.setItem('currentEmployee', JSON.stringify(mockEmployee));
      this.currentEmployeeSubject.next(mockEmployee);
      
      return of(mockEmployee).pipe(delay(500));
    }

    throw new Error('Email ou mot de passe incorrect');
  }

  logout(): void {
    localStorage.removeItem('currentEmployee');
    this.currentEmployeeSubject.next(null);
    this.router.navigate(['/employee-login']);
  }

  // Méthode pour charger manuellement l'employé depuis localStorage si nécessaire
  loadEmployeeFromStorage(): boolean {
    const employeeData = localStorage.getItem('currentEmployee');
    if (employeeData) {
      try {
        const employee = JSON.parse(employeeData);
        this.currentEmployeeSubject.next(employee);
        return true;
      } catch (e) {
        localStorage.removeItem('currentEmployee');
      }
    }
    return false;
  }
}

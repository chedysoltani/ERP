import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeAuthService, Employee } from '../../services/employee-auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private employeeAuthService: EmployeeAuthService
  ) {}

  ngOnInit() {
    // La page de login doit toujours être accessible
    // Pas de redirection automatique pour permettre aux utilisateurs de se reconnecter
  }

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.employeeAuthService.login(this.email, this.password).subscribe({
      next: (employee) => {
        this.router.navigate(['/employee']);
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Erreur de connexion';
        this.isLoading = false;
      }
    });
  }

  goToManagerLogin() {
    this.router.navigate(['/manager-login']);
  }
}

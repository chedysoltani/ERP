import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../../services/admin-auth.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  email = '';
  password = '';
  showPassword = false;
  loading = false;
  error = '';

  constructor(private adminAuth: AdminAuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.adminAuth.isLoggedIn) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  login(): void {
    if (!this.email || !this.password) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }
    this.loading = true;
    this.error = '';
    this.adminAuth.login(this.email, this.password).subscribe({
      next: res => {
        this.loading = false;
        if (res.success && res.data?.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.error = 'Accès refusé. Compte administrateur requis.';
        }
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Erreur de connexion.';
      }
    });
  }
}

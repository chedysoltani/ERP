import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login.component';

@NgModule({
  declarations: [
    EmployeeLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: EmployeeLoginComponent }
    ])
  ]
})
export class EmployeeLoginModule { }

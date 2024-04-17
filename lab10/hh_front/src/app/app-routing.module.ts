// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' }, // Redirect to /companies
  { path: 'companies', component: CompanyListComponent },
  { path: 'vacancies/:companyId', component: VacancyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

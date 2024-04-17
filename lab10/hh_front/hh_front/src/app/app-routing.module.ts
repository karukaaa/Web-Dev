import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

const routes: Routes = [{ path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id/vacancies', component: VacancyListComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: '**', component: CompanyListComponent } // Redirect to company list for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

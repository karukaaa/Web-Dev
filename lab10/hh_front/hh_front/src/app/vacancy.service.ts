// vacancy.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './vacancy.interface';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private baseUrl = 'http://your-backend-api.com/api/vacancies';

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.baseUrl);
  }

  getVacanciesByCompanyId(companyId: number): Observable<Vacancy[]> {
    const url = `${this.baseUrl}/?companyId=${companyId}`;
    return this.http.get<Vacancy[]>(url);
  }
}

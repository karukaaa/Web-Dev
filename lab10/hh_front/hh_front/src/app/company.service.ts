import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://your-backend-api.com/api/companies';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl);
  }
}

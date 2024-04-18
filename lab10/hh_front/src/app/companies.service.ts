import { Injectable } from '@angular/core';
import { Company } from './company.interface';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  url = 'http://127.0.0.1:8000/api/companies/'
  constructor(private http: HttpClient) { }

  getCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(this.url);
  }

}

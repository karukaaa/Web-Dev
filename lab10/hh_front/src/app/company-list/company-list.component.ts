// src/app/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] | undefined;
  selectedCompany: Company | null = null;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .subscribe((companies: Company[] | undefined) => this.companies = companies);
  }

  selectCompany(company: Company): void {
    this.selectedCompany = company;
  }
}

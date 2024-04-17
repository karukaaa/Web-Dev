import { Component, OnInit } from '@angular/core';
import { Company } from '../company.interface';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companies: Company[] = [];

    constructor(private companyService: CompanyService) {}

    ngOnInit(): void {
      this.getCompanies();
    }

    getCompanies(): void {
      this.companyService.getCompanies()
        .subscribe((companies: Company[]) => this.companies = companies);
    }
}

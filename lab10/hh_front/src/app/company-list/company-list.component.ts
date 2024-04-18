import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../company.interface';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  
  companies: Company[] = []

  constructor (private companiesService: CompaniesService){}

  ngOnInit(): void {
    this.companiesService.getCompanies().subscribe(
      companies => {this.companies = companies;},
      error=>{console.error(error);}
    );
  }

}

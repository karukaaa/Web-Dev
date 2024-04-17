import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy.interface';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(): void {
    this.vacancyService.getVacancies()
      .subscribe((vacancies: Vacancy[]) => this.vacancies = vacancies);
  }
}

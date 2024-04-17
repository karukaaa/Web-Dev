// src/app/vacancy-list/vacancy-list.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from '../models/vacancy.model';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {
  @Input() vacancies: Vacancy[] | undefined; // Input property to receive vacancies from parent component

  constructor() { }

  ngOnInit(): void {
  }
}

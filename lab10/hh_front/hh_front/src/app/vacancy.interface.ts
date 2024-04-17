import { Company } from "./company.interface";

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Company;
}

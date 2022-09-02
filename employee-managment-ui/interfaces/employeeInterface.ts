import { GenderEnum } from "../enums/genderEnum";

export interface EmployeeInterface {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    number: string;
    gender: GenderEnum;
    photo?: string;
  }
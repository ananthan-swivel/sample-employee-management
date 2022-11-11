import { GenderEnum } from "../src/services/enums/genderEnum";

export interface EmployeeInterface {
    _id?: string;
    first_name: string;
    last_name: string;
    email: string;
    number: string;
    gender: GenderEnum;
    photo?: string;
  }
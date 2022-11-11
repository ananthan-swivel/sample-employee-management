import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Models } from '../../setup/constants/models';
import { EmployeeCreateDto } from '../../dto';
import { Employee } from '../../model/employee.model';

export class EmployeesCreateService {
  constructor(
    @InjectModel(Models.Employee)
    private readonly employeeModel: Model<Employee>,
  ) {}

  async createEmployee(employee: EmployeeCreateDto) {
    return this.employeeModel.create({
      ...employee,
      photo: 'https://randomuser.me/api/portraits/men/36.jpg',
    });
  }
}

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeCreateDto } from '../../dto';
import { Employee } from '../../model/employee.model';
import { Models } from '../../setup/constants/models';

export class EmployeesUpdateService {
  constructor(
    @InjectModel(Models.Employee)
    private readonly employeeModel: Model<Employee>,
  ) {}

  async updateEmployee(
    id: string,
    employee: EmployeeCreateDto,
  ): Promise<Employee> {
    return this.employeeModel.findByIdAndUpdate({ _id: id }, employee);
  }
}

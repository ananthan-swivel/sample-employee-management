import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../../model/employee.model';
import { Models } from '../../setup/constants/models';

export class EmployeesGetOneService {
  constructor(
    @InjectModel(Models.Employee)
    private readonly employeeModel: Model<Employee>,
  ) {}

  async getEmployee(id: string): Promise<Employee> {
    return await this.employeeModel.findOne({ _id: id });
  }
}

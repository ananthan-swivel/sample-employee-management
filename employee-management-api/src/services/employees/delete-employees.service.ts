import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Models } from '../../setup/constants/models';
import { Employee } from '../../model/employee.model';

export class EmployeesDeleteService {
  constructor(
    @InjectModel(Models.Employee)
    private readonly employeeModel: Model<Employee>,
  ) {}

  async deleteEmployee(id: string) {
    return await this.employeeModel.deleteOne({ _id: id });
  }
}

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Models } from '../../setup/constants/models';
import { Employee } from '../../model/employee.model';

export class EmployeesFindByService {
  constructor(
    @InjectModel(Models.Employee)
    private readonly employeeModel: Model<Employee>,
  ) {}

  async findBy(option: any): Promise<Employee[]> {
    return this.employeeModel.find(option);
  }
}

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getQuery } from '../../interface/query.interface';
import { Employee } from '../../model/employee.model';
import { Models } from '../../setup/constants/models';

export class EmployeesGetAllService {
  constructor(
    @InjectModel(Models.Employee)
    private readonly employeeModel: Model<Employee>,
  ) {}

  async getEmployees(_options: getQuery): Promise<any> {
    const limit = 9;
    const page: number = parseInt(_options.page as any) || 1;
    const sort_by = _options?.sort_by ?? '_id';
    const sort_dir = _options?.sort_dir ?? 'asc';
    let options = {} as any;

    if (_options?.search && _options?.search !== '') {
      options = {
        ...options,
        $or: [
          { first_name: new RegExp(_options.search, 'i') },
          { last_name: new RegExp(_options.search, 'i') },
          { email: new RegExp(_options.search, 'i') },
          { number: new RegExp(_options.search, 'i') },
        ],
      };
    }
    const query = await this.employeeModel
      .find(options)
      .sort({ [sort_by]: sort_dir })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalItems = await (await this.employeeModel.find(options)).length;
    const totalPages = Math.ceil(totalItems / limit);
    return {
      items: query,
      meta: {
        totalItems,
        totalPages,
        currentpage: page,
        itemsPerPage: limit,
      },
    };
  }
}

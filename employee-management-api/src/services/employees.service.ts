import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pagination } from 'nestjs-typeorm-paginate';
import { EmployeeCreateDto } from '../dto';
import { getQuery } from '../interface/query.interface';
import { Employee } from '../model/employee.model';

export class EmployeesService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
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

  async getEmployee(id: string): Promise<Employee> {
    return await this.employeeModel.findOne({ _id: id });
  }

  async findBy(option: any): Promise<Employee[]> {
    return this.employeeModel.find(option);
  }

  async createEmployee(employee: EmployeeCreateDto) {
    return this.employeeModel.create({
      ...employee,
      photo: 'https://randomuser.me/api/portraits/men/36.jpg',
    });
  }

  async updateEmployee(id: string, employee: EmployeeCreateDto) {
    return this.employeeModel.updateOne({ _id: id }, employee);
  }

  async deleteEmployee(id: string) {
    return await this.employeeModel.deleteOne({ _id: id });
  }
}

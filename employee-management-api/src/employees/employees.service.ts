import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { EmployeeCreateDto } from '../dto/employee-create.dto';
import { getQuery } from 'src/interface/query.interface';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeesRepository: Repository<EmployeeEntity>,
  ) {}

  async getEmployees(options: getQuery): Promise<Pagination<EmployeeEntity>> {
    const queryBuilder = this.employeesRepository.createQueryBuilder('c');
    if (options?.search && options?.search !== '') {
      queryBuilder
        .orWhere('c.first_name like :first_name', {
          first_name: `%${options.search}%`,
        })
        .orWhere('c.last_name like :last_name', {
          last_name: `%${options.search}%`,
        })
        .orWhere('c.email like :email', { email: `%${options.search}%` })
        .orWhere('c.number like :number', { number: `%${options.search}%` });
    }

    queryBuilder.orderBy(`c.${options.sort_by ?? 'id'}`, options.sort_dir);
    return paginate<EmployeeEntity>(queryBuilder, options);
  }

  async getEmployee(_id: number): Promise<EmployeeEntity> {
    return await this.employeesRepository.findOne({
      where: { id: _id },
    });
  }

  async findBy(field: string, value: string): Promise<EmployeeEntity[]> {
    return await this.employeesRepository.find({
      select: ['first_name', 'last_name', 'email'],
      where: [{ [field]: value }],
    });
  }

  async createEmployee(employee: EmployeeCreateDto) {
    return this.employeesRepository.save(employee);
  }

  async updateEmployee(id: number, employee: EmployeeCreateDto) {
    return this.employeesRepository
      .createQueryBuilder()
      .update()
      .set(employee)
      .where('id = :id', { id })
      .execute();
  }

  async deleteEmployee(employee: EmployeeEntity) {
    this.employeesRepository.delete(employee);
  }
}

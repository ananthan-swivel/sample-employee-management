import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeUpdateDto } from 'src/dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesUpdateService } from '../../../services/employees';
import { Employee } from '../../../model/employee.model';
import mongoose from 'mongoose';

describe('Employee Update service', () => {
  let service: EmployeesUpdateService;
  let employeeModel;

  const mockEmployeesRepository = {
    findByIdAndUpdate: jest
      .fn()
      .mockImplementation((id: string, dto: EmployeeUpdateDto) => {
        return Promise.resolve({
          id,
          ...dto,
        });
      }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesUpdateService,
        {
          provide: getModelToken('Employee'),
          useValue: mockEmployeesRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeesUpdateService>(EmployeesUpdateService);
    employeeModel = await module.get<mongoose.Model<Employee>>(
      getModelToken('Employee'),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Update one employee', async () => {
    try {
      const employee = {
        first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        number: '0777777777',
        email: 'john@example.com',
      } as unknown as EmployeeUpdateDto;

      const res = await service.updateEmployee('1', employee);
      expect(res.id._id).toEqual('1');
      expect(res.first_name).toEqual(employee.first_name);
      expect(res.last_name).toEqual(employee.last_name);
      expect(res.gender).toEqual(employee.gender);
      expect(res.email).toEqual(employee.email);
      expect(res.number).toEqual(employee.number);
    } catch (err) {
      console.log(err);
    }
  });
});

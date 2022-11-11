import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeCreateDto } from 'src/dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesCreateService } from '../../../services/employees';
import { Employee } from '../../../model/employee.model';
import mongoose from 'mongoose';

describe('Employee Create service', () => {
  let service: EmployeesCreateService;
  let employeeModel;

  const mockEmployeesRepository = {
    create: jest.fn().mockImplementation((dto: EmployeeCreateDto) => {
      return Promise.resolve({
        _id: Math.ceil(Math.random() * 10),
        ...dto,
      });
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesCreateService,
        {
          provide: getModelToken('Employee'),
          useValue: mockEmployeesRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeesCreateService>(EmployeesCreateService);
    employeeModel = await module.get<mongoose.Model<Employee>>(
      getModelToken('Employee'),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create one employee', async () => {
    try {
      const employee = {
        first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        number: '0777777777',
        email: 'john@example.com',
      } as unknown as EmployeeCreateDto;

      // jest.spyOn(service, 'getEmployee').mockResolvedValue(employee);

      const res = await service.createEmployee(employee);
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

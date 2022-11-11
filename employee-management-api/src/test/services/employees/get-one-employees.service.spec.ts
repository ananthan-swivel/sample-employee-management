import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeCreateDto } from 'src/dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesGetOneService } from '../../../services/employees';
import { Employee } from '../../../model/employee.model';
import mongoose from 'mongoose';

describe('Employee get one service', () => {
  let service: EmployeesGetOneService;
  let employeeModel;

  const mockEmployeesRepository = {
    findOne: jest.fn().mockImplementation((dto: EmployeeCreateDto) => {
      return Promise.resolve({
        _id: Math.ceil(Math.random() * 10),
        ...dto,
      });
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesGetOneService,
        {
          provide: getModelToken('Employee'),
          useValue: mockEmployeesRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeesGetOneService>(EmployeesGetOneService);
    employeeModel = await module.get<mongoose.Model<Employee>>(
      getModelToken('Employee'),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('return one employee', async () => {
    try {
      const employee = {
        _id: '1',
        first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        number: '0777777777',
        email: 'john@example.com',
      } as unknown as Employee;

      jest.spyOn(service, 'getEmployee').mockResolvedValue(employee);

      const res = await service.getEmployee('1');
      expect(res).toEqual(employee);
    } catch (err) {
      console.log(err);
    }
  });
});

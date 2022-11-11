import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeUpdateDto } from 'src/dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesDeleteService } from '../../../services/employees';
import { Employee } from '../../../model/employee.model';
import mongoose from 'mongoose';

describe('Employee Delete service', () => {
  let service: EmployeesDeleteService;
  let employeeModel;

  const mockEmployeesRepository = {
    deleteOne: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesDeleteService,
        {
          provide: getModelToken('Employee'),
          useValue: mockEmployeesRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeesDeleteService>(EmployeesDeleteService);
    employeeModel = await module.get<mongoose.Model<Employee>>(
      getModelToken('Employee'),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Delete one employee', async () => {
    try {
      const res = await service.deleteEmployee('1');
      expect(res).toEqual(undefined);
    } catch (err) {
      console.log(err);
    }
  });
});

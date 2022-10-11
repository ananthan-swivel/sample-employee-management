import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { getQuery } from '../../dist/interface/query.interface';
import { EmployeeCreateDto } from 'src/dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EmployeeEntity } from './employee.entity';

describe('EmployeesController', () => {
  let employeeController: EmployeesController;
  let employeeService: EmployeesService;
  const mockEmployeesRepository = {
    save: jest.fn().mockImplementation((dto: EmployeeCreateDto) => {
      return Promise.resolve({
        EmployeeID: Math.ceil(Math.random() * 10),
        ...dto,
      });
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [
        EmployeesService,
        {
          provide: getRepositoryToken(EmployeeEntity),
          useValue: mockEmployeesRepository,
        },
      ],
    }).compile();

    employeeService = module.get<EmployeesService>(EmployeesService);
    employeeController = module.get<EmployeesController>(EmployeesController);
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });

  // describe('get', () => {
  //   it('should return an array of cats', async () => {
  //     const result = {
  //       is_success: true,
  //       msg: 'Employee get all successfully.',
  //       data: {},
  //       err: {},
  //     };
  //     jest.spyOn(employeeService, 'get').mockImplementation(() => result);
  //     const query = { search: '', page: 1, limit: 20 } as getQuery;
  //     expect(await employeeController.get(query,)).toBe(result);
  //   });
  // });
});

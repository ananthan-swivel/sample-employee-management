import { Test, TestingModule } from '@nestjs/testing';
// import { EmployeesController } from '../../controller/employees/employees.controller';
// import { EmployeesService } from '../../services/employees.service';
import { EmployeeCreateDto } from '../../../dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesCreateController } from '../../../controller/employees';
import { EmployeesCreateService } from '../../../services/employees';
import { Response } from 'express';
import { Employee } from '../../../model/employee.model';

describe('Employees create Controller', () => {
  let employeeController: EmployeesCreateController;
  let employeeService: EmployeesCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesCreateController],
      providers: [
        EmployeesCreateService,
        {
          provide: getModelToken('Employee'),
          useValue: {
            emit: jest.fn(),
          },
        },
      ],
    }).compile();

    employeeService = module.get<EmployeesCreateService>(
      EmployeesCreateService,
    );
    employeeController = module.get<EmployeesCreateController>(
      EmployeesCreateController,
    );
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });

  it('Create employees', async () => {
    const employee = {
      first_name: 'John',
      last_name: 'Doe',
      gender: 'M',
      number: '0777777777',
      email: 'john@example.com',
    } as EmployeeCreateDto;

    const res = {
      _id: Math.ceil(Math.random() * 10),
      ...employee,
    } as unknown as Employee;

    jest.spyOn(employeeService, 'createEmployee').mockResolvedValue(res);
    let responseObj;
    let responseStatus;
    const mockEmployeesResponse = {
      send: jest.fn().mockImplementationOnce((x) => {
        responseObj = x;
      }),
      status: jest.fn().mockImplementationOnce((x) => {
        responseStatus = x;
      }),
    } as unknown as Response;

    await employeeController.create(employee, mockEmployeesResponse);
    expect(responseStatus).toBe(200);
    expect(responseObj).toEqual({
      is_success: true,
      msg: 'Employee created successfully.',
      data: res,
      err: {},
    });
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

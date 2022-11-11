import { Test, TestingModule } from '@nestjs/testing';
// import { EmployeesController } from '../../controller/employees/employees.controller';
// import { EmployeesService } from '../../services/employees.service';
import { EmployeeCreateDto } from 'src/dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesGetOneController } from '../../../controller/employees';
import { EmployeesGetOneService } from '../../../services/employees';
import { Response } from 'express';
import { Employee } from 'src/model/employee.model';
import { getMockRes } from '@jest-mock/express';

describe('Employees create Controller', () => {
  let employeeController: EmployeesGetOneController;
  let employeeService: EmployeesGetOneService;

  beforeEach(async () => {
    // const mockEmployeesRepository = {
    //   save: jest.fn().mockImplementation((dto: EmployeeCreateDto) => {
    //     return Promise.resolve({
    //       _id: Math.ceil(Math.random() * 10),
    //       ...dto,
    //     });
    //   }),
    // };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesGetOneController],
      providers: [
        EmployeesGetOneService,
        {
          provide: getModelToken('Employee'),
          useValue: {
            getEmployee: jest.fn((x) => x),
          },
        },
      ],
    }).compile();

    employeeService = module.get<EmployeesGetOneService>(
      EmployeesGetOneService,
    );
    employeeController = module.get<EmployeesGetOneController>(
      EmployeesGetOneController,
    );
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });

  it('get One employees 200 OK', async () => {
    try {
      const employee = {
        _id: '1',
        first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        number: '0777777777',
        email: 'john@example.com',
      } as unknown as Employee;

      jest.spyOn(employeeService, 'getEmployee').mockResolvedValue(employee);

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

      await employeeController.getOne({ id: '1' }, mockEmployeesResponse);
      expect(responseStatus).toBe(200);
      expect(responseObj).toEqual({
        is_success: true,
        msg: 'Employee get one successfully.',
        data: employee,
        err: {},
      });
    } catch (err) {
      console.log(err);
    }
  });
  describe('get One employees Error', () => {
    it('get One employees 400 Bad Request', async () => {
      try {
        const employee = {} as unknown as Employee;
        jest.spyOn(employeeService, 'getEmployee').mockResolvedValue(employee);
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
        await employeeController.getOne({ id: '' }, mockEmployeesResponse);
        expect(responseStatus).toBe(400);
        expect(responseObj).toEqual({
          is_success: false,
          msg: 'Employee invaild id.',
          data: {},
          err: {},
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
});

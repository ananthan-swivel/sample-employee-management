import { Test, TestingModule } from '@nestjs/testing';
// import { EmployeesController } from '../../controller/employees/employees.controller';
// import { EmployeesService } from '../../services/employees.service';
import { EmployeeUpdateDto } from '../../../dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesDeleteController } from '../../../controller/employees';
import { EmployeesDeleteService } from '../../../services/employees';
import { Response } from 'express';
import { Employee } from '../../../model/employee.model';

describe('Employees Delete Controller', () => {
  let employeeController: EmployeesDeleteController;
  let employeeService: EmployeesDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesDeleteController],
      providers: [
        EmployeesDeleteService,
        {
          provide: getModelToken('Employee'),
          useValue: {
            deleteEmployee: jest.fn((x) => x),
          },
        },
      ],
    }).compile();

    employeeService = module.get<EmployeesDeleteService>(
      EmployeesDeleteService,
    );
    employeeController = module.get<EmployeesDeleteController>(
      EmployeesDeleteController,
    );
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });

  it('delete employees', async () => {
    let res: any;

    jest.spyOn(employeeService, 'deleteEmployee').mockResolvedValue(res);
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

    await employeeController.deleteEmployee({ id: '1' }, mockEmployeesResponse);
    expect(responseStatus).toBe(200);
    expect(responseObj).toEqual({
      is_success: true,
      msg: 'Employee deleted successfully.',
      err: {},
    });
  });

  describe('get One employees for delete Error', () => {
    it('get One employees 400 Bad Request', async () => {
      try {
        let res: any;

        jest.spyOn(employeeService, 'deleteEmployee').mockResolvedValue(res);
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
        await employeeController.deleteEmployee(
          { id: '' },
          mockEmployeesResponse,
        );
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

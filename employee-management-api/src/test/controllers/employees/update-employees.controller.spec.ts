import { Test, TestingModule } from '@nestjs/testing';
// import { EmployeesController } from '../../controller/employees/employees.controller';
// import { EmployeesService } from '../../services/employees.service';
import { EmployeeUpdateDto } from '../../../dto';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesUpdateController } from '../../../controller/employees';
import { EmployeesUpdateService } from '../../../services/employees';
import { Response } from 'express';
import { Employee } from '../../../model/employee.model';

describe('Employees Update Controller', () => {
  let employeeController: EmployeesUpdateController;
  let employeeService: EmployeesUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesUpdateController],
      providers: [
        EmployeesUpdateService,
        {
          provide: getModelToken('Employee'),
          useValue: {
            updateEmployee: jest.fn((x) => x),
          },
        },
      ],
    }).compile();

    employeeService = module.get<EmployeesUpdateService>(
      EmployeesUpdateService,
    );
    employeeController = module.get<EmployeesUpdateController>(
      EmployeesUpdateController,
    );
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });

  it('Update employees', async () => {
    const employee = {
      first_name: 'Lindsay',
      last_name: 'Herman',
      email: 'Ewald.Kunde@gmail.com',
      gender: 'F',
      photo: 'https://randomuser.me/api/portraits/men/30.jpg',
      number: '0771274218',
    } as unknown as EmployeeUpdateDto;

    const res = { _id: '1', ...employee } as unknown as Employee;

    jest.spyOn(employeeService, 'updateEmployee').mockResolvedValue(res);
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

    await employeeController.update(
      { id: res._id },
      employee,
      mockEmployeesResponse,
    );
    expect(responseStatus).toBe(200);
    expect(responseObj).toEqual({
      is_success: true,
      msg: 'Employee updated successfully.',
      err: {},
    });
  });

  describe('get One employees for update Error', () => {
    it('get One employees 400 Bad Request', async () => {
      try {
        const employee = {
          first_name: 'Lindsay',
          last_name: 'Herman',
          email: 'Ewald.Kunde@gmail.com',
          gender: 'F',
          photo: 'https://randomuser.me/api/portraits/men/30.jpg',
          number: '0771274218',
        } as unknown as EmployeeUpdateDto;

        const res = { _id: '1', ...employee } as unknown as Employee;

        jest.spyOn(employeeService, 'updateEmployee').mockResolvedValue(res);
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
        await employeeController.update(
          { id: '' },
          employee,
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

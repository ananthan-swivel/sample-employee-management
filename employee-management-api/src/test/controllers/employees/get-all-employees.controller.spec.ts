import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesGetAllController } from '../../../controller/employees';
import { EmployeesGetAllService } from '../../../services/employees';
import { Response } from 'express';
import { Employee } from '../../../model/employee.model';
import { getQuery } from '../../../interface/query.interface';

describe('Employee Get All Controller', () => {
  let employeeController: EmployeesGetAllController;
  let employeeService: EmployeesGetAllService;

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
      controllers: [EmployeesGetAllController],
      providers: [
        EmployeesGetAllService,
        {
          provide: getModelToken('Employee'),
          useValue: {
            getEmployees: jest.fn((x) => x),
          },
        },
      ],
    }).compile();

    employeeService = module.get<EmployeesGetAllService>(
      EmployeesGetAllService,
    );
    employeeController = module.get<EmployeesGetAllController>(
      EmployeesGetAllController,
    );
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });

  it('get all employees 200 OK', async () => {
    try {
      const employee = [
        {
          _id: { $oid: '634f7ef880f6c360ce879051' },
          first_name: 'Henri',
          last_name: 'Rodriguez',
          email: 'Darrin_Rippin@gmail.com',
          gender: 'M',
          photo: 'https://randomuser.me/api/portraits/men/92.jpg',
          number: '0771277218',
        },
        {
          _id: { $oid: '634f7ef880f6c360ce879052' },
          first_name: 'Lindsay',
          last_name: 'Herman',
          email: 'Ewald.Kunde@gmail.com',
          gender: 'F',
          photo: 'https://randomuser.me/api/portraits/men/30.jpg',
          number: '0771274218',
        },
      ] as unknown as Employee[];

      jest.spyOn(employeeService, 'getEmployees').mockResolvedValue(employee);

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
      const query = { search: '', page: 1, limit: 20 } as getQuery;
      await employeeController.get(query, mockEmployeesResponse);
      expect(responseStatus).toBe(200);
      expect(responseObj).toEqual({
        is_success: true,
        msg: 'Employee get all successfully.',
        data: employee,
        err: {},
      });
    } catch (err) {
      console.log(err);
    }
  });
});

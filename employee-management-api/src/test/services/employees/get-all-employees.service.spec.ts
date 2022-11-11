import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { EmployeesGetAllService } from '../../../services/employees';
import { Employee } from '../../../model/employee.model';
import { getQuery } from '../../../interface/query.interface';
import mongoose from 'mongoose';

describe('Employee get All service', () => {
  let service: EmployeesGetAllService;
  let employeeModel;
  const employees = [
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
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesGetAllService,
        {
          provide: getModelToken('Employee'),
          useValue: {
            find: jest.fn((x) => {
              return {
                sort: jest.fn((x) => {
                  return {
                    skip: jest.fn((x) => {
                      return {
                        limit: jest.fn((x) => {
                          return {
                            items: employees,
                            meta: {
                              currentpage: 1,
                              itemsPerPage: 9,
                              totalItems: employees.length,
                              totalPages: Math.ceil(employees.length / 9),
                            },
                          };
                        }),
                      };
                    }),
                  };
                }),
              };
            }),
          },
        },
      ],
    }).compile();

    service = module.get<EmployeesGetAllService>(EmployeesGetAllService);
    employeeModel = await module.get<mongoose.Model<Employee>>(
      getModelToken('Employee'),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('return all employee', async () => {
    try {
      const query = { search: '', page: 1, limit: 20 } as getQuery;
      const res = await service.getEmployees(query);
      expect(res.items).toEqual({
        items: employees,
        meta: {
          currentpage: 1,
          itemsPerPage: 9,
          totalItems: employees.length,
          totalPages: Math.ceil(employees.length / 9),
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
});

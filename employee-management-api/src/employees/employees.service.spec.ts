import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeCreateDto } from 'src/dto';
import { EmployeeEntity } from './employee.entity';
import { EmployeesService } from './employees.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';

describe('EmployeesService', () => {
  let service: EmployeesService;
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
      providers: [
        EmployeesService,
        {
          provide: getRepositoryToken(EmployeeEntity),
          useValue: mockEmployeesRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

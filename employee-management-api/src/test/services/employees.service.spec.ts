import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeCreateDto } from 'src/dto';
import { EmployeesService } from '../../services/employees.service';
import { getModelToken } from '@nestjs/mongoose';

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
          provide: getModelToken('Employee'),
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

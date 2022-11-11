import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeUpdateDto } from '../../../dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { stringified } from '../../../setup/utils';
import { EmployeesFindByService } from '../../../services/employees';
import { getModelToken } from '@nestjs/mongoose';
import { Employee } from '../../../model/employee.model';
import { EmployeeExistsRule } from '../../../rules/validation.rule';

describe('Update Employee Dto Checking', () => {
  let employeeService: EmployeesFindByService;
  let employeeExistsRule: EmployeeExistsRule;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesFindByService,
        {
          provide: getModelToken('Employee'),
          useValue: {
            getEmployee: jest.fn((x) => x),
          },
        },
        EmployeeExistsRule,
      ],
    }).compile();

    employeeService = module.get<EmployeesFindByService>(
      EmployeesFindByService,
    );
    employeeExistsRule = module.get<EmployeeExistsRule>(EmployeeExistsRule);
    const employeeFind = {
      _id: '1',
      photo: 'ff',
      first_name: 'John doe',
      last_name: 'Doe stro',
      gender: 'M',
      number: '6354654564564',
      email: 'sadsd@example.com',
    } as unknown as Employee;
    jest.spyOn(employeeService, 'findBy').mockResolvedValue([employeeFind]);
  });
  // First Name Dto Start Here
  describe('first_name Dto Checking', () => {
    it('first_name should not be empty', async () => {
      const employee = {
        // first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        number: '0777777771',
        email: 'johndoe@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(`first_name should not be empty`);
    });
    it('first_name must be longer than or equal to 6 characters', async () => {
      const employee = {
        first_name: 'John',
        last_name: 'Doe123',
        gender: 'M',
        number: '0777777772',
        email: 'johndoe@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(
        `first_name must be longer than or equal to 6 characters`,
      );
    });
    it('first_name must be shorter than or equal to 10 characters', async () => {
      const employee = {
        first_name: 'John doe stronge',
        last_name: 'Doe123',
        gender: 'M',
        number: '0777777772',
        email: 'johndoe@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(
        `first_name must be shorter than or equal to 10 characters`,
      );
    });
  });
  //   First Name DTo checking ending Here

  // Last Name Dto Start Here
  describe('Last Name Dto Checking', () => {
    it('last_name should not be empty', async () => {
      const employee = {
        first_name: 'John Doe',
        gender: 'M',
        number: '0777777771',
        email: 'johndoe@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(`last_name should not be empty`);
    });
    it('last_name must be longer than or equal to 6 characters', async () => {
      const employee = {
        first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        number: '0777777772',
        email: 'johndoe@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(
        `last_name must be longer than or equal to 6 characters`,
      );
    });
    it('last_name must be shorter than or equal to 10 characters', async () => {
      const employee = {
        first_name: 'John doe',
        last_name: 'Doe stronger',
        gender: 'M',
        number: '0777777771',
        email: 'johndoe@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(
        `last_name must be shorter than or equal to 10 characters`,
      );
    });
  });
  //   Last Name DTo checking ending Here

  // Gender Dto Start Here
  describe('gender Dto Checking', () => {
    it('gender should not be empty', async () => {
      const employee = {
        first_name: 'John doe',
        last_name: 'Doe stro',
        // gender: 'M',
        number: '0777777771',
        email: 'johndoe@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(`gender should not be empty`);
    });
    it('gender must match M|F|NM regular expression', async () => {
      const employee = {
        first_name: 'John doe',
        last_name: 'Doe stro',
        gender: 'W',
        number: '0777777772',
        email: 'johndoe1@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(
        `gender must match ^M|F|NM$ regular expression`,
      );
    });
  });
  //   Gender DTo checking ending Here

  // Number Dto Start Here
  describe('number Dto Checking', () => {
    it('number should not be empty', async () => {
      const employee = {
        first_name: 'John doe',
        last_name: 'Doe stro',
        gender: 'M',
        // number: '0777777771',
        email: 'johndoe3@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(`number should not be empty`);
    });
    // it('number must be longer than or equal to 9 characters', async () => {
    //   const employee = {
    //     first_name: 'John doe',
    //     last_name: 'Doe stro',
    //     gender: 'M',
    //     number: '87552557777',
    //     email: 'johndoe3@example.com',
    //   } as EmployeeUpdateDto;

    //   const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
    //   const errors = await validate(myDtoObject);
    //   expect(errors.length).not.toBe(0);
    //   expect(stringified(errors)).toContain(
    //     `number must be longer than or equal to 9 characters`,
    //   );
    // });
  });
  //   Number DTo checking ending Here

  // Email Dto Start Here
  describe('email Dto Checking', () => {
    it('email should not be empty', async () => {
      const employee = {
        first_name: 'John doe',
        last_name: 'Doe stro',
        gender: 'M',
        number: '0777777771',
        // email: 'johndoe3@example.com',
      } as EmployeeUpdateDto;
      const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
      const errors = await validate(myDtoObject);
      expect(errors.length).not.toBe(0);
      expect(stringified(errors)).toContain(`email should not be empty`);
    });
    // it('email must be longer than or equal to 9 characters', async () => {
    //   const employee = {
    //     first_name: 'John doe',
    //     last_name: 'Doe stro',
    //     gender: 'M',
    //     number: '87552557777',
    //     email: 'johndoe3',
    //   } as EmployeeUpdateDto;

    //   const myDtoObject = plainToInstance(EmployeeUpdateDto, employee);
    //   const errors = await validate(myDtoObject);
    //   expect(errors.length).not.toBe(0);
    //   expect(stringified(errors)).toContain(
    //     `email must be longer than or equal to 9 characters`,
    //   );
    // });
  });
  //   email DTo checking ending Here
});

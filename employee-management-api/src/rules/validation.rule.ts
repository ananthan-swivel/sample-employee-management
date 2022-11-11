import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { EmployeesFindByService } from '../services/employees/find-by-employees.service';

@ValidatorConstraint({ name: 'EmployeeExistsValidation', async: true })
@Injectable()
export class EmployeeExistsRule implements ValidatorConstraintInterface {
  constructor(private employeesService: EmployeesFindByService) {}

  async validate(value: string, args: ValidationArguments) {
    try {
      const record = await this.employeesService.findBy({
        [args.property]: value,
      });
      const [isUpdate] = args.constraints;
      if (isUpdate && record?.length === 1) return true;
      if (record?.length > 0) return false;
    } catch (e) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Employee ${args.property} already exists`;
  }
}

export function EmployeeExistsValidation(
  _isUpdate: boolean,
  _validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'EmployeeExistsValidation',
      target: object.constructor,
      propertyName: propertyName,
      options: _validationOptions,
      constraints: [_isUpdate],
      validator: EmployeeExistsRule,
    });
  };
}

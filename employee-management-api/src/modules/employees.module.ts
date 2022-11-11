import { Module } from '@nestjs/common';
import { EmployeeExistsRule } from '../rules/validation.rule';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from '../schema/employee.schema';
import {
  EmployeesGetAllService,
  EmployeesGetOneService,
  EmployeesCreateService,
  EmployeesUpdateService,
  EmployeesDeleteService,
  EmployeesFindByService,
} from '../services/employees';
import {
  EmployeesGetAllController,
  EmployeesGetOneController,
  EmployeesCreateController,
  EmployeesUpdateController,
  EmployeesDeleteController,
} from '../controller/employees';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [
    EmployeesGetAllController,
    EmployeesGetOneController,
    EmployeesCreateController,
    EmployeesUpdateController,
    EmployeesDeleteController,
  ],
  providers: [
    EmployeesGetAllService,
    EmployeesGetOneService,
    EmployeesCreateService,
    EmployeesUpdateService,
    EmployeesDeleteService,
    EmployeesFindByService,
    EmployeeExistsRule,
  ],
})
export class EmployeesModule {}

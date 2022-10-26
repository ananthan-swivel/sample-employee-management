import { Module } from '@nestjs/common';
import { EmployeesController } from '../controller/employees.controller';
import { EmployeesService } from '../services/employees.service';
import { EmployeeExistsRule } from '../rules/validation.rule';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from '../schema/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeExistsRule],
})
export class EmployeesModule {}

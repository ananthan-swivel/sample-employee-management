import { Controller, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';
import { EmployeeCreateDto } from '../../dto/employee-create.dto';
import { EmployeesCreateService } from '../../services/employees/create-employees.service';
import { Routes } from '../../setup/constants/routes';

@Controller(Routes.Employee)
export class EmployeesCreateController {
  constructor(private service: EmployeesCreateService) {}

  @Post()
  create(@Body() dto: EmployeeCreateDto, @Res() res: Response) {
    try {
      this.service.createEmployee(dto).then((response) => {
        res.status(HttpStatus.OK);
        res.send({
          is_success: true,
          msg: 'Employee created successfully.',
          data: response,
          err: {},
        });
        return res;
      });
    } catch (error) {
      res.status(500);
      res.send({
        is_success: false,
        msg: 'Something went wrong. Please try again later.',
        data: [],
        err: error,
      });
      return res;
    }
  }
}

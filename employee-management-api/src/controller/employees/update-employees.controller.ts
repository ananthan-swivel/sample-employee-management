import { Controller, Put, Res, HttpStatus, Param, Body } from '@nestjs/common';
import { Response } from 'express';
import { EmployeeUpdateDto } from '../../dto/employee-update.dto';
import { EmployeesUpdateService } from '../../services/employees/update-employees.service';
import { Routes } from '../../setup/constants/routes';

@Controller(Routes.Employee)
export class EmployeesUpdateController {
  constructor(private service: EmployeesUpdateService) {}

  @Put(':id')
  update(
    @Param() params,
    @Body() employee: EmployeeUpdateDto,
    @Res() res: Response,
  ) {
    if (!params.id || params.id === '') {
      res.status(HttpStatus.BAD_REQUEST);
      res.send({
        is_success: false,
        msg: 'Employee invaild id.',
        data: {},
        err: {},
      });
      return res;
    }
    try {
      this.service.updateEmployee(params.id, employee).then((response) => {
        res.status(HttpStatus.OK);
        res.send({
          is_success: true,
          msg: 'Employee updated successfully.',
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

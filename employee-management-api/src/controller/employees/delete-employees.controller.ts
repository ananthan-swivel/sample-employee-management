import { Controller, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { Response } from 'express';
import { EmployeesDeleteService } from '../../services/employees/delete-employees.service';
import { Routes } from '../../setup/constants/routes';

@Controller(Routes.Employee)
export class EmployeesDeleteController {
  constructor(private service: EmployeesDeleteService) {}

  @Delete(':id')
  deleteEmployee(@Param() params, @Res() res: Response) {
    try {
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
      this.service.deleteEmployee(params.id).then(() => {
        res.status(HttpStatus.OK);
        res.send({
          is_success: true,
          msg: 'Employee deleted successfully.',
          err: {},
        });
        return res;
      });
    } catch (error) {
      res.status(500);
      res.send({
        is_success: false,
        msg: 'Something went wrong. Please try again later.',
        err: error,
      });
      return res;
    }
  }
}

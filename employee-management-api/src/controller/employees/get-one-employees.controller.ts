import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { Response } from 'express';
import { EmployeesGetOneService } from '../../services/employees/get-one-employees.service';
import { Routes } from '../../setup/constants/routes';

@Controller(Routes.Employee)
export class EmployeesGetOneController {
  constructor(private service: EmployeesGetOneService) {}

  @Get(':id')
  getOne(@Param() params, @Res() res: Response) {
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
      this.service.getEmployee(params.id).then(async (response) => {
        if (!response) {
          res.status(HttpStatus.NOT_FOUND);
          res.send({
            is_success: false,
            msg: 'Employee not found for given id.',
            data: {},
            err: {},
          });
        }

        res.status(HttpStatus.OK);
        res.send({
          is_success: true,
          msg: 'Employee get one successfully.',
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

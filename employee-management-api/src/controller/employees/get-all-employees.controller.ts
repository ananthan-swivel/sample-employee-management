import { Controller, Get, Res, HttpStatus, Query } from '@nestjs/common';
import { Response } from 'express';
import { getQuery } from 'src/interface/query.interface';
import { EmployeesGetAllService } from '../../services/employees/get-all-employees.service';
import { Routes } from '../../setup/constants/routes';

@Controller(Routes.Employee)
export class EmployeesGetAllController {
  constructor(private service: EmployeesGetAllService) {}

  // Get All Data
  @Get('/')
  get(@Query() query: getQuery, @Res() res: Response) {
    query = {
      ...query,
      page: query?.page ?? 1,
      limit: query?.limit ?? 10,
    };
    try {
      this.service.getEmployees(query).then((response) => {
        res.status(HttpStatus.OK);
        res.send({
          is_success: true,
          msg: 'Employee get all successfully.',
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

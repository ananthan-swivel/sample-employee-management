import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Res,
  HttpStatus,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeEntity } from './employee.entity';
import { EmployeeCreateDto } from '../dto/employee-create.dto';
import { Response } from 'express';
import { Pagination } from 'nestjs-typeorm-paginate';
import { getQuery } from '../interface/query.interface';
import { EmployeeUpdateDto } from '../dto/employee-update.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private service: EmployeesService) {}

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
        return res.status(HttpStatus.OK).json({
          is_success: true,
          msg: 'Employee get all successfully.',
          data: response,
          err: {},
        });
      });
    } catch (error) {
      return res.status(500).json({
        is_success: false,
        msg: 'Something went wrong. Please try again later.',
        data: [],
        err: error,
      });
    }
  }

  @Get(':id')
  getOne(@Param() params, @Res() res: Response) {
    try {
      this.service.getEmployee(params.id).then((response) => {
        return res.status(HttpStatus.OK).json({
          is_success: true,
          msg: 'Employee get one successfully.',
          data: response,
          err: {},
        });
      });
    } catch (error) {
      return res.status(500).json({
        is_success: false,
        msg: 'Something went wrong. Please try again later.',
        data: [],
        err: error,
      });
    }
  }

  @Post()
  create(@Body() dto: EmployeeCreateDto, @Res() res: Response) {
    try {
      this.service.createEmployee(dto).then((response) => {
        return res.status(HttpStatus.OK).json({
          is_success: true,
          msg: 'Employee created successfully.',
          data: response,
          err: {},
        });
      });
    } catch (error) {
      return res.status(500).json({
        is_success: false,
        msg: 'Something went wrong. Please try again later.',
        data: [],
        err: error,
      });
    }
  }

  @Put(':id')
  update(
    @Param() params,
    @Body() employee: EmployeeUpdateDto,
    @Res() res: Response,
  ) {
    try {
      this.service.updateEmployee(params.id, employee).then((response) => {
        return res.status(HttpStatus.OK).json({
          is_success: true,
          msg: 'Employee updated successfully.',
          err: {},
        });
      });
    } catch (error) {
      return res.status(500).json({
        is_success: false,
        msg: 'Something went wrong. Please try again later.',
        data: [],
        err: error,
      });
    }
  }

  @Delete(':id')
  deleteEmployee(@Param() params, @Res() res: Response) {
    try {
      this.service.deleteEmployee(params.id).then(() => {
        return res.status(HttpStatus.OK).json({
          is_success: true,
          msg: 'Employee deleted successfully.',
          err: {},
        });
      });
    } catch (error) {
      return res.status(500).json({
        is_success: false,
        msg: 'Something went wrong. Please try again later.',
        err: error,
      });
    }
  }
}

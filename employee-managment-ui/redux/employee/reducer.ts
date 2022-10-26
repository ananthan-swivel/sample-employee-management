import { createReducer } from "@reduxjs/toolkit";
import { ResponseStatus } from "../../enums/responseStatus";
import { EmployeeInterface } from "../../interfaces/employeeInterface";
import { ErrorResponseInterface } from "../../interfaces/errorResponseInterface";

import { clearEmployees, createEmployees, deleteEmployees, getAllEmployees, getOneEmployees, updateEmployees } from "./actions";
import { PaginationInterface } from '../../interfaces/paginationInterface';
import { ApiResponseInterface } from "../../interfaces/apiResponseInterface";

interface ReducerInitialStateInterface {
  data: EmployeeInterface[];
  error: ErrorResponseInterface;
  status: ResponseStatus;
  pagination: PaginationInterface;
  key?: string;
  msg?: string;
}

const initialState: ReducerInitialStateInterface = {
  data: [],
  error: {} as ErrorResponseInterface,
  pagination: {} as PaginationInterface,
  status: ResponseStatus.INITIAL,
  key: undefined,
  msg: "",
};

export const employeeReducer = createReducer(
  initialState,
  (builder) => {
    // Get All ==========================================================
    builder
      .addCase(getAllEmployees.pending, (state) => {
        state.status = ResponseStatus.LOADING;
        state.key = "view-all";
      })
      .addCase(getAllEmployees.fulfilled, (state, { payload }) => {
        var data = payload as ApiResponseInterface;
        state.status = ResponseStatus.LOADED;
        state.key = "view-all";

        state.pagination = data.data.meta;
        state.data = data.data.items as EmployeeInterface[];
      })
      .addCase(getAllEmployees.rejected, (state, error) => {
        state.status = ResponseStatus.ERROR;
        let myError = error.payload as ApiResponseInterface;
        state.error = myError.error;
        state.key = "view-all";
      });
    //===================================================================
    // Get One ==========================================================
    builder
      .addCase(getOneEmployees.pending, (state) => {
        state.status = ResponseStatus.LOADING;
        state.key = "view-one";
      })
      .addCase(getOneEmployees.fulfilled, (state, { payload }) => {
        var data = payload as ApiResponseInterface;
        state.status = ResponseStatus.LOADED;
        state.key = "view-one";
        state.data = [data.data] as EmployeeInterface[];
      })
      .addCase(getOneEmployees.rejected, (state, error) => {
        state.status = ResponseStatus.ERROR;
        let myError = error.payload as ApiResponseInterface;
        state.error = myError.error;
        state.key = "view-one";
      });
    //===================================================================
    // Create ==========================================================
    builder
      .addCase(createEmployees.pending, (state) => {
        state.status = ResponseStatus.LOADING;
        state.key = "add";
        state.msg = "";
      })
      .addCase(createEmployees.fulfilled, (state, { payload }) => {
        var data = payload as ApiResponseInterface;
        state.status = ResponseStatus.LOADED;
        state.key = "add";
        state.msg = data.msg;
        state.data = [data.data] as EmployeeInterface[];
      })
      .addCase(createEmployees.rejected, (state, error) => {
        state.status = ResponseStatus.ERROR;
        let myError = error.payload as ApiResponseInterface;
        state.error = myError.error;
        state.msg = 'Error';
        state.key = "add";
      });
    //===================================================================
    // Update ==========================================================
    builder
      .addCase(updateEmployees.pending, (state) => {
        state.status = ResponseStatus.LOADING;
        state.key = "update";
      })
      .addCase(updateEmployees.fulfilled, (state, { payload }) => {
        var data = payload as ApiResponseInterface;
        state.status = ResponseStatus.LOADED;
        state.key = "update";
        state.msg = data.msg;
      })
      .addCase(updateEmployees.rejected, (state, error) => {
        state.status = ResponseStatus.ERROR;
        let myError = error.payload as ApiResponseInterface;
        state.error = myError.error;
        state.key = "update";
      });
    //===================================================================
    // Delete ==========================================================
    builder
      .addCase(deleteEmployees.pending, (state) => {
        state.status = ResponseStatus.LOADING;
        state.key = "delete";
      })
      .addCase(deleteEmployees.fulfilled, (state, {payload}) => {
        state.status = ResponseStatus.LOADED;
        var data = payload as ApiResponseInterface;
        state.key = "delete";
        state.msg = data.msg;
      })
      .addCase(deleteEmployees.rejected, (state, error) => {
        state.status = ResponseStatus.ERROR;
        let myError = error.payload as ApiResponseInterface;
        state.error = myError.error;
        state.key = "delete";
      });
    //===================================================================

    // CLEAR ==========================================================
    builder
      .addCase(clearEmployees.pending, (state) => {
        state.status = ResponseStatus.LOADING;
        state.key = "";
      })
      .addCase(clearEmployees.fulfilled, (state, {}) => {
        state.status = ResponseStatus.LOADED;
        state.key = "";
        state.error = {} as ErrorResponseInterface;
        state.data = [];
      });

    //===================================================================

    //===================================================================
  }
);

export default employeeReducer;

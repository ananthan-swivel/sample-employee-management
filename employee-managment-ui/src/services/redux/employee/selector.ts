import { RootState } from "../store";
import { createSelector } from '@reduxjs/toolkit';

export const employeeState = (state: RootState) => state.employeeReducer

export const employeeSelector = createSelector(
    employeeState,
  state => state
)

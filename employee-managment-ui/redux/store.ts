import {employeeReducer} from './employee';
import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    employeeReducer:employeeReducer
      
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

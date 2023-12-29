import { configureStore } from '@reduxjs/toolkit';
import queryDataReducer from './queryDataSlice/queryDataSlice';
export const store = configureStore({
  reducer: {
    queryData: queryDataReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import queryDataReducer from './queryDataSlice/queryDataSlice';
import documentationDataReducer from './documentationSlice/documentationSlice';
export const store = configureStore({
  reducer: {
    queryData: queryDataReducer,
    documentationData: documentationDataReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

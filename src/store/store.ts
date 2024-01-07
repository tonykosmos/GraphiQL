import { combineReducers, configureStore } from '@reduxjs/toolkit';
import queryDataReducer from './queryDataSlice/queryDataSlice';
import documentationDataReducer from './documentationSlice/documentationSlice';
const rootReducer = combineReducers({
  queryData: queryDataReducer,
  documentationData: documentationDataReducer,
});
export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export const store = configureStore({
  reducer: {
    queryData: queryDataReducer,
    documentationData: documentationDataReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

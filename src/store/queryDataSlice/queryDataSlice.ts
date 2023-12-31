import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  defaultAPIRequest,
  defaultRequestText,
} from '../../constants/defaultValues';
import { RequestFetchParam, QueryDataState } from './types';

const initialState: QueryDataState = {
  apiEndpoint: defaultAPIRequest,
  bodyRequest: defaultRequestText,
  headersRequest: '',
  variablesRequest: '',
  response: '',
  isLoadingRequest: false,
  errorRequest: '',
};

export const requestFetch = createAsyncThunk(
  'queryData/requestFetch',
  async (
    { apiEndpoint, bodyRequest }: RequestFetchParam,
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: bodyRequest,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }
      const content = await response.json();
      const data = JSON.stringify(content, null, 4);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const queryDataSlice = createSlice({
  name: 'queryData',
  initialState,
  reducers: {
    setApiEndpoint: (state, action: PayloadAction<string>) => {
      state.apiEndpoint = action.payload;
    },
    setBodyRequest: (state, action: PayloadAction<string>) => {
      state.bodyRequest = action.payload;
    },
    setHeadersRequest: (state, action: PayloadAction<string>) => {
      state.headersRequest = action.payload;
    },
    setVariablesRequest: (state, action: PayloadAction<string>) => {
      state.variablesRequest = action.payload;
    },
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(requestFetch.pending, (state) => {
        state.isLoadingRequest = true;
        state.errorRequest = '';
      })
      .addCase(
        requestFetch.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoadingRequest = false;
          state.response = action.payload;
          state.errorRequest = '';
        }
      )
      .addCase(requestFetch.rejected, (state, action) => {
        state.isLoadingRequest = false;
        state.errorRequest = `${action.error.message} "${action.payload}"`;
      });
  },
});
export const {
  setApiEndpoint,
  setBodyRequest,
  setHeadersRequest,
  setVariablesRequest,
  setResponse,
} = queryDataSlice.actions;

export default queryDataSlice.reducer;

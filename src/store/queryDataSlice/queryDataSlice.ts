import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { defaultAPIRequest, defaultRequestText } from '../../constants';

export type RequestFetchParam = {
  apiEndpoint: string;
  bodyRequest: string;
  headersRequest: string;
  variablesRequest: string;
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
        throw new Error('Server error.');
      }
      const content = await response.json();
      const data = JSON.stringify(content, null, 4);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export type QueryDataState = {
  response: string;
  isLoadingRequest: boolean;
  errorRequest: string;
} & RequestFetchParam;

const initialState: QueryDataState = {
  apiEndpoint: defaultAPIRequest,
  bodyRequest: defaultRequestText,
  headersRequest: '',
  variablesRequest: '',
  response: '',
  isLoadingRequest: false,
  errorRequest: '',
};

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
        state.errorRequest = (action.payload as Error).message;
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

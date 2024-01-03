import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DocumentationFetchParam, DocumentationState } from './types';
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';

const initialState: DocumentationState = {
  response: '',
  isLoading: false,
  error: '',
};

export const documentationDataFetch = createAsyncThunk(
  'documentationData/documentationFetch',
  async ({ apiEndpoint }: DocumentationFetchParam, { rejectWithValue }) => {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }
      const graphqlSchemaObj = buildClientSchema((await response.json()).data);
      const sdlString = printSchema(graphqlSchemaObj);
      return sdlString;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const documentationDataSlice = createSlice({
  name: 'documentationData',
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(documentationDataFetch.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        documentationDataFetch.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.response = action.payload;
          state.error = '';
        }
      )
      .addCase(documentationDataFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = `${action.error.message} "${action.payload}"`;
      });
  },
});
export const { setResponse } = documentationDataSlice.actions;
export default documentationDataSlice.reducer;

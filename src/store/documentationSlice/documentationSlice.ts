import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DocumentationFetchParam, DocumentationState } from './types';
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';

const initialState: DocumentationState = {
  documentationResponse: '',
  isLoadingDocumentation: false,
  errorDocumentation: '',
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
    setDocumentationResponse: (state, action: PayloadAction<string>) => {
      state.documentationResponse = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(documentationDataFetch.pending, (state) => {
        state.isLoadingDocumentation = true;
        state.errorDocumentation = '';
      })
      .addCase(
        documentationDataFetch.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoadingDocumentation = false;
          state.documentationResponse = action.payload;
          state.errorDocumentation = '';
        }
      )
      .addCase(documentationDataFetch.rejected, (state, action) => {
        state.isLoadingDocumentation = false;
        state.errorDocumentation = `${action.error.message} "${action.payload}"`;
      });
  },
});
export const { setDocumentationResponse } = documentationDataSlice.actions;
export default documentationDataSlice.reducer;

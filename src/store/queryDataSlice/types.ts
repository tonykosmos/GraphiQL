export type RequestFetchParam = {
  apiEndpoint: string;
  bodyRequest: string;
  headersRequest: string;
  variablesRequest: string;
};
export type QueryDataState = {
  response: string;
  isLoadingRequest: boolean;
  errorRequest: string;
} & RequestFetchParam;

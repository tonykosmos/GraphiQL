import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import { setDocumentationResponse } from '../../store/documentationSlice/documentationSlice';
import { setQueryResponse } from '../../store/queryDataSlice/queryDataSlice';

const autoHideDuration = 10000;

export function ErrorSnackbar() {
  const { errorDocumentation } = useAppSelector(
    (state: RootState) => state.documentationData
  );
  const { errorRequest } = useAppSelector(
    (state: RootState) => state.queryData
  );
  const dispatch = useAppDispatch();
  const [isErrorMessageOpen, setIsErrorMessageOpen] = useState(false);

  useEffect(() => {
    if (errorDocumentation || errorRequest) {
      setIsErrorMessageOpen(true);
      dispatch(
        errorDocumentation ? setDocumentationResponse('') : setQueryResponse('')
      );
    }
  }, [errorDocumentation, errorRequest]);

  const closeWindow = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason && reason === 'clickaway') {
      return;
    }
    setIsErrorMessageOpen(false);
  };

  return (
    <Snackbar
      open={isErrorMessageOpen}
      autoHideDuration={autoHideDuration}
      onClose={closeWindow}
    >
      <Alert onClose={closeWindow} severity="error" sx={{ width: '100%' }}>
        {errorDocumentation || errorRequest}
      </Alert>
    </Snackbar>
  );
}

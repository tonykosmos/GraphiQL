import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

export function ErrorSnackbar() {
  const { errorRequest } = useAppSelector(
    (state: RootState) => state.queryData
  );
  const [isErrorMessageOpen, setIsErrorMessageOpen] = useState(false);

  useEffect(() => {
    if (errorRequest) {
      setIsErrorMessageOpen(true);
    }
  }, [errorRequest]);

  const closeWindow = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsErrorMessageOpen(false);
  };

  return (
    <Snackbar
      open={isErrorMessageOpen}
      autoHideDuration={10000}
      onClose={closeWindow}
    >
      <Alert onClose={closeWindow} severity="error" sx={{ width: '100%' }}>
        {errorRequest}
      </Alert>
    </Snackbar>
  );
}

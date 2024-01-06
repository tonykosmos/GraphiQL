import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { useLanguage } from '../../hooks';
import { setHeadersRequest } from '../../store/queryDataSlice/queryDataSlice';
import { MODE } from '../EditorViewer/types';

const rowsNumber = 10;

export function HeadersViewer() {
  const { dictionary } = useLanguage();
  const { headersRequest } = useAppSelector(
    (state: RootState) => state.queryData
  );
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeadersRequest(event.target.value));
  };
  return (
    <TextField
      id={MODE.HEADERS_EDITOR}
      label={dictionary.headers}
      multiline
      fullWidth
      rows={rowsNumber}
      variant="filled"
      margin="normal"
      value={headersRequest}
      onChange={changeHandler}
    />
  );
}

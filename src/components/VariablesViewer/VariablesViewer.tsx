import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { useLanguage } from '../../hooks';
import { setVariablesRequest } from '../../store/queryDataSlice/queryDataSlice';
import { MODE } from '../EditorViewer/types';

const rowsNumber = 10;

export function VariablesViewer() {
  const { dictionary } = useLanguage();
  const { variablesRequest } = useAppSelector(
    (state: RootState) => state.queryData
  );
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVariablesRequest(event.target.value));
  };
  return (
    <TextField
      id={MODE.VARIABLES_EDITOR}
      data-testid="variables-editor-container"
      label={dictionary.variables}
      multiline
      fullWidth
      rows={rowsNumber}
      variant="filled"
      margin="normal"
      value={variablesRequest}
      onChange={changeHandler}
    />
  );
}

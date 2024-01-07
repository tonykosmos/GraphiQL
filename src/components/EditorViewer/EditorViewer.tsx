import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { useLanguage } from '../../hooks';
import {
  setBodyRequest,
  setQueryResponse,
} from '../../store/queryDataSlice/queryDataSlice';
import { EditorViewerProps, MODE } from './types';

const viewerRows = 36;
const editorRows = 15;

export function EditorViewer({ isViewer }: EditorViewerProps) {
  const { dictionary } = useLanguage();
  const { bodyRequest, response } = useAppSelector(
    (state: RootState) => state.queryData
  );
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      isViewer
        ? setQueryResponse(event.target.value)
        : setBodyRequest(event.target.value)
    );
  };
  return (
    <TextField
      id={isViewer ? MODE.RESPONSE_VIEWER : MODE.REQUEST_EDITOR}
      label={isViewer ? dictionary.responseViewer : dictionary.requestEditor}
      multiline
      fullWidth
      disabled={isViewer}
      rows={isViewer ? viewerRows : editorRows}
      variant="filled"
      margin="normal"
      value={isViewer ? response : bodyRequest}
      onChange={changeHandler}
    />
  );
}

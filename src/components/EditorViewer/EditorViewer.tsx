import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { useLanguage } from '../../hooks';
import {
  setBodyRequest,
  setResponse,
} from '../../store/queryDataSlice/queryDataSlice';

enum MODE {
  RESPONSE_VIEWER = 'response-viewer',
  REQUEST_EDITOR = 'request-editor',
}

export function EditorViewer({ isViewer }: { isViewer: boolean }) {
  const { dictionary } = useLanguage();
  const { bodyRequest, response } = useAppSelector(
    (state: RootState) => state.queryData
  );
  const dispatch = useAppDispatch();
  const thirtyRows = 30;
  const fifteenRows = 15;

  return (
    <TextField
      id={isViewer ? MODE.RESPONSE_VIEWER : MODE.REQUEST_EDITOR}
      label={isViewer ? dictionary.responseViewer : dictionary.requestEditor}
      multiline
      fullWidth
      disabled={isViewer}
      rows={isViewer ? thirtyRows : fifteenRows}
      variant="filled"
      margin="normal"
      value={isViewer ? response : bodyRequest}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          isViewer
            ? setResponse(event.target.value)
            : setBodyRequest(event.target.value)
        );
      }}
    />
  );
}

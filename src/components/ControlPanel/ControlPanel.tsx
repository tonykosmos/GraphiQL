import { Box, IconButton, Tooltip } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Delete from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import {
  requestFetch,
  setBodyRequest,
  setResponse,
} from '../../store/queryDataSlice/queryDataSlice';
import { useLanguage } from '../../hooks';

export function ControlPanel() {
  const {
    apiEndpoint,
    bodyRequest,
    headersRequest,
    variablesRequest,
    isLoadingRequest,
  } = useAppSelector((state: RootState) => state.queryData);
  const dispatch = useAppDispatch();
  const { dictionary } = useLanguage();

  const onClickExecuteRequest = () => {
    if (!apiEndpoint.length || !bodyRequest.length) {
      return;
    }
    dispatch(
      requestFetch({
        apiEndpoint,
        bodyRequest,
        headersRequest,
        variablesRequest,
      })
    );
  };

  const onClickClearRequest = () => {
    dispatch(setBodyRequest(''));
    dispatch(setResponse(''));
  };

  const onClickPrettifyRequest = () => {
    console.log('Prettify');
    //TODO: logic for prettify
  };

  return (
    <Box>
      <Tooltip title={dictionary.startRequest}>
        <IconButton
          onClick={onClickExecuteRequest}
          sx={{ marginTop: 1 }}
          disabled={isLoadingRequest}
        >
          {isLoadingRequest ? (
            <StopIcon
              sx={{
                fontSize: 50,
                color: 'gray',
                borderRadius: 10,
              }}
            />
          ) : (
            <PlayArrowIcon
              sx={{
                fontSize: 50,
                color: 'green',
                borderRadius: 10,
              }}
            />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip title={dictionary.clearRequestParams}>
        <IconButton onClick={onClickClearRequest} sx={{ marginTop: 1 }}>
          <Delete
            sx={{
              fontSize: 50,
              color: 'brown',
              borderRadius: 10,
            }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title={dictionary.prettifyRequest}>
        <IconButton onClick={onClickPrettifyRequest} sx={{ marginTop: 1 }}>
          <AutoFixHighIcon
            sx={{
              fontSize: 50,
              color: 'gray',
              borderRadius: 10,
            }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

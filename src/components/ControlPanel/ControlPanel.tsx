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

  const executeRequest = () => {
    if (!apiEndpoint || !bodyRequest) {
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

  const clearRequest = () => {
    dispatch(setBodyRequest(''));
    dispatch(setResponse(''));
  };

  const prettifyRequest = () => {
    console.log('Prettify');
    //TODO: logic for prettify
  };

  return (
    <Box>
      <Tooltip title={dictionary.startRequest}>
        <IconButton
          onClick={executeRequest}
          sx={{ marginTop: 1 }}
          disabled={isLoadingRequest}
        >
          {isLoadingRequest ? (
            <StopIcon
              sx={{
                fontSize: 50,
                color: 'var(--gray)',
                borderRadius: 10,
              }}
            />
          ) : (
            <PlayArrowIcon
              sx={{
                fontSize: 50,
                color: 'var(--green)',
                borderRadius: 10,
              }}
            />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip title={dictionary.clearRequestParams}>
        <IconButton onClick={clearRequest} sx={{ marginTop: 1 }}>
          <Delete
            sx={{
              fontSize: 50,
              color: 'var(--brown)',
              borderRadius: 10,
            }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title={dictionary.prettifyRequest}>
        <IconButton onClick={prettifyRequest} sx={{ marginTop: 1 }}>
          <AutoFixHighIcon
            sx={{
              fontSize: 50,
              color: 'var(--gray)',
              borderRadius: 10,
            }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

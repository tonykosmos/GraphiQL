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
  setQueryResponse,
} from '../../store/queryDataSlice/queryDataSlice';
import { useLanguage } from '../../hooks';
import { ErrorSnackbar } from '../ErrorSnackbar';

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
    dispatch(setQueryResponse(''));
  };

  const prettifyRequest = () => {
    const lines: string[] = bodyRequest.split('\n').map((item) => item.trim());
    const linesWithoutSpacesAndComments = lines
      .filter((item) => !item.includes('#'))
      .join(' ')
      .split(' ')
      .filter((item) => item)
      .join(' ')
      .replaceAll('{', ' { ')
      .replaceAll('}', ' } ')
      .split(' ')
      .filter((item) => item);

    let tabsNum: number = 0;
    const arrToParse: string[] = [];

    linesWithoutSpacesAndComments.forEach((item, index) => {
      if (item === '{') {
        arrToParse.push(item);
      } else {
        arrToParse.push(`${'\t'.repeat(tabsNum)}${item}`);
      }

      if (linesWithoutSpacesAndComments[index + 1] !== '{' && index) {
        arrToParse.push('\n');
      }

      if (item === '{') {
        tabsNum += 1;
      }

      if (item === '}' || linesWithoutSpacesAndComments[index + 1] === '}') {
        tabsNum -= 1;
      }
    });

    dispatch(setBodyRequest(arrToParse.join(' ')));
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
      <ErrorSnackbar />
    </Box>
  );
}

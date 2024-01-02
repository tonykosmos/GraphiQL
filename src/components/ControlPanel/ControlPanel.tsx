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
    dispatch(setResponse(''));
  };

  const prettyPrint = (str: string) => {
    const lines: string[] = str.split('\n').map((item) => item.trim());
    console.log(lines);
    const linesWithoutComments = lines.filter(
      (item) => !item.includes('#') && item
    );
    // console.log(linesWithoutComments.map(item => item.trim()));
    let spacesIndex: number = 0;
    const lineBreaker = '\n';
    const spacer = '\t';

    const resultQueryString = [];

    linesWithoutComments.forEach((line) => {
      const strToAdd = `${spacer.repeat(
        spacesIndex
      )} ${line.trim()} ${lineBreaker}`;
      resultQueryString.push(strToAdd);

      if (line[line.length - 1].trim() === '{') {
        spacesIndex += 1;
      }
      if (line[line.length - 1].trim() === '}') {
        spacesIndex -= 1;
      }
    });

    // console.log(resultQueryString.j);

    // console.log(resultQueryString);

    dispatch(setBodyRequest(resultQueryString.join('')));

    // const offsets = [];
    // let index=0;
    // const offets = (tokens).forEach((token)=>{
    //    offsets.push('\t'.repeat(index)+token.trim());
    //    if (token.match('[\\{|\\(|\\[]')){index++};
    //    if (token.match('[\\}|\\)|\\]]')){index--};
    // })
    // return offsets.join('\n');
  };

  const prettifyRequest = () => {
    prettyPrint(bodyRequest);
    // console.log(prettyPrint(bodyRequest));
    // console.log('Prettify');
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
      <ErrorSnackbar />
    </Box>
  );
}

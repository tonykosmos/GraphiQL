import { Box, Button, IconButton, TextField, Tooltip } from '@mui/material';
import { useLanguage } from '../../hooks';
import { useState } from 'react';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setApiEndpoint } from '../../store/queryDataSlice/queryDataSlice';
import HelpIcon from '@mui/icons-material/Help';
import { EndpointHelper } from '../EndpointHelper/EndpointHelper';

export function EndpointInput() {
  const { dictionary } = useLanguage();

  const apiEndpoint = useAppSelector(
    (state: RootState) => state.queryData.apiEndpoint
  );
  const dispatch = useAppDispatch();

  const [localEndpoint, setLocalEndpoint] = useState<string>(apiEndpoint);

  const clickChangeEndpoint = () => {
    dispatch(setApiEndpoint(localEndpoint));
  };

  const [isOpenWindow, setIsOpenWindow] = useState(false);
  const handleClose = () => {
    setIsOpenWindow(false);
  };
  const handleOpen = () => {
    setIsOpenWindow(true);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 0.1fr' },
      }}
    >
      <TextField
        id="api-endpoint"
        label={dictionary.APIEndpoint}
        variant="filled"
        margin="normal"
        fullWidth
        value={localEndpoint}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setLocalEndpoint(event.target.value);
        }}
      />
      <Tooltip title={dictionary.helpInformation}>
        <IconButton onClick={handleOpen}>
          <HelpIcon sx={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
      <EndpointHelper
        isOpenWindow={isOpenWindow}
        openWindowHandler={handleClose}
      />
      <Button onClick={clickChangeEndpoint}>Change Endpoint</Button>
    </Box>
  );
}

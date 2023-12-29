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
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const changeTextFieldEndpoint = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalEndpoint(event.target.value);
  };
  const openWindow = () => {
    setIsWindowOpen(true);
  };
  const closeWindow = () => {
    setIsWindowOpen(false);
  };
  const changeEndpoint = () => {
    dispatch(setApiEndpoint(localEndpoint));
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
        onChange={changeTextFieldEndpoint}
      />
      <Tooltip title={dictionary.helpInformation}>
        <IconButton onClick={openWindow}>
          <HelpIcon sx={{ color: 'var(--white)' }} />
        </IconButton>
      </Tooltip>
      <EndpointHelper
        isWindowOpen={isWindowOpen}
        openWindowHandler={closeWindow}
      />
      <Button onClick={changeEndpoint}>{dictionary.changeEndpoint}</Button>
    </Box>
  );
}

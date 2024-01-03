import { Box, Button, IconButton, TextField, Tooltip } from '@mui/material';
import { useLanguage } from '../../hooks';
import { useState } from 'react';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setApiEndpoint } from '../../store/queryDataSlice/queryDataSlice';
import HelpIcon from '@mui/icons-material/Help';
import { EndpointHelper } from '../EndpointHelper/EndpointHelper';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DocumentationWindow from '../DocumentationWindow';

export function EndpointInput() {
  const { dictionary } = useLanguage();
  const apiEndpoint = useAppSelector(
    (state: RootState) => state.queryData.apiEndpoint
  );
  const dispatch = useAppDispatch();
  const [localEndpoint, setLocalEndpoint] = useState<string>(apiEndpoint);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [isDocWindowOpen, setIsDocWindowOpen] = useState(false);

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
  const openDocumentation = () => {
    setIsDocWindowOpen(true);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '0.1fr 1fr 0.1fr' },
        gridTemplateAreas: `'menu input help'
        'menu button help'`,
      }}
    >
      <Tooltip sx={{ gridArea: 'menu' }} title={dictionary.documentation}>
        <IconButton onClick={openDocumentation}>
          <MenuBookIcon sx={{ color: 'var(--white)' }} />
        </IconButton>
      </Tooltip>
      <TextField
        sx={{ gridArea: 'input' }}
        id="api-endpoint"
        label={dictionary.APIEndpoint}
        variant="filled"
        margin="normal"
        fullWidth
        value={localEndpoint}
        onChange={changeTextFieldEndpoint}
      />
      <Tooltip sx={{ gridArea: 'help' }} title={dictionary.helpInformation}>
        <IconButton onClick={openWindow}>
          <HelpIcon sx={{ color: 'var(--white)' }} />
        </IconButton>
      </Tooltip>
      <Button sx={{ gridArea: 'button' }} onClick={changeEndpoint}>
        {dictionary.changeEndpoint}
      </Button>
      <EndpointHelper
        isWindowOpen={isWindowOpen}
        openWindowHandler={closeWindow}
      />
      <DocumentationWindow
        isOpenWindow={isDocWindowOpen}
        setIsOpenWindowHandler={setIsDocWindowOpen}
      />
    </Box>
  );
}

import { Box, Button, IconButton, TextField, Tooltip } from '@mui/material';
import { useLanguage } from '../../hooks';
import { Suspense, lazy, useState } from 'react';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setApiEndpoint } from '../../store/queryDataSlice/queryDataSlice';
import HelpIcon from '@mui/icons-material/Help';
import { EndpointHelper } from '../EndpointHelper/EndpointHelper';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { documentationDataFetch } from '../../store/documentationSlice/documentationSlice';

const DocumentationWindow = lazy(() => import('../DocumentationWindow'));

export function EndpointInput() {
  const { dictionary } = useLanguage();
  const apiEndpoint = useAppSelector(
    (state: RootState) => state.queryData.apiEndpoint
  );

  const dispatch = useAppDispatch();
  const [localEndpoint, setLocalEndpoint] = useState<string>(apiEndpoint);
  const [isHelpWindowOpen, setIsHelpWindowOpen] = useState(false);
  const [isDocWindowOpen, setIsDocWindowOpen] = useState(false);
  const [isAvailableClickDocumentation, setIsAvailableClickDocumentation] =
    useState(true);

  const changeTextFieldEndpoint = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalEndpoint(event.target.value);
  };
  const openWindow = () => {
    setIsHelpWindowOpen(true);
  };
  const closeWindow = () => {
    setIsHelpWindowOpen(false);
  };
  const changeEndpoint = () => {
    dispatch(setApiEndpoint(localEndpoint));
  };
  const openDocumentation = async () => {
    setIsAvailableClickDocumentation(false);
    await dispatch(documentationDataFetch({ apiEndpoint }));
    setIsDocWindowOpen(true);
    setIsAvailableClickDocumentation(true);
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
        <IconButton
          onClick={openDocumentation}
          disabled={!isAvailableClickDocumentation}
        >
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
        isWindowOpen={isHelpWindowOpen}
        openWindowHandler={closeWindow}
      />
      <Suspense>
        <DocumentationWindow
          isOpenWindow={isDocWindowOpen}
          setIsOpenWindowHandler={setIsDocWindowOpen}
        />
      </Suspense>
    </Box>
  );
}

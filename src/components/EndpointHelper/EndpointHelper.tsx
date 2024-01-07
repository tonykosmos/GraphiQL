import {
  Backdrop,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  defaultAPIRequest,
  trevorBladesAPIRequest,
} from '../../constants/defaultValues';
import { useLanguage } from '../../hooks';
import { EndpointHelperProps } from './types';

export function EndpointHelper({
  isWindowOpen,
  openWindowHandler,
}: EndpointHelperProps) {
  const { dictionary } = useLanguage();
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isWindowOpen}
    >
      <Card sx={{ minWidth: 300, bgcolor: 'var(--helper-window-bg-color)' }}>
        <CardContent>
          <Typography sx={{ mb: 2, color: 'var(--main-font-color)' }}>
            {dictionary.messageAPIEndpointsList}
          </Typography>
          {[defaultAPIRequest, trevorBladesAPIRequest].map((text) => (
            <div key={text}>
              <Typography
                variant="body2"
                sx={{ padding: 1, color: 'var(--main-font-color)' }}
              >
                {text}
              </Typography>
              <br />
            </div>
          ))}
        </CardContent>
        <CardActions sx={{ float: 'right' }}>
          <IconButton
            onClick={() => openWindowHandler(false)}
            sx={{ color: 'var(--white)' }}
          >
            <CloseIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Backdrop>
  );
}

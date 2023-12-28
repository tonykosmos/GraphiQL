import {
  Backdrop,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { defaultAPIRequest } from '../../constants/defaultValues';
import { useLanguage } from '../../hooks';

export function EndpointHelper({
  isOpenWindow,
  openWindowHandler,
}: {
  isOpenWindow: boolean;
  openWindowHandler: (isOpen: boolean) => void;
}) {
  const { dictionary } = useLanguage();
  return (
    <Backdrop
      sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpenWindow}
    >
      <Card sx={{ minWidth: 300, backgroundColor: 'gray' }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }}>
            {dictionary.messageAPIEndpointsList}
          </Typography>
          <Typography variant="body2">
            {/* TODO: Set new URLs with good APIEndpoints */}
            {defaultAPIRequest}
            <br />
            {defaultAPIRequest}
            <br />
            {defaultAPIRequest}
          </Typography>
        </CardContent>
        <CardActions sx={{ float: 'right' }}>
          <IconButton
            onClick={() => openWindowHandler(false)}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Backdrop>
  );
}

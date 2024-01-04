import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Typography,
  styled,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { DocumentationWindowProps } from './types';
import { useLanguage } from '../../hooks';
import { lazy, Suspense } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { LoadingSpinner } from '../LoadingSpinner';

const DocumentationData = lazy(() => import('../DocumentationData'));

const anchorSide = 'left';

export function DocumentationWindow({
  isOpenWindow,
  setIsOpenWindowHandler,
}: DocumentationWindowProps) {
  const { dictionary } = useLanguage();

  const toggleDrawer = (isOpen: boolean) => () => {
    setIsOpenWindowHandler(isOpen);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(0, 1),
    justifyContent: 'space-between',
  }));

  return (
    <Drawer
      anchor={anchorSide}
      open={isOpenWindow}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{
          width: 400,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--main-bg-color)',
          color: 'var(--main-font-color)',
        }}
      >
        <DrawerHeader>
          <Typography variant="h5" sx={{ mb: 2, padding: 1, marginTop: 2 }}>
            <MenuBookIcon sx={{ paddingRight: 2 }} />
            {dictionary.documentation}
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon sx={{ color: 'var(--white)' }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Suspense fallback={<LoadingSpinner />}>
          <Typography sx={{ paddingLeft: 2, paddingBottom: 1 }}>
            {dictionary.descriptionDocumentation}
          </Typography>
          <DocumentationData />
        </Suspense>
      </Box>
    </Drawer>
  );
}

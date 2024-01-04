import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { DocumentationWindowProps } from './types';
import { useLanguage } from '../../hooks';
import { lazy, Suspense } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { LoadingSpinner } from '../LoadingSpinner';
import { DrawerHeader } from './styles';

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
          <Typography variant="h5" sx={{ mb: 2, padding: 1, mt: 2 }}>
            <MenuBookIcon sx={{ pr: 2 }} />
            {dictionary.documentation}
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon sx={{ color: 'var(--white)' }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Suspense fallback={<LoadingSpinner />}>
          <Typography sx={{ pl: 2, pb: 1 }}>
            {dictionary.descriptionDocumentation}
          </Typography>
          <DocumentationData />
        </Suspense>
      </Box>
    </Drawer>
  );
}

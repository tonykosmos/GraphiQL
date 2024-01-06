import { Box, Container } from '@mui/material';

import { EditorViewer } from '../../components/EditorViewer';
import { EndpointInput } from '../../components/EndpointInput';
import { ControlPanel } from '../../components/ControlPanel';
import { DownsideWindowTabs } from '../../components/DownsideWindowTabs';

export function GraphiQLPage() {
  return (
    <Container maxWidth="xl" sx={{ minHeight: '90vh' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 0.1fr 1fr' },
          gap: 2,
        }}
      >
        <Box>
          <EndpointInput />
          <EditorViewer isViewer={false} />
          <DownsideWindowTabs />
        </Box>
        <ControlPanel />
        <EditorViewer isViewer={true} />
      </Box>
    </Container>
  );
}

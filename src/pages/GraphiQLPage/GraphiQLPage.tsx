import { Box, Container } from '@mui/material';

import { EditorViewer } from '../../components/EditorViewer';
import { EndpointInput } from '../../components/EndpointInput';
import { ControlPanel } from '../../components/ControlPanel';

export function GraphiQLPage() {
  return (
    <Container maxWidth="xl">
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
        </Box>
        <ControlPanel />
        <EditorViewer isViewer={true} />
      </Box>
    </Container>
  );
}

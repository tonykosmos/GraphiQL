import { Box, Container, Tab, Tabs } from '@mui/material';

import { EditorViewer } from '../../components/EditorViewer';
import { EndpointInput } from '../../components/EndpointInput';
import { ControlPanel } from '../../components/ControlPanel';
import { HeadersViewer } from '../../components/HeadersViewer';
import { VariablesViewer } from '../../components/VariablesViewer';
import { useLanguage } from '../../hooks';
import { CustomTabPanel } from '../../components/CustomTabPanel';
import { useState } from 'react';

export function GraphiQLPage() {
  const { dictionary } = useLanguage();
  const [value, setValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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

          <Tabs value={value} onChange={handleTabChange} aria-label="">
            <Tab
              label={dictionary.headers}
              sx={{ color: 'var(--main-font-color)' }}
              {...a11yProps(0)}
            />
            <Tab
              label={dictionary.variables}
              sx={{ color: 'var(--main-font-color)' }}
              {...a11yProps(1)}
            />
            <Tab
              label={dictionary.hide}
              sx={{ color: 'var(--main-font-color)' }}
              {...a11yProps(2)}
            />
          </Tabs>

          <Box>
            <CustomTabPanel value={value} index={0}>
              <HeadersViewer />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <VariablesViewer />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}></CustomTabPanel>
          </Box>
        </Box>
        <ControlPanel />
        <EditorViewer isViewer={true} />
      </Box>
    </Container>
  );
}

import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useLanguage } from '../../hooks';
import { CustomTabPanel } from '../CustomTabPanel';
import { HeadersViewer } from '../HeadersViewer';
import { VariablesViewer } from '../VariablesViewer';

export function DownsideWindowTabs() {
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const { dictionary } = useLanguage();
  const [value, setValue] = useState(0);

  return (
    <>
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
    </>
  );
}

export default DownsideWindowTabs;

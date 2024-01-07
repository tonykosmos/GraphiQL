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

  function getTab(index: number, label: string) {
    return (
      <Tab
        label={label}
        sx={{ color: 'var(--main-font-color)' }}
        {...a11yProps(index)}
      />
    );
  }

  const { dictionary } = useLanguage();
  const [value, setValue] = useState(0);

  return (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        data-testid="request-adds-tabs"
      >
        {getTab(0, dictionary.headers)}
        {getTab(1, dictionary.variables)}
        {getTab(2, dictionary.hide)}
      </Tabs>

      <Box>
        <CustomTabPanel value={value} index={0}>
          <HeadersViewer />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <VariablesViewer />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} />
      </Box>
    </>
  );
}

export default DownsideWindowTabs;

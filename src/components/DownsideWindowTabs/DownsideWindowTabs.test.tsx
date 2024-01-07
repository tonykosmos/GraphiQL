import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { DownsideWindowTabs } from './index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '../../theme';
import { LanguageProvider } from '../../providers';

describe('Downside window tabs tests', () => {
  it('Should render tabview for headers and variables editors', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <DownsideWindowTabs />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    const tabs = screen.getByTestId('request-adds-tabs');
    expect(tabs).toBeInTheDocument();
  });

  // fireEvent.click(prettifierButton);
});

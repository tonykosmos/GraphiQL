import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EndpointInput } from './index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from '../../providers';
import { Provider } from 'react-redux';
import { customTheme } from '../../theme';
import { store } from '../../store/store';

describe('Endpoint Input tests', () => {
  it('Should render Endpoint Input', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <EndpointInput />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.getByText('Change Endpoint')).toBeInTheDocument();
  });
});

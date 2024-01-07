import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '../../theme';
import { LanguageProvider } from '../../providers';
import { HeadersViewer } from './HeadersViewer';

describe('Headers viewer tests', () => {
  it('Should render headers editor', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <HeadersViewer />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    const headersTextField = screen.getByText('Headers');

    expect(headersTextField).toBeInTheDocument();
  });
});

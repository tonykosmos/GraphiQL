import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '../../theme';
import { LanguageProvider } from '../../providers';
import { HeadersViewer } from './index';

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
    const headersTextField = screen.getByTestId('headers-editor-container');

    expect(headersTextField).toBeInTheDocument();
  });

  it('Should set headers into store', async () => {
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
    const headersTextField: HTMLDivElement = screen.getByTestId(
      'headers-editor-container'
    );
    const mainTextArea = headersTextField.getElementsByTagName('textarea')[0];
    fireEvent.change(mainTextArea, {
      target: { value: '{"header": "header"}' },
    });
    expect(store.getState().queryData.headersRequest).toBe(
      '{"header": "header"}'
    );
  });
});

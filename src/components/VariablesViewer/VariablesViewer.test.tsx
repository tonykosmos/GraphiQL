import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '../../theme';
import { LanguageProvider } from '../../providers';
import { VariablesViewer } from './VariablesViewer';

describe('Variables viewer tests', () => {
  it('Should render variables editor', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <VariablesViewer />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    const variablesTextField = screen.getByTestId('variables-editor-container');

    expect(variablesTextField).toBeInTheDocument();
  });

  it('Should set variables into store', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <VariablesViewer />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    const variablesTextField: HTMLDivElement = screen.getByTestId(
      'variables-editor-container'
    );
    const mainTextArea = variablesTextField.getElementsByTagName('textarea')[0];
    fireEvent.change(mainTextArea, { target: { value: '{"first": 2}' } });
    expect(store.getState().queryData.variablesRequest).toBe('{"first": 2}');
  });
});

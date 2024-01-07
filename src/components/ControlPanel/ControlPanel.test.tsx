import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { ControlPanel } from './index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from '../../providers';
import { Provider } from 'react-redux';
import { customTheme } from '../../theme';
import { store } from '../../store/store';

describe('Control panel tests', () => {
  it('Should render Control panel with 3 Icons Buttons', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <ControlPanel />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.getAllByTestId('PlayArrowIcon').length).toBe(1);
    expect(screen.getAllByTestId('DeleteIcon').length).toBe(1);
    expect(screen.getAllByTestId('AutoFixHighIcon').length).toBe(1);
    expect((await screen.findAllByRole('button')).length).toBe(3);
  });

  it('Should prettify request body', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <ControlPanel />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    const prettifyButton = screen.getByTestId('AutoFixHighIcon');
    fireEvent.click(prettifyButton);

    const requestBody = store.getState().queryData.bodyRequest;

    expect(requestBody).toBe(
      'query Planets { \n' +
        ' \tallPlanets { \n' +
        ' \t\ttotalCount \n' +
        ' \t\tplanets { \n' +
        ' \t\t\tname \n' +
        ' \t\t} \n' +
        ' \t} \n' +
        ' } \n'
    );
  });

  it('Should clear request and response windows', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <ControlPanel />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    const clearButton = screen.getByTestId('DeleteIcon');
    fireEvent.click(clearButton);

    const requestBody = store.getState().queryData.bodyRequest;
    const responseBody = store.getState().queryData.response;

    expect(requestBody).toBe('');
    expect(responseBody).toBe('');
  });
});

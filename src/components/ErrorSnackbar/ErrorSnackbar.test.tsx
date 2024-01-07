import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { ErrorSnackbar } from './index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from '../../providers';
import { Provider } from 'react-redux';
import { customTheme } from '../../theme';
import { store } from '../../store/store';

describe('Error Snackbar tests', () => {
  it('Should render Error Snackbar', async () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <ErrorSnackbar />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(container.getElementsByTagName('div').length).toBe(0);
    // expect(reducer(undefined, { type: '' })).toEqual({
    //     documentationResponse: '',
    //     isLoadingDocumentation: false,
    //     errorDocumentation: '',
    //   });
    //   const action = {
    //     type: documentationDataFetch.rejected,
    //     payload: 'Error Fetch',
    //   };
    //   console.log(action)
    // const element = await screen.findByText('Error Fetch');

    // screen.debug(element);
    //expect(await screen.findByText('GraphiQL')).toBeInTheDocument();
  });
});

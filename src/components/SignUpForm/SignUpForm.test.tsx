import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '../../theme';
import { LanguageProvider } from '../../providers';
import { SignUpForm } from './index';

describe('Sign up form tests', () => {
  it('Should render sign up form', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <SignUpForm />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    const signUpForm = screen.getByTestId('sign-up-form');

    expect(signUpForm).toBeInTheDocument();
  });
});

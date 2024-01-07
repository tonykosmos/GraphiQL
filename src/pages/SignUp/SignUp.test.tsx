import { act, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SignUp } from './index';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../../providers';

describe('Sign up page tests', () => {
  it('Should render Sign up page with form and submit button', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <LanguageProvider>
            <SignUp />
          </LanguageProvider>
        </BrowserRouter>
      )
    );
    expect(screen.getByTestId('sign-up-form')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm password:')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
    expect(screen.getByRole('button').getAttribute('type')).toBe('submit');
  });
});

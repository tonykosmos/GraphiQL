import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LogIn } from './index';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../../providers';

describe('Log In page tests', () => {
  it('Should render Log In page with form and submit button', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <LanguageProvider>
            <LogIn />
          </LanguageProvider>
        </BrowserRouter>
      )
    );
    expect(screen.getByTestId('log-in-form')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByRole('button').getAttribute('type')).toBe('submit');
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorPage } from './index';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../../providers';

describe('Error page tests', () => {
  it('Should render Error page', async () => {
    render(
      <BrowserRouter>
        <LanguageProvider>
          <ErrorPage />
        </LanguageProvider>
      </BrowserRouter>
    );
    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
});

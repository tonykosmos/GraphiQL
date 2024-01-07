import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GraphiQLPage } from './index';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../../providers';
import { renderWithProviders } from '../../utils/testUtils';

describe('GraphiQL page tests', () => {
  it('Should render GraphiQL page', async () => {
    await act(async () =>
      renderWithProviders(
        <BrowserRouter>
          <LanguageProvider>
            <GraphiQLPage />
          </LanguageProvider>
        </BrowserRouter>
      )
    );
    screen.debug();
    expect(screen.getByLabelText('API Endpoint')).toBeInTheDocument();
    expect(screen.getByText('Change Endpoint')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox').length).toBe(4);
  });
});

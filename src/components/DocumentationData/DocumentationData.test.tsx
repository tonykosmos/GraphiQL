import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DocumentationData from './index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from '../../providers';
import { customTheme } from '../../theme';
import { renderWithProviders } from '../../utils/testUtils';

describe('Documentation data tests', () => {
  const initialStateDocumentation = {
    documentationResponse: 'Test text data',
    isLoadingDocumentation: false,
    errorDocumentation: '',
  };
  it('Should render Documentation data with data', async () => {
    renderWithProviders(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <DocumentationData />
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>,
      { preloadedState: { documentationData: initialStateDocumentation } }
    );
    expect(screen.getByText('Test text data')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox').hasAttribute('readOnly')).toBeTruthy();
  });
});

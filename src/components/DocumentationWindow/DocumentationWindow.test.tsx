import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import DocumentationWindow from './index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from '../../providers';
import { customTheme } from '../../theme';
import { renderWithProviders } from '../../utils/testUtils';

describe('Documentation Window tests', () => {
  const initialStateDocumentation = {
    documentationResponse: 'Test text data',
    isLoadingDocumentation: false,
    errorDocumentation: '',
  };
  it('Should render Documentation Window with data', async () => {
    const setIsOpenWindowHandler = vi.fn();
    renderWithProviders(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <DocumentationWindow
              isOpenWindow={true}
              setIsOpenWindowHandler={setIsOpenWindowHandler}
            />
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>,
      { preloadedState: { documentationData: initialStateDocumentation } }
    );
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    await screen.findByRole('textbox');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox').hasAttribute('readOnly')).toBeTruthy();
  });
  it('Should close Documentation Window', async () => {
    const setIsOpenWindowHandler = vi.fn();
    renderWithProviders(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <DocumentationWindow
              isOpenWindow={true}
              setIsOpenWindowHandler={setIsOpenWindowHandler}
            />
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>,
      { preloadedState: { documentationData: initialStateDocumentation } }
    );
    fireEvent.click(screen.getByTestId('ChevronLeftIcon'));
    expect(setIsOpenWindowHandler).toHaveBeenCalledWith(false);
  });
});

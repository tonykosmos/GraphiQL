import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '../../theme';
import { LanguageProvider } from '../../providers';
import { EditorViewer } from './index';

describe('Editor tests', () => {
  it('Should render request editor', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <EditorViewer isViewer={false} />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    screen.debug();

    const editor = screen.getByText('Request Editor');
    expect(editor).toBeInTheDocument();
  });

  it('Should render response viewer', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <LanguageProvider>
            <Provider store={store}>
              <EditorViewer isViewer={true} />
            </Provider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
    screen.debug();

    const editor = screen.getByText('Response Viewer');
    expect(editor).toBeInTheDocument();
  });
});

import { act, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { routerConfig } from './routerConfig';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../providers';
import { PathRouter } from './index';

describe('Routing tests', () => {
  it('Should render Error Page', async () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/error'],
    });
    await act(async () =>
      render(
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      )
    );
    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
  it('Should render Welcome page with layout', async () => {
    await act(async () =>
      render(
        <LanguageProvider>
          <PathRouter />
        </LanguageProvider>
      )
    );
    expect(screen.getByText('GraphiQL')).toBeInTheDocument();
    expect(screen.getByText('Welcome to GraphiQL App')).toBeInTheDocument();
    expect(screen.getByText('Authors:')).toBeInTheDocument();
  });
});

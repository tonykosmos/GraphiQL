import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

describe('Error boundary tests', () => {
  it('Should render Error boundary', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary>Test</ErrorBoundary>
      </BrowserRouter>
    );
  });
});

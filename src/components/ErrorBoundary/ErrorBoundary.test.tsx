import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorBoundary } from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Error boundary tests', () => {
  it('Should render Error boundary', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary>Test</ErrorBoundary>
      </BrowserRouter>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

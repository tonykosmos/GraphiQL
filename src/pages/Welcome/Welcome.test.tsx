import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Welcome } from './Welcome';
import { BrowserRouter } from 'react-router-dom';

describe('Welcome page tests', () => {
  it('Should render Welcome page', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
  });
});

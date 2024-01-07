import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LoadingSpinner } from './index';

describe('Loading Spinner tests', () => {
  it('Should render loading spinner', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container.getElementsByTagName('div').length).toBe(2);
  });
});

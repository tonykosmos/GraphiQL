import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { Footer } from './index';

describe('Footer tests', () => {
  it('Should render Footer', async () => {
    render(<Footer />);
    expect(await screen.findByText('2023')).toBeInTheDocument();
  });
});

import { fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { LanguageSelector } from './index';

describe('Language Selector tests', () => {
  it('Should render Language Selector', async () => {
    render(<LanguageSelector />);
    expect(await screen.findByText('English')).toBeInTheDocument();
  });
  it('Should show list with languages', async () => {
    const { getByRole } = render(<LanguageSelector />);
    expect(await screen.findByText('English')).toBeInTheDocument();
    fireEvent.mouseDown(getByRole('combobox'));
    const listbox = within(screen.getByRole('presentation')).getByRole(
      'listbox'
    );
    const options = within(listbox).getAllByRole('option');
    const optionValues = options.map((li) => li.getAttribute('data-value'));
    expect(optionValues).toEqual(['en', 'ru']);
  });
});

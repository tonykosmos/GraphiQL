import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import reducer from './documentationSlice/documentationSlice';

describe('Redux toolkit tests', () => {
  it('Should return default state when passed an empty action', async () => {
    expect(reducer(undefined, { type: '' })).toEqual({
      documentationResponse: '',
      isLoadingDocumentation: false,
      errorDocumentation: '',
    });
  });
});

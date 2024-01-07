import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import DownsideWindowTabs from './DownsideWindowTabs';

describe('Error boundary tests', () => {
  it('Should render tabview for headers and variables editors', () => {
    render(
      <Provider store={store}>
        <DownsideWindowTabs />
      </Provider>
    );
  });

  screen.debug();

  // fireEvent.click(prettifierButton);
});

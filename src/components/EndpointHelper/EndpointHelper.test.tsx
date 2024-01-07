import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EndpointHelper } from './index';

describe('Endpoint Helper tests', () => {
  it('Should render Endpoint Helper with data', () => {
    const openWindowHandler = vi.fn();
    const { container } = render(
      <EndpointHelper
        isWindowOpen={true}
        openWindowHandler={openWindowHandler}
      />
    );
    expect(container.getElementsByTagName('p').length).not.toBe(0);
  });
  it('Should close Endpoint helper window', async () => {
    const openWindowHandler = vi.fn();
    render(
      <EndpointHelper
        isWindowOpen={true}
        openWindowHandler={openWindowHandler}
      />
    );
    fireEvent.click(screen.getByTestId('CloseIcon'));
    expect(openWindowHandler).toHaveBeenCalledWith(false);
  });
});

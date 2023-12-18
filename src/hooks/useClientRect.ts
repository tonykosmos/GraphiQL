import { useCallback, useEffect, useState } from 'react';

type ClientRectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

function getClientRect<T extends HTMLElement>(element?: T): ClientRectResult {
  let rect: ClientRectResult = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  };
  if (element) {
    rect = element.getBoundingClientRect();
  }
  return rect;
}

export function useClientRect<T extends HTMLElement>(
  ref: React.RefObject<T>
): ClientRectResult {
  const [clientRect, setClientRect] = useState<ClientRectResult>(
    ref && ref.current ? getClientRect(ref.current) : getClientRect()
  );

  const handleScroll = useCallback(() => {
    if (!ref.current) {
      return;
    }
    setClientRect(getClientRect(ref.current));
  }, [ref]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return clientRect;
}

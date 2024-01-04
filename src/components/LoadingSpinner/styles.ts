import { keyframes, styled } from '@mui/material';

export const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SpinnerContainer = styled('div')(() => ({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  height: 350,
}));

export const Loading = styled('div')(() => ({
  width: 50,
  height: 50,
  border: '10 solid var(--spinner-border-color)',
  borderTop: '10 solid var(--spinner-border-top-color)',
  borderRadius: '50%',
  animation: `${spinner} 1.5s linear infinite`,
}));

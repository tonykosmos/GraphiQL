import { keyframes, styled } from '@mui/material';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export function LoadingSpinner() {
  const SpinnerContainer = styled('div')(() => ({
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
  }));

  const LoadingSpinner = styled('div')(() => ({
    width: 50,
    height: 50,
    border: 10,
    borderStyle: 'solid',
    borderColor: 'var(--spinner-border-color)',
    borderTop: 10,
    borderTopStyle: 'solid',
    borderTopColor: 'var(--spinner-border-top-color)',
    borderRadius: '50%',
    animation: `${spinner} 1.5s linear infinite`,
  }));

  return (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  );
}

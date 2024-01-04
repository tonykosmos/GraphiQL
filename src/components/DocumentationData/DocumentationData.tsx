import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

import { styled } from '@mui/material';

export function DocumentationData() {
  const { documentationResponse } = useAppSelector(
    (state: RootState) => state.documentationData
  );

  const CustomTextArea = styled('textarea')(({ theme }) => ({
    width: 370,
    maxWidth: 370,
    height: 'max-content',
    flex: 1,
    overflow: 'auto',
    fontSize: 16,
    fontWeight: 400,
    padding: theme.spacing(1, 1.5),
    backgroundColor: 'var(--main-bg-color)',
    color: 'var(--main-font-color)',
  }));
  return <CustomTextArea value={documentationResponse} readOnly />;
}

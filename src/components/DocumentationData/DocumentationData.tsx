import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { documentationDataFetch } from '../../store/documentationSlice/documentationSlice';
import { useEffect } from 'react';
import { styled } from '@mui/material';

export function DocumentationData() {
  const { apiEndpoint } = useAppSelector((state: RootState) => state.queryData);
  const { response } = useAppSelector(
    (state: RootState) => state.documentationData
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(documentationDataFetch({ apiEndpoint }));
  }, [response]);

  const CustomTestArea = styled('textarea')(({ theme }) => ({
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
  return <CustomTestArea value={response} readOnly />;
}

import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { CustomTextArea } from './styles';

export function DocumentationData() {
  const { documentationResponse } = useAppSelector(
    (state: RootState) => state.documentationData
  );

  return <CustomTextArea value={documentationResponse} readOnly />;
}

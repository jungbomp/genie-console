import { CommonProps } from 'src/components/types';

export interface AdditionalRequestEditorProps extends CommonProps {
  additionalRequest?: string;
  onAdditionalRequestChange?: (request?: string) => void;
}

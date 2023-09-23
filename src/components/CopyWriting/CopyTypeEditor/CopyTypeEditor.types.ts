import { CommonProps } from 'src/components/types';

export interface CopyTypeEditorProps extends CommonProps {
  value?: 'HEAD' | 'BODY' | 'SYNOPSIS';
  onClick?: (type: 'HEAD' | 'BODY' | 'SYNOPSIS') => void;
}

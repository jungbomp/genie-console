import { CommonProps } from 'src/components/types';

export interface GenerateOptionEditorProps extends CommonProps {
  value?: 'HEAD' | 'BODY' | 'SYNOPSIS';
}

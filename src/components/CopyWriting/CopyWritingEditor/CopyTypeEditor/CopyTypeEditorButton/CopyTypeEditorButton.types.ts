import { CommonProps } from 'src/components/types';

export interface CopyTypeEditorHeadButtonProps extends CommonProps {
  type?: 'HEAD' | 'BODY' | 'SYNOPSIS';
  active?: boolean;
  headCopy: string;
  secondaryCopy: string;
}

import { CommonProps } from 'src/components/types';

export interface CopyTypeEditorButtonProps extends CommonProps {
  type?: 'HEAD' | 'BODY' | 'SYNOPSIS';
  active?: boolean;
  headCopy: string;
  secondaryCopy: string;
  onClick?: () => void;
}

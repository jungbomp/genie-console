import type { CommonProps } from 'src/components/types';
import type { CopyType } from 'src/components/CopyWriting/CopyWriting.types';

export interface CopyTypeEditorProps extends CommonProps {
  value?: CopyType;
  onChange?: (type: CopyType) => void;
}

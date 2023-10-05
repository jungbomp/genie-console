import type { CommonProps } from 'src/components/types';
import type { CopyWritingOption } from '../CopyWriting.types';

export interface CopyWritingEditorProps extends CommonProps {
  onClickGenerateCopyWrite?: (option: CopyWritingOption) => void;
}

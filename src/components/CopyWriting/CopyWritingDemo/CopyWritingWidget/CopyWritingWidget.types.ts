import type { CommonProps } from 'src/components/types';
import type { CopyType } from 'src/components/CopyWriting/CopyWriting.types';

export interface CopyWritingWidgetProps extends CommonProps {
  title: string;
  copyType: CopyType;
  copyWrite: string;
  imgUrl?: string;
}

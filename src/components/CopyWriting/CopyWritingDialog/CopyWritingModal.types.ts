import type { CommonProps } from 'src/components/types';

export interface CopyWritingModalProps extends CommonProps {
  open?: boolean;
  copyWrite: string;
  onBackdropClick?: () => void;
}

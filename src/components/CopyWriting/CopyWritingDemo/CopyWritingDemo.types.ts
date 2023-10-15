import type { CommonProps } from 'src/components/types';

export interface CopyWritingDemoProps extends CommonProps {
  open?: boolean;
  onBackdropClick?: () => void;
}

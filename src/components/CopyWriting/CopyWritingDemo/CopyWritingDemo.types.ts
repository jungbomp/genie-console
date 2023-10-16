import type { CommonProps } from 'src/components/types';

export interface CopyWritingDemoPreset {
  [type: string]: {
    [title: string]: {
      backgroundImage: string;
    };
  };
}

export interface CopyWritingDemoProps extends CommonProps {
  open?: boolean;
  onBackdropClick?: () => void;
}

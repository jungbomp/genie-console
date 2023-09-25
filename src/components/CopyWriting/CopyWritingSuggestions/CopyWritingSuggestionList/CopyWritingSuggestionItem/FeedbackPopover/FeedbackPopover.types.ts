import { CommonProps } from 'src/components/types';

export interface FeedbackPopoverProps extends CommonProps {
  anchorElement?: HTMLButtonElement;
  onClose?: () => void;
}

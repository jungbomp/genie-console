import type { CommonProps } from 'src/components/types';

import type { FeedbackItem } from '../CopyWritingSuggestionItem.types';

export interface FeedbackPopoverProps extends CommonProps {
  anchorElement?: HTMLButtonElement;
  value?: FeedbackItem[];
  onChange?: (changedValue: FeedbackItem[]) => void;
  onClose?: () => void;
}

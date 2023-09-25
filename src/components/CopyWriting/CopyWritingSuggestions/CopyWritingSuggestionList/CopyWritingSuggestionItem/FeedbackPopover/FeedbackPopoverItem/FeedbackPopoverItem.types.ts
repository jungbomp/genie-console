import type { CommonProps } from 'src/components/types';
import type { FeedbackItem, FeedbackType } from '../../CopyWritingSuggestionItem.types';

export interface FeedbackPopoverItemProps extends CommonProps {
  type: FeedbackType;
  checked?: boolean;
  etcFeedback?: string;
  onChange?: (changedValue?: FeedbackItem) => void;
}

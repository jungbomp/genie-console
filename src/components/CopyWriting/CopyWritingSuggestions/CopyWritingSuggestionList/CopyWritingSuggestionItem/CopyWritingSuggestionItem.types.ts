import { CommonProps } from 'src/components/types';

export type FeedbackType = 'INCORRECT' | 'AWKWARD' | 'NOT_REFLECTED' | 'ETC';

export interface FeedbackItem {
  type: FeedbackType;
  etcFeedback?: string;
}

export interface CopyWritingSuggestionItemProps extends CommonProps {
  genieSuggestion?: boolean;
  copyWrite: string;
  onClick?: () => void;
}

import type { CommonProps } from 'src/components/types';
import type { CopyWritingSuggestionItem } from 'src/components/CopyWriting/CopyWriting.types';

export interface CopyWritingSuggestionListProps extends CommonProps {
  suggestions: CopyWritingSuggestionItem[];
  showGenerateMoreButton?: boolean;
  onClickGenerateMoreCopyWrite?: () => void;
}

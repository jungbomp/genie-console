import type { CommonProps } from 'src/components/types';

export interface ThemeSuggestionListViewProps extends CommonProps {
  themeSuggestions?: string[];
  onClickMoreSuggestions?: () => void;
}

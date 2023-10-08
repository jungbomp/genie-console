import type { CommonProps } from 'src/components/types';

export interface ThemeSuggestionListViewProps extends CommonProps {
  themeSuggestions?: string[];
  showGenerateMoreButton?: boolean;
  onClickMoreSuggestions?: () => void;
}

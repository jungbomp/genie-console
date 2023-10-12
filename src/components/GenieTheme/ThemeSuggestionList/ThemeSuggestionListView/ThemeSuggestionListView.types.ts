import type { CommonProps } from 'src/components/types';

export interface ThemeSuggestionListViewProps extends CommonProps {
  themeSuggestions?: string[];
  selectedSuggestion?: string;
  showGenerateMoreButton?: boolean;
  onClickSuggestion?: (value: string) => void;
  onClickMoreSuggestions?: () => void;
}

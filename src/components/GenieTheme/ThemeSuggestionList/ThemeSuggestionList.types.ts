import type { CommonProps } from 'src/components/types';

export interface ThemeSuggestionListProps extends CommonProps {
  themeSuggestions?: string[];
  showGenerateMoreButton?: boolean;
  onClickGenerateMoreThemeSuggestion?: () => void;
  onClickApply?: (suggestion: string) => void;
}

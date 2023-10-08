import type { CommonProps } from 'src/components/types';
import type { GenieThemeVodRecommendationItem } from 'src/components/GenieTheme/GenieTheme.types';

export interface ContentSuggestionListProps extends CommonProps {
  vodRecommendationItems: GenieThemeVodRecommendationItem[];
  onChangeSelectedItems?: (selectedVodRecommendationItems: GenieThemeVodRecommendationItem[]) => void;
  onClickGenerateThemeSuggestions?: (values: string[]) => void;
}

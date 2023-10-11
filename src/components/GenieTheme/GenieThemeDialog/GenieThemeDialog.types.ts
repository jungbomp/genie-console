import type { CommonProps } from 'src/components/types';
import type { GenieThemeVodRecommendationItem } from '../GenieTheme.types';

export interface GenieThemeDialogProps extends CommonProps {
  isOpen: boolean;
  themeTitle: string;
  themeItems: GenieThemeVodRecommendationItem[];
}

import type { CommonProps } from 'src/components/types';
import { GenieThemeVodRecommendationItem } from '../../GenieTheme.types';

export interface GenieThemeWidgetProps extends CommonProps {
  themeWidgetTitle: string;
  themeWidgetItems: GenieThemeVodRecommendationItem[];
}

import type { CommonProps } from 'src/components/types';

import { TargetTypes } from './GenieTheme.constants';

export type TargetType = typeof TargetTypes[keyof typeof TargetTypes];

export interface GenieThemeDemoOption {
  title: string;
  item: GenieThemeVodRecommendationItem[];
}

export interface GenieThemeVodRecommendationItem {
  title: string;
  imgUrl: string;
  titleImgUrl: string;
  rating: number;
}

export interface GenieThemeProps extends CommonProps {}

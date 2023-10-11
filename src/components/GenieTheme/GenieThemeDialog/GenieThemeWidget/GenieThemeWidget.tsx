import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { GenieThemeVodRecommendationItem } from 'src/components/GenieTheme/GenieTheme.types';

import GenieThemeWidgetItem from './GenieThemeWidgetItem/GenieThemeWidgetItem';

import type { GenieThemeWidgetProps } from './GenieThemeWidget.types';

import styles from './GenieThemeWidget.scss';

const GenieThemeWidget: React.FC<GenieThemeWidgetProps> = ({ className, themeWidgetTitle, themeWidgetItems }) => {
  return (
    <Box className={Classnames(styles.genieThemeWidget, className)}>
      <Typography>{themeWidgetTitle}</Typography>
      <Box>
        {themeWidgetItems.map(({ imgUrl, titleImgUrl }: GenieThemeVodRecommendationItem) => (
          <GenieThemeWidgetItem key={imgUrl} itemImgUrl={imgUrl} titleImgUrl={titleImgUrl} />
        ))}
      </Box>
    </Box>
  );
};

export default GenieThemeWidget;

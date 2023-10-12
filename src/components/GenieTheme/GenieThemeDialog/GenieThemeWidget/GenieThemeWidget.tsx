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
      <Box>
        <Typography className={styles.title}>{themeWidgetTitle}</Typography>
      </Box>
      <Box className={styles.itemsWrapper}>
        {themeWidgetItems.map(({ imgUrl, titleImgUrl, title }: GenieThemeVodRecommendationItem) => (
          <GenieThemeWidgetItem key={imgUrl} itemImgUrl={imgUrl} titleImgUrl={titleImgUrl} itemTitle={title} />
        ))}
      </Box>
    </Box>
  );
};

export default GenieThemeWidget;

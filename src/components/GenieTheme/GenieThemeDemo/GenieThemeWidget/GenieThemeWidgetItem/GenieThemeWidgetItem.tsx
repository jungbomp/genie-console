import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { GenieThemeWidgetItemProps } from './GenieThemeWidgetItem.types';

import styles from './GenieThemeWidgetItem.scss';

const GenieThemeWidgetItem: React.FC<GenieThemeWidgetItemProps> = ({
  className,
  itemImgUrl,
  titleImgUrl,
  itemTitle,
}) => {
  return (
    <Box className={Classnames(styles.genieThemeWidgetItem, className)}>
      <img className={styles.img} src={itemImgUrl} alt={itemTitle} loading='lazy' />
      {titleImgUrl ? (
        <Box className={styles.titleImgWrapper}>
          <img className={styles.titleImg} src={titleImgUrl} alt={itemTitle} loading='lazy' />
        </Box>
      ) : (
        <Box className={styles.titleWrapper}>
          <Typography className={styles.title}>{itemTitle}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default GenieThemeWidgetItem;

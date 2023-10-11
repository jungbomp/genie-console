import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import type { GenieThemeWidgetItemProps } from './GenieThemeWidgetItem.types';

import styles from './GenieThemeWidgetItem.scss';

const GenieThemeWidgetItem: React.FC<GenieThemeWidgetItemProps> = ({ className }) => {
  return <Box className={Classnames(styles.genieThemeWidgetItem, className)} />;
};

export default GenieThemeWidgetItem;

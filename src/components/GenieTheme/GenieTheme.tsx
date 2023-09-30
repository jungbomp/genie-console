import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import ThemeSuggestion from './ThemeSuggestion/ThemeSuggestion';

import type { GenieThemeProps } from './GenieTheme.types';

import styles from './GenieTheme.scss';

const GenieTheme: React.FC<GenieThemeProps> = ({ className }) => {
  return (
    <Box className={Classnames(styles.genieTheme, className)}>
      <ThemeSuggestion />
    </Box>
  );
};

export default GenieTheme;

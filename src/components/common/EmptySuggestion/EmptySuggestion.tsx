import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import genieTvInitialSymbolWhite2 from 'images/Genie_TV_Initial_Symbol_White2.png';

import type { EmptySuggestionProps } from './EmptySuggestion.types';

import styles from './EmptySuggestion.scss';

const EmptySuggestion: React.FC<EmptySuggestionProps> = ({ className, subtitle }) => (
  <Box className={Classnames(styles.emptySuggestion, className)}>
    <Box className={styles.titleWrapper}>
      <img className={styles.logo} src={genieTvInitialSymbolWhite2} alt='GENIE' />
    </Box>
    <Box className={styles.subtitleWrapper}>
      <Typography className={styles.subtitle}>{subtitle}</Typography>
    </Box>
  </Box>
);

export default EmptySuggestion;

import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import genieTvInitialSymbolWhite from 'images/Genie_TV_Initial_Symbol_White.png';

import type { EmptySuggestionProps } from './EmptySuggestion.types';

import styles from './EmptySuggestion.scss';

const EmptySuggestion: React.FC<EmptySuggestionProps> = ({ className, title, subtitle }) => (
  <Box className={Classnames(styles.emptySuggestion, className)}>
    <Box className={styles.titleWrapper}>
      <Box className={styles.logoWrapper}>
        <img className={styles.logo} src={genieTvInitialSymbolWhite} alt='GENIE' />
      </Box>
      <Typography className={styles.title}>{title}</Typography>
    </Box>
    <Box className={styles.subtitleWrapper}>
      <Typography className={styles.subtitle}>{subtitle}</Typography>
    </Box>
  </Box>
);

export default EmptySuggestion;

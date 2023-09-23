import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import genieTvInitialSymbolWhite from 'images/genie_tv_initial_symbol_white.png';

import type { EmptySuggestionProps } from './EmptySuggestion.types';

import styles from './EmptySuggestion.scss';

const EmptySuggestion: React.FC<EmptySuggestionProps> = ({ className }) => (
  <Box className={Classnames(styles.emptySuggestion, className)}>
    <Box className={styles.titleWrapper}>
      <Box className={styles.logoWrapper}>
        <img className={styles.logo} src={genieTvInitialSymbolWhite} alt='GENIE' />
      </Box>
      <Typography className={styles.title}>믿음 주는 AI 지니</Typography>
    </Box>
    <Box className={styles.subtitleWrapper}>
      <Typography className={styles.subtitle}>지니카피라이팅 폼을 이용하면 우측에 다양한 문구가 생성됩니다.</Typography>
    </Box>
  </Box>
);

export default EmptySuggestion;

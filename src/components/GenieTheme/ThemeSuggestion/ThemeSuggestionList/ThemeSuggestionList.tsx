import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';

import genieTvInitialSymbolWhite from 'images/genie_tv_initial_symbol_white.png';
import { Download } from 'src/Icon';

import type { ThemeSuggestionListProps } from './ThemeSuggestionList.types';

import styles from './ThemeSuggestionList.scss';

const ThemeSuggestionList: React.FC<ThemeSuggestionListProps> = ({ className }) => {
  return (
    <Box className={Classnames(styles.themeSuggestionList, className)}>
      <Box className={styles.header}>
        <FormLabel className={styles.label}>추천 테마명</FormLabel>
      </Box>
      <Box className={styles.content}>
        <Box className={styles.empty}>
          <Box className={styles.logoWrapper}>
            <img className={styles.logo} src={genieTvInitialSymbolWhite} alt='GENIE' />
          </Box>
        </Box>
        <Box className={styles.buttonWrapper}>
          <Button className={styles.submitButton} variant='contained' startIcon={<Download />} disabled={true}>
            적용하기
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeSuggestionList;

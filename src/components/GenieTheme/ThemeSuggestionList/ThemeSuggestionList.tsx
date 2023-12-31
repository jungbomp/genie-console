import React, { useState } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';

import genieTvInitialSymbolWhite from 'images/Genie_TV_Initial_Symbol_White.png';
import { Download } from 'src/Icon';

import ThemeSuggestionListView from './ThemeSuggestionListView/ThemeSuggestionListView';

import type { ThemeSuggestionListProps } from './ThemeSuggestionList.types';

import styles from './ThemeSuggestionList.scss';

const ThemeSuggestionList: React.FC<ThemeSuggestionListProps> = ({
  className,
  themeSuggestions = [],
  showGenerateMoreButton = true,
  onClickGenerateMoreThemeSuggestion = () => {},
  onClickApply = () => {},
}) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>();

  const onClickSuggestion = (value: string) => {
    setSelectedSuggestion(selectedSuggestion === value ? '' : value);
  };

  const onClickApplyBtn = () => {
    if (selectedSuggestion) {
      onClickApply(selectedSuggestion);
    }

    setSelectedSuggestion('');
  };

  return (
    <Box className={Classnames(styles.themeSuggestionList, className)}>
      <Box className={styles.header}>
        <FormLabel className={styles.label}>추천 테마명</FormLabel>
      </Box>
      <Box className={styles.content}>
        {_.isEmpty(themeSuggestions) ? (
          <Box className={styles.empty}>
            <Box className={styles.logoWrapper}>
              <img className={styles.logo} src={genieTvInitialSymbolWhite} alt='GENIE' />
            </Box>
          </Box>
        ) : (
          <ThemeSuggestionListView
            themeSuggestions={themeSuggestions}
            selectedSuggestion={selectedSuggestion}
            showGenerateMoreButton={showGenerateMoreButton}
            onClickSuggestion={onClickSuggestion}
            onClickMoreSuggestions={onClickGenerateMoreThemeSuggestion}
          />
        )}
        <Box className={styles.buttonWrapper}>
          <Button
            className={styles.submitButton}
            variant='contained'
            startIcon={<Download />}
            disabled={_.isEmpty(themeSuggestions) || !selectedSuggestion}
            onClick={onClickApplyBtn}
          >
            적용하기
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeSuggestionList;

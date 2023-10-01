import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import StateChip from 'src/components/common/StateChip';
import { AddComment } from 'src/Icon';

import type { ThemeSuggestionListViewProps } from './ThemeSuggestionListView.types';

import styles from './ThemeSuggestionListView.scss';

const ThemeSuggestionListView: React.FC<ThemeSuggestionListViewProps> = ({
  className,
  themeSuggestions = [],
  onClickMoreSuggestions = () => {},
}) => {
  return (
    <Box className={Classnames(styles.themeSuggestionListView, className)}>
      {themeSuggestions.map((themeSuggestion: string) => (
        <StateChip key={themeSuggestion} title={themeSuggestion} size='large' />
      ))}
      <Button
        className={styles.moreGenerationButton}
        variant='outlined'
        startIcon={<AddComment className={styles.icon} />}
        onClick={onClickMoreSuggestions}
      >
        적용하기
      </Button>
    </Box>
  );
};

export default ThemeSuggestionListView;

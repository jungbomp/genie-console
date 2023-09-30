import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import ContentSuggestionList from './ContentSuggestionList/ContentSuggestionList';
import ThemeSuggestionList from './ThemeSuggestionList/ThemeSuggestionList';

import type { ThemeSuggestionProps } from './ThemeSuggestion.types';

import styles from './ThemeSuggestion.scss';

const ThemeSuggestion: React.FC<ThemeSuggestionProps> = ({ className }) => {
  return (
    <Box className={Classnames(styles.themeSuggestion, className)}>
      <ContentSuggestionList />
      <Divider orientation='vertical' flexItem={true} />
      <ThemeSuggestionList />
    </Box>
  );
};

export default ThemeSuggestion;

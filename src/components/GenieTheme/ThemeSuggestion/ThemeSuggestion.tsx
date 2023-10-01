import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import ContentSuggestionList from './ContentSuggestionList/ContentSuggestionList';
import ThemeSuggestionList from './ThemeSuggestionList/ThemeSuggestionList';

import type { ThemeSuggestionProps } from './ThemeSuggestion.types';

import styles from './ThemeSuggestion.scss';

const ThemeSuggestion: React.FC<ThemeSuggestionProps> = ({ className }) => {
  const themeSuggestion = [
    '가나다라',
    '마바사',
    '비밀요원들의 숨막히는 미션과 액션',
    '추천 테마명',
    '다른 추천 테마명',
  ];

  return (
    <Box className={Classnames(styles.themeSuggestion, className)}>
      <ContentSuggestionList />
      <Divider orientation='vertical' flexItem={true} />
      <ThemeSuggestionList themeSuggestions={themeSuggestion} />
    </Box>
  );
};

export default ThemeSuggestion;

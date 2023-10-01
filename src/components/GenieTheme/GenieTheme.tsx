import React, { useState } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import GenieThemeHeader from './GenieThemeHeader/GenieThemeHeader';
import ThemeSuggestion from './ThemeSuggestion/ThemeSuggestion';

import type { GenieThemeProps } from './GenieTheme.types';

import styles from './GenieTheme.scss';

const GenieTheme: React.FC<GenieThemeProps> = ({ className }) => {
  const [targets, setTargets] = useState<string[]>(['타겟1', '타겟2', '타겟3']);
  const [keywords, setKeywords] = useState<string[]>([]);

  const onTargetAdd = (target: string) => {
    setTargets([...new Set([...targets, target]).values()]);
  };

  const onKeywordAdd = (keyword: string) => {
    setKeywords([...new Set([...keywords, keyword]).values()]);
  };

  const onTargetDelete = (target: string) => {
    setTargets(targets.filter((value: string) => value !== target));
  };

  const onKeywordDelete = (keyword: string) => {
    setKeywords(keywords.filter((value: string) => value !== keyword));
  };

  return (
    <Box className={Classnames(styles.genieTheme, className)}>
      <GenieThemeHeader
        targets={targets}
        keywords={keywords}
        onTargetAdd={onTargetAdd}
        onKeywordAdd={onKeywordAdd}
        onTargetDelete={onTargetDelete}
        onKeywordDelete={onKeywordDelete}
      />
      <ThemeSuggestion />
    </Box>
  );
};

export default GenieTheme;

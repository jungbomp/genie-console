import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import StateChip from 'src/components/common/StateChip/StateChip';
import { AddComment } from 'src/Icon';

import CopyWritingSuggestionItem from './CopyWritingSuggestionItem/CopyWritingSuggestionItem';

import type { CopyWritingSuggestionListProps } from './CopyWritingSuggestionList.types';

import styles from './CopyWritingSuggestionList.scss';

const CopyWritingSuggestionList: React.FC<CopyWritingSuggestionListProps> = ({ className, suggestions }) => {
  return (
    <Box className={Classnames(styles.copyWritingSuggestionList, className)}>
      <Box className={styles.copyWritingSuggestionListWrapper}>
        {suggestions.map(({ genieSuggestion, copyWrite }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CopyWritingSuggestionItem key={index} genieSuggestion={genieSuggestion} copyWrite={copyWrite} />
        ))}
      </Box>
      <Box className={styles.addButtonWrapper}>
        <StateChip
          className={styles.addCommentButton}
          icon={<AddComment className={styles.icon} />}
          title='카피 더 생성하기'
          size='large'
        />
      </Box>
    </Box>
  );
};

export default CopyWritingSuggestionList;

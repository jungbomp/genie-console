import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';

import EmptySuggestion from 'src/components/common/EmptySuggestion/EmptySuggestion';

import CopyWritingSuggestionList from './CopyWritingSuggestionList/CopyWritingSuggestionList';

import type { CopyWritingSuggestionsProps } from './CopyWritingSuggestions.types';

import styles from './CopyWritingSuggestions.scss';

const CopyWritingSuggestions: React.FC<CopyWritingSuggestionsProps> = ({
  className,
  suggestions = [],
  showGenerateMoreButton,
  onClickGenerateMoreCopyWrite = () => {},
}) => {
  return (
    <Box
      className={Classnames(
        styles.copyWritingSuggestion,
        { [styles.emptySuggestion]: _.isEmpty(suggestions) },
        className,
      )}
    >
      {_.isEmpty(suggestions) ? (
        <EmptySuggestion
          title='믿음 주는 AI 지니'
          subtitle='지니카피라이팅 폼을 이용하면 우측에 다양한 문구가 생성됩니다.'
        />
      ) : (
        <CopyWritingSuggestionList
          suggestions={suggestions}
          showGenerateMoreButton={showGenerateMoreButton}
          onClickGenerateMoreCopyWrite={onClickGenerateMoreCopyWrite}
        />
      )}
    </Box>
  );
};

export default CopyWritingSuggestions;

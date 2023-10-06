import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';

import EmptySuggestion from './EmptySuggestion/EmptySuggestion';
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
        <EmptySuggestion />
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

import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Download } from 'src/Icon';
import EmptySuggestion from 'src/components/common/EmptySuggestion/EmptySuggestion';
import type { CopyWritingSuggestionItem } from 'src/components/CopyWriting/CopyWriting.types';

import CopyWritingSuggestionList from './CopyWritingSuggestionList/CopyWritingSuggestionList';

import type { CopyWritingSuggestionsProps } from './CopyWritingSuggestions.types';

import styles from './CopyWritingSuggestions.scss';

const CopyWritingSuggestions: React.FC<CopyWritingSuggestionsProps> = ({
  className,
  suggestions = [],
  showGenerateMoreButton,
  onClickCopyWritingSuggestion = () => {},
  onClickGenerateMoreCopyWrite = () => {},
  onClickApply = () => {},
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
        <>
          <CopyWritingSuggestionList
            suggestions={suggestions}
            showGenerateMoreButton={showGenerateMoreButton}
            onClickCopyWritingSuggestion={onClickCopyWritingSuggestion}
            onClickGenerateMoreCopyWrite={onClickGenerateMoreCopyWrite}
          />
          <Box className={styles.buttonWrapper}>
            <Button
              className={styles.submitButton}
              variant='contained'
              startIcon={<Download />}
              disabled={
                _.isEmpty(suggestions) ||
                !suggestions.some(({ genieSuggestion }: CopyWritingSuggestionItem) => genieSuggestion)
              }
              onClick={onClickApply}
            >
              적용하기
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CopyWritingSuggestions;

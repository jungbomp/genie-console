import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';

import EditableStateChip from '../../EditableStateChip/EditableStateChip';

import type { CopyWordCountEditorProps } from './CopyWordCountEditor.types';

import styles from './CopyWordCountEditor.scss';

const CopyWordCountEditor: React.FC<CopyWordCountEditorProps> = ({
  className,
  wordCount,
  smallWordCountOption,
  largeWordCountOption,
  onWordCountChange = () => {},
}) => {
  const getOnChangeFunc =
    (count: number): (() => void) =>
    () =>
      onWordCountChange(wordCount === count ? undefined : count);

  return (
    <Box className={Classnames(styles.copyWordCountEditor, className)}>
      <FormLabel>문장 단어수 (선택)</FormLabel>
      <Box className={styles.copyWordChipWrapper}>
        <StateChip
          title={`${smallWordCountOption}자 내외`}
          subtitle={`${smallWordCountOption * 2} bytes`}
          size='large'
          active={wordCount !== undefined && wordCount <= smallWordCountOption}
          onClick={getOnChangeFunc(smallWordCountOption)}
        />
        <StateChip
          title={`${largeWordCountOption}자 내외`}
          subtitle={`${largeWordCountOption * 2} bytes`}
          size='large'
          active={wordCount !== undefined && wordCount > smallWordCountOption && wordCount <= largeWordCountOption}
          onClick={getOnChangeFunc(largeWordCountOption)}
        />
        <EditableStateChip
          title='직접입력'
          active={wordCount !== undefined && wordCount > largeWordCountOption}
          value={wordCount !== undefined && wordCount > largeWordCountOption ? `${wordCount}` : undefined}
          onChange={(value?: string) => onWordCountChange(_.isEmpty(value) ? undefined : Number(value))}
        />
      </Box>
    </Box>
  );
};

export default CopyWordCountEditor;

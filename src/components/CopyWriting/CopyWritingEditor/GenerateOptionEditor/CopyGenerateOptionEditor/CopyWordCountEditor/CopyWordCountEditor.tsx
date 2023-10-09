import React from 'react';
import Classnames from 'classnames';
// import _ from 'lodash';

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
  const onValueChange = (value?: string) => {
    if (_.isEmpty(value)) {
      onWordCountChange(undefined);
      return;
    }

    // @ts-ignore
    const normalizedValue = value
      .match(/\d*/g)
      .filter((v) => !!v)
      .shift();
    onWordCountChange(Number(normalizedValue));
  };

  return (
    <Box className={Classnames(styles.copyWordCountEditor, className)}>
      <FormLabel>문장 단어수 (선택)</FormLabel>
      <Box className={styles.copyWordChipWrapper}>
        <StateChip
          title={`${smallWordCountOption}자 내외`}
          subtitle={`${smallWordCountOption * 2} bytes`}
          size='large'
          active={wordCount !== undefined && wordCount <= smallWordCountOption}
          onClick={() => onWordCountChange(wordCount === smallWordCountOption ? undefined : smallWordCountOption)}
        />
        <StateChip
          title={`${largeWordCountOption}자 내외`}
          subtitle={`${largeWordCountOption * 2} bytes`}
          size='large'
          active={wordCount !== undefined && wordCount > smallWordCountOption && wordCount <= largeWordCountOption}
          onClick={() => onWordCountChange(wordCount === largeWordCountOption ? undefined : largeWordCountOption)}
        />
        <EditableStateChip
          title='직접입력'
          active={wordCount !== undefined && wordCount > largeWordCountOption}
          value={wordCount !== undefined && wordCount > largeWordCountOption ? `${wordCount}` : undefined}
          onChange={onValueChange}
        />
      </Box>
    </Box>
  );
};

export default CopyWordCountEditor;

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
          title='40자 이내'
          subtitle='125 byte'
          size='large'
          active={wordCount !== undefined && wordCount <= 40}
          onClick={getOnChangeFunc(40)}
        />
        <StateChip
          title='60자 이내'
          subtitle='200 byte'
          size='large'
          active={wordCount !== undefined && wordCount > 40 && wordCount <= 60}
          onClick={getOnChangeFunc(60)}
        />
        <EditableStateChip
          title='직접입력'
          active={wordCount !== undefined && wordCount > 60}
          value={wordCount !== undefined && wordCount > 60 ? `${wordCount}` : undefined}
          onChange={(value?: string) => onWordCountChange(_.isEmpty(value) ? undefined : Number(value))}
        />
      </Box>
    </Box>
  );
};

export default CopyWordCountEditor;

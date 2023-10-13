import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';

import EditableStateChip from '../EditableStateChip/EditableStateChip';

import type { SynopsisGenerateOptionEditorProps } from './SynopsisGenerateOptionEditor.types';

import styles from './SynopsisGenerateOptionEditor.scss';

const SynopsisGenerateOptionEditor: React.FC<SynopsisGenerateOptionEditorProps> = ({
  className,
  wordCount,
  onWordCountChange = () => {},
}) => {
  const getOnChangeFunc =
    (count: number): (() => void) =>
    () =>
      onWordCountChange(wordCount === count ? undefined : count);

  return (
    <Box className={Classnames(styles.synopsisGenerateOptionEditor, className)}>
      <FormLabel className={styles.label}>생성 옵션</FormLabel>
      <StateChip
        title='30자 내외'
        subtitle='60 bytes'
        extra='시놉시스 키즈'
        size='large'
        active={wordCount !== undefined && wordCount <= 30}
        onClick={getOnChangeFunc(30)}
      />
      <StateChip
        title='100자 내외'
        subtitle='200 bytes'
        extra='시놉시스 일반'
        size='large'
        active={wordCount !== undefined && wordCount > 30 && wordCount <= 100}
        onClick={getOnChangeFunc(100)}
      />
      <StateChip
        title='200자 내외'
        subtitle='400 bytes'
        extra='시놉시스 더 보기'
        size='large'
        active={wordCount !== undefined && wordCount > 100 && wordCount <= 200}
        onClick={getOnChangeFunc(200)}
      />
      <EditableStateChip
        title='적접입력'
        active={wordCount !== undefined && wordCount > 200}
        value={wordCount !== undefined && wordCount > 200 ? `${wordCount}` : undefined}
        onChange={(value?: string) => onWordCountChange(_.isEmpty(value) ? undefined : Number(value))}
      />
    </Box>
  );
};

export default SynopsisGenerateOptionEditor;

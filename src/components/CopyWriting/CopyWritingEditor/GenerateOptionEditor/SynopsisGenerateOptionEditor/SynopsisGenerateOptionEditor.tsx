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
    <Box className={Classnames(styles.synopsisGenerateOptionEditor, className)}>
      <FormLabel className={styles.label}>생성 옵션</FormLabel>
      <StateChip
        title='30자 내외'
        extra='시놉시스 키즈'
        size='large'
        active={wordCount !== undefined && wordCount <= 30}
        onClick={() => onWordCountChange(wordCount === 30 ? undefined : 30)}
      />
      <StateChip
        title='100자 내외'
        extra='시놉시스 일반'
        size='large'
        active={wordCount !== undefined && wordCount > 30 && wordCount <= 100}
        onClick={() => onWordCountChange(wordCount === 100 ? undefined : 100)}
      />
      <StateChip
        title='200자 내외'
        extra='시놉시스 더 보기'
        size='large'
        active={wordCount !== undefined && wordCount > 100 && wordCount <= 200}
        onClick={() => onWordCountChange(wordCount === 200 ? undefined : 200)}
      />
      <EditableStateChip
        title='적접입력'
        active={wordCount !== undefined && wordCount > 200}
        value={wordCount !== undefined && wordCount > 200 ? `${wordCount}` : undefined}
        onChange={onValueChange}
      />
    </Box>
  );
};

export default SynopsisGenerateOptionEditor;

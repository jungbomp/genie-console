import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';
import { Add } from 'src/Icon';

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
        subtitle='100 bytes'
        extra='시놉시스 키즈'
        size='large'
        active={wordCount === 30}
        onClick={getOnChangeFunc(30)}
      />
      <StateChip
        title='100자 이내'
        subtitle='300 bytes'
        extra='시놉시스 일반'
        size='large'
        active={wordCount === 100}
        onClick={getOnChangeFunc(100)}
      />
      <StateChip
        title='200자 이내'
        subtitle='600 bytes'
        extra='시놉시스 더 보기'
        size='large'
        active={wordCount === 200}
        onClick={getOnChangeFunc(200)}
      />
      <StateChip
        icon={<Add className={styles.icon} />}
        title='적접입력'
        size='large'
        active={wordCount !== undefined && wordCount !== 30 && wordCount !== 100 && wordCount !== 200}
      />
    </Box>
  );
};

export default SynopsisGenerateOptionEditor;

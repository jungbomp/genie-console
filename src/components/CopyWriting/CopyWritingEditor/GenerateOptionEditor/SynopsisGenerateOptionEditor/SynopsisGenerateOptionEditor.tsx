import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';
import { Add } from 'src/Icon';

import type { SynopsisGenerateOptionEditorProps } from './SynopsisGenerateOptionEditor.types';

import styles from './SynopsisGenerateOptionEditor.scss';

const SynopsisGenerateOptionEditor: React.FC<SynopsisGenerateOptionEditorProps> = ({ className }) => {
  return (
    <Box className={Classnames(styles.synopsisGenerateOptionEditor, className)}>
      <FormLabel>생성 옵션</FormLabel>
      <StateChip title='30자 내외' subtitle='100 bytes' extra='시놉시스 키즈' size='large' />
      <StateChip title='100자 이내' subtitle='300 bytes' extra='시놉시스 일반' size='large' />
      <StateChip title='200자 이내' subtitle='600 bytes' extra='시놉시스 더 보기' size='large' />
      <StateChip icon={<Add className={styles.icon} />} title='적접입력' size='large' />
    </Box>
  );
};

export default SynopsisGenerateOptionEditor;

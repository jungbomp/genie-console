import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';
import { Add } from 'src/Icon';

import { CopyWordCountEditorProps } from './CopyWordCountEditor.types';

import styles from './CopyWordCountEditor.scss';

const CopyWordCountEditor: React.FC<CopyWordCountEditorProps> = ({ className }) => {
  return (
    <Box className={Classnames(styles.copyWordCountEditor, className)}>
      <FormLabel>문장 단어수 (선택)</FormLabel>
      <Box className={styles.copyWordChipWrapper}>
        <StateChip title='40자 이내' subtitle='125 byte' size='large' />
        <StateChip title='60자 이내' subtitle='200 byte' size='large' />
        <StateChip icon={Add} title='적접입력' size='large' />
      </Box>
    </Box>
  );
};

export default CopyWordCountEditor;

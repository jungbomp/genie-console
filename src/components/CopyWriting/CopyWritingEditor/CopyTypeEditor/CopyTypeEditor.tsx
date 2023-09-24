import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import CopyTypeEditorButton from './CopyTypeEditorButton/CopyTypeEditorButton';

import { CopyTypeEditorProps } from './CopyTypeEditor.types';

import styles from './CopyTypeEditor.scss';

const CopyTypeEditor: React.FC<CopyTypeEditorProps> = ({ className, value, onChange = () => {} }) => {
  return (
    <Box className={Classnames(styles.copyTypeEditor, className)}>
      <FormLabel className={styles.label}>카피 유형</FormLabel>
      <Box className={styles.copyTypeEditorButtons}>
        <CopyTypeEditorButton
          type='HEAD'
          active={value === 'HEAD'}
          headCopy='헤드 카피'
          secondaryCopy='임팩트 강한 1-2줄 문구'
          onClick={() => onChange('HEAD')}
        />
        <CopyTypeEditorButton
          type='BODY'
          active={value === 'BODY'}
          headCopy='바디 카피'
          secondaryCopy='일반 형식 2-3줄 문구'
          onClick={() => onChange('BODY')}
        />
        <CopyTypeEditorButton
          type='SYNOPSIS'
          active={value === 'SYNOPSIS'}
          headCopy='시놉시스 요약'
          secondaryCopy='원하는 길이로 요약'
          onClick={() => onChange('SYNOPSIS')}
        />
      </Box>
    </Box>
  );
};

export default CopyTypeEditor;

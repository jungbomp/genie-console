import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import CopyTypeEditorHeadButton from './CopyTypeEditorHeadButton/CopyTypeEditorHeadButton';

import { CopyTypeEditorProps } from './CopyTypeEditor.types';

import styles from './CopyTypeEditor.scss';

const CopyTypeEditor: React.FC<CopyTypeEditorProps> = ({ className }) => {
  return (
    <Box className={Classnames(styles.copyTypeEditor, className)}>
      <FormLabel>카피유형</FormLabel>
      <Box className={styles.copyTypeEditorHead}>
        <CopyTypeEditorHeadButton type='HEAD' headCopy='헤드 카피' secondaryCopy='임팩트 강한 1-2줄 문구' />
        <CopyTypeEditorHeadButton type='BODY' headCopy='바디 카피' secondaryCopy='일반 형식 2-3줄 문구' />
        <CopyTypeEditorHeadButton type='SYNOPSIS' headCopy='시놈시스 요약' secondaryCopy='원하는 길이로 요약' />
      </Box>
    </Box>
  );
};

export default CopyTypeEditor;

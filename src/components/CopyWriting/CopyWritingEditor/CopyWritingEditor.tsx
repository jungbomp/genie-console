import React, { useState } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import { Rotate, SendAlt } from 'src/Icon';

import ContentTitleEditor from './ContentTitleEditor/ContentTitleEditor';
import CopyTypeEditor from './CopyTypeEditor/CopyTypeEditor';
import GenerateOptionEditor from './GenerateOptionEditor/GenerateOptionEditor';
import AdditionalRequestEditor from './AdditionalRequestEditor/AdditionalRequestEditor';

import { CopyWritingEditorProps } from './CopyWritingEditor.types';

import styles from './CopyWritingEditor.scss';

const CopyWritingEditor: React.FC<CopyWritingEditorProps> = ({ className }) => {
  const [copyType, setCopyType] = useState<'HEAD' | 'BODY' | 'SYNOPSIS'>();

  return (
    <div className={Classnames(styles.copyWritingEditor, className)}>
      <Typography className={styles.headTitle}>
        AI 지니와 함께 고객을 사로잡을 수 있는 매력적인 문구를 만들어 보세요.
      </Typography>
      <FormControl>
        <ContentTitleEditor />
      </FormControl>
      <FormControl>
        <CopyTypeEditor value={copyType} onClick={setCopyType} />
      </FormControl>
      <FormControl className={Classnames({ [styles.hideGenerateOptionEditor]: copyType === undefined })}>
        <GenerateOptionEditor value={copyType} />
      </FormControl>
      <FormControl>
        <AdditionalRequestEditor />
      </FormControl>
      <FormControl className={styles.buttonFlexBox}>
        <Box className={styles.buttonWrapper}>
          <Button className={styles.submitButton} variant='contained' startIcon={<SendAlt />}>
            문구 생성하기
          </Button>
          <Button className={styles.resetWrapper} startIcon={<Rotate className={styles.resetIcon} />}>
            다시시작
          </Button>
        </Box>
      </FormControl>
    </div>
  );
};

export default CopyWritingEditor;

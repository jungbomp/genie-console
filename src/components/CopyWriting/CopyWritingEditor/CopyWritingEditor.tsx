import React, { useEffect, useState } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import { Rotate, SendAlt } from 'src/Icon';
import { defaultWordCountsByType } from '../CopyWriting.constants';
import type { CopyType, PromotionType } from '../CopyWriting.types';

import ContentTitleEditor from './ContentTitleEditor/ContentTitleEditor';
import CopyTypeEditor from './CopyTypeEditor/CopyTypeEditor';
import GenerateOptionEditor from './GenerateOptionEditor/GenerateOptionEditor';
import AdditionalRequestEditor from './AdditionalRequestEditor/AdditionalRequestEditor';

import type { CopyWritingEditorProps } from './CopyWritingEditor.types';

import styles from './CopyWritingEditor.scss';

const CopyWritingEditor: React.FC<CopyWritingEditorProps> = ({
  className,
  onValuesChange = () => {},
  onClickGenerateCopyWrite = () => {},
  onReset = () => {},
}) => {
  const [contentTitle, setContentTitle] = useState<string>();
  const [copyType, setCopyType] = useState<CopyType>();
  const [wordCount, setWordCount] = useState<number>();
  const [promotionType, setPromotionType] = useState<PromotionType>();
  const [promotionDetails, setPromotionDetails] = useState<string>();
  const [additionalRequest, setAdditionalRequest] = useState<string>();

  const onCopyTypeValueChange = (type: CopyType) => {
    setWordCount(defaultWordCountsByType[type]);
    setPromotionType(undefined);
    setPromotionDetails('');
    setCopyType(type);
    onReset();
  };

  const onGenerateCopyWriteButtonClick = () => {
    if (contentTitle && copyType) {
      onClickGenerateCopyWrite({
        // @ts-ignore
        contentTitle,
        // @ts-ignore
        copyType,
        wordCount,
        promotionType,
        promotionDetails,
        additionalRequest,
      });
    }
  };

  const onResetButtonClick = () => {
    setCopyType(undefined);
    setWordCount(undefined);
    setPromotionType(undefined);
    setPromotionDetails('');
    setAdditionalRequest('');
    onReset();
  };

  useEffect(() => {
    onValuesChange({
      // @ts-ignore
      contentTitle,
      // @ts-ignore
      copyType,
      wordCount,
      promotionType,
      promotionDetails,
      additionalRequest,
    });
  }, [contentTitle, copyType, wordCount, promotionType, promotionDetails, additionalRequest]);

  return (
    <div className={Classnames(styles.copyWritingEditor, className)}>
      <Typography className={styles.headTitle}>
        AI 지니와 함께 고객을 사로잡을 수 있는 매력적인 문구를 만들어 보세요.
      </Typography>
      <FormControl>
        <ContentTitleEditor value={contentTitle} onChange={setContentTitle} />
      </FormControl>
      <FormControl>
        <CopyTypeEditor value={copyType} onChange={onCopyTypeValueChange} />
      </FormControl>
      <FormControl className={Classnames({ [styles.hideGenerateOptionEditor]: copyType === undefined })}>
        <GenerateOptionEditor
          copyType={copyType}
          wordCount={wordCount}
          promotionType={promotionType}
          promotionDetails={promotionDetails}
          onWordCountChange={setWordCount}
          onPromotionTypeChange={setPromotionType}
          onPromotionDetailsChange={setPromotionDetails}
        />
      </FormControl>
      <FormControl>
        <AdditionalRequestEditor
          additionalRequest={additionalRequest}
          onAdditionalRequestChange={setAdditionalRequest}
        />
      </FormControl>
      <FormControl className={styles.buttonFlexBox}>
        <Box className={styles.buttonWrapper}>
          <Button
            className={styles.submitButton}
            variant='contained'
            startIcon={<SendAlt />}
            onClick={onGenerateCopyWriteButtonClick}
            disabled={_.isEmpty(contentTitle) || _.isEmpty(copyType)}
          >
            문구 생성하기
          </Button>
          <Button
            className={styles.resetWrapper}
            startIcon={<Rotate className={styles.resetIcon} />}
            onClick={onResetButtonClick}
            disabled={_.isEmpty(contentTitle) || _.isEmpty(copyType)}
          >
            다시시작
          </Button>
        </Box>
      </FormControl>
    </div>
  );
};

export default CopyWritingEditor;

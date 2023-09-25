import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import CopyWordCountEditor from './CopyWordCountEditor/CopyWordCountEditor';
import CopyPromotionEditor from './CopyPromotionEditor/CopyPromotionEditor';

import type { CopyGenerateOptionEditorProps } from './CopyGenerateOptionEditor.types';

import styles from './CopyGenerateOptionEditor.scss';

const CopyGenerateOptionEditor: React.FC<CopyGenerateOptionEditorProps> = ({
  className,
  wordCount,
  promotionType,
  promotionDetails,
  onWordCountChange,
  onPromotionTypeChange,
  onPromotionDetailsChange,
}) => {
  return (
    <Box className={Classnames(styles.copyGenerateOptionEditor, className)}>
      <FormLabel className={styles.label}>생성 옵션</FormLabel>
      <CopyWordCountEditor wordCount={wordCount} onWordCountChange={onWordCountChange} />
      <CopyPromotionEditor
        promotionType={promotionType}
        promotionDetails={promotionDetails}
        onPromotionTypeChange={onPromotionTypeChange}
        onPromotionDetailsChange={onPromotionDetailsChange}
      />
    </Box>
  );
};

export default CopyGenerateOptionEditor;

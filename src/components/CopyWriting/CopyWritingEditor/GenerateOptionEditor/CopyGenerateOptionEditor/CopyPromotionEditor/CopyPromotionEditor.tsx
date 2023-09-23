import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';
import { Add, Edit } from 'src/Icon';

import { CopyPromotionEditorProps } from './CopyPromotionEditor.types';

import styles from './CopyPromotionEditor.scss';

const CopyPromotionEditor: React.FC<CopyPromotionEditorProps> = ({ className }) => {
  return (
    <Box className={Classnames(styles.copyPromotionEditor, className)}>
      <FormLabel>프로모션 여부 (선택)</FormLabel>
      <Box className={styles.copyPromotionChipWrapper}>
        <StateChip title='무료' size='large' />
        <StateChip icon={<Edit className={styles.icon} />} title='경품・피규어' size='large' />
        <StateChip icon={<Add className={styles.icon} />} title='TV쿠폰' size='large' />
        <StateChip icon={<Add className={styles.icon} />} title='가격 할인' size='large' />
      </Box>
    </Box>
  );
};

export default CopyPromotionEditor;

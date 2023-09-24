import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';
import { Add, Edit } from 'src/Icon';

import { PromotionType } from 'src/components/CopyWriting/CopyWriting.types';
import { CopyPromotionEditorProps } from './CopyPromotionEditor.types';

import styles from './CopyPromotionEditor.scss';

const CopyPromotionEditor: React.FC<CopyPromotionEditorProps> = ({
  className,
  promotionType,
  onPromotionTypeChange = () => {},
}) => {
  const getOnPromotionTypeChangeFunc =
    (type: PromotionType): (() => void) =>
    () =>
      onPromotionTypeChange(promotionType === type ? undefined : type);

  return (
    <Box className={Classnames(styles.copyPromotionEditor, className)}>
      <FormLabel>프로모션 여부 (선택)</FormLabel>
      <Box className={styles.copyPromotionChipWrapper}>
        <StateChip
          title='무료'
          size='large'
          active={promotionType === 'FREE'}
          onClick={getOnPromotionTypeChangeFunc('FREE')}
        />
        <StateChip
          icon={<Edit className={styles.icon} />}
          title='경품・피규어'
          size='large'
          active={promotionType === 'GIFT'}
          onClick={getOnPromotionTypeChangeFunc('GIFT')}
        />
        <StateChip
          icon={<Add className={styles.icon} />}
          title='TV쿠폰'
          size='large'
          active={promotionType === 'TV_COUPON'}
          onClick={getOnPromotionTypeChangeFunc('TV_COUPON')}
        />
        <StateChip
          icon={<Add className={styles.icon} />}
          title='가격 할인'
          size='large'
          active={promotionType === 'DISCOUNT'}
          onClick={getOnPromotionTypeChangeFunc('DISCOUNT')}
        />
      </Box>
    </Box>
  );
};

export default CopyPromotionEditor;

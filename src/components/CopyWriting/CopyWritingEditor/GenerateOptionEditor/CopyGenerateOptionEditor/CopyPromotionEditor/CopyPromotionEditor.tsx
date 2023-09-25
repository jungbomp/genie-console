import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

import StateChip from 'src/components/common/StateChip/StateChip';

import type { PromotionType } from 'src/components/CopyWriting/CopyWriting.types';

import EditableStateChip from '../../EditableStateChip/EditableStateChip';

import type { CopyPromotionEditorProps } from './CopyPromotionEditor.types';

import styles from './CopyPromotionEditor.scss';

const CopyPromotionEditor: React.FC<CopyPromotionEditorProps> = ({
  className,
  promotionType,
  promotionDetails,
  onPromotionTypeChange = () => {},
  onPromotionDetailsChange = () => {},
}) => {
  const getOnPromotionValueChangeFunc = (type: PromotionType) => (value?: string) => {
    onPromotionTypeChange(_.isEmpty(value) ? undefined : type);
    onPromotionDetailsChange(value);
  };

  return (
    <Box className={Classnames(styles.copyPromotionEditor, className)}>
      <FormLabel>프로모션 여부 (선택)</FormLabel>
      <Box className={styles.copyPromotionChipWrapper}>
        <StateChip
          title='무료'
          size='large'
          active={promotionType === 'FREE'}
          onClick={() => onPromotionTypeChange(promotionType === 'FREE' ? undefined : 'FREE')}
        />
        <EditableStateChip
          title='경품'
          keepTitle={true}
          placeholder='경품입력'
          active={promotionType === 'GIFT'}
          value={promotionType === 'GIFT' ? promotionDetails : undefined}
          onChange={getOnPromotionValueChangeFunc('GIFT')}
        />
        <EditableStateChip
          title='TV쿠폰'
          keepTitle={true}
          placeholder='TV쿠폰입력'
          active={promotionType === 'TV_COUPON'}
          value={promotionType === 'TV_COUPON' ? promotionDetails : undefined}
          onChange={getOnPromotionValueChangeFunc('TV_COUPON')}
        />
        <EditableStateChip
          title='가격 할인'
          keepTitle={true}
          placeholder='가격 할인 입력'
          active={promotionType === 'DISCOUNT'}
          value={promotionType === 'DISCOUNT' ? promotionDetails : undefined}
          onChange={getOnPromotionValueChangeFunc('DISCOUNT')}
        />
      </Box>
    </Box>
  );
};

export default CopyPromotionEditor;

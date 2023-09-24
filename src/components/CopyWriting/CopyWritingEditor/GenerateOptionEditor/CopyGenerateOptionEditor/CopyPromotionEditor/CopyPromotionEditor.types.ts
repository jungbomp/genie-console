import type { CommonProps } from 'src/components/types';
import type { PromotionType } from 'src/components/CopyWriting/CopyWriting.types';

export interface CopyPromotionEditorProps extends CommonProps {
  promotionType?: PromotionType;
  onPromotionTypeChange?: (promotion?: PromotionType) => void;
}

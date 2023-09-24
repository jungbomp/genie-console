import type { CommonProps } from 'src/components/types';
import type { PromotionType } from 'src/components/CopyWriting/CopyWriting.types';

export interface CopyPromotionEditorProps extends CommonProps {
  promotionType?: PromotionType;
  promotionDetails?: string;
  onPromotionTypeChange?: (promotion?: PromotionType) => void;
  onPromotionDetailsChange?: (details?: string) => void;
}

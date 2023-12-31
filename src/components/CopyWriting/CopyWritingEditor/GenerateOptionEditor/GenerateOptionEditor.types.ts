import type { CommonProps } from 'src/components/types';
import type { CopyType, PromotionType } from 'src/components/CopyWriting/CopyWriting.types';

export interface GenerateOptionEditorProps extends CommonProps {
  copyType?: CopyType;
  wordCount?: number;
  promotionType?: PromotionType;
  promotionDetails?: string;
  onWordCountChange?: (count?: number) => void;
  onPromotionTypeChange?: (promotion?: PromotionType) => void;
  onPromotionDetailsChange?: (promotionDetails?: string) => void;
}

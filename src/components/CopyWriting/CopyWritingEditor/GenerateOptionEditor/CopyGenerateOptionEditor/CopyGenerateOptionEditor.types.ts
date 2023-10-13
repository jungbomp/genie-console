import type { CommonProps } from 'src/components/types';
import type { PromotionType } from 'src/components/CopyWriting/CopyWriting.types';

export interface CopyGenerateOptionEditorProps extends CommonProps {
  wordCount?: number;
  smallWordCountOption?: number;
  largeWordCountOption?: number;
  promotionType?: PromotionType;
  promotionDetails?: string;
  onWordCountChange?: (count?: number) => void;
  onPromotionTypeChange?: (promotion?: PromotionType) => void;
  onPromotionDetailsChange?: (promotionDetails?: string) => void;
}

import type { CommonProps } from 'src/components/types';

export type CopyType = 'HEAD' | 'BODY' | 'SYNOPSIS';
export type PromotionType = 'FREE' | 'GIFT' | 'TV_COUPON' | 'DISCOUNT';

export interface CopyWritingOption {
  contentTitle: string;
  copyType: CopyType;
  wordCount?: number;
  promotionType?: PromotionType;
  additionalRequest?: string;
}

export interface CopyWritingProps extends CommonProps {}

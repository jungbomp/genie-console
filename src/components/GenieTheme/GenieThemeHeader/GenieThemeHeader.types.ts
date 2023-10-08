import type { CommonProps } from 'src/components/types';

export interface GenieThemeHeaderProps extends CommonProps {
  target?: string;
  keywords: string[];
  onTargetChange: (value?: string) => void;
  onKeywordAdd?: (keyword: string) => void;
  onKeywordDelete?: (keyword: string) => void;
  onGenerateContentClick?: () => void;
}

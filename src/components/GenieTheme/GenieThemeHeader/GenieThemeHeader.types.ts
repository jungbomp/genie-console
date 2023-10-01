import type { CommonProps } from 'src/components/types';

export interface GenieThemeHeaderProps extends CommonProps {
  targets: string[];
  keywords: string[];
  onTargetAdd?: (target: string) => void;
  onKeywordAdd?: (keyword: string) => void;
  onTargetDelete?: (target: string) => void;
  onKeywordDelete?: (keyword: string) => void;
  onGenerateContentClick?: () => void;
}

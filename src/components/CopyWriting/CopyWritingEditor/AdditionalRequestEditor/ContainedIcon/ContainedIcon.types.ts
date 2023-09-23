import type { ElementType } from 'react';
import type { CommonProps } from 'src/components/types';

export interface ContainedIconProps extends CommonProps {
  icon: ElementType;
  onClick?: () => void;
}

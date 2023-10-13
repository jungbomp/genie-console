import type { ReactElement, MouseEvent } from 'react';
import type { CommonProps } from 'src/components/types';

export interface StateChipProps extends CommonProps {
  title: string;
  subtitle?: string;
  extra?: string;
  icon?: ReactElement;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

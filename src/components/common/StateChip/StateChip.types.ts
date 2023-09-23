<<<<<<< Updated upstream
import type { ElementType } from 'react';
=======
import type { ReactElement } from 'react';
>>>>>>> Stashed changes
import type { CommonProps } from 'src/components/types';

export interface StateChipProps extends CommonProps {
  title: string;
  subtitle?: string;
  extra?: string;
<<<<<<< Updated upstream
  icon?: ElementType;
=======
  icon?: ReactElement;
>>>>>>> Stashed changes
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  onClick?: () => void;
}

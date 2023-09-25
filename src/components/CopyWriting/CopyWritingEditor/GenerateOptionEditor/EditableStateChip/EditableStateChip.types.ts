import type { CommonProps } from 'src/components/types';

export interface EditableStateChipProps extends CommonProps {
  title: string;
  active?: boolean;
  keepTitle?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
}

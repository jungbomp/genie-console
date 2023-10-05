import type { CommonProps } from 'src/components/types';

export interface ContentTitleEditorProps extends CommonProps {
  value?: string;
  onChange?: (value?: string) => void;
}

import { CommonProps } from 'src/components/types';

export interface CopyWordCountEditorProps extends CommonProps {
  wordCount?: number;
  smallWordCountOption: number;
  largeWordCountOption: number;
  onWordCountChange?: (count?: number) => void;
}

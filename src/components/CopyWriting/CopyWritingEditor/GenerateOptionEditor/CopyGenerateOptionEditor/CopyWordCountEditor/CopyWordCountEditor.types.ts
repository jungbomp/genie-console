import { CommonProps } from 'src/components/types';

export interface CopyWordCountEditorProps extends CommonProps {
  wordCount?: number;
  onWordCountChange?: (count?: number) => void;
}

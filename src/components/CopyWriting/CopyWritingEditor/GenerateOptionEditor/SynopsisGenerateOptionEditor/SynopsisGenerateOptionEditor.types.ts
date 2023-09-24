import { CommonProps } from 'src/components/types';

export interface SynopsisGenerateOptionEditorProps extends CommonProps {
  wordCount?: number;
  onWordCountChange?: (count?: number) => void;
}

import type { AutoWordItem } from 'src/types';
import type { CopyWritingDemoOption, CopyWritingOption } from '../CopyWriting.types';

export interface CopyWritingState {
  copyWritingOption?: CopyWritingOption;
  autoWordItems: AutoWordItem[];
  copyWritingDemoOption?: CopyWritingDemoOption;
}

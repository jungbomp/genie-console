import type { AutoWordItem } from 'src/types';
import type { CopyWritingOption } from '../CopyWriting.types';

export interface CopyWritingState {
  copyWritingOption?: CopyWritingOption;
  autoWordItems: AutoWordItem[];
}

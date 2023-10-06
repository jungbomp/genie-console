import { REDUCER_SCOPES } from 'src/constants';
import type { AutoWordItem } from 'src/types';

import type { CopyWritingOption } from '../CopyWriting.types';
import type { CopyWritingState } from './types';

export const selector = (state: any): CopyWritingState => state[REDUCER_SCOPES.COPY_WRITING];
export const copyWritingOptionSelector = (state: any): CopyWritingOption | undefined =>
  selector(state).copyWritingOption;
export const autoWordItemsSelector = (state: any): AutoWordItem[] => selector(state).autoWordItems;

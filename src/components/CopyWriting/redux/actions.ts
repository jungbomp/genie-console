import type { AutoWordItem } from 'src/types';

import type { CopyWritingOption } from '../CopyWriting.types';

import { SET_AUTO_WORD_ITEMS, SET_COPY_WRITING_OPTIONS } from './actionType';

export const setCopyWritingOption = (copyWritingOption: CopyWritingOption | undefined) => ({
  type: SET_COPY_WRITING_OPTIONS,
  payload: {
    copyWritingOption,
  },
});

export const setAutoWordItems = (autoWordItems: AutoWordItem[]) => ({
  type: SET_AUTO_WORD_ITEMS,
  payload: {
    autoWordItems,
  },
});

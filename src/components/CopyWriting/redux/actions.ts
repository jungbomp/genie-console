import type { AutoWordItem } from 'src/types';

import type { CopyWritingOption, CopyWritingDemoOption } from '../CopyWriting.types';

import { SET_AUTO_WORD_ITEMS, SET_COPY_WRITING_DEMO_OPTION, SET_COPY_WRITING_OPTIONS } from './actionType';

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

export const setCopyWritingDemoOption = (copyWritingDemoOption: CopyWritingDemoOption | undefined) => ({
  type: SET_COPY_WRITING_DEMO_OPTION,
  payload: {
    copyWritingDemoOption,
  },
});

import type { AnyAction } from 'redux';

import { SET_AUTO_WORD_ITEMS, SET_COPY_WRITING_DEMO_OPTION, SET_COPY_WRITING_OPTIONS } from './actionType';
import type { CopyWritingState } from './types';

const initialState: CopyWritingState = { autoWordItems: [] };

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_COPY_WRITING_OPTIONS:
      return {
        ...state,
        copyWritingOption: { ...payload.copyWritingOption },
      };
    case SET_AUTO_WORD_ITEMS:
      return {
        ...state,
        autoWordItems: [...payload.autoWordItems],
      };
    case SET_COPY_WRITING_DEMO_OPTION:
      return {
        ...state,
        copyWritingDemoOption: { ...payload.copyWritingDemoOption },
      };
    default:
      return state;
  }
};

export default reducer;

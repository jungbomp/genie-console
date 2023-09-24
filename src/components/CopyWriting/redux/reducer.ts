import type { AnyAction } from 'redux';

import { SET_COPY_WRITING_OPTIONS } from './actionType';
import type { CopyWritingState } from './types';

const initialState: CopyWritingState = {};

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_COPY_WRITING_OPTIONS:
      return {
        ...state,
        copyWritingOption: { ...payload.copyWritingOption },
      };
    default:
      return state;
  }
};

export default reducer;

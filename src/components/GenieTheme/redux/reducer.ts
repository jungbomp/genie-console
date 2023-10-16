import type { AnyAction } from 'redux';

import type { GenieThemeState } from './types';
import { SET_GENIE_THEME_DEMO_OPTION } from './actionType';

const initialState: GenieThemeState = {};

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_GENIE_THEME_DEMO_OPTION:
      return {
        ...state,
        genieThemeDemoOption: { ...payload.genieThemeDemoOption },
      };
    default:
      return state;
  }
};

export default reducer;

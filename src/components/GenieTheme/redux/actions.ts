import type { GenieThemeDemoOption } from '../GenieTheme.types';

import { SET_GENIE_THEME_DEMO_OPTION } from './actionType';

export const setGenieThemeDemoOption = (genieThemeDemoOption: GenieThemeDemoOption | undefined) => ({
  type: SET_GENIE_THEME_DEMO_OPTION,
  payload: {
    genieThemeDemoOption,
  },
});

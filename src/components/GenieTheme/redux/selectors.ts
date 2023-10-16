import { REDUCER_SCOPES } from 'src/constants';

import type { GenieThemeDemoOption } from '../GenieTheme.types';
import type { GenieThemeState } from './types';

export const selector = (state: any): GenieThemeState => state[REDUCER_SCOPES.GENIE_THEME];
export const genieThemeDemoOptionSelector = (state: any): GenieThemeDemoOption | undefined =>
  selector(state).genieThemeDemoOption;

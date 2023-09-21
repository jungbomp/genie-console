import { lazy } from 'react';

import { Recommended } from 'src/Icon';
import type { MenuItemContext } from 'src/types';
import { GENIE_THEME_PATH_ID, GENIE_THEME_PATH_PREFIX, GENIE_THEME_TITLE } from './GenieTheme.constants';

const GenieTheme = lazy(() => import('./GenieTheme'));

const genieChatMenuItems: MenuItemContext[] = [
  {
    pathId: GENIE_THEME_PATH_ID,
    title: GENIE_THEME_TITLE,
    path: `/${GENIE_THEME_PATH_PREFIX}`,
    icon: Recommended,
    component: GenieTheme,
    exact: true,
  },
];

export default genieChatMenuItems;

import { lazy } from 'react';

import { Home as HomeIcon } from 'src/Icon';
import type { MenuItemContext } from 'src/types';
import { HOME_PATH_ID, HOME_PATH_PREFIX, HOME_TITLE } from './Home.constants';

const Home = lazy(() => import('./Home'));

const homeMenuItems: MenuItemContext[] = [
  {
    pathId: HOME_PATH_ID,
    title: HOME_TITLE,
    path: `/${HOME_PATH_PREFIX}`,
    icon: HomeIcon,
    component: Home,
    exact: true,
  },
];

export default homeMenuItems;

import { lazy } from 'react';

// import { At } from 'src/Icon';
import PenFountain from 'src/Icon/PenFountain';
import type { MenuItemContext } from 'src/types';
import { COPY_WRITING_PATH_ID, COPY_WRITING_PATH_PREFIX, COPY_WRITING_TITLE } from './CopyWriting.constants';

const CopyWriting = lazy(() => import('./CopyWriting'));

const copyWritingMenuItems: MenuItemContext[] = [
  {
    pathId: COPY_WRITING_PATH_ID,
    title: COPY_WRITING_TITLE,
    path: `/${COPY_WRITING_PATH_PREFIX}`,
    icon: PenFountain,
    component: CopyWriting,
    exact: true,
  },
];

export default copyWritingMenuItems;

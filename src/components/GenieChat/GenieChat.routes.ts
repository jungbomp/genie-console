import { lazy } from 'react';

import { ChatBot } from 'src/Icon';
import type { MenuItemContext } from 'src/types';
import { GENIE_CHAT_PATH_ID, GENIE_CHAT_PATH_PREFIX, GENIE_CHAT_TITLE } from './GenieChat.constants';

const GenieChat = lazy(() => import('./GenieChat'));

const genieChatMenuItems: MenuItemContext[] = [
  {
    pathId: GENIE_CHAT_PATH_ID,
    title: GENIE_CHAT_TITLE,
    path: `/${GENIE_CHAT_PATH_PREFIX}`,
    icon: ChatBot,
    component: GenieChat,
    exact: true,
  },
];

export default genieChatMenuItems;

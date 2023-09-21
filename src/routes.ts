import { homeMenuItems } from 'src/components/Home';
import { genieChatMenuItems } from 'src/components/GenieChat';
import { copyWritingMenuItems } from 'src/components/CopyWriting';
import { genieThemeMenuItems } from 'src/components/GenieTheme';

import type { MenuItemContext } from './types';

export const MENU_ITEMS: MenuItemContext[] = [
  ...homeMenuItems,
  ...genieChatMenuItems,
  ...copyWritingMenuItems,
  ...genieThemeMenuItems,
];

import React from 'react';
import Classnames from 'classnames';

import { MenuItem as MuiMenuItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { push } from 'src/History/history';
import type { MenuItemProps } from './MenuItem.types';

import styles from './MenuItem.scss';

const MenuItem: React.FC<MenuItemProps> = ({ className, menuItemContext: { title, path, icon: Icon } }) => (
  <MuiMenuItem className={Classnames(styles.menuItem, className)} onClick={() => push({ path })}>
    <ListItemIcon className={styles.iconWrapper}>
      <Icon viewBox='0 0 20 20' className={styles.icon} />
    </ListItemIcon>
    <ListItemText primary={title} />
  </MuiMenuItem>
);

export default MenuItem;

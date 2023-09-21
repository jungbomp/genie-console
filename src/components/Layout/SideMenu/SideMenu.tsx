import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';

import logo from 'images/ai.svg';

import genieWordMark from 'images/genie_wordmark_white.png';

import type { MenuItemContext } from 'src/types';

import MenuItem from './MenuItem';
import type { SideMenuProps } from './SideMenu.types';
import styles from './SideMenu.scss';

const SideMenu: React.FC<SideMenuProps> = ({ className, menuItems }) => {
  return (
    <Box className={Classnames(styles.sideMenu, className)}>
      <div className={Classnames(styles.header)}>
        <div className={Classnames(styles.logo)}>
          <img src={logo} alt='logo' />
        </div>
        <div className={Classnames(styles.genieWordMarkWrapper)}>
          <div className={Classnames(styles.genieWordMark)}>
            <img src={genieWordMark} alt='GENIE' />
          </div>
        </div>
      </div>
      <MenuList>
        {menuItems.map((menuItem: MenuItemContext) => (
          <MenuItem key={menuItem.path} menuItemContext={menuItem} />
        ))}
      </MenuList>
    </Box>
  );
};

export default SideMenu;

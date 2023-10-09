import React from 'react';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';

import genieWordMark from 'images/genie_wordmark_white.png';

import { Settings } from 'src/Icon';
import { selectedMenuSelector, userSelector } from 'src/components/redux/selectors';
import type { MenuItemContext, UserContext } from 'src/types';

import MenuItem from './MenuItem';
import type { SideMenuProps } from './SideMenu.types';
import styles from './SideMenu.scss';

const SideMenu: React.FC<SideMenuProps> = ({ className, menuItems }) => {
  const user: UserContext = useSelector(userSelector);
  const selectedMenu: MenuItemContext | undefined = useSelector(selectedMenuSelector);

  return (
    <Box className={Classnames(styles.sideMenu, className)}>
      <Box className={styles.menuWrapper}>
        <div className={Classnames(styles.header)}>
          {/* <div className={Classnames(styles.logo)}>
            <img src={logo} alt='logo' />
          </div> */}
          <div className={Classnames(styles.genieWordMarkWrapper)}>
            <div className={Classnames(styles.genieWordMark)}>
              <img src={genieWordMark} alt='GENIE' />
            </div>
          </div>
        </div>
        <MenuList>
          {menuItems.map((menuItem: MenuItemContext) => (
            <MenuItem key={menuItem.path} menuItemContext={menuItem} selected={selectedMenu?.path === menuItem.path} />
          ))}
        </MenuList>
      </Box>
      <Box className={styles.settingsWrapper}>
        <Typography className={styles.userName}>{user.userName}</Typography>
        <Button className={styles.settingButton} startIcon={<Settings />} />
      </Box>
    </Box>
  );
};

export default SideMenu;

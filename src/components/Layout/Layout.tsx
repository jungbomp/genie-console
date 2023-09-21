import React, { useState } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { MENU_ITEMS } from 'src/routes';

import Content from './Content';
import SideMenu from './SideMenu';

import type { LayoutProps } from './Layout.types';

import styles from './Layout.scss';

const Layout: React.FC<LayoutProps> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  return (
    <Box className={styles.wrapper}>
      <Box className={Classnames(styles.layout, className)}>
        <CssBaseline />
        <Box className={styles.sider}>
          <SideMenu open={menuOpen} menuItems={MENU_ITEMS} closeSideMenu={() => setMenuOpen(false)} />
        </Box>
        <Box className={Classnames(styles.content, { [styles.mainOpenMenu]: menuOpen })}>
          <Content menuItems={MENU_ITEMS} />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

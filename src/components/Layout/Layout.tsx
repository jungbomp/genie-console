import React, { useEffect, useState } from 'react';
import Classnames from 'classnames';
import { SnackbarProvider } from 'notistack';

import { createTheme, Theme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { MENU_ITEMS } from 'src/routes';

import Content from './Content';
import SideMenu from './SideMenu';

import type { LayoutProps } from './Layout.types';

import styles from './Layout.scss';

const outerTheme: Theme = createTheme({
  typography: {
    fontFamily: 'Outfit Variable',
  },
});

const Layout: React.FC<LayoutProps> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => setIsLoaded(true), []);

  return (
    <ThemeProvider theme={outerTheme}>
      {isLoaded && (
        <SnackbarProvider maxSnack={3}>
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
        </SnackbarProvider>
      )}
    </ThemeProvider>
  );
};

export default Layout;

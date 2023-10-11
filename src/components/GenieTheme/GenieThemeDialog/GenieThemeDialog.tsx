import React from 'react';
import Classnames from 'classnames';

import Dialog from '@mui/material/Dialog';

import GenieThemeWidget from './GenieThemeWidget/GenieThemeWidget';

import type { GenieThemeDialogProps } from './GenieThemeDialog.types';

import styles from './GenieThemeDialog.scss';

const GenieThemeDialog: React.FC<GenieThemeDialogProps> = ({ className, isOpen = false, themeTitle, themeItems }) => {
  return (
    <Dialog className={Classnames(styles.genieThemeDialog, className)} open={isOpen} maxWidth='xl'>
      <GenieThemeWidget themeWidgetTitle={themeTitle} themeWidgetItems={themeItems} />
    </Dialog>
  );
};

export default GenieThemeDialog;

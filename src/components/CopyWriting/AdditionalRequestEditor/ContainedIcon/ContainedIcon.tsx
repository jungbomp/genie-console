import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import { ContainedIconProps } from './ContainedIcon.types';

import styles from './ContainedIcon.scss';

const ContainedIcon: React.FC<ContainedIconProps> = ({ className, icon: Icon, onClick = () => {} }) => (
  <Box className={Classnames(styles.containedIcon, className)} onClick={onClick}>
    <Icon className={styles.icon} />
  </Box>
);

export default ContainedIcon;

import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import genieCopyWriteBackground from 'images/genie_copywrite_background.jpg';

import type { CopyWritingWidgetProps } from './CopyWritingWidget.types';

import styles from './CopyWritingWidget.scss';

const CopyWritingWidget: React.FC<CopyWritingWidgetProps> = ({ className, copyWrite }) => {
  return (
    <Box className={Classnames(styles.copyWritingWidget, className)}>
      <Box className={styles.backImgWrapper}>
        <img className={styles.img} src={genieCopyWriteBackground} alt={copyWrite} loading='lazy' />
      </Box>
      <Box className={styles.copyWritingWrapper}>
        <Typography className={styles.copyWriting}>{copyWrite}</Typography>
      </Box>
    </Box>
  );
};

export default CopyWritingWidget;

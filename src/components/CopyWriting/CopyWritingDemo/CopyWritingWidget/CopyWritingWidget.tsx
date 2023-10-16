import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { CopyWritingWidgetProps } from './CopyWritingWidget.types';

import styles from './CopyWritingWidget.scss';

const CopyWritingWidget: React.FC<CopyWritingWidgetProps> = ({ className, copyType, copyWrite, imgUrl }) => {
  return (
    <Box className={Classnames(styles.copyWritingWidget, className)}>
      <Box className={styles.backImgWrapper}>
        <img className={styles.img} src={imgUrl} alt={copyWrite} loading='lazy' />
      </Box>
      <Box className={Classnames(styles.copyWritingWrapper, styles[`copyWritingWrapper${_.capitalize(copyType)}`])}>
        <Typography className={styles.copyWriting}>{copyWrite}</Typography>
      </Box>
    </Box>
  );
};

export default CopyWritingWidget;

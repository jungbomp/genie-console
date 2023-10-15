import React from 'react';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import { copyWritingOptionSelector } from '../redux/selectors';

import CopyWritingWidget from './CopyWritingWidget/CopyWritingWidget';

import type { CopyWritingDemoProps } from './CopyWritingDemo.types';

import styles from './CopyWritingDemo.scss';

const CopyWritingDemo: React.FC<CopyWritingDemoProps> = ({ className }) => {
  const options = useSelector(copyWritingOptionSelector);

  console.log('options: ', options);
  return (
    <Box className={Classnames(styles.copyWritingModal, className)}>
      <CopyWritingWidget copyWrite={options?.contentTitle ?? ''} />
    </Box>
  );
};

export default CopyWritingDemo;

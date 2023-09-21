import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CopyTypeEditorHeadButtonProps } from './CopyTypeEditorHeadButton.types';

import styles from './CopyTypeEditorHeadButton.scss';

const CopyTypeEditorHeadButton: React.FC<CopyTypeEditorHeadButtonProps> = ({
  className,
  type = 'HEAD',
  active = false,
  headCopy,
  secondaryCopy,
}) => {
  return (
    <Box
      className={Classnames(
        styles.copyTypeEditorHeadButton,
        styles[`${type.toLowerCase()}Type`],
        { [styles[`${type.toLowerCase()}TypeActive`]]: active },
        className,
      )}
    >
      <Typography className={styles.headCopy}>{headCopy}</Typography>
      <Typography className={styles.secondaryCopy}>{secondaryCopy}</Typography>
    </Box>
  );
};

export default CopyTypeEditorHeadButton;

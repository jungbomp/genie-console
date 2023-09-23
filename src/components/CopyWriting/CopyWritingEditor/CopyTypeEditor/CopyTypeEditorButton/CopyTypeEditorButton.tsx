import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CopyTypeEditorButtonProps } from './CopyTypeEditorButton.types';

import styles from './CopyTypeEditorButton.scss';

const CopyTypeEditorButton: React.FC<CopyTypeEditorButtonProps> = ({
  className,
  type = 'HEAD',
  active = false,
  headCopy,
  secondaryCopy,
  onClick = () => {},
}) => {
  return (
    <Box
      className={Classnames(
        styles.copyTypeEditorButton,
        styles[`${type.toLowerCase()}Type`],
        { [styles[`${type.toLowerCase()}TypeActive`]]: active },
        className,
      )}
      onClick={onClick}
    >
      <Typography className={styles.headCopy}>{headCopy}</Typography>
      <Typography className={styles.secondaryCopy}>{secondaryCopy}</Typography>
    </Box>
  );
};

export default CopyTypeEditorButton;

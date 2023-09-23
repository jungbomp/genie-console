import React, { useMemo } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import { StateChipProps } from './StateChip.types';

import styles from './StateChip.scss';

const StateChip: React.FC<StateChipProps> = ({
  className,
  title,
  subtitle,
  extra,
<<<<<<< Updated upstream
  icon: Icon,
=======
  icon,
>>>>>>> Stashed changes
  size = 'medium',
  onClick = () => {},
}) => {
  const label = useMemo(
    () => (
      <Box className={styles.label}>
        <Box className={styles.titleWrapper}>
          <Typography className={styles.title}>{title}</Typography>
          {_.isEmpty(subtitle) ? null : <Typography className={styles.subtitle}>{subtitle}</Typography>}
        </Box>
        {_.isEmpty(extra) ? null : <Typography className={styles.extra}>{extra}</Typography>}
      </Box>
    ),
    [title, subtitle],
  );

  return (
    <Chip
      className={Classnames(styles.stateChip, [styles[size]], className)}
      size={size === 'large' ? undefined : size}
<<<<<<< Updated upstream
      icon={Icon ? <Icon /> : undefined}
=======
      icon={icon}
>>>>>>> Stashed changes
      label={label}
      onClick={onClick}
    />
  );
};

export default StateChip;

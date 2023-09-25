import React, { useMemo } from 'react';
import Classnames from 'classnames';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { SendAlt } from 'src/Icon';
import Popover from '@mui/material/Popover';
import styles from './FeedbackPopover.scss';
import type { FeedbackPopoverProps } from './FeedbackPopover.types';

const FeedbackPopover: React.FC<FeedbackPopoverProps> = ({ className, anchorElement, onClose = () => {} }) => {
  const open = useMemo(() => Boolean(anchorElement), [anchorElement]);

  return (
    <Popover
      className={Classnames(styles.feedbackPopover, className)}
      open={open}
      anchorEl={anchorElement}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <FormGroup className={styles.feedbackWrapper}>
        <FormControlLabel
          className={styles.feedbackItem}
          value='INCORRECT'
          control={<Checkbox className={styles.feedbackItemCheckbox} disableRipple={true} />}
          label='정확하지 않은 답변이에요'
        />
        <FormControlLabel
          className={styles.feedbackItem}
          value='AWKWARD'
          control={<Checkbox className={styles.feedbackItemCheckbox} disableRipple={true} />}
          label='문구가 자연스럽지 않아요'
        />
        <FormControlLabel
          className={styles.feedbackItem}
          value='NOT_REFLECTED'
          control={<Checkbox className={styles.feedbackItemCheckbox} disableRipple={true} />}
          label='요청사항이 반영되지 않았어요'
        />
        <FormControlLabel
          className={styles.feedbackItem}
          value='ETC'
          control={<Checkbox className={styles.feedbackItemCheckbox} disableRipple={true} />}
          label={
            <Box className={styles.feedbackItemEtcLabelWrapper}>
              기타
              <TextField
                className={styles.textField}
                variant='standard'
                placeholder='의견을 기재해주세요'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SendAlt className={styles.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          }
        />
      </FormGroup>
    </Popover>
  );
};

export default FeedbackPopover;

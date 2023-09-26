import React, { ChangeEvent } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { SendAlt } from 'src/Icon';
import type { FeedbackPopoverItemProps } from './FeedbackPopoverItem.types';
import styles from './FeedbackPopoverItem.scss';
import { feedbackTypeToFeedbackString } from '../../CopyWritingSuggestionItemUtils';

const FeedbackPopoverItem: React.FC<FeedbackPopoverItemProps> = ({
  className,
  type,
  checked,
  etcFeedback,
  onChange = () => {},
}) => {
  const onCheckboxChanged = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.checked ? { type, etcFeedback: type === 'ETC' ? etcFeedback : undefined } : undefined);

  const onEtcFeedbackChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(_.isEmpty(event.target.value) ? undefined : { type, etcFeedback: event.target.value });

  return type !== 'ETC' ? (
    <FormControlLabel
      className={Classnames(styles.feedbackPopoverItem, className)}
      value={type}
      control={
        <Checkbox
          className={styles.feedbackItemCheckbox}
          disableRipple={true}
          checked={checked}
          onChange={onCheckboxChanged}
        />
      }
      label={feedbackTypeToFeedbackString(type)}
    />
  ) : (
    <FormControlLabel
      className={styles.feedbackPopoverItem}
      value='ETC'
      control={
        <Checkbox
          className={styles.feedbackItemCheckbox}
          disableRipple={true}
          checked={checked}
          onChange={onCheckboxChanged}
        />
      }
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
            value={etcFeedback}
            onChange={onEtcFeedbackChange}
          />
        </Box>
      }
    />
  );
};

export default FeedbackPopoverItem;

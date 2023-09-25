import React, { ChangeEvent, useState } from 'react';
import Classnames from 'classnames';

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
  const [etcText, setEtcText] = useState<string | undefined>(etcFeedback);
  const onCheckboxChanged = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.checked ? { type, etcFeedback: type === 'ETC' ? etcText : undefined } : undefined);

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
            value={etcText}
            // @ts-ignore
            onChange={setEtcText}
          />
        </Box>
      }
    />
  );
};

export default FeedbackPopoverItem;

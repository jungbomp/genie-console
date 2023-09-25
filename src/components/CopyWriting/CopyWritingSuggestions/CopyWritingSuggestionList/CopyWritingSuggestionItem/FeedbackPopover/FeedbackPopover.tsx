import React, { useMemo } from 'react';
import Classnames from 'classnames';

import FormGroup from '@mui/material/FormGroup';
import Popover from '@mui/material/Popover';

import type { FeedbackItem, FeedbackType } from '../CopyWritingSuggestionItem.types';

import FeedbackPopoverItem from './FeedbackPopoverItem/FeedbackPopoverItem';

import type { FeedbackPopoverProps } from './FeedbackPopover.types';
import { isContainFeedbackItem } from './FeedbackPopover.utils';

import styles from './FeedbackPopover.scss';

const FeedbackPopover: React.FC<FeedbackPopoverProps> = ({
  className,
  anchorElement,
  value = [],
  onChange = () => {},
  onClose = () => {},
}) => {
  const open = useMemo(() => Boolean(anchorElement), [anchorElement]);

  const getFeedbackItemChangeHandler =
    (type: FeedbackType): ((item?: FeedbackItem) => void) =>
    (item?: FeedbackItem) =>
      onChange([...value.filter((feedbackItem: FeedbackItem) => feedbackItem.type !== type), ...(item ? [item] : [])]);

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
        <FeedbackPopoverItem
          type='INCORRECT'
          checked={isContainFeedbackItem(value, 'INCORRECT')}
          onChange={getFeedbackItemChangeHandler('INCORRECT')}
        />
        <FeedbackPopoverItem
          type='AWKWARD'
          checked={isContainFeedbackItem(value, 'AWKWARD')}
          onChange={getFeedbackItemChangeHandler('AWKWARD')}
        />
        <FeedbackPopoverItem
          type='NOT_REFLECTED'
          checked={isContainFeedbackItem(value, 'NOT_REFLECTED')}
          onChange={getFeedbackItemChangeHandler('NOT_REFLECTED')}
        />
        <FeedbackPopoverItem
          type='ETC'
          checked={isContainFeedbackItem(value, 'ETC')}
          onChange={getFeedbackItemChangeHandler('ETC')}
          etcFeedback={value.find(({ type }: FeedbackItem) => type === 'ETC')?.etcFeedback}
        />
      </FormGroup>
    </Popover>
  );
};

export default FeedbackPopover;

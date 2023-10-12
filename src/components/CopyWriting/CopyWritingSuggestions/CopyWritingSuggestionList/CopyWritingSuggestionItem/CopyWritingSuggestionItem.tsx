import React, { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from 'react';
import Classnames from 'classnames';
import { useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import StateChip from 'src/components/common/StateChip/StateChip';
import { Edit, Copy, ThumbsDown, ThumbsUp } from 'src/Icon';

import FeedbackPopover from './FeedbackPopover/FeedbackPopover';

import type { CopyWritingSuggestionItemProps, FeedbackItem } from './CopyWritingSuggestionItem.types';

import styles from './CopyWritingSuggestionItem.scss';

const CopyWritingSuggestionItem: React.FC<CopyWritingSuggestionItemProps> = ({
  className,
  genieSuggestion = false,
  copyWrite,
  onClick = () => {},
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [suggestionCopyWrite, setSuggestionCopyWrite] = useState<string>(copyWrite);
  const [feedbackAnchorEl, setFeedbackAnchorEl] = useState<HTMLButtonElement | undefined>();
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const cardHeader = useMemo(
    () => (genieSuggestion ? <Chip className={styles.chip} label='지니의 추천' size='small' /> : null),
    [genieSuggestion],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSuggestionCopyWrite(event.target.value);
  };

  useEffect(() => {
    console.log('feedbacks: ', feedbacks);
  }, [feedbacks]);

  return (
    <Box className={Classnames(styles.copyWritingSuggestionItem, className)} onClick={onClick}>
      <Card className={styles.copyWritingSuggestionCardWrapper} elevation={0}>
        <CardHeader className={styles.cardHeader} avatar={cardHeader} />
        <CardContent className={styles.cardContent}>
          {isEditing ? (
            <TextField
              className={styles.cardContentText}
              multiline={true}
              variant='standard'
              value={suggestionCopyWrite}
              onBlur={() => setIsEditing(false)}
              onChange={onChange}
            />
          ) : (
            <Typography className={styles.typography} component='span' variant='body2'>
              <pre className={styles.pre}>{suggestionCopyWrite}</pre>
            </Typography>
          )}
        </CardContent>
        <CardActions className={styles.cardAction}>
          <Typography className={styles.wordCount}>
            {suggestionCopyWrite.length}자・{new Blob([suggestionCopyWrite]).size} byte
          </Typography>
          <Box className={styles.buttonWrapper}>
            <StateChip
              icon={<Edit className={styles.buttonIcon} />}
              title='수정하기'
              size='large'
              onClick={() => setIsEditing(true)}
            />
            <CopyToClipboard
              text={suggestionCopyWrite}
              onCopy={() => enqueueSnackbar('클립보드에 복사되었습니다.', { variant: 'success' })}
            >
              <StateChip icon={<Copy className={styles.buttonIcon} />} title='복사하기' size='large' />
            </CopyToClipboard>
          </Box>
        </CardActions>
      </Card>
      <Box className={styles.copyWritingSuggestionVoteWrapper}>
        <Button
          className={styles.voteButton}
          variant='contained'
          disableElevation={true}
          startIcon={<ThumbsUp className={styles.voteButtonIcon} />}
          onClick={() => {
            console.log('clicked thumbUp');
          }}
        />
        <Button
          className={styles.voteButton}
          variant='contained'
          disableElevation={true}
          startIcon={<ThumbsDown className={styles.voteButtonIcon} />}
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            setFeedbackAnchorEl(event.currentTarget);
          }}
        />
        <FeedbackPopover
          anchorElement={feedbackAnchorEl}
          value={feedbacks}
          onChange={setFeedbacks}
          onClose={() => setFeedbackAnchorEl(undefined)}
        />
      </Box>
    </Box>
  );
};

export default CopyWritingSuggestionItem;

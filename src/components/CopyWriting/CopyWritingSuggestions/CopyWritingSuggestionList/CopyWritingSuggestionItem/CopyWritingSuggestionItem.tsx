import React, { ChangeEvent, useMemo, useState } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

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

import type { CopyWritingSuggestionItemProps } from './CopyWritingSuggestionItem.types';

import styles from './CopyWritingSuggestionItem.scss';

const CopyWritingSuggestionItem: React.FC<CopyWritingSuggestionItemProps> = ({
  className,
  genieSuggestion = false,
  copyWrite,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [suggestionCopyWrite, setSuggestionCopyWrite] = useState<string>(copyWrite);
  const cardHeader = useMemo(
    () => (genieSuggestion ? <Chip className={styles.chip} label='지니의 추천' size='small' /> : null),
    [genieSuggestion],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSuggestionCopyWrite(event.target.value);
  };

  console.log('length: ', _.toLength(copyWrite));

  return (
    <Box className={Classnames(styles.copyWritingSuggestionItem, className)}>
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
            <StateChip icon={<Copy className={styles.buttonIcon} />} title='복사하기' size='large' />
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
            console.log('clicked');
          }}
        />
        <Button
          className={styles.voteButton}
          variant='contained'
          disableElevation={true}
          startIcon={<ThumbsDown className={styles.voteButtonIcon} />}
          onClick={() => {
            console.log('clicked');
          }}
        />
      </Box>
    </Box>
  );
};

export default CopyWritingSuggestionItem;

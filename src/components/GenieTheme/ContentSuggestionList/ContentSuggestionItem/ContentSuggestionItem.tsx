import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { StarFilled } from 'src/Icon';

import type { ContentSuggestionItemProps } from './ContentSuggestionItem.types';

import styles from './ContentSuggestionItem.scss';

const ContentSuggestionItem: React.FC<ContentSuggestionItemProps> = ({
  className,
  imgUrl,
  title,
  rating,
  selected = false,
  onClick = () => {},
}) => {
  return (
    <ImageListItem
      className={Classnames(styles.contentSuggestionItem, { [styles.selected]: selected }, className)}
      key={imgUrl}
      onClick={() => onClick(imgUrl, !selected)}
    >
      <img className={styles.img} src={imgUrl} alt={title} loading='lazy' />
      <ImageListItemBar
        className={styles.barItem}
        title={title}
        subtitle={
          <Box className={styles.ratingWrapper}>
            <StarFilled className={styles.icon} />
            {rating}
          </Box>
        }
        position='below'
      />
      <Box className={styles.checkWrapper}>{selected ? <Box className={styles.checked} /> : null}</Box>
    </ImageListItem>
  );
};

export default ContentSuggestionItem;

import React from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import noImage from 'images/no_image.jpg';

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
      <Box className={styles.imageWrapper}>
        <img className={styles.img} src={_.isEmpty(imgUrl) ? noImage : imgUrl} alt={title} loading='lazy' />
      </Box>
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

import React, { useEffect, useMemo, useState } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormLabel from '@mui/material/FormLabel';

import { GenieThemeVodRecommendationItem } from 'src/components/GenieTheme/GenieTheme.types';

import ContentSuggestionItem from './ContentSuggestionItem/ContentSuggestionItem';

import type { ContentSuggestionListProps } from './ContentSuggestionList.types';

import styles from './ContentSuggestionList.scss';

const ContentSuggestionList: React.FC<ContentSuggestionListProps> = ({
  className,
  vodRecommendationItems,
  onChangeSelectedItems = () => {},
  onClickGenerateThemeSuggestions = () => {},
}) => {
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>(
    vodRecommendationItems.reduce(
      (accu: { [key: string]: boolean }, { imgUrl }: GenieThemeVodRecommendationItem) => ({ ...accu, [imgUrl]: true }),
      {},
    ),
  );

  const onClickContentSuggestionItem = (key: string, selected: boolean) => {
    setSelectedItems({ ...selectedItems, [key]: selected });
  };

  const onClickGenerateThemes = () =>
    onClickGenerateThemeSuggestions(
      Object.keys(selectedItems)
        .filter((key: string) => selectedItems[key])
        .map((url: string) => vodRecommendationItems.find(({ imgUrl }) => imgUrl === url)?.title ?? ''),
    );

  const isAnySelected = useMemo(
    () => Object.values(selectedItems).some((selected: boolean) => selected),
    [selectedItems],
  );

  useEffect(() => {
    onChangeSelectedItems(
      // @ts-ignore
      Object.keys(selectedItems)
        .filter((key: string) => selectedItems[key])
        .map((url: string) => vodRecommendationItems.find(({ imgUrl }) => imgUrl === url))
        .filter((item?: GenieThemeVodRecommendationItem) => item !== undefined),
    );
  }, [selectedItems]);

  return (
    <Box className={Classnames(styles.contentSuggestionList, className)}>
      <Box className={styles.header}>
        <FormLabel className={styles.label}>추천 콘텐츠 리스트</FormLabel>
        <Chip
          className={styles.headerButton}
          label='테마명 생성'
          disabled={!isAnySelected}
          onClick={onClickGenerateThemes}
        />
      </Box>
      <Box className={styles.contentSuggestionListWrapper}>
        {vodRecommendationItems.map(({ title, imgUrl, rating }: GenieThemeVodRecommendationItem) => (
          <ContentSuggestionItem
            key={imgUrl}
            imgUrl={imgUrl}
            title={title}
            rating={rating}
            selected={selectedItems[imgUrl]}
            onClick={onClickContentSuggestionItem}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ContentSuggestionList;

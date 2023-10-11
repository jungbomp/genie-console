import React, { useEffect, useState } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';

import type { MidmApiResponse, MidmGeneratingOptionPreset } from 'src/types';
import EmptySuggestion from 'src/components/common/EmptySuggestion/EmptySuggestion';

import GenieThemeDialog from 'src/components/GenieTheme/GenieThemeDialog/GenieThemeDialog';
import GenieThemeHeader from './GenieThemeHeader/GenieThemeHeader';
import ContentSuggestionList from './ContentSuggestionList/ContentSuggestionList';
import ThemeSuggestionList from './ThemeSuggestionList/ThemeSuggestionList';

import { GENIE_THEME_REQUEST_CNT, genieThemeMidmGeneratingOptionPresets } from './GenieTheme.constants';
import type { GenieThemeProps, GenieThemeVodRecommendationItem } from './GenieTheme.types';
import {
  getDrsGenieRecommendationVodItems,
  getGenieThemeSuggestionsFromMidmApiResponses,
  getGenieThemeVodRecommendationItems,
  getThemeContentsAsync,
  getThemeSuggestionAsync,
} from './GenieTheme.utils';

import styles from './GenieTheme.scss';

const GenieTheme: React.FC<GenieThemeProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [presetIndex, setPresetIndex] = useState<number>(0);
  const [target, setTarget] = useState<string>();
  const [keywords, setKeywords] = useState<string[]>([]);
  const [vodRecommendationItems, setVodRecommendationItems] = useState<GenieThemeVodRecommendationItem[]>([]);
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showGenerateMoreButton, setShowGenerateMoreButton] = useState<boolean>(true);

  const onTargetChange = (value?: string) => {
    setTarget(value);
    setKeywords([]);
  };

  const onKeywordAdd = (keyword: string) => {
    setKeywords([...new Set([...keywords, keyword]).values()]);
  };

  const onKeywordDelete = (keyword: string) => {
    setKeywords(keywords.filter((value: string) => value !== keyword));
  };

  const generateContent = () => {
    if (target) {
      setIsLoading(true);
      getThemeContentsAsync(target, keywords)
        .then(getDrsGenieRecommendationVodItems)
        .then(getGenieThemeVodRecommendationItems)
        .then(setVodRecommendationItems)
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const onSelectedVodRecommendationItemsChange = (items: GenieThemeVodRecommendationItem[]) =>
    setSelectedTitles(items.map(({ title }: GenieThemeVodRecommendationItem): string => title));

  const generateThemeSuggestion = (
    indices: number[],
    baseIndex: number,
    titles: string[],
    presets: MidmGeneratingOptionPreset[],
    isAttach: boolean,
  ) => {
    if (!target) {
      return;
    }

    setIsLoading(true);
    Promise.all(
      indices.map((i: number) =>
        _.isEmpty(presets[baseIndex + i])
          ? Promise.resolve(undefined)
          : getThemeSuggestionAsync(target, keywords, titles, presets[baseIndex + i]),
      ),
    )
      // @ts-ignore
      .then((rets: MidmApiResponse[]) => {
        if (isAttach) {
          setSuggestions(_.uniq([...suggestions, ...getGenieThemeSuggestionsFromMidmApiResponses(rets)]));
        } else {
          setSuggestions(getGenieThemeSuggestionsFromMidmApiResponses(rets));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickGenerateThemeSuggestion = (titles: string[]) => {
    const indices = new Array(GENIE_THEME_REQUEST_CNT).fill(0).map((num: number, i) => i);
    setSelectedTitles(titles);
    generateThemeSuggestion(indices, 0, titles, genieThemeMidmGeneratingOptionPresets, false);
    setPresetIndex(Math.min(presetIndex + indices.length, genieThemeMidmGeneratingOptionPresets.length));
  };

  const onClickGenerateMoreThemeSuggestion = () => {
    generateThemeSuggestion([0], presetIndex, selectedTitles, genieThemeMidmGeneratingOptionPresets, true);
    setPresetIndex(Math.min(presetIndex + 1, genieThemeMidmGeneratingOptionPresets.length));
  };

  useEffect(() => {
    setShowGenerateMoreButton(presetIndex < genieThemeMidmGeneratingOptionPresets.length);
  }, [presetIndex]);

  return (
    <Box className={Classnames(styles.genieTheme, className)}>
      <GenieThemeHeader
        target={target}
        keywords={keywords}
        onTargetChange={onTargetChange}
        onKeywordAdd={onKeywordAdd}
        onKeywordDelete={onKeywordDelete}
        onGenerateContentClick={generateContent}
      />
      <Box className={styles.genieThemeSuggestionWrapper}>
        {_.isEmpty(vodRecommendationItems) ? (
          <EmptySuggestion
            title='믿음 주는 AI 지니'
            subtitle='지니테마 폼을 이용하면 추천 테마명 및 콘텐츠를 제공합니다.'
          />
        ) : (
          <>
            <ContentSuggestionList
              vodRecommendationItems={vodRecommendationItems}
              onChangeSelectedItems={onSelectedVodRecommendationItemsChange}
              onClickGenerateThemeSuggestions={onClickGenerateThemeSuggestion}
            />
            <Divider orientation='vertical' flexItem={true} />
            <ThemeSuggestionList
              themeSuggestions={suggestions}
              showGenerateMoreButton={showGenerateMoreButton}
              onClickGenerateMoreThemeSuggestion={onClickGenerateMoreThemeSuggestion}
              onClickApply={() => console.log('onClickApply')}
            />
          </>
        )}
      </Box>
      <Backdrop open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <GenieThemeDialog
        isOpen={vodRecommendationItems.length > 0}
        themeTitle='슈퍼히어로의 세계를 만나보세요'
        themeItems={vodRecommendationItems.filter((item, i) => i < 4)}
      />
    </Box>
  );
};

export default GenieTheme;

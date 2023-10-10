import _ from 'lodash';

import { getKtPocImageCdnUrl } from 'src/services/apis';
import { getCopyWrites, getThemeContents } from 'src/services/services';
import type { DrsGenieRecommendationVodItem, MidmApiResponse, MidmGeneratingOptionPreset } from 'src/types';

import { targetMap, drsThemeOptionPresets, defaultDrsOption } from './GenieTheme.constants';
import type { TargetType } from './GenieTheme.types';
import { GenieThemeVodRecommendationItem } from './GenieTheme.types';

export const getTargetType = (target: string): TargetType | undefined => {
  const normalizedTargetStr = target.replaceAll(' ', '');
  const entry = Object.entries(targetMap).find(([, values]) =>
    values.some((value: string) => value === normalizedTargetStr),
  );
  return (entry && (entry[0] as TargetType)) || undefined;
};

export const buildKeyFromKeywords = (keywords: string[]): string => keywords.sort().join('|');

export const buildDrsRequestBody = (preset: { [key: string]: string }): string => {
  return Object.entries({ ...defaultDrsOption, ...preset })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export const getThemeContentsAsync = (target: string, keywords: string[]): Promise<any> => {
  const targetType = getTargetType(target);
  if (!targetType) {
    return Promise.resolve();
  }

  const preset = _.isEmpty(keywords)
    ? // @ts-ignore
      drsThemeOptionPresets[targetType]?.NO_KEYWORD
    : // @ts-ignore
      (drsThemeOptionPresets[targetType] && drsThemeOptionPresets[targetType][buildKeyFromKeywords(keywords)]) ||
      undefined;

  if (!preset) {
    return Promise.resolve();
  }

  return getThemeContents(buildDrsRequestBody(preset));
};

export const vodItemToDrsGenieRecommendationVodItem = (vodItem: {
  [key: string]: any;
}): DrsGenieRecommendationVodItem => {
  return Object.keys(vodItem).reduce((accu: any, key: string) => {
    if (!_.isEmpty(vodItem[key]) && Object.values(vodItem[key]).length > 0) {
      // eslint-disable-next-line no-param-reassign,prefer-destructuring
      accu[key] = Object.values(vodItem[key])[0];
    }

    return accu;
  }, {});
};

export const getDrsGenieRecommendationVodItems = (drsGenieRecommendation: any): DrsGenieRecommendationVodItem[] => {
  const vodItem = drsGenieRecommendation?.ssearch?.output?.search?.VOD_ITEM;

  if (_.isEmpty(vodItem)) {
    return [];
  }

  return _.isArray(vodItem)
    ? vodItem.map(vodItemToDrsGenieRecommendationVodItem)
    : [vodItemToDrsGenieRecommendationVodItem(vodItem)];
};

export const resolveImageUrl = (url: string) => `${getKtPocImageCdnUrl()}/${url.split('/').pop()}`;

export const getGenieThemeVodRecommendationItems = (
  drsGenieRecommendationVodItems: DrsGenieRecommendationVodItem[],
): GenieThemeVodRecommendationItem[] =>
  drsGenieRecommendationVodItems.map(({ TITLE, G_WIDE_IMG, OLLEHP }: DrsGenieRecommendationVodItem) => ({
    title: TITLE,
    imgUrl: resolveImageUrl(G_WIDE_IMG),
    rating: parseFloat(OLLEHP),
  }));

export const buildTriggerWords = (additionalMeta: string[]): string =>
  !_.isEmpty(additionalMeta || []) && additionalMeta.some((meta: string) => meta === 'trigger_words')
    ? `\n이때, "인기","신작","흥행"과 같은 내용이 들어갈 수 있도록 생성해줘`
    : '';

export const buildMetaWords = (keywords: string[]): string =>
  _.isEmpty(keywords) ? '' : `키워드는 ${keywords.map((keyword: string) => `"${keyword}"`).join(', ')}를 넣어줘.`;

export const buildMidmPrompt = (keywords: string[], titles: string[], additionalMeta: string[]): string =>
  `다음 콘텐츠를 한 화면에 보여줄 때, 해당 화면의 제목으로 사용할만한 짧은 구문을 기본 특수기호를 포함해서 30자 이내로 작성해줘. ${buildMetaWords(
    keywords,
  )} 구문을 구성할 때 참조해.\n${titles.join(',')}${buildTriggerWords(additionalMeta)}`;

export const getThemeSuggestionAsync = (
  target: string,
  keywords: string[],
  titles: string[],
  optionPreset: MidmGeneratingOptionPreset,
): Promise<MidmApiResponse> => {
  const midmPrompt = buildMidmPrompt(keywords, titles, optionPreset.additional_meta);

  if (!midmPrompt) {
    // @ts-ignore
    return Promise.resolve({});
  }

  return getCopyWrites(midmPrompt, optionPreset.model_parameter);
};

export const getGenieThemeSuggestionsFromMidmApiResponses = (midms: MidmApiResponse[]): string[] =>
  _.uniq(
    midms
      .map((midm: MidmApiResponse) => (midm?.result?.text ?? [])[0])
      .filter((suggestion?: string) => !_.isEmpty(suggestion)),
  );

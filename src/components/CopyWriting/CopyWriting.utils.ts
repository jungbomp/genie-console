import _ from 'lodash';

import type { AutoWordItem, MidmApiResponse, MidmGeneratingOptionPreset } from 'src/types';
import { getCopyWrites } from 'src/services/services';

import { promotionMap, wordMetaKeyMap } from './CopyWriting.constants';
import type { CopyWritingOption, CopyWritingSuggestionItem, PromotionType } from './CopyWriting.types';

export const buildTriggerWords = (additionalMeta: string[]): string =>
  !_.isEmpty(additionalMeta || []) && additionalMeta.some((meta: string) => meta === 'trigger_words')
    ? `\n이때, "인기","신작","흥행"과 같은 내용이 들어갈 수 있도록 생성해줘`
    : '';

export const buildMetaWords = (essentialMeta: string[], autoWordItem: AutoWordItem): string =>
  `\n${[
    `제목: ${autoWordItem.SEARCH_WORD}`,
    ...essentialMeta
      .map((key: string) => key.toUpperCase())
      // @ts-ignore
      .filter((key: string) => wordMetaKeyMap[key] && autoWordItem[key])
      // @ts-ignore
      .map((key: string) => `${wordMetaKeyMap[key]}: ${autoWordItem[key]}`),
  ].join('\t')}`;

export const buildPromotionString = (promotionType?: PromotionType, promotionDetails?: string) => {
  if (!promotionType) {
    return '';
  }

  if (promotionType === 'FREE') {
    return `\n프로모션: ${promotionMap[promotionType]}`;
  }

  return `\n프로모션: ${promotionMap[promotionType]}${_.isEmpty(promotionDetails) ? '' : `/${promotionDetails}`}`;
};

export const buildMidmMarketingPrompt = (
  isShort: boolean,
  wordCount: number,
  autoWordItem: AutoWordItem,
  optionPreset: MidmGeneratingOptionPreset,
  promotionType?: PromotionType,
  promotionDetails?: string,
): string =>
  `다음 콘텐츠에 대한 창의적인 ${
    isShort ? '짧은' : '긴'
  } 마케팅 문구를 ${wordCount}자 이내로 작성해줘.${buildTriggerWords(
    optionPreset.additional_meta ?? [],
  )}${buildMetaWords(optionPreset.essential_meta ?? [], autoWordItem)}${buildPromotionString(
    promotionType,
    promotionDetails,
  )}`;

export const buildMidmSynopsisPrompt = (
  wordCount: number,
  autoWordItem: AutoWordItem,
  optionPreset: MidmGeneratingOptionPreset,
): string =>
  `다음 콘텐츠의 시놉시스를 ${wordCount}자 이내로 요약해줘.${buildTriggerWords(
    optionPreset.additional_meta ?? [],
  )}${buildMetaWords(optionPreset.essential_meta ?? [], autoWordItem)}`;

export const buildMidmPrompt = (
  copyWritingOption: CopyWritingOption,
  autoWordItem: AutoWordItem,
  optionPreset: MidmGeneratingOptionPreset,
): string | undefined => {
  if (copyWritingOption.copyType === 'HEAD' || copyWritingOption.copyType === 'BODY') {
    return buildMidmMarketingPrompt(
      copyWritingOption.copyType === 'HEAD',
      copyWritingOption.wordCount ?? (copyWritingOption.copyType === 'HEAD' ? 40 : 100),
      autoWordItem,
      optionPreset,
      copyWritingOption.promotionType,
      copyWritingOption.promotionDetails,
    );
  }

  if (copyWritingOption.copyType === 'SYNOPSIS') {
    return buildMidmSynopsisPrompt(copyWritingOption.wordCount ?? 100, autoWordItem, optionPreset);
  }

  return undefined;
};

export const getCopyWriteAsync = (
  option: CopyWritingOption,
  autoWordItem: AutoWordItem,
  optionPreset: MidmGeneratingOptionPreset,
): Promise<MidmApiResponse> => {
  const midmPrompt = buildMidmPrompt(option, autoWordItem, optionPreset);

  if (!midmPrompt) {
    // @ts-ignore
    return Promise.resolve({});
  }

  return getCopyWrites(midmPrompt, optionPreset.model_parameter);
};

export const getCopyWritingSuggestionsFromMidmApiResponses = (midms: MidmApiResponse[]): CopyWritingSuggestionItem[] =>
  _.uniq(
    midms
      .map((midm: MidmApiResponse) => (midm?.result?.text ?? [])[0])
      .filter((suggestion?: string) => !_.isEmpty(suggestion)),
  ).map((suggestion: string) => ({ copyWrite: suggestion }));

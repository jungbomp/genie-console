import _ from 'lodash';

import type { AutoWordItem, MidmApiResponse, MidmGeneratingOptionPreset } from 'src/types';
import { getCopyWrites } from 'src/services/services';

import { wordMetaKeyMap } from './CopyWriting.constants';
import type { CopyWritingOption, CopyWritingSuggestionItem } from './CopyWriting.types';

export const buildPromotionString = (promotions: string[]) =>
  promotions.map((promotion: string) => `"${promotion}"`).join(',');

export const buildMidmMarketingPrompt = (
  isShort: boolean,
  wordCount: number,
  promotions: string[],
  title: string,
  autoWordItem: AutoWordItem,
  optionPreset: MidmGeneratingOptionPreset,
): string => {
  return `다음 콘텐츠에 대한 창의적인 ${isShort ? '짧은' : '긴'} 마케팅 문구를 ${wordCount}자 이내로 작성해줘. ${
    !_.isEmpty(promotions) ? `\n이때, ${buildPromotionString(promotions)}과 같은 내용이 들어갈 수 있도록 생성해줘` : ''
  }\n제목: ${title}${optionPreset.essential_meta
    .map((key: string) => key.toUpperCase())
    // @ts-ignore
    .filter((key: string) => wordMetaKeyMap[key] && autoWordItem[key])
    // @ts-ignore
    .map((key: string) => `\t${wordMetaKeyMap[key]}: ${autoWordItem[key]}`)
    .join('')}`;
};

export const buildMidmSynopsisPrompt = (
  numberOfLine: number,
  title: string,
  autoWordItem: AutoWordItem,
  optionPreset: MidmGeneratingOptionPreset,
): string => {
  return `다음 콘텐츠의 시놉시스를 ${numberOfLine}줄 이내로 요약해줘.\n제목: ${title}${optionPreset.essential_meta
    .map((key: string) => key.toUpperCase())
    // @ts-ignore
    .filter((key: string) => wordMetaKeyMap[key] && autoWordItem[key])
    // @ts-ignore
    .map((key: string) => `\t${wordMetaKeyMap[key]}: ${autoWordItem[key]}`)
    .join('')}`;
};

export const resolvePromotions = ({ promotionType, promotionDetails }: CopyWritingOption) => {
  if (!promotionType) {
    return [];
  }

  if (promotionType === 'FREE') {
    return ['무료'];
  }

  return (promotionDetails ?? '')
    .split(',')
    .map((promotion: string) => promotion.trim())
    .filter((promotion: string) => !_.isEmpty(promotion));
};

export const buildMidmPrompt = (
  copyWritingOption: CopyWritingOption,
  autoWordItem: AutoWordItem,
  optionPreset: MidmGeneratingOptionPreset,
): string | undefined => {
  if (copyWritingOption.copyType === 'HEAD' || copyWritingOption.copyType === 'BODY') {
    return buildMidmMarketingPrompt(
      copyWritingOption.copyType === 'HEAD',
      copyWritingOption.wordCount ?? 40,
      resolvePromotions(copyWritingOption),
      copyWritingOption.contentTitle,
      autoWordItem,
      optionPreset,
    );
  }

  if (copyWritingOption.copyType === 'SYNOPSIS') {
    return buildMidmSynopsisPrompt(
      copyWritingOption.wordCount ?? 3,
      copyWritingOption.contentTitle,
      autoWordItem,
      optionPreset,
    );
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

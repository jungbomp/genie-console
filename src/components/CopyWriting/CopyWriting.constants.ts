import type { MidmGeneratingOptionPreset } from 'src/types';

export const COPY_WRITING_PATH_ID = 'COPY_WRITING';
export const COPY_WRITING_PATH_PREFIX = 'copy-writing';
export const COPY_WRITING_TITLE = '지니카피라이팅';

export const COPY_WRITING_REQUEST_CNT = 1;

export const wordMetaKeyMap = {
  SEARCH_WORD: '제목',
  EXPOSURE_GENRE: '노출 장르',
  EXPOSURE_DTL_GENRE: '세부장르',
  DIRECTOR: '감독',
  CCUBE_LEADING_ACTORS: '주연배우',
  CCUBE_META_WHAT: '주제소재',
  CCUBE_META_WHO: '인물',
  CCUBE_META_EMOTION: '감성',
  CCUBE_META_SUBGENRE: '서브장르',
  SYNOPSIS: '시놉시스',
  G_WIDE_IMG_DESC: '가로형 포스터',
  G_LIST_TITLE_IMG_DESC: '타이틀 이미지',
};

export const promotionMap = {
  FREE: '무료',
  GIFT: '경품',
  TV_COUPON: 'TV쿠폰',
  DISCOUNT: '가격할인',
};

export const marketingMidmGeneratingOptionPresets: MidmGeneratingOptionPreset[] = [
  {
    rule_id: 'rule_20230926_ms_001',
    essential_meta: [
      'title',
      'Exposure_Dtl_Genre',
      'CCube_Leading_actors',
      'Ccube_Meta_what',
      'Ccube_Meta_who',
      'Ccube_Meta_emotion',
      'Ccube_Meta_subgenre',
    ],
    additional_meta: [],
    model_parameter: {
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repetition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '기본 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_ms_004',
    essential_meta: [
      'title',
      'Exposure_Dtl_Genre',
      'Ccube_Meta_what',
      'Ccube_Meta_who',
      'Ccube_Meta_emotion',
      'Ccube_Meta_subgenre',
    ],
    additional_meta: [],
    model_parameter: {
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repetition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '주연 제외 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_ms_007',
    essential_meta: [
      'title',
      'Exposure_Dtl_Genre',
      'CCube_Leading_actors',
      'Ccube_Meta_what',
      'Ccube_Meta_who',
      'Ccube_Meta_emotion',
      'Ccube_Meta_subgenre',
    ],
    additional_meta: ['trigger_words'],
    model_parameter: {
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repetition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '트리거 포함 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_ms_010',
    essential_meta: [
      'title',
      'Exposure_Dtl_Genre',
      'Ccube_Meta_what',
      'Ccube_Meta_who',
      'Ccube_Meta_emotion',
      'Ccube_Meta_subgenre',
    ],
    additional_meta: ['trigger_words'],
    model_parameter: {
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repetition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '주연 제외, 트리거 포함 - diversity 1',
  },
];

export const synopsisMidmGeneratingOptionPresets: MidmGeneratingOptionPreset[] = [
  {
    rule_id: 'rule_20230926_ss_001',
    essential_meta: ['title', 'synopsis'],
    additional_meta: [],
    model_parameter: {
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repetition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '기본 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_ss_004',
    essential_meta: ['title', 'synopsis'],
    additional_meta: ['trigger_words'],
    model_parameter: {
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repetition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '트리거 포함 - diversity 1',
  },
];

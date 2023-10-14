/* eslint-disable no-useless-computed-key */
import { MidmGeneratingOptionPreset } from 'src/types';
import { eucKrUrlEncode } from 'src/utils';

export const GENIE_THEME_PATH_ID = 'GENIE_THEME';
export const GENIE_THEME_PATH_PREFIX = 'genie-theme';
export const GENIE_THEME_TITLE = '지니테마';

export const GENIE_THEME_REQUEST_CNT = 1;

export const TargetTypes = {
  TODDLER: 'TODDLER',
  KID: 'KID',
  '10S': '10S',
  '10S_MALE': '10S_MALE',
  '10S_FEMALE': '10S_FEMALE',
  '20S': '20S',
  '20S_MALE': '20S_MALE',
  '20S_FEMALE': '20S_FEMALE',
  '30S': '30S',
  '30S_MALE': '30S_MALE',
  '30S_FEMALE': '30S_FEMALE',
  '40S': '40S',
  '40S_MALE': '40S_MALE',
  '40S_FEMALE': '40S_FEMALE',
  '50S': '50S',
  '50S_MALE': '50S_MALE',
  '50S_FEMALE': '50S_FEMALE',
  '60S': '60S',
  '60S_MALE': '60S_MALE',
  '60S_FEMALE': '60S_FEMALE',
  '70S': '70S',
  '70S_MALE': '70S_MALE',
  '70S_FEMALE': '70S_FEMALE',
  '80S': '80S',
  '80S_MALE': '80S_MALE',
  '80S_FEMALE': '80S_FEMALE',
} as const;

export const targetMap = {
  [TargetTypes.TODDLER]: [
    '5-6',
    '5~6',
    '5-6세어린이',
    '5세어린이',
    '6세어린이',
    '5~6세어린이',
    '5-6새어린이',
    '5새어린이',
    '6새어린이',
    '5~6새어린이',
    '5-6세아이',
    '5세아이',
    '6세아이',
    '5~6세아이',
    '5-6새아이',
    '5새아이',
    '6새아이',
    '5~6새아이',
  ],
  [TargetTypes.KID]: ['저학년어린이', '저학년', '저학년아이'],
  [TargetTypes['20S']]: ['20대'],
  [TargetTypes['20S_MALE']]: ['20대남자', '20대남성'],
  [TargetTypes['20S_FEMALE']]: ['20대여자', '20대여성'],
  [TargetTypes['30S']]: ['30대'],
  [TargetTypes['30S_MALE']]: ['30대남자', '30대남성'],
  [TargetTypes['30S_FEMALE']]: ['30대여자', '30대여성'],
  [TargetTypes['40S']]: ['40대'],
  [TargetTypes['40S_MALE']]: ['40대남자', '40대남성'],
  [TargetTypes['40S_FEMALE']]: ['40대여자', '40대여성'],
};

export const drsThemeOptionPresets = {
  [TargetTypes.TODDLER]: {
    NO_KEYWORD: {
      TYPE: 'KTHA',
      QUERY: `age${eucKrUrlEncode(':')}03`,
    },
    ['영어']: {
      TYPE: 'KTHA',
      QUERY: `character${eucKrUrlEncode(':스콜라스틱')}`,
    },
    ['동요|영어']: {
      TYPE: 'KTHA',
      QUERY: `character${eucKrUrlEncode(':영어동요')}`,
    },
    ['인기']: {
      TYPE: 'KTHA',
      QUERY: `basic_emotion${eucKrUrlEncode(':트렌드')}`,
    },
  },
  [TargetTypes.KID]: {
    ['애니메이션']: {
      TYPE: 'THA',
      QUERY: `genre${eucKrUrlEncode(':액션|')}genre${eucKrUrlEncode(':코믹|')}type${eucKrUrlEncode(':애니영화')}`,
    },
    ['애니메이션|인기영화']: {
      TYPE: 'THA',
      QUERY: `basic_emotion${eucKrUrlEncode(':구매주간인기|')}uigenre${eucKrUrlEncode(
        ':영화|',
      )}uisubgenre${eucKrUrlEncode(':애니메이션')}`,
    },
    ['애니메이션|인기영화|판타지']: {
      TYPE: 'THA',
      QUERY: `genre${eucKrUrlEncode(':판타지|')}type${eucKrUrlEncode(':애니영화|')}genre${eucKrUrlEncode(':')}SF`,
    },
  },
  [TargetTypes['20S_MALE']]: {
    NO_KEYWORD: {
      TYPE: 'THA',
      QUERY: `uigenre${eucKrUrlEncode(':')}TV${eucKrUrlEncode('다시보기|')}trend${eucKrUrlEncode(':일간트렌드')}`,
    },
    ['판타지']: {
      TYPE: 'THA',
      QUERY: `genre${eucKrUrlEncode(':')}SF${eucKrUrlEncode('|')}genre${eucKrUrlEncode(':판타지|')}type${eucKrUrlEncode(
        ':애니영화',
      )}`,
    },
    ['영화|판타지']: {
      TYPE: 'THA',
      QUERY: `type${eucKrUrlEncode(':실사영화|')}topic${eucKrUrlEncode(':로봇')}`,
    },
    ['어린시절|영화|판타지']: {
      TYPE: 'THA',
      QUERY: `genre${eucKrUrlEncode(':판타지|')}creation_year_min${eucKrUrlEncode(':')}2010${eucKrUrlEncode(
        '|',
      )}creation_year_max${eucKrUrlEncode(':')}2100${eucKrUrlEncode('|')}type${eucKrUrlEncode(':실사영화')}`,
    },
    ['소설원작|영화|판타지']: {
      TYPE: 'THA',
      QUERY: `type${eucKrUrlEncode(':실사영화|')}topic${eucKrUrlEncode(':소설원작|')}genre${eucKrUrlEncode(':판타지')}`,
    },
  },
  [TargetTypes['30S']]: {
    NO_KEYWORD: {
      TYPE: 'THA',
      QUERY: `basic_emotion${eucKrUrlEncode(':구매주간인기|')}uigenre${eucKrUrlEncode(':')}TV${eucKrUrlEncode(
        '다시보기|',
      )}uisubgenre${eucKrUrlEncode(':시사교양')}`,
    },
    ['감동적인']: {
      TYPE: 'THA',
      QUERY: `emotion${eucKrUrlEncode(':유쾌한|')}emotion${eucKrUrlEncode(':감동적인|')}genre${eucKrUrlEncode(
        ':가족이 볼만한',
      )}`,
    },
    ['감동적인|작품성']: {
      TYPE: 'THA',
      QUERY: `Meta_award${eucKrUrlEncode(':오스카|')}type${eucKrUrlEncode(':실사영화')}`,
    },
    ['TV다시보기']: {
      TYPE: 'THA',
      QUERY: `basic_emotion${eucKrUrlEncode(':구매주간인기|')}uigenre${eucKrUrlEncode(':')}TV${eucKrUrlEncode(
        '다시보기|',
      )}uisubgenre${eucKrUrlEncode(':시사교양')}`,
    },
  },
  [TargetTypes['40S_FEMALE']]: {
    ['솔로']: {
      TYPE: 'THA',
      QUERY: `emotion${eucKrUrlEncode(':오늘밤에볼만한|')}target${eucKrUrlEncode(':솔로')}`,
    },
    ['로맨스|솔로']: {
      TYPE: 'THA',
      QUERY: `genre${eucKrUrlEncode(':로맨스|')}type${eucKrUrlEncode(':실사영화')}`,
    },
    ['2000년대|로맨스|솔로']: {
      TYPE: 'THA',
      QUERY: `genre${eucKrUrlEncode(':로맨스|')}creation_year_min${eucKrUrlEncode(':')}1999${eucKrUrlEncode(
        '|',
      )}creation_year_max${eucKrUrlEncode(':')}2003${eucKrUrlEncode('|')}type${eucKrUrlEncode(':실사영화')}`,
    },
    ['감동적인|로맨스|솔로']: {
      TYPE: 'THA',
      QUERY: `emotion${eucKrUrlEncode(':느린|')}emotion${eucKrUrlEncode(':조용한|')}emotion${eucKrUrlEncode(
        ':감동적인',
      )}`,
    },
  },
};

export const defaultDrsOption = {
  USER_ID: '10972481410',
  SVC_CODE: 'OTV',
  APPID: 'OTV',
  PRODUCT_LIST: '2P01',
  STB_VER: '0.6',
  STB_mode: '',
  ITEM_CNT: '12',
  TYPE: '',
  QUERY: '',
  GENRE_FILTER: '',
  SORTING: '',
  ASC_YN: 'Y',
  DEFAULT_YN: 'N',
  GENRE_CODE: '',
  RECOM_OPT: '',
  RECOM_OPT_YN: '',
  DTL_GENRE: '',
};

export const genieThemeMidmGeneratingOptionPresets: MidmGeneratingOptionPreset[] = [
  {
    rule_id: 'rule_20230926_cn_001',
    essential_meta: ['title', 'target_user', 'keywords'],
    additional_meta: [],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '기본 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_cn_002',
    essential_meta: ['title', 'target_user', 'keywords'],
    additional_meta: [],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.75,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '기본 - diversity 2',
  },
  {
    rule_id: 'rule_20230926_cn_003',
    essential_meta: ['title', 'target_user', 'keywords'],
    additional_meta: [],
    model_parameter: {
      do_sample: true,
      temperature: 0.6,
      top_k: 10,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '기본 - diversity 3',
  },
  {
    rule_id: 'rule_20230926_cn_004',
    essential_meta: ['title', 'keywords'],
    additional_meta: [],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '대상 고객 제외 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_cn_005',
    essential_meta: ['title', 'keywords'],
    additional_meta: [],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.75,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '대상 고객 제외 - diversity 2',
  },
  {
    rule_id: 'rule_20230926_cn_006',
    essential_meta: ['title', 'keywords'],
    additional_meta: [],
    model_parameter: {
      do_sample: true,
      temperature: 0.6,
      top_k: 10,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '대상 고객 제외 - diversity 3',
  },
  {
    rule_id: 'rule_20230926_cn_007',
    essential_meta: ['title', 'target_user', 'keywords'],
    additional_meta: ['trigger_words'],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '트리거 포함 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_cn_008',
    essential_meta: ['title', 'target_user', 'keywords'],
    additional_meta: ['trigger_words'],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.75,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '트리거 포함 - diversity 2',
  },
  {
    rule_id: 'rule_20230926_cn_009',
    essential_meta: ['title', 'target_user', 'keywords'],
    additional_meta: ['trigger_words'],
    model_parameter: {
      do_sample: true,
      temperature: 0.6,
      top_k: 10,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '트리거 포함 - diversity 3',
  },
  {
    rule_id: 'rule_20230926_cn_010',
    essential_meta: ['title', 'keywords'],
    additional_meta: ['trigger_words'],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '대상 고객 제외, 트리거 포함 - diversity 1',
  },
  {
    rule_id: 'rule_20230926_cn_011',
    essential_meta: ['title', 'keywords'],
    additional_meta: ['trigger_words'],
    model_parameter: {
      do_sample: true,
      temperature: 0.8,
      top_k: 30,
      top_p: 0.75,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '대상 고객 제외, 트리거 포함 - diversity 2',
  },
  {
    rule_id: 'rule_20230926_cn_012',
    essential_meta: ['title', 'keywords'],
    additional_meta: ['trigger_words'],
    model_parameter: {
      do_sample: true,
      temperature: 0.6,
      top_k: 10,
      top_p: 0.95,
      repeatition_penalty: 1.0,
      presence_penalty: 1.0,
      beam_width: 1,
      num_return_sequences: 1,
    },
    comment: '대상 고객 제외, 트리거 포함 - diversity 3',
  },
];

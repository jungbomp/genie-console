/* eslint-disable camelcase */
import type { ElementType } from 'react';

export interface MenuItemContext {
  pathId: string;
  title: string;
  path: string;
  exact?: boolean;
  icon: ElementType;
  component: ElementType;
}

export interface UserContext {
  userName: string;
}

export interface GlobalState {
  menuItem?: MenuItemContext;
  user: UserContext;
}

export interface AutoWordItem {
  SEARCH_WORD: string;
  WORD_TYPE: string;
  SPELL_EXPAND: string;
  URL: string;
  ACTOR: string;
  DIRECTOR: string;
  AUTO_ID: string;
  PARENT_ID: string;
  SEARCH_QUERY: string;
  DATA_PATTERN: string;
  HDR_YN: string;
  SMART_DVD_YN: string;
  RATING: string;
  HD_SD: string;
  EXPOSURE_DTL_GENRE: string;
  CCUBE_LEADING_ACTORS: string;
  CCUBE_META_WHAT: string;
  CCUBE_META_WHO: string;
  CCUBE_META_EMOTION: string;
  CCUBE_META_SUBGENRE: string;
  SYNOPSIS: string;
}

export interface MidmModelParameter {
  temperature: number;
  top_k: number;
  top_p: number;
  repetition_penalty: number;
  presence_penalty: number;
  beam_width: number;
  num_return_sequences: number;
}

export interface MidmGeneratingOptionPreset {
  rule_id: string;
  essential_meta: string[];
  additional_meta: string[];
  model_parameter: MidmModelParameter;
  comment: string;
}

export interface MidmApiRequestBody {
  api_key: string;
  text: string;
  gen_option: MidmModelParameter;
}

export interface MidmApiResponse {
  code: number;
  message: string;
  input_token_count: number;
  completion_token_count: number;
  total_token_count: number;
  inference_time: number;
  result: {
    text: string[];
  };
  text: string[];
}

export interface DrsGenieRecommendationVodItem {
  CATEGORY_ID: string;
  SERIES_YN: string;
  CONST_ID: string;
  TITLE: string;
  HD_SD: string;
  CATEGORY_PULLNAME: string;
  WON_YN: string;
  URL: string;
  CMB_YN: string;
  NEW_HOT: string;
  HDR_YN: string;
  SMART_DVD_YN: string;
  ACTOR: string;
  DIRECTOR: string;
  RATING: string;
  OLLEHP: string;
  RUNTIME: string;
  WIDE_POSTER_FILE: string;
  G_WIDE_IMG: string;
  G_TITLE_WIDE_IMG: string;
  BROAD_CHANNEL_CD: string;
  EP_DSTN_DESC: string;
  GENRE_CODE: string;
  WATCH_ORD: string;
  ICON_CD: string;
  VIRTUAL_DVD_FLAG: string;
}

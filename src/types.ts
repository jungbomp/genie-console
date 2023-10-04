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

export interface MidmGeneratingOption {
  temperature: number;
  top_k: number;
  top_p: number;
  repetition_penalty: number;
  presence_penalty: number;
  beam_width: number;
  num_return_sequences: number;
}

export interface MidmApiRequestBody {
  api_key: string;
  text: string;
  gen_option: MidmGeneratingOption;
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

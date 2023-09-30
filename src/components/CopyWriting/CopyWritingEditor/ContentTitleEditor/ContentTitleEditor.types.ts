import type { CommonProps } from 'src/components/types';

export interface TotalAutoWordItem {
  SEARCH_WORD: string;
  WORD_TYPE: string;
  SPELL_EXPAND: string;
  URL: string;
  ACTOR: string;
  DIRECTOR: string;
  AUTO_ID: string;
  PARENT_ID: string;
  DATA_PATTERN: string;
  HDR_YN: string;
  SMART_DVD_YN: string;
  RATING: string;
  HD_SD: string;
  EXPOSURE_DTL_GENRE: string;
  SYNOPSIS: string;
}

export interface ContentTitleEditorProps extends CommonProps {
  value?: string;
  onChange?: (value?: string) => void;
}

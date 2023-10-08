import type { CommonProps } from 'src/components/types';

export interface ContentSuggestionItemProps extends CommonProps {
  imgUrl: string;
  title: string;
  rating: number;
  selected?: boolean;
  onClick?: (key: string, selected: boolean) => void;
}

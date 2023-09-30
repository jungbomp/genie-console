import _ from 'lodash';
import type { TotalAutoWordItem } from './ContentTitleEditor.types';

export const autoItemToTotalAutoWordItem = (autoItem: any): TotalAutoWordItem => {
  return Object.keys(autoItem).reduce((accu: any, key: string) => {
    if (!_.isEmpty(autoItem[key]) && Object.values(autoItem[key]).length > 0) {
      // eslint-disable-next-line no-param-reassign,prefer-destructuring
      accu[key] = Object.values(autoItem[key])[0];
    }

    return accu;
  }, {});
};

export const getTotalAutoWordItemsFromTotalAutoWords = (totalAutoWords: any): TotalAutoWordItem[] => {
  return totalAutoWords?.ssearch?.output?.AUTO_ITEM?.map(autoItemToTotalAutoWordItem) ?? [];
};

export const getTitleOptionsFromTotalAutoWords = (totalAutoWords: any): string[] => {
  return getTotalAutoWordItemsFromTotalAutoWords(totalAutoWords).map(
    ({ SEARCH_WORD }: TotalAutoWordItem): string => SEARCH_WORD,
  );
};

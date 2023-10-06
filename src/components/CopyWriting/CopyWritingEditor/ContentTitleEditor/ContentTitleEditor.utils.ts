import _ from 'lodash';
import type { AutoWordItem } from 'src/types';

export const autoItemToTotalAutoWordItem = (autoItem: any): AutoWordItem => {
  return Object.keys(autoItem).reduce((accu: any, key: string) => {
    if (!_.isEmpty(autoItem[key]) && Object.values(autoItem[key]).length > 0) {
      // eslint-disable-next-line no-param-reassign,prefer-destructuring
      accu[key] = Object.values(autoItem[key])[0];
    }

    return accu;
  }, {});
};

export const getTotalAutoWordItemsFromTotalAutoWords = (totalAutoWords: any): AutoWordItem[] => {
  const autoItem = totalAutoWords?.ssearch?.output?.AUTO_ITEM;

  if (_.isEmpty(autoItem)) {
    return [];
  }

  return _.isArray(autoItem) ? autoItem.map(autoItemToTotalAutoWordItem) : [autoItemToTotalAutoWordItem(autoItem)];
};

export const getTitleOptionsFromAutoWordItems = (autoWordItems: AutoWordItem[]): string[] => {
  return autoWordItems.map(({ SEARCH_WORD }: AutoWordItem): string => SEARCH_WORD);
};

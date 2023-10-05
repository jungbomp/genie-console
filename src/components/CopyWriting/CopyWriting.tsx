import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';
import _ from 'lodash';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import type { AutoWordItem, MidmApiResponse } from 'src/types';

import CopyWritingEditor from './CopyWritingEditor/CopyWritingEditor';
import CopyWritingSuggestions from './CopyWritingSuggestions/CopyWritingSuggestions';

import { marketingMidmGeneratingOptionPresets, synopsisMidmGeneratingOptionPresets } from './CopyWriting.constants';
import type { CopyWritingOption, CopyWritingProps, CopyWritingSuggestionItem } from './CopyWriting.types';
import { getCopyWriteAsync, getCopyWritingSuggestionsFromMidmApiResponses } from './CopyWriting.utils';

import { autoWordItemsSelector } from './redux/selectors';

import styles from './CopyWriting.scss';

const CopyWriting: React.FC<CopyWritingProps> = ({ className }) => {
  const autoWordItems: AutoWordItem[] = useSelector(autoWordItemsSelector);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [marketingPresetIndex, setMarketingPresetIndex] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<CopyWritingSuggestionItem[]>([]);

  const onClickGenerateCopyWrite = (option: CopyWritingOption) => {
    if (!_.isEmpty(autoWordItems)) {
      const autoWordItem: AutoWordItem | undefined = autoWordItems.find(
        ({ SEARCH_WORD }: AutoWordItem) => SEARCH_WORD === option.contentTitle,
      );

      setIsLoading(true);
      Promise.all(
        [0, 1, 2].map((i: number) =>
          getCopyWriteAsync(
            option,
            // @ts-ignore
            autoWordItem ?? {},
            option.copyType === 'SYNOPSIS'
              ? synopsisMidmGeneratingOptionPresets[i]
              : marketingMidmGeneratingOptionPresets[marketingPresetIndex + i],
          ),
        ),
      )
        // @ts-ignore
        .then((rets: MidmApiResponse[]) => {
          setMarketingPresetIndex(marketingPresetIndex + rets.length);
          setSuggestions(getCopyWritingSuggestionsFromMidmApiResponses(rets));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Box className={Classnames(styles.copyWriting, className)}>
      <CopyWritingEditor onClickGenerateCopyWrite={onClickGenerateCopyWrite} />
      <CopyWritingSuggestions suggestions={suggestions} />
      <Backdrop open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Box>
  );
};

export default CopyWriting;

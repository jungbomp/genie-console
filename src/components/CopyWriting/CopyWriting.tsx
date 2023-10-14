import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';
import _ from 'lodash';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import type { AutoWordItem, MidmApiResponse } from 'src/types';

import { MidmGeneratingOptionPreset } from 'src/types';
import CopyWritingEditor from './CopyWritingEditor/CopyWritingEditor';
import CopyWritingSuggestions from './CopyWritingSuggestions/CopyWritingSuggestions';

import {
  COPY_WRITING_REQUEST_CNT,
  marketingMidmGeneratingOptionPresets,
  synopsisMidmGeneratingOptionPresets,
} from './CopyWriting.constants';
import type { CopyWritingOption, CopyWritingProps, CopyWritingSuggestionItem } from './CopyWriting.types';
import { getCopyWriteAsync, getCopyWritingSuggestionsFromMidmApiResponses } from './CopyWriting.utils';

import { autoWordItemsSelector } from './redux/selectors';

import styles from './CopyWriting.scss';

const CopyWriting: React.FC<CopyWritingProps> = ({ className }) => {
  const autoWordItems: AutoWordItem[] = useSelector(autoWordItemsSelector);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copyWritingOption, setCopyWritingOption] = useState<CopyWritingOption>();
  const [marketingPresetIndex, setMarketingPresetIndex] = useState<number>(0);
  const [synopsisPresetIndex, setSynopsisIndex] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<CopyWritingSuggestionItem[]>([]);
  const [showGenerateMoreButton, setShowGenerateMoreButton] = useState<boolean>(true);

  const generateCopyWrites = (
    option: CopyWritingOption,
    indices: number[],
    baseIndex: number,
    presets: MidmGeneratingOptionPreset[],
    isAttach: boolean,
  ) => {
    if (!_.isEmpty(autoWordItems)) {
      const autoWordItem: AutoWordItem | undefined = autoWordItems.find(
        ({ SEARCH_WORD }: AutoWordItem) => SEARCH_WORD === option.contentTitle,
      );

      setIsLoading(true);
      Promise.all(
        indices.map((i: number) =>
          _.isEmpty(presets[baseIndex + i])
            ? Promise.resolve(undefined)
            : getCopyWriteAsync(
                option,
                // @ts-ignore
                autoWordItem ?? {},
                presets[baseIndex + i],
              ),
        ),
      )
        // @ts-ignore
        .then((rets: MidmApiResponse[]) => {
          if (isAttach) {
            setSuggestions(
              _.uniqBy([...suggestions, ...getCopyWritingSuggestionsFromMidmApiResponses(rets)], 'copyWrite'),
            );
          } else {
            setSuggestions(getCopyWritingSuggestionsFromMidmApiResponses(rets));
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const onClickGenerateCopyWrite = (option: CopyWritingOption) => {
    const indices = new Array(COPY_WRITING_REQUEST_CNT).fill(0).map((num: number, i) => i);
    setCopyWritingOption(option);
    if (option?.copyType === 'SYNOPSIS') {
      generateCopyWrites(option, indices, 0, synopsisMidmGeneratingOptionPresets, false);
      setSynopsisIndex(Math.min(synopsisPresetIndex + indices.length, synopsisMidmGeneratingOptionPresets.length));
    } else {
      generateCopyWrites(option, indices, 0, marketingMidmGeneratingOptionPresets, false);
      setMarketingPresetIndex(
        Math.min(marketingPresetIndex + indices.length, marketingMidmGeneratingOptionPresets.length),
      );
    }
  };

  const onClickCopyWritingSuggestion = (item: CopyWritingSuggestionItem) => {
    const clonedSuggestions = suggestions.map((suggestion: CopyWritingSuggestionItem) => ({
      ...suggestion,
      genieSuggestion: false,
    }));

    const index = suggestions.findIndex(({ copyWrite }: CopyWritingSuggestionItem) => copyWrite === item.copyWrite);
    clonedSuggestions[index].genieSuggestion = !item.genieSuggestion;
    setSuggestions(clonedSuggestions);
  };

  const onClickGenerateMoreCopyWrite = () => {
    if (copyWritingOption) {
      if (copyWritingOption.copyType === 'SYNOPSIS') {
        generateCopyWrites(copyWritingOption, [0], synopsisPresetIndex, synopsisMidmGeneratingOptionPresets, true);
        setSynopsisIndex(Math.min(synopsisPresetIndex + 1, synopsisMidmGeneratingOptionPresets.length));
      } else {
        generateCopyWrites(copyWritingOption, [0], marketingPresetIndex, marketingMidmGeneratingOptionPresets, true);
        setMarketingPresetIndex(Math.min(marketingPresetIndex + 1, marketingMidmGeneratingOptionPresets.length));
      }
    }
  };

  const onReset = () => {
    setSuggestions([]);
    setMarketingPresetIndex(0);
    setSynopsisIndex(0);
    setShowGenerateMoreButton(true);
  };

  useEffect(() => {
    if (
      copyWritingOption?.copyType === 'SYNOPSIS' &&
      synopsisPresetIndex === synopsisMidmGeneratingOptionPresets.length
    ) {
      setShowGenerateMoreButton(false);
    } else if (copyWritingOption?.copyType && marketingPresetIndex === marketingMidmGeneratingOptionPresets.length) {
      setShowGenerateMoreButton(false);
    } else {
      setShowGenerateMoreButton(true);
    }
  }, [synopsisPresetIndex, marketingPresetIndex, copyWritingOption]);

  return (
    <Box className={Classnames(styles.copyWriting, className)}>
      <CopyWritingEditor
        onValuesChange={setCopyWritingOption}
        onClickGenerateCopyWrite={onClickGenerateCopyWrite}
        onReset={onReset}
      />
      <CopyWritingSuggestions
        suggestions={suggestions}
        showGenerateMoreButton={showGenerateMoreButton}
        onClickCopyWritingSuggestion={onClickCopyWritingSuggestion}
        onClickGenerateMoreCopyWrite={onClickGenerateMoreCopyWrite}
        onClickApply={() => console.log('CopyWrite Apply')}
      />
      <Backdrop open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Box>
  );
};

export default CopyWriting;

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';

import genieCopyWriteBackgroundHeadCoco from 'images/genie_copywrite_background_head_coco.jpg';
import genieCopyWriteBackgroundSynopsisCoco from 'images/genie_copywrite_background_synopsis_coco.jpg';

import EmptySuggestion from 'src/components/common/EmptySuggestion/EmptySuggestion';
import { copyWritingDemoOptionSelector } from '../redux/selectors';

import CopyWritingWidget from './CopyWritingWidget/CopyWritingWidget';

import { copyWritingDemoPresets } from './CopyWritingDemo.constants';
import type { CopyWritingDemoProps } from './CopyWritingDemo.types';

import styles from './CopyWritingDemo.scss';

const CopyWritingDemo: React.FC<CopyWritingDemoProps> = ({ className }) => {
  const options = useSelector(copyWritingDemoOptionSelector);
  const imgUrl = useMemo<string>(() => {
    if (options && copyWritingDemoPresets[options.copyType][options.contentTitle]?.backgroundImage) {
      return copyWritingDemoPresets[options.copyType][options.contentTitle]?.backgroundImage;
    }

    return options?.copyType === 'SYNOPSIS' ? genieCopyWriteBackgroundSynopsisCoco : genieCopyWriteBackgroundHeadCoco;
  }, [options?.copyType, options?.contentTitle]);

  return (
    <Box
      className={Classnames(styles.copyWritingDemo, { [styles.copyWritingDemoEmpty]: _.isEmpty(options) }, className)}
    >
      {options ? (
        <CopyWritingWidget
          title={options.contentTitle}
          copyType={options.copyType}
          copyWrite={options?.copyWriting ?? ''}
          imgUrl={imgUrl}
        />
      ) : (
        <EmptySuggestion
          title='믿음 주는 AI 지니'
          subtitle='지니카피라이팅 폼을 이용하면 다양한 문구를 생성할 수 있습니다.'
        />
      )}
    </Box>
  );
};

export default CopyWritingDemo;

import React from 'react';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';
import _ from 'lodash';

import Box from '@mui/material/Box';

import genieThemeDemoBackground from 'images/genie_theme_demo_background.jpg';

import EmptySuggestion from 'src/components/common/EmptySuggestion/EmptySuggestion';

import { genieThemeDemoOptionSelector } from '../redux/selectors';

import GenieThemeWidget from './GenieThemeWidget/GenieThemeWidget';

import type { GenieThemeDemoProps } from './GenieThemeDemo.types';

import styles from './GenieThemeDemo.scss';

const GenieThemeDemo: React.FC<GenieThemeDemoProps> = ({ className }) => {
  const option = useSelector(genieThemeDemoOptionSelector);
  return (
    <Box className={Classnames(styles.genieThemeDemo, { [styles.genieThemeDemoEmpty]: _.isEmpty(option) }, className)}>
      {option ? (
        <>
          <Box className={styles.backImgWrapper}>
            <img className={styles.img} src={genieThemeDemoBackground} alt='Genie Theme' loading='lazy' />
          </Box>
          <GenieThemeWidget themeWidgetTitle={option.title} themeWidgetItems={option.item} />
        </>
      ) : (
        <EmptySuggestion
          title='믿음 주는 AI 지니'
          subtitle='지니테마 폼을 이용하면 추천 테마명 및 콘텐츠를 제공합니다.'
        />
      )}
    </Box>
  );
};

export default GenieThemeDemo;

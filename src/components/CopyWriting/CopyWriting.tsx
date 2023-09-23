import React from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import CopyWritingEditor from './CopyWritingEditor/CopyWritingEditor';
import CopyWritingSuggestions from './CopyWritingSuggestions/CopyWritingSuggestions';

import type { CopyWritingProps } from './CopyWriting.types';

import styles from './CopyWriting.scss';

const CopyWriting: React.FC<CopyWritingProps> = ({ className }) => {
  const mockSuggestion = [
    {
      genieSuggestion: true,
      copyWrite: `아바타, 전 세계가 기다린 놀라운 경험!
그 환상의 여정에 당신을 초대합니다.
피규어 경품 이벤트에도 참여해보세요.`,
    },
    {
      genieSuggestion: false,
      copyWrite: `자연과 기술의 환상적인 대결,
미지의 세계 아바타로 당신을 초대합니다.
TV쿠폰 3000원은 덤으로!`,
    },
    {
      genieSuggestion: false,
      copyWrite: `자연과 기술의 환상적인 대결,
미지의 세계 아바타로 당신을 초대합니다.
TV쿠폰 3000원은 덤으로!`,
    },
  ];

  return (
    <Box className={Classnames(styles.copyWriting, className)}>
      <CopyWritingEditor />
      <CopyWritingSuggestions suggestions={mockSuggestion} />
    </Box>
  );
};

export default CopyWriting;

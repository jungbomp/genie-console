import React, { useState } from 'react';
import Classnames from 'classnames';

<<<<<<< Updated upstream
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Rotate, Search, SendAlt } from 'src/Icon';

import CopyTypeEditor from './CopyTypeEditor/CopyTypeEditor';
import GenerateOptionEditor from './GenerateOptionEditor/GenerateOptionEditor';
import AdditionalRequestEditor from './AdditionalRequestEditor/AdditionalRequestEditor';

import { CopyWritingProps } from './CopyWriting.types';
=======
import Box from '@mui/material/Box';

import CopyWritingEditor from './CopyWritingEditor/CopyWritingEditor';
import CopyWritingSuggestions from './CopyWritingSuggestions/CopyWritingSuggestions';

import type { CopyWritingProps } from './CopyWriting.types';
>>>>>>> Stashed changes

import styles from './CopyWriting.scss';

const CopyWriting: React.FC<CopyWritingProps> = ({ className }) => {
<<<<<<< Updated upstream
  const mockOptions = ['아바타', '아바타: 물의 길 (소장용 아바타)', '아바타: 물의 길'];

  const [copyType, setCopyType] = useState<'HEAD' | 'BODY' | 'SYNOPSIS'>();

  const getAutocompleteRenderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...params}
      InputProps={{
        ...params.InputProps,
        type: 'search',
        placeholder: '콘텐츠 제목을 입력해주세요.',
        startAdornment: (
          <InputAdornment position='start'>
            <Search className={styles.autoCompleteSearchIcon} />
          </InputAdornment>
        ),
      }}
    />
  );

  return (
    <div className={Classnames(styles.copyWriting, className)}>
      <Typography>AI 지니와 함께 고객을 사로잡을 수 있는 매력적인 문구를 만들어 보세요.</Typography>
      <FormControl className={styles.autoCompleteWrapper}>
        <FormLabel>콘텐츠 명</FormLabel>
        <Autocomplete
          className={styles.autoComplete}
          freeSolo={true}
          disableClearable={true}
          options={mockOptions}
          renderInput={getAutocompleteRenderInput}
        />
      </FormControl>
      <FormControl>
        <CopyTypeEditor value={copyType} onClick={setCopyType} />
      </FormControl>
      <FormControl>
        <GenerateOptionEditor value={copyType} />
      </FormControl>
      <FormControl>
        <AdditionalRequestEditor />
      </FormControl>
      <FormControl>
        <Box className={styles.buttonWrapper}>
          <Button className={styles.submitButton} variant='contained' startIcon={<SendAlt />}>
            문구 생성하기
          </Button>
          <Box className={styles.resetWrapper}>
            <Rotate className={styles.resetIcon} />
            <Typography>다시시작</Typography>
          </Box>
        </Box>
      </FormControl>
    </div>
=======
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
      copyWrite: `진정한 모험가로 거듭나는 여정,
제임스 카메론 감독의 ‘아바타'를
50% 할인된 가격으로 만나보세요!`,
    },
  ];

  return (
    <Box className={Classnames(styles.copyWriting, className)}>
      <CopyWritingEditor />
      <CopyWritingSuggestions suggestions={mockSuggestion} />
    </Box>
>>>>>>> Stashed changes
  );
};

export default CopyWriting;

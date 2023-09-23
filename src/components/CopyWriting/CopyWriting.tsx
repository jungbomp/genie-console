import React, { useState } from 'react';
import Classnames from 'classnames';

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

import styles from './CopyWriting.scss';

const CopyWriting: React.FC<CopyWritingProps> = ({ className }) => {
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
  );
};

export default CopyWriting;

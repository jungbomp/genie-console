import React from 'react';
import Classnames from 'classnames';

import { FormControl } from '@mui/base/FormControl';

import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Search } from 'src/Icon';

import { CopyWritingProps } from './CopyWriting.type';

import styles from './CopyWriting.scss';

const CopyWriting: React.FC<CopyWritingProps> = ({ className }) => {
  const mockOptions = ['아바타', '아바타: 물의 길 (소장용 아바타)', '아바타: 물의 길'];

  const getAutocompleteRenderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...params}
      InputProps={{
        ...params.InputProps,
        type: 'search',
        startAdornment: (
          <InputAdornment position='start'>
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );

  return (
    <div className={Classnames(styles.copyWriting, className)}>
      <Typography>AI 지니와 함께 고객을 사로잡을 수 있는 매력적인 문구를 만들어 보세요.</Typography>
      <FormControl>
        <Typography>콘텐츠 명</Typography>
        <Autocomplete
          freeSolo={true}
          disableClearable={true}
          options={mockOptions}
          renderInput={getAutocompleteRenderInput}
        />
      </FormControl>
    </div>
  );
};

export default CopyWriting;

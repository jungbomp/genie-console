import React, { SyntheticEvent } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { Search } from 'src/Icon';

import type { ContentTitleEditorProps } from './ContentTitleEditor.types';

import styles from './ContentTitleEditor.scss';

const ContentTitleEditor: React.FC<ContentTitleEditorProps> = ({ className, value, onChange = () => {} }) => {
  const mockOptions = ['아바타', '아바타: 물의 길 (소장용 아바타)', '아바타: 물의 길'];
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
    <Box className={Classnames(styles.contentTitleEditor, className)}>
      <FormLabel className={styles.label}>콘텐츠 명</FormLabel>
      <Autocomplete
        className={styles.autoComplete}
        freeSolo={true}
        disableClearable={true}
        options={mockOptions}
        renderInput={getAutocompleteRenderInput}
        value={value}
        onChange={(_: SyntheticEvent, inputValue: string) => onChange(inputValue)}
      />
    </Box>
  );
};

export default ContentTitleEditor;

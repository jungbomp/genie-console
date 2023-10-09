import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Classnames from 'classnames';

import Box from '@mui/material/Box';

import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { setAutoWordItems } from 'src/components/CopyWriting/redux/actions';
import { Search } from 'src/Icon';
import { getTotalAutoWords } from 'src/services/services';
import type { AutoWordItem } from 'src/types';
import { eucKrUrlEncode } from 'src/utils';

import type { ContentTitleEditorProps } from './ContentTitleEditor.types';
import { getTitleOptionsFromAutoWordItems, getTotalAutoWordItemsFromTotalAutoWords } from './ContentTitleEditor.utils';

import styles from './ContentTitleEditor.scss';

const ContentTitleEditor: React.FC<ContentTitleEditorProps> = ({ className, value, onChange = () => {} }) => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    if (value && value.length > 0) {
      getTotalAutoWords(eucKrUrlEncode(value))
        .then(getTotalAutoWordItemsFromTotalAutoWords)
        .then((autoWordItems: AutoWordItem[]) => {
          dispatch(setAutoWordItems(autoWordItems));
          setOptions(getTitleOptionsFromAutoWordItems(autoWordItems));
        });
    } else {
      setOptions([]);
    }
  }, [value]);

  const getAutocompleteRenderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...params}
      InputProps={{
        ...params.InputProps,
        type: 'search',
        placeholder: '콘텐츠 제목을 입력해주세요.',
        value,
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
      <FormLabel className={styles.label}>콘텐츠명</FormLabel>
      <Autocomplete
        className={styles.autoComplete}
        freeSolo={true}
        disableClearable={true}
        options={options}
        renderInput={getAutocompleteRenderInput}
        value={value}
        inputValue={value}
        onInputChange={(_: SyntheticEvent, inputValue: string) => onChange(inputValue)}
      />
    </Box>
  );
};

export default ContentTitleEditor;

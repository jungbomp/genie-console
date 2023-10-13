import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import _ from 'lodash';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import StateChip from 'src/components/common/StateChip';
import { Add, Edit, Pen } from 'src/Icon';

import type { EditableStateChipProps } from './EditableStateChip.types';

import styles from './EditableStateChip.scss';

const EditableStateChip: React.FC<EditableStateChipProps> = ({
  className,
  title,
  active,
  keepTitle = false,
  value,
  placeholder,
  onChange = () => {},
}) => {
  const [showTextField, setShowTextField] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string | undefined>(value);
  const [chipTitle, setChipTitle] = useState<string>(title);
  const onClick = () => setShowTextField(!showTextField);

  const onClickAway = () => setShowTextField(false);

  const onBlur = () => {
    onChange(textValue);
    setShowTextField(false);
  };

  useEffect(() => {
    if (_.isEmpty(value)) {
      setChipTitle(title);
    } else {
      setChipTitle(`${keepTitle ? `${title}・` : ''}${value}`);
    }
  }, [title, value, keepTitle]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Box className={styles.editableStateChip}>
        <StateChip
          className={className}
          icon={_.isEmpty(value) ? <Add className={styles.icon} /> : <Edit className={styles.icon} />}
          title={chipTitle}
          size='large'
          active={active}
          onClick={onClick}
        />
        {showTextField ? (
          <Box className={styles.textFieldWrapper}>
            <TextField
              className={styles.textField}
              variant='standard'
              value={textValue}
              placeholder={placeholder}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Typography className={styles.bar}>|</Typography>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton className={styles.inputButton} aria-label='입력' onClick={onBlur}>
                      <Pen className={styles.icon} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setTextValue(event.target.value);
              }}
              onBlur={onBlur}
              onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && onBlur()}
            />
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default EditableStateChip;

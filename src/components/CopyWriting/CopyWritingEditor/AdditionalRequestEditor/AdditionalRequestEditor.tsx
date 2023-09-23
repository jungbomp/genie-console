import React, { useState } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import StateChip from 'src/components/common/StateChip/StateChip';
import { Close, MagicWandFilled } from 'src/Icon';

import { AdditionalRequestEditorProps } from './AdditionalRequestEditor.types';

import styles from './AdditionalRequestEditor.scss';

const AdditionalRequestEditor: React.FC<AdditionalRequestEditorProps> = ({ className }) => {
  const [displayEdit, setDisplayEdit] = useState(false);
  return (
    <Box className={Classnames(styles.additionalRequestEditor, className)}>
      <Box className={Classnames(styles.titleWrapper)}>
        <FormLabel className={styles.title}>
          <Box className={styles.titleIconWrapper}>
            <MagicWandFilled className={styles.titleIcon} />
          </Box>
          <Button className={styles.titleButton} variant='text' onClick={() => setDisplayEdit(true)}>
            AI 에게 더 요청하기
          </Button>
        </FormLabel>
        <Button
          className={Classnames(styles.closeButton, { [styles.closeButtonVisible]: displayEdit })}
          variant='contained'
          disableElevation={true}
          startIcon={<Close className={styles.icon} />}
          onClick={() => setDisplayEdit(false)}
        />
      </Box>
      <Box
        className={Classnames(styles.additionalRequestBodyWrapper, {
          [styles.additionalRequestBodyWrapperVisible]: displayEdit,
        })}
      >
        <TextField
          className={styles.additionalRequestInput}
          multiline={true}
          variant='standard'
          placeholder='AI 지니에게 추가로 원하시는 사항을 자유롭게 이야기 해주세요.'
        />
        <Box className={styles.additionalRequestOptionWrapper}>
          <StateChip title='수식어를 풍성하게' size='large' />
          <StateChip title='신조어는 제거해줘' size='large' />
        </Box>
      </Box>
    </Box>
  );
};

export default AdditionalRequestEditor;

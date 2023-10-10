import React, { ChangeEvent, useState } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Close, Search } from 'src/Icon';

import type { GenieThemeHeaderProps } from './GenieThemeHeader.types';

import styles from './GenieThemeHeader.scss';

const GenieThemeHeader: React.FC<GenieThemeHeaderProps> = ({
  className,
  target,
  keywords,
  onTargetChange = () => {},
  onKeywordAdd = () => {},
  onKeywordDelete = () => {},
  onGenerateContentClick = () => {},
}) => {
  const [showTargetChip, setShowTargetChip] = useState<boolean>();
  const [newKeyword, setNewKeyword] = useState<string>();

  const onTargetAdd = () => {
    if (target) {
      setShowTargetChip(true);
    }
  };

  const onDeleteTarget = () => {
    onTargetChange(undefined);
    setShowTargetChip(false);
  };

  const onNewKeywordAdd = () => {
    if (newKeyword) {
      onKeywordAdd(newKeyword);
      setNewKeyword(undefined);
    }
  };

  const getKeywordDeleteHandler =
    (keyword: string): (() => void) =>
    () =>
      onKeywordDelete(keyword);

  return (
    <Box className={Classnames(styles.genieThemeHeader, className)}>
      <Box className={styles.titleWrapper}>
        <Typography className={styles.title}>AI 지니가 추천 테마명과 콘텐츠 리스트를 제공해 드려요.</Typography>
        <Typography className={styles.subtitle}>
          원하시는 고객의 특성, 테마 관련 주요 키워드 정보를 한 개 이상 적어주세요.
        </Typography>
      </Box>
      <Box className={styles.paramWrapper}>
        <FormControl className={styles.targetWrapper}>
          <FormLabel className={styles.label}>대상 고객군</FormLabel>
          <TextField
            className={styles.textField}
            variant='filled'
            placeholder='타겟 정보를 입력해 주세요'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search className={styles.icon} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <Button className={styles.textFieldButton} variant='text' onClick={onTargetAdd}>
                    입력완료
                  </Button>
                </InputAdornment>
              ),
            }}
            value={target}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTargetChange(event.target.value)}
          />
        </FormControl>
        <FormControl className={styles.keywordWrapper}>
          <FormLabel className={styles.label}>키워드</FormLabel>
          <TextField
            className={styles.textField}
            variant='filled'
            placeholder='송혜교, 가을 등 원하는 키워드를 입력해주세요'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search className={styles.icon} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <Button className={styles.textFieldButton} variant='text' onClick={onNewKeywordAdd}>
                    입력완료
                  </Button>
                </InputAdornment>
              ),
            }}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setNewKeyword(event.target.value)}
          />
        </FormControl>
      </Box>
      <Box className={styles.footer}>
        <Box className={styles.chipWrapper}>
          {showTargetChip ? (
            <Chip
              key={target}
              className={styles.chip}
              label={target}
              onDelete={onDeleteTarget}
              deleteIcon={<Close className={styles.icon} />}
            />
          ) : null}
          {keywords.map((keyword: string) => (
            <Chip
              key={keyword}
              className={styles.chip}
              label={keyword}
              onDelete={getKeywordDeleteHandler(keyword)}
              deleteIcon={<Close className={styles.icon} />}
            />
          ))}
        </Box>
        <Chip className={styles.footerButton} label='콘텐츠 생성' onClick={onGenerateContentClick} />
      </Box>
    </Box>
  );
};

export default GenieThemeHeader;

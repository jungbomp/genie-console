export const buildMidmMarketingPrompt = (
  isShort: boolean,
  wordCount: number,
  title: string,
  meta: { [key: string]: string },
): any => {
  const wordMetaKeyMap = {
    EXPOSURE_GENRE: '노출형 장르',
    EXPOSURE_DTL_GENRE: '노출형 세부장르',
    DIRECTOR: '감독',
    CCUBE_LEADING_ACTORS: '주연배우',
    CCUBE_META_WHAT: '주제소재',
    CCUBE_META_WHO: '인물',
    CCUBE_META_EMOTION: '감성',
    CCUBE_META_SUBGENRE: '서브장르',
    SYNOPSIS: '시놉시스',
    G_WIDE_IMG_DESC: '가로형 포스터',
    G_LIST_TITLE_IMG_DESC: '타이틀 이미지',
  };

  return `User; 다음 콘텐츠에 대한 창의적인 ${
    isShort ? '짧은' : '긴'
  } 마케팅 문구를 ${wordCount}자 이내로 작성해줘. \n제목: ${title}${Object.keys(meta)
    // @ts-ignore
    .filter((key: string) => !!wordMetaKeyMap[key] && !!meta[key])
    // @ts-ignore
    .map((key: string) => `\t${wordMetaKeyMap[key]}: ${meta[key]}`)
    .join('')} Midm; `;
};

export const buildMidmSynopsisPrompt = (numberOfLine: number, title: string, synopsis: string): any => {
  return `User; 다음 콘텐츠의 시놉시스를 ${numberOfLine}줄 이내로 요약해줘.\n제목: ${title}\t시놉시스: ${synopsis} Midm; `;
};

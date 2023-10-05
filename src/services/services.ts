import { xml2json } from 'xml-js';
import request from 'src/services/request';
import { getMidmApiUrl, getTotalAutoWordsUrl } from 'src/services/apis';
import { buildMidmApiRequestBody } from 'src/services/utils';
import type { MidmApiResponse, MidmModelParameter } from 'src/types';

export const getTotalAutoWords = (uquery: string): Promise<string> =>
  request(
    getTotalAutoWordsUrl(),
    'GET',
    { 'Content-Type': 'application/xml;charset=EUC-KR', 'Content-Language': 'ko-KR' },
    {
      uquery,
      sa_id: '11886569700',
      appID: 'WEB',
      spell_type: '1',
    },
  )
    .then((response: any) => response?.data || '')
    .then(
      () => `<?xml version="1.0" encoding="EUC-KR"?>
<ssearch domain="IPTV" section="getAUTO" ver="ssearch0.1">
  <output>
    <totalNum>0</totalNum>
    <itemNum>9</itemNum>
    <spellNum>0</spellNum>
    <keywordNum>0</keywordNum>
    <relatedNum>0</relatedNum>
    <themaNum>0</themaNum>
    <cateNum>0</cateNum>
    <AUTO_ITEM>
      <SEARCH_WORD>범죄도시</SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/M42HB003SGL150000310.jpg]]></URL>
      <ACTOR><![CDATA[마동석,윤계상]]></ACTOR>
      <DIRECTOR>강윤성</DIRECTOR>
      <AUTO_ID>216811</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>Y</SMART_DVD_YN>
      <RATING>19</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS><![CDATA[마동석,윤계상]]></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT><![CDATA[수사,실화기반,비밀 프로젝트,범죄소탕]]></CCUBE_META_WHAT>
      <CCUBE_META_WHO><![CDATA[경찰,형사,범죄조직,조폭,두목,조선족]]></CCUBE_META_WHO>
      <CCUBE_META_EMOTION><![CDATA[어두운,긴장감 있는,잔인한,통쾌한,박진감 있는,쫓고 쫓기는,무자비한]]></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE><![CDATA[시리즈물,범죄 액션,형사 액션,범죄수사 액션,범죄 코미디,느와르 액션]]></CCUBE_META_SUBGENRE>
      <SYNOPSIS><![CDATA[오늘 밤, 다 쓸어버린다! 싱크로율 100% 괴물 형사 마동석 X 악랄한 조직 보스 윤계상의 만남. 한국형 형사 액션물의 새로운 계보. 통쾌하고, 화끈하고, 살벌하게. 나쁜 놈들 때려잡는 강력반 형사들의 조폭 소탕작전이 시작된다!]]></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD>[마동석] 범죄도시</SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/M42HB003SGL150000310.jpg]]></URL>
      <ACTOR><![CDATA[마동석,윤계상]]></ACTOR>
      <DIRECTOR>강윤성</DIRECTOR>
      <AUTO_ID>194339</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>N</SMART_DVD_YN>
      <RATING>19</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS><![CDATA[마동석,윤계상]]></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT><![CDATA[수사,실화기반,비밀 프로젝트,범죄소탕]]></CCUBE_META_WHAT>
      <CCUBE_META_WHO><![CDATA[경찰,형사,범죄조직,조폭,두목,조선족]]></CCUBE_META_WHO>
      <CCUBE_META_EMOTION><![CDATA[어두운,긴장감 있는,잔인한,통쾌한,박진감 있는,쫓고 쫓기는,무자비한]]></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE><![CDATA[시리즈물,범죄 액션,형사 액션,범죄수사 액션,범죄 코미디,느와르 액션]]></CCUBE_META_SUBGENRE>
      <SYNOPSIS><![CDATA[오늘 밤, 다 쓸어버린다! 싱크로율 100% 괴물 형사 마동석 X 악랄한 조직 보스 윤계상의 만남. 한국형 형사 액션물의 새로운 계보. 통쾌하고, 화끈하고, 살벌하게. 나쁜 놈들 때려잡는 강력반 형사들의 조폭 소탕작전이 시작된다!]]></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD><![CDATA[범죄도시 (2008)]]></SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/MIAMA1YPSGL150000110.jpg]]></URL>
      <ACTOR><![CDATA[마크 러팔로,에단 호크,아만다 피트,도니 월버그]]></ACTOR>
      <DIRECTOR>브라이언 굿맨</DIRECTOR>
      <AUTO_ID>216813</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>N</SMART_DVD_YN>
      <RATING>19</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[범죄/스릴러]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS><![CDATA[마크 러팔로,에단 호크]]></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT><![CDATA[마약,부성애,범죄,우정,절도,실화기반,고민,돈,고통,생활고]]></CCUBE_META_WHAT>
      <CCUBE_META_WHO><![CDATA[가족,아내,아들,아버지,경찰,친구,범죄자,남편,전과자,범죄조직,강도]]></CCUBE_META_WHO>
      <CCUBE_META_EMOTION><![CDATA[갈등하는,생각하게 하는]]></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE><![CDATA[범죄 드라마,범죄 액션,휴먼 드라마]]></CCUBE_META_SUBGENRE>
      <SYNOPSIS></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD>범죄도시2</SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/CL000000000000065761.jpg]]></URL>
      <ACTOR><![CDATA[마동석,손석구,최귀화]]></ACTOR>
      <DIRECTOR>이상용</DIRECTOR>
      <AUTO_ID>216812</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>Y</SMART_DVD_YN>
      <RATING>15</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT></CCUBE_META_WHAT>
      <CCUBE_META_WHO></CCUBE_META_WHO>
      <CCUBE_META_EMOTION></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE></CCUBE_META_SUBGENRE>
      <SYNOPSIS></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD><![CDATA[범죄도시2 (가치봄)]]></SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/CL000000000000065761.jpg]]></URL>
      <ACTOR><![CDATA[마동석,손석구,최귀화]]></ACTOR>
      <DIRECTOR>이상용</DIRECTOR>
      <AUTO_ID>216814</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>N</SMART_DVD_YN>
      <RATING>15</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS><![CDATA[손석구,최귀화,마동석]]></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT><![CDATA[살인,납치,수사,배신,대결,범죄소탕]]></CCUBE_META_WHAT>
      <CCUBE_META_WHO><![CDATA[형사,용의자,범죄조직]]></CCUBE_META_WHO>
      <CCUBE_META_EMOTION><![CDATA[스릴있는,잔인한,코믹한,숨막히는,통쾌한,폭력적인,박진감 있는,무자비한,폭주하는]]></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE><![CDATA[시리즈물,범죄 액션,범죄수사 액션,느와르 액션,천만영화]]></CCUBE_META_SUBGENRE>
      <SYNOPSIS></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD><![CDATA[범죄도시 : 나쁜놈들 전성시대]]></SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/SC200000000000047334_10_21012715.jpg]]></URL>
      <ACTOR><![CDATA[베리 코빈,클린트 제임스]]></ACTOR>
      <DIRECTOR>로버트 콘웨이</DIRECTOR>
      <AUTO_ID>216815</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>N</SMART_DVD_YN>
      <RATING>19</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT></CCUBE_META_WHAT>
      <CCUBE_META_WHO></CCUBE_META_WHO>
      <CCUBE_META_EMOTION></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE></CCUBE_META_SUBGENRE>
      <SYNOPSIS></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD>[예고편] 범죄도시</SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/MVIHB02JSGL150000310.jpg]]></URL>
      <ACTOR><![CDATA[마동석,윤계상]]></ACTOR>
      <DIRECTOR>강윤성</DIRECTOR>
      <AUTO_ID>288113</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>N</SMART_DVD_YN>
      <RATING>19</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS><![CDATA[마동석,윤계상]]></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT></CCUBE_META_WHAT>
      <CCUBE_META_WHO></CCUBE_META_WHO>
      <CCUBE_META_EMOTION></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE></CCUBE_META_SUBGENRE>
      <SYNOPSIS><![CDATA[오늘 밤, 다 쓸어버린다! 싱크로율 100% 괴물 형사 마동석 X 악랄한 조직 보스 윤계상의 만남. 한국형 형사 액션물의 새로운 계보. 통쾌하고, 화끈하고, 살벌하게. 나쁜 놈들 때려잡는 강력반 형사들의 조폭 소탕작전이 시작된다!]]></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD>[예고편] 범죄도시2</SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/MVIM7021SGL150000110.jpg]]></URL>
      <ACTOR><![CDATA[마동석,손석구,최귀화]]></ACTOR>
      <DIRECTOR>이상용</DIRECTOR>
      <AUTO_ID>288114</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>N</SMART_DVD_YN>
      <RATING>15</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT></CCUBE_META_WHAT>
      <CCUBE_META_WHO></CCUBE_META_WHO>
      <CCUBE_META_EMOTION></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE></CCUBE_META_SUBGENRE>
      <SYNOPSIS></SYNOPSIS>
    </AUTO_ITEM>
    <AUTO_ITEM>
      <SEARCH_WORD><![CDATA[[예고편] 범죄도시 : 나쁜놈들 전성시대]]></SEARCH_WORD>
      <WORD_TYPE>0</WORD_TYPE>
      <SPELL_EXPAND>0</SPELL_EXPAND>
      <URL><![CDATA[http://125.144.104.41/postimg/MWFL101ESGL150000110.jpg]]></URL>
      <ACTOR><![CDATA[베리 코빈,클린트 제임스]]></ACTOR>
      <DIRECTOR>로버트 콘웨이</DIRECTOR>
      <AUTO_ID>288115</AUTO_ID>
      <PARENT_ID>0</PARENT_ID>
      <SEARCH_QUERY></SEARCH_QUERY>
      <DATA_PATTERN>제목</DATA_PATTERN>
      <HDR_YN>N</HDR_YN>
      <SMART_DVD_YN>N</SMART_DVD_YN>
      <RATING>15</RATING>
      <HD_SD>HD</HD_SD>
      <EXPOSURE_DTL_GENRE><![CDATA[액션/SF]]></EXPOSURE_DTL_GENRE>
      <CCUBE_LEADING_ACTORS></CCUBE_LEADING_ACTORS>
      <CCUBE_META_WHAT></CCUBE_META_WHAT>
      <CCUBE_META_WHO></CCUBE_META_WHO>
      <CCUBE_META_EMOTION></CCUBE_META_EMOTION>
      <CCUBE_META_SUBGENRE></CCUBE_META_SUBGENRE>
      <SYNOPSIS><![CDATA[황량한 애리조나 황무지 중심에 어느 날, 최고의 실력을 지닌 총잡이들이 모여든다. 형제의 복수를 위해 냉혹한 살인마가 된 로이스. 살인마에게 걸린 현상금을 노리는 연방 보안관 퀸시. 운명은 두 사람을 외부에 알려지지 않은 미지의 마을로 인도하고, 그곳에서 최후의 결전이 벌어진다.]]></SYNOPSIS>
    </AUTO_ITEM>
  </output>
</ssearch>`,
    )
    .then((xmlStr: string) => xml2json(xmlStr, { compact: true, spaces: 2 }))
    .then(JSON.parse)
    .catch((error: any) => {
      console.error(error);
      throw error;
    });

export const getCopyWrites = (prompt: string, generatingOption: MidmModelParameter): Promise<MidmApiResponse> =>
  request(getMidmApiUrl(), 'POST', undefined, undefined, buildMidmApiRequestBody(prompt, generatingOption))
    .then((response: any) => response?.data || {})
    .catch((error: any) => {
      console.error(error);
      throw error;
    });

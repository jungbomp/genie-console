/* eslint-disable @typescript-eslint/no-unused-vars */
import { xml2json } from 'xml-js';
import request from 'src/services/request';
import { getDrsRecommendGenieUrl, getMidmApiUrl, getTotalAutoWordsUrl } from 'src/services/apis';
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
    null,
    false,
  )
    .then((response: any) => response?.data || '')
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

export const getThemeContents = (body: string): Promise<string> =>
  // request(
  //   getDrsRecommendGenieUrl(),
  //   'POST',
  //   {
  //     'Content-Type': 'application/x-www-form-urlencoded; charset=EUC-KR',
  //     'Content-Language': 'ko-KR',
  //     'Accept-Language': 'ko-KR,ko;q=0.9',
  //   },
  //   undefined,
  //   body,
  // )
  //   .then((response: any) => response?.data || '')
  Promise.resolve(
    `<?xml version="1.0" encoding="EUC-KR"?>
<ssearch domain="IPTV" section="searchVrs" ver="searchVrs 0.1">
    <output>
        <totalNum>6</totalNum>
        <itemNum>6</itemNum>
        <RESULT_CODE>200</RESULT_CODE>
        <RESULT_MSG>SUCCESS</RESULT_MSG>
        <RefineThema>연애세포 깨워줄 로맨틱 코미디</RefineThema>
        <search code="VOD">
            <totalNum>6</totalNum>
            <itemNum>6</itemNum>
            <VOD_ITEM>
                <CATEGORY_ID>CV000000000043530183</CATEGORY_ID>
                <SERIES_YN>Y</SERIES_YN>
                <CONST_ID></CONST_ID>
                <TITLE>나의 청춘은 너의 것</TITLE>
                <HD_SD>HD</HD_SD>
                <CATEGORY_PULLNAME>
                    <![CDATA[영화>전체보기>다양성 영화]]>
                </CATEGORY_PULLNAME>
                <WON_YN>Y</WON_YN>
                <URL>
                    <![CDATA[http://125.144.104.41/postimg/SC200000000000040529_10_20052014.jpg]]>
                </URL>
                <CMB_YN>N</CMB_YN>
                <NEW_HOT></NEW_HOT>
                <HDR_YN>N</HDR_YN>
                <SMART_DVD_YN>N</SMART_DVD_YN>
                <ACTOR>
                    <![CDATA[송운화,송위룡]]>
                </ACTOR>
                <DIRECTOR>
                    <![CDATA[주동,대몽영]]>
                </DIRECTOR>
                <RATING>12</RATING>
                <OLLEHP>3.6</OLLEHP>
                <RUNTIME>
                    <![CDATA[00:00:00]]>
                </RUNTIME>
                <WIDE_POSTER_FILE></WIDE_POSTER_FILE>
                <G_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/07/13/SC200000000000040529_10030995050001_01_poster_4.jpg]]>
                </G_WIDE_IMG>
                <G_TITLE_WIDE_IMG></G_TITLE_WIDE_IMG>
                <BROAD_CHANNEL_CD></BROAD_CHANNEL_CD>
                <EP_DSTN_DESC></EP_DSTN_DESC>
                <GENRE_CODE>10</GENRE_CODE>
                <WATCH_ORD>999</WATCH_ORD>
                <ICON_CD></ICON_CD>
                <VIRTUAL_DVD_FLAG>N</VIRTUAL_DVD_FLAG>
            </VOD_ITEM>
            <VOD_ITEM>
                <CATEGORY_ID>CV000000000014751243</CATEGORY_ID>
                <SERIES_YN>Y</SERIES_YN>
                <CONST_ID></CONST_ID>
                <TITLE>나의 사랑 나의 신부</TITLE>
                <HD_SD>HD</HD_SD>
                <CATEGORY_PULLNAME>
                    <![CDATA[영화>장르별 한국영화>로맨스/멜로]]>
                </CATEGORY_PULLNAME>
                <WON_YN>Y</WON_YN>
                <URL>
                    <![CDATA[http://125.144.104.41/postimg/CL000000000000057051.jpg]]>
                </URL>
                <CMB_YN>N</CMB_YN>
                <NEW_HOT></NEW_HOT>
                <HDR_YN>N</HDR_YN>
                <SMART_DVD_YN>N</SMART_DVD_YN>
                <ACTOR>
                    <![CDATA[조정석,신민아]]>
                </ACTOR>
                <DIRECTOR>임찬상</DIRECTOR>
                <RATING>15</RATING>
                <OLLEHP>3.6</OLLEHP>
                <RUNTIME>
                    <![CDATA[00:00:00]]>
                </RUNTIME>
                <WIDE_POSTER_FILE></WIDE_POSTER_FILE>
                <G_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/10/24/SC100000000000006196_01_poster.jpg]]>
                </G_WIDE_IMG>
                <G_TITLE_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/10/24/SC100000000000006196_02_poster_image_title.png]]>
                </G_TITLE_WIDE_IMG>
                <BROAD_CHANNEL_CD></BROAD_CHANNEL_CD>
                <EP_DSTN_DESC></EP_DSTN_DESC>
                <GENRE_CODE>10</GENRE_CODE>
                <WATCH_ORD>999</WATCH_ORD>
                <ICON_CD></ICON_CD>
                <VIRTUAL_DVD_FLAG>N</VIRTUAL_DVD_FLAG>
            </VOD_ITEM>
            <VOD_ITEM>
                <CATEGORY_ID>CV000000000009887040</CATEGORY_ID>
                <SERIES_YN>Y</SERIES_YN>
                <CONST_ID></CONST_ID>
                <TITLE>결혼전야</TITLE>
                <HD_SD>HD</HD_SD>
                <CATEGORY_PULLNAME>
                    <![CDATA[영화>장르별 한국영화>로맨스/멜로]]>
                </CATEGORY_PULLNAME>
                <WON_YN>Y</WON_YN>
                <URL>
                    <![CDATA[http://125.144.104.41/postimg/CL000000000000056869.jpg]]>
                </URL>
                <CMB_YN>N</CMB_YN>
                <NEW_HOT></NEW_HOT>
                <HDR_YN>N</HDR_YN>
                <SMART_DVD_YN>N</SMART_DVD_YN>
                <ACTOR>
                    <![CDATA[김강우, 김효진, 이연희, 택연]]>
                </ACTOR>
                <DIRECTOR>홍지영</DIRECTOR>
                <RATING>15</RATING>
                <OLLEHP>3.8</OLLEHP>
                <RUNTIME>
                    <![CDATA[00:00:00]]>
                </RUNTIME>
                <WIDE_POSTER_FILE></WIDE_POSTER_FILE>
                <G_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/11/14/S4830000001756000000_01_poster_1.jpg]]>
                </G_WIDE_IMG>
                <G_TITLE_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/11/14/S4830000001756000000_02_poster_image_title.png]]>
                </G_TITLE_WIDE_IMG>
                <BROAD_CHANNEL_CD></BROAD_CHANNEL_CD>
                <EP_DSTN_DESC></EP_DSTN_DESC>
                <GENRE_CODE>10</GENRE_CODE>
                <WATCH_ORD>999</WATCH_ORD>
                <ICON_CD></ICON_CD>
                <VIRTUAL_DVD_FLAG>N</VIRTUAL_DVD_FLAG>
            </VOD_ITEM>
            <VOD_ITEM>
                <CATEGORY_ID>CV000000000029859315</CATEGORY_ID>
                <SERIES_YN>Y</SERIES_YN>
                <CONST_ID></CONST_ID>
                <TITLE>사랑해도 괜찮아</TITLE>
                <HD_SD>HD</HD_SD>
                <CATEGORY_PULLNAME>
                    <![CDATA[영화>장르별 외국영화>로맨스/멜로]]>
                </CATEGORY_PULLNAME>
                <WON_YN>Y</WON_YN>
                <URL>
                    <![CDATA[http://125.144.104.41/postimg/MIAIA0DASGL150000110.jpg]]>
                </URL>
                <CMB_YN>N</CMB_YN>
                <NEW_HOT></NEW_HOT>
                <HDR_YN>N</HDR_YN>
                <SMART_DVD_YN>N</SMART_DVD_YN>
                <ACTOR>
                    <![CDATA[버지니아 에피라,벤자민 라베른헤]]>
                </ACTOR>
                <DIRECTOR>에릭 베스나드</DIRECTOR>
                <RATING>0</RATING>
                <OLLEHP>4.1</OLLEHP>
                <RUNTIME>
                    <![CDATA[00:00:00]]>
                </RUNTIME>
                <WIDE_POSTER_FILE></WIDE_POSTER_FILE>
                <G_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/07/13/SC200000000000026511_10028830860001_01_poster_4.jpg]]>
                </G_WIDE_IMG>
                <G_TITLE_WIDE_IMG></G_TITLE_WIDE_IMG>
                <BROAD_CHANNEL_CD></BROAD_CHANNEL_CD>
                <EP_DSTN_DESC></EP_DSTN_DESC>
                <GENRE_CODE>10</GENRE_CODE>
                <WATCH_ORD>999</WATCH_ORD>
                <ICON_CD></ICON_CD>
                <VIRTUAL_DVD_FLAG>N</VIRTUAL_DVD_FLAG>
            </VOD_ITEM>
            <VOD_ITEM>
                <CATEGORY_ID>CV000000000028282568</CATEGORY_ID>
                <SERIES_YN>Y</SERIES_YN>
                <CONST_ID></CONST_ID>
                <TITLE>
                    <![CDATA[내 이야기!!]]>
                </TITLE>
                <HD_SD>HD</HD_SD>
                <CATEGORY_PULLNAME>
                    <![CDATA[영화>전체보기>가나다 찾기>나]]>
                </CATEGORY_PULLNAME>
                <WON_YN>Y</WON_YN>
                <URL>
                    <![CDATA[http://125.144.104.41/postimg/MVHI400LSGL150000110.jpg]]>
                </URL>
                <CMB_YN>N</CMB_YN>
                <NEW_HOT></NEW_HOT>
                <HDR_YN>N</HDR_YN>
                <SMART_DVD_YN>N</SMART_DVD_YN>
                <ACTOR>
                    <![CDATA[스즈키 료헤이,나가노 메이,사카구치 켄타로]]>
                </ACTOR>
                <DIRECTOR>카와이 하야토</DIRECTOR>
                <RATING>12</RATING>
                <OLLEHP>4.1</OLLEHP>
                <RUNTIME>
                    <![CDATA[00:00:00]]>
                </RUNTIME>
                <WIDE_POSTER_FILE></WIDE_POSTER_FILE>
                <G_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/10/24/SC200000000000023217_01_poster.jpg]]>
                </G_WIDE_IMG>
                <G_TITLE_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/10/24/SC200000000000023217_02_poster_image_title.png]]>
                </G_TITLE_WIDE_IMG>
                <BROAD_CHANNEL_CD></BROAD_CHANNEL_CD>
                <EP_DSTN_DESC></EP_DSTN_DESC>
                <GENRE_CODE>10</GENRE_CODE>
                <WATCH_ORD>999</WATCH_ORD>
                <ICON_CD></ICON_CD>
                <VIRTUAL_DVD_FLAG>N</VIRTUAL_DVD_FLAG>
            </VOD_ITEM>
            <VOD_ITEM>
                <CATEGORY_ID>CV000000000055095359</CATEGORY_ID>
                <SERIES_YN>Y</SERIES_YN>
                <CONST_ID></CONST_ID>
                <TITLE>사랑은 비를 타고</TITLE>
                <HD_SD>HD</HD_SD>
                <CATEGORY_PULLNAME>
                    <![CDATA[영화>영화 월정액>PLAYY 영화>영화 전체보기>장르별 외국영화>로맨스/멜로]]>
                </CATEGORY_PULLNAME>
                <WON_YN>Y</WON_YN>
                <URL>
                    <![CDATA[http://125.144.104.41/postimg/S4830000002154700000_10_23042415.jpg]]>
                </URL>
                <CMB_YN>N</CMB_YN>
                <NEW_HOT></NEW_HOT>
                <HDR_YN>N</HDR_YN>
                <SMART_DVD_YN>N</SMART_DVD_YN>
                <ACTOR>
                    <![CDATA[진 켈리,도날드 오코너,데비 레이놀즈]]>
                </ACTOR>
                <DIRECTOR>
                    <![CDATA[진 켈리,스탠리 도넌]]>
                </DIRECTOR>
                <RATING>0</RATING>
                <OLLEHP>4.2</OLLEHP>
                <RUNTIME>
                    <![CDATA[00:00:00]]>
                </RUNTIME>
                <WIDE_POSTER_FILE></WIDE_POSTER_FILE>
                <G_WIDE_IMG>
                    <![CDATA[http://125.144.104.41/postimg/GUXP/2022/10/25/S4830000002154700000_40000000111722_20221025183227149_001_IMT013_01.jpg]]>
                </G_WIDE_IMG>
                <G_TITLE_WIDE_IMG></G_TITLE_WIDE_IMG>
                <BROAD_CHANNEL_CD></BROAD_CHANNEL_CD>
                <EP_DSTN_DESC></EP_DSTN_DESC>
                <GENRE_CODE>10</GENRE_CODE>
                <WATCH_ORD>999</WATCH_ORD>
                <ICON_CD>N</ICON_CD>
                <VIRTUAL_DVD_FLAG>N</VIRTUAL_DVD_FLAG>
            </VOD_ITEM>
        </search>
    </output>
</ssearch>`,
  )
    .then((xmlStr: string) => xml2json(xmlStr, { compact: true, spaces: 2 }))
    .then(JSON.parse)
    .catch((error: any) => {
      console.error(error);
      throw error;
    });

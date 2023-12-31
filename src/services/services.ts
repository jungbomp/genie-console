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
  request(
    getDrsRecommendGenieUrl(),
    'POST',
    {
      'Content-Type': 'application/x-www-form-urlencoded; charset=EUC-KR',
      'Content-Language': 'ko-KR',
      'Accept-Language': 'ko-KR,ko;q=0.9',
    },
    undefined,
    body,
  )
    .then((response: any) => response?.data || '')
    .then((xmlStr: string) => xml2json(xmlStr, { compact: true, spaces: 2 }))
    .then(JSON.parse)
    .catch((error: any) => {
      console.error(error);
      throw error;
    });

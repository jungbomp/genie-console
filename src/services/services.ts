import request from 'src/services/request';
import { getTotalAutoWordsUrl } from 'src/services/apis';
import { xml2json } from 'xml-js';

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
    .then((xmlStr: string) => xml2json(xmlStr, { compact: true, spaces: 2 }))
    .then(JSON.parse)
    .catch((error: any) => {
      console.error(error);
      throw error;
    });

import axios, { Method } from 'axios';
import { JsonParam } from './types';
import { toQueryParamStr } from './utils';

const request = (
  url: string,
  method: Method,
  headers?: JsonParam,
  params?: JsonParam,
  data?: any,
  isUrlEncode?: boolean,
): Promise<any> => {
  const queryParam: string = toQueryParamStr(params ?? {}, isUrlEncode);

  return axios({
    method,
    url: `${url}${queryParam.length > 0 ? `?${queryParam}` : ''}`,
    headers: {
      'Content-Type': 'application/JSON; charset=utf=8',
      ...(headers ?? {}),
    },
    data,
    validateStatus: (status: number): boolean => status >= 200 && status < 501,
  });
};

export default request;

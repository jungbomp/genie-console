import type { MidmApiRequestBody, MidmGeneratingOption } from 'src/types';

import type { JsonParam } from './types';

export const toQueryParamStr = (param: JsonParam): string => {
  const queryParams: string[] = Object.keys(param).map(
    (key: string): string => `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`,
  );

  return queryParams.length > 0 ? queryParams.join('&') : '';
};

const isUrlSafe = (char: string) => {
  return /[a-zA-Z0-9\-_~.]+/.test(char);
};

export const urlEncodeBytes = (buf: Buffer): string => {
  let encoded = '';
  for (let i = 0; i < buf.length; i += 1) {
    const charBuf = Buffer.from('00', 'hex');
    charBuf.writeUInt8(buf[i]);
    const char = charBuf.toString();
    // if the character is safe, then just print it, otherwise encode
    if (isUrlSafe(char)) {
      encoded += char;
    } else {
      encoded += `%${charBuf.toString('hex').toUpperCase()}`;
    }
  }
  return encoded;
};

export const buildMidmApiRequestBody = (
  prompt: string,
  generatingOption: MidmGeneratingOption,
): MidmApiRequestBody => ({
  api_key: '1234567890',
  text: `User; ${prompt} Midm; `,
  gen_option: generatingOption,
});

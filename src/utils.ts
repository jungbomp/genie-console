import _ from 'lodash';
import euckrIndex from 'statics/euckrIndex.json';

// @ts-ignore
const euckrCPs: (number | null)[] = []; // index is unicode cp, value is pointer
export const chars2cps = (chars: string) => {
  // this is needed because of javascript's handling of supplementary characters
  // char: a string of unicode characters
  // returns an array of decimal code point values
  let haut = 0;
  const out = [];
  for (let i = 0; i < chars.length; i += 1) {
    const b = chars.charCodeAt(i);
    if (b < 0 || b > 0xffff) {
      console.error(`Error in chars2cps: byte out of range ${b.toString(16)}!`);
    }

    if (haut !== 0) {
      if (b >= 0xdc00 && b <= 0xdfff) {
        // eslint-disable-next-line no-bitwise
        out.push(0x10000 + ((haut - 0xd800) << 10) + (b - 0xdc00));
        haut = 0;
        // eslint-disable-next-line no-continue
        continue;
      } else {
        console.error(`Error in chars2cps: surrogate out of range ${haut.toString(16)}!`);
        haut = 0;
      }
    }

    if (b >= 0xd800 && b <= 0xdbff) {
      haut = b;
    } else {
      out.push(b);
    }
  }

  return out;
};

export const euckrEncoder = (stream: string) => {
  if (_.isEmpty(euckrCPs)) {
    for (let i = 0; i < euckrIndex.length; i += 1) {
      // @ts-ignore
      if (euckrIndex[i] !== null && !euckrCPs[euckrIndex[i]]) {
        // @ts-ignore
        euckrCPs[euckrIndex[i]] = i;
      }
    }
  }

  const cps = chars2cps(stream);
  let out = '';

  while (cps.length > 0) {
    const cp = cps.shift();
    if (!cp) {
      // eslint-disable-next-line no-continue
      continue;
    }

    // @ts-ignore
    if (cp >= 0x00 && cp <= 0x7f) {
      // ASCII
      out += ` ${cp.toString(16)}`;
      // eslint-disable-next-line no-continue
      continue;
    }

    const ptr = euckrCPs[cp];
    if (ptr === null) {
      out += ` &#${cp};`;
      // eslint-disable-next-line no-continue
      continue;
    }

    const lead = Math.floor(ptr / 190) + 0x81;
    const trail = (ptr % 190) + 0x41;
    out += ` ${lead.toString(16).toUpperCase()} ${trail.toString(16).toUpperCase()}`;
  }

  return out;
};

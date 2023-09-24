import type { CopyWritingOption } from '../CopyWriting.types';

import { SET_COPY_WRITING_OPTIONS } from './actionType';

export const setCopyWritingOption = (copyWritingOption: CopyWritingOption | undefined) => ({
  type: SET_COPY_WRITING_OPTIONS,
  payload: {
    copyWritingOption,
  },
});

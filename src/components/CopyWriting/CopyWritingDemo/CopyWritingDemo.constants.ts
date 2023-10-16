import genieCopyWriteBackground from 'images/genie_copywrite_background.jpg';
import genieCopyWriteBackgroundSynopsisCoco from 'images/genie_copywrite_background_synopsis_coco.jpg';

import type { CopyWritingDemoPreset } from './CopyWritingDemo.types';

export const copyWritingDemoPresets: CopyWritingDemoPreset = {
  HEAD: {
    비공식작전: {
      backgroundImage: genieCopyWriteBackground,
    },
  },
  BODY: {
    비공식작전: {
      backgroundImage: genieCopyWriteBackground,
    },
  },
  SYNOPSIS: {
    비공식작전: {
      backgroundImage: genieCopyWriteBackgroundSynopsisCoco,
    },
  },
};

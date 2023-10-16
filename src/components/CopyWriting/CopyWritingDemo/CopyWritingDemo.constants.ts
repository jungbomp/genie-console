import genieCopyWriteBackgroundHeadCoco from 'images/genie_copywrite_background_head_coco.jpg';
import genieCopyWriteBackgroundSynopsisCoco from 'images/genie_copywrite_background_synopsis_coco.jpg';
import genieCopyWriteBackgroundHeadGhost from 'images/genie_copywrite_background_head_ghost.jpg';
import genieCopyWriteBackgroundSynopsisGhost from 'images/genie_copywrite_background_synopsis_ghost.jpg';

import type { CopyWritingDemoPreset } from './CopyWritingDemo.types';

export const copyWritingDemoPresets: CopyWritingDemoPreset = {
  HEAD: {
    비공식작전: {
      backgroundImage: genieCopyWriteBackgroundHeadCoco,
    },
    코코: {
      backgroundImage: genieCopyWriteBackgroundHeadCoco,
    },
    유령: {
      backgroundImage: genieCopyWriteBackgroundHeadGhost,
    },
    '콘크리트 유토피아': {
      backgroundImage: genieCopyWriteBackgroundHeadCoco,
    },
  },
  BODY: {
    비공식작전: {
      backgroundImage: genieCopyWriteBackgroundHeadCoco,
    },
    코코: {
      backgroundImage: genieCopyWriteBackgroundHeadCoco,
    },
    유령: {
      backgroundImage: genieCopyWriteBackgroundHeadGhost,
    },
    '콘크리트 유토피아': {
      backgroundImage: genieCopyWriteBackgroundHeadCoco,
    },
  },
  SYNOPSIS: {
    비공식작전: {
      backgroundImage: genieCopyWriteBackgroundSynopsisCoco,
    },
    코코: {
      backgroundImage: genieCopyWriteBackgroundSynopsisCoco,
    },
    유령: {
      backgroundImage: genieCopyWriteBackgroundSynopsisGhost,
    },
    '콘크리트 유토피아': {
      backgroundImage: genieCopyWriteBackgroundSynopsisCoco,
    },
  },
};

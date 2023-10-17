import genieCopyWriteBackgroundHeadCoco from 'images/genie_copywrite_background_head_coco.jpg';
import genieCopyWriteBackgroundSynopsisCoco from 'images/genie_copywrite_background_synopsis_coco.jpg';
import genieCopyWriteBackgroundHeadGhost from 'images/genie_copywrite_background_head_ghost.jpg';
import genieCopyWriteBackgroundSynopsisGhost from 'images/genie_copywrite_background_synopsis_ghost.jpg';
import genieCopyWriteBackgroundHeadSmugglers from 'images/genie_copywrite_background_head_smugglers.jpg';
import genieCopyWriteBackgroundSynopsisSmugglers from 'images/genie_copywrite_background_synopsis_smugglers.jpg';

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
    밀수: {
      backgroundImage: genieCopyWriteBackgroundHeadSmugglers,
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
    밀수: {
      backgroundImage: genieCopyWriteBackgroundHeadSmugglers,
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
    밀수: {
      backgroundImage: genieCopyWriteBackgroundSynopsisSmugglers,
    },
  },
};

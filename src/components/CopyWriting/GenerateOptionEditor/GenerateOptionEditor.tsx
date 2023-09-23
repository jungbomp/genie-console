import React from 'react';

import CopyGenerateOptionEditor from './CopyGenerateOptionEditor/CopyGenerateOptionEditor';
import SynopsisGenerateOptionEditor from './SynopsisGenerateOptionEditor/SynopsisGenerateOptionEditor';

import { GenerateOptionEditorProps } from './GenerateOptionEditor.types';

const GenerateOptionEditor: React.FC<GenerateOptionEditorProps> = ({ className, value }) => {
  if (value === 'HEAD' || value === 'BODY') {
    return <CopyGenerateOptionEditor className={className} />;
  }

  return value ? 'SYNOPSIS' && <SynopsisGenerateOptionEditor className={className} /> : null;
};

export default GenerateOptionEditor;

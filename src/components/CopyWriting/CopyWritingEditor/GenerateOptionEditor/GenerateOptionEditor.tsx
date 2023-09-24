import React from 'react';

import CopyGenerateOptionEditor from './CopyGenerateOptionEditor/CopyGenerateOptionEditor';
import SynopsisGenerateOptionEditor from './SynopsisGenerateOptionEditor/SynopsisGenerateOptionEditor';

import { GenerateOptionEditorProps } from './GenerateOptionEditor.types';

const GenerateOptionEditor: React.FC<GenerateOptionEditorProps> = ({
  className,
  copyType,
  wordCount,
  promotionType,
  onWordCountChange,
  onPromotionTypeChange,
}) => {
  if (copyType === 'HEAD' || copyType === 'BODY') {
    return (
      <CopyGenerateOptionEditor
        className={className}
        wordCount={wordCount}
        promotionType={promotionType}
        onWordCountChange={onWordCountChange}
        onPromotionTypeChange={onPromotionTypeChange}
      />
    );
  }

  return copyType === 'SYNOPSIS' ? (
    <SynopsisGenerateOptionEditor className={className} wordCount={wordCount} onWordCountChange={onWordCountChange} />
  ) : null;
};

export default GenerateOptionEditor;

import React from 'react';

import CopyGenerateOptionEditor from './CopyGenerateOptionEditor/CopyGenerateOptionEditor';
import SynopsisGenerateOptionEditor from './SynopsisGenerateOptionEditor/SynopsisGenerateOptionEditor';

import { GenerateOptionEditorProps } from './GenerateOptionEditor.types';

const GenerateOptionEditor: React.FC<GenerateOptionEditorProps> = ({
  className,
  copyType,
  wordCount,
  promotionType,
  promotionDetails,
  onWordCountChange,
  onPromotionTypeChange,
  onPromotionDetailsChange,
}) => {
  if (copyType === 'HEAD' || copyType === 'BODY') {
    return (
      <CopyGenerateOptionEditor
        className={className}
        wordCount={wordCount}
        promotionType={promotionType}
        promotionDetails={promotionDetails}
        onWordCountChange={onWordCountChange}
        onPromotionTypeChange={onPromotionTypeChange}
        onPromotionDetailsChange={onPromotionDetailsChange}
      />
    );
  }

  return copyType === 'SYNOPSIS' ? (
    <SynopsisGenerateOptionEditor className={className} wordCount={wordCount} onWordCountChange={onWordCountChange} />
  ) : null;
};

export default GenerateOptionEditor;

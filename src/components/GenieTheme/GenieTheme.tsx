import React from 'react';
import { GenieThemeProps } from './GenieTheme.types';

const GenieTheme: React.FC<GenieThemeProps> = ({ className }) => {
  return <div className={className} />;
};

export default GenieTheme;

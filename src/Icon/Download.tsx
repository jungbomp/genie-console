import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// @ts-ignore
// eslint-disable-next-line react/display-name
export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <svg id='download-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <path d='M26,24v4H6V24H4v4H4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2h0V24Z' />
      <polygon points='26 14 24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14' />
      <g id='_Transparent_Rectangle_' data-name='&lt;Transparent Rectangle&gt;'>
        <rect width='32' height='32' style={{ fill: 'none' }} />
      </g>
    </svg>
  </SvgIcon>
);

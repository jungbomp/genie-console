import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// @ts-ignore
// eslint-disable-next-line react/display-name
export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <svg id='recommended-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <title>recommend</title>
      <path d='M16,2a9,9,0,0,0-6,15.69V30l6-4,6,4V17.69A9,9,0,0,0,16,2Zm4,24.26-2.89-1.92L16,23.6l-1.11.74L12,26.26V19.05a8.88,8.88,0,0,0,8,0ZM20.89,16A7,7,0,1,1,23,11,7,7,0,0,1,20.89,16Z' />
      <rect width='32' height='32' style={{ fill: 'none' }} />
    </svg>
  </SvgIcon>
);

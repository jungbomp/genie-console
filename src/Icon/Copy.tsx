import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// @ts-ignore
// eslint-disable-next-line react/display-name
export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <svg id='copy-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <title>copy</title>
      <path
        d='M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z'
        transform='translate(0)'
      />
      <path d='M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z' transform='translate(0)' />
      <rect width='32' height='32' style={{ fill: 'none' }} />
    </svg>
  </SvgIcon>
);

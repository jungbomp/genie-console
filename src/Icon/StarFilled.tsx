import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// @ts-ignore
// eslint-disable-next-line react/display-name
export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <svg id='star-filled-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <title>star--filled</title>
      <path d='M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z' />
      <rect width='32' height='32' style={{ fill: 'none' }} />
    </svg>
  </SvgIcon>
);

import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// @ts-ignore
// eslint-disable-next-line react/display-name
export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <svg id='thumbs-up-filled-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <rect x='2' y='16' width='5' height='14' />
      <path d='M23,30H9V15.1973l3.0422-4.5635.8453-5.9165A2.0094,2.0094,0,0,1,14.8672,3H15a3.0033,3.0033,0,0,1,3,3v6h8a4.0045,4.0045,0,0,1,4,4v7A7.0078,7.0078,0,0,1,23,30Z' />
      <rect width='32' height='32' style={{ fill: 'none' }} />
    </svg>
  </SvgIcon>
);

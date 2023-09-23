import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// @ts-ignore
// eslint-disable-next-line react/display-name
export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <svg version='1.1' id='edit-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <title>edit</title>
      <rect x='2' y='26' width='28' height='2' />
      <path
        d='M25.4,9c0.8-0.8,0.8-2,0-2.8c0,0,0,0,0,0l-3.6-3.6c-0.8-0.8-2-0.8-2.8,0c0,0,0,0,0,0l-15,15V24h6.4L25.4,9z M20.4,4L24,7.6
	l-3,3L17.4,7L20.4,4z M6,22v-3.6l10-10l3.6,3.6l-10,10H6z'
      />
      <rect width='32' height='32' style={{ fill: 'none' }} />
    </svg>
  </SvgIcon>
);

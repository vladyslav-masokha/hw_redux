import React from 'react';
import {Typography} from '@mui/material';

/**
 * @param {Copyright} props - The custom props.
 * @return {string} Copyright.
 */
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >All rights reversed
      &copy; Admin panel, {''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;

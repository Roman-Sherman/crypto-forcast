import React from 'react';
import { styled } from '@mui/material/styles';
import { OutlinedInput } from '@mui/material';

const CustomOutlinedInput = styled((props: any) => <OutlinedInput {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },

  '& .MuiTypography-root': {
    color: theme.palette.text.secondary,
  },

  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    background: 'rgba(0, 0, 0, .2)'
  }
}));

export default CustomOutlinedInput;

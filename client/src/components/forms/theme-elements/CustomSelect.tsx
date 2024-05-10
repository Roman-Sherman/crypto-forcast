import React from 'react';
import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

const CustomSelect = styled((props: any) => <Select {...props} />)(({}) => ({
    '& MuiInputBase-root': {
        border: '1px solid red'
    }
}));

export default CustomSelect;

import React, { useState } from 'react';
import { FormControl, MenuItem, Select, styled, InputLabel } from '@mui/material';

const StyledSelect = styled(Select)({
    padding: '0px',
    borderRadius: '8px',
    height: '40px',
    width: '300px',
});

const CustomInputLabel = styled(InputLabel)({
    color: 'black',  // Change this to your desired label color
});

const SelectDropDown = ({ filterOptions, onSelect, label, value }) => {
    
    const handleChange = (event) => {
        onSelect(event.target.value)
    };

    return (
        <FormControl>
            <CustomInputLabel id="select-label" htmlFor="select" color="primary">
                {label}
            </CustomInputLabel>
            <StyledSelect
                labelId="select-label"
                id="select"
                value={value}
                label={label}
                onChange={handleChange}
            >
                {filterOptions.map((el) => (
                    <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>
                ))}
            </StyledSelect>
        </FormControl>
    );
};

export default SelectDropDown;

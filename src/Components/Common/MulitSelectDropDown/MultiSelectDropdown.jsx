import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const MultiSelectDropDown = ({filterOptions, onSelect, value}) => {

    const handleChange = (event, value) => {
        onSelect(value)
    }

  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={filterOptions}
      getOptionLabel={(option) => option.label}
      onChange={handleChange}
      value={value}
    //   defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
      renderInput={(params) => (
        <TextField {...params} label="Filter by labels" placeholder="Label(s)" />
      )}
        sx={{
            '& input': {
                height: '30px',
                padding: '0px !important'
            },
            width: '300px'
        }}  
    />
  );
}

export default MultiSelectDropDown
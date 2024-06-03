import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownForSingleValue({ placeHolder, data, onSelect, value, optionPostFix = "" }) {
  return (
    <Box sx={{ minWidth: 200, marginRight: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeHolder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="CTC"
          onChange={(e) => onSelect(e.target.value)}
        >
          {data.map(item =>
            <MenuItem value={item} key={item}>{item} {optionPostFix && optionPostFix} </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

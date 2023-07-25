import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlArrowDown } from 'react-icons/sl'
import colors from "../../../constants/colors";

const AppSelect = ({ title, tagLabel, items, width, selected, setSelected }) => {

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    const itemElements = items.map(i => (
        <MenuItem value={i} key={i}>{i}</MenuItem>
    ));


    return (
        <Box>
            <FormControl sx={{
                m: 1,

            }} fullWidth size="small">
                <InputLabel>{tagLabel}</InputLabel>
                <Select
                    IconComponent={SlArrowDown}
                    sx={{
                        '& .MuiSelect-icon': {
                            fill: colors.resalte1,
                        },
                        '& .MuiSelect-outlined': {
                            border: `2px solid ${colors.resalte1}`,
                          },
                    }}
                    className={width}
                    value={selected}
                    onChange={handleChange}
                    // variant="outlined"
                >
                    <MenuItem value={title}>
                        <em>{title}</em>
                    </MenuItem>
                    {itemElements}
                </Select>
            </FormControl>
        </Box>
    )
}

export default AppSelect;

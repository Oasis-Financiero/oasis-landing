import React, { useState } from "react";
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
        <>
            <FormControl sx={{ 
                m: 1,
                '& .MuiSelect-select' : {
                    border: `2px solid ${colors.resalte1}`,
                    borderRadius: '6px'
                } 
                }} size="small">
                <InputLabel sx={{ fontFamily: 'Inter', fontSize: '16px' }}>{tagLabel}</InputLabel>
                <Select
                    IconComponent={SlArrowDown}
                    sx={{
                        '& .MuiSelect-icon': {
                            fill: colors.resalte1,
                        },
                    }}
                    displayEmpty
                    className={width}
                    value={selected}
                    onChange={handleChange}
                >
                    <MenuItem value={title}>
                        <em>{title}</em>
                    </MenuItem>
                    {itemElements}
                </Select>
            </FormControl>
        </>
    )
}

export default AppSelect;

import React, { useState } from "react";
import './Dropdown.css'
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
            <FormControl sx={{ m: 1 }} size="small">
                <InputLabel sx={{ fontFamily: 'Inter', fontSize: '14px' }}>{tagLabel}</InputLabel>
                <Select
                    IconComponent={SlArrowDown}
                    sx={{
                        '& .MuiSelect-icon': {
                            fill: colors.resalte1,
                        },
                        '& .MuiSelect-outlined': {
                            border: `2px solid ${colors.resalte1}`,
                            borderRadius: '6px',
                            backgroundColor: colors.fdoGris,
                        }
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

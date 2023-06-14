import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlArrowDown } from 'react-icons/sl'
import selectStyle from "./styles";

const AppSelect = ({ title, tagLabel, items }) => {

    const item = items.map(i => {
        return (
            <MenuItem value={i}>{i}</MenuItem>
        )
    })
    return (
        <>
            <FormControl sx={{ m: 1, width: 214 }} size="small">
                <InputLabel id="demo-simple-select-helper-label">{tagLabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label={title}
                    autoWidth
                    IconComponent={SlArrowDown}
                    sx={selectStyle}
                >
                    <MenuItem value="">
                        <em>{title}</em>
                    </MenuItem>

                    {item}
                </Select>
            </FormControl>
        </>
    )
}

export default AppSelect
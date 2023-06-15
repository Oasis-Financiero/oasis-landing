import React from "react";
import './Dropdown.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlArrowDown } from 'react-icons/sl'
import colors from "../../../constants/colors";

const AppSelect = ({ title, tagLabel, items }) => {

    const item = items.map(i => {
        return (
            <MenuItem value={i}>{i}</MenuItem>
        )
    })

    return (
        <>
            <FormControl sx={{ m: 1, width: 214 }} size="small">
                <InputLabel sx={{
                    fontFamily: 'Inter',
                    fontSize: '14px'
                }}>{tagLabel}</InputLabel>
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
                    inputProps='Without label'
                    displayEmpty
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
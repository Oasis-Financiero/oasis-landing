import React from "react";
import './Dropdown.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlArrowDown } from 'react-icons/sl'
import colors from "../../../constants/colors";

const AppSelect = ({ title, tagLabel, items, width }) => {

    const item = items.map(i => {
        return (
            <MenuItem value={i} key={i}>{i}</MenuItem>
        )
    })

    return (
        <>
            <FormControl sx={{
                m: 1,
            }} size="small">
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
                    displayEmpty
                    className={width}
                    value={""}
                >
                    <MenuItem value={title}>
                        <em>{title}</em>
                    </MenuItem>
                    {item}
                </Select>
            </FormControl>
        </>
    )
}

export default AppSelect
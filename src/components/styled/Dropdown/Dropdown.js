import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlArrowDown } from 'react-icons/sl'
import styles from "./styles";

const AppSelect = ({ title, tagLabel, items }) => {

    const item = items.map(i => {
        return (
            <MenuItem value={i}>{i}</MenuItem>
        )
    })

    return (
        <>
            <FormControl sx={{ m: 1, width: 214 }} size="small">
                <InputLabel>{tagLabel}</InputLabel>
                <Select
                    IconComponent={SlArrowDown}
                    sx={styles.selectComp}
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
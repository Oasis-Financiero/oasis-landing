import React from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlArrowDown } from 'react-icons/sl'
import { alpha } from '@mui/material/styles';
import colors from "../../../constants/colors";

const AppSelect = ({ title, items, width, selected, setSelected, name }) => {

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    const itemElements = items.map(i => (
        <MenuItem value={i} key={i}>{i}</MenuItem>
    ));


    return (
            <FormControl
                sx={{
                    minWidth: "min-content",
                    maxWidth: width || "100%",
                    width: '100%',
                    margin: "0px",
                }}
                size="small"
            >
                <Select
                    IconComponent={SlArrowDown}
                    sx={{
                        width: "100%",
                        height: "45px",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        borderRadius: "6px",
                        borderWidth: "0px",
                        outline: "0px",
                        border: `2px solid ${colors.resalte1}`,
                        '&.Mui-focused': {
                            boxShadow: `${alpha(colors.resalte1, 0.25)} 0 0 0 0.2rem`,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: "0px",
                            borderRadius: "6px"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderWidth: "0px"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderWidth: "0px"
                        },
                        '& .MuiSelect-icon': {
                            fill: colors.resalte1,
                            marginRight: "5px"
                        },
                        '& .MuiSelect-outlined': {
                            backgroundColor: colors.fdoGris
                        },
                        '& .MuiInputBase-input': {
                            borderRadius: "6px"
                        }
                    }}
                    value={selected}
                    onChange={handleChange}
                    name={name}
                // variant="outlined"
                >
                    <MenuItem value={title}>
                        <em>{title}</em>
                    </MenuItem>
                    {itemElements}
                </Select>
            </FormControl>
    )
}

export default AppSelect;

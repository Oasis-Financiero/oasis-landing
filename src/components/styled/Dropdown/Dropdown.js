import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { selectClasses } from '@mui/material/Select';
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material";
import colors from "../../../constants/colors";
import { SlArrowDown } from 'react-icons/sl'



const Dropdown = ({ title, tagLabel, items }) => {

    const CustomizeSelect = styled(Select)`
    border-radius: 6px;
    background-color : #F9F9F9;

    & .${selectClasses.icon} {
        color: ${colors.resalte1};
      }
    
      & .${outlinedInputClasses.notchedOutline} {
        border-color: ${colors.resalte1};
      }
    
      &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} 
      {
        border-color: ${colors.resalte1};
        
      }
    
    `

    const item = items.map(i => {
        return (
            <MenuItem value={i}>{i}</MenuItem>
        )
    })
    return (
        <>
            <FormControl sx={{ m: 1, width: 214 }} size="small">
                <InputLabel id="demo-simple-select-helper-label">{tagLabel}</InputLabel>
                <CustomizeSelect
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label={title}
                    autoWidth
                    IconComponent={SlArrowDown}
                >

                    <MenuItem value="">
                        <em>{title}</em>
                    </MenuItem>

                    {item}
                </CustomizeSelect>
            </FormControl>
        </>
    )
}

export default Dropdown
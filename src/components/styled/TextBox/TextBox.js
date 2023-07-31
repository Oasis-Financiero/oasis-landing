import React from "react";
import { alpha } from '@mui/material/styles';
import InputBase from "@mui/material/InputBase";
import colors from "../../../constants/colors";

const AppTextBox = ({ label, width, onChangeValue, value, error }) => {

    return (
        <InputBase
            sx={{
                height: "45px",
                minWidth: "min-content",
                maxWidth: width || "100%",
                width: '100%',
                '& .MuiInputBase-input': {
                    height: "100%",
                    boxSizing: "border-box",
                    borderRadius: "6px",
                    position: 'relative',
                    backgroundColor: colors.fdoGris,
                    border: '2px solid',
                    borderColor: colors.resalte1,
                    fontSize: "14px",
                    padding: '10px 12px',
                    '&:focus': {
                        boxShadow: `${alpha(colors.resalte1, 0.25)} 0 0 0 0.2rem`
                    },
                    fontFamily: "Inter",
                    color: colors.brand2
                }
            }}
            onChange={onChangeValue}
            value={value}
            error={error}
            placeholder={label}
        />
    )
}

export default AppTextBox
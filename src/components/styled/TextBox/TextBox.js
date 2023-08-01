import React from "react";
import { alpha } from '@mui/material/styles';
import InputBase from "@mui/material/InputBase";
import Box  from "@mui/material/Box";
import colors from "../../../constants/colors";

const AppTextBox = ({ label, width, onChangeValue, value, error }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "min-content",
                maxWidth: width || "100%",
                width: '100%'
            }}
        >
            <InputBase
                sx={{
                    height: "45px",
                    width: '100%',
                    '& .MuiInputBase-input': {
                        height: "45px",
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
                    },
                    '&.Mui-error .MuiInputBase-input': {
                        borderColor: colors.resalte2,
                    }
                }}
                onChange={onChangeValue}
                value={value}
                error={error}
                placeholder={label}
            />
            {
                error && 
                <Box 
                    sx={{
                        padding: "4px 6px",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        color: colors.resalte2
                    }}
                >
                    {"Email inválido"}
                </Box>
            }
        </Box>
    )
}

export default AppTextBox
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Dropdown/Dropdown.css'
import colors from "../../../constants/colors";

const AppTextBox = ({ label, size, onChangeValue, value, error, helperText }) => {

    let sizeContainer
    if (size === "contactMessage") {
        sizeContainer = "w-[349px] md:w-[445px]"
    } else {
        sizeContainer = "w-[166px] md:w-[214px]"
    }





    return (
        <>
            <Box
                component="form"
            >

                <TextField
                    label={label}
                    size="small"
                    sx={{
                        fontFamily: 'Inter',
                        backgroundColor: colors.fdoGris,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: `2px solid ${colors.resalte1}`,
                                borderRadius: '6px',
                                height: '47px'
                            },
                            '&.Mui-focused': {
                                '& fieldset': {
                                    border: `2px solid ${colors.resalte1}`,
                                }
                            }
                        },
                        
                    }}
                    className={sizeContainer}
                    onChange={onChangeValue}
                    value={value}
                    id={error ? "Introduzca correo valido" : null}
                    error={error}
                    helperText={helperText}
                />

            </Box>
        </>
    )
}

export default AppTextBox
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Dropdown/Dropdown.css'
import colors from "../../../constants/colors";

const AppTextBox = ({ label }) => {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        border: `2px solid ${colors.resalte1}`,
                        borderRadius: '6px',

                    },
                }}


            >
                <div>
                    <TextField
                        label={label}
                        id="outlined-size-small"
                        size="small"
                        sx={{
                            fontFamily: 'Inter',
                            backgroundColor: colors.fdoGris,
                        }}
                    className="w-[166px] md:w-[214px]"
                    />
                </div>
            </Box>
        </>
    )
}

export default AppTextBox
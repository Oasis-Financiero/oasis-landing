import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Dropdown/Dropdown.css'
import colors from "../../../constants/colors";

const AppTextBox = ({ label, size }) => {

    let sizeContainer
if(size === "contactMessage") {
     sizeContainer = "w-[349px] md:w-[445px]"
} else {
     sizeContainer = "w-[166px] md:w-[214px]"
}

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
                        size="small"
                        sx={{
                            fontFamily: 'Inter',
                            backgroundColor: colors.fdoGris,
                        }}
                    className={sizeContainer}
                    />
                </div>
            </Box>
        </>
    )
}

export default AppTextBox
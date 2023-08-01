import React from "react";
import Box from '@mui/material/Box';
import colors from "../../../constants/colors";
import * as styles from './LineCard.modules.css'
import { Typography } from "@mui/material";

const AppLinedCard = ({ title, subtitle }) => {
    return (
        <>

            <Box
                sx={{
                    backgroundColor: 'white',
                    height: '234px',
                    width: '332px',
                    border: `2px solid ${colors.fdoGris}`,
                    borderRadius: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '15px',
                    padding: '20px'
                }}
                className="shadow-lg"
            >
                <Typography sx={{
                    color: colors.resalte1,
                    font: 'normal normal bold 22px/26px Poppins',
                }}>{title}</Typography>
                <Typography sx={{
                    color: colors.brand1,
                    font: 'normal normal normal 15px/22px Inter'
                }}>{subtitle}</Typography>
            </Box>

        </>
    )
}

export default AppLinedCard
import { Button } from "@mui/material";
import React from "react";
import { LuHeart } from 'react-icons/lu'
import colors from "../../../constants/colors";
import './LinedButton.modules.css'

const AppLinedButton = ({ title }) => {
    return (

        <Button
            sx={{
                textTransform: 'none',
                width: '214px',
                height: '45px',
                backgroundColor: 'transparent',
                border: `2px solid ${colors.brand1}`,
                display: 'flex',
                gap: '9px',
                borderRadius: '23px',
                color: colors.brand1,
                font: 'normal normal 600 16px/20px Inter;'
            }}
        >
            {title}

            <LuHeart 
            size={20}
            />
        </Button>

    )
}

export default AppLinedButton
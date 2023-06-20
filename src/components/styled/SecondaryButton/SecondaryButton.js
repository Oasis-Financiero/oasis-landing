import { Button } from "@mui/material";
import React from "react";
import { HiArrowSmRight } from 'react-icons/hi'
import colors from "../../../constants/colors";
import '../Dropdown/Dropdown.css'

const AppSecondaryButton = ({text}) => {
    return (
        <div>
            <Button
                sx={{
                    textTransform: 'none',
                    fontSize: '20px',
                    color: colors.brand1,
                    fontFamily: 'Poppins'
                    
                }}
                className="flex gap-2 items-center"
            >
                {text} <HiArrowSmRight
                    size={27}
                    fill={colors.resalte1}
                />
            </Button>
        </div>
    )
}

export default AppSecondaryButton
import { Button } from "@mui/material";
import React from "react";
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi'
import colors from "../../../constants/colors";

const AppSecondaryButton = ({ text, back, onClick }) => {
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
                onClick={onClick}
            >
                {text} {back ? <HiArrowSmLeft
                    size={27}
                    fill={colors.resalte1}
                /> 
                : 
                <HiArrowSmRight
                    size={27}
                    fill={colors.resalte1}
                />
                }
            </Button>
        </div>
    )
}

export default AppSecondaryButton
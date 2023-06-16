import React from "react";
import './AppButton.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Button } from "@mui/material";

const AppButton = ({tag}) => {
    return (
        <>
            <div>
                <Button
                    id="button"
                    className={`flex flex-row justify-center items-center p-2`}
                    sx={{
                        textTransform: 'none'
                    }}
                >
                    {tag}
                    <MdOutlineKeyboardArrowRight
                        size={25}
                    />
                </Button>
            </div>
        </>
    )
}

export default AppButton
import React from "react";
import './AppButton.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Button } from "@mui/material";

const AppButton = ({tag, width}) => {
    return (
        <>
            <div className="">
                <Button
                    id="button"
                    className={`flex flex-row justify-center items-center p-2`}
                    sx={{
                        textTransform: 'none',
                        maxWidth: `${width}px`
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
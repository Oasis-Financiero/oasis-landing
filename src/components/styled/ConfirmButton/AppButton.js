import React from "react";
import './AppButton.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Button } from "@mui/material";

const AppButton = ({ tag, width, onClick, type }) => {
    return (
        <>
            <form onClick={onClick}>
                <Button
                    id="button"
                    className={`flex flex-row justify-center items-center p-2`}
                    sx={{
                        textTransform: 'none',
                        maxWidth: `${width}px`
                    }}
                    type={type}
                >
                    {tag}
                    <MdOutlineKeyboardArrowRight
                        size={25}
                    />
                </Button>
            </form>
        </>
    )
}

export default AppButton
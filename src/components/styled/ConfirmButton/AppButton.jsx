import React from "react";
import './AppButton.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const AppButton = () => {
    return (
        <>
            <div>
                <button
                    id="button"
                    className={`flex flex-row justify-center items-center p-2`}
                >
                    Calcular préstamo
                    <MdOutlineKeyboardArrowRight
                        size={25}
                    />
                </button>
            </div>
        </>
    )
}

export default AppButton
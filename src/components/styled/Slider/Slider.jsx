import React, { useState } from "react";
import { Slider } from "@mui/material";
import colors from "../../../constants/colors";
import * as style from '../Slider/Slider.module.css'

const AppSlider = ({ type, coin, size, classes, value, onValueChange, limit }) => {


    const onSlide = (e, newValue) => {
        e.preventDefault
        onValueChange(newValue)
    }

    return (
        <div className={`flex flex-col justify-center items-center`}>
            <h1 id={size === 'responsive' ? style.responsive : style.normal }>{`${type}: `} <span className="font-bold">{coin ? `$${value}, 000 mxn` : `${value} meses`}</span></h1>
            <Slider
                max={limit}
                className={classes}
                onChange={onSlide}
                value={value}
                defaultValue={value}
                aria-label="Default"
                valueLabelDisplay="off"
                style={{
                    color: colors.resalte1,
                    height: 8,
                }}
                sx={{
                    color: colors.resalte1,
                    '& .MuiSlider-rail': {
                        backgroundColor: colors.slide,
                    },
                }}
            />
        </div>
    )
}

export default AppSlider
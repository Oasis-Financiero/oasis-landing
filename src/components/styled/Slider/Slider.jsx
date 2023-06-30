import React, { useState } from "react";
import { Slider } from "@mui/material";
import styles from "./styles.js";
import colors from "../../../constants/colors";
import * as style from '../../calculator.module.css'

const AppSlider = ({type, coin, hidden}) => {

    const [value, setValue] = useState(0)

    const onSlide = (e, newValue) => {
        e.preventDefault
        setValue(newValue)
    }

    console.log(value)
    return (
        <>
            <h1 id={style.slideTitle}>{`${type}: `} <span className="font-bold">{coin ? `$${value}, 000 mxn` : `${value} meses`}</span></h1>
            <Slider
                className={hidden ? 'hidden md:block' : 'block'}
                onChange={onSlide}
                value={value}
                size="medium"
                defaultValue={value}
                aria-label="Default"
                valueLabelDisplay="auto"
                style={styles.slide}
                sx={{
                    color: colors.resalte1,
                    '& .MuiSlider-rail': {
                        backgroundColor: colors.slide,
                    },
                }}
            />
        </>
    )
}

export default AppSlider
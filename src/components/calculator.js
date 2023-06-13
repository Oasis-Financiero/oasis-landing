import React from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import Sliders from "./styled/Slider/Slider";


const Calculator = () => {
    return (

        <Box id={style.box}>
            <h1 id={style.title}>Calculadora de Préstamo Personal</h1>
            <div className="grid grid-cols-2 place-items-center gap-0">
                <Sliders />
                <Sliders />
            </div>
        </Box>

    )
}

export default Calculator
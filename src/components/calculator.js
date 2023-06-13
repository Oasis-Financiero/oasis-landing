import React from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import Sliders from "./styled/Slider/Slider";


const Calculator = () => {
    return (

        <Box className="border-2 flex flex-col border-[#A86EFF] rounded-[28px] md:w-[506px] h-[418px]">
            <h1 id={style.title}>Calculadora de Préstamo Personal</h1>
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center md:gap-0 md:pt-8">
                <h3>Préstamo: <b>$40,000 mxn</b></h3>
                <h3>Ingresos: <b>$20,000 mxn</b></h3>
                <Sliders />
                <Sliders />
            </div>
        </Box>

    )
}

export default Calculator
import React from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import Sliders from "./styled/Slider/Slider";


const Calculator = () => {
    return (

        <Box className="shadow-neutral-700 shadow-lg border-2 flex flex-col h-[526px] border-[#A86EFF] rounded-[28px] md:w-[506px] md:h-[418px]">
            <h1 id={style.title}>Calculadora de Préstamo Personal</h1>

            <div className="flex flex-col justify-center items-center p-5 md:grid md:grid-cols-2 md:place-items-center md:gap-5 md:pt-8">

                <div className="flex flex-col">
                <h1 id={style.slideTitle}>Préstamo: <b>$40,000 mxn</b></h1>
                <Sliders/>
                </div>

                <div className="flex flex-col">
                <h1 id={style.slideTitle}>Ingresos: <b>$20,000 mxn</b></h1>
                <Sliders/>
                </div>

                <div className="flex flex-col">
                <h1 id={style.slideTitle}>Préstamo: <b>$40,000 mxn</b></h1>
                <Sliders/>
                </div>
            </div><b></b>
        </Box>

    )
}

export default Calculator
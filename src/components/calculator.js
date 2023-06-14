import React from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import Sliders from "./styled/Slider/Slider";
import tailwind from "./calculator.tailwind";



const Calculator = () => {

    return (

        <Box className={tailwind.box}>
            <h1 id={style.title}>Calculadora de Préstamo Personal</h1>

            <div className={tailwind.container}>

                <div className={tailwind.titleContainer}>
                    <h1 id={style.slideTitle}>Préstamo: <b>$40,000 mxn</b></h1>
                    <Sliders />
                </div>

                <div className={tailwind.titleContainer}>
                    <h1 id={style.slideTitle}>Ingresos: <b>$20,000 mxn</b></h1>
                    <Sliders />
                </div>

                <div className={tailwind.titleContainer}>
                    <h1 id={style.slideTitle}>Préstamo: <b>$40,000 mxn</b></h1>
                    <Sliders />
                </div>
            </div>
        </Box>

    )
}

export default Calculator
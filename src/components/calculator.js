import React from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import tailwind from "./calculator.tailwind";
import AppSlider from "./styled/Slider/Slider";
import AppSelect from "./styled/Dropdown/Dropdown";
import AppTextBox from "./styled/TextBox/TextBox";
import AppButton from "./styled/ConfirmButton/AppButton";



const Calculator = ({loanAmount, setLoanAmount, loanTerm, setLoanTerm, incomeAmount, setIncomeAmount, setHiddeTable}) => {

    const pagos = ["", "10,000 mx", "20,000 mxn", "40,000 mxn", "15,000 mxn"]

    const ciudades = ["", "CDMX", "Chihuahua", "Durango", "Monterrey"]



    // console.log(loanAmount, incomeAmount, loanTerm)

    return (

        <Box className={tailwind.box}>
            <h1 id={style.title}>Calculadora de Préstamo Personal</h1>

            <div className={tailwind.container}>

                <div className={tailwind.titleContainer}>
                    <AppSlider
                        type="Préstamo"
                        coin={true}
                        classes='w-[207px]'
                        value={loanAmount}
                        onValueChange={setLoanAmount}
                    />
                </div>

                <div className={tailwind.titleContainer}>
                    <AppSlider
                        type="Ingresos"
                        coin={true}
                        classes='w-[207px]'
                        value={incomeAmount}
                        onValueChange={setIncomeAmount}
                    />
                </div>

                <div className={`${tailwind.titleContainer} ${tailwind.dropdown}`}>
                    <AppSelect
                        width="w-[214px]"
                        title="Pago Mensual"
                        tagLabel="Pago Mensual"
                        items={pagos}
                    />
                </div>

                <div className={tailwind.titleContainer}>
                    <AppSlider
                        type="Plazo"
                        classes='w-[214px]'
                        limit={18}
                        value={loanTerm}
                        onValueChange={setLoanTerm}
                    />
                </div>

            </div>

            <div className="flex flex-row justify-center md:flex md:flex-row md:justify-center">

                <div>
                    <AppTextBox
                        label='Correo electronico'
                    />
                </div>

                <div>
                    <AppSelect
                        width="w-[166px] md:w-[214px]"
                        title="Ciudad"
                        tagLabel="Ciudad"
                        items={ciudades}
                    />
                </div>
            </div>

            <div className={'flex justify-center items-center p-8 md:p-6 cursor-pointer'} onClick={() => setHiddeTable(false)}>
                <a href="#secondaryCalculator"><AppButton
                    tag="Calcular préstamo"
                /></a>
            </div>

        </Box>

    )
}

export default Calculator
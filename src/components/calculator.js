import React from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import tailwind from "./calculator.tailwind";
import AppSlider from "./styled/Slider/Slider";
import AppSelect from "./styled/Dropdown/Dropdown";
import AppTextBox from "./styled/TextBox/TextBox";
import AppButton from "./styled/ConfirmButton/AppButton";
import { Link } from "gatsby";



const Calculator = ({ loanAmount, setLoanAmount, loanTerm, setLoanTerm, incomeAmount, setIncomeAmount, setHiddeTable }) => {

    const pagos = ["", "Pagos Mensuales", "Pagos Quincenales"]

    const estados = ["", 'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila de Zaragoza',
        'Colima',
        'Ciudad de México',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico',
        'Michoacan de Ocampo',
        'Morelos',
        'Nayarit',
        'Nuevo Leon',
        'Oaxaca',
        'Puebla',
        'Queretaro de Arteaga',
        'Quintana Roo',
        'San Luis Potosi',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz-Llave',
        'Yucatan',
        'Zacatecas']



    // console.log(loanAmount, incomeAmount, loanTerm)

    return (

        <Box className={tailwind.box}>
            <h1 id={style.title}>Calculadora de Préstamo Personal</h1>

            <div className={tailwind.container}>

                <div className={tailwind.titleContainer}>
                    <AppSlider
                        type="Préstamo"
                        coin={true}
                        value={loanAmount}
                        onValueChange={setLoanAmount}
                    />
                </div>

                <div className={tailwind.titleContainer}>
                    <AppSlider
                        type="Ingresos"
                        coin={true}
                        value={incomeAmount}
                        onValueChange={setIncomeAmount}
                    />
                </div>

                <div className={`${tailwind.dropdown}`}>
                    <AppSelect
                        width="w-[214px]"
                        title="Tipo de Pago"
                        tagLabel="Tipo de Pago"
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
                        title="Estado"
                        tagLabel="Estado"
                        items={estados}
                    />
                </div>
            </div>

            <div className={'flex justify-center items-center p-8 md:p-6 cursor-pointer'} onClick={() => setHiddeTable(false)}>
                <Link href="#secondaryCalculator"><AppButton
                    tag="Calcular préstamo"
                /></Link>
            </div>

        </Box>

    )
}

export default Calculator
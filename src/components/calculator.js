import React, { useState } from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import tailwind from "./calculator.tailwind";
import AppSlider from "./styled/Slider/Slider";
import AppSelect from "./styled/Dropdown/Dropdown";
import AppTextBox from "./styled/TextBox/TextBox";
import AppButton from "./styled/ConfirmButton/AppButton";
import { Link } from "gatsby";



const Calculator = ({ loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    incomeAmount,
    setIncomeAmount,
    setHiddeTable,
    selectedState,
    setSelectedState,
    selectedTypePay,
    setSelectedTypePay }) => {

    const [email, setEmail] = useState("")
    const [redirectToLink, setRedirectToLink] = useState(false);

    const pagos = ["Pagos Mensuales", "Pagos Quincenales"]

    const estados = ['Aguascalientes',
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



    console.log(email)

    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const onSubmitButton = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return alert("Escribe un email valido")
        } else {
            setRedirectToLink(false)
            setHiddeTable(false)
        }
    }

    if (redirectToLink) {
        return <Link to="#secondaryCalculator" />;

    }

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
                        limit={100000}
                        step={1000}
                    />
                </div>

                <div className={tailwind.titleContainer}>
                    <AppSlider
                        type="Ingresos"
                        coin={true}
                        value={incomeAmount}
                        onValueChange={setIncomeAmount}
                        limit={100000}
                        step={1000}
                    />
                </div>

                <div className={`${tailwind.dropdown}`}>
                    <AppSelect
                        width="w-[214px]"
                        title="Tipo de Pago"
                        tagLabel="Tipo de Pago"
                        items={pagos}
                        selected={selectedTypePay}
                        setSelected={setSelectedTypePay}
                    />
                </div>

                <div className={tailwind.titleContainer}>
                    <AppSlider
                        type="Plazo"
                        classes='w-[214px]'
                        limit={18}
                        value={loanTerm}
                        onValueChange={setLoanTerm}
                        step={1}
                        min={1}
                    />
                </div>

            </div>

            <div className="flex flex-row justify-center md:flex md:flex-row md:justify-center">

                <div>
                    <AppTextBox
                        label='Correo electronico'
                        onChangeValue={onEmailChange}
                    />
                </div>

                <div>
                    <AppSelect
                        width="w-[166px] md:w-[214px]"
                        title="Estado"
                        tagLabel="Estado"
                        items={estados}
                        selected={selectedState}
                        setSelected={setSelectedState}
                    />
                </div>
            </div>

            <div className={'flex justify-center items-center p-8 md:p-6'} >
                <Link to="#secondaryCalculator"><AppButton
                    tag="Calcular préstamo"
                    onClick={onSubmitButton}
                /></Link>
            </div>

        </Box>

    )
}

export default Calculator
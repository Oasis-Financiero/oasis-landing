import React, { useRef, useState } from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import tailwind from "./calculator.tailwind";
import AppSlider from "./styled/Slider/Slider";
import AppSelect from "./styled/Dropdown/Dropdown";
import AppTextBox from "./styled/TextBox/TextBox";
import AppButton from "./styled/ConfirmButton/AppButton";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { db } from "../../gatsby-browser";
import { estados, pagos } from "./calculatorHelpers";


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
    setSelectedTypePay,
    secondaryCalculatorRef }) => {

    const [email, setEmail] = useState("")
    const [handleError, setHandleError] = useState(null)
    const [handleAnimateError, setHandleAnimateError] = useState(false)

    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailRegex.test(email)){
            setHandleError(true)
        } else {
            setHandleError(false)
            setHandleAnimateError(false)
        }
    }


    const onSubmitButton = async (e) => {
        e.preventDefault()
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) {
            setHandleAnimateError(true)
        } else {
            if (secondaryCalculatorRef.current) {
                secondaryCalculatorRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                })
            }
            setHiddeTable(false)
            await addDoc(collection(db, "calculator users"), { 
                loanAmount: loanAmount,
                incomeAmount: incomeAmount,
                typePay: selectedTypePay,
                email: email,
                state: selectedState,
                timestamp: serverTimestamp()
            })
            setEmail("")
            setSelectedState("")
            // setSelectedTypePay("")
        }
    }


    console.log(selectedTypePay);

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

            <div className="flex flex-row justify-center items-center gap-2 md:flex md:flex-row md:justify-center">

                <div className={`relative left-1.5 md:left-0 ${handleAnimateError ? "animate-wiggle animate-once" : null}`}>
                    <AppTextBox
                        label='Correo electronico'
                        onChangeValue={onEmailChange}
                        value={email}
                        error={handleError}
                        helperText="Email Invalido"
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

            <div className={'flex justify-center items-center p-8 md:p-6'}>
                <AppButton
                    tag="Calcular préstamo"
                    onClick={onSubmitButton}
                />
            </div>

        </Box>

    )
}

export default Calculator
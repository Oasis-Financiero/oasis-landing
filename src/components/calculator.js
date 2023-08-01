import React, { useRef, useState } from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import tailwind from "./calculator.tailwind";
import AppSlider from "./styled/Slider/Slider";
import AppSelect from "./styled/Dropdown/Dropdown";
import AppTextBox from "./styled/TextBox/TextBox";
import AppButton from "./styled/ConfirmButton/AppButton";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { db } from "../../firebase";
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

    return (
        <Box className={tailwind.box}>
            <div id={style.titleContainer}>
                <h1 id={style.title}>Calculadora de Préstamo Personal</h1>
            </div>

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
                        width="214px"
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

            <div className="flex w-full px-[20px] mt-[10px] gap-2">

                <div className={`flex flex-1 justify-center ${handleAnimateError ? "animate-wiggle animate-once" : null}`}>
                    <AppTextBox
                        label='Correo electronico'
                        width="214px"
                        onChangeValue={setEmail}
                        value={email}
                        error={handleError}
                        helperText="Email Invalido"
                    />
                </div>

                <div className={`flex flex-1 justify-center`}>
                    <AppSelect
                        width="214px"
                        title="Estado"
                        tagLabel="Estado"
                        items={estados}
                        selected={selectedState}
                        setSelected={setSelectedState}
                    />
                </div>
            </div>

            <div className={'flex flex-1 justify-center items-center p-8 md:p-6'}>
                <AppButton
                    tag="Calcular préstamo"
                    onClick={onSubmitButton}
                />
            </div>

        </Box>

    )
}

export default Calculator
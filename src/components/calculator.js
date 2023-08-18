import React, { useState, useRef, useEffect } from "react";
import * as style from './calculator.module.css'
import Box from '@mui/material/Box';
import tailwind from "./calculator.tailwind";
import AppSlider from "./styled/Slider/Slider";
import AppSelect from "./styled/Dropdown/Dropdown";
import AppTextBox from "./styled/TextBox/TextBox";
import AppButton from "./styled/ConfirmButton/AppButton";
import { collection, addDoc, serverTimestamp, getFirestore } from "@firebase/firestore";
import { estados, pagos } from "./calculatorHelpers";
import useFirebase from "../hooks/useFirebase";
import Modal from "./modal";
const base64URL = require('js-base64').Base64

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
  secondaryCalculatorRef,
  setUniqueID,
  modalData,
  setModalData,
  isPrivacyOk,
  setIsPrivacyOk
}) => {
  const firebaseApp = useFirebase();
  const firestore = useRef(null);
  const [email, setEmail] = useState("")
  const [handleError, setHandleError] = useState(null)
 

  useEffect(() => {
    if (!firebaseApp) return;
    firestore.current = getFirestore(firebaseApp);
  }, [firebaseApp]);

  const onSubmitButton = async (e) => {
    const db = firestore.current;
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email) || !isPrivacyOk) {
      setHandleError(true)
    } else {
      if (secondaryCalculatorRef.current) {
        secondaryCalculatorRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        })
      }
      //Encode uniqueID
      const timestamp = Date.now()
      const combinedData = `OF-${timestamp}`
      const base64CombinedData = base64URL.encode(combinedData)
      setUniqueID(base64CombinedData)

      setHiddeTable(false)
      // await addDoc(collection(db, "calculator-users"), {
      //   id: base64CombinedData,
      //   loanAmount: loanAmount,
      //   incomeAmount: incomeAmount,
      //   typePay: selectedTypePay,
      //   email: email,
      //   state: selectedState,
      //   timestamp: serverTimestamp()
      // })
      setEmail("")
      setSelectedState("")
      // setSelectedTypePay("")
      setHandleError(false)
    }
  }

  return (
    <>
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

          <div className={`flex flex-1 justify-center`}>
            <AppTextBox
              label='Correo electrónico'
              width="214px"
              onChangeValue={setEmail}
              value={email}
              error={handleError}
              errorLabel="Correo invalido"
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

        <div className="flex justify-center items-center pt-3">
          <input type="checkbox" id={style.privacyCheck} value={isPrivacyOk} onChange={() => setIsPrivacyOk(!isPrivacyOk)} />
          <span id={style.acceptText} style={{fontFamily: 'Inter'}} className="text-[12px]">
            Acepto las <span id={style.openModal} onClick={() => setModalData({ isOpen: true, type: 'privacyPolicy' })}> políticas de privacidad </span> de Oasis
          </span>
        </div>

        <div className={'flex flex-1 justify-center items-center p-8 md:p-6'}>
          <AppButton
            tag="Calcular préstamo"
            onClick={onSubmitButton}
          />
        </div>

      </Box>


    </>


  )
}

export default Calculator
import React, { useState } from "react";
import Layout from "../components/layout";
import Calculator from "../components/calculator";
import wallet from '../images/herramientas/img-prestamos-personales-main.webp'
import * as style from './compara.module.css'
import woman from '../images/landing/img-girl.webp'
import AppFaq from "../components/styled/FAQs/AppFaq";
import AppSecondaryButton from "../components/styled/SecondaryButton/SecondaryButton";
import AppCardSection from "../components/styled/CardSection/CardSection";
import colors from "../constants/colors";
import iconSeguro from '../images/herramientas/ico-seguro-auto.svg'
import iconPrestamo from '../images/herramientas/ico-prestamos-personales.svg'
import AppLinedCard from "../components/styled/LinedCard/LinedCard";
import RelevantPoints from "../components/styled/RelevantPoints/RelevantPoints";
import CardsInsuranceTypes from "../components/styled/CardTypeSecure/CardsInsuranceTypes";
import AppSteps from "../components/styled/Steps/Steps";
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import AppSecondaryCalculator from "../components/styled/SecondaryCalculator/SecondaryCalculator";
import RedirectionCard from "../components/styled/RedirectionCard/RedirectionCard";
import InformativeCard from "../components/styled/InformativeCard/InformativeCard";
import AppStepper from "../components/styled/Stepper/Stepper";
import InformativeText from "../components/styled/InformativeText/InformativeText";
import ContactForm from "../components/styled/ContactForm/ContactForm";



const Compara = () => {

    const [loanAmount, setLoanAmount] = useState(1000)
    const [incomeAmount, setIncomeAmount] = useState(1000)
    const [loanTerm, setLoanTerm] = useState(12);
    const [hiddeTable, setHiddeTable] = useState(true)
    const [selectedState, setSelectedState] = useState("")
    const [selectedTypePay, setSelectedTypePay] = useState("")


    return (
        <Layout page='compara'>
            <div className="flex flex-col gap-10 md:gap-0 animate-fade-down animate-once animate-ease-in delay-0">

                <div className='flex flex-col justify-center md:flex md:justify-center md:items-center'>
                    <div className="md:flex md:flex-col md:justify-center md:items-start md:p-[100px]">
                        <h1 id={style.title}>Préstamos personales para <span id={style.word}>surfear</span> las emergencias</h1>
                        <div className="flex flex-col justify-center items-center p-2 md:flex md:flex-row md:gap-4">
                            <Calculator
                                loanAmount={loanAmount}
                                setLoanAmount={setLoanAmount}
                                loanTerm={loanTerm}
                                setLoanTerm={setLoanTerm}
                                incomeAmount={incomeAmount}
                                setIncomeAmount={setIncomeAmount}
                                setHiddeTable={setHiddeTable}
                                selectedState={selectedState}
                                setSelectedState={setSelectedState}
                                selectedTypePay={selectedTypePay}
                                setSelectedTypePay={setSelectedTypePay}
                            />
                            <div className="max-md:hidden md:w-[503px] md:h-[497px] md:relative md:bottom-3">
                                <img
                                    src={wallet}
                                    alt="wallet"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div id={style.steps}>
                    <AppSteps />
                </div>

                {hiddeTable ? null : <div id="secondaryCalculator" className="flex justify-center pt-16 animate-fade-down delay-75">
                    <AppSecondaryCalculator
                        loanAmount={loanAmount}
                        setLoanAmount={setLoanAmount}
                        loanTerm={loanTerm}
                        setLoanTerm={setLoanTerm}
                        incomeAmount={incomeAmount}
                        setIncomeAmount={setIncomeAmount}
                        selectedTypePay={selectedTypePay}
                    />
                </div>}

                <div className="flex justify-center p-4 pt-[250px] md:pt-[150px]">
                    <div className="flex flex-row w-[1080px] h-[427px] rounded-[25px] relative" style={{ backgroundColor: colors.fdoMdo }}>
                        <div className="flex flex-col gap-4 md:w-[640px] p-8 md:pt-16">
                            <h1 id={style.discover} className="text-white">Descubre y compara los mejores productos financieros en México</h1>
                            <span id={style.discoverSub} className="text-white">Ahorra tiempo, dinero y toma decisiones informadas. ¡Encuentra el producto perfecto para tus necesidades hoy mismo!</span>
                            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                                <span id={style.discoverLink} className="text-white flex flex-row items-center gap-2"><IoIosArrowDroprightCircle />Prestamos personales</span>
                                <span id={style.discoverLink} className="text-white flex flex-row items-center gap-2"><IoIosArrowDroprightCircle />Seguros de auto</span>
                            </div>
                        </div>

                        <div>
                            <img src={woman} alt="woman" className="w-[202px] flex absolute bottom-[427px] right-[55px] md:w-[444px] md:bottom-0 md:left-[620px] transition animate-fade-down " />
                        </div>
                    </div>
                </div>


                <div id={style.faqc} className="md:p-10">
                    <h1 className="flex justify-center" id={style.faq}>FAQs</h1>
                    <AppFaq />
                </div>


                <div className="w-full flex flex-col justify-center items-center md:p-14">

                    <h1 className="text-center" id={style.titles}>Compara nuestros <br></br>productos <span id={style.word}>financieros</span></h1>

                    <div className="flex justify-center flex-col items-center gap-10 md:flex md:flex-row md:justify-center p-8 md:gap-2 w-full">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <AppCardSection
                                color={colors.card1}
                                icon={iconPrestamo}
                                title="Prestamos Personales"
                                subtitle="Sin comision por apertura"
                            />
                            <AppSecondaryButton
                                text="Comparar"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4">
                            <AppCardSection
                                color={colors.card2}
                                icon={iconSeguro}
                                title="Seguros de auto"
                                subtitle="Cobertura amplia y limitada"
                            />
                            <AppSecondaryButton
                                text="Comparar"
                            />
                        </div>
                    </div>

                </div>


                <div style={{backgroundColor: colors.fdoGris}} className="flex justify-center p-10">
                    <ContactForm/>
                </div>

            </div>
        </Layout>
    )
}

export default Compara
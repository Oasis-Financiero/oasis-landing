import React from "react";
import Layout from "../components/layout";
import Calculator from "../components/calculator";
import wallet from '../images/herramientas/img-prestamos-personales-main.webp'
import * as style from './compara.module.css'
import AppFaq from "../components/styled/FAQs/AppFaq";
import AppSecondaryButton from "../components/styled/SecondaryButton/SecondaryButton";
import AppCardSection from "../components/styled/CardSection/CardSection";
import colors from "../constants/colors";
import iconSeguro from '../images/herramientas/ico-seguro-auto.svg'
import iconPrestamo from '../images/herramientas/ico-prestamos-personales.svg'
import AppLinedCard from "../components/styled/LinedCard/LinedCard";
import RelevantPoints from "../components/styled/RelevantPoints/RelevantPoints";
import CardsInsuranceTypes from "../components/styled/CardTypeSecure/CardTypeSecure";



const Compara = () => {

    return (
        <Layout page='compara'>
            <div className="flex flex-col gap-10 md:gap-0">

                <div className='flex flex-col justify-center md:flex md:justify-center md:items-center'>
                    <div className="md:flex md:flex-col md:justify-center md:items-start md:p-[100px]">
                        <h1 id={style.title}>Préstamos personales para <span id={style.word}>surfear</span> las emergencias</h1>
                        <div className="flex flex-col justify-center items-center p-2 md:flex md:flex-row md:gap-4">
                            <Calculator />
                            <div className="max-md:hidden md:w-[503px] md:h-[497px] md:relative md:bottom-3">
                                <img
                                    src={wallet}
                                    alt="wallet"
                                />
                            </div>
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


                <div className={`bg-[${colors.fdoGris}] flex justify-center`}>
                    <CardsInsuranceTypes/>
                </div>

            </div>
        </Layout>
    )
}

export default Compara
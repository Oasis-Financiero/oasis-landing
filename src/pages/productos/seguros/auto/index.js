import React from "react";
import { graphql } from 'gatsby';
import Layout from "../../../../components/layout";
import CardsInsuranceTypes from "../../../../components/styled/CardTypeSecure/CardsInsuranceTypes";
import InformativeText from "../../../../components/styled/InformativeText/InformativeText";
import RelevantPoints from "../../../../components/styled/RelevantPoints/RelevantPoints";
import colors from "../../../../constants/colors";
import AppButton from "../../../../components/styled/ConfirmButton/AppButton";
import AppFaqAutos from "../../../../components/styled/FAQs/AppFaqAutos";
import AppCardSection from "../../../../components/styled/CardSection/CardSection";
import iconSeguro from '../../../../images/herramientas/ico-prestamos-personales.svg'
import AppSecondaryButton from "../../../../components/styled/SecondaryButton/SecondaryButton";
import { Link } from "gatsby";
import ContactForm from "../../../../components/styled/ContactForm/ContactForm";
import auto from '../../../../images/seguros-auto/auto.webp'

const SeguroAuto = ({ data }) => {
    return (
        <Layout page='seguro'>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center p-10">
                <div className=" flex flex-col justify-center gap-10 mx-56 md:relative left-10">
                    <h1 className="md:w-[533px] text-[28px] md:text-[40px]"
                        style={{ fontFamily: 'Poppins', color: colors.brand1 }}>Cotiza tu seguro de auto y <span style={{ color: colors.resalte1 }}>elige el que te convenga</span> en un par de minutos</h1>
                    <h3 className="md:w-[446px] text-[16px]" 
                    style={{ fontFamily: 'Poppins', color: colors.brand1 }}>
                        Compara 20 aseguradoras en segundos, contrata en línea <span className="font-bold">sin complicaciones</span> y paga a 3, 6 y 12 meses sin intereses.</h3>
                    <AppButton
                        tag="Cotizar"
                    />
                </div>

                <div className="md:relative right-40">
                    <img src={auto} alt="auto" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center p-2 animate-fade-down animate-once" style={{ backgroundColor: colors.fdoGris, fontFamily: 'Poppins' }}>
                <h1 className="text-[30px] md:text-[40px] text-center p-4 md:p-16">¿Necesitas un <span style={{ color: colors.resalte1 }}>seguro especial?</span></h1>
                <CardsInsuranceTypes />
            </div>

            <div className="p-3 pt-16 md:p-0 md:pt-[100px]">
                <InformativeText />
            </div>

            <div className="flex flex-col justify-center items-center md:pt-16 md:pb-16">
                <RelevantPoints />
                <AppButton
                    tag={"Cotizar mi seguro"}
                />
            </div>

            <div className="pt-16 md:p-16" style={{ backgroundColor: colors.fdoGris }}>
                <AppFaqAutos />
            </div>

            <div className="flex flex-col justify-center items-center p-10 gap-2">
                <h1 className="md:p-10 md:w-[40%] text-center pb-4 text-[26px] md:text-[40px]" style={{ fontFamily: 'Poppins' }}>Compara nuestros productos financieros</h1>
                <AppCardSection
                    title="Prestamos Personales"
                    subtitle="Sin comision por apertura"
                    icon={iconSeguro}
                    color={colors.card1}
                />
                <Link to="/compara"> <AppSecondaryButton
                    text="Comparar"
                /></Link>
            </div>

            <div style={{ backgroundColor: colors.fdoGris }} className="flex justify-center p-10">
                <ContactForm />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($id: String) {
      insuranceProduct(id: { eq: $id }) {
        id
        name
      }
  }
`

export default SeguroAuto;
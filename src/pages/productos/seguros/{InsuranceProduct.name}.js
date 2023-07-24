import React, { useState } from "react";
import { graphql } from "gatsby"
import Layout from "../../../components/layout";
import * as style from './insuranceProduct.module.css'
import AppFaq from "../../../components/styled/FAQs/AppFaq";
import AppSecondaryButton from "../../../components/styled/SecondaryButton/SecondaryButton";
import AppCardSection from "../../../components/styled/CardSection/CardSection";
import colors from "../../../constants/colors";
import iconSeguro from '../../../images/herramientas/ico-seguro-auto.svg'
import iconPrestamo from '../../../images/herramientas/ico-prestamos-personales.svg'
import AppSteps from "../../../components/styled/Steps/Steps";

const InsuranceProduct = ({ data }) => {
  const { insuranceProduct } = data;
  const { id, name } = insuranceProduct;

  return (
    <Layout page='product'>
      <div className="flex flex-col gap-10 md:gap-0 animate-fade-down animate-once animate-ease-in delay-0">

        {name}

        <div id={style.steps}>
          <AppSteps />
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

export default InsuranceProduct;
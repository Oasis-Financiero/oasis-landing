import React, { useState } from "react";
import { graphql } from "gatsby"
import Layout from "../../../components/layout";
import * as style from './lendingProduct.module.css'
import AppFaqPrestamos from "../../../components/styled/FAQs/AppFaqPrestamos";
import AppSecondaryButton from "../../../components/styled/SecondaryButton/SecondaryButton";
import AppCardSection from "../../../components/styled/CardSection/CardSection";
import colors from "../../../constants/colors";
import iconSeguro from '../../../images/herramientas/ico-seguro-auto.svg'
import iconPrestamo from '../../../images/herramientas/ico-prestamos-personales.svg'
import AppSteps from "../../../components/styled/Steps/Steps";
import InformativeCard from "../../../components/styled/InformativeCard/InformativeCard";
import kreditiweb from '../../../images/products/logo_kreditiweb.png'
import mrfinan from '../../../images/products/logo_mrfinan.png'
import fidea from '../../../images/products/logo--dark.svg'
import escampa from '../../../images/products/escampa.png'
import AppEscampa from "../../../components/styled/FAQs/FAQsProducts/FAQsEscampa";


const LendingProduct = ({ data }) => {
  let montoParam, ingresosParam, plazoParam, type;
  if (typeof window !== "undefined") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    montoParam = urlParams.get('monto');
    ingresosParam = urlParams.get('ingresos');
    plazoParam = urlParams.get('plazos');
    type = urlParams.get('type')
  }
  const { lendingProduct } = data;
  const { id, name } = lendingProduct;

  const getImage = (product) => {
    let imageSrc;
    switch (product) {
      case "Kreditiweb":
        imageSrc = kreditiweb
        break;
      case "Fidea":
        imageSrc = fidea
        break;
      case "Mr Finan":
        imageSrc = mrfinan
        break;
      case "Escampa":
        imageSrc = escampa
        break;
      default:
        imageSrc = "";
        break
    }
    return imageSrc;
  }

  let questions;
  switch (type) {
    case "kreditiweb":
      questions = <AppFaqPrestamos />
      break;
    case "fidea":
      questions = <AppFaqPrestamos />
      break;
    case "mr Finan":
      questions = <AppFaqPrestamos />
      break;
    case "escampa":
      questions = <AppEscampa />
      break;
    default:
      questions = <AppFaqPrestamos />
      break
  }

  return (
    <Layout page='product'>
      <div className="flex flex-col gap-16 md:gap-16 animate-fade-down animate-once animate-ease-in delay-0">

        <div className="flex flex-col items-center justify-center gap-8">
          <img src={getImage(name)} alt='logo' className="p-10 pb-0" />
          <div className="flex justify-center items-center w-full p-3">
            <InformativeCard montoParam={montoParam} ingresosParam={ingresosParam} plazoParam={plazoParam} type={type} />
          </div>
        </div>

        <div id={style.steps}>
          <AppSteps />
        </div>

        <div id={style.faqc} className="md:p-10">
          <h1 className="flex justify-center" id={style.faq}>FAQs</h1>
          {questions}
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
      lendingProduct(id: { eq: $id }) {
        id
        name
      }
  }
`

export default LendingProduct
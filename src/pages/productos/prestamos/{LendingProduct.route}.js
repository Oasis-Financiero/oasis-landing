import React, { useState } from "react";
import { Link, graphql } from "gatsby"
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
import fidea from '../../../images/products/banners/Fidea-logo.png'
import escampa from '../../../images/products/escampa.png'
import krediban1 from '../../../images/products/banners/20.png'
import fideaBanner2 from '../../../images/products/banners/fidea-b1.jpg'
import kreditiBanner from '../../../images/products/banners/19.png'
import finanBanner from '../../../images/products/banners/18.png'
import AppEscampa from "../../../components/styled/FAQs/FAQsProducts/FAQsEscampa";


const LendingProduct = ({ data }) => {
  let montoParam, ingresosParam, plazoParam, type, uniqueID;
  if (typeof window !== "undefined") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    montoParam = urlParams.get('monto');
    ingresosParam = urlParams.get('ingresos');
    plazoParam = urlParams.get('plazos');
    uniqueID = urlParams.get('subID')
    const queryStringPath = window.location.pathname
    type = queryStringPath.slice(21)
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

  let questions, banner, bannerCard;
  switch (type) {
    case "kreditiweb":
      questions = <AppFaqPrestamos />
      bannerCard = <Link to={`http://clean.tracksacai.com/aff_c?offer_id=2885&aff_id=2524&aff_sub=${uniqueID}&utm_source=oasisfinanciero_comparador&utm_medium=banner&utm_campaign=mrfinanagosto2023`}
        target="_blank"><img src={krediban1} alt="krediti" className="md:w-[950px] w-full" /></Link>
      banner = <Link to={`http://clean.tracksacai.com/aff_c?offer_id=2885&aff_id=2524&aff_sub=${uniqueID}&utm_source=oasisfinanciero_comparador&utm_medium=banner&utm_campaign=mrfinanagosto2023`}
        target="_blank"><img src={kreditiBanner} alt="krediti" className="md:w-[950px] w-full" /></Link>
      break;
    case "fidea":
      questions = <AppFaqPrestamos />
      banner = <Link to={`https://www.fidea.mx/?refName=2023041314ef&refSubId=${uniqueID}&refTransactionId=REPLACE_WITH_LEAD_CLICK_ID&utm_source=oasisfinanciero_comparador&utm_medium=button&utm_campaign=Fideaagosto2023`}
        target="_blank"><img src={fideaBanner2} alt="fidea" className="w-[550px]" /></Link>
      break;
    case "mrfinan":
      questions = <AppFaqPrestamos />
      banner = <Link to={`http://clean.tracksacai.com/aff_c?offer_id=3364&aff_id=2524&aff_sub=${uniqueID}&utm_source=oasisfinanciero_comparador&utm_medium=button&utm_campaign=mrfinanagosto2023`}
        target="_blank"><img src={finanBanner} alt="finan" className="w-[950px]" /></Link>
      bannerCard = <Link to={`http://clean.tracksacai.com/aff_c?offer_id=3364&aff_id=2524&aff_sub=${uniqueID}&utm_source=oasisfinanciero_comparador&utm_medium=button&utm_campaign=mrfinanagosto2023`}
        target="_blank"><img src={finanBanner} alt="finan" className="w-[950px]" /></Link>
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
      <div className="flex flex-col gap-16 md:gap-16 animate-fade-down animate-once animate-ease-in delay-0 w-full">

        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <img src={getImage(name)} alt='logo' className="p-10 pb-0" />
          <div className="flex justify-center items-center w-full p-3">
            <InformativeCard montoParam={montoParam} ingresosParam={ingresosParam} plazoParam={plazoParam} type={type} imageBanner={bannerCard} uniqueID={uniqueID} />
          </div>
        </div>

        <div id={style.steps}>
          <AppSteps />
        </div>

        <div className="flex flex-col justify-center items-center">
          {banner}
        </div>
        <div id={style.faqc} className="md:p-10 justify-center items-center">\
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
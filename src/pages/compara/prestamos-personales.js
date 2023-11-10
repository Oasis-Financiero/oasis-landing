import React, { useRef, useState } from "react";
import Layout from "../../components/layout";
import Calculator from "../../components/calculator";
import wallet from '../../images/herramientas/img-prestamos-personales-main.webp'
import * as style from './prestamos-personales.module.css'
import woman from '../../images/landing/img-girl.webp'
import AppFaqPrestamos from "../../components/styled/FAQs/AppFaqPrestamos";
import AppSecondaryButton from "../../components/styled/SecondaryButton/SecondaryButton";
import AppCardSection from "../../components/styled/CardSection/CardSection";
import colors from "../../constants/colors";
import iconSeguro from '../../images/herramientas/ico-seguro-auto.svg'
import AppSteps from "../../components/styled/Steps/Steps";
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import AppSecondaryCalculator from "../../components/styled/SecondaryCalculator/SecondaryCalculator";
import ContactForm from "../../components/styled/ContactForm/ContactForm";
import { Link } from "gatsby";
import Modal from "../../components/modal";
import SEO from "../../components/seo";

const PrestamosPersonales = () => {
  const [loanAmount, setLoanAmount] = useState(1000)
  const [incomeAmount, setIncomeAmount] = useState(1000)
  const [loanTerm, setLoanTerm] = useState(12);
  const [hiddeTable, setHiddeTable] = useState(true)
  const [selectedState, setSelectedState] = useState("Ciudad de México")
  const secondaryCalculatorRef = useRef(null);
  const [selectedTypePay, setSelectedTypePay] = useState("Pagos Mensuales")
  const [uniqueID, setUniqueID] = useState("")
  const [modalData, setModalData] = useState({
    isOpen: false,
    type: ''
  });
  const [isPrivacyOk, setIsPrivacyOk] = useState(false);

  return (
    <>
      <Layout page='compara'>
        <SEO
          title="Compara Préstamos personales | Tasas, comisiones y solicitud en línea."
          description="Compara y solicita préstamos personales en línea. Conoce las tasas de interés y montos disponibles. Sin comisión por apertura, encuentra los mejores créditos personales en México."
          keywords={['préstamo', 'préstamos', 'préstamos personales', 'prestamos', 'prestamos en línea', 'Comparar préstamos personales', 'Solicitar préstamos en línea',]}
        />

        <div className="flex flex-col gap-10 md:gap-0 animate-fade-down animate-once w-full">
          <div className='flex flex-col justify-center lg:flex lg:justify-center lg:items-center'>
            <div className="flex-col justify-center items-start md:p-[80px]">
              <h1 id={style.title}>Encuentra el <span style="color: #a86eff;">préstamo</span> perfecto para tus necesidades.</h1>
              <div className="flex flex-col justify-center items-center p-2 md:flex md:flex-row md:gap-4 w-full">
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
                  secondaryCalculatorRef={secondaryCalculatorRef}
                  setUniqueID={setUniqueID}
                  modalData={modalData}
                  setModalData={setModalData}
                  isPrivacyOk={isPrivacyOk}
                  setIsPrivacyOk={setIsPrivacyOk}
                />
                <div className="max-lg:hidden md:w-[503px] md:h-[497px] md:relative md:bottom-3 w-full">
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

          {hiddeTable ? <div id="secondaryCalculator" ref={secondaryCalculatorRef}
            className="flex justify-center pt-16 animate-fade-down delay-75"></div>
            :
            <div id="secondaryCalculator" ref={secondaryCalculatorRef} className="flex justify-center pt-16 animate-fade-down delay-75">
              <AppSecondaryCalculator
                loanAmount={loanAmount}
                setLoanAmount={setLoanAmount}
                loanTerm={loanTerm}
                setLoanTerm={setLoanTerm}
                incomeAmount={incomeAmount}
                setIncomeAmount={setIncomeAmount}
                selectedTypePay={selectedTypePay}
                uniqueID={uniqueID}
              />
            </div>}

          <div className="flex justify-center p-4 pt-[250px] md:pt-[150px]">
            <div className="flex flex-row w-full lg:w-[1080px] h-[427px] rounded-[25px] relative" style={{ backgroundColor: colors.fdoMdo }}>
              <div className="flex flex-col gap-4 lg:w-[640px] p-8 md:pt-16 w-[540px]">
                <h1 id={style.discover} className="text-white">Compara y solicita préstamos personales en línea.</h1>
                <span id={style.discoverSub} className="text-white">Ahorra tiempo, dinero y toma decisiones informadas. ¡Encuentra el préstamo perfecto para tus necesidades hoy mismo!</span>
                <div className="flex flex-col gap-4 lg:flex-row md:gap-10">
                  <span id={style.discoverLink} className="text-white flex flex-row items-center gap-2"><IoIosArrowDroprightCircle />Para Consolidar Deudas</span>
                  <span id={style.discoverLink} className="text-white flex flex-row items-center gap-2"><IoIosArrowDroprightCircle />Gastos Médicos Inesperados</span>
                  <span id={style.discoverLink} className="text-white flex flex-row items-center gap-2"><IoIosArrowDroprightCircle />Emergencias del Hogara</span>
                  <span id={style.discoverLink} className="text-white flex flex-row items-center gap-2"><IoIosArrowDroprightCircle />Educación Continua</span>
                </div>
              </div>

                {/* Nueva sección */}
      <div className="mt-8">
        <ol className="list-decimal list-inside">
          <li>Para Consolidar Deudas: "Consolida tus deudas de manera inteligente. Compara y solicita préstamos personales en línea para simplificar tus finanzas."</li>
          <li>Mejora tu Hogar: "Transforma tu hogar con un préstamo personal. Compara opciones en línea y realiza esas mejoras que siempre has deseado."</li>
          <li>Educación Continua: "Invierte en tu futuro educativo. Compara préstamos en línea y asegura el financiamiento para tu próxima etapa académica."</li>
          <li>Gastos Médicos Inesperados: "Ante gastos médicos imprevistos, un préstamo personal puede ser tu salvavidas. Compara opciones y toma el control de tu salud."</li>
          <li>Emergencias del Hogar: "Frente a reparaciones inesperadas en el hogar, un préstamo puede ser la solución. Encuentra la mejor opción en línea."</li>
          <li>Para Emprender: "Haz realidad tus sueños empresariales con un préstamo personal. Compara y elige la financiación adecuada para tu emprendimiento."</li>
          <li>Viaje Inolvidable: "Haz ese viaje soñado con un préstamo personal en línea. Compara y elige la opción que te acerque a nuevas experiencias."</li>
          <li>Adquisición de Tecnología: "Mantente actualizado con la última tecnología. Compara préstamos en línea para obtener los gadgets que necesitas."</li>
          <li>Celebraciones Especiales: "Haz de tus momentos especiales algo aún más grandioso. Encuentra el préstamo perfecto para celebraciones inolvidables."</li>
          <li>Mejora de Crédito: "Impulsa tu historial crediticio positivamente. Compara y solicita préstamos personales para mejorar tu situación financiera."</li>
        </ol>
      </div>
    </div>

              <div className="w-[202px] flex absolute bottom-[427px] right-[55px] md:w-[333px] md:bottom-0 sm:right-0 lg:left-[650px] transition animate-fade-down ">
                <img src={woman} alt="woman" />
              </div>
            </div>
          </div>

          <div id={style.faqc} className="md:p-10">
            <h1 className="flex justify-center" id={style.faq}>FAQs</h1>
            <AppFaqPrestamos />
          </div>

          <div className="w-full flex flex-col justify-center items-center md:p-14">
            <h1 className="text-center" id={style.titles}>Compara nuestros <br></br>productos <span id={style.word}>financieros</span></h1>
            <div className="flex justify-center flex-col items-center gap-10 md:flex md:flex-row md:justify-center p-8 md:gap-2 w-full">
              <div className="flex flex-col justify-center items-center gap-4">
                <AppCardSection
                  color={colors.card2}
                  icon={iconSeguro}
                  title="Seguros de auto"
                  subtitle="Cobertura amplia y limitada"
                />
                <Link to="/productos/seguros/auto"> <AppSecondaryButton
                  text="Comparar"
                /></Link>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: colors.fdoGris }} className="flex justify-center p-10">
            <ContactForm />
          </div>

        </div>
      </Layout >
      <Modal isOpen={modalData.isOpen} type={modalData.type} setModalData={setModalData} />
    </>
  )
}

export default PrestamosPersonales;

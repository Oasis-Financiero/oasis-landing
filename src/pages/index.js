import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import digitalNomad from "../images/landing/undraw_digital_nomad_9kgl.svg";
import research from "../images/landing/undraw_researching_22gp.svg";
import preferences from "../images/landing/undraw_preferences_uuo2.svg";
import choose from "../images/landing/undraw_Choose_bwbs.svg";

const fontColor = {
  color: 'rgb(55,96,155)'
}

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Educación financiera y comparador de servicios"
      />

      <section className="text-center" style={fontColor}>

        <h1 className="inline-block p-3 mb-4 text-2xl font-bold">
          Libera tu potencial financiero
        </h1>

        <img
          alt="Young, tech-savvy person"
          className="block md:w-1/2 w-2/3 mx-auto mb-8"
          src={digitalNomad}
        />

        <h1 className="inline-block p-3 mb-2 text-2xl font-bold">
          Próximamente
        </h1>

        <p className="leading-loose mb-6 px-10 md:p-0">
          Aprende, Compara y Elige entre los servicios financieros que ofrecen las Fintech y los Bancos tradicionales.
        </p>

        <h4 className="md:inline-block md:mr-10 mx-auto p-3 mb-4 text-1xl bg-white-400 shadow-md">
          Tarjeta de Crédito
        </h4>

        <h4 className="md:inline-block mx-auto p-3 mb-4 text-1xl bg-white-400 shadow-md">
          Préstamos
        </h4>

        <h4 className="md:inline-block md:ml-10 mx-auto p-3 mb-4 text-1xl bg-white-400 shadow-md">
          Cuenta de Ahorro
        </h4>
        
      </section>

      <section className="text-center mt-10 md:mt-20" style={fontColor}>
        
        <div className='flex md:flex-row-reverse flex-wrap'>
          
          <div className="md:inline-block md:w-1/2 mb-4 p-10">
            <h2 className="inline-block p-3 mb-2 text-2xl font-bold">
              Aprende
            </h2>

            <p className="leading-loose">
              Adquiere conocimientos sobre educación financiera y las tecnologías que están innovando en finanzas personales. <br></br>
              Ingresa a nuestro <nbsp></nbsp>
              <strong><Link to="/blog"> blog.</Link></strong>
            </p>

          </div>

          <img
            alt="Woman researching on her laptop"
            className="md:inline-block md:w-1/3 md:mt-8 w-2/3 mx-auto mb-8"
            src={research}
          />

        </div>

      </section>

      <section className="text-center md:mt-20 mt-10" style={fontColor}>
        
        <div>
          
          <div className="md:inline-block md:w-1/2 mb-4 p-10">
            <h2 className="inline-block p-3 mb-2 text-2xl font-bold">
              Compara
            </h2>

            <p className="leading-loose">
              Compara servicios financieros, comisiones y beneficios que ofrecen las Fintech y Bancos tradicionales en México.
            </p>

          </div>

          <img
            alt="Businesswoman studying options on a board"
            className="align-top md:inline-block md:w-1/3 md:mt-10 md:mx-12 lg:mx-15 w-2/3 mx-auto mb-8"
            src={preferences}
          />

        </div>
        
      </section>

      <section className="text-center md:mt-20 mt-10 mb-8" style={fontColor}>
        
        <div className='flex md:flex-row-reverse flex-wrap'>
          
          <div className="md:inline-block md:w-1/2 mb-4 p-10">
            <h2 className="inline-block p-3 mb-2 text-2xl font-bold">
              Elige
            </h2>

            <p className="leading-loose">
              Aplica tus conocimientos en finanzas personales y elige la opción que mejor se adapta a tu presupuesto.
            </p>

          </div>

          <img
            alt="Man selecting an option on a digital board"
            className="md:inline-block md:w-1/4 md:mt-10 md:mx-15 w-2/3 mx-auto mb-8"
            src={choose}
          />

        </div>
        
      </section>

    </Layout>
  );
}

export default IndexPage;

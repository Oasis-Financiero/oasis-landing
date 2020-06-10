import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import digitalNomad from "../images/landing/undraw_digital_nomad_9kgl.svg";
import research from "../images/landing/undraw_researching_22gp.svg";
import preferences from "../images/landing/undraw_preferences_uuo2.svg";
import choose from "../images/landing/undraw_Choose_bwbs.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">

        <h1 className="inline-block p-3 mb-4 text-2xl font-bold">
          Libera tu potencial financiero
        </h1>

        <img
          alt="Young, tech-savvy person"
          className="block md:w-1/2 w-2/3 mx-auto mb-8"
          src={digitalNomad}
        />

        <h1 className="inline-block p-3 text-2xl font-bold">
          Próximamente
        </h1>

        <p className="leading-loose mb-6">
          Aprende, Compara y Elige entre los servicios financieros que ofrecen las Fintech y los Bancos tradicionales.
{/*           <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compara
          </a> */}
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

      <section className="text-center mt-20">
        
        <div className='flex md:flex-row-reverse flex-wrap'>
          
          <div className="md:inline-block md:w-1/2 mb-8 p-10">
            <h2 className="inline-block p-3 mb-4 text-2xl font-bold">
              Aprende
            </h2>

            <p className="leading-loose">
              Adquiere conocimientos sobre educación financiera y las tecnologías que están innovando en finanzas personales. <br></br>
              Ingresa a nuestro blog.
            </p>

          </div>

          <img
            alt="Young, tech-savvy person"
            className="md:inline-block md:w-1/3 w-2/3 mx-auto mb-8"
            src={research}
          />

        </div>

      </section>

      <section className="text-center mt-20">
        
        <div>
          
          <div className="md:inline-block md:w-1/2 mb-8 p-10">
            <h2 className="inline-block p-3 mb-4 text-2xl font-bold">
              Compara
            </h2>

            <p className="leading-loose">
              Compara servicios financieros, comisiones y beneficios que ofrecen las Fintech y Bancos tradicionales en México.
            </p>

          </div>

          <img
            alt="Young, tech-savvy person"
            className="md:inline-block md:w-1/3 w-2/3 mx-auto mb-8"
            src={preferences}
          />

        </div>
        
      </section>

      <section className="text-center mt-20">
        
        <div className='flex md:flex-row-reverse flex-wrap'>
          
          <div className="md:inline-block md:w-1/2 mb-8 p-10">
            <h2 className="inline-block p-3 mb-4 text-2xl font-bold">
              Elige
            </h2>

            <p className="leading-loose">
              Aplica tus conocimientos en finanzas personales y elige la opción que mejor se adapta a tu presupuesto.
            </p>

          </div>

          <img
            alt="Young, tech-savvy person"
            className="md:inline-block md:w-1/3 w-2/3 mx-auto mb-8"
            src={choose}
          />

        </div>
        
      </section>

    </Layout>
  );
}

export default IndexPage;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import digitalNomad from "../images/landing/undraw_digital_nomad_9kgl.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Young, tech-savvy person"
          className="block w-1/2 mx-auto mb-8"
          src={digitalNomad}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Gatsby test site!
        </h2>

        <p className="leading-loose">
          Bienvenido a este landing page{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>

      <section className="text-center">
        <img
          alt="Young, tech-savvy person"
          className="block w-1/2 mx-auto mb-8"
          src={digitalNomad}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Test Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>

    </Layout>
  );
}

export default IndexPage;

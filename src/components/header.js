import { /* graphql, useStaticQuery, */ Link } from "gatsby";
import React, { useState } from "react";

import romboLogo from "../images/logos/logo-rombo.svg";
import oasisNombre from "../images/logos/oasis-name.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  /* const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */

  return (
    <header className="bg-white-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <img
              alt="Oasis logotipo"
              className="w-8 h-8 mr-2 fill-current"
              src={romboLogo}
            />
            <img
              alt="Oasis nombre"
              className="w-20 h-8 mr-2 fill-current"
              src={oasisNombre}
            />
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-black border border-black rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `INICIO`,
            },
            {
              route: `/contact`,
              title: `BLOG`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-black no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

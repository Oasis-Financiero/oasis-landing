import { /* graphql, useStaticQuery, */ Link } from "gatsby";
import React, { useState } from "react";

import headerStyles from "./header.module.css"
import oasisNombre from "../images/logos/logo-nombre.svg";

function Header() {

  const fontColor = {
    color: 'rgb(55,96,155)'
  }

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
    <header className={`${headerStyles.header} "bg-white-700"`}>
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-6">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <img
              alt="Oasis logotipo"
              className="h-8 ml-2 md:ml-0 fill-current"
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
          style={fontColor}
          className={`${
            isExpanded ? `block` : `hidden`
          } pt-4 md:pt-0 md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `INICIO`,
            },
            {
              route: "https://medium.com/@oasisfinancierotech",
              title: `BLOG`,
            },
          ].map((link) => (
            <Link
              className="font-bold block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
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

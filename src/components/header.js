import { /* graphql, useStaticQuery, */ Link } from "gatsby";
import React, { useState } from "react";

import headerStyles from "./header.module.css"
import oasisNombre from "../images/logos/logo-nombre.svg";
import facebook from "../images/social/facebook-dark.svg";
import twitter from "../images/social/twitter-dark.svg";
import linkedin from "../images/social/linkedin-dark.svg";

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

  const links = 
    [
      {
        route: `/`,
        title: `Inicio`,
      },
      {
        route: "/nosotros",
        title: `Sobre nosotros`,
      },
      {
        route: "/compara",
        title: `Nuestras herramientas`,
      },
      {
        route: "/blog",
        title: `Blog`,
      },
    ].map((link) => (
      <Link
        className={`${headerStyles.navLink} no-underline`}
        key={link.title}
        to={link.route}
      >
        {link.title}
      </Link>
    ))

  const social =
      <div id={headerStyles.iconsTray}>
        <a
          className="font-bold text-white no-underline"
          href="https://facebook.com/oasisfinanciero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Facebook icon"
            className={headerStyles.socialIcon}
            src={facebook}
          />
        </a>

        <a
          className="font-bold text-white no-underline"
          href="https://twitter.com/oasisfintech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Twitter icon"
            className={headerStyles.socialIcon}
            src={twitter}
          />
        </a>

        <a
          className="font-bold text-white no-underline"
          href="https://www.linkedin.com/company/oasisfinanciero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Linkedin icon"
            className={headerStyles.socialIcon}
            src={linkedin}
          />
        </a>
      </div>

  return (
    <header className={`${headerStyles.header}`}>
      <div className={headerStyles.headerContent}>
        <div id={headerStyles.logo}>
          <Link to="/">
            <img
              alt="Oasis logotipo"
              src={oasisNombre}
            />
          </Link>
        </div>

        <nav
          id={headerStyles.navBar}
        >
          {links}
        </nav>
        
        <div id={headerStyles.buttonWrapper}>
          <button
            id={headerStyles.navButton}
            className="flex items-center block px-3 py-2 text-black border border-black rounded"
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
        </div>
  
        <div id={headerStyles.navSocial}>
          {social}
        </div>

      </div>

      <div id={isExpanded ? headerStyles.navDropExpanded : headerStyles.navDropHidden}>
        {links}
        {social}
      </div>


    </header>
  );
}

export default Header;

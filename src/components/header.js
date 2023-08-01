import { /* graphql, useStaticQuery, */ Link } from "gatsby";
import React, { useState, useEffect } from "react";
import * as headerStyles from "./header.module.css"
import oasisNombre from "../images/logos/logo-oasis.svg";
import facebook from "../images/social/facebook-dark.svg";
import twitter from "../images/social/twitter-dark.svg";
import linkedin from "../images/social/linkedin-dark.svg";
import { Menu, MenuItem } from "@mui/material";
import Fade from '@mui/material/Fade';
import colors from "../constants/colors";

function Header() {
  const location = typeof window !== "undefined" ? window.location.pathname : '';
  const [isExpanded, toggleExpansion] = useState(false);
  const [subMenuExpanded, setSubMenuExpanded] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
    setSubMenuExpanded(!subMenuExpanded)
  };;

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      return
    }
    const html = document.querySelector('html')
    isExpanded ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible')
  }, [isExpanded])

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

  const links = (
    <>
      <Link
        className={`${location === "/" ? headerStyles.navLinkActive : headerStyles.navLink}`}
        to={"/"}
      >
        <span>{"Inicio"}</span>
      </Link>
      <Link
        className={`${location.includes("compara") ||  location.includes("productos") ? headerStyles.navLinkActive : headerStyles.navLink}`}
        to={""}
        onClick={handleClick}
      >
        <span>{"Comparar Productos"}</span>
        <Menu
          anchorEl={anchorEl}
          open={subMenuExpanded}
          onClose={handleClick}
          TransitionComponent={Fade}
          transitionDuration={300}
          sx={{
            '& .MuiMenu-list': {
              width: '235px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }
          }}
        >
          <Link to="/compara/prestamos-personales">
            <MenuItem sx={{
              font: 'normal normal 600 16px/20px Inter',
              color: colors.resalte1
            }}>
              Prestamos Personales
            </MenuItem>
          </Link>
          <Link to='/productos/seguros/auto'>
            <MenuItem sx={{
              font: 'normal normal 600 16px/20px Inter',
              color: colors.resalte1
            }}>
              Seguros de Auto
            </MenuItem>
          </Link>
        </Menu>
      </Link>
      <Link
        className={`${location === "/blog" ? headerStyles.navLinkActive : headerStyles.navLink}`}
        to={"/blog"}
      >
        <span>{"Blog"}</span>
      </Link>
      <Link
        className={`${location === "/nosotros" ? headerStyles.navLinkActive : headerStyles.navLink}`}
        to={"/nosotros"}
      >
        <span>{"Nosotros"}</span>
      </Link>
    </>
  )

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
            className=" items-center block px-3 py-2 text-black border border-black rounded"
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
      </div>

      <div id={isExpanded ? headerStyles.navDropExpanded : headerStyles.navDropHidden}>
        {links}
        {social}
      </div>

    </header>
  );
}

export default Header;

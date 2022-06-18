import React from "react";

import * as styles from "./footer.module.css"

import oasisNombre from "../images/logos/logo-nombre.svg";
import facebook from "../images/social/facebook-dark.svg";
import twitter from "../images/social/twitter-dark.svg";
import linkedin from "../images/social/linkedin-dark.svg";

function Footer() {
  return (
    <footer>
      <div id={styles.footerLinks}>

        <div id={styles.footerLogoWrapper}>
          <img id={styles.footerLogo} src={oasisNombre}></img>
        </div>

        <div id={styles.growBar}></div>

        <div id={styles.social}>
          <div id={styles.iconsTray}>
            <a
              className="font-bold text-white no-underline"
              href="https://facebook.com/oasisfinanciero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Facebook icon"
                className={styles.socialIcon}
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
                className={styles.socialIcon}
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
                className={styles.socialIcon}
                src={linkedin}
              />
            </a>
          </div>
        </div>
      </div>
      <div id={styles.legalInfo}>
        <div> © Oasis Financiero 2022 </div>
        <div id={styles.privacyPolicy}> Aviso de Privacidad </div>
      </div>

    </footer>
  )
}

export default Footer;
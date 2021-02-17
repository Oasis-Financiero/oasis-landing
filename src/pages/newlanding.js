import React from "react";
/* import { Link } from "gatsby";
 */
import Layout from "../components/layout";
import SEO from "../components/seo";
import Styles from "./newlanding.module.css";

import upperOne from "../images/landing/firstuppercurve.svg";
/* import bottomOne from "../images/landing/firstbottom.svg";
 */import phone from "../images/landing/iphone7.svg";

/* const fontColor = {
  color: 'rgb(55,96,155)'
} */

function IndexPage() {
  return (
    <Layout page="newlanding">
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Educación financiera y comparador de servicios"
      />

      <section className={Styles.first}>

        <img className={Styles.firstUpper} src={upperOne}></img>

        <div className={Styles.second}></div>

        <div className={Styles.firstText}> 
            Libera tu potencial financiero 
        </div>

        <img className={Styles.phone} src={phone}></img>

      </section>

    </Layout>
  );
}

export default IndexPage;

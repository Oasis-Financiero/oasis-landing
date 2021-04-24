import React from "react";
/* import { Link } from "gatsby";
 */
import Layout from "../components/layout";
import SEO from "../components/seo";

import character from "../images/landing/characterr.svg"
import rhombus from "../images/landing/rhombus.svg"
import vertical from "../images/landing/vertical-whirl.svg"
import horizontal from "../images/landing/horizontal-whirl.svg"
import man from "../images/landing/man-blue.png"
import woman from "../images/landing/woman-pink.png"
import calidad from "../images/landing/calidad.png"
import ayudar from "../images/landing/ayudarr.png"
import grupo from "../images/landing/grupoo.png"
import alcancia from "../images/landing/alcancia.png"
import coche from "../images/landing/coche.png"
import prestamo from "../images/landing/prestamo.png"
import tarjeta from "../images/landing/tarjeta.png"

import styles from "./index.module.css"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Educación financiera y comparador de servicios"
      />

      <section id={styles.hero}>
        <div id={styles.heroText}>
          <img id={styles.horizontalWhirl} src={horizontal}></img>
          <div id={styles.textWrapper}>
            <h1 className={styles.titleThin} id={styles.heroFirstLine}> LIBERA TU POTENCIAL </h1>
            <h1 className={styles.titleBold} id={styles.heroSecondLine}> FINANCIERO </h1>
            <p className={styles.paraText} id={styles.heroParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div id={styles.heroButtons}>
              <button className={styles.purpleBtn}> Unete ahora </button>
              <button className={styles.transparentBtn} id={styles.moreBtn}> Conocer mas </button>
            </div>
          </div>
        </div>
        <div id={styles.heroIllustration}>
          <img id={styles.characterSvg} src={character}></img>
          <img id={styles.rhombusSvg} src={rhombus}></img>
          <img id={styles.verticalWhirl} src={vertical}></img>
        </div>
      </section>

      <section id={styles.oasisFeatures}>
        <div id={styles.oasisFeaturesSquare}>
          <div id={styles.oasisFeaturesText}>
            <h2 className={styles.titleSemiBold} id={styles.featuresTitle}> APRENDE, COMPARA <span className={styles.titleAccentBlack}> Y ELIGE </span></h2>
            <h3 className={styles.subTitle} id={styles.featuresSubTitle}> entre los servicios financieros que ofrecen las Fintech y los Bancos tradicionales </h3>
            <p className={styles.paraText} id={styles.featuresPara}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u </p>
          </div>
        </div>
        <div id={styles.oasisFeaturesMain}>
          <div id={styles.userPicWrapper}>
            <img className={styles.userPic} src={man}></img>
            <img className={styles.userPic} src={woman}></img>
          </div>
          <div id={styles.featuresDisplay}>
            <div id={styles.featuresDisplayTitle} className={styles.titleThin}> COMPARA Y <span className={styles.titleAccent}> AHORRA </span> </div>
            <div id={styles.featuresWrapper}>
              <div className={styles.featuresItem}> 
                <img className={styles.featuresItemImg} src={tarjeta}></img>
                <div className={styles.titleAccentFeat}> Tarjetas de credito </div>
                <div className={styles.titleThinFeat}> 0% de recompensas sin cargo </div>
              </div>
              <div className={styles.featuresItem}> 
                <img className={styles.featuresItemImg} src={alcancia}></img>
                <div className={styles.titleAccentFeat}> Cuentas de ahorro </div>
                <div className={styles.titleThinFeat}> Gana hasta 1.20% </div>
              </div>
              <div className={styles.featuresItem}> 
                <img className={styles.featuresItemImg} src={coche}></img>
                <div className={styles.titleAccentFeat}> Seguro de auto </div>
                <div className={styles.titleThinFeat}> 60 aseguradoras </div>
              </div>
              <div className={styles.featuresItem}> 
                <img className={styles.featuresItemImg} src={prestamo}></img>
                <div className={styles.titleAccentFeat}> Prestamos personales </div>
                <div className={styles.titleThinFeat}> Tasas desde 4.45% </div>
              </div>
            </div>
              
          </div>
        </div>
      </section>


      <section id={styles.oasisProServices}>
        <div id={styles.proServicesBack}></div>
        <div id={styles.servicesRow}>
          <div className={styles.sideServWrapper}>
            <div className={styles.servicesItem}>
              <div className={styles.servIconWrapper}><img className={styles.servicesIcon} id={styles.qualityImg} src={calidad}></img></div>
              <h3 className={styles.servicesTitle}> Expertos a tu servicio </h3>
              <p className={styles.servicesPara}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
            </div>
          </div>
          <div className={styles.centerServWrapper}>
            <div className={styles.servicesItem}>
              <div className={styles.servIconWrapper}><img className={styles.servicesIcon} id={styles.helpImg} src={ayudar}></img></div>
              <h3 className={styles.servicesTitle}> Te damos ayuda rapida </h3>
              <p className={styles.servicesPara}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
            </div>
          </div>
          <div className={styles.sideServWrapper}>
            <div className={styles.servicesItem}>
              <div className={styles.servIconWrapper}><img className={styles.servicesIcon} id={styles.groupImg} src={grupo}></img></div>
              <h3 className={styles.servicesTitle}> Nos adaptamos a ti </h3>
              <p className={styles.servicesPara}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default IndexPage;

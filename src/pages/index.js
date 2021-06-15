import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";

import PostList from "gatsby-theme-blog-core/src/components/post-list";

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
import arrow from "../images/landing/arrow.png"

import styles from "./index.module.css"

export const query = graphql`
  query HomePosts {
    site {
      siteMetadata {
        siteUrl
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 4) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "DD [de] MMMM, YYYY", locale: "es")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 200, cropFocus: CENTER, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

function IndexPage({ data }) {

  const posts = data.allBlogPost.nodes

  return (
    <Layout>
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Educación financiera y comparador de servicios"
      />

      <section id={styles.hero}>
        <div id={styles.heroContent}>
          <div id={styles.heroText}>
            <img id={styles.horizontalWhirl} src={horizontal}></img>
            <div id={styles.textWrapper}>
              <h1 className={styles.titleThin} id={styles.heroFirstLine}> TRANSFORMA TU </h1>
              <h1 className={styles.titleBold} id={styles.heroSecondLine}> VIDA FINANCIERA </h1>
              <p className={styles.subTitle} id={styles.heroParagraph}>
                Oasis es el primer sitio en México que te acompaña paso a paso en el viaje para mejorar tus finanzas. Sin costos. Sin complicaciones.
              </p>
              <div id={styles.heroButtons}>
                <button className={styles.purpleBtn}> Únete ahora </button>
                <button className={styles.transparentBtn} id={styles.moreBtn}> Conocer más </button>
              </div>
            </div>
          </div>
          <div id={styles.heroIllustration}>
            <div id={styles.illustrationWrapper}>
              <img id={styles.characterSvg} src={character}></img>
              <img id={styles.rhombusSvg} src={rhombus}></img>
              <img id={styles.verticalWhirl} src={vertical}></img>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.oasisFeatures}>
        <div id={styles.oasisFeaturesContent}>
          <div id={styles.oasisFeaturesText}>
            <h2 className={styles.titleSemiBold} id={styles.featuresTitle}> APRENDE, COMPARA <span className={styles.titleAccentBlack} id={styles.featuresTitleSpan}> Y ELIGE </span></h2>
            <p className={styles.subTitle} id={styles.featuresSubTitle}> Compara los productos financieros que mejor se adapten a tus necesidades. Personaliza tu experiencia y encuentra opciones alternativas a los bancos. </p>
          </div>
          <div id={styles.featuresMain}>
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
                  <div className={styles.titleThinFeat}> 0% de comisión </div>
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
                  <div className={styles.titleAccentFeat}> Prestamos </div>
                  <div className={styles.titleThinFeat}> Tasas desde 4.45% </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
       
      </section>

      <section id={styles.oasisRoadmap}>
        <div id={styles.whyUs}>
          <h2 className={styles.titleBold} id={styles.whyUsTitle}> ¿POR QUÉ OASIS? </h2>
          <p className={styles.paraText} id={styles.whyUsPara}> 
          Oasis es el lugar en donde encontrarás la información necesaria y relevante para tomar mejores decisiones y transformar tu vida financiera. 

          Creemos en el cambio de paradigmas dentro del ecosistema financiero, innovando y promoviendo la inclusión financiera en México.

          </p>
        </div>
        <div id={styles.roadmapWrapper}>
          <div id={styles.roadmapBack}> </div>
          <div id={styles.roadmapStepsWrapper}> 
            <div className={styles.roadmapStep} id={styles.firstStep}>
              <div className={styles.stepLeft}> <div className={styles.stepNumber}> 1 </div></div>
              <div className={styles.stepRight}>
                <div className={styles.titleAccentStep}> Aprende </div>
                <div className={styles.stepPara}> Adquiere conocimientos sobre finanzas personales, ahorro inteligente y las empresas que están innovando para el beneficio de tu economía. </div>
              </div>
            </div>
            <div className={styles.roadmapStep} id={styles.secondStep}>
              <div className={styles.stepLeft}> <div className={styles.stepNumber}> 2 </div></div>
              <div className={styles.stepRight}>
                <div className={styles.titleAccentStep}> Compara </div>
                <div className={styles.stepPara}> Toma el control y personaliza tu experiencia. Solo te mostraremos la información relevante y opciones que deseas comparar. </div>
              </div>
            </div>
            <div className={styles.roadmapStep} id={styles.thirdStep}>
              <div className={styles.stepLeft}> <div className={styles.stepNumber}> 3 </div></div>
              <div className={styles.stepRight}>
                <div className={styles.titleAccentStep}> Elige </div>
                <div className={styles.stepPara}> Aplica para el producto que mejor se adapta a tus necesidades. Desde nuestra página podrás obtener toda la información antes de contratar. </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.oasisProServices}>
        <div id={styles.proServicesBack}></div>
        <div id={styles.servicesRow}>
          <div className={styles.leftServWrapper}>
            <div className={styles.servicesItem}>
              <div className={styles.servIconWrapper}><img className={styles.servicesIcon} id={styles.qualityImg} src={calidad}></img></div>
              <h3 className={styles.servicesTitle}> Finanzas sencillas </h3>
              <p className={styles.servicesPara}> Te brindamos información financiera relevante y sin complicaciones. </p>
            </div>
          </div>
          <div className={styles.centerServWrapper}>
            <div className={styles.servicesItem}>
              <div className={styles.servIconWrapper}><img className={styles.servicesIcon} id={styles.helpImg} src={ayudar}></img></div>
              <h3 className={styles.servicesTitle}> Experiencia personalizada </h3>
              <p className={styles.servicesPara}> Te damos el control para que Oasis sea tu guía financiero. </p>
            </div>
          </div>
          <div className={styles.rightServWrapper}>
            <div className={styles.servicesItem}>
              <div className={styles.servIconWrapper}><img className={styles.servicesIcon} id={styles.groupImg} src={grupo}></img></div>
              <h3 className={styles.servicesTitle}> Inclusión financiera </h3>
              <p className={styles.servicesPara}> Damos visibilidad a opciones financieras que se adaptan a tus necesidades. </p>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.recentPosts}>

        <div id={styles.recentPostsMain}>
          <div id={styles.recentPostsTitle}>
            <h2 className={styles.titleBold}> Te ayudaremos a tomar las decisiones <span className={styles.titleAccent}> financieras correctas </span> </h2>
          </div>
          <div id={styles.linkToBlog}> <Link to="/blog" id={styles.blogLink}> Ver más </Link> </div>
          <div id={styles.postsWrapper}>
            <PostList posts={posts} style="title-under" carousel={true} />
          </div>
        </div>

      </section>

      <section id={styles.newsletter}>
        <div id={styles.newsletterCTAWrapper}>
          <div id={styles.newsletterCTA}>
            <h3 className={styles.titleAccent} id={styles.newsletterCTATitle}> NEWSLETTER </h3>
            <h2 className={styles.titleBold} id={styles.newsletterCTAAction}> Suscríbete al boletín de Oasis </h2>
            <div className={styles.subTitle} id={styles.newsletterCTAText}> Regístrate para recibir nuestros mejores tips y ser de los primeros en tener acceso a nuestro comparador. </div>
            <div className={styles.subTitle} id={styles.acceptPrompt}> <input type="checkbox" id={styles.privacyCheck}/> <span id={styles.acceptText}> Acepto las políticas de privacidad de Oasis </span></div>
            <div className={styles.titleThin} id={styles.emailInputWrapper}>
              <input type="email" placeholder="Ingresa tu correo electrónico" id={styles.emailInput}/>
              <div id={styles.subscribeButton}><img id={styles.subscribeArrow} src={arrow}></img></div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default IndexPage;

import React from "react";
import { Link } from "gatsby";

import { graphql } from "gatsby"
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
import roadmap from "../images/landing/roadmap.png"
import newsletter from "../images/landing/newsletter-banner.png"

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

      <section id={styles.oasisRoadmap}>
        <div id={styles.whyUs}>
          <h2 className={styles.titleBold} id={styles.whyUsTitle}> ¿POR QUÉ OASIS? </h2>
          <p className={styles.paraText} id={styles.whyUsPara}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            uis nostrud exercitation ullamco laboris nisi ut enim ad minim veniam, quis nostr ad minim veniam, 
            quis nostrud exercitation ulla 
          </p>
        </div>
        <div id={styles.roadmapWrapper}>
          <div id={styles.roadmapBack}> <img id={styles.roadmapBackImg} src={roadmap}></img> </div>
          <div id={styles.roadmapStepsWrapper}> 
            <div className={styles.roadmapStep} id={styles.firstStep}>
              <div className={styles.stepLeft}> <div className={styles.stepNumber}> 1 </div></div>
              <div className={styles.stepRight}>
                <div className={styles.titleAccentStep}> Aprende </div>
                <div className={styles.stepPara}> Adquiere conocimientos sobre educación financiera y las tecnologías que están innovando en finanzas personales. Ingresa a nuestro blog. </div>
              </div>
            </div>
            <div className={styles.roadmapStep} id={styles.secondStep}>
              <div className={styles.stepLeft}> <div className={styles.stepNumber}> 2 </div></div>
              <div className={styles.stepRight}>
                <div className={styles.titleAccentStep}> Compara </div>
                <div className={styles.stepPara}> Adquiere conocimientos sobre educación financiera y las tecnologías que están innovando en finanzas personales. Ingresa a nuestro blog. </div>
              </div>
            </div>
            <div className={styles.roadmapStep} id={styles.thirdStep}>
              <div className={styles.stepLeft}> <div className={styles.stepNumber}> 3 </div></div>
              <div className={styles.stepRight}>
                <div className={styles.titleAccentStep}> Elige </div>
                <div className={styles.stepPara}> Adquiere conocimientos sobre educación financiera y las tecnologías que están innovando en finanzas personales. Ingresa a nuestro blog. </div>
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

      <section id={styles.recentPosts}>

        <div id={styles.recentPostsTitle}>
          <h2 className={styles.titleBold}> Te ayudaremos a tomar las decisiones <span className={styles.titleAccent}> financieras correctas </span> </h2>
        </div>
        <div id={styles.linkToBlog}> <Link to="/blog" id={styles.blogLink}> Ver todos </Link> </div>
        <div id={styles.postsWrapper}>
          <PostList posts={posts} page="home" />
        </div>
        

      </section>

      <section id={styles.newsletterSignup}>
        <img id={styles.newsletterBack} src={newsletter}></img>

      </section>

    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default IndexPage;

import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Modal from "../components/modal";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import PostList from "../components/post-list";
import mainhero from "../images/landing/mainhero.png"
import alcancia from "../images/landing/alcancia.svg"
import credito from "../images/landing/credito.svg"
import wallet from "../images/landing/wallet.svg"
import bitcoin from "../images/landing/bitcoin.svg"
import calculator from "../images/landing/calculator.png"
//import arrow from "../images/landing/arrow.png"
import * as styles from "./index.module.css"

export const query = graphql`
  query HomePosts {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 6) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "DD [de] MMMM, YYYY", locale: "es")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 450, height: 300, transformOptions: {cropFocus: CENTER, fit: COVER})
          }
        }
        imageAlt
      }
    }
    authors: allAuthorsJson {
      nodes {
        id
        name
        email
      }
    }
  }
`
const scrollHandler = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: document.querySelector('.subscribe').getBoundingClientRect().top + window.pageYOffset, // scroll so that the element is at the top of the view
      behavior: 'smooth' // smooth scroll
    })
  }
}

function IndexPage({ data }) {
  const posts = data.allBlogPost.nodes
  const [modalData, setModalData] = useState({
    isOpen: false,
    type: ''
  });
  const [isPrivacyOk, setIsPrivacyOk] = useState(false);

  return (
    <>
      <Layout>
        <SEO
          keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
          title="Educación financiera y comparador de servicios"
        />

        <section id={styles.hero}>
          <div id={styles.heroContent}>
            <div id={styles.heroText}>
              <div id={styles.textWrapper}>
                <h1 className={styles.title} id={styles.heroFirstLine}> Nosotros te ayudamos con tu caos financiero </h1>
                <p className={styles.sectionDetails} id={styles.heroParagraph}>
                  Oasis es el primer sitio en México que te acompaña paso a paso en el viaje para mejorar tus finanzas. Todo en un solo lugar. Sin complicaciones.
                </p>
                <div id={styles.heroButtons}>
                  <button className={styles.purpleBtn} onClick={scrollHandler}> Únete ahora </button>
                  <Link to="/blog"><button className={styles.transparentBtn} id={styles.moreBtn}> Conoce el blog </button></Link>
                </div>
              </div>
            </div>
            <div id={styles.heroIllustration}>
              <img id={styles.characterSvg} src={mainhero} alt='Usuario explorando opciones financieras' />
            </div>
          </div>
        </section>

        <section id={styles.oasisCompare}>
          <div id={styles.compareTextWrapper}>
            <div id={styles.compareHeader} className={styles.sectionHeader}>
              Compara y ahorra
            </div>
            <div id={styles.compareTitle} className={styles.title}>
              Descubre diversas opciones según tus necesidades
            </div>
            <div id={styles.compareDetails} className={styles.sectionDetails}>
              Personaliza tu experiencia y conoce los mejores instrumentos financieros para el beneficio de tu economía.
            </div>
          </div>
          <div id={styles.compareItemsWrapper}>
            <div id={styles.cardOne} className={styles.compareCard}>
              <div className={styles.compareCardIcon}>
                <img className={styles.cardIconImg} src={alcancia}></img>
              </div>
              <div className={styles.compareCardText}>
                <div className={styles.compareItemName}>
                  Cuentas de ahorro
                </div>
                <div className={styles.compareItemCaption}>
                  Gana hasta 4.0%
                </div>
              </div>
            </div>
            <div id={styles.cardTwo} className={styles.compareCard}>
              <div className={styles.compareCardIcon}>
                <img className={styles.cardIconImg} src={credito}></img>
              </div>
              <div className={styles.compareCardText}>
                <div className={styles.compareItemName}>
                  Tarjetas de crédito
                </div>
                <div className={styles.compareItemCaption}>
                  0% de comisión
                </div>
              </div>
            </div>
            <div id={styles.cardThree} className={styles.compareCard}>
              <div className={styles.compareCardIcon}>
                <img className={styles.cardIconImg} src={wallet}></img>
              </div>
              <div className={styles.compareCardText}>
                <div className={styles.compareItemName}>
                  Inversiones
                </div>
                <div className={styles.compareItemCaption}>
                  Crece tu dinero
                </div>
              </div>
            </div>
            <div id={styles.cardFour} className={styles.compareCard}>
              <div className={styles.compareCardIcon}>
                <img className={styles.cardIconImg} src={bitcoin}></img>
              </div>
              <div className={styles.compareCardText}>
                <div className={styles.compareItemName}>
                  Prestamos
                </div>
                <div className={styles.compareItemCaption}>
                  Contrata en 5 minutos
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.oasisCalculator}>
          <div id={styles.calculatorWrapper}>
            <div id={styles.calculatorIllustration}>
              <img id={styles.calculatorImg} src={calculator} alt='Usuario explorando opciones financieras' />
            </div>
            <div id={styles.calculatorText}>
              <div id={styles.calculatorTextWrapper}>
                <h1 className={styles.title} id={styles.calculatorFirstLine}>¡Usa nuestro comparador ahora!</h1>
                <p className={styles.sectionDetails} id={styles.heroParagraph}>
                  Encuentra el préstamo perfecto para ti al comparar las mejores alternativas.
                </p>
                <div id={styles.heroButtons}>
                  <Link to="/compara"><button className={styles.purpleBtn}> Comparar préstamos </button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.recentPosts}>

          <div id={styles.recentPostsMain}>
            <div id={styles.compareTextWrapper}>
              <div id={styles.compareHeader} className={styles.sectionHeader}>
                Artículos destacados
              </div>
              <div id={styles.blogTitle} className={styles.title}>
                Encontrarás información relevante
              </div>
              <div id={styles.compareDetails} className={styles.sectionDetails}>
                Aprende sobre finanzas personales en nuestro blog.
              </div>
            </div>
            <div id={styles.linkToBlog}> <Link to="/blog" id={styles.blogLink}> Ver más </Link> </div>
            <div id={styles.postsWrapper}>
              <PostList posts={posts} authors={data.authors.nodes} style="title-under" page={'home'} />
            </div>
          </div>

        </section>

        <section className='subscribe' id={styles.newsletter}>
          <div id={styles.newsletterCTAWrapper}>
            <div id={styles.newsletterCTA}>
              <h3 className={styles.titleAccent} id={styles.newsletterCTATitle}> NEWSLETTER </h3>
              <h2 className={styles.titleBold} id={styles.newsletterCTAAction}> Suscríbete al boletín de Oasis </h2>
              <div className={styles.subTitle} id={styles.newsletterCTAText}> Regístrate para recibir nuestros mejores tips y ser de los primeros en tener acceso a nuestras herramientas. </div>
              <div className={styles.subTitle} id={styles.acceptPrompt}>
                <input type="checkbox" id={styles.privacyCheck} value={isPrivacyOk} onChange={() => setIsPrivacyOk(!isPrivacyOk)} />
                <span id={styles.acceptText}>
                  Acepto las <span id={styles.openModal} onClick={() => setModalData({ isOpen: true, type: 'privacyPolicy' })}> políticas de privacidad </span> de Oasis
                </span>
              </div>
              <div
                className={styles.titleThin}
                id={isPrivacyOk ? styles.ctaButton : styles.ctaButtonDisabled}
                onClick={() => { if (isPrivacyOk) setModalData({ isOpen: true, type: 'subscribe' }) }}
              >
                <span className={styles.ctaText}> Quiero unirme! </span>
              </div>
            </div>
          </div>
        </section>


      </Layout>
      <Modal isOpen={modalData.isOpen} type={modalData.type} setModalData={setModalData} />
    </>
  );
}

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default IndexPage;

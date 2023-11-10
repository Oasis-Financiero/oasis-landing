import React from "react";
import { graphql } from "gatsby"
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "../components/post-list";
import * as styles from "./blog.module.css";
import treelearner from "../images/blog/treelearner.png"

export const query = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    upper: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 2) {
      nodes {
        id
        body
        excerpt
        slug
        title
        author
        date(formatString: "D [de] MMMM", locale: "es")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 450, height: 320, transformOptions: {cropFocus: CENTER, fit: COVER})
          }
        }
      }
    }
    central: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1, skip: 2) {
      nodes {
        id
        body
        excerpt
        slug
        title
        author
        date(formatString: "D [de] MMMM", locale: "es")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 675, height: 480, transformOptions: {cropFocus: CENTER, fit: COVER})
          }
        }
      }
    }
    lower: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 2, skip: 3) {
      nodes {
        id
        body
        excerpt
        slug
        title
        author
        date(formatString: "D [de] MMMM", locale: "es")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 450, height: 320, transformOptions: {cropFocus: CENTER, fit: COVER})
          }
        }
      }
    }
    tallCards: allBlogPost(
        sort: { fields: [date, title], order: DESC }, 
        filter: {tags: {in: "criptomonedas"}},
        limit: 3,
        skip: 1
      ) {
      nodes {
        id
        body
        excerpt
        slug
        title
        author
        date(formatString: "D [de] MMMM", locale: "es")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 600, height: 722, transformOptions: {cropFocus: CENTER, fit: COVER})
          }
        }
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

function BlogPage({ data }) {

  console.log(data.authors.nodes)

  return (
    <Layout page="blog">
      <SEO
        keywords={[
          `Ahorro`,
          `Inversión`,
          `finanzas`,
          `Préstamos`,
          `Seguros`,
          `Educación financiera`,
          `Finanzas personales`,
          `Consejos financieros`,
          `Guías financieras`,
          `Cómo ahorrar dinero`,
          `Cómo invertir en la bolsa`,
          `Cómo obtener un préstamo`,
          `Cómo comprar un seguro de auto`,
          `Cómo planificar la jubilación`,
        ]}
        title="Blog Oasis Financiero | Aprende sobre ahorro, inversión y finanzas."
        description="Descubre consejos, artículos y guías para mejorar tus finanzas. Aprende sobre ahorro, inversión, préstamos, seguros y más. Inicia tu educación financiera aquí."
      />

      <section id={styles.hero}>
        <div id={styles.heroContent}>
          <div id={styles.heroText}>
            <div id={styles.textWrapper}>
              <h1 className={styles.title} id={styles.heroFirstLine}> Conviértete en experto de las finanzas personales </h1>
              <p className={styles.sectionDetails} id={styles.heroParagraph}>
                Explora las publicaciones y aprende a mejorar tus finanzas, ahorrar e invertir.
              </p>
            </div>
          </div>
          <div id={styles.heroIllustration}>
            <img id={styles.characterSvg} src={treelearner} alt='Usuario explorando opciones financieras' />
          </div>
        </div>
      </section>

      <section id={styles.blogMain}>
        <div id={styles.blogWrapper}>

          <div id={styles.recentPostsTitle} className={styles.title}>
            Últimos blog posts
          </div>

          <section>
            <div className={styles.blogPostsWrapper}>
              <PostList posts={data.upper.nodes} authors={data.authors.nodes} style="double-card" />
            </div>

            <div className={styles.centralBlogPostWrapper}>
              <PostList posts={data.central.nodes} authors={data.authors.nodes} style="central-blogpost" />
            </div>

            <div className={styles.blogPostsWrapper}>
              <PostList posts={data.lower.nodes} authors={data.authors.nodes} style="double-card" />
            </div>

          </section>

          <section id={styles.bestPosts}>
            <div id={styles.bestPostsHeader}>
              <h2 className={styles.title} id={styles.bestPostsTitle}> Tu guía para entender crypto </h2>
            </div>
            <div id={styles.bestPostsList}>
              <PostList posts={data.tallCards.nodes} authors={data.authors.nodes} style="tall-textInside" carousel={false} />
            </div>
          </section>

        </div>
      </section>

    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default BlogPage;

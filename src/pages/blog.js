import React from "react";
import { graphql } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "gatsby-theme-blog-core/src/components/post-list";
import styles from "./blog.module.css";

export const query = graphql`
  query BlogQuery {
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
    carousel: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 9) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "DD [de] MMMM, YYYY", locale: "es")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 180, cropFocus: CENTER, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    tallCards: allBlogPost(sort: { fields: [date, title], order: ASC }, limit: 3) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "DD [de] MMMM, YYYY", locale: "es")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 922, cropFocus: CENTER, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

function BlogPage({ data }) {

  return (
    <Layout page="blog">
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Blog"
        description="El blog de Oasis te ayuda a aprender todo lo que necesitas saber sobre educación financiera."
      />

      <header id={styles.blogHeader}>
        <div id={styles.bannerText}>
          <h1 className={styles.titleWhite} id={styles.bannerTitle}> Educación financiera <span className={styles.titleBoldWhite}> al alcance de todos  </span></h1>
          <h2 className={styles.paraTextWhite} id={styles.bannerSubTitle}> ¿Quieres transformar tu vida financiera? </h2>
        </div>
      </header>

      <section className={styles.carousel}>
        <h2 className={styles.titleBold} id={styles.recentPostsTitle}> Nuestros últimos <span className={styles.titleAccent}> blog posts </span> </h2>
        <div id={styles.recentPostList}>
          <PostList posts={data.carousel.nodes} style="title-under" carousel={true} />
        </div>
      </section>

      <section className={styles.tallCards}>
        <h2 className={styles.titleBold} id={styles.recentPostsTitle}> Hallazgos <span className={styles.titleAccent}> interesantes </span> </h2>
        <div id={styles.bestPosts}>
          <PostList posts={data.tallCards.nodes} style="tall-textInside" carousel={false} />
        </div>
      </section>

    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default BlogPage;

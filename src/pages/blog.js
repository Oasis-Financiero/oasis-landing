import React from "react";
import { graphql } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "gatsby-theme-blog-core/src/components/post-list";
import BlogStyles from "./blog.module.css";

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
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 9) {
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
  }
`

function BlogPage({ data }) {

  const posts = data.allBlogPost.nodes

  return (
    <Layout page="blog">
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Blog"
        description="El blog de Oasis te ayuda a aprender todo lo que necesitas saber sobre educación financiera."
      />

      <header id={BlogStyles.blogHeader}>
        <div id={BlogStyles.bannerText}>
          <h1 className={BlogStyles.titleWhite} id={BlogStyles.bannerTitle}> Educación financiera <span className={BlogStyles.titleBoldWhite}> al alcance de todos  </span></h1>
          <h2 className={BlogStyles.paraTextWhite} id={BlogStyles.bannerSubTitle}> ¿Quieres transformar tu vida financiera? </h2>
        </div>
      </header>

      <section className="posts">
        <h1 className={BlogStyles.blogTitle}> Nuestros últimos blog posts </h1>
        <div className={BlogStyles.postList}>
          <PostList posts={posts} page="blog-home" />
        </div>
      </section>

    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default BlogPage;

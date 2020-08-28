import React from "react";
import { graphql } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "gatsby-theme-blog-core/src/components/post-list";
import BlogStyles from "./blog.module.css";

export const query = graphql`
  query MyPostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "DD [de] MMMM, YYYY", locale: "es")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 120, cropFocus: CENTER, fit: COVER) {
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
      />

      <section className="posts">
        <h1 className={BlogStyles.blogTitle}> Nuestros últimos blog posts </h1>
        <div className={BlogStyles.postList}>
          <PostList posts={posts} />
        </div>
      </section>

    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default BlogPage;

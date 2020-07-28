import React from "react";
import { graphql } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "gatsby-theme-blog-core/src/components/post-list"

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
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

function BlogPage({ data }) {

  const posts = data.allBlogPost.nodes

  return (
    <Layout>
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Blog"
      />

      <main>
        <PostList posts={posts} />
      </main>

    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default BlogPage;

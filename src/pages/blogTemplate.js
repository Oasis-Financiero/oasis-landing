import React from "react";
//import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import Post from "gatsby-theme-blog-core/src/components/post"

/* export const query = graphql`
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
      blogPost {
      title
      date
      body
      image {
          childImageSharp {
              fluid(fit: COVER) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
  }

`

export const query = graphql`
  query MyPostQuery {
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
` */

export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      {/* <Link to="/blog">Back to blogs</Link> */}
      <Post data={post} />
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.any.isRequired,

}
import { graphql } from "gatsby"
import PostPage from "../components/post"

export default PostPage

export const query = graphql`
  query PostPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
    $maxWidth: Int
  ) {
    site {
      siteMetadata {
        title
      }
    }
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      author
      tags
      date(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: $maxWidth)
        }
      }
      imageAlt
      socialImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
    }
    authors: allAuthorsJson {
      nodes {
        id
        name
        email
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 40, height: 40, transformOptions: {cropFocus: CENTER, fit: COVER})
          }
        }
      }
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

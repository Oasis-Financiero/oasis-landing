import { graphql } from "gatsby"
import PostsPage from "../components/posts"

export default PostsPage

/* export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
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
 */
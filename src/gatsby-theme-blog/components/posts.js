import React from "react"
import PropTypes from "prop-types";

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({posts}) => (
  <Layout>
    <SEO title="Blog" />
    <main>
      <p> <strong>Nuestros últimos blog posts</strong> </p>
      <PostList posts={posts} />
    </main>
  </Layout>
)

Posts.propTypes = {
  posts: PropTypes.node,
};

export default Posts

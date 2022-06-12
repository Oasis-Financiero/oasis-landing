import React from "react"
import PropTypes from "prop-types";

import PostList from "./post-list"

const Posts = ({ data }) => {
  const posts = data.allBlogPost.nodes
  return (
    <main>
      <PostList posts={posts} />
    </main>
  )
}

Posts.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Posts

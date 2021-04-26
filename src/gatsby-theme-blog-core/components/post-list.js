import React from "react"
import PropTypes from "prop-types";

import PostLink from "./post-link"

const PostList = ({ posts, page }) => (

  <>
    {posts.map((node) => (
      <PostLink page={page} key={node.slug} {...node} />
    ))}
  </>

)

PostList.propTypes = {
    posts: PropTypes.any.isRequired,
    page: PropTypes.string.isRequired,
};

export default PostList

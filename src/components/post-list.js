import React from "react"
import PropTypes from "prop-types";

import PostLink from "./post-link"
import * as styles from "./post-list.module.css"

const PostList = ({ posts, style }) => {

  return (
    <div className={styles.postsWrapper}>
      {
        posts.map((node) => (
          <PostLink postStyle={style} key={node.slug} {...node} />
        ))
      }
    </div>
  )
}

PostList.propTypes = {
    posts: PropTypes.any.isRequired,
    style: PropTypes.string.isRequired,
};

export default PostList

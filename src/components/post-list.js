import React from "react"
import PropTypes from "prop-types";

import PostLink from "./post-link"
import * as styles from "./post-list.module.css"

const PostList = ({ posts, authors, style, page }) => {

  return (
    <div className={page === 'home' ? styles.postsWrapperHome : styles.postsWrapperBlog}>
      {
        posts.map((node) => (
          <PostLink postStyle={style} allAuthors={authors} key={node.slug} {...node} />
        ))
      }
    </div>
  )
}

PostList.propTypes = {
    posts: PropTypes.any.isRequired,
    authors: PropTypes.any.isRequired,
    style: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
};

export default PostList

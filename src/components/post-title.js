import React from "react"
import PropTypes from "prop-types";

const PostTitle = (props) => (
  <h1 className="post-title" {...props}>
    {props.children}
  </h1>
)

PostTitle.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PostTitle

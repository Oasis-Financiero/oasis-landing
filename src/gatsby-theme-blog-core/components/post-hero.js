import React from "react"
import Image from "gatsby-image"

import PropTypes from "prop-types";
import PostHeroStyles from "./post-hero.module.css"

const PostHero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <Image
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.title}
        className={PostHeroStyles.image}
      />
    )}
  </>
)

PostHero.propTypes = {
    post: PropTypes.node.isRequired,
}

export default PostHero
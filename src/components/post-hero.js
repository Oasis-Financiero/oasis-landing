import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import PropTypes from "prop-types";
import * as PostHeroStyles from "./post-hero.module.css"

const PostHero = ({ post }) => {
  return (
    <>
      {post?.image?.childImageSharp && (
        <GatsbyImage
          image={post.image.childImageSharp.gatsbyImageData}
          alt={post.imageAlt ? post.imageAlt : post.title}
          className={PostHeroStyles.image}
        />
      )}
    </>
  )
}

PostHero.propTypes = {
    post: PropTypes.any.isRequired,
}

export default PostHero
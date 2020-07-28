import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import PostStyles from "./post-link.module.css"
import Img from "gatsby-image"

const PostLink = ({ title, slug, date, excerpt, image}) => (
  <article className={PostStyles.postLink}>
    <div className={PostStyles.postLinkImage}>
      <Img fluid={image.childImageSharp.fluid}/>
    </div>
    <div className={PostStyles.postLinkInfo}>
      <header className="post-link-header">
        <h2>
          <Link to={slug}>{title || slug}</Link>
        </h2>
        <small>{date}</small>
      </header>
      <section className="post-link-excerpt">
        <p>{excerpt}</p>
      </section>
    </div>
  </article>
)

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.any,
}

export default PostLink

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
//import "../../css/post-link.css" */

const PostLink = ({ title, slug, date, excerpt}) => (
  <article className="post-link">
    {/* <div className="post-link-image">
      <img src={image}></img>
    </div> */}
    <div className="post-link-info">
      <header className="post-link-header">
        <h2>
          Hello Hello
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
  image: PropTypes.node.isRequired,
}

export default PostLink

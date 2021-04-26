import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import PostStyles from "./post-link.module.css"
import Img from "gatsby-image"

const PostLink = ({ title, slug, date, excerpt, image, page}) => {

  let linkStyle

  switch(page){
    case "home":
      linkStyle =
      <article className={PostStyles.articleHome}>
        <Link to={slug} className={PostStyles.postLink}>
            <div className={PostStyles.postLinkImageHome}>
              <Img className={PostStyles.imageHome} fluid={image.childImageSharp.fluid}/>
            </div>
            <div className={PostStyles.linkInfoHome}>
              <header className="post-link-header">
                <div className={PostStyles.titleTextHome}>{title || slug}</div>
              </header>
            </div>
        </Link>
      </article>
    break;

    case "blog-home":
    default:
      linkStyle =
      <article className={PostStyles.articleBlogHome}>
        <Link to={slug} className={PostStyles.postLink}>
            <div className={PostStyles.postLinkImage}>
              <Img className={PostStyles.image} fluid={image.childImageSharp.fluid}/>
            </div>
            <div className={PostStyles.postLinkInfo}>
              <header className="post-link-header">
                <h2 className={PostStyles.titleText}>
                {title || slug}
                </h2>
              </header>
              <section>
                <p className={PostStyles.excerptText}>{excerpt}</p>
              </section>
              <div className={PostStyles.data}>
                <div className={PostStyles.dataText}><small>{date}</small></div>
              </div>
            </div>

        </Link>
      </article>
    break;
  }

  return linkStyle

}

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.any,
}

export default PostLink

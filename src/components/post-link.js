import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import * as PostStyles from "./post-link.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const PostLink = ({ title, slug, date, excerpt, image, imageAlt, postStyle}) => {

  let linkStyle

  switch(postStyle){
    case "title-under":
      linkStyle =
      <article className={PostStyles.articleHome}>
            <div className={PostStyles.postLinkImageHome}>
              <GatsbyImage className={PostStyles.imageHome} image={image.childImageSharp.gatsbyImageData}
                alt={imageAlt || title} placeholder={"blurred"} />
            </div>
            <div className={PostStyles.linkInfoHome}>
              <header className="post-link-header">
                <div className={PostStyles.titleTextHome}>{title || slug}</div>
              </header>
              <div className={PostStyles.articleHomeLink}>
                <Link to={slug} className={PostStyles.postLink}>
                  Leer articulo
                </Link>
              </div>
            </div>
      </article>
    break;

    case "title-under-long":
      linkStyle =
      <article className={PostStyles.articleLong}>
            <div className={PostStyles.postLinkImage}>
              <GatsbyImage className={PostStyles.imageHome} image={image.childImageSharp.gatsbyImageData}
                alt={imageAlt || title}/>
            </div>
            <div className={PostStyles.linkInfoHome}>
              <header className="post-link-header">
                <div className={PostStyles.titleTextLong}>{title || slug}</div>
              </header>
              <div className={PostStyles.articleLongLink}>
                <Link to={slug} className={PostStyles.postLink}>
                  Leer articulo
                </Link>
              </div>
            </div>
      </article>
    break;

    case "tall-textInside":
      linkStyle =
      <article className={PostStyles.tall}>
            <div className={PostStyles.postLinkImageTall}>
              <GatsbyImage className={PostStyles.imageTall} image={image.childImageSharp.gatsbyImageData}
                alt={imageAlt || title}/>
            </div>
            <div className={PostStyles.linkInfoTall}>
              <Link to={slug} className={PostStyles.postLink}>
                <header className="post-link-header">
                  <div className={PostStyles.titleTextTall}>{title || slug}</div>
                </header>
              </Link>
            </div>
      </article>
    break;

    case "horizontal-card":
    default:
      linkStyle =
      <article className={PostStyles.articleBlogHome}>
        <Link to={slug} className={PostStyles.postLink}>
            <div className={PostStyles.postLinkImage}>
              <GatsbyImage className={PostStyles.image} image={image.childImageSharp.gatsbyImageData}
                alt={imageAlt || title}/>
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

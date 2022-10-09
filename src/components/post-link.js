import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import * as PostStyles from "./post-link.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const PostLink = ({ title, slug, excerpt, date, body, image, imageAlt, postStyle, tags }) => {

  console.log(date)
  let linkStyle

  switch(postStyle){
    case "title-under":
    default:
      linkStyle =
      <article className={PostStyles.articleHome}>
            <div className={PostStyles.postLinkImageHome}>
              <GatsbyImage className={PostStyles.imageHome} image={image.childImageSharp.gatsbyImageData}
                alt={imageAlt || title} placeholder={"blurred"} />
            </div>
            <div className={PostStyles.linkInfoHome}>
              <Link to={slug} className={PostStyles.postLink}>
                <header className="post-link-header">
                  <div className={PostStyles.titleTextHome}>{title || slug}</div>
                </header>
              </Link>
            </div>
      </article>
    break;

    case "tall-textInside":
      linkStyle =
      <article className={PostStyles.tall}>
        <Link to={slug} className={PostStyles.postLinkLight}>
            <div className={PostStyles.postLinkImageTall}>
              <GatsbyImage className={PostStyles.imageTall} image={image.childImageSharp.gatsbyImageData}
                alt={imageAlt || title}/>
            </div>
            <div className={PostStyles.linkInfoTall}>
              
                <header className="post-link-header">
                  <div className={PostStyles.titleTextTall}>{title || slug}</div>
                </header>
              
            </div>
        </Link>
      </article>
    break;

    case "central-blogpost":
      linkStyle =
      <article className={PostStyles.centralBlogPost}>
        <div className={PostStyles.cbpTextColumn}>
          <div className={PostStyles.cbpTextWrapper}>
            <h4 className={PostStyles.cbpCategory}>
              {tags[0].slice(0, 1).toUpperCase()+tags[0].slice(1)}
            </h4>
            <Link to={slug} className={PostStyles.postLink}>
              <header className="post-link-header">
                <div className={PostStyles.cbpPostTitle}>{title || slug}</div>
              </header>
            </Link>
            <GatsbyImage className={PostStyles.cbpImageMobile} image={image.childImageSharp.gatsbyImageData}
              alt={imageAlt || title}/>
            <div className={PostStyles.cbpPostInfo}>
              {`Genaro Corona - ${date} (${Math.floor(body.length / 5 / 300)} min lectura)`}
            </div>
            <p className={PostStyles.cbpExcerptText}>
              {excerpt} <span> <Link to={slug} className={PostStyles.inlinePostLink}> Leer más </Link> </span>
            </p>
          </div>
        </div>
        <div className={PostStyles.cbpImageColumn}>
          <GatsbyImage className={PostStyles.cbpImageDesktop} image={image.childImageSharp.gatsbyImageData}
            alt={imageAlt || title}/>
        </div>
      </article>
    break;

    case "double-card":
      linkStyle =
      <article className={PostStyles.doubleCardBlogPost}>
        <div className={PostStyles.doubleCardImageColumn}>
          <GatsbyImage className={PostStyles.doubleCardImage} image={image.childImageSharp.gatsbyImageData}
            alt={imageAlt || title}/>
        </div>
        <div className={PostStyles.doubleCardTextColumn}>
          <div className={PostStyles.doubleCardTextWrapper}>
            <h4 className={PostStyles.doubleCardCategory}>
              {tags[0].slice(0, 1).toUpperCase()+tags[0].slice(1)}
            </h4>
            <Link to={slug} className={PostStyles.postLink}>
              <header className="post-link-header">
                <div className={PostStyles.doubleCardPostTitle}>{title || slug}</div>
              </header>
            </Link>
            <div className={PostStyles.doubleCardPostInfo}>
              {`Genaro Corona - ${date}`}
            </div>
            <div className={PostStyles.doubleCardReadingTime}>
              {`(${Math.floor(body.length / 5 / 300)} min lectura)`}
            </div>
            <p className={PostStyles.doubleCardExcerptText}>
              {excerpt.slice(0, 130) + '...'}
            </p>
          </div>
        </div>
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

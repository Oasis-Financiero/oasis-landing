import React from "react"
import PropTypes from "prop-types";
import moment from "moment";
import 'moment/locale/es'

import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../../components/seo";

import Layout from "../../components/layout";
import PostTitle from "gatsby-theme-blog-core/src/components/post-title"
import PostDate from "gatsby-theme-blog-core/src/components/post-date"
import PostHero from "gatsby-theme-blog-core/src/components/post-hero"
import styles from "./post.module.css"

import facebook from "../../images/social/facebook-dark.svg";
import twitter from "../../images/social/twitter-dark.svg";
import linkedin from "../../images/social/linkedin-dark.svg";

moment.locale('es')

const Post = ({ data }) => {
  const post = data.blogPost
  return (
    <Layout page="blogpost">
    <SEO
      keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
      title={post.title}
      description={post.excerpt}
      page='blogpost' // Changes the title template for the page. See SEO component.
    />
    <main id={styles.articleWindow}>
      <article id={styles.article}>
        <header>
          <PostTitle className={styles.title}>{post.title}</PostTitle>
          <div className={styles.shareRow}>
            <PostDate className={styles.date} date={post.date}>{moment(post.date).format('DD [de] MMMM, YYYY')}</PostDate>
            <div className={styles.iconsPanel} >
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://oasisfinanciero.mx${post.slug}`}>
                <img
                  alt="Facebook icon"
                  className={styles.socialIcon}
                  src={facebook}
                />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=https://oasisfinanciero.mx${post.slug}&text=${post.title}`}>
                <img
                  alt="Twitter icon"
                  className={styles.socialIcon}
                  src={twitter}
                />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://oasisfinanciero.mx${post.slug}&title=${post.title}`}>
                <img
                  alt="Linkedin icon"
                  className={styles.socialIcon}
                  src={linkedin}
                />
              </a>
            </div>
            
          </div>
          
          <PostHero post={post} className={styles.hero}/>
        </header>
        <section className={styles.body}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </main>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Post

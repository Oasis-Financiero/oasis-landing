import React from "react"
import PropTypes from "prop-types";
import moment from "moment";
import 'moment/locale/es'

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react";
import SEO from "./seo";

import Layout from "./layout";
import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostHero from "./post-hero"
import * as styles from "./post.module.css"

import facebook from "../images/social/facebook-dark.svg";
import twitter from "../images/social/twitter-dark.svg";
import linkedin from "../images/social/linkedin-dark.svg";

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
            <div id={styles.postData}>
              <span id={styles.author}>{post.author}</span>
              <PostDate className={styles.date} date={post.date}>{moment(new Date(post.date)).format('DD [de] MMMM, YYYY')}</PostDate>
            </div>

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
          <div className={styles.hero}>
            <PostHero post={post}/>
          </div>
        </header>
        <section className={styles.body}>
          <MDXProvider
            components={{
              h1: function headerOne(props) { return <h1 className={styles.articleTitle} {...props} /> },
              h2: function headerTwo(props) { return <h2 className={styles.articleSubtitle} {...props} /> },
              p: function para(props) { return <p className={styles.articlePara} {...props} /> },
            }} 
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
          
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

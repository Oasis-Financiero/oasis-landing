import React from "react"
import PropTypes from "prop-types";
import moment from "moment";
import 'moment/locale/es'
moment.locale('es')

import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../../components/seo";

import Layout from "../../components/layout";
import PostTitle from "gatsby-theme-blog-core/src/components/post-title"
import PostDate from "gatsby-theme-blog-core/src/components/post-date"
import PostHero from "gatsby-theme-blog-core/src/components/post-hero"
import PostStyles from "./post.module.css"

import facebook from "../../images/social/facebook-dark.svg";
import twitter from "../../images/social/twitter-dark.svg";
import linkedin from "../../images/social/linkedin-dark.svg";

const Post = ({ data }) => {
  const post = data.blogPost
  return (
    <Layout>
    <SEO
      keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
      title={post.title}
      page="blog"
    />
    <main>
      <article >
        <header>
          <PostTitle className={PostStyles.title}>{post.title}</PostTitle>
          <div className={PostStyles.shareRow}>
            <PostDate className={PostStyles.date} >{moment(post.date).format('DD [de] MMMM, YYYY')}</PostDate>
            <div className={PostStyles.iconsPanel} >
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://oasis-test.netlify.app${post.slug}`}>
                <img
                  alt="Facebook icon"
                  className={PostStyles.socialIcon}
                  src={facebook}
                />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=https://oasis-test.netlify.app${post.slug}&text=${post.title}`}>
                <img
                  alt="Twitter icon"
                  className={PostStyles.socialIcon}
                  src={twitter}
                />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://oasis-test.netlify.app${post.slug}&title=${post.title}`}>
                <img
                  alt="Linkedin icon"
                  className={PostStyles.socialIcon}
                  src={linkedin}
                />
              </a>
            </div>
            
          </div>
          
          <PostHero post={post} className={PostStyles.hero}/>
        </header>
        <section className={PostStyles.body}>
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

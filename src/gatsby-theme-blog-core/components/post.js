import React from "react"
import PropTypes from "prop-types";

import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../../components/seo";

import Layout from "../../components/layout";
import PostTitle from "gatsby-theme-blog-core/src/components/post-title"
import PostDate from "gatsby-theme-blog-core/src/components/post-date"
import PostHero from "gatsby-theme-blog-core/src/components/post-hero"
import PostStyles from "./post.module.css"

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
          <PostTitle className={PostStyles.title} >{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
          <PostHero post={post} className={PostStyles.hero}/>
        </header>
        <section className="post-body">
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

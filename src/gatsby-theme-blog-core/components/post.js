import React from "react"
import PropTypes from "prop-types";

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/layout";
import PostTitle from "gatsby-theme-blog-core/src/components/post-title"
import PostDate from "gatsby-theme-blog-core/src/components/post-date"
import PostHero from "gatsby-theme-blog-core/src/components/post-hero"

const Post = ({ data }) => {
  const post = data.blogPost
  return (
    <Layout>
    <main>
      <article className="postinga">
        <header>
          <PostHero post={post} />
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
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

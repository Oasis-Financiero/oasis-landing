import React from "react"
import PropTypes from "prop-types";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import PostLink from "./post-link"
import styles from "./post-list.module.css"

const PostList = ({ posts, page, carousel }) => {

  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: styles.slides,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className={carousel ? styles.carousel : styles.postsWrapper}>
      {carousel ? 
        <Slider {...settings}>
          {posts.map((node) => (
            <PostLink page={page} key={node.slug} {...node} />
          ))}
        </Slider>
      : 
        posts.map((node) => (
          <PostLink page={page} key={node.slug} {...node} />
        ))
      }
    </div>
  )


}

PostList.propTypes = {
    posts: PropTypes.any.isRequired,
    page: PropTypes.string.isRequired,
    carousel: PropTypes.bool.isRequired
};

export default PostList

import React from "react"
import moment from "moment";
import PropTypes from "prop-types";

const PostDate = (props) => <time className="post-date" dateTime={moment(new Date(props.date)).toISOString()} {...props} />

PostDate.propTypes = {
    date: PropTypes.any.isRequired,
}

export default PostDate
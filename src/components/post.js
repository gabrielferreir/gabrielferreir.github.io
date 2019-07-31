import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import {navigate} from '@reach/router';

import "./post.css"

const Post = ({path, image, title, description}) => {

    return (
        <div className='post' onClick={() => {
            navigate(path)
        }}>
            <div className='post__content'>
                <h1 className='post__title'>{title}</h1>
                <h2 className='post__description'>{description}</h2>
            </div>
            <img className='post__image' src={image}/>
        </div>
    )
}

Post.propTypes = {
    path: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Post

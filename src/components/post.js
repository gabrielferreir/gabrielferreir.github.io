import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

import "./post.css"

const Post = ({path, title, description, date}) => {
    return (
        <Link to={path}>
            <div className="post">
                <div className="post__content">
                    <h1 className="post__data">{toDate(date)}</h1>
                    <h1 className="post__title">{title}</h1>
                    <h2 className="post__description">{description}</h2>
                </div>
                {/*<img className='post__image' src={image}/>*/}
            </div>
        </Link>
    )
}

const toDate = date => {
    const formatedDate = new Date(date)
    return `${formatedDate.getDate().toString().padStart(2, '0')}/${formatedDate.getMonth().toString().padStart(2, '0')}/${formatedDate.getFullYear()}`
}

Post.propTypes = {
    path: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default Post

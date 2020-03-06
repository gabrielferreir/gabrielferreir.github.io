import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./post.css"

const Post = ({ path, image, title, description, date }) => {
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
  return `${formatedDate.getDate()}/${nameMonth(formatedDate.getMonth())}`
}

const nameMonth = month => {
  switch (month) {
    case 0:
      return "JAN"
    case 1:
      return "FEV"
    case 2:
      return "MAR"
    case 3:
      return "ABR"
    case 4:
      return "MAI"
    case 5:
      return "JUN"
    case 6:
      return "JUL"
    case 7:
      return "AGO"
    case 8:
      return "SET"
    case 9:
      return "OUT"
    case 10:
      return "NOV"
    case 11:
      return "DEZ"
  }
}

Post.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Post

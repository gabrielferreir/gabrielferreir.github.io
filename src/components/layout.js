import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gabriel Ferreira</title>
      </Helmet>
      <aside className="navbar">
        <Link to={"/"}>
          <header className="navbar__header">
            <div className="navbar__image"></div>
            <div>
              <h1 className="navbar__name">Gabriel Ferreira</h1>
              <h2 className="navbar__work">Fullstack Developer</h2>
            </div>
          </header>
        </Link>
      </aside>
      <main className="main">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

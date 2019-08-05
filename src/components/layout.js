import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({children}) => {

    return (
        <div className='wrapper'>
            <aside className='navbar'>
                <header className='navbar__header'>
                    <div className='navbar__image'></div>
                    <div>
                        <h1 className='navbar__name'>Gabriel Ferreira</h1>
                        <h2 className='navbar__work'>Fullstack Developer</h2>
                    </div>
                </header>
            </aside>
            <main className='main'>{children}</main>
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout

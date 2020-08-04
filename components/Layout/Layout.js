import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
    return (
        <>
            <header></header>
            <main>
                {children}
            </main>
            <footer></footer>
        </>
    )
}

Layout.propTypes = {}
Layout.defaultProps = {}

export default Layout;
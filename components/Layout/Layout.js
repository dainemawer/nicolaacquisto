import React from 'react'
import PropTypes from 'prop-types'

import SiteHeader from '../Header/Header';
import Footer from '../Footer/Footer';

import {Main} from './Layout.styled'

const Layout = ({ children }) => {
    return (
        <>
            <SiteHeader />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

Layout.propTypes = {}
Layout.defaultProps = {}

export default Layout;
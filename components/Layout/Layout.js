import React from 'react'
import PropTypes from 'prop-types'

import SiteHeader from '../Header/Header';
import Footer from '../Footer/Footer';

import {Main} from './Layout.styled'

const Layout = ({ children, className }) => {
    return (
        <>
            <SiteHeader />
            <Main className={className}>
                {children}
            </Main>
            <Footer />
        </>
    )
}

Layout.propTypes = {}
Layout.defaultProps = {}

export default Layout;
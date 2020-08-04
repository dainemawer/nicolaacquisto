import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout/Layout'));

const About = () => {
    return (
        <Layout>
            <h1>About</h1>
        </Layout>
    )
}

About.propTypes = {}
About.defaultProps = {}

export default About;
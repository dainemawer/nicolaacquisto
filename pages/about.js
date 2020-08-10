import React from 'react'
import PropTypes from 'prop-types'
import Content from '../components/About/Content'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout/Layout'));

const About = () => {
    return (
        <Layout>
            <Content />
        </Layout>
    )
}

About.propTypes = {}
About.defaultProps = {}

export default About;
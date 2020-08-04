import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout/Layout'));

const Work = () => {
    return (
        <Layout>
            <h1>Work</h1>
        </Layout>
    )
}

Work.propTypes = {}
Work.defaultProps = {}

export default Work;
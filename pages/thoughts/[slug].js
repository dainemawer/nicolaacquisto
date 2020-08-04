import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SingleThoughts = () => {
    return (
        <Layout>
            <h1>Single Thought</h1>
        </Layout>
    )
}

SingleThoughts.propTypes = {}
SingleThoughts.defaultProps = {}

export default SingleThoughts;
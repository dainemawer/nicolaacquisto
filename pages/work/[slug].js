import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SingleWork = () => {
    return (
        <Layout>
            <h1>Single Work</h1>
        </Layout>
    )
}

SingleWork.propTypes = {}
SingleWork.defaultProps = {}

export default SingleWork;
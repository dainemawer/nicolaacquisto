import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout/Layout'));

const SayHi = () => {
    return (
        <Layout>
            <h1>Say Hi</h1>
        </Layout>
    )
}

SayHi.propTypes = {}
SayHi.defaultProps = {}

export default SayHi;
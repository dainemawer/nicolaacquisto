import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout/Layout'));

const Thoughts = () => {
    return (
        <Layout>
            <h1>Thoughts</h1>
        </Layout>
    )
}

Thoughts.propTypes = {}
Thoughts.defaultProps = {}

export default Thoughts;
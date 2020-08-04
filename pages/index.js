import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout/Layout'));

const Home = () => {
    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    )
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home;
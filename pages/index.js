import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout/Layout'));
const Banner = dynamic(() => import('../components/Banner/Banner'));

const Home = () => {
    return (
        <Layout>
            <Banner />
        </Layout>
    )
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home;
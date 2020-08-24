import React from 'react'
import dynamic from 'next/dynamic'
import Meta from '../components/Meta/Meta'

const Layout = dynamic(() => import('../components/Layout/Layout'));
const Banner = dynamic(() => import('../components/Banner/Banner'));

const Home = () => {

    return (
        <>
            <Layout className="home">
                <Meta
                    title="Home | Nicola Acquisto"
                    description="The Home of Nicola Acquisto"
                    url="https://dainemawer.com/home"
                />
                <Banner />
            </Layout>
        </>
    )
}

export default Home;
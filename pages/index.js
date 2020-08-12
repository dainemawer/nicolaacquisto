import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import Splash from '../components/Splash/Splash'

const Layout = dynamic(() => import('../components/Layout/Layout'));
const Banner = dynamic(() => import('../components/Banner/Banner'));

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect( () => {

        setTimeout(() => {
            setLoading(false);
        }, 1500 );

        loading && document.body.classList.add('splash-bg');

        return () => {
            document.body.classList.remove('splash-bg')
        }
    } );

    return (
        <>
            {loading ? (
                <Splash />
            ) : (
                <Layout>
                    <Banner />
                </Layout>
            )}

        </>
    )
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home;